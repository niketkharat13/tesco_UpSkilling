import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as SagaActions from '../slice/practiceSlice';

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/').then(data => {
        data.json().then(data => {
            console.log(data);
            return data
        })
    })
}

function* fetchUser(action) {
   try {
      const user = yield call(callAPI);
      yield put(SagaActions.SAVEDATA(user));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
