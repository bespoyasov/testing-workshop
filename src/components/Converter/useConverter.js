import { useState } from "react";
import { rubToUsd } from "../../domain/converter";

export function useConverter(initialRubValue, course) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  return {
    rub,
    usd,
    updateRub: setRub,
    updateUsd: setUsd,
  };
}
