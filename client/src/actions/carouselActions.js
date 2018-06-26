export const FETCH_CAROUSEL_BEGIN = 'FETCH_CAROUSEL_BEGIN';
export const FETCH_CAROUSEL_SUCCESS = 'FETCH_CAROUSEL_SUCCESS';
export const FETCH_CAROUSEL_ERROR = 'FETCH_CAROUSEL_ERROR';

export const fetchCarousel = (category) => dispatch => {
    dispatch(fetchCarouselBegin());
    return fetch("/api/carousel/" + category)
        .then(response => response.json())
        .then(carousel => {
            dispatch(fetchCarouselSuccess(carousel));
        })
        .catch(error => dispatch(fetchCarouselError(error)));
}

export const fetchCarouselBegin = () => ({
    type: FETCH_CAROUSEL_BEGIN
});

export const fetchCarouselSuccess = carousel => ({
    type: FETCH_CAROUSEL_SUCCESS,
    payload: { carousel }
});

export const fetchCarouselError = error => ({
    type: FETCH_CAROUSEL_ERROR,
    payload: { error }
});