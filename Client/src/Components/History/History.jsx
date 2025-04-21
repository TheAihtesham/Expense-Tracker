import React from 'react'
import { useGlobalContext } from '../../Context/Global'

const History = () => {

    const { transaction } = useGlobalContext();
    const [...history] = transaction();

    return (
        <div>
            <div className="historyContainer w-full flex flex-col gap-3  p-[15px]">
                <h2 className='text-red-600 text-[20px] pt-[10px] font-bold'>Recent History</h2>
                {history.map((item) => {
                    const { _id, title, amount, type } = item;
                    return (
                        <div key={_id} className="historyItems flex justify-between rounded-md p-[10px] border-2 border-solid border-white bg-[#e5f5fb] font-bold shadow-sky-200 shadow-md">
                            <p style={{ color: type === 'expense' ? 'red' : 'green' }}>{title}</p>
                            <p style={{ color: type === 'expense' ? 'red' : 'green' }}>
                                {type === 'expense' ? `-${amount}` : `+${amount}`}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default History
