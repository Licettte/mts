import styled from '@emotion/styled';
import { FlexStyle } from '@/styles/Flex.tsx';
import { BRIGHT_COLOR, DARK_L_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import {  FONT_SEMI_BOLD_15 } from '@/styles/fonts.ts';
import arrowLeft from '../../assets/left.svg?react';

export const InfoGameContainer = styled(FlexStyle)`
  width: 70%;
  height: 65vh;
  color: ${LIGHT_COLOR};
`;
export const ButtonBuyGame = styled.button`
    color: ${DARK_L_COLOR};
    background-color: ${PRIMARY_COLOR};
    width: 73%;
    display: flex;
    justify-content: center;
    margin-top: 25px;

`;
export const StyledImage = styled.img`
  width: 250px;
  object-fit: contain;
  border-radius: 15px;
`;

export const ItemGameImage = styled.img`
 
  border-radius: 4px;
    object-fit: contain;
`;

export const ItemDesc = styled.p`
  color: ${LIGHT_COLOR};
`;
export const ItemGame = styled.p`
    ${FONT_SEMI_BOLD_15};
    color: ${BRIGHT_COLOR};
    margin: 0;
    margin-top: 5px;
`;

export const ArrowLeftSVG = styled(arrowLeft)`

    width: 64px;
    height: 77px;
    padding: 19px 0 0 0;
    cursor: pointer;
    fill: ${LIGHT_COLOR};

    &:hover {
        fill: ${BRIGHT_COLOR};

    }
`;
