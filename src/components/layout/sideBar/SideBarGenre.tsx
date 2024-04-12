import styled from '@emotion/styled';
import { FlexStyle } from '@/styles/Flex.tsx';
import { BRIGHT_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { Link } from 'react-router-dom';
import { GameProps } from '@/components/game/gameType.ts';
import { GameCard } from '@/components/game/GameCard.tsx';
import { useEffect, useState } from 'react';
import { GenreProps } from '@/components/layout/sideBar/sideBarProps.ts';
import axios from 'axios';

export const SideMenu = styled(FlexStyle)`
  width: 20%;
  color: ${LIGHT_COLOR};
`;

export const LinkSideBar = styled(Link)`
  margin-bottom: 15px;
  //background-color: ${PRIMARY_COLOR};
  color: ${BRIGHT_COLOR};
`;
export const TitleSideBar = styled.h3`
  text-align: center;
`;

export const SideBarGenre = () => {
  const [genres, setGenre] = useState<GenreProps[]>([]);
  const [genreGames, setGenreGames] = useState<GameProps[]>([]);
  const [isLoadedGenre, setIsLoadedGenre] = useState(false);


  // const getGenres = (genres: GenreProps[]) => {
  //   return genres.map((genre) => <LinkSideBar to={'/category/' + 'pazzle'}>pazzle</LinkSideBar>);
  // };
  const getGenreGames = (genres: GameProps[]) => {
    return genres.map((genre) => <GameCard key={genre.id} {...genre} />);
  };
  // localhost:8080/games/category

  useEffect(() => {
    axios.get('http://localhost:8080/genres').then((response) => {
      const arrayGenres = Object.values(response.data)
      const normArrayGenres  = Array.from(arrayGenres[0])
      setGenre(normArrayGenres);
    });
  }, []);
  // const api = 'http://localhost:8080/genres';
  // useEffect(() => {
  //   fetch('http://localhost:8080/genres')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return setGenre(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setIsLoadedGenre(true);
  //     });
  // }, []);




  return (
    <div>
      <SideMenu style={{ width: 200 }} $direction='column' $margin='8px 0 29px 29px'>
        <TitleSideBar>Категория игр</TitleSideBar>
        {/*{genres.map((a) => a[0])}*/}
        {/*{genres[1]}*/}
        {genres.map((genre) => (

          <LinkSideBar to={'/category/' + genre}>{genre}</LinkSideBar>
        ))}



      </SideMenu>
    </div>
  );
};
