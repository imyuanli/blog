import './index.css'
import {
    CommentOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    RocketOutlined,
    TagOutlined
} from "@ant-design/icons";
import {BackTop, Button, Card, Tag} from "antd";
import {NavLink} from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center mb-12'}>
                <span className={'text-4xl mb-3 relative'}>Miracle</span>
                <span className={'text-lg'}>Hi, nice to meet you!</span>
            </div>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <NavLink
                    to={'article/12'}
                >
                    <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                        <div>
                            <div className={'text-3xl font-semibold mb-9'}>Card 组件</div>
                            <div className={'text-base mb-6 overflow-ellipsis truncate'}>
                                折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览折叠预览
                            </div>
                            <div className={'flex justify-between'}>
                                <div className={'flex'}>
                                    <Tag icon={<TagOutlined/>}>vue</Tag>
                                </div>
                                <div className={'flex'}>
                                    <div className={'mr-3'}>
                                        <FieldTimeOutlined className={'mr-1'}/>
                                        <span>2021-01-21</span>
                                    </div>
                                    <div className={'mr-3'}>
                                        <EyeOutlined className={'mr-1'}/>
                                        <span>123</span>
                                    </div>
                                    <div>
                                        <CommentOutlined className={'m-1'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </NavLink>
            </div>
        </>
    )
}
export default Index
