import React from 'react';

import SteamLink from 'components/SteamLink';
import LabelValue from 'components/LabelValue';
import formatLabel from 'utils/format-label';

export default function CardGame({ game, className = '' }) {
  return (
    <div key={game.id} className={`card-game ${className}`}>
      <SteamLink steam={game.steam} />

      <LabelValue label={formatLabel('title:')} value={game.title} />
      <LabelValue label={formatLabel('publisher:')} value={game.publisher} />
      <LabelValue
        label={formatLabel('isFullyOptimized:')}
        value={game.isFullyOptimized}
      />
      <LabelValue
        label={formatLabel('isHighlightsSupported:')}
        value={game.isHighlightsSupported}
      />
      <LabelValue
        label={formatLabel('genres:')}
        value={game.genres.join(', ')}
      />
    </div>
  );
}
