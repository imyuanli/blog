import {metadata} from "../utils/util";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-2 flex space-x-2 text-sm">
                    <div>{metadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link to={'/'}>{metadata.title}</Link>
                </div>
            </div>
        </footer>
    );
}


export default Footer