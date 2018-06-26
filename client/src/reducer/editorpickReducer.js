import {
    FETCH_EDITORPICK_BEGIN,
    FETCH_EDITORPICK_SUCCESS,
    FETCH_EDITORPICK_ERROR
} from '../actions/editorpickActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EDITORPICK_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_EDITORPICK_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.editorpick
            };

        case FETCH_EDITORPICK_ERROR:
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