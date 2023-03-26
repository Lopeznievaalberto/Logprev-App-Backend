
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema ({
    title_test: {
        type: String,
        required: true
    },
    question_1:{ 
        type: String,
        required: true,
        ans_11:{type:String},
        ans_12:{type:String},
        ans_13:{type:String},
        ans_14:{type:String}
    },
    question_2:{
        type: String,
        required: true,
        ans_21:{type:String},
        ans_22:{type:String},
        ans_23:{type:String},
        ans_24:{type:String}
    },
    question_3:{
        type: String,
        required: true,
        ans_31:{type:String},
        ans_32:{type:String},
        ans_33:{type:String},
        ans_34:{type:String}
    },
    question_4:{
        type: String,
        required: true,
        ans_41:{type:String},
        ans_42:{type:String},
        ans_43:{type:String},
        ans_44:{type:String}
    },
    question_5:{
        type: String,
        required: true,
        ans_51:{type:String},
        ans_52:{type:String},
        ans_53:{type:String},
        ans_54:{type:String}
    } 
},
    {
        timestamps:true, //registro con las columnas createdAt, updatedAt
        versionKey:false
    }
);

const Test = mongoose.model('tests', testSchema);
module.exports = Test;