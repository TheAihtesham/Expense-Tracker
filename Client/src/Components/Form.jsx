import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useGlobalContext } from '../Context/Global';
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const { addIncome, getIncome } = useGlobalContext();

    const [input, setInput] = useState({
        title: '',
        amount: '',
        date: null, 
        description: '',
        category: ''
    });

    const { title, amount, date, description, category } = input;

    const handleInput = name => e => {
        setInput({ ...input, [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(!title || !description || !amount || !date || !category)
            return alert("All Fields are Required");

        addIncome({
            title,
            amount: parseFloat(amount),
            date,
            description,
            category
        });

        setInput({
            title: '',
            amount: '',
            date: null,
            description: '',
            category: ''
        });
        getIncome();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-cntrls w-full sm:w-[95%]">
                <input className='border-2 border-solid border-sky-100 outline-none rounded-xl mb-4 px-[15px] py-[5px] w-full'
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder='Income Title'
                    onChange={handleInput('title')}
                />
            </div>

            <div className="input-cntrls w-full sm:w-[95%]">
                <input className='border-2 border-solid border-sky-100 outline-none rounded-xl mb-3 px-[15px] py-[5px] w-full'
                    type="number" // Changed to number
                    value={amount}
                    name={'amount'}
                    placeholder='Income Amount'
                    onChange={handleInput('amount')}
                />
            </div>

            <DatePicker className='border-2 border-solid border-sky-100 outline-none rounded-xl mb-3 px-[15px] py-[5px] w-full'
                id='date'
                placeholderText='Date'
                selected={date}
                dateFormat="MM/dd/yyyy"
                autoComplete='off'
                onChange={(date) => setInput({ ...input, date })}
            />

            <div className="input-cntrls w-full sm:w-[95%]">
                <select className='border-2 border-solid border-sky-100 outline-none rounded-xl mb-3 px-[15px] py-[5px] w-full'
                    value={category}
                    required
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                >
                    <option value="" disabled>Select an Option</option>
                    <option value="salary">Salary</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="stocks">Stocks</option>
                    <option value="youtube">YouTube Earning</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="input-cntrls w-full sm:w-[95%]">
                <textarea className='border-2 border-solid border-sky-100 outline-none rounded-xl mb-3 px-[15px] py-[5px]'
                    name={'description'}
                    value={description}
                    placeholder='Add a Description'
                    onChange={handleInput('description')}
                    cols="30"
                    rows="5"
                />
            </div>

            <div className="btn w-full sm:w-[95%]">
                <button type='submit' className='border-2 border-sky-100 border-solid m-[7px] px-[20px] py-[5px] rounded-xl w-full hover:bg-sky-200 hover:text-white hover:font-bold'>Add Income</button> 
            </div>
        </form>
    );
};

export default Form;
