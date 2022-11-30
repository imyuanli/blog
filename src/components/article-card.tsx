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
import * as dayjs from 'dayjs'

interface props {
    article: any,
    classifyList: any
}

const ArticleCard: React.FunctionComponent<props> = ({article, classifyList}) => {
    const {
        article_id,
        title,
        describe,
        content,
        cover,
        create_time,
        update_time,
        keywords,
        type,
        classify_name,
        view_count,
        comment_count
    } = article


    const getClassifyTitle = (name: string) => {
        return classifyList.find((item: any) => {
            return item.classify_name == name
        })
    }
    return (
        <Card className={'w-full p-2 rounded-xl shadow-md mb-6 hover:shadow-lg duration-300'}>
            <NavLink
                to={`article/${article_id}`}
                className={'contents'}
                style={{color: '#37475b'}}
            >
                <div>
                    <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>
                        {title}
                    </div>
                    <div className={'flex mb-3'}>
                        {cover && <img src={cover} className={'w-20 h-20 md:w-24 md:h-24 object-cover mr-3'} alt=""/>}
                        <p className={'text-base over-line'}>{describe}</p>
                    </div>
                </div>
            </NavLink>
            <div className={'flex'}>
                <div className={'flex'}>
                    <div className={'mr-2'}>
                        <FieldTimeOutlined className={'mr-1'}/>
                        <span>{dayjs(create_time).format('YYYY-MM-DD')}</span>
                    </div>
                    <NavLink
                        to={'/categories'}
                        className={'contents text-black'}
                    >
                        <div className={'mr-2'}>
                            <FolderOutlined className={'mr-1'}/>
                            <span>{getClassifyTitle(classify_name)?.classify_title}</span>
                        </div>
                    </NavLink>
                    <div className={'mr-1'}>
                        <EyeOutlined className={'mr-1'}/>
                        <span>{view_count}</span>
                    </div>
                    <div>
                        <CommentOutlined className={'m-1'}/>
                        <span>{comment_count}</span>
                    </div>
                </div>
            </div>
        </Card>

    )
};

export default ArticleCard