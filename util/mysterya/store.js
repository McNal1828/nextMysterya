import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { lineupSlice } from './lineup_reducer';

// const reducer = (state, action) => {
// 	if (action.type === HYDRATE) {
// 		const nextState = {
// 			...state,
// 			...action.payload,
// 		};
// 		return nextState;
// 	}
// 	return combineReducers({
// 		lineup: lineupSlice,
// 	})(state, action);
// };

const rootReducer = combineReducers({
	lineup: lineupSlice.reducer,
});
export const store = configureStore({
	reducer: rootReducer,
});

// export const Wrapper = createWrapper(store, {});
