import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useState, useEffect} from 'react'
// @ts-ignore
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {DatePicker, Input, message} from "antd";

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

    return (
        <>
            <div>
                <Input placeholder={'标题'} className={'mb-3'}/>
                <Input placeholder={'描述'} className={'mb-3'}/>
                <DatePicker placeholder={'时间'} className={'mb-3'}/>
                封面
                文章标签
                分类专栏
                文章类型
                发布形式
                保存为草稿
                发布
            </div>
            <button onClick={()=>{
                console.log(editor?.getHtml())}}>da</button>
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