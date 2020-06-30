const GEFORCE_URL =
  'https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON';

export default class GameService {
  static fetchGames() {
    return fetch(GEFORCE_URL)
      .then((data) => data.json())
      .then((games) => games.map(GameService.mapSteam));
  }

  static mapSteam(game = {}) {
    const steam = {};

    if (game.steamUrl) {
      [, steam.id] = game.steamUrl.split('/app/');
      steam.steamUrl = game.steamUrl;
      steam.smallImageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${steam.id}/capsule_184x69.jpg`;
      steam.imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${steam.id}/header.jpg`;
    }

    return {
      ...game,
      steamUrl: undefined,
      steam: steam.id ? steam : null,
    };
  }
}
