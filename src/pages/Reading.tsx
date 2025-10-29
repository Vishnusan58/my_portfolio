import React from 'react';
import './Reading.css';

const books = [
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    imgSrc: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description: 'Essential mental models for distributed systems and the data platforms behind modern AI products.',
  },
  {
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow',
    author: 'Aurélien Géron',
    imgSrc: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80',
    description: 'My go-to reference for rapidly prototyping and validating machine learning ideas in Python.',
  },
  {
    title: 'Deep Learning with Python',
    author: 'François Chollet',
    imgSrc: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=400&q=80',
    description: 'Helped me internalise Keras fundamentals and accelerate my computer vision research.',
  },
  {
    title: 'Building Microservices',
    author: 'Sam Newman',
    imgSrc: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=400&q=80',
    description: 'Shaping how I architect data and AI services that are resilient, testable, and team-friendly.',
  },
  {
    title: 'Storytelling with Data',
    author: 'Cole Nussbaumer Knaflic',
    imgSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'Guides my approach to building dashboards and presenting insights to business partners.',
  },
  {
    title: 'Range',
    author: 'David Epstein',
    imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    description: 'A reminder that polymathic thinking - across coding, analytics, and storytelling - compounds over time.',
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">Books Powering My Curiosity</h2>
      <p className="reading-intro">I read to blend systems thinking, machine learning craft, and storytelling.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
