import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {GameProps} from '@/components/game/gameType.ts';
import {baseUrl, GamesServiceEndpoints} from '@/utils/url.ts';
import {getGameInfo} from '@/store/sliceGameCard.ts';

export const getGame = createAsyncThunk<GameProps, GameProps>(
    'game/getGame',
    async (_, {dispatch}) => {
        return axios
            .get(`${baseUrl}${GamesServiceEndpoints.GAMES}`)
            .then((response) => {
                dispatch(getGameInfo([...response.data]));
                // dispatch(setErrorMessage(''));
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    // dispatch(setErrorMessage(error.response.data.message));
                } else if (error.request) {
                    // dispatch(setErrorMessage(error.request.message));
                } else {
                    // dispatch(setErrorMessage(error));
                }
                // dispatch(setErrorMessage(error.config));
            });
    },
);
