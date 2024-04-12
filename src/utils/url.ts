const backendUrl = import.meta.env.VITE_BASE_URL;
export const baseUrl = `http://${backendUrl}/`;

export enum GamesServiceEndpoints {
  GENRES= 'genres',
  GAMES = 'games',
  BUY = 'buy',
}
