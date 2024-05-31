import { useContext, useState } from 'react'
import { AppContext, IAppContext } from '../context/AppContext';
import './post.css';

interface Posta {
 id: number | undefined, title: string | undefined, userid: number | null, body: string
}
export default Posta;

export function Post() {
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext

    return (
        <div className="posts">
            <ul id="posts-list">
                {jsonData?.slice().reverse().map((item: Posta, index) => (
                    <div key={index} className="post">
                        <p> title: {item.title}</p>
                        <p>body: {item.body}</p>
                        <hr></hr>
                        <br></br>
                    </div>
                ))}
            </ul>
        </div>
    )
}
