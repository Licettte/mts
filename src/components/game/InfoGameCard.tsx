import {useNavigate, useParams} from 'react-router';
import {Flex} from '@/styles/Flex.tsx';
import {useAppSelector} from '@/store/hooks.ts';
import {selectGame} from '@/store/sliceGameCard.ts';
import {
    ArrowLeftSVG,
    ButtonBuyGame,
    InfoGameContainer,
    ItemDesc,
    ItemGame,
    ItemGameImage,
} from '@/components/game/StyleGame.ts';
import axios from 'axios';
import {baseUrl, GamesServiceEndpoints} from '@/utils/url.ts';
import {useEffect, useState} from 'react';

export const InfoGameCard = () => {
    const [linkRedirect, setLinkRedirect] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    const games = useAppSelector(selectGame);

    const goBack = () => {
        navigate(-1);
    };


    const {name, price, image, description, developers, releaseDate, discount, images} = games.find(
        (game) => game.id == id) || {}

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

    console.log(linkRedirect, "linkRedirect");
    return (<>{games.length ?
            <InfoGameContainer $direction='column' $align='center' $padding='18px'>
                <InfoGameContainer $direction='column' $align='center'>
                    <Flex $margin='60px 0 0 0'>
                        <ItemGameImage src={images} alt='{thumbnail}'/>
                        <Flex $direction='column' $margin='13px 0 0 50px '>
                            <ItemDesc>
                                name
                                <ItemGame>{name ? name : ' '}</ItemGame>
                            </ItemDesc>
                            <ItemDesc>
                                releaseDate
                                <ItemGame> {releaseDate}</ItemGame>
                            </ItemDesc>
                            <ItemDesc>
                                price
                                <ItemGame> {price}</ItemGame>
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
