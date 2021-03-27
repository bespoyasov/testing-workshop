const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const { datesRange } = require("./datesRange");
const { parseCourse } = require("./adapters/xmlToJson");

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/course", async (_, res) => {
  const { today, tomorrow } = datesRange();
  const response = await fetch(
    `http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${today}&date_req2=${tomorrow}&VAL_NM_RQ=R01235`
  );

  const data = await response.text();
  const course = parseCourse(data);
  return res.json({ course });
});

app.listen(PORT, () =>
  console.log(`API server is running on http://localhost:${PORT}.`)
);
