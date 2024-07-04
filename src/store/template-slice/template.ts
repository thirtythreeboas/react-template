import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getPosts} from './action-creators';
import {NameSpace} from '@/const';
import {Posts} from '@/types/posts';

type Template = {
  template: string;
  posts: Posts | null;
};

const initialState = {
  template: 'React Template App',
} as Template;

export const templateSlice = createSlice({
  name: NameSpace.TEMPLATE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<Posts>) => {
        state.posts = action.payload;
      },
    );
  },
});

// export const { } = templateSlice.actions;

export default templateSlice.reducer;
