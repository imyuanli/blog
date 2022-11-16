import React, {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import {LoadingOutlined} from "@ant-design/icons";
// 路由懒加载
const lazyLoad = (path: string) => {
    const Comp = lazy(() => import(/* @vite-ignore */`../pages/${path}.tsx`))
    return (
        <Suspense fallback={
            <div className={'flex justify-center'}>
                加载中{" "}<LoadingOutlined/>
            </div>
        }
        >
            <Comp/>
        </Suspense>
    )
}

const routes: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad("dashboard")
    },
    {
        path: '/article/:id',
        element: lazyLoad("article")
    },
    {
        path: '/message',
        element: lazyLoad("message")
    },
    {
        path: '/links',
        element: lazyLoad("links")
    },
    {
        path: '/about',
        element: lazyLoad("about")
    },
    {
        path: '/login',
        element: lazyLoad("login")
    },
    {
        path: '/categories/:category',
        element: lazyLoad("categories")
    },
    {
        path: '*',
        element: lazyLoad("404")
    },
    {
        path: '/editor',
        element: lazyLoad("editor")
    },
    {
        path: '/backstage',
        element: lazyLoad("backstage/index"),
        children: [
            {
                path: 'user',
                element: lazyLoad('backstage/user')
            },
        ]
    },
]
export default routes