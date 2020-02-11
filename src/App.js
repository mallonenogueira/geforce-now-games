import React from "react";
import "./styles.css";

const API =
  "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON";

export default function App() {
  const [games, setGames] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [filtersObject, setFiltersObject] = React.useState({
    title: "",
    publisher: "",
    isFullyOptimized: "",
    isHighlightsSupported: "",
    genres: ""
  });

  // const [genres, setGenres] = React.useState("");
  // const [title, setTitle] = React.useState("");
  // const [publisher, setPublisher] = React.useState("");
  // const [isFullyOptimized, setFullyOptimized] = React.useState("");
  // const [isHighlightsSupported, setHighlightsSupported] = React.useState("");

  React.useEffect(() => {
    fetch(API)
      .then(data => data.json())
      .then(dataGames =>
        dataGames.map(game => {
          if (game.steamUrl) {
            game.steamId = game.steamUrl.split("/app/")[1];
            game.imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${
              game.steamId
            }/capsule_184x69.jpg`;
          }
          return game;
        })
      )
      .then(dataGames => setGames(dataGames));
  }, []);

  React.useEffect(() => {
    let f = games.filter(game => {
      let filtrar = true;
      Object.keys(filtersObject).forEach(label => {
        if (
          filtrar &&
          !game[label]
            .toString()
            .toLowerCase()
            .includes(filtersObject[label].toLowerCase())
        ) {
          filtrar = false;
        }
      });

      return filtrar;
    });

    setFilters(f);
  }, [games, filtersObject]);

  return (
    <div>
      {Object.keys(filtersObject).map(label => (
        <div>
          <label key={label}>
            <span>{label}</span>
            <input
              value={filtersObject[label]}
              onChange={e =>
                setFiltersObject({
                  ...filtersObject,
                  [label]: e.target.value
                })
              }
            />
          </label>
        </div>
      ))}

      <div className="App">
        {filters.map(game => (
          <div key={game.id} className="col">
            {game.imageUrl ? (
              <img className="image" src={game.imageUrl} alt="" />
            ) : (
              <span className="image">Sem informações da steam</span>
            )}
            <div>
              <span className="label">title:</span> {game.title}
            </div>
            <div>
              <span className="label">isFullyOptimized:</span>
              {"" + game.isFullyOptimized}
            </div>
            <div>
              <span className="label">isHighlightsSupported:</span>
              {"" + game.isHighlightsSupported}
            </div>
            <div>
              <span className="label">publisher:</span> {game.publisher}
            </div>
            <div>
              <span className="label">genres:</span> {game.genres.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
