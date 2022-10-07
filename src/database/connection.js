import { createConnection } from 'mysql'

var con = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'documentationapp'
})

// con.connect( (err) => {
//     if (err) throw err
//     console.log("Connected!")
// })


function create_page_info(name, site, user, pass, ftp, userftp, passftp, vpn, content){

    con.connect();

    let sql = `INSERT INTO info (name, site, user, pass, ftp, userftp, passftp, vpn, content) VALUES ('${name}','${site}','${user}','${pass}','${ftp}','${userftp}','${passftp}','${vpn}','${content}');`

    con.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('información registrada');
    });
    
    con.end();

}

function read_page_info(){

}

function update_page_info(){

}

function delete_page_info(){

}

