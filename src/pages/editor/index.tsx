import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useState, useEffect, useRef} from 'react'
// @ts-ignore
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {
    Button,
    DatePicker,
    Input,
    Modal,
    Select,
    Upload
} from "antd";
import {LoadingOutlined, PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";

function MyEditor() {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
    // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p>hello world</p>')
        }, 500)
    }, [])

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

    //文章类型
    const [type, setType] = useState('1')

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

    //添加关键词
    const [tags, setTags] = useState<any>([])
    const handleChange = (value: string) => {
        setTags(value)
    };
    return (
        <>
            <div className={'mb-3'}>
                <div className={'flex justify-between mb-3'}>
                    <div className={'flex-1 mr-3'}>
                        <Input placeholder={'标题'} className={'mb-3'}/>
                        <Input placeholder={'描述'} className={'mb-3'}/>
                        <Select
                            mode="tags"
                            style={{width: '50%'}}
                            placeholder="添加关键词"
                            onChange={handleChange}
                            className={'mb-3 mr-3'}
                        />
                        <DatePicker placeholder={'时间'} className={'mb-3 mr-3'}/>
                        <Select
                            defaultValue={type}
                            // onChange={handleChange}
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
                        <div>
                            <Select
                                // defaultValue={type}
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
                            <Button size={'small'} shape="circle" type={'primary'} icon={<PlusCircleOutlined/>}
                                    onClick={toggleVisible}/>
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
                <div>
                    <Button className={'mr-3'}>存草稿</Button>
                    <Button>发布</Button>
                </div>
            </div>
            {/*<button onClick={() => {*/}
            {/*    console.log(editor?.getHtml())*/}
            {/*}}>da*/}
            {/*</button>*/}
            <div style={{zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{borderBottom: '1px solid #ccc'}}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={(editor: any) => setHtml(editor.getHtml())}
                    mode="simple"
                    style={{overflowY: 'hidden', height: '500px'}}
                />
            </div>
            {/*<div dangerouslySetInnerHTML={{__html: html}}/>*/}
        </>
    )
}

export default MyEditor