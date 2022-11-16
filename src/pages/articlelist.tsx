import React, {useState} from 'react';
import {Button, Space, Table, Tabs, Tag} from "antd";
import {ColumnsType} from "antd/es/table";

interface DataType {
    key: string;
    title: string;
    type: string,
    categorizeId: string;
    tags: string[];
    updatedAt: string,
}


const Articlelist = () => {
    const [activeKey, setActiveKey] = useState('1')
    const onChange = (value: string) => {
        setActiveKey(value)
    };
    const columns: ColumnsType<DataType> = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '文章类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '所属分类',
            dataIndex: 'categorizeId',
            key: 'categorizeId'
        },
        {
            title: '关键词',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, {tags}) => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '最近更新时间',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type={'primary'}>
                        编辑
                    </Button>
                    {
                        activeKey == '1' ?
                            <Button danger>
                                下架
                            </Button>
                            :
                            <Button>
                                上架
                            </Button>
                    }

                </Space>
            ),
        },
    ];
    const publishData: DataType[] = [
        {
            key: '0',
            title: '随笔随笔',
            categorizeId: '随笔',
            tags: ['nice', 'developer'],
            type: "原创",
            updatedAt: '2019',
        }
    ];
    const unPublishData: DataType[] = [
        {
            key: '0',
            title: '最近更新时间',
            categorizeId: 'John Brown',
            tags: ['nice', 'developer'],
            type: "原创",
            updatedAt: '2019',
        }
    ];
    return (
        <div>
            <Tabs
                defaultActiveKey={activeKey}
                onChange={onChange}
                items={[
                    {
                        label: `已发布`,
                        key: '1',
                        children: <Table
                            // scroll={{ x: 600, y: 300 }}
                            columns={columns} dataSource={publishData}/>,
                    },
                    {
                        label: `未发布`,
                        key: '0',
                        children: <Table columns={columns} dataSource={unPublishData}/>,
                    },
                ]}
            />
        </div>
    )
};

export default Articlelist