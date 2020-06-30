import React, { useEffect, useState } from 'react';

import GameService from 'services/games';
import Header from 'components/Header';
import Application from 'components/Application';

import 'styles.css';

function filtersByFilterObject(filters) {
  const filledKeys = Object.keys(filters).filter((field) => filters[field]);

  if (!filledKeys.length) {
    return () => true;
  }

  return (data) => {
    return filledKeys.find((label) => {
      return !!data[label]
        .toString()
        .toLowerCase()
        .includes(filters[label].toLowerCase());
    });
  };
}

function createDebounce() {
  let id = null;

  return (fn) => (wait) => {
    clearTimeout(id);

    if (wait > 0) {
      id = setTimeout(fn, wait);
    } else {
      fn();
    }
  };
}

const debounce = createDebounce();

export default function App() {
  const [games, setGames] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(true);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    publisher: '',
    isFullyOptimized: '',
    isHighlightsSupported: '',
    genres: '',
  });

  useEffect(() => {
    GameService.fetchGames()
      .then((dataGames) => setGames(dataGames))
      .then(() => setFetching(false));
  }, []);

  useEffect(() => {
    debounce(() => setLoading(true))(0);

    setFilteredGames(games.filter(filtersByFilterObject(filters)));

    debounce(() => setLoading(false))(250);
  }, [games, filters]);

  return (
    <>
      <Header
        title="GeForce-Now | Games"
        filters={filters}
        onChangeFilters={(label, value) => {
          setFilters({
            ...filters,
            [label]: value,
          });
        }}
      />

      <Application loading={loading || fetching} games={filteredGames} />
    </>
  );
}
