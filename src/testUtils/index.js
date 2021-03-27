import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import course, { initialCourseState } from "../store/features/course/slice";

const reducer = combineReducers({
  course,
});

const originalState = {
  course: initialCourseState,
};

export function renderWithStore(
  ui,
  { state = originalState, dispatch = null } = {}
) {
  const observerMiddleware = () => (next) => (action) => {
    if (dispatch) dispatch(action);
    return next(action);
  };

  const middleware = applyMiddleware(observerMiddleware, thunk);
  const storeMock = createStore(reducer, state, middleware);
  return render(<Provider store={storeMock}>{ui}</Provider>);
}
