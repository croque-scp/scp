import { ChangeEvent, useState } from "react";

import { ScpArticle } from "../app/types";
import { useCombobox } from "downshift";

export default function ArticleRow({
  article,
  titlesInSeries,
}: {
  article: ScpArticle;
  titlesInSeries: string[];
}) {
  const [inputItems, setInputItems] = useState(titlesInSeries);
  const [correct, setCorrect] = useState(false);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    selectItem,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        titlesInSeries.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
      setCorrect(inputValue.toLowerCase() === article.altTitle.toLowerCase());
    },
  });
  return (
    <tr>
      <td className="pt-1">{article.title}</td>
      <td className="relative flex flex-col pt-1">
        <div className="flex w-full gap-0.5">
          <input
            {...getInputProps()}
            className="flex-auto rounded border border-gray-300 bg-white px-1 text-sm text-gray-800 enabled:shadow enabled:hover:border-gray-400 disabled:animate-[var(--animate-success-ping)] disabled:border-gray-200"
            disabled={correct}
          />
          <button
            {...getToggleButtonProps()}
            title="Show options"
            className="flex-none rounded border border-gray-300 px-2 py-1 text-gray-800 hover:border-gray-400 enabled:shadow enabled:hover:border-gray-400 disabled:border-gray-200 disabled:text-gray-400"
            disabled={correct}
          >
            {isOpen ? <>&uarr;</> : <>&darr;</>}
          </button>
          <button
            onClick={() => selectItem(null)}
            title="Clear input"
            className="flex-none rounded border border-gray-300 px-2 py-1 hover:border-gray-400 enabled:shadow enabled:hover:border-gray-400 disabled:border-gray-200 disabled:text-gray-400"
            disabled={correct}
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
                className={`cursor-pointer select-none px-1 ${highlightedIndex === index ? "bg-blue-200" : "bg-white"}`}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </ul>
      </td>
      <td className="pt-1">{correct ? "✔️" : ""}</td>
    </tr>
  );
}
