import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { Data } from "./Reducers/Constants";
import Axios from "axios";
import { fetchDataSuccess, fetchDataError } from "./Action";

function* getData(action) {
  yield takeLatest(Data.fetchData, getDataFromAPI);
}

function* getDataFromAPI() {
  try {
    const data = yield call(
      Axios.get,
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    yield put(fetchDataSuccess(data.data.bpi));
  } catch (e) {
    yield put(fetchDataError(e));
  }
}

export default function* rootSaga() {
  yield all([getData()]);
}
