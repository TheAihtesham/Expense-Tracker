const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
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
        default: "income"
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    }
    
}, {timestamps: true})

module.exports = mongoose.model('incomeModel', IncomeSchema);

