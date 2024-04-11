import { useNavigate, useParams } from 'react-router';
import {FlexStyle } from '@/styles/Flex.tsx';
import styled from '@emotion/styled';
import { LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { FONT_SEMI_BOLD_13,  } from '@/styles/fonts.ts';


export const InfoGameContainer = styled(FlexStyle)`
    border: aqua solid 1px;
    width: 100%;
    height: 69vh;
    color: ${LIGHT_COLOR};
    ${FONT_SEMI_BOLD_13};
    
`;
export const ButtonBuyGame = styled.button`
    color: ${LIGHT_COLOR};
    background-color: ${PRIMARY_COLOR};
    width: 100px;
    display: flex;
    justify-content: center;
`;

export const InfoGameCard = () => {

  let { id } = useParams();
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <InfoGameContainer $direction="column">
        {id}
name
        price
        {/*<img src={thumbnail} alt={thumbnail} style={{width:'100px', height:'100px'}} />*/}
        <ButtonBuyGame >Купить </ButtonBuyGame>
      </InfoGameContainer>
      <button style={{width:'100%'}} onClick={goBack}>Назад</button>
    </>
  );
};
