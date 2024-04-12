import { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { GameCard, GameProps } from '@/components/game/GameCard.tsx';
import { ThreeColumn } from '@/styles/ThreeColumn.tsx';
import styled from '@emotion/styled';
import { FlexStyle } from '@/styles/Flex.tsx';
import { LIGHT_COLOR } from '@/styles/colors.ts';
import axios from 'axios';
import { baseUrl, GamesServiceEndpoints } from '@/utils/url.ts';

export const WrapperMain = styled(FlexStyle)`
  width: 70%;
  color: ${LIGHT_COLOR};
  align-items: stretch;
  justify-content: center;
`;

export const ContentMain = styled(FlexStyle)`
  height: 500px;
`;
export const ActionStyle = styled.h3`
  color: #baff49;
  background-color: transparent;
  border: none;
  margin: 0;
`;

export const PageMainGame = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [gamesAction, setGamesAction] = useState<GameProps[]>([]);
  const [isLoadedGame, setIsLoadedGame] = useState(false);
  const [isLoadedGameAction, setIsLoadedGameAction] = useState(false);
  const [valueSearchGame, setValueSearchGame] = useState('');

  //TODO  Game Actions
  useEffect(() => {
    axios.get(`${baseUrl}${GamesServiceEndpoints.GAMES}`).then((response) => {
      setGamesAction([...response.data]);
    });
  }, []);

  const onChangeSearchGame = (e: any) => {
    setValueSearchGame(e.target.value);
  };

  const filterGame = games.filter((game) => {
    return game.name?.toLowerCase().includes(valueSearchGame.toLowerCase());
  });

  const getGames = (games: GameProps[]) => {
    console.log(games, 'game from filter');
    return games.map((game) => <GameCard key={game.id} {...game} />);
  };
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  return (
    <WrapperMain $align='stretch'>
      <ContentMain $direction='column' $align='center'>
        <Search
          size='large'
          placeholder='поиск'
          enterButton
          onSearch={onSearch}
          onChange={onChangeSearchGame}
          style={{ width: 400, padding: '30px' }}
        />
        <ActionStyle>АКЦИИ</ActionStyle>
        <ThreeColumn>
          {valueSearchGame.length ? getGames(filterGame) : getGames(gamesAction)}
        </ThreeColumn>
      </ContentMain>
    </WrapperMain>
  );
};
