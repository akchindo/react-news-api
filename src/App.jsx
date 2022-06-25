import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import Header from './components/Header'
import News from './components/News'
import Search from './components/Search'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')




  useEffect(() => {
    const getItems = async () => {
      const newsFromApi = await fetchNews()
      setItems(newsFromApi)
      setIsLoading(false)
    }
    
    getItems()

    console.log(items)
    
    

  }, [])

  const fetchNews = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=f4f34cd5b0bd49889c0c3a2fee711c3a')
    const response = await res.json()
    const data =  response.articles

    console.log(data)
    

    return data
  }

  //  const par = items.map((item) => {
     
  //    return( 

  //     <div>
  //       <img src={item.urlToImage} alt="" />
  //        <p>{item.title}</p>
  //       <h1>{item.description}</h1>
  //       <h4>{item.author}</h4>
  //       <a href={item.url}>click for more</a>
  //     </div>
  //    )
         
  //  })

  return (
    <div className="App">
      < Header />
      < Search  getQuery={(q) => setQuery(q)} />
      { isLoading ? <p>News is Loading ...</p> : < News items={items} />}
    </div>
  )
}

export default App;
