export const FETCH_CATEGORY_BEGIN = 'FETCH_CATEGORY_BEGIN';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

export const fetchCategory = () => dispatch => {
    dispatch(fetchCategoryBegin());
    return fetch("/api/category")
        .then(response => response.json())
        .then(categories => {
            dispatch(fetchCategorySuccess(categories));
        })
        .catch(error => dispatch(fetchCategoryError(error)));
}

export const fetchCategoryBegin = () => ({
    type: FETCH_CATEGORY_BEGIN
});

export const fetchCategorySuccess = category => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: { category }
});

export const fetchCategoryError = error => ({
    type: FETCH_CATEGORY_ERROR,
    payload: { error }
});