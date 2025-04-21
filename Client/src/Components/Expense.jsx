import React,{useState, useRef} from 'react'
import { useGlobalContext } from '../Context/Global'
import { useEffect } from 'react'
import ExpenseItems from './ExpenseItems'
import { rupee } from '../Utils/Icons'
import ExpenseForm from './ExpenseForm'


const expense = () => {

  const { addExpense, getExpense, expense, deleteExpense, totalExpense } = useGlobalContext();
  const [showScroll, setShowScroll] = useState(false);
  const displayRef = useRef(null);

  useEffect(() => {
    getExpense();
  }, [])

  useEffect(() => {
    if (displayRef.current) {
      const { scrollHeight, clientHeight } = displayRef.current;
      setShowScroll(scrollHeight > clientHeight);
    }
  }, [expense]);

  return (
    <div className='flex flex-col overflow-auto'>
     <div className="flex items-center justify-between pb-[14px] sm:p-4 space-y-6">
        <h1 className="text-4xl font-bold text-sky-600 font-BonaNova">Expense</h1>
      </div>
      <h2 className='total flex justify-center items-center border-2 border-solid border-[#fcfcfc] rounded-3xl p-3 gap-2 my-3 mx-0 text-xl bg-sky-100 font-bold uppercase'>Total expense: <span className='text-red-400 text-2xl'> {rupee} {totalExpense()}</span></h2>
      <div className="container lg:flex md:block gap-8 ">
        <div className="form overflow-hidden">
          <ExpenseForm />
        </div>
        <div
          ref={displayRef}
          className={`displayExpense flex-1 ${showScroll ? 'overflow-y-scroll' : 'overflow-hidden'}`}
          style={{ maxHeight: '400px' }}
        >
          {expense.map((expense) => {
            const { _id, title, amount, category, date, description, type } = expense;
            return <ExpenseItems
              key={_id}
              id={_id}
              title={title}
              amount={amount}
              category={category}
              description={description}
              date={date}
              type={type}
              deleteItem={deleteExpense}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default expense
