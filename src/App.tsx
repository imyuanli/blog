import './App.css'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import routes from "./router";
import {NavLink, useRoutes} from "react-router-dom";
import {FileOutlined, HomeOutlined} from "@ant-design/icons";

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
    return (
        <div className="App">
            <div>
                <div className={'flex justify-center items-center w-full'}>
                    <div className='content p-6'>
                        <div>
                            XXXX
                        </div>
                        <div>
                            ASDASD大苏打
                        </div>
                    </div>
                    <ul>
                        {
                            navLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={item?.path}
                                            end
                                            className={computeClassName}
                                        >
                                            {item?.name}
                                            {item?.icon}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {views}
            </div>

        </div>
    )
}

export default App
