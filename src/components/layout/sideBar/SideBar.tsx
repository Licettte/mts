import { Menu, MenuProps } from 'antd';
import { Key, ReactNode } from 'react';
import styled from '@emotion/styled';
import { FlexStyle } from '@/styles/Flex.tsx';
import { LIGHT_COLOR, PRIMARY_COLOR } from '@/styles/colors.ts';
import { Link } from 'react-router-dom';

export const SideMenu = styled(FlexStyle)`
    width: 20%;
    color: ${LIGHT_COLOR}
`;

export const LinkSideBar = styled(Link)`
  margin-bottom: 15px;
    background-color: ${PRIMARY_COLOR};
    color: ${LIGHT_COLOR}
`;
export const TitleSideBar = styled.h3`
    text-align: center;
`;

export const SideBar = () => {


  const id = "qwqerwerewrw";
  return (
    <div>
      <SideMenu style={{ width: 200 }}  $direction="column" $margin='112px 0 29px 29px'>
       <TitleSideBar>Категория игр</TitleSideBar>


        <LinkSideBar to={'/category/' + id} >pazzle</LinkSideBar>
        <LinkSideBar to={'/category/' + id} >shooter</LinkSideBar>
        <LinkSideBar to={'/category/' + id}>aRGPG</LinkSideBar>
        <LinkSideBar to={'/category/' + id} >simulation</LinkSideBar>

        {/*<Menu*/}
        {/*  defaultSelectedKeys={['']}*/}
        {/*  defaultOpenKeys={['sub1']}*/}
        {/*  mode="inline"*/}
        {/*  theme="dark"*/}
        {/*  items={items}*/}
        {/*/>*/}
      </SideMenu>
    </div>
  );
};

