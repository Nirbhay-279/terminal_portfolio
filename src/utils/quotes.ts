const techQuotes = [
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Programs must be written for people to read. – Harold Abelson",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
  "Sometimes it's better to leave something alone, to pause, and that's very true of programming. – Joyce Wheeler",
  "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
  "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
  "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
  "You can’t have great software without a great team, and most software teams behave like dysfunctional families. – Jim McCarthy",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "It’s not a bug – it’s an undocumented feature. – Anonymous",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "Software is a great combination of artistry and engineering. – Bill Gates",
  "In order to be irreplaceable, one must always be different. – Coco Chanel (popular in UX design circles)",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
  "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
  "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
  "Computers are fast; programmers keep it slow. – Anonymous",
  "A user interface is like a joke. If you have to explain it, it’s not that good. – Martin LeBlanc",
  "Deleted code is debugged code. – Jeff Sickel"
]

export const getRandomQuote = (): string => {
  const index = Math.floor(Math.random() * techQuotes.length);
  return techQuotes[index];
};
