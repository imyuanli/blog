import React, {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
// 路由懒加载
const lazyLoad = (path: string) => {
    const Comp = lazy(() => import(/* @vite-ignore */`../pages/${path}.tsx`))
    return (
        <Suspense fallback={<>加载中...</>}>
            <Comp/>
        </Suspense>
    )
}

const routes: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad("index")
    }
]
export default routes