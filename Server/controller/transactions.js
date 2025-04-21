const IncomeSchema = require('../models/income');

exports.addincome = async (req, res) => {

    const { title, amount, category, description, date} = req.body;

    const income = IncomeSchema({
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
        await income.save();
        res.status(200).json({ message: 'Income added Successfully' })
    } catch (err) {
        return res.status(500).json({message: `Server Error ${err}`})
    }
}

exports.getincome = async (req, res) =>{
    try {
        const income = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (err) {
        res.status(500).json({message: `Server failure ${err}`})
    }
}

exports.deleteincome = async (req, res) =>{
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Income deleted"})
        })
        .catch((err) => {
            res.status(500).json({message:`Error ${err}`})
        })
}


