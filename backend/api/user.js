const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, equalsOrError, validatesLength } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = (req, res) => {
        const user = { ...req.body }
        
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            validatesLength(user.password,
                'A Senha tem que ter pelo menos 4 caracteres')
            equalsOrError(user.password, user.confirmPassword, 
                'Senhas não conferem')
        } catch(msg) {
            res.status(400).send(msg)
        }
        
        user.password = encryptPassword(user.password)
        delete user.confirmPassword
        
        app.db('users')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}