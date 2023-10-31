import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	lineup: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	position: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};

export const lineupSlice = createSlice({
	name: 'lineup',
	initialState,
	reducers: {
		lineupMoveUp(state, action) {
			if (action.payload != 0) {
				[state.lineup[action.payload - 1], state.lineup[action.payload]] = [state.lineup[action.payload], state.lineup[action.payload - 1]];
				[state.position[action.payload - 1], state.position[action.payload]] = [state.position[action.payload], state.position[action.payload - 1]];
			}
		},
		lineupMoveDown(state, action) {
			if (action.payload != 8) {
				[state.lineup[action.payload + 1], state.lineup[action.payload]] = [state.lineup[action.payload], state.lineup[action.payload + 1]];
				[state.position[action.payload + 1], state.position[action.payload]] = [state.position[action.payload], state.position[action.payload + 1]];
			}
		},
		positionChange(state, action) {
			// [state.position[action.payload[0]], state.position[action.payload[1]]] = [state.position[action.payload[1]], state.position[action.payload[0]]];
			state.position[action.first] = 1;
			state.position[action.second] = 2;
		},
		test(state, action) {
			state.lineup.push(action.payload);
		},
		lineupSelect(state, action) {
			state.lineup[action.index] = action.pnumber;
		},
		positionSelect(state, action) {
			state.position[action.index] = action.position;
		},
	},
});

export const { lineupMoveUp, lineupMoveDown, positionChange, test } = lineupSlice.actions;
export default lineupSlice;
