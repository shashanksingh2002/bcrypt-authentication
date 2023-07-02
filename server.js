const express = require('express');
const port = 3000;
const app = express();
const bcrypt = require('bcrypt');
const {readFile, writeFile} = require(__dirname+'/fileop.js');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
    res.send('running');
});

const checkUserAlreadyInDb = (data,array) => {
    const dbEmailIndex = array.findIndex(d => d.email===data.email);
    if(dbEmailIndex !== -1) return true;
    else return false;
};

app.post('/signup', (req,res) => {
    if(req.body.token === 'qwertyuiop1029384756'){
        bcrypt.hash(req.body.password,10)
        .then(data => {
            const userDetails = {
                email: req.body.email,
                password: data
            }
            readFile((data)=>{
                const jsonArrUserDetails = JSON.parse(data);
                if(checkUserAlreadyInDb(userDetails,jsonArrUserDetails)) res.json('user already exists');
                else {
                    jsonArrUserDetails.push(userDetails);
                    const detailsJSON = JSON.stringify(jsonArrUserDetails);
                    writeFile(detailsJSON, (boolData) => {
                        if(boolData)  res.status(200).redirect('/index.html');
                        else res.status(404).json('error in writing the file');
                    })
                }
            });
        })
        .catch(err => res.status(404).json('Some error occured ',err));
    }
    else res.json('wrong authentication')
});

app.post('/login', (req,res) => {
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;
    readFile((data) => {
        const jsonArrUserDetails = JSON.parse(data);
        const dbEmailIndex = jsonArrUserDetails.findIndex(d => d.email===inputEmail);
        if(dbEmailIndex !== -1){
            const dbIndexPassword = jsonArrUserDetails[dbEmailIndex].password;
            bcrypt.compare(inputPassword,dbIndexPassword, (err,result) => {
                if(err) res.status(404).json('Some error hashing password ',err);
                else if(result) res.redirect('/mainpage.html');
                else res.json('Wrong password');
            });
        }
        else res.redirect('/signup.html');
    });
});



app.listen(port,() => {
    console.log('App is running successfully at port:',port);
})