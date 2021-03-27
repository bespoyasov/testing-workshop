import { quotes } from "./quotes";

export function Quote() {
  const quote = quotes[0];
  return <blockquote>{quote.text}</blockquote>;
}
