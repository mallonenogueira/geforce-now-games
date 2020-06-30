import React from 'react';

import ApplicationLoading from 'components/ApplicationLoading';
import CardGame from 'components/CargGame';

export default function Application({ loading, games }) {
  return (
    <main className="application row">
      <ApplicationLoading loading={loading}>
        {!!games.length &&
          games.map((game) => (
            <div className="col-4" key={game.id}>
              <CardGame game={game} />
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
