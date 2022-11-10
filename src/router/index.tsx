import React, {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import {LoadingOutlined} from "@ant-design/icons";
// 路由懒加载
const lazyLoad = (path: string) => {
    const Comp = lazy(() => import(/* @vite-ignore */`../pages/${path}/index.tsx`))
    return (
        <Suspense fallback={
            <div className={'flex justify-center '}>
                加载中{" "}<LoadingOutlined />
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
        path: '/editor',
        element: lazyLoad("editor")
    },
    {
        path: '/archives',
        element: lazyLoad("archives")
    },
    {
        path: '/links',
        element: lazyLoad("links")
    },
    {
        path: '/tags',
        element: lazyLoad("tags")
    },
    {
        path: '/about',
        element: lazyLoad("about")
    },
    {
        path: '/about',
        element: lazyLoad("about")
    },
    {
        path: '/categories',
        element: lazyLoad("categories")
    },
]
export default routes