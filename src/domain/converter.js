export function rubToUsd(value, course) {
  return Number((value / course).toFixed(2));
}

export function usdToRub(value, course) {
  return Number((value * course).toFixed(2));
}
