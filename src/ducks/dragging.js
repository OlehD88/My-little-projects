export const START_DRAGGING = 'START_DRAGGING';
export const END_DRAGGING = 'END_DRAGGING';
export const SET_ACTIVE_MOVES = 'SET_ACTIVE_MOVES';

export const startDragging = task => ({
  type: START_DRAGGING,
  payload: task
});

export const endDragging = () => ({
  type: END_DRAGGING
});

export const setActiveMoves = moves => ({
  type: SET_ACTIVE_MOVES,
  payload: moves
});

const initialState = {
  isDragging: false,
  draggedTask: {},
  activeMoves: []
};

export default function dragging(state = initialState, { type, payload }) {
  switch(type) {
    case START_DRAGGING:
      return {
        ...state,
        draggedTask: payload,
        isDragging: true
      };
    case END_DRAGGING:
      return {
        ...state,
        activeMoves: [],
        draggedTask: {},
        isDragging: false
      };
    case SET_ACTIVE_MOVES:
      return {
        ...state,
        activeMoves: payload
      };
    default:
      return state;
  }
}