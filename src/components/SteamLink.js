import React from 'react';

export default function SteamLink({ steam }) {
  if (steam) {
    return (
      <a
        className="steam-container"
        href={steam.steamUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="steam-image" src={steam.imageUrl} alt="" />
      </a>
    );
  }

  return (
    <div className="steam-container">
      <span className="steam-image">Sem informações da steam.</span>
    </div>
  );
}
