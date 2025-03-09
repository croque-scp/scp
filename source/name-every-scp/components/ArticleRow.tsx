import { ScpArticle } from "../app/types";
import { useCombobox } from "downshift";
import { useState } from "react";

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
        <div className="flex w-full">
          <input
            {...getInputProps()}
            className="flex-auto rounded-l border border-gray-300 bg-white px-1 text-sm text-gray-800 hover:border-gray-400 enabled:shadow-sm disabled:animate-[var(--animate-success-ping)] disabled:border-gray-200"
            disabled={correct}
          />
          <button
            {...getToggleButtonProps()}
            title="Show options"
            className="z-0 mr-0.5 flex-none rounded-r border border-l-0 border-gray-300 bg-white px-2 py-1 text-gray-800 hover:border-gray-400 active:shadow-none enabled:shadow-sm disabled:border-gray-200 disabled:text-gray-400"
            disabled={correct}
          >
            {isOpen ? <>&uarr;</> : <>&darr;</>}
          </button>
          <button
            onClick={() => selectItem(null)}
            title="Clear input"
            className="flex-none rounded border border-gray-300 px-2 py-1 hover:border-gray-400 enabled:shadow-sm active:enabled:shadow-none disabled:border-gray-200 disabled:text-gray-400"
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
                className={`cursor-pointer select-none pl-3 pr-1 -indent-2 ${highlightedIndex === index ? "bg-blue-200" : "bg-white"}`}
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
