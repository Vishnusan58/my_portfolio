import React from 'react';
import './Music.css';

const favoriteGenres = ['Lo-fi', 'Tamil Indie', 'Instrumental Focus', 'Study Beats', 'Ambient Electronica'];

const favoriteAlbums = [
  {
    title: 'Echoes of AI',
    artist: 'Lo-Fi Coding Sessions',
    imgSrc: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pournami Nights',
    artist: 'Tamil Indie Collective',
    imgSrc: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Parallel Worlds',
    artist: 'Instrumental Architects',
    imgSrc: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c4?auto=format&fit=crop&w=600&q=80',
  },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>Music keeps my flow-state alive - from building models to writing technical blogs.</p>
      </div>

      <div className="genre-section">
        <h3>Soundtrack to my build sessions</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Current favourites</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
