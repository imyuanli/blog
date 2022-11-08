import {useLocation, useParams} from "react-router-dom";
import {Button, Card, Divider, Tag} from "antd";
import {CaretLeftOutlined, CaretRightOutlined, TagOutlined} from "@ant-design/icons";
import ReactMarkdown from 'react-markdown'
import Waline from "../../components/waline";
import React from "react";

function Index() {
    const params = useParams()
    const articleId = params?.id
    const serverURL = 'https://waline-27yxp2m9l-imyuanli.vercel.app/';
    const location = useLocation()
    const path = location?.pathname
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center mb-12'}>
                <span className={'text-4xl mb-3 username relative'}>Card 组件</span>
                <div className={'text-lg'}>
                    <span>2022年05月14日</span>
                    <Divider type={'vertical'}/>
                    <span>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                    </span>
                </div>
            </div>
            <Card className={'rounded-xl w-full'}>
                <div className={''}>描述描述描述描述描述描述</div>
                <Divider/>
                <div className={'break-words'}>
                    asdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasda
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdaddasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdaddasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                </div>
                <Divider/>
                <div className={'flex justify-between'}>
                    <div className={'cursor-pointer hover:text-blue-400'}>
                        <CaretLeftOutlined/>
                        <span>上一篇</span>
                    </div>
                    <div className={'cursor-pointer hover:text-blue-400'}>
                        <span>下一篇</span>
                        <CaretRightOutlined/>
                    </div>
                </div>
                <Divider/>
                <Waline serverURL={serverURL} path={path} reaction={true} />
            </Card>
        </>
    )
}

export default Index
