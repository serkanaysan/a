import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from '../actions/categoryActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.category
            };

        case FETCH_CATEGORY_ERROR:
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