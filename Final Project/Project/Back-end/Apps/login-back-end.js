let mysql = require('mysql');
let bcrypt = require('bcrypt');
const saltRounds = 10;
let db = require('../Database/database');

let loginFunc = (req, res) => {
    let{email, password} = req.body;
    //console.log(email+" "+password);

    if(email && password){

        var sql = 'SELECT User_Name, Password from tbl_all_users where ??=?';
        var data = ['Email_Address', email];

        var query = mysql.format(sql, data);
        //console.log(query);

        let noUser = 'The Email Address or Password is Incorrect';


        db.query(query, (error, results, fields) => {
            if(error){
                res.json({message: noUser}).status(400);
            }
            else{
                if(results.length == 0){
                    res.json({message: noUser}).status(400);
                }else{
                    let user = results[0];
                    let hash = user.Password;

                    bcrypt.compare(password, hash, function(err, res1) {
                        if(error){
                          res.send({message: 'Login error'}).status(200);
                        }else if (res1 == true) {
                          res.status(200).send({message: 'Login Successful'});
                          console.log('Hello '+results[0].User_Name);
                        }
                        else {
                          res.send({message: 'Login error'}).status(200);
                        }
                    });


                }
            }
        });
    }else{
        res.json({message: 'Invalid Form Submission'}).status(400);
    }
}

const initLoginApp = (app) => {
    app.post('/login', loginFunc);
};

module.exports = initLoginApp;
