import React from 'react';
import {Avatar, Tooltip} from "antd";
import imgUrl from "../assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg";
import {GithubOutlined, MailOutlined} from "@ant-design/icons";
import {goToCSDN, goToGitHUb, goToMail, IconFont} from '../utils/util'

interface props {
    userName: string
}

const ProFile: React.FunctionComponent<props> = ({userName}) => {
    return (
        <div className={'w-full flex flex-col justify-center items-center mb-9'}>
            <div>
                <Avatar size={64} src={imgUrl}/>
            </div>
            <div className={'text-4xl mb-3 relative username'}>{userName}</div>
            <div className={'text-lg mb-2'}>Hi, nice to meet you!</div>
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