import { useNavigate, useParams } from 'react-router';
import { Flex, FlexStyle } from '@/styles/Flex.tsx';
import styled from '@emotion/styled';
import { LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { FONT_SEMI_BOLD_13 } from '@/styles/fonts.ts';
import React, { useEffect, useState } from 'react';
import { GameInfoProps, GameProps } from '@/components/game/gameType.ts';
import img from '../../assets/SddcexaGjis.jpg';

export const InfoGameContainer = styled(FlexStyle)`
    //border: aqua solid 1px;
    width: 70%;
    height: 70vh;
    color: ${LIGHT_COLOR};
    
`;
export const ButtonBuyGame = styled.button`
  color: ${LIGHT_COLOR};
  background-color: ${PRIMARY_COLOR};
  width: 100px;
  display: flex;
  justify-content: center;
`;
export const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
export const ItemDesc = styled.p`
  color: ${LIGHT_COLOR};
`;

export const InfoGameCard = () => {
  const [gameInfo, setGameInfo] = useState<GameInfoProps>({});
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetch('http://localhost:8080/get/game', {
      method: 'post',
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((res: GameInfoProps) => {
        setGameInfo(res);
      });
  }, []);

  // const { id, name, price, image, description, developers, releaseDate, discount } = gameInfo;
  return (
    <InfoGameContainer $direction='column' $align='center' $padding='18px' >
      <InfoGameContainer $direction='column' $align='center'>
        {/*id {gameInfo.id}*/}

        {/*description{gameInfo.description},*/}
        {/*developers{gameInfo.developers.map(person=>person)},*/}

        <Flex $margin='60px 0 0 0'>
          <StyledImage src={img} alt='{thumbnail}' />
          <Flex $direction='column' $margin='13px 0 0 50px '>
            <ItemDesc>
              name
              {/*{gameInfo.name}*/}
            </ItemDesc>
            <ItemDesc>
              releaseDate
              {/*{gameInfo.releaseDate},*/}
            </ItemDesc>
            <ItemDesc>
              price
              {/*{gameInfo.price}*/}
            </ItemDesc>
            <ItemDesc>
              discount
              {/*{gameInfo.discount}*/}
            </ItemDesc>
            <ButtonBuyGame>Купить </ButtonBuyGame>
          </Flex>
        </Flex>
      </InfoGameContainer>
      <button style={{ width: '100%' }} onClick={goBack}>
        Назад
      </button>
    </InfoGameContainer>
  );
};
