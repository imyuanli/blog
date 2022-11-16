import React, {useEffect, useRef} from 'react';
import Waline from "../components/waline";
import {useHref, useLocation, useParams} from "react-router-dom";
import {Card} from "antd";
import Title from "../components/title";

const Message = () => {
    const serverURL = 'https://waline-27yxp2m9l-imyuanli.vercel.app/';
    const location = useLocation()
    const path = location?.pathname
    return (
        <>
            <Title title={'留言板'} />
            <Card>
                <Waline serverURL={serverURL} path={path} />
            </Card>
        </>
    )
};

export default Message