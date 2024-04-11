import { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { GameCard, GameProps } from '@/components/GameCard/GameCard.tsx';
import { ThreeColumn } from '@/styles/ThreeColumn.tsx';
import styled from '@emotion/styled';

const WrapperMain = styled.div`
 
`;

export const PageMain = () => {

  const [games, setGames] = useState<GameProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [valueSearchGame, setValueSearchGame] = useState('');

  const api = 'http://localhost:3001/game';
  // const getCountries = () => {
  //   axios.get(api).then((response) => {
  //     setGames(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getCountries();
  // }, []);

  console.log(games, "games");
  useEffect(
    () => {
      fetch(api)
        .then(response => response.json())
        .then(data => {
          return setGames(data);

        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoaded(true);
        });

    }, []);

  const onChangeSearchGame = (e: any) => {
    setValueSearchGame(e.target.value);
  };

  const filterGame =games.filter(game => {

     return game.name?.toLowerCase().includes(valueSearchGame.toLowerCase());

  });

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  return (
    <WrapperMain>
      {/*<input type="text" onChange={onChangeSearchGame} />*/}
      <Search size="large" placeholder="поиск" enterButton onSearch={onSearch}
              onChange={onChangeSearchGame}
              style={{ width: 400, padding: '30px' }}
      />
      <ThreeColumn>
        {filterGame.map((game) => {
          return <GameCard   {...game} key={game.id} />;
        })}
      </ThreeColumn>

    </WrapperMain>
  );
};

