import ProFile from "../components/profile";
import {useTitle} from "ahooks";
import ArticleCard from "../components/article-card";
import React, {useEffect, useState} from "react";
import {get_articles_list, get_classify_list} from "../service/service";
import Title from "../components/title";
import {Link, NavLink, useParams} from "react-router-dom";
import {Button, Divider} from "antd";
import img from '../assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg'
import {EyeOutlined, MessageOutlined} from "@ant-design/icons";

const Index = () => {
    // useTitle("YuanLi‘s Blog");
    // //获取文章列表
    // const [articleList, setArticleList] = useState([])
    // //分类列表
    // const [classifyList, setClassifyList] = useState([])
    //
    // //获取分类的文章
    // const params = useParams()
    // const classifyName = params?.name
    // useEffect(() => {
    //     get_articles_list({classifyName}).then((res) => {
    //         setArticleList(res)
    //     })
    //     get_classify_list().then((res) => {
    //         setClassifyList(res)
    //     })
    // }, [classifyName])
    //
    // //获取分类的详细信息
    // const getClassifyItem = (classifyName:any) => {
    //     return classifyList.find((item: any) => {
    //         return item.classify_name == classifyName
    //     })
    // }
    return (
        <div>
            <Title value={'全部文章'}/>
            <div className={'space-y-20'}>
                <div className={'grid grid-cols-4'}>
                    <div className={'col-span-1 p-3'}>
                        <img className={'rounded-lg w-full h-full object-cover'} src={img} alt=""/>
                    </div>
                    <div className={'col-span-3 p-3 flex flex-col'}>
                        <div className={'flex items-center text-gray-500 mb-3 space-x-3'}>
                            <div>August 7, 2021</div>
                            <div>{` • `}</div>
                            <Link to={'link'}>
                                React
                            </Link>
                        </div>
                        <div className={'text-xl font-bold mb-6'}>New features in v1</div>
                        <div className={'mb-3 text-gray-500  line-clamp-3'}>
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                        </div>
                        <Divider />
                        <div className={'flex space-x-6'}>
                            <div className={'space-x-1'}>
                                <EyeOutlined />
                                <span>123</span>
                            </div>
                            <div className={'space-x-1'}>
                                <MessageOutlined />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-4'}>
                    <div className={'col-span-1 p-3'}>
                        <img className={'rounded-lg w-full h-full object-cover'} src={img} alt=""/>
                    </div>
                    <div className={'col-span-3 p-3 flex flex-col'}>
                        <div className={'flex items-center text-gray-500 mb-3 space-x-3'}>
                            <div>August 7, 2021</div>
                            <div>{` • `}</div>
                            <Link to={'link'}>
                                React
                            </Link>
                        </div>
                        <div className={'text-xl font-bold mb-6'}>New features in v1</div>
                        <div className={'mb-3 text-gray-500  line-clamp-3'}>
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                        </div>
                        <Divider />
                        <div className={'flex space-x-6'}>
                            <div className={'space-x-1'}>
                                <EyeOutlined />
                                <span>123</span>
                            </div>
                            <div className={'space-x-1'}>
                                <MessageOutlined />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-4'}>
                    <div className={'col-span-1 p-3'}>
                        <img className={'rounded-lg w-full h-full object-cover'} src={img} alt=""/>
                    </div>
                    <div className={'col-span-3 p-3 flex flex-col'}>
                        <div className={'flex items-center text-gray-500 mb-3 space-x-3'}>
                            <div>August 7, 2021</div>
                            <div>{` • `}</div>
                            <Link to={'link'}>
                                React
                            </Link>
                        </div>
                        <div className={'text-xl font-bold mb-6'}>New features in v1</div>
                        <div className={'mb-3 text-gray-500  line-clamp-3'}>
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                            An overview of the new features released in v1 - code block copy, multiple authors,
                            frontmatter layout and more
                        </div>
                        <Divider />
                        <div className={'flex space-x-6'}>
                            <div className={'space-x-1'}>
                                <EyeOutlined />
                                <span>123</span>
                            </div>
                            <div className={'space-x-1'}>
                                <MessageOutlined />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index
