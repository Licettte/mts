import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { GameProps } from '@/components/game/gameType.ts';
import { GameCard } from '@/components/game/GameCard.tsx';

export const SideBarGenreInfo = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [isLoadedGame, setIsLoadedGame] = useState(false);

  const { name } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:8080/games/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return setGames(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setIsLoadedGame(true);
  //     });
  // }, [name]);

  return (
    <div>
      {name}
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
};
