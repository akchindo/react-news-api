import React from 'react'

const NewsItem = ({item}) => {
  return (
    <div className='card' >
        {/* <img src={item.urlToImage} alt="" /> */}
        <p> <strong>Title</strong> : {item.title}</p>
        <p> <strong>Author</strong> : {item.author}</p>
        <p> <strong>Description</strong> :  {item.description}</p>

    </div>
  )
}

export default NewsItem