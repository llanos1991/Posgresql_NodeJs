const { Pool} = require('pg');
const { port } = require('pg/lib/defaults');

const config = {
    user:"postgres",
    host:"127.0.0.1",
    database:"library",
    password:"cllanos",
    port:5432
};

const pool = new Pool(config); //instancia de la clase Pool

const getBooks = async () => {      //funcion getBooks
        try{
            const res =await pool.query('select * from books');
            console.log(res.rows);
            pool.end();
        }
        catch(err){
            console.log(err);
        }
    /*  const res =await pool.query('select * from books');
        console.log(res.rows);
        pool.end(); */
};

const insertUser = async () => {       //funcion insertUser
         try{
            const text='INSERT INTO users(username,password) VALUES($1 , $2)'
            const values=['juan','juan1234']
            const res=await pool.query(text,values);
            console.log(res);
            pool.end();
         }
         catch(err) {
            console.log(err);
         }
};

const deleteUser = async () => {       //funcion insertUser
    try{
       const text='DELETE FROM users WHERE username= $1';
       const values=['juan'];
       const res=await pool.query(text,values);
       console.log(res);
       pool.end();
    }
    catch(err) {
       console.log(err);
    }
};

const updateUser = async () => {       //funcion insertUser
    try{
       const text='UPDATE users SET username= $1 WHERE username= $2';
       const values=['christopher','cri'];
       const res=await pool.query(text,values);
       console.log(res);
       pool.end();
    }
    catch(err) {
       console.log(err);
    }
};
//getBooks();
//insertUser();
//deleteUser();
updateUser();