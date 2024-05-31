import { useState, useContext, useEffect } from 'react'
import { AppContext, IAppContext } from '../context/AppContext';
import './button.css'


export function Button() {
    const [textContent, setTextContent] = useState<string>('')
    const [titleContent, setTitleContent] = useState<string>('')
    
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext


    
    function handleSave() {
        if(jsonData) {
            const obj = {
                id: 99, 
                title: titleContent,
                body: textContent,
                userid: 1,
            }
         
            jsonData.push(obj)
            setJsonData([...jsonData])
        }
    }


    return (
        <div className="editor">
            <input 
                type="text" 
                className="titolo" 
                placeholder="Inserisci titolo..."
                value={titleContent}
                onChange={(event) => setTitleContent(event.target.value)}
            />
            <textarea 
                className="editor" 
                id="editor" 
                placeholder="Scrivi qui..."
                value={textContent}
                onChange={(event) => setTextContent(event.target.value)}
            />
                <button id="save" onClick={() => handleSave()}>Salva</button>
            
        </div>
    )
}
