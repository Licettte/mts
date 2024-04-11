import styled from '@emotion/styled';
import { mobile } from '@/styles/variables.ts';
import { FONT_SEMI_BOLD_17 } from '@/styles/fonts.ts';
import { Link } from 'react-router-dom';

export type GameProps = {
  thumbnail: string;
  name: string;
  price: number;
  discount: number;
  id: number;

}
export const Wrapper = styled.div`
    @media (max-width: ${mobile}) {
        margin: 15px 0 0 0;
    }
    display: flex;
    flex-direction: column;
    padding: 15px 22px 32px;
    margin-top: 20px;
    ${FONT_SEMI_BOLD_17}
`;

export const GameCard = (game: GameProps) => {
  const { id, name } = game;
  return (
    <>
      <Wrapper>
        {name}
        <Link to={'/info/' + id}>Подробнее
        </Link>
      </Wrapper>
    </>
  );
};
