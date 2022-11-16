import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useState, useEffect, useRef} from 'react'
// @ts-ignore
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {
    Button, Card,
    DatePicker,
    Input,
    Modal,
    Select,
    Upload
} from "antd";
import {LoadingOutlined, PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {useSetState} from "ahooks";

function MyEditor() {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
    // 编辑器内容

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    //最终数据的保存
    const [state, setState] = useSetState(
        {
            title: "",
            describe: "",
            content: "",
            cover: "",
            type: "",
            keywords: "",
            custom_time: "",
            categorizeId: ''
        }
    )

    //上传图片
    const [imageUrl, setImgUrl] = useState(null)
    const [loading, setLoading] = useState(false);
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    //modal打开关闭
    const [isModalOpen, setInputVisible] = useState(false);
    const toggleVisible = () => {
        setInputVisible(!isModalOpen)
    }

    //添加分类
    const [categorize_name, setCategorizeName] = useState("")
    const handleEditInputName = (e: any) => {
        setCategorizeName(e.target.value)
    }
    const [categorize_desc, setCategorizeDesc] = useState("")
    const handleEditInputDesc = (e: any) => {
        setCategorizeDesc(e.target.value)
    }
    //成功回调
    const handleOk = () => {
        console.log(categorize_name)
        console.log(categorize_desc)
    }

    // // 模拟 ajax 请求，异步设置 html
    // useEffect(() => {
    //     // setTimeout(() => {
    //     //     setHtml('<p>hello world</p>')
    //     // }, 500)
    // }, [])

    const handleSave = () => {
        console.log(state)
    }
    return (
        <Card>
            <div className={'mb-3'}>
                <div className={'flex justify-between mb-3'}>
                    <div className={'flex-1 mr-3'}>
                        <Input
                            placeholder={'标题'}
                            className={'mb-3'}
                            onChange={(e) => {
                                setState({title: e.target.value})
                            }}
                        />
                        <Input
                            placeholder={'描述'}
                            className={'mb-3'}
                            onChange={(e) => {
                                setState({describe: e.target.value})
                            }}
                        />
                        <Select
                            mode="tags"
                            style={{width: '50%'}}
                            placeholder="添加关键词"
                            onChange={(value) => {
                                setState({keywords: value})
                            }}
                            className={'mb-3 mr-3'}
                        />
                        <DatePicker
                            placeholder={'时间'}
                            className={'mb-3 mr-3'}
                            onChange={(date, dateString) => {
                                setState({custom_time: dateString})
                            }}
                        />
                        <Select
                            placeholder="选择文章类型"
                            onChange={(value) => {
                                setState({type: value})
                            }}
                            options={[
                                {
                                    value: '1',
                                    label: '原创',
                                },
                                {
                                    value: '2',
                                    label: '转载',
                                },
                                {
                                    value: '3',
                                    label: '翻译',
                                },
                            ]}
                            className={'mb-3 mr-3'}
                        />
                    </div>
                    <div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            // beforeUpload={beforeUpload}
                            // onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                        </Upload>
                    </div>
                </div>
                <div className={'flex justify-between'}>
                    <div>
                        <Select
                            onChange={(value) => {
                                setState({categorizeId: value})
                            }}
                            placeholder="选择分类"
                            options={[
                                {
                                    value: '2',
                                    label: '随笔与杂谈',
                                },
                                {
                                    value: '3',
                                    label: '翻译',
                                },
                            ]}
                            className={'mb-3'}
                        />
                        <Button size={'small'}
                                shape="circle"
                                type={'primary'}
                                icon={<PlusCircleOutlined/>}
                                onClick={toggleVisible}
                        />
                    </div>
                    <div>
                        <Button type={"primary"} className={'mr-3'}>存草稿</Button>
                        <Button type={"primary"} onClick={handleSave}>发布</Button>
                    </div>
                </div>
                <Modal
                    title={'添加分类'}
                    open={isModalOpen}
                    onCancel={toggleVisible}
                    onOk={handleOk}
                >
                    <Input
                        placeholder={'输入分类名称'}
                        className={'mb-3'}
                        onChange={(e) => {
                            handleEditInputName(e)
                        }}
                    />
                    <Input
                        placeholder={'输入分类描述'}
                        onChange={(e) => {
                            handleEditInputDesc(e)
                        }}
                    />
                </Modal>
            </div>
            <div style={{zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{borderBottom: '1px solid #ccc'}}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={state?.content}
                    onCreated={setEditor}
                    onChange={(editor: any) => setState({content: editor.getHtml()})}
                    mode="simple"
                    style={{overflowY: 'hidden', height: '500px'}}
                />
            </div>
            {/*<div dangerouslySetInnerHTML={{__html: html}}/>*/}
        </Card>
    )
}

export default MyEditor