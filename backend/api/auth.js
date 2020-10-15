const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async(req, res) => {
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if(!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('Email ou Senha inválidos!')
            
    }

    return { signin }
}