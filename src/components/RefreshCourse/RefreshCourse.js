import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  selectError,
  fetchTodayCourse,
} from "../../store/features/course/slice";

export function RefreshCourse() {
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = status === "loading";

  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(fetchTodayCourse())}>
        {isLoading ? "Обновляем курс..." : "Обновить курс"}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}
