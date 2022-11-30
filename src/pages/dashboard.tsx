import ProFile from "../components/profile";
import {useTitle} from "ahooks";
import ArticleCard from "../components/article-card";
import {useEffect, useState} from "react";
import {get_articles_list, get_classify_list} from "../service/service";

const Dashboard = () => {
    useTitle("YuanLi‘s Blog");
    //获取文章列表
    const [articleList, setArticleList] = useState([])
    //分类列表
    const [classifyList, setClassifyList] = useState([])
    useEffect(() => {
        get_articles_list().then((res) => {
            setArticleList(res)
        })
        get_classify_list().then((res) => {
            setClassifyList(res)
        })
    }, [])
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <ProFile userName={"YuanLi"}/>
            {
                articleList.map((article, index) => {
                    return (
                        <ArticleCard article={article} classifyList={classifyList} key={index}/>
                    )
                })
            }
            <div className={'mb-2 cursor-pointer'}>
                加载更多
            </div>
        </div>
    )
}
export default Dashboard
