import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    const res = yield axios.get('https://easy-mock.bookset.io/mock/60a3753447ef9e51d0ad2a87/react-demo/list/get')
    const action = getListAction(res.data.data.list)
    yield put(action)
}

export default mySaga;