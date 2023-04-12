import routes from "./router";
import {Link, NavLink, useNavigate, useParams, useRoutes} from "react-router-dom";
import {StyleProvider} from '@ant-design/cssinjs';
import {Button, ConfigProvider} from "antd"
import './index.css'
import Footer from "./components/footer";

const linkArr = [
    {
        name: '博客',
        link: '/blog'
    },
    {
        name: '标签',
        link: '/tag'
    },
    {
        name: '留言',
        link: '/message'
    },
    {
        name: '作品',
        link: '/projects'
    },
]

function App() {
    //router
    const views = useRoutes(routes)
    //
    // //切换主题
    //
    // const handlePrefixChange = (val: number) => {
    //     console.log(val)
    //     if (val == 1) {
    //         setPrefix('custom-default')
    //     } else {
    //         setPrefix('custom-dark')
    //     }
    // };
    //
    // //路由
    // const routerArr = [
    //     {
    //         path: '/',
    //         name: '首页',
    //         icon: <HomeOutlined/>,
    //     },
    //     {
    //         path: '/message',
    //         name: '留言',
    //         icon: <MessageOutlined/>,
    //     }
    //     // {
    //     //     path: '/links',
    //     //     name: '友链',
    //     //     icon: <LinkOutlined/>
    //     // },
    //     // {
    //     //     path: '/about',
    //     //     name: '关于',
    //     //     icon: <ExclamationCircleOutlined/>,
    //     // }
    // ]
    //
    // //移动端
    // const [open, setOpen] = useState(false);
    // const toggleCollapsed = () => {
    //     setOpen(!open);
    // };
    //
    // const userName = 'YuanLi'
    //
    // //搜索
    // const [searchVisible, setSearchVisible] = useState(false);
    // const toggleShowSearch = () => {
    //     setSearchVisible(!searchVisible)
    // }
    // const onSearch = (value: string) => {
    //     console.log(value)
    // }
    // const navigate = useNavigate()
    //
    //
    // //分类列表
    // const [classifyList, setClassifyList] = useState([])
    //
    // //获取分类
    // useEffect(() => {
    //     get_classify_list().then((res) => {
    //         setClassifyList(res)
    //     })
    // }, [])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#14B8A6',
                    colorLink: 'red'
                }
            }}
        >
            <div className={'min-h-screen h-screen px-6 flex justify-center App'}>
                <div className={'w-full max-w-screen-lg flex justify-between flex-col'}>
                    <header className={'w-full flex justify-between items-center py-9'}>
                        <div className={'text-2xl font-semibold'}>YuanLiBlog</div>
                        <div>
                            <div className={'hidden md:flex'}>
                                {
                                    linkArr.map((item, index) => (
                                        <Link to={item.link}>
                                            <Button size={'large'} type="text">{item.name}</Button>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className={'block md:hidden'}>123</div>
                        </div>
                    </header>
                    <main className={'mb-auto'}>
                        {views}
                    </main>
                    <Footer/>
                </div>
            </div>
            {/*<main className={'w-full h-screen min-h-screen flex justify-center'}>*/}
            {/*    <div className={'max-w-screen-xl w-full h-full'}>*/}
            {/*        <header className={'w-full flex justify-between items-center'}>*/}
            {/*            <div>yuanli</div>*/}
            {/*            <div>*/}
            {/*                <Button type="text">标签</Button>*/}
            {/*                <Button type="text">留言</Button>*/}
            {/*                <Button type="text">归档</Button>*/}
            {/*                <Button type="text">项目</Button>*/}
            {/*            </div>*/}
            {/*        </header>*/}
            {/*        <section>*/}
            {/*            {views}*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </ConfigProvider>

    )
}

export default App
