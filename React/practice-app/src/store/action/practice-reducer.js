
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const getData = createAsyncThunk('GETDATE', async () => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log("inside");
        return posts.data
    } catch (error) {
     return error.message   
    }
})