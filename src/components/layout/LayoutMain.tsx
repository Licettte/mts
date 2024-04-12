import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';
import styled from '@emotion/styled';
import {DARK_L_COLOR, LIGHT_COLOR} from '@/styles/colors.ts';

import {SideBarGenre} from '@/components/layout/sideBar/SideBarGenre.tsx';

const LayoutContainer = styled(Layout)`
    display: flex;
    min-height: 100vh;
    margin: 0;
    flex-direction: column;
`;

const StyledContent = styled(Content)`
    background-color: ${DARK_L_COLOR};
    flex: 1 1 auto;
`;

const ContainerContent = styled.div`
    color: ${LIGHT_COLOR};
    display: flex;
    flex-direction: row;
`;

export const LayoutMain = () => {
    return (
        <LayoutContainer>
            <StyledContent>
                <ContainerContent>
                    <SideBarGenre/>
                    <Outlet/>
                </ContainerContent>
            </StyledContent>
        </LayoutContainer>
    );
};
