import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameProps } from '@/components/GameCard/GameCard.tsx';
import { RootState } from '@/store/store.ts';


const initialState: GameProps = {
  thumbnail: '',
  name: '',
  price: 0,
  discount: 0,
  id: 0,

};

export const gameSlice = createSlice({

  name: 'user',
  initialState,

  reducers: {
   getGameInfo: (state, action: PayloadAction<GameProps>) => {
      state.thumbnail = action.payload.thumbnail;
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.discount = action.payload.discount;
      state.id = action.payload.id;

     console.log(action, "action");
     console.log(state, "state");
    },

  },
  extraReducers: (builder) => {
    builder;
    // .addCase(registration.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(registration.rejected, (state) => {
    //   state.auth = false;
    //   state.status = 'error';
    // })
    // .addCase(registration.fulfilled, (state, action) => {
    //   state.status = 'finished';
    //   state.message = 'Вы успешно зарегистрировались';
    //   state.name = '';
    //   state.email = '';
    //   state.password = '';
    // })

  },
});

export const { getGameInfo } = gameSlice.actions;
export const selectGame = (state: RootState) => state.game;


export default gameSlice.reducer;
