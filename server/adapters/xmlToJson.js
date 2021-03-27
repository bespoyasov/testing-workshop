const parser = require("xml2json");

function toNumber(numberLike) {
  const numberValue = Number((numberLike ?? "0").toString().replace(",", "."));
  const roundedValue = Number(numberValue.toFixed(2));
  return roundedValue;
}

function parseCourse(xmlData) {
  const data = JSON.parse(parser.toJson(xmlData));
  const records = data?.ValCurs?.Record ?? [];
  const todayCourse = records.length ? records[0] : records;
  return toNumber(todayCourse?.Value);
}

module.exports = {
  parseCourse,
};
