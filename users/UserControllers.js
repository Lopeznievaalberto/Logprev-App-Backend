

const User = require('../users/UserModel');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/config');
const UsersControllers = {};

// UsersControllers.getAll = async (req, res) => {
//      let rol = req.body.rol;
//     try {
//          if (rol == "admin") {
//             let result = await User.find({});
//             if (result.length > 0) {
//                 res.send(result)
//             } else {
//                 res.send({ "Message": "Usuario no encontrado" })
//             }
//         }
//     } catch (error) {
//         res.send(error);
//     }
// };
UsersControllers.getAllUsers = async (req, res) => {

    try {
        let result = await User.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
        // console.log(error);
    }
}
UsersControllers.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {
        let user = await User.create({
            name: req.body.name,
            dni: req.body.dni,
            email: req.body.email,
            password: password,
            rol: req.body.rol
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha creado correctamente` })
        }
    } catch (error) {
        res.send(error)
    }
};


UsersControllers.updateUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    let _id = req.body._id;
    let newName = req.body.name;
    let newDni= req.body.dni;
    let newEmail = req.body.email;
    let newPassword = password;
    let newRol = req.body.rol;
   
    try {
        let updated = await User.findOneAndUpdate(
            { _id: _id },
            {
                name: newName,
                dni: newDni,
                email: newEmail,
                password: newPassword,
                rol: newRol,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Usuario actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar el usuario", error);
    }
};

UsersControllers.deleteUser = async (req, res) => {
    let email = req.body.email;
    try {
        let deleted = await User.findOneAndDelete({
            email: email
        })

        if (deleted) {
            res.send({ "Message": `Usuario ${deleted.name} borrado correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar usuario", error);
    }
};


UsersControllers.loginUser = async (req, res) => {
    try {
        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {

            if (userFound[0].email === undefined) {
                res.send("Contraseña o usuario incorrecto");
            } else {
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    console.log(userFound[0])
                    let token = jsonwebtoken.sign({ id: userFound[0]._id, rol: userFound[0].rol }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                    let loginOk = `Bienvenido de nuevo, ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        token: token,
                        userFound: userFound
                    })

                } else {
                    res.send("Contraseña o usuario incorrecto");
                }
            }

        }
    } catch (error) {
        res.send("Contraseña o usuario incorrecto");
    }
};






module.exports = UsersControllers;