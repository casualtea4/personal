module.exports = {
    getUser: (req,res) => {
        const db = req.app.get('db')

        db.user.get_user().then(e=>{
            res.status(200).send(e)
        })
        .catch(err => console.log(err))
    },
    update: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {firstName,lastName,img} = req.body

        db.user.update(firstName,lastName,img,id).then(res => {
            res.status(200).send(res.data)
        })
        .catch(err => {res.status(500).send(err)})
    }
}