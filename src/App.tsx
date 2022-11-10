import './App.css'
import 'antd/dist/antd.variable.min.css';
// 引入custom-default.css 以及 custom-dark.css
import "./theme/custom-default.css";
import "./theme/custom-dark.css";
import './index.css';
import routes from "./router";
import {NavLink, useRoutes} from "react-router-dom";
import {
    createFromIconfontCN, ExclamationCircleOutlined,
    FileOutlined, FileTextOutlined, FolderOutlined,
    HomeOutlined, LinkOutlined, MessageOutlined, RocketOutlined,
    SearchOutlined, TagsOutlined
} from "@ant-design/icons";
import {Avatar, BackTop, Button, ConfigProvider, Layout, Tooltip} from "antd";
import {useLocalStorageState} from "ahooks";
import {IconFont} from './utils/util'
import imgUrl from './assets/349a701c8d7b4f8596b8469f56558792_qq_44259670.jpg'
import ProFile from "./components/profile";

function App() {
    //router
    const views = useRoutes(routes)

    //切换主题
    const [prefix, setPrefix] = useLocalStorageState<string | undefined>(
        'prefix',
        {
            defaultValue: 'custom-default',
        },
    );
    const handlePrefixChange = (val: number) => {
        console.log(val)
        if (val == 1) {
            setPrefix('custom-default')
        } else {
            setPrefix('custom-dark')
        }
    };

    //路由
    const routerArr = [
        {
            path: '/',
            name: '首页',
            icon: <HomeOutlined/>,
        },
        {
            path: '/archives',
            name: '归档',
            icon: <FileTextOutlined/>,
        },
        {
            path: '/categories',
            name: '分类',
            icon: <FolderOutlined/>,
        },
        {
            path: '/tags',
            name: '标签',
            icon: <TagsOutlined/>,
        },
        {
            path: '/about',
            name: '关于',
            icon: <ExclamationCircleOutlined/>,
        },
        {
            path: '/links',
            name: '友链',
            icon: <LinkOutlined/>
        },
        {
            path: '/message',
            name: '留言',
            icon: <MessageOutlined/>,
        },
    ]
    let activeClassName = "bg-black";
    const computeClassName = ({isActive}: { isActive: any }) => {
        return isActive ? activeClassName : ""
    }

    const userName = 'YuanLi'
    return (
        <ConfigProvider prefixCls={prefix}>
            <div className={`App ${prefix}`}>
                <div className={'header'}>
                    <div>{userName}</div>
                    <div className={'flex justify-center items-center'}>
                        <Tooltip placement="bottom" title={'搜索'}>
                            <Button className={'mr-3 rounded-lg bg-green-500 text-white'} icon={<SearchOutlined/>}/>
                        </Tooltip>
                        <div className={'flex justify-center items-center'}>
                            {
                                routerArr.map((item, index) => {
                                    return (
                                        <NavLink
                                            to={item?.path}
                                            className={'text-base mr-3'}
                                            key={index}
                                        >
                                            <Tooltip placement="bottom" title={item?.name}>
                                                <Button className={'rounded-lg bg-green-500 text-white'}
                                                        icon={item?.icon}/>
                                            </Tooltip>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        {
                            prefix == 'custom-dark' ?
                                <Tooltip placement="bottom" title={'切换到光'}>
                                    <Button className={'rounded-lg bg-green-500 text-white'}
                                            icon={<IconFont type={'icon-sun'} style={{fontSize: 20}}/>}
                                            onClick={() => {
                                                handlePrefixChange(1)
                                            }}
                                    />
                                </Tooltip>
                                :
                                <Tooltip placement="bottom" title={'切换到暗黑'}>
                                    <Button className={'rounded-lg bg-green-500 text-white'}
                                            icon={<IconFont type={'icon-night'} style={{fontSize: 16}}/>}
                                            onClick={() => {
                                                handlePrefixChange(0)
                                            }}
                                    />
                                </Tooltip>
                        }
                    </div>
                </div>
                <div style={{paddingTop: 54}} className={'w-full flex justify-center items-center'}>
                    <div style={{maxWidth: 880}} className={'w-full py-9 px-3'}>
                        <ProFile userName={userName}/>
                        {views}
                    </div>
                </div>
                <BackTop style={{right: '30px'}}>
                    <RocketOutlined className={'text-4xl'}/>
                </BackTop>
            </div>
        </ConfigProvider>
    )
}

export default App
