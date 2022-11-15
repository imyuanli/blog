import ProFile from "../../components/profile";
import {useTitle} from "ahooks";
import ArticleCard from "../../components/article-card";

const Index = () => {
    useTitle("YuanLi‘s Blog");
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <ProFile userName={"YuanLi"}/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </div>
    )
}
export default Index
