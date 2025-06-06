const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    type:{
        type: String,
        default: "expense"
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    category:{
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('expenseModel', ExpenseSchema);


