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
      <img
        className="steam-image"
        src="https://via.placeholder.com/468x215?text=Sem informações da steam."
        alt=""
      />
    </div>
  );
}
