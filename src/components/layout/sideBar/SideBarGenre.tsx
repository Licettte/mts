import styled from '@emotion/styled';
import {FlexStyle} from '@/styles/Flex.tsx';
import {BRIGHT_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from '@/styles/colors.ts';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {GenreProps} from '@/components/layout/sideBar/sideBarProps.ts';
import axios from 'axios';

export const SideMenu = styled(FlexStyle)`
    width: 20%;
    color: ${LIGHT_COLOR};
`;

export const LinkSideBar = styled(Link)`
    margin-bottom: 15px;
        //background-color: ${PRIMARY_COLOR};
    color: ${BRIGHT_COLOR};
`;
export const TitleSideBar = styled.h3`
    text-align: center;
`;

export const SideBarGenre = () => {
    const [genres, setGenre] = useState<GenreProps[]>([]);


    useEffect(() => {
        axios.get('http://localhost:8080/genres').then((response) => {
            const arrayGenres = Object.values(response.data)
            const normArrayGenres = Array.from(arrayGenres[0])
            setGenre(normArrayGenres);
        });
    }, []);

    return (
        <div>
            <SideMenu style={{width: 200}} $direction='column' $margin='8px 0 29px 29px'>
                <TitleSideBar>Категория игр</TitleSideBar>
                {genres.map((genre) => (
                    <LinkSideBar to={'/category/' + genre}>{genre}</LinkSideBar>
                ))}
            </SideMenu>
        </div>
    );
};
