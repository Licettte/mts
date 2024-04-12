import styled from '@emotion/styled';
import { mobile } from '@/styles/variables.ts';
import { FONT_SEMI_BOLD_17 } from '@/styles/fonts.ts';
import { Link } from 'react-router-dom';
import { GameProps } from '@/components/game/gameType.ts';
import img from '@/assets/SddcexaGjis.jpg';
import React from 'react';
import { StyledImage } from '@/components/game/StyleGame.ts';


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

export const LinkInfo= styled(Link)`
    margin-top: 15px;
 width: 250px;
    
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
        <LinkInfo to={'/info/' + id}>Подробнее</LinkInfo>
      </Wrapper>
    </>
  );
};
