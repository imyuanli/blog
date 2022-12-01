import {NavLink, useLocation, useParams} from "react-router-dom";
import {Button, Card, Divider, message, Tag} from "antd";
import {CaretLeftOutlined, CaretRightOutlined, TagOutlined} from "@ant-design/icons";
import Waline from "../components/waline";
import React, {useEffect, useState} from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import './article.css'
import copy from "copy-to-clipboard";
import Title from "../components/title";
import {get_article} from "../service/service";
import * as dayjs from "dayjs";

function Article() {
    const params = useParams()
    const articleId = params?.id
    const serverURL = 'https://waline-27yxp2m9l-imyuanli.vercel.app/';
    const location = useLocation()
    const path = location?.pathname
    const [article, setArticle] = useState<any>({})
    //
    //     :
    //     "a9a5a15c-6ddb-4bfa-9495-d507d0545fea"
    // classify_name
    //     :
    //     "tech"
    // classify_title
    //     :
    //     "做个技术宅"
    //
    //     :
    //     "asdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdadasdad"
    // keywords
    //     :
    //     null
    // type
    //     :
    //     "原创"
    // update_time
    //     :
    //     "2022-11-29T18:20:28.453"
    // view_count
    //     :
    //     "0"
    //获取文章数据
    useEffect(() => {
        get_article({articleId}).then((res) => {
            setArticle(res)
        })
    }, [articleId])

    //渲染code的样式
    useEffect(() => {
        Prism.manual = true;
        Prism.highlightAll()
    }, [article?.content])
    //为pre标签添加 line-numbers
    useEffect(() => {
        const dgHtmlDOM = document.querySelectorAll('pre')
        for (let i of dgHtmlDOM) {
            i.classList.add('line-numbers')
            i.classList.add('pre-code')
            //添加复制功能
            let copyEle = document.createElement('div');
            copyEle.innerHTML = '复制';
            copyEle.className = 'copy-box';
            i.appendChild(copyEle);
            copyEle.onclick = function () {
                let element = i.children[0]
                if (element instanceof HTMLElement) {
                    copy(element?.innerText);
                    message.success("复制成功")
                }
            }
        }
    }, [article?.content])

    return (
        <>
            {
                article &&
                <Card className={'rounded-xl w-full'}>
                    <div className={'w-full flex flex-col justify-center items-center mb-6'}>
                        <div className={'text-3xl font-semibold mb-3'}>{article?.title}</div>
                        <div className={'text-base mb-3'}>
                            <span>{dayjs(article?.create_time).format('YYYY-MM-DD')}</span>
                        </div>
                        <div>
                            <Tag icon={<TagOutlined/>}>vue</Tag>
                            <Tag icon={<TagOutlined/>}>vue</Tag>
                        </div>
                    </div>
                    <div>{article?.describe}</div>
                    <Divider/>
                    <div className={'break-words'} dangerouslySetInnerHTML={{__html: article?.content}}/>
                    <Divider/>
                    <div className={'note-warning'}>
                        本博客所有文章除特别声明外，均采用 CC BY-SA 4.0 协议 ，转载请注明出处，谢谢。
                    </div>
                    <Divider/>
                    <div className={'flex justify-between'}>
                        {
                            article?.pre_article ?
                            <NavLink
                                to={`/article/${article?.pre_article?.article_id}`}
                                className={'contents'}
                                style={{color: '#37475b'}}
                            >
                                <div className={'cursor-pointer hover:text-blue-400'}>
                                    <CaretLeftOutlined/>
                                    <span>{article?.pre_article?.title}</span>
                                </div>
                            </NavLink>
                                :
                                <div></div>
                        }
                        {
                            article?.next_article ?
                                <NavLink
                                    to={`/article/${article?.next_article?.article_id}`}
                                    className={'contents'}
                                    style={{color: '#37475b'}}
                                >
                                    <div className={'cursor-pointer hover:text-blue-400'}>
                                        <span>{article?.next_article?.title}</span>
                                        <CaretRightOutlined/>
                                    </div>
                                </NavLink>
                                :
                                <div></div>
                        }
                    </div>
                    <Divider/>
                    <Waline serverURL={serverURL} path={path} reaction={true}/>
                </Card>
            }
        </>
    )
}

export default Article
