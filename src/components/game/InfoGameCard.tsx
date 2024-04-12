import {useNavigate, useParams} from 'react-router';
import {Flex} from '@/styles/Flex.tsx';
import {useAppSelector} from '@/store/hooks.ts';
import {getGameInfo, selectGame} from '@/store/sliceGameCard.ts';
import {
    ArrowLeftSVG,
    ButtonBuyGame, H1ItemGame,
    InfoGameContainer,
    ItemDesc,
    ItemGame,
    ItemGameImage,
} from '@/components/game/StyleGame.ts';
import axios from 'axios';
import {baseUrl, GamesServiceEndpoints} from '@/utils/url.ts';
import {useEffect, useState} from 'react';
import {GameProps} from "@/components/game/gameType.ts";

export const InfoGameCard = () => {
    const [linkRedirect, setLinkRedirect] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    const games = useAppSelector(selectGame);
    const [game, setGame] = useState<GameProps>();

    const goBack = () => {
        navigate(-1);
    };
    const getGame = async () => {
        const response = await axios.get(`${baseUrl}game/${id}`);
        return response.data;
    }
    const {name, price, description, developers, releaseDate, discount, images} = games.find(
        (game) => game.id == id) || getGame()

    const onClickBuy = () => {
        axios
            .get(`${baseUrl}${GamesServiceEndpoints.BUY}`, {
                params: {priceWithoutFee: price, username: 'the_jack_zaka'}
            })
            .then((response) => {
                // @ts-ignore
                setLinkRedirect(response.request.responseURL);
            });
    }

    useEffect(() => {
        if (linkRedirect.length) {
            window.location.href = linkRedirect
        }
    }, [linkRedirect]);

    console.log(name,"name")
    return (<>{games.length ?
            <InfoGameContainer $direction='column' $align='center' $padding='18px'>
                <InfoGameContainer $direction='column' $align='center'>
                    <Flex $margin='60px 0 0 0'>
                        <ItemGameImage src={images} alt='{thumbnail}'/>
                        <Flex $direction='column' $margin='13px 0 0 50px '>
                            <ItemDesc>
                                <H1ItemGame>{name ? name : ' '}</H1ItemGame>
                            </ItemDesc>
                            <ItemDesc>
                                Дата релиза:
                                <ItemGame> {releaseDate}</ItemGame>
                            </ItemDesc>
                            <ItemDesc>
                                Цена:
                                <ItemGame> {price} руб.</ItemGame>
                            </ItemDesc>
                            <ItemDesc></ItemDesc>
                            <ArrowLeftSVG onClick={goBack}/>
                        </Flex>
                    </Flex>
                </InfoGameContainer>
                <ButtonBuyGame onClick={() => onClickBuy()}>Купить</ButtonBuyGame>
            </InfoGameContainer>

            : 'Loading'}
        </>
    );
};
