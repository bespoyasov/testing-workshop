import { useState } from "react";

export function useConverter() {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);

  return {
    rub,
    usd,
    updateRub: setRub,
    updateUsd: setUsd,
  };
}
