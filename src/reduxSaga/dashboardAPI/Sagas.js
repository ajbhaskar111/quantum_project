import { put, takeLatest } from "redux-saga/effects";
//import { customerServiceRest } from "api/customer-service-rest";

// Worker saga will be fired on FETCH_TILE_COUNT actions
function* fetchHomePageData() {
  try {
    // const responseData = yield new Promise((resolve) => {
    //   customerServiceRest.getPortalHomepageDataCount().subscribe((response) => {
    //     resolve(response);
    //   });
    // });

    // if (responseData && responseData.status.code === "OK") {
    //   yield put({
    //     type: "SET_HOMEPAGE",
    //     payload: {
    //       homeSlider: responseData?.homeSlider,
    //     },
    //   });
    // } else {
    //   yield put({ type: "SET_HOMEPAGE", payload: { homeSlider: [] } });
    // }
  } catch (e) {
    yield put({ type: "SET_HOMEPAGE", payload: { homeSlider: [] } });
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* dashboardSaga() {
  yield takeLatest("FETCH_HOMEPAGE", fetchHomePageData);
}
