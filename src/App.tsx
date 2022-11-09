import './App.css'
import 'antd/dist/antd.variable.min.css';
// 引入custom-default.css 以及 custom-dark.css
import "./theme/custom-default.css";
import "./theme/custom-dark.css";
import './index.css';
import routes from "./router";
import {NavLink, useRoutes} from "react-router-dom";
import {
    createFromIconfontCN,
    FileOutlined,
    HomeOutlined, RocketOutlined,
    SearchOutlined
} from "@ant-design/icons";
import {BackTop, Button, ConfigProvider, Layout} from "antd";
import {useLocalStorageState} from "ahooks";
import {IconFont} from './utils/util'

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

    //active路由
    const routerArr = [
        {
            path: '/',
            name: '首页',
            icon: <HomeOutlined/>,
        },
        {
            path: '/article',
            name: '归档',
            icon: <FileOutlined/>,
        },
    ]
    let activeClassName = "bg-black";
    const computeClassName = ({isActive}: { isActive: any }) => {
        return isActive ? activeClassName : ""
    }


    return (
        <ConfigProvider prefixCls={prefix}>
            <div className={`App ${prefix}`}>
                <div className={'header'}>
                    <div>
                        Miracle
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <Button className={'mr-3 rounded-lg bg-green-500 text-white'} icon={<SearchOutlined/>}/>
                        <div className={'flex justify-center items-center'}>
                            {
                                routerArr.map((item, index) => {
                                    return (
                                        <NavLink
                                            to={item?.path}
                                            className={'text-base mr-3'}
                                            key={index}
                                        >
                                            <Button className={'rounded-lg bg-green-500 text-white'} icon={item?.icon}/>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        {
                            prefix == 'custom-dark' ?
                                <Button className={'rounded-lg bg-green-500 text-white'}
                                        icon={<IconFont type={'icon-sun'} style={{fontSize: 20}}/>}
                                        onClick={() => {
                                            handlePrefixChange(1)
                                        }}
                                />
                                :
                                <Button className={'rounded-lg bg-green-500 text-white'}
                                        icon={<IconFont type={'icon-night'} style={{fontSize: 16}}/>}
                                        onClick={() => {
                                            handlePrefixChange(0)
                                        }}
                                />
                        }
                    </div>
                </div>
                <div style={{paddingTop: 54}} className={'w-full flex justify-center items-center'}>
                    <div style={{maxWidth: 880}} className={'w-full py-9 px-3'}>
                        {views}
                    </div>
                </div>
                <BackTop style={{right:'30px'}}>
                    <RocketOutlined className={'text-4xl'}/>
                </BackTop>
            </div>
        </ConfigProvider>
    )
}

export default App
