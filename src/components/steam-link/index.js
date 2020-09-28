import React from 'react';

const IMAGE_PLACEHOLDER =
  'https://via.placeholder.com/468x215?text=Sem informações da steam.';

export const WithoutSteamLink = () => (
  <div className="steam-container">
    <img className="steam-image" src={IMAGE_PLACEHOLDER} alt="" />
  </div>
);

export default function SteamLink({ steam }) {
  if (!steam) {
    return <WithoutSteamLink />;
  }

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
