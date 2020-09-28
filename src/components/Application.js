import React from 'react';

import ApplicationLoading from 'components/ApplicationLoading';
import CardGame from 'components/card-game';

export default function Application({ loading, games }) {
  return (
    <main className="application row">
      <ApplicationLoading loading={loading}>
        {!!games.length &&
          games.map((game) => (
            <div className="col-4" key={game.id}>
              <CardGame
                game={game}
                parameters={{
                  title: (value) => value,
                  publisher: (value) => value,
                  isFullyOptimized: (value) => value,
                  genres: (value) => (value ? value.join(', ') : ''),
                }}
              />
            </div>
          ))}
        {!games.length && <ApplicationEmpty />}
      </ApplicationLoading>
    </main>
  );
}

function ApplicationEmpty() {
  return <p className="application-empty">Nenhum jogo foi encontrado.</p>;
}
