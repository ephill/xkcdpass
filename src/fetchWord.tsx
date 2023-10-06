export const fetchWord = () => {
  const len = Math.floor(Math.random() * (12 - 3)) + 3;
  return fetch(
    `https://api.datamuse.com/words?sp=${encodeURI("?".repeat(len))}&max=100`
  )
    .then((result) => result.json())
    .then((data) => data[Math.floor(Math.random() * data.length)].word);
};
