let mysql = require('mysql');

const bcrypt = require('bcrypt');
const saltRounds = 10; // amount of rounds a plaintext goes through to actually get hashed
// ~10 hashes per second

let db = require('../Database/database');

let registerUser = (user_name, email_address, password,
  type_of_account, current_address, res) => {


    bcrypt.hash(password, saltRounds, function(err, hash) {

        let sql = "INSERT INTO tbl_all_users(??,??,??,??,??) values(?,?,?,?,?)";
        let data = ['User_Name', 'Email_Address', 'Password', 'Type_Of_Account', 'Current_Address',
                    user_name, email_address, hash, type_of_account, current_address];

        let query = mysql.format(sql, data);

        db.query(query, (error, results, fields)=>{
          if(error){
            res.status(400).send({
              message: 'User registration failed'
            })
          }else {
            res.status(200).send({message: 'Registration Successful'});
          }
        });
    });


}


const initRegistrationApp = (app) => {
  app.post('/register', (req, res)=>{
      console.log(req.body);

      let {user_name, email_address, password,
        type_of_account, current_address} = req.body;

      registerUser(user_name, email_address, password,
        type_of_account, current_address, res);
  });
};

module.exports = initRegistrationApp;
