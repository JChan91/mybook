import { createActions, handleActions } from "redux-actions";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

export const { preding, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    SUCCESS: (state, action) => {
      return {
        token: action.payload,
        loading: false,
        error: null,
      };
    },

    FAIL: (state, action: any) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
  initState,
  { prefix }
);

export default reducer;

// saga
export function* authSaga() {}
