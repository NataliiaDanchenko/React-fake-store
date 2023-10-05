{/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getSortCards = createAsyncThunk('cardsCopy/getSortCards', (_, { rejectWithValue, dispatch }) => {

    initialState.cardsCopy.forEach(sort => {
        //let value = item.map(i => i.id === i.id ? { ...i, price: parseInt(i.price.replace(/[^1-9,\s]/g, '')) } : null) // С помощью дополнительного метода map достаем глубокую вложенность, с помощью метода replace оставляем только числа
        let sortCards = initialState.cardsCopy.sort((a, b) => a[sort.price] > b[sort.price] ? 1 : -1);
        //setAllCards(sortCard)
        //return sortCard;
        dispatch(setSortCards(sortCards(sort)))
    })
})

const initialState = {
    cardsCopy: structuredClone([cards]),
}

export const cardSortSlice = createSlice({
    name: 'cardsCopy',
    initialState,
    reducers: {
        setSortCards: (state, action) => {
            state.cardsCopy = action.payload
        },
    }
})



export const { setSortCards } = cardSortSlice.actions;
export default cardSortSlice.reducer;*/}