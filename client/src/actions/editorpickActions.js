export const FETCH_EDITORPICK_BEGIN = 'FETCH_EDITORPICK_BEGIN';
export const FETCH_EDITORPICK_SUCCESS = 'FETCH_EDITORPICK_SUCCESS';
export const FETCH_EDITORPICK_ERROR = 'FETCH_EDITORPICK_ERROR';

export const fetchEditorpick = (category) => dispatch => {
    dispatch(fetchEditorpickBegin());
    return fetch("/api/editorpick/" + category)
        .then(response => response.json())
        .then(editorpick => {
            dispatch(fetchEditorpickSuccess(editorpick));
        })
        .catch(error => dispatch(fetchEditorpickError(error)));
}

export const fetchEditorpickBegin = () => ({
    type: FETCH_EDITORPICK_BEGIN
});

export const fetchEditorpickSuccess = editorpick => ({
    type: FETCH_EDITORPICK_SUCCESS,
    payload: { editorpick }
});

export const fetchEditorpickError = error => ({
    type: FETCH_EDITORPICK_ERROR,
    payload: { error }
});