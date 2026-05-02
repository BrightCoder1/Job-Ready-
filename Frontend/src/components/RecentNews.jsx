// RecentNews.jsx

import React from "react";
import "./css/RecentNews.css";

const newsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    date: "24",
    month: "Now",
    title: "The Future of Remote Work in Modern Companies",
    desc: "Explore how businesses are adapting to remote work culture and digital collaboration tools.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    date: "24",
    month: "Now",
    title: "Top Career Tips for Fresh Graduates in 2026",
    desc: "Discover the best strategies to build a successful career and stand out in the job market.",
  },
];

const RecentNews = () => {
  return (
    <section className="recent-news">
      <div className="news-header">
        <p>OUR LATEST BLOG</p>
        <h1>Our recent news</h1>
      </div>

      <div className="news-container">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="image-box">
              <img src={news.image} alt="news" />

              <div className="date-box">
                <h2>{news.date}</h2>
                <span>{news.month}</span>
              </div>
            </div>

            <div className="news-content">
              <h2>{news.title}</h2>
              <p>{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentNews;