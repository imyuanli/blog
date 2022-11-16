import React from 'react';
import {Avatar, Tooltip} from "antd";
import imgUrl from "../assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg";
import {GithubOutlined, MailOutlined} from "@ant-design/icons";
import {goToCSDN, goToGitHUb, goToMail, IconFont} from '../utils/util'
import Title from "./title";

interface props {
    userName: string
}

const ProFile: React.FunctionComponent<props> = ({userName}) => {
    return (
        <div className={'w-full flex flex-col justify-center items-center mb-6'}>
            <Avatar size={64} src={imgUrl}/>
            <div className={'w-full flex flex-col justify-center items-center mb-2'}>
                <div className={'text-4xl relative username mb-1'}>YuanLi</div>
                <i className={'text-lg'}>Still single, still lonely.</i>
            </div>
            <div>
                <Tooltip placement="bottom" title={'2865437316@qq.com'}>
                    <MailOutlined onClick={goToMail} className={'text-xl mx-3 cursor-pointer'}/>
                </Tooltip>
                <Tooltip placement="bottom" title={'GitHub'}>
                    <GithubOutlined onClick={goToGitHUb} className={'text-xl mx-3 cursor-pointer'}/>
                </Tooltip>
                <Tooltip placement="bottom" title={'CSDN'}>
                    <IconFont onClick={goToCSDN} type={'icon-csdn1'} style={{fontSize: 20, color: '#37475b'}}
                              className={'mx-3 cursor-pointer'}/>
                </Tooltip>
            </div>
        </div>
    )
};

export default ProFile