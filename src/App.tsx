import './App.css'
import 'antd/dist/antd.variable.min.css';
// 引入custom-default.css 以及 custom-dark.css
import "./theme/custom-default.css";
import "./theme/custom-dark.css";
import './index.css';
import routes from "./router";
import {NavLink, useRoutes} from "react-router-dom";
import {
    AndroidOutlined,
    AppleOutlined,
    CheckOutlined,
    CloseOutlined,
    FileOutlined,
    HomeOutlined, IeOutlined,
    SearchOutlined
} from "@ant-design/icons";
import {Button, Calendar, Card, ConfigProvider, Layout, Rate, Switch} from "antd";
import {useLocalStorageState} from "ahooks";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const {Header, Footer, Sider, Content} = Layout;

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
    const handlePrefixChange = (prefix: boolean) => {
        if (prefix) {
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
                        <Button className={'mr-3 rounded-lg'} icon={<SearchOutlined/>}/>
                        <>
                            {
                                routerArr.map((item, index) => {
                                    return (
                                        <NavLink
                                            to={item?.path}
                                            className={'text-base mr-3'}
                                            key={index}
                                        >
                                            <Button className={'rounded-lg'} icon={item?.icon}/>
                                        </NavLink>
                                    )
                                })
                            }
                        </>
                        <Button className={'rounded-lg'} icon={<DarkModeOutlinedIcon style={{fontSize: 22}}/>}/>
                        <Switch
                            checkedChildren={<WbSunnyOutlinedIcon style={{fontSize: 20}}/>}
                            unCheckedChildren={<DarkModeOutlinedIcon style={{fontSize: 22}}/>}
                            defaultChecked
                        />
                    </div>
                </div>
                <div style={{paddingTop: 54}} className={'w-full flex justify-center items-center'}>
                    <div style={{maxWidth: 1000}} className={'w-full'}>
                        {views}
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default App
