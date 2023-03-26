

const Test = require('../tests/TestModel');
const authConfig = require('../config/config');
const TestsControllers = {};

// TestsControllers.getAll = async (req, res) => {
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
TestsControllers.getAllTests = async (req, res) => {

    try {
        let result = await Test.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún test." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
        // console.log(error);
    }
}
TestsControllers.newTest = async (req, res) => {

    try {
        let test = await Test.create({

            title_test:req.body.title_test,
            question_1:req.body.question_1,
            question_2:req.body.question_2,
            question_3:req.body.question_3,
            question_4:req.body.question_4,
            question_5:req.body.question_5
        })

        if (test) {
            res.send({ "Message": `El test ${test.name} se ha creado correctamente` })
        }
    } catch (error) {
        res.send(error)
    }
};


TestsControllers.updateTest = async (req, res) => {


    let _id = req.body._id;
    let newTitle_test = req.body.title_test;
    let newQuestion_1= req.body.question_1;
    let newQuestion_2 = req.body.question_2;
    let newQuestion_3 = req.body.question_3;
    let newQuestion_4 = req.body.question_4;
    let newQuestion_5 = req.body.question_5;
   
    try {
        let updated = await User.findOneAndUpdate(
            { _id: _id },
            {
                title_test: newTitle_test,
                question_1: newQuestion_1,
                question_2: newQuestion_2,
                question_3: newQuestion_3,
                question_4: newQuestion_4,
                question_5: newQuestion_5,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Test actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar el Test", error);
    }
};

TestsControllers.deleteTest = async (req, res) => {
    let title_test = req.body.title_test;
    try {
        let deleted = await Test.findOneAndDelete({
            title_test: title_test
        })

        if (deleted) {
            res.send({ "Message": `Test ${deleted.name} borrado correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar test", error);
    }
};





module.exports = TestsControllers;