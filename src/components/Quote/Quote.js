import { quotes } from "./quotes";

export function Quote() {
  const { author, text } = quotes[0];

  return (
    <>
      <blockquote>{text}</blockquote>
      <cite>— {author}</cite>
    </>
  );
}
