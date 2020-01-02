const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req,res) => {
        const db = req.app.get('db');
        const {email,password} = req.body;
        const {session} = req
        
        let check = await db.user.check_user(email);
        const existingUser = check[0];
        if (existingUser){
            return res.status(409).send('username already used')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        let user = await db.user.register_user(email,hash)
        const newUser = user[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    login: async(req,res) => {
        const db = req.app.get('db');
        const {email,password} = req.body;
        const {session} = req;

        let user = await db.user.check_user(email)
        user = user[0];
        if(!user){
            return res.status(400).send('username not found')
        }
        const authorized = bcrypt.compareSync(password,user.password);
        if(authorized){
            delete user.password;
            session.user = user;
            res.status(202).send(session.user)
        }else{
        res.status(401).send('incorrect password')
        }
    },
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}