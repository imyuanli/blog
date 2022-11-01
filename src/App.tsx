import './App.css'
import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.min.css';
import './index.css';
import routes from "./router";
import {NavLink, useRoutes} from "react-router-dom";
import {FileOutlined, HomeOutlined} from "@ant-design/icons";
import {Button, ConfigProvider} from "antd";
function App() {
    const views = useRoutes(routes)
    const navLinks = [
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


    ConfigProvider.config({
        theme: {
            primaryColor: '#25b864',
        },
    });
    return (
        <ConfigProvider prefixCls="custom">
            <div className="App">
                <div className={'flex justify-center items-center w-full flex-col'}>
                    <div className='content mt-6 flex flex-col'>
                        <Button type={'primary'}>dasd</Button>
                        <div className={'text-3xl text-gray-500'}>
                            XXXX
                        </div>
                        <div className={'text-sm text-gray-400'}>
                            ASDASD大苏打
                        </div>
                    </div>
                    <div className='content mt-3 flex items-end flex-col'>
                        {
                            navLinks.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <NavLink
                                            to={item?.path}
                                            end
                                            className={computeClassName}
                                        >
                                            {item?.name}
                                            {item?.icon}
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {views}
            </div>
        </ConfigProvider>
    )
}

export default App
