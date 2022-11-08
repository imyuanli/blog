import React, {useEffect, useRef} from 'react';
import Waline from "../../components/waline";
import {useHref, useLocation, useParams} from "react-router-dom";

const LeaveMsg = () => {
    const serverURL = 'https://waline-27yxp2m9l-imyuanli.vercel.app/';
    const location = useLocation()
    const path = location?.pathname
    return (
        <Waline serverURL={serverURL} path={path} />
    )
};

export default LeaveMsg