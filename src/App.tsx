import { useEffect, useState } from "react";
import "./App.css";
import { fetchWord } from "./fetchWord";

function App() {
  const [words, setWords] = useState<string[]>();

  useEffect(() => {
    Promise.all([fetchWord(), fetchWord(), fetchWord(), fetchWord()]).then(
      (words) => {
        setWords(words);
      }
    );
  }, []);

  return (
    <>
      <main className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 grow flex flex-col items-center dark:bg-neutral-700 dark:text-neutral-200">
        <h1 className="mb-4 text-4xl font-bold">xkcdpassword.app</h1>
        <h3 className="mb-6 text-2xl font-bold">
          Inspired by{" "}
          <a
            className="underline text-blue-400 hover:text-blue-600"
            href="https://xkcd.com/936/"
            target="_blank"
            rel="noopener"
          >
            xkcd
          </a>
          .
        </h3>
        {words && (
          <p className="font-mono text-xl mb-4 border-2 border-black w-max px-4 py-2 rounded-md bg-white dark:bg-black">
            {words.join(" ")}
          </p>
        )}
      </main>
      <footer className="relative shadow-lg bg-neutral-50 flex items-center justify-center dark:bg-neutral-700 dark:text-neutral-200">
        <p className="text-xs font-mono">
          Refresh for a new password. Made by{" "}
          <a
            className="underline text-blue-400 hover:text-blue-600"
            href="https://github.com/ephill"
            target="_blank"
            rel="noopener"
          >
            @ephill
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
