import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, { payload }) => {
            state.data.push(payload)
        },
        removetoCart: (state) => {

        },
        emptyCart: (state) => {

        },
        updateCart: (state) => {

        }

    }
})

export const { addtoCart, removetoCart, emptyCart, updateCart } = cartSlice.actions

export default cartSlice.reducer