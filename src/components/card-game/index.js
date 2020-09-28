import React from 'react';

import SteamLink from 'components/steam-link';
import LabelValue from 'components/label-value';
import formatLabel from 'utils/format-label';

export default function CardGame({ game, parameters = {}, className = '' }) {
  return (
    <div key={game.id} className={`card-game ${className}`}>
      <SteamLink steam={game.steam} />

      <div className="card-game-body">
        {Object.keys(parameters).map((key) => {
          return (
            <LabelValue
              key={key}
              label={`${formatLabel(key)}:`}
              value={parameters[key](game[key])}
            />
          );
        })}
      </div>
    </div>
  );
}
