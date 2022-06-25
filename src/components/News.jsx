import React from "react";
import NewsItem from "./NewsItem";

const News = ({ items }) => {
  return (
    <section className="view">
      <div className='container'>
        <nav className='cards'>
          {items.map((item,index) => {
            return <NewsItem key={index} item={item} />;
          })}
        </nav>
      </div>
    </section>
  );
};

export default News;
