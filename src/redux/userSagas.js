import { gql, GraphQLClient } from "graphql-request";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers} from "./userReducer";

const fetchUsersFromApi = () => {
    const endpoint = "https://graphqlzero.almansi.me/api";

    const query = gql`
      query {
        user(id: 1) {
          id
          username
          email
          address {
            geo {
              lat
              lng
            }
          }
        }
      }
    `;

    const client = new GraphQLClient(endpoint);

    return client.request(query);
}

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    yield put(setUsers(data))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}

