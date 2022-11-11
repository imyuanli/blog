import React, {useEffect} from 'react'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import {Button, Tooltip} from "antd";
import store from "store";

export default function Index() {
    const token = store.get('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    },[token])
    return(
        <div>
            后台系统首页
            <NavLink
                to={'/backstage/user'}
                className={'text-base mr-3'}
            >
               to
            </NavLink>
            <Outlet />
        </div>
    )
}