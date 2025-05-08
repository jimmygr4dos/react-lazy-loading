import React from 'react';
import LazyImage from './LazyImage';
import './App.css';

function App() {
  const imagenes = Array.from({ length: 10 }, (_, i) => `https://picsum.photos/800/400?random=${i + 1}`);

  return (
    <div className="app-container">
      <h1 className="app-title">Galería con Lazy Loading 🚀</h1>
      {imagenes.map((url, i) => (
        <LazyImage key={i} src={url} alt={`Imagen ${i + 1}`} />
      ))}
    </div>
  );
}

export default App;
