import React from 'react';

import ApplicationLoading from 'components/ApplicationLoading';
import CardGame from 'components/CargGame';

export default function Application({ loading, games }) {
  return (
    <main className="application row">
      <ApplicationLoading loading={loading}>
        {games.map((game) => (
          <div className="col" key={game.id}>
            <CardGame game={game} />
          </div>
        ))}
      </ApplicationLoading>
    </main>
  );
}
