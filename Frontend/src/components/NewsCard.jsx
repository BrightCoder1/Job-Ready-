// NewsCard.jsx

import React, { useState } from "react";
import "./css/AboutMain.css";

const cardData = [
  {
    id: 1,
    image: "https://themewagon.github.io/jobfinderportal/assets/img/blog/home-blog1.jpg",
    category: "Properties",
    title: "Footprints in Time is perfect House in Kurashiki",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero. Doloremque, minima. Aspernatur deserunt magni porro nemo natus.",
  },
  {
    id: 2,
    image: "https://themewagon.github.io/jobfinderportal/assets/img/blog/home-blog2.jpg",
    category: "Properties",
    title: "Footprints in Time is perfect House in Kurashiki",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero. Doloremque, minima. Aspernatur deserunt magni porro nemo natus.",
  },
];

const NewsCard = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleReadMore = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="news-container">
      {cardData.map((card) => (
        <div className="news-card" key={card.id}>
          {/* Image Section */}
          <div className="news-image">
            <img src={card.image} alt="news" />

            <div className="date-box">
              <h2>24</h2>
              <span>Now</span>
            </div>
          </div>

          {/* Content */}
          <div className="news-content">
            <p className="category">| {card.category}</p>

            <h2>{card.title}</h2>

            <button
              className="read-more"
              onClick={() => toggleReadMore(card.id)}
            >
              {openCard === card.id ? "READ LESS ▲" : "READ MORE »"}
            </button>

            {/* Hidden Paragraph */}
            {openCard === card.id && (
              <p className="description">
                {card.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;