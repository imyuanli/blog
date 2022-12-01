import ProFile from "../components/profile";
import {useTitle} from "ahooks";
import ArticleCard from "../components/article-card";
import React, {useEffect, useState} from "react";
import {get_articles_list, get_classify_list} from "../service/service";
import Title from "../components/title";
import {useParams} from "react-router-dom";

const Dashboard = () => {
    useTitle("YuanLi‘s Blog");
    //获取文章列表
    const [articleList, setArticleList] = useState([])
    //分类列表
    const [classifyList, setClassifyList] = useState([])

    //获取分类的文章
    const params = useParams()
    const classifyName = params?.name
    useEffect(() => {
        get_articles_list({classifyName}).then((res) => {
            setArticleList(res)
        })
        get_classify_list().then((res) => {
            setClassifyList(res)
        })
    }, [classifyName])

    //获取分类的详细信息
    const getClassifyItem = (classifyName:any) => {
        return classifyList.find((item: any) => {
            return item.classify_name == classifyName
        })
    }
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            {
                classifyName ?
                    <Title value={getClassifyItem(classifyName)}/>
                    :
                    <ProFile userName={"YuanLi"}/>
            }
            {
                articleList.map((article, index) => {
                    return (
                        <ArticleCard article={article} classify={getClassifyItem(article["classify_name"])} key={index}/>
                    )
                })
            }
            {/*<div className={'mb-2 cursor-pointer'}>*/}
            {/*    加载更多*/}
            {/*</div>*/}
        </div>
    )
}
export default Dashboard
