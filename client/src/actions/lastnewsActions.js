export const FETCH_LASTNEWS_BEGIN = 'FETCH_LASTNEWS_BEGIN';
export const FETCH_LASTNEWS_SUCCESS = 'FETCH_LASTNEWS_SUCCESS';
export const FETCH_LASTNEWS_ERROR = 'FETCH_LASTNEWS_ERROR';

export const fetchLastnews = (category) => dispatch => {
    dispatch(fetchLastnewsBegin());
    return fetch("/api/lastnews/" + category)
        .then(response => response.json())
        .then(carousel => {
            dispatch(fetchLastnewsSuccess(carousel));
        })
        .catch(error => dispatch(fetchLastnewsError(error)));
}

export const fetchLastnewsBegin = () => ({
    type: FETCH_LASTNEWS_BEGIN
});

export const fetchLastnewsSuccess = lastnews => ({
    type: FETCH_LASTNEWS_SUCCESS,
    payload: { lastnews }
});

export const fetchLastnewsError = error => ({
    type: FETCH_LASTNEWS_ERROR,
    payload: { error }
});