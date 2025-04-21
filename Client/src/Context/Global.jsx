import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

const url = "http://localhost:5000/test/";

const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (incomeItem) => {
        try {
            const response = await axios.post(`${url}addincome`, incomeItem)
            setIncome((prevIncome) => [...prevIncome, response.data]);
            setError(null);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "An error occurred");
        }
        getIncome();
    };    

    const getIncome = async () =>{
        try {
            const response = await axios.get(`${url}getincome`)
            setIncome(response.data)
            console.log(response.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "An error occurred to fetching the data");
        }
    }
    const deleteIncome = async (id) =>{
        const response = await axios.delete(`${url}deleteincome/${id}`)
        getIncome();
    }

    const totalIncome = () =>{
        let totalIncome = 0;
        income.forEach((incomes)=>{
            totalIncome = totalIncome + incomes.amount;
        })
        return totalIncome
    }

    const addExpense = async (expenseItem) => {
        try {
            const response = await axios.post(`${url}addexpense`, expenseItem)
            setExpense((prevExpense) => [...prevExpense, response.data]);
            setError(null);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "An error occurred");
        }
        getExpense();
    };    

    const getExpense = async () =>{
        try {
            const response = await axios.get(`${url}getexpense`)
            setExpense(response.data)
            console.log(response.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "An error occurred to fetching the data");
        }
    }
    const deleteExpense = async (id) =>{
        const response = await axios.delete(`${url}deleteexpense/${id}`)
        getExpense();
    }

    const totalExpense = () =>{
        let totalExpense = 0;
        expense.forEach((expense)=>{
            totalExpense = totalExpense + expense.amount;
        })
        return totalExpense
    }

    const totalBalance = () =>{
        return totalIncome() - totalExpense();
    }

    const transaction = () =>{
        const history = [...income, ...expense]
        history.sort((a,b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3);
    }

    return (
        <Context.Provider value={{
            addIncome,
            getIncome,
            income,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            expense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transaction,
        }}>
            {children}
        </Context.Provider>
    )

}

export const useGlobalContext = () =>{
    return useContext(Context);
} 


