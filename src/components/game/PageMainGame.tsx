import { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import { Key, ReactNode, useEffect, useState } from 'react';
import { GameCard, GameProps } from '@/components/game/GameCard.tsx';
import { ThreeColumn } from '@/styles/ThreeColumn.tsx';
import styled from '@emotion/styled';
import { Menu, MenuProps } from 'antd';
import { FlexStyle } from '@/styles/Flex.tsx';
import { LIGHT_COLOR } from '@/styles/colors.ts';

export const WrapperMain = styled(FlexStyle)`
    width: 70%;
    color: ${LIGHT_COLOR};
    align-items: center;
    justify-content: center;
`;

export const ContentMain = styled(FlexStyle)`
    height: 500px;
`;

export const PageMainGame = () => {

  const [games, setGames] = useState<GameProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [valueSearchGame, setValueSearchGame] = useState('');

  const api = 'http://localhost:3001/game';


  console.log(games, 'games');
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

  const filterGame = games.filter(game => {

    return game.name?.toLowerCase().includes(valueSearchGame.toLowerCase());

  });

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  return (
    <WrapperMain $align="stretch">

      {/*<input type="text" onChange={onChangeSearchGame} />*/}
      <ContentMain $direction="column" $align="center">
        <Search size="large" placeholder="поиск" enterButton onSearch={onSearch}
                onChange={onChangeSearchGame}
                style={{ width: 400, padding: '30px' }}
        />
        <ThreeColumn>
          {filterGame.map((game) => {
            return <GameCard   {...game} key={game.id} />;
          })}
        </ThreeColumn>
      </ContentMain>
    </WrapperMain>
  );
};

