import { useCallback, useEffect, useState } from "react";
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

  const handleCopyClick = useCallback(() => {
    if (words) {
      navigator.clipboard.writeText(words.join(" "));
    }
  }, [words]);

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
          <div className="font-mono text-xl mb-4 border-2 border-black py-1 rounded-md bg-white dark:bg-black max-w-full flex flex-row items-center justify-center">
            <p className="grow border-r border-neutral-700 dark:border-neutral-200 px-3">
              {words.join(" ")}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-3 hover:stroke-neutral-400 hover:cursor-pointer"
              onClick={handleCopyClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </div>
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
