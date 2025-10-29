import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: 'Designing RAG Systems with Azure AI Search & LangChain',
    platform: 'Medium',
    icon: <FaMedium />,
    link: 'https://medium.com/@vishnu-ai/designing-rag-systems-with-azure-ai-search-and-langchain',
    description: 'Architecture notes from building DoubtAI - lessons on prompt orchestration, embeddings, and evaluation.',
  },
  {
    title: 'Explaining Insurance Models with SHAP',
    platform: 'Medium',
    icon: <FaMedium />,
    link: 'https://medium.com/@vishnu-ai/explaining-insurance-models-with-shap',
    description: 'How we delivered transparent MLP predictions for underwriters at Neoware Technology Solutions.',
  },
  {
    title: 'Rust Embeddings for Semantic Search',
    platform: 'Dev.to',
    icon: <FaDev />,
    link: 'https://dev.to/vishnu-ai/rust-embeddings-for-semantic-search',
    description: 'Behind the scenes of my Rust-based FastText embeddings project, including performance benchmarks.',
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Writing & Talks</h2>
      <p className="blogs-intro">I document experiments, production learnings, and how I think about responsible AI.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
