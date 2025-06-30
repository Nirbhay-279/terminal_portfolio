const techQuotes = [
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Programs must be written for people to read. – Harold Abelson",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Before software can be reusable it first has to be usable. – Ralph Johnson"
];

export const getRandomQuote = (): string => {
  const index = Math.floor(Math.random() * techQuotes.length);
  return techQuotes[index];
};
