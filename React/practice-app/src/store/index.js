import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import practiceReducer from './slice/practiceSlice';
// import { getData } from './action/practice-reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga';

const sageMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        practice_reducer: practiceReducer,
        
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    middleware: [...getDefaultMiddleware(), sageMiddleware]

    // {
    //     getDefaultMiddleware({
    //         thunk: {
    //             extraArgument: getData
    //         },
    //         serializableCheck: false
    //     })
    // }
})

sageMiddleware.run(mySaga)


export default store;