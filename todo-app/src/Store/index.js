import {configureStore} from '@reduxjs/toolkit';
import todoreducer from './Reducers/Todo-reducer';

//ConfigureThe store 
export const store = configureStore ({
    reducer:{
        todo : todoreducer
    }
})