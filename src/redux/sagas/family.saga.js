import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// gets all people from the DB
function* fetchTree() {
    try {
        const response = yield axios.get('/api/tree');
        yield put({ type: 'SET_FAMILY_TREE', payload: response.data });
    } catch (error) {
        console.log('family tree get request failed', error);
    }
}

// CREATE
function* addMember(action) {
    try {
        yield axios.post('/api/tree', )
        yield put({type : 'FETCH_FAMILY_TREE'})
    } catch (error) {
        console.log('ERROR IN POST FAMILY TREE');
    }
}

function* familySaga() {
    yield takeLatest('FETCH_FAMILY_TREE', fetchTree);
    yield takeLatest('ADD_MEMBER', addMember);
}

export default familySaga;