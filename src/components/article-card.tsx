import React from 'react';
import {Avatar, Card, Tooltip} from "antd";
import imgUrl from "../assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg";
import {
    CommentOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    FolderOutlined,
    GithubOutlined,
    MailOutlined
} from "@ant-design/icons";
import {goToCSDN, goToGitHUb, goToMail, IconFont} from '../utils/util'
import {NavLink} from "react-router-dom";

interface props {

}

const ArticleCard: React.FunctionComponent<props> = () => {
    return (
        <Card className={'w-full p-2 rounded-xl shadow-md mb-6 hover:shadow-lg duration-300'}>
            <NavLink
                to={'article/12'}
                className={'contents'}
                style={{color: '#37475b'}}
            >
                <div>
                    <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>
                        Card 组件Card 组件Card
                        组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                        组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                    </div>
                    <div className={'flex mb-3'}>
                        <img src={imgUrl} className={'w-20 h-20 md:w-24 md:h-24 object-cover mr-3'} alt=""/>
                        <p className={'text-base over-line'}>
                            描述描述描述描述描述描述描述描述描述描述描述描述
                            描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                            描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                            描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                        </p>
                    </div>
                </div>
            </NavLink>
            <div className={'flex'}>
                <div className={'flex'}>
                    <div className={'mr-2'}>
                        <FieldTimeOutlined className={'mr-1'}/>
                        <span>2021-01-21</span>
                    </div>
                    <NavLink
                        to={'/categories'}
                        className={'contents text-black'}
                    >
                        <div className={'mr-2'}>
                            <FolderOutlined className={'mr-1'}/>
                            <span>技术博客</span>
                        </div>
                    </NavLink>
                    <div className={'mr-1'}>
                        <EyeOutlined className={'mr-1'}/>
                        <span>123</span>
                    </div>
                    <div>
                        <CommentOutlined className={'m-1'}/>
                        <span>123</span>
                    </div>
                </div>
            </div>
        </Card>

    )
};

export default ArticleCard