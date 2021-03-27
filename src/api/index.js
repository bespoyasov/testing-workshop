export async function fetchCourse() {
  const response = await fetch("http://localhost:4000/course");
  const data = await response.json();
  return data;
}
