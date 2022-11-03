import {matchPath, useParams} from "react-router-dom";
import {Card, Divider, Tag} from "antd";
import {TagOutlined} from "@ant-design/icons";
import ReactMarkdown from 'react-markdown'
function Index() {
    const params = useParams()
    console.log(params)
    const articleId = params?.id
    console.log(articleId)

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center mb-12'}>
                <span className={'text-4xl mb-3 username relative'}>Card 组件</span>
                <div className={'text-lg'}>
                    <span>2022年05月14日</span>
                    <Divider type={'vertical'} />
                    <span>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                    </span>
                </div>
            </div>
            <Card className={'rounded-xl w-full'}>
                <div className={''}>描述描述描述描述描述描述</div>
                <Divider />
                <div className={'break-words'}>
                    asdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasda
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdaddasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdaddasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                    dasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdadasdasdad
                </div>
                <Divider />
                <div className={'flex justify-between'}>
                    <div>左</div>
                    <div>右</div>
                </div>
            </Card>
        </>
    )
}

export default Index
