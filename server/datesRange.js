function nextDayFrom(raw) {
  const date = new Date(raw);
  date.setDate(new Date().getDate() + 1);
  return date;
}

function toCBRFormat(raw) {
  const date = new Date(raw);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function datesRange() {
  const today = toCBRFormat(Date.now());
  const tomorrow = toCBRFormat(nextDayFrom(Date.now()));
  return { today, tomorrow };
}

module.exports = {
  datesRange,
};
