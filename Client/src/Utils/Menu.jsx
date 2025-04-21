
import { dashboard, expense, income } from "./Icons";

export const menuItems = () =>[
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard',
        fontSize: '17.5px'
    },
    {
        id: 2,
        title: 'Income',
        icon: income,
        link: '/income',
        fontSize: '17.5px'
    },
    {
        id: 3,
        title: 'Expense',
        icon: expense,
        link: '/expense',
        fontSize: '17.5px'
    },
]