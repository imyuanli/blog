import './App.css'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import routes from "./router";
import {useRoutes} from "react-router-dom";

function App() {
    const views = useRoutes(routes)
    return (
        <div className="App">
            {views}
        </div>
    )
}

export default App
