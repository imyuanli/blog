import React, {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import {Spin} from "antd";
// 路由懒加载
const lazyLoad = (path: any) => {
    const Comp = lazy(() => import(`../pages/${path}.tsx`))

    return (
        <Suspense fallback={
            <div className={'flex justify-center'}>
                <Spin size="large"/>
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
        element: lazyLoad("index")
    },
    // {
    //     path: '/:name',
    //     element: lazyLoad("dashboard")
    // },
    // {
    //     path: '/article/:id',
    //     element: lazyLoad("article")
    // },
    // {
    //     path: '/message',
    //     element: lazyLoad("message")
    // },
    // {
    //     path: '/links',
    //     element: lazyLoad("links")
    // },
    // {
    //     path: '/about',
    //     element: lazyLoad("about")
    // },
    // {
    //     path: '/login',
    //     element: lazyLoad("login")
    // },
    // {
    //     path: '*',
    //     element: lazyLoad("404")
    // },
    // {
    //     path: '/editor',
    //     element: lazyLoad("editor")
    // },
    // {
    //     path: '/backstage',
    //     element: lazyLoad("backstage"),
    //     children: [
    //         {
    //             path: 'editor',
    //             element: lazyLoad('editor')
    //         },
    //         {
    //             path: 'articlelist',
    //             element: lazyLoad('articlelist')
    //         },
    //         {
    //             path: 'categorylist',
    //             element: lazyLoad('categorylist')
    //         },
    //         {
    //             path: 'user',
    //             element: lazyLoad('user')
    //         },
    //     ]
    // },
]
export default routes