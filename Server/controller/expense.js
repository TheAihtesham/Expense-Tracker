const ExpenseSchema = require('../models/expense');

exports.addexpense = async (req, res) => {

    const { title, amount, category, description, date } = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if (!title || !category || !description || !date ) {
            return res.status(400).json({ message: 'All fields must be filled' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be positive' })
        }
        await expense.save();
        res.status(200).json({ message: 'Expense added Successfully' })
    } catch (err) {
        return res.status(500).json({message: `Server Error ${err}`})
    }
}

exports.getexpense = async (req, res) =>{
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (err) {
        res.status(500).json({message: `Server failure ${err}`})
    }
}

exports.deleteexpense = async (req, res) =>{
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: "expense deleted"})
        })
        .catch((err) => {
            res.status(500).json({message:`Error ${err}`})
        })
}

