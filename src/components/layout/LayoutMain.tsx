import { Layout } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { DARK_L_COLOR, DARK_PRIMARY_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { FONT_BOLD_15 } from '@/styles/fonts.ts';
import { Footer } from '@/components/layout/footer/Footer.tsx';


const LayoutContainer = styled(Layout)`
    display: flex;
    min-height: 100vh;
    margin: 0;
    flex-direction: column;
`;

const StyledHeader = styled(Header)`
    background-color: ${DARK_L_COLOR};
    color: ${PRIMARY_COLOR};
    margin: 0;
    padding: 20px;
    min-height: 8vh;
    line-height: 24px;
    text-align: center;
    font-size: 37px;
    border: solid 1px ${DARK_PRIMARY_COLOR};
    font-weight: 700;
    box-sizing: border-box;
`;

const StyledContent = styled(Content)`
    background-color: ${DARK_L_COLOR};
    flex: 1 1 auto;
    text-align: center;
`;

const StyledFooter = styled.footer`
    background-color: ${DARK_L_COLOR};
    color: ${DARK_PRIMARY_COLOR};
    margin: 0;
    min-height: 10vh;
    line-height: 20px;
    text-align: center;
    ${FONT_BOLD_15}
`;

export const LayoutMain = () => {

  return (
    <LayoutContainer>

      <StyledHeader>
        GAME
      </StyledHeader>

      <StyledContent>
        <Outlet />
      </StyledContent>

      <StyledFooter>
      < Footer/>
      </StyledFooter>
    </LayoutContainer>
  );
};

