import { Layout } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { DARK_L_COLOR, DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { FONT_BOLD_15 } from '@/styles/fonts.ts';
import { Footer } from '@/components/layout/footer/Footer.tsx';
import { SideBarGenre } from '@/components/layout/sideBar/SideBarGenre.tsx';
import { Container } from '@/AppStyle.ts';
import Search from 'antd/es/input/Search';
import { HeaderGame } from '@/components/layout/header/HeaderGame.tsx';


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
 `;

const StyledFooter = styled.footer` 
    background-color: ${DARK_L_COLOR};
    color: ${DARK_PRIMARY_COLOR};
    margin: 0;
    min-height: 10vh;
    //line-height: 20px;
    text-align: center;
    ${FONT_BOLD_15}
`;

const ContainerContent = styled.div`
    color: ${LIGHT_COLOR};
    display: flex;
    flex-direction: row;
  `;


export const LayoutMain = () => {

  return (
    <LayoutContainer>

      <StyledHeader>
        <HeaderGame/>
      </StyledHeader>

      <StyledContent>
        <ContainerContent>
        <SideBarGenre/>
        <Outlet />
        </ContainerContent>
      </StyledContent>

      <StyledFooter>
      {/*< Footer/>*/}
      </StyledFooter>
    </LayoutContainer>
  );
};

