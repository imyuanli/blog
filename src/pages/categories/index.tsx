import React, {useEffect, useRef} from 'react';
import {Card} from "antd";
import Title from "../../components/title";
import ArticleCard from "../../components/article-card";

const Categories = () => {
    return (
        <>
            <Title title={'"随笔随笔"'} describe={'随笔随笔'}/>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </>
    )
};

export default Categories