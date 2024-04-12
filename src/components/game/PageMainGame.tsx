import Search from 'antd/es/input/Search';
import {ChangeEvent, useEffect, useState} from 'react';
import {GameCard, GameProps} from '@/components/game/GameCard.tsx';
import {ThreeColumn} from '@/styles/ThreeColumn.tsx';
import styled from '@emotion/styled';
import {FlexStyle} from '@/styles/Flex.tsx';
import {LIGHT_COLOR} from '@/styles/colors.ts';
import {useAppDispatch, useAppSelector} from '@/store/hooks.ts';
import {getGame} from '@/store/service/gameApi.ts';
import {selectGame} from '@/store/sliceGameCard.ts';
import axios from "axios";
import {baseUrl, GamesServiceEndpoints} from "@/utils/url.ts";

export const WrapperMain = styled(FlexStyle)`
    width: 70%;
    color: ${LIGHT_COLOR};
    align-items: stretch;
    justify-content: center;
`;

export const ContentMain = styled(FlexStyle)`
    height: 500px;
`;
export const ActionStyle = styled.h2`
    color: #baff49;
    background-color: transparent;
    border: none;
    margin: 0;
`;

export const SearchWrapper = styled(Search)`
    color: aliceblue;

    & .ant-input {
        background-color: transparent;
        color: aliceblue;
    }
`;

export const PageMainGame = () => {
    const [games, setGames] = useState<GameProps[]>([]);
    const [gamesFilter, setGamesFilter] = useState<GameProps[]>([]);
    const [isLoadedGame, setIsLoadedGame] = useState(false);


    const [valueSearchGame, setValueSearchGame] = useState('');
    const dispatch = useAppDispatch();
    const game = useAppSelector(selectGame);
    useEffect(() => {
        dispatch(getGame());
    }, []);


    const onSearch = () => {
        setIsLoadedGame(false)
        axios.get(`${baseUrl}${GamesServiceEndpoints.SEARCH}/${valueSearchGame}`).then((response) => {
            setGamesFilter([...response.data]);
            setIsLoadedGame(true)
        });
    }
    const onChangeSearchGame = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearchGame(e.target.value);
    };

    const filterGame = games.filter((game) => {
        return game.name?.toLowerCase().includes(valueSearchGame.toLowerCase());
    });

    const getGames = (games: GameProps[]) => {
        return games.map((game) => <GameCard key={game.id} {...game} />);
    };

    return (

        <WrapperMain $align='stretch'>
            <ContentMain $direction='column' $align='center'>
                <SearchWrapper
                    size='large'
                    placeholder='поиск'
                    enterButton
                    onChange={onChangeSearchGame}
                    onClick={() => onSearch()}
                    style={{width: 400, padding: '30px'}}
                />

                <ActionStyle>АКЦИИ</ActionStyle>
                <ThreeColumn>
                    {valueSearchGame.length ? getGames(gamesFilter) : getGames(game)}
                </ThreeColumn>
            </ContentMain>
        </WrapperMain>

    );
};
