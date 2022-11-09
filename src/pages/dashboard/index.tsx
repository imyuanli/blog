import './index.css'
import {
    CommentOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    RocketOutlined,
    TagOutlined
} from "@ant-design/icons";
import {BackTop, Button, Card, Tag} from "antd";
import {NavLink} from "react-router-dom";

const Index = () => {


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
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center mb-12'}>
                <span className={'text-4xl mb-3 relative'}>Miracle</span>
                <span className={'text-lg'}>Hi, nice to meet you!</span>
            </div>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <NavLink
                    to={'article/12'}
                    className={'contents'}
                >
                    <Card className={'w-full p-2 rounded-xl shadow-md mb-6 cursor-pointer hover:shadow-lg duration-300'}>
                        <div>
                            <div className={'text-3xl font-semibold mb-9'}>Card 组件</div>
                            <div className={'text-base mb-6 over-line'} dangerouslySetInnerHTML={{__html:html}} />
                            <div className={'flex justify-between'}>
                                <div className={'flex'}>
                                    <Tag icon={<TagOutlined/>}>vue</Tag>
                                </div>
                                <div className={'flex'}>
                                    <div className={'mr-3'}>
                                        <FieldTimeOutlined className={'mr-1'}/>
                                        <span>2021-01-21</span>
                                    </div>
                                    <div className={'mr-3'}>
                                        <EyeOutlined className={'mr-1'}/>
                                        <span>123</span>
                                    </div>
                                    <div>
                                        <CommentOutlined className={'m-1'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </NavLink>
            </div>
        </>
    )
}
export default Index
