import {
    FETCH_LASTNEWS_BEGIN,
    FETCH_LASTNEWS_SUCCESS,
    FETCH_LASTNEWS_ERROR
} from '../actions/lastnewsActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function lastnewsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LASTNEWS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_LASTNEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.lastnews
            };

        case FETCH_LASTNEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}