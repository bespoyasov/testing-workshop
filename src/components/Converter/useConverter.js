import { useEffect, useState } from "react";
import { rubToUsd, usdToRub } from "../../domain/converter";

export function useConverter(initialRubValue, course) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  useEffect(() => {
    setRub(initialRubValue);
    setUsd(rubToUsd(initialRubValue, course));
  }, [initialRubValue, course]);

  function createUpdater(direction) {
    const isFromRub = direction === "rub-usd";
    const convert = isFromRub ? rubToUsd : usdToRub;
    const setOriginal = isFromRub ? setRub : setUsd;
    const setTarget = isFromRub ? setUsd : setRub;

    return function update(value) {
      const original = Number(value);
      const target = convert(original, course);

      setOriginal(original);
      setTarget(target);
    };
  }

  const updateRub = createUpdater("rub-usd");
  const updateUsd = createUpdater("usd-rub");

  return {
    rub,
    usd,
    updateRub,
    updateUsd,
  };
}
