import React, {useEffect, useRef} from 'react';
import {ClockCircleOutlined, SmileOutlined} from "@ant-design/icons";
import {Card, Timeline} from "antd";


const Archives = () => {
    return (
        <Card>
            <Timeline>
                <Timeline.Item color="#10b981" dot={<ClockCircleOutlined style={{ fontSize: '22px' }} />}>
                    <span style={{ fontSize: '22px' }}>2022</span>
                </Timeline.Item>
                <Timeline.Item color="green">2020</Timeline.Item>
                <Timeline.Item color="green">2019</Timeline.Item>
                <Timeline.Item color="#10b981" dot={<ClockCircleOutlined style={{ fontSize: '22px' }} />}>
                    <span style={{ fontSize: '22px' }}>2021</span>
                </Timeline.Item>
                <Timeline.Item color="green">2020</Timeline.Item>
                <Timeline.Item color="green">2019</Timeline.Item>
                <Timeline.Item color="#10b981" dot={<ClockCircleOutlined style={{ fontSize: '22px' }} />}>
                    <span style={{ fontSize: '22px' }}>2020</span>
                </Timeline.Item>
                <Timeline.Item color="green">2020</Timeline.Item>
                <Timeline.Item color="green">2019</Timeline.Item>
            </Timeline>
        </Card>
    )
};

export default Archives