import React from 'react';
import { NavLink } from 'react-router-dom';
const ActiveLink =({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive, isPending})=>
            isActive ? "text-amber-200 p-2 rounded-lg bg-purple-200" : isPending ? "pending" : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;