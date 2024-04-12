import styled from '@emotion/styled';
import { mobile } from '@/styles/variables.ts';
import { FONT_SEMI_BOLD_17 } from '@/styles/fonts.ts';
import { Link } from 'react-router-dom';
import { GameProps } from '@/components/game/gameType.ts';
import img from '@/assets/SddcexaGjis.jpg';
import React from 'react';
import { StyledImage } from '@/components/game/InfoGameCard.tsx';

export const Wrapper = styled.div`
  @media (max-width: ${mobile}) {
    margin: 15px 0 0 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 22px 32px;
  margin-top: 20px;
  ${FONT_SEMI_BOLD_17}
`;
// то. что на мэйне отображется  /
export const GameCard = (game: GameProps) => {
  const { id, name, images } = game;


  return (
    <>
      <Wrapper>
        {name}
        <StyledImage src={images
        } alt={images
        } />
        <Link to={'/info/' + id}>Подробнее</Link>
      </Wrapper>
    </>
  );
};
