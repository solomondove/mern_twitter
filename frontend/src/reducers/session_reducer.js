

// import {
//     RECEIVE_SESSION_ERRORS,
//     RECEIVE_CURRENT_USER,
// } from '../actions/session_actions';

// const _nullErrors = [];

// const SessionErrorsReducer = (state = _nullErrors, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_SESSION_ERRORS:
//             return action.errors;
//         case RECEIVE_CURRENT_USER:
//             return _nullErrors;
//         default:
//             return state;
//     }
// };

// export default SessionErrorsReducer;

import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        default:
            return state;
    }
}