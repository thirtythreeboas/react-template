import {createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '@/service/api';
import axios from 'axios';
import {Posts} from '@/types/posts';

type MyKnownError = {
  errorMessage: string;
};

type ErrorObj = {
  response: {
    message: string;
  };
};

export const getPosts = createAsyncThunk<
  Posts,
  number,
  {rejectValue: MyKnownError}
>('posts/getPosts', async (id, thunkApi) => {
  try {
    const {data} = await API.get<Posts>(`posts/?_start=0&_limit=${id}`);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError<ErrorObj>(error)) {
      return thunkApi.rejectWithValue({
        errorMessage: error.message,
      });
    }
    return thunkApi.rejectWithValue({
      errorMessage: 'An unknown error occurred',
    });
  }
});
