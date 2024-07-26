import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardAPI/Sagas';




function* rootSaga() {
    yield all([dashboardSaga()]);
}

export default rootSaga;