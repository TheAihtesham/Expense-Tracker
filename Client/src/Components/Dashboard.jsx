import React, { useEffect } from 'react'
import Chart from './Chart/Chart'
import { rupee } from '../Utils/Icons'
import { useGlobalContext } from '../Context/Global'
import History from './History/History'
import './CustomStyle/Style.css'

const Dashboard = ({ toggle, setToggle }) => {
  const { totalIncome, totalExpense, totalBalance, getIncome, getExpense } = useGlobalContext();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <div className="dashboard-container pb-[14px] sm:p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-sky-600 font-BonaNova">Dashboard</h1>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 bg-gradient-to-br from-green-100 to-green-50 shadow-md border">
          <h2 className="text-lg font-semibold text-green-900">Total Income</h2>
          <p className="text-2xl font-bold text-green-700 mt-2">{rupee}{totalIncome()}</p>
        </div>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-red-100 to-red-50 shadow-md border">
          <h2 className="text-lg font-semibold text-red-900">Total Expense</h2>
          <p className="text-2xl font-bold text-red-700 mt-2">{rupee}{totalExpense()}</p>
        </div>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-sky-100 to-blue-50 shadow-md border">
          <h2 className="text-lg font-semibold text-blue-900">Balance</h2>
          <p className="text-2xl font-bold text-blue-700 mt-2">{rupee}{totalBalance()}</p>
        </div>
      </div>

      {/* Chart and History Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-xl font-semibold text-gray-700 ">Overview Chart</h3>
          <Chart />
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
          <History />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
