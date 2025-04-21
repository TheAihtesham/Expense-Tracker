
import React, { useEffect, useState, useRef } from 'react';
import Form from './Form';
import { useGlobalContext } from '../Context/Global';
import IncomeItems from './IncomeItems';
import { rupee } from '../Utils/Icons';
import './Style.css'


const Income = () => {
  const { addIncome, getIncome, income, deleteIncome, totalIncome } = useGlobalContext();
  const [showScroll, setShowScroll] = useState(false);
  const displayRef = useRef(null);

  useEffect(() => {
    getIncome();
  }, [])

  useEffect(() => {
    if (displayRef.current) {
      const { scrollHeight, clientHeight } = displayRef.current;
      setShowScroll(scrollHeight > clientHeight);
    }
  }, [income]); // Re-run when income changes

  return (
    <div className='flex flex-col overflow-auto'>
     <div className="flex items-center justify-between pb-[14px] sm:p-4 space-y-6">
        <h1 className="text-4xl font-bold text-sky-600 font-BonaNova">Income</h1>
      </div>
      <h2 className='total flex justify-center items-center border-2 border-solid border-[#fcfcfc] rounded-3xl p-3 gap-2 my-3 mx-0 text-xl bg-sky-100 font-bold uppercase'>
        Total Income: <span className='text-green-600 text-2xl'>{rupee} {totalIncome()}</span>
      </h2>
      <div className="container lg:flex md:block gap-8">
        <div className="form overflow-hidden">
          <Form />
        </div>
        
        <div 
          ref={displayRef} 
          className={`displayIncomes w-430px flex-1 ${showScroll ? 'overflow-y-scroll' : 'overflow-hidden'}`} 
          style={{ maxHeight: '400px' }} 
        >
          {income.map((income) => {
            const { _id, title, amount, category, date, description, type } = income;
            return (
              <IncomeItems 
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                category={category}
                description={description}
                date={date}
                type={type}
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Income;
