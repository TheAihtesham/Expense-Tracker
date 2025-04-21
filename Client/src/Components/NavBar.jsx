import { useEffect, useState } from 'react';
import { menuItems } from '../Utils/Menu';
import { bars, signout } from '../Utils/Icons';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ active, setActive, toggle, setToggle }) => {

    const [loggedUser, setLoggedUser] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        setLoggedUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        alert('User Logout');
        navigate('/test/login')
    }

    return (
        <div className={`${setToggle? 'block':'hidden'}  border-2 border-sky-50 border-solid bg-sky-50 rounded-3xl sm:flex flex-col justify-between  
        p-[6px] mb-[13px] sm:mb-0 w-full sm:w-[260px]`}>
            <div className="user-container flex gap-5 pb-5 items-center h-16 sm:h-24">
                <img
                    className='h-[40px] w-[40px] mix-blend-darken object-contain rounded-full'
                    src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
                    alt=""
                />
                <div className="text leading-[18p]">
                    <h2 className='font-bold uppercase text-[18px]'>User.</h2>
                    <p className='text-slate-400 text-[15px]'>Your Money</p>
                </div>
                <div className='text-2xl pl-[80px] cursor-pointer hidden' onClick={()=> setToggle(!toggle)}>
                    {bars}
                </div>
            </div>
            <ul className='flex-1 flex flex-wrap sm:flex-nowrap sm:flex-col items-center justify-center sm:items-start sm:justify-start'>

                {menuItems().map((item) => (
                    <li
                        key={item.id}
                        style={{ fontSize: item.fontSize }}
                        onClick={() => setActive(item.id)}
                        className={`list grid grid-cols-[40px_auto] items-center m-1.5 cursor-pointer font-bold ${active === item.id ? 'text-red-400' : ''}`}
                    >
                        {item.icon}
                        <span className=''>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom cursor-pointer pl-4 pb-3 hover:text-blue-200 text-[20px]">
                <span onClick={handleLogout}>
                    {signout} Sign out
                </span>
            </div>
        </div>
    );
};

export default NavBar;
