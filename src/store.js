import { configureStore } from '@reduxjs/toolkit';
     import rootReducer from './reducer/index'; // Your reducers
     
   export const store = configureStore({
       reducer: rootReducer,
     });
     