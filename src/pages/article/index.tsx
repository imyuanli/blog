import {useLocation, useParams} from "react-router-dom";
import {Button, Card, Divider, Tag} from "antd";
import {CaretLeftOutlined, CaretRightOutlined, TagOutlined} from "@ant-design/icons";
import Waline from "../../components/waline";
import React, {useEffect} from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

function Index() {
    const params = useParams()
    const articleId = params?.id
    const serverURL = 'https://waline-27yxp2m9l-imyuanli.vercel.app/';
    const location = useLocation()
    const path = location?.pathname

    //渲染code的样式
    useEffect(() => {
        Prism.manual = true;
        Prism.highlightAll()
    }, [])

    const html = '<pre><code class="language-python">print(123)</code></pre>' +
        '' +
        '<p>二者优先级：函数提升会优先于变量提升，而且不会被同名的变量覆盖，但是，如果这个同名变量已经赋值了，那函数变量就会被覆盖。当二者同时存在时，会先指向函数声明。</p><pre><code class="language-javascript">console.log(a);    //f a() {...}\n' +
        'console.log(a());    //2\n' +
        'var a = 1;\n' +
        'function a() {\n' +
        '  console.log(2);  \n' +
        '}\n' +
        'console.log(a);    //1\n' +
        'a = 3;\n' +
        'console.log(a());    //报错，现在的函数a已经被赋值过后的变量a给覆盖了，无法再调用a()</code></pre><p>上述代码相当于如下：</p><pre><code class="language-javascript">function a() {\n' +
        '  console.log(2);  \n' +
        '}\n' +
        'var a;\n' +
        'console.log(a);    //f a() {...}\n' +
        'console.log(a());    //2\n' +
        'a = 1;\n' +
        'console.log(a);    //1\n' +
        'a = 3;\n' +
        'console.log(a());    //报错，现在的函数a已经被赋值过后的变量a给覆盖了，无法再调用a()\n' +
        '</code></pre><p><br></p>' +
        '<pre><code class="language-sql">asdasddasd</code></pre><p><br></p>'

    //为pre标签添加 line-numbers
    useEffect(() => {
        const dgHtmlDOM = document.querySelectorAll('pre')
        for(let i of dgHtmlDOM){
            i.classList.add('line-numbers')
        }
    }, [html])
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center mb-12'}>
                <span className={'text-4xl mb-3 username relative'}>Card 组件</span>
                <div className={'text-lg'}>
                    <span>2022年05月14日</span>
                    <Divider type={'vertical'}/>
                    <span>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                        <Tag icon={<TagOutlined/>}>vue</Tag>
                    </span>
                </div>
            </div>
            <Card className={'rounded-xl w-full'}>
                <div className={''}>描述描述描述描述描述描述</div>
                <Divider/>
                <div className={'break-words'} dangerouslySetInnerHTML={{__html: html}}/>
                <Divider/>
                <div className={'flex justify-between'}>
                    <div className={'cursor-pointer hover:text-blue-400'}>
                        <CaretLeftOutlined/>
                        <span>上一篇</span>
                    </div>
                    <div className={'cursor-pointer hover:text-blue-400'}>
                        <span>下一篇</span>
                        <CaretRightOutlined/>
                    </div>
                </div>
                <Divider/>
                <Waline serverURL={serverURL} path={path} reaction={true}/>
            </Card>
        </>
    )
}

export default Index
