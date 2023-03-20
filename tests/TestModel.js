
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema ({
    title_test: {
        type: String,
        required: true
    },
    question_1:{
        ans_1:{type:String},
        ans_2:{type:String},
        ans_3:{type:String},
        ans_4:{type:String}
    },
    question_2:{
        ans_1:{type:String},
        ans_2:{type:String},
        ans_3:{type:String},
        ans_4:{type:String}
    },
    question_3:{
        ans_1:{type:String},
        ans_2:{type:String},
        ans_3:{type:String},
        ans_4:{type:String}
    },
    question_4:{
        ans_1:{type:String},
        ans_2:{type:String},
        ans_3:{type:String},
        ans_4:{type:String}
    },
    question_5:{
        ans_1:{type:String},
        ans_2:{type:String},
        ans_3:{type:String},
        ans_4:{type:String}
    } 
},
    {
        timestamps:true, //registro con las columnas createdAt, updatedAt
        versionKey:false
    }
);

const Test = mongoose.model('tests', testSchema);
module.exports = Test;