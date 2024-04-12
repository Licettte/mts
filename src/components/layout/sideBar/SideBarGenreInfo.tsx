import {useParams} from 'react-router';
import {useEffect, useState} from 'react';
import {GameProps} from '@/components/game/gameType.ts';
import {GameCard} from '@/components/game/GameCard.tsx';
import axios from "axios";
import {baseUrl, GamesServiceEndpoints} from "@/utils/url.ts";
import {ThreeColumn} from "@/styles/ThreeColumn.tsx";
import {Flex} from "@/styles/Flex.tsx";
import {BRIGHT_COLOR} from "@/styles/colors.ts";

export const SideBarGenreInfo = () => {
    const [games, setGames] = useState<GameProps[]>([]);
    const [isLoadedGame, setIsLoadedGame] = useState(false);

    const {genre} = useParams();


    useEffect(() => {
        setIsLoadedGame(false)
        axios.get(`${baseUrl}${GamesServiceEndpoints.GAMES}/${genre}`).then((response) => {
            setIsLoadedGame(true)
            setGames([...response.data]);
        }).catch((error) => {
            console.log(error.config)
        });
    }, [genre])


    return (
        <>
            {
                !isLoadedGame ? "Loading" :
                    <Flex $direction='column'>
                        <h2 style={{marginTop: '50px', textAlign: "center", color: BRIGHT_COLOR}}>{genre}</h2>
                        <ThreeColumn>
                            {games.map((game) => (
                                <GameCard key={game.id} {...game} />
                            ))}
                        </ThreeColumn>
                    </Flex>

            }
        </>
    );
};
