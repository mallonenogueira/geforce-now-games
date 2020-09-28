import React, { useEffect, useState } from 'react';

import GameService from 'services/games';
import Header from 'components/header';
import Application from 'components/Application';

import 'styles.css';
import createDebounce from 'utils/debounce';

function filtersByFilterObject(filters) {
  const filledKeys = Object.keys(filters).filter(
    (field) => filters[field].isFiltering
  );

  if (!filledKeys.length) {
    return () => true;
  }

  return (data) => {
    return filledKeys.find((label) => {
      return !!data[label]
        .toString()
        .toLowerCase()
        .includes(filters[label].value.toLowerCase());
    });
  };
}

const debounce = createDebounce();

export default function App() {
  const [games, setGames] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(true);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filters, setFilters] = useState({
    title: { value: '', isFiltering: false, alwaysVisible: true },
    publisher: { value: '', isFiltering: false, alwaysVisible: true },
    isFullyOptimized: { value: '', isFiltering: false },
    genres: { value: '', isFiltering: false },
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
        mobileTitle="GF-Now Games"
        filters={filters}
        onChangeFilters={(label, value) => {
          setFilters({
            ...filters,
            [label]: {
              value,
              isFiltering: !!value,
            },
          });
        }}
      />

      <Application loading={loading || fetching} games={filteredGames} />
    </>
  );
}
