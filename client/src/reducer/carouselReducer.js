import {
    FETCH_CAROUSEL_BEGIN,
    FETCH_CAROUSEL_SUCCESS,
    FETCH_CAROUSEL_ERROR
} from '../actions/carouselActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CAROUSEL_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_CAROUSEL_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.carousel
            };

        case FETCH_CAROUSEL_ERROR:
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