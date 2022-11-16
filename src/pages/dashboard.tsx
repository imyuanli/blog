import ProFile from "../components/profile";
import {useTitle} from "ahooks";
import ArticleCard from "../components/article-card";

const Dashboard = () => {
    useTitle("YuanLi‘s Blog");
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <ProFile userName={"YuanLi"}/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <div className={'mb-2 cursor-pointer'}>
                加载更多
            </div>
        </div>
    )
}
export default Dashboard
