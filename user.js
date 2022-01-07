const mysql = require('mysql');
const Promise = require('bluebird');
Promise.promisifyAll(require("mysql/lib/Connection").prototype)

const dbinfo = {
    host: "localhost",
    user: "mayur",
    password: "password",
    database: "project1"
};

const record = {
    sender: "Mayur",
    reciever: "Vikky",
    msg: "We got placed"
}

const addRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,reciever,msg) values(?,?,?)`;
    await connection.queryAsync(sql,[record.sender,record.reciever,record.msg]);
    await connection.endAsync();
    console.log("Message Record Added");
}

//addRecord(record);

const getRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log("Message Record Added");
    console.log(list)
    return list;
}

module.exports = { addRecord , getRecord }
//getRecord();