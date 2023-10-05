import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getCards = createAsyncThunk('cards/getCards', async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch(setCards(res.data));
})

const initialState = {   // Изначальное состояние объекта с пустым массивом данных. В Redux обозначается как state
    cards: [],
};

export const cardSlice = createSlice({   // slice - метод Redux Toolkit, содержит имя, начальное состояние объекта и редьюсер (один или больше) 
    name: 'cards',
    initialState,
    reducers: {   // редьюсер - функция, которая связывает начальное состояние объекта с данными (state) и сигнал об их изменении (action). С помощью action новые данные передаются в store. Собственно изменения (объект с новыми данными) хранятся в payload. В данном случае есть два редьюсера: 1) для получения данных с сервера 2) для сортировки массива. Редьюсеры возвращают обновленный объект (наверное это объект store, здесь я не очень поняла)
        setCards: (state, action) => {
            state.cards = action.payload
        },
        setFilter: (state, action) => {
            let c = state.cards.sort((a, b) => a.price > b.price ? 1 : -1);
            c = action.payload
        }
    }
});



export const { setCards, setFilter } = cardSlice.actions;
export default cardSlice.reducer;

