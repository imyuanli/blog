import React, {useEffect, useState} from 'react'
import {NavLink, Outlet, useLocation, useMatch, useNavigate, useParams} from 'react-router-dom'
import {Button, Card, Segmented, Tooltip} from "antd";
import store from "store";
import Title from "../components/title";
import Editor from "./editor";
import Articlelist from "./articlelist";
import Categorylist from "./categorylist";
import User from "./user";
import {HomeOutlined, MessageOutlined} from "@ant-design/icons";

export default function Backstage() {
    const token = store.get('token')
    // const navigate = useNavigate()
    // const location = useLocation()
    // const [type, setType] = useState('编辑器')
    // useEffect(()=>{
    //     if(type)
    // },[location])

    // console.log(params)
    // useEffect(()=>{
    //     if(!token){
    //         navigate('/login')
    //     }
    // },[token])

    // const onChange = (e: any) => {
    //     setType(e)
    //     if(e == '编辑器'){
    //         navigate('editor')
    //     }
    // }
    const routerArr = [
        {
            path: 'editor',
            name: '编辑器'
        },
        {
            path: 'articlelist',
            name: '文章管理'
        },
        {
            path: 'categorylist',
            name: '分类管理'
        },
        {
            path: 'user',
            name: '个人信息'
        }
        // {
        //     path: '/links',
        //     name: '友链',
        //     icon: <LinkOutlined/>
        // },
        // {
        //     path: '/about',
        //     name: '关于',
        //     icon: <ExclamationCircleOutlined/>,
        // }
    ]
    return (
        <>
            <Title title={'后台系统'}/>
            <div className={'w-full flex justify-center mb-3'}>
                {
                    routerArr.map((item, index) => {
                        return (
                            <Button key={index} className={'flex-1'}>
                                <NavLink
                                    to={item?.path}
                                    className={'text-base text-black  text-center'}
                                >
                                    {item?.name}
                                </NavLink>
                            </Button>
                        )
                    })
                }
            </div>
            <Card>
                <Outlet/>
            </Card>
        </>
    )
}