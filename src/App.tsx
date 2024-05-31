import { useEffect, useState } from 'react'
import Head from './components/Head/head'
import { Button } from './components/bar/button'
import './App.css'
import Posta, { Post } from './components/posts/post'
import { AppContext } from './components/context/AppContext'


function App() {
  const [count, setCount] = useState<number>()
  const [jsonData, setJsonData] = useState<Posta[]>()

  const propTypes = {jsonData, setJsonData, setCount, count}

  useEffect(() => {
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
       .then(json => setJsonData(json.posts))
   }, [])

  return (
    <div className="App">
      <AppContext.Provider value={propTypes}>
      <Head />
      <Button></Button>
      <Post></Post>
      </AppContext.Provider>
    </div>
  )
}

export default App
