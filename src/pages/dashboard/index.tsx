import './index.css'
import {
    CommentOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    TagOutlined
} from "@ant-design/icons";
import {Card, Tag} from "antd";
import {NavLink} from "react-router-dom";
import imgUrl from '../../assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg'

const Index = () => {
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <NavLink
                to={'article/12'}
                className={'contents'}
            >
                <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                    <div>
                        <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                        </div>
                        <div className={'flex-1 flex flex-col justify-end'}>
                            <div className={'flex mb-6'}>
                                <div className={'mr-3'}>
                                    <img src={imgUrl} className={'w-24 h-24 object-cover'} alt=""/>
                                </div>
                                <div className={'text-base over-line'}>
                                    描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                </div>
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
                    </div>
                </Card>
                <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                    <div>
                        <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                        </div>
                        <div className={'flex-1 flex flex-col justify-end'}>
                            <div className={'flex mb-6'}>
                                {/*<div className={'mr-3'}>*/}
                                {/*    <img src={imgUrl} className={'w-24 h-24 object-cover'} alt=""/>*/}
                                {/*</div>*/}
                                <div className={'text-base over-line'}>
                                    描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                                </div>
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
                    </div>
                </Card>
                <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                    <div>
                        <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                        </div>
                        <div className={'flex-1 flex flex-col justify-end'}>
                            <div className={'flex mb-6'}>
                                <div className={'mr-3'}>
                                    <img src={imgUrl} className={'w-24 h-24 object-cover'} alt=""/>
                                </div>
                                {/*<div className={'text-base over-line'}>*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                                {/*</div>*/}
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
                    </div>
                </Card>
                <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                    <div>
                        <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                        </div>
                        <div className={'flex-1 flex flex-col justify-end'}>
                            <div className={'flex mb-6'}>
                                <div className={'mr-3'}>
                                    <img src={imgUrl} className={'w-24 h-24 object-cover'} alt=""/>
                                </div>
                                <div className={'text-base over-line'}>
                                    描述
                                </div>
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
                    </div>
                </Card>
                <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                    <div>
                        <div className={'text-2xl font-semibold mb-6 truncate overflow-hidden'}>Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card
                            组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件Card 组件
                        </div>
                        <div className={'flex-1 flex flex-col justify-end'}>
                            {/*<div className={'flex mb-6'}>*/}
                            {/*    <div className={'mr-3'}>*/}
                            {/*        <img src={imgUrl} className={'w-24 h-24 object-cover'} alt=""/>*/}
                            {/*    </div>*/}
                            {/*    <div className={'text-base over-line'}>*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述*/}
                            {/*    </div>*/}
                            {/*</div>*/}
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
                    </div>
                </Card>
            </NavLink>
        </div>
    )
}
export default Index
