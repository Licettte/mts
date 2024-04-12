import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameProps} from '@/components/game/GameCard.tsx';
import {RootState} from '@/store/store.ts';

const initialState: GameProps = {
    game: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,

    reducers: {
        getGameInfo: (state, action: PayloadAction<GameProps[]>) => {
            state.game = action.payload;
        },
    },
    extraReducers: (builder) => {
    },
});

export const {getGameInfo} = gameSlice.actions;
export const selectGame = (state: RootState) => state.game.game;

export default gameSlice.reducer;
