import { CallToActionOutlined } from '@mui/icons-material';
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

function* fetchDetails() {
    // get details from DB
    try {
        const details = yield axios.get('/api/tree');
        yield put({ type: 'SET_DETAILS', payload: details.data});
    } catch (error) {
        console.log('ERROR fetching details', error);
        alert('STOP! SOMETHING WENT WRONG!')
    }
}

// CREATE
function* addMember(action) {
    try {
        yield axios.post(`/api/tree`,{firstname: action.payload.firstname,lastname: action.payload.lastname,lastname_birth: action.payload.lastname_birth,gender: action.payload.gender,birth: action.payload.birth,death: action.payload.death,birthplace: action.payload.birthplace} )
        yield put({type : 'FETCH_FAMILY_TREE'})
        if(action.history){
            action.history.goBack()
        }
    } catch (error) {
        console.log('ERROR IN POST FAMILY TREE',error);
    }
}

function* addConnection(action){
    try{
        yield axios.post('/api/tree/connection',action.payload)
        yield put({type: 'ADD_CONNECTION'})
    } catch(error){
        console.log('ERROR IN POST CONNECTION', error);
    }
}

// UPDATE
function* editPerson(action){
    try{
        yield axios.put(`/api/tree/${action.payload.id}`, action.payload);
        if(action.history){
            action.history.goBack()
        }
    } catch( error ){
        console.log(error);
    }
}

function* familySaga() {
    yield takeLatest('FETCH_FAMILY_TREE', fetchTree);
    yield takeLatest('ADD_MEMBER', addMember);
    yield takeLatest('SET_DETAILS', fetchDetails);
    yield takeLatest('EDIT_PERSON', editPerson);
    yield takeLatest('ADD_CONNECTION', addConnection);
}

export default familySaga;