import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { createClient } from 'pexels'
const client = createClient('FjlvsvxLaU9vGLsX3pt9PWB7J3ERgmz346JYBR68knhs5PUmLhEqIpvj')

export const Fetching = createAsyncThunk(
    'pexels/fetching',

    async ({ query, type }) => {
        if (type === 'image') {
            const result = await client.photos.search({ query, per_page: 20, page: 3 })
            console.log(result);
            return result
            
        } else if (type === 'video') {
            const result = await client.videos.search({ query, per_page: 20, page: 3})
            console.log(result);
            
            return result
            
        } 
    }
)

const pexelSlice = createSlice(
    {
        name: 'pexels',
        initialState:
        {
            Api: null,
            loading: null,
            error:null,
            hasSearched: false,
            userSearch: " ",
            searchCount : 0,
        },
        reducers:{
            setUserSearch:(state, action)=>{
                state.userSearch = action.payload
                if (action.payload) {
                    state.searchCount +=1;
                }
            }
        },
        extraReducers:(builder) =>{
            builder
            .addCase(Fetching.pending, (state)=>{
                state.loading = true;
                state.Api = null;
                state.error = null;
                state.hasSearched = true;
            })
            .addCase(Fetching.fulfilled, (state, action)=>{
                state.Api  = action.payload;
                state.loading  = false;
                state.error = false;
                state.hasSearched = true;
            })
            .addCase(Fetching.rejected , (state)=>{
                state.Api = null;
                state.loading = null;
                state.error = "Something Went Wrong!";
                state.hasSearched = true;
            })
        }
    }
)

const store = configureStore({
    reducer:{
        pexels: pexelSlice.reducer
    }
})

export  default store
export const pexelsAction  = pexelSlice.actions
export const {setUserSearch} = pexelSlice.actions