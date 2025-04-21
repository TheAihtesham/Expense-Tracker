
import React from 'react'
import { bitcoin, calender, cart, commentIcon, deleteIcon, dollar, food, health, money, piggy, rupee, school, stocks, youTube } from '../Utils/Icons'
import { dateFormat } from './Date/Date';

const IncomeItems = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  type,
  deleteItem
}) => {

  const incomeIcons = () => {
    switch (category) {
      case 'salary':
        return money;
      case 'bitcoin':
        return bitcoin;
      case 'stocks':
        return stocks;
      case 'youtube':
        return youTube;
      case 'other':
        return piggy;
      default:
        return null;
    }
  }

  const expenseIcons = () => {
    switch (category) {
      case 'education':
        return school;
      case 'food':
        return food;
      case 'health':
        return health;
      case 'shopping':
        return cart;
      case 'other':
        return piggy;
      default:
        return null;
    }
  }



  const trimDescription = (desc = '', maxLength) => {
    if (!desc) return '';
    return desc.length > maxLength ? `${desc.slice(0, maxLength)}...` : desc;
  };


  return (
    <div className=' rounded-xl p-4 mb-4 flex items-center gap-[.7rem] w-full shadow-sky-200 shadow-md sm:gap[1rem]'>
      <div className="icons w-30 h-30 flex items-center rounded-[24px] justify-center text-3xl pr-2 text-blue-950">
        {type === 'income' ? incomeIcons() : expenseIcons()}
      </div>
      <div className="details flex-1 flex flex-col gap-[0.2rem]">
        <h5 className='text-red-500 font-semibold'>{title}</h5>
        <div className="inner-details flex justify-between items-center">
          <div className="text flex items-start gap-1 flex-col">
            <div>
              <p className='flex items-center gap-2 opacity-[0.8]'>{rupee} {amount}</p>
              <p className='flex items-center gap-2 opacity-[0.8]'>
                {calender}
                {dateFormat(date)}
              </p>
            </div>
            <div>
              <p className='flex items-center gap-2 opacity-[0.8] relative group'>
                {commentIcon}
                <span className='truncate max-w-[150px]'>{trimDescription(description, 10)}</span>
                <span className='absolute left-0 bottom-full mb-1 hidden group-hover:block bg-white p-2 rounded shadow-lg'>
                  {description || 'No description Available'}
                </span>
              </p>
            </div>
          </div>
          <div className="del-btn">
            <button onClick={() => { deleteItem(id) }}>{deleteIcon}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeItems
