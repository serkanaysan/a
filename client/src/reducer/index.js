import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import seriesReducer from './seriesReducer';
import categoryReducer from './categoryReducer';
import carouselReducer from './carouselReducer';
import editorpickReducer from './editorpickReducer';
import lastnewsReducer from './lastnewsReducer';

export default combineReducers({
    movies: movieReducer,
    series: seriesReducer,
    category: categoryReducer,
    carousel: carouselReducer,
    editorpick: editorpickReducer,
    lastnews: lastnewsReducer
});