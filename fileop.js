const fs = require('fs');


const readFile = (callback) => {
    fs.readFile(__dirname+'/database/userlogin.json','utf-8',(err,data) => {
        if(err) throw err;
        else callback(data);
    });
}

const writeFile = (data2Right,callback) => {
    fs.writeFile(__dirname+'/database/userlogin.json',data2Right, err => {
        if(err) callback(false);
        else callback(true);
    })
}

module.exports = {readFile,writeFile};