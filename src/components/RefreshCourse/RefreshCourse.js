import { useSelector } from "react-redux";
import { selectStatus, selectError } from "../../store/features/course/slice";

export function RefreshCourse() {
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = status === "loading";

  return (
    <>
      <button type="button">
        {isLoading ? "Обновляем курс..." : "Обновить курс"}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}
