import { ScpArticle } from "../app/types";
import { useCombobox } from "downshift";
import { useState } from "react";

export default function ArticleRow({
  article,
  titlesInSeries,
  onSolve,
}: {
  article: ScpArticle;
  titlesInSeries: string[];
  onSolve: (article: ScpArticle) => void;
}) {
  const [inputItems, setInputItems] = useState(titlesInSeries);
  const [selectedItem, setSelectedItem] = useState("");

  if (article.solved && selectedItem !== article.altTitle) {
    setSelectedItem(article.altTitle);
  }

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    selectedItem,
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      if (article.solved) return;

      setInputItems(
        titlesInSeries.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );

      if (
        !article.solved &&
        inputValue.toLowerCase() === article.altTitle.toLowerCase()
      ) {
        onSolve(article);
      }
    },
    onStateChange(changes) {
      if (changes.hasOwnProperty("selectedItem")) {
        setSelectedItem(changes.selectedItem!);
      }
    },
  });

  return (
    <tr>
      <td className="pt-1">{article.title}</td>
      <td className="pt-1">{article.solved ? "✔️" : ""}</td>
      <td className="relative flex flex-col pt-1">
        <div className="flex w-full">
          <input
            {...getInputProps()}
            className="flex-auto rounded-l border border-gray-300 bg-white px-1 text-sm text-gray-400 hover:border-gray-400 enabled:text-gray-800 enabled:shadow-sm enabled:hover:shadow disabled:animate-[var(--animate-success-ping)] disabled:border-gray-200"
            disabled={article.solved}
          />
          <button
            {...getToggleButtonProps()}
            title={isOpen ? "Hide options" : "Show options"}
            className="z-0 mr-0.5 flex-none rounded-r border border-l-0 border-gray-300 bg-white px-2 py-1 text-gray-800 hover:border-gray-400 active:shadow-none enabled:shadow-sm enabled:hover:shadow disabled:border-gray-200 disabled:text-gray-300"
            disabled={article.solved}
          >
            {isOpen ? <>&uarr;</> : <>&darr;</>}
          </button>
          <button
            onClick={() => selectItem(null)}
            title="Clear input"
            className="enabled:i flex-none rounded border border-gray-300 px-2 py-1 shadow-sm hover:border-gray-400 enabled:hover:shadow active:enabled:shadow-none disabled:border-gray-200 disabled:text-gray-300"
            disabled={article.solved}
          >
            &times;
          </button>
        </div>
        <ul
          className={`absolute top-full z-[1] mr-16 max-h-[20rem] overflow-auto rounded text-xs ${isOpen ? "border border-gray-300 shadow-lg" : ""}`}
          {...getMenuProps()}
        >
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                className={`cursor-pointer select-none pl-3 pr-1 -indent-2 ${highlightedIndex === index ? "bg-blue-200" : "bg-white"}`}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </ul>
      </td>
    </tr>
  );
}
