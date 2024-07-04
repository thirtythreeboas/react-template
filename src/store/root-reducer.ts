import {combineReducers} from '@reduxjs/toolkit';
import {templateSlice} from '@/store/template-slice/template';
import {NameSpace} from '@/const';

export const rootReducer = combineReducers({
  [NameSpace.TEMPLATE]: templateSlice.reducer,
});
