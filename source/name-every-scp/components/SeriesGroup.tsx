import { useState } from "react";

interface SeriesGroupProps extends React.PropsWithChildren {
  seriesName: string;
  count: number;
  solvedCount: number;
}

export default function SeriesGroup({
  seriesName,
  count,
  solvedCount,
  children,
}: SeriesGroupProps) {
  const [groupOpen, setGroupOpen] = useState(true);
  const completionPercent = Math.round((solvedCount / count) * 1000) / 10;

  const buttonId = `series-group-button-${seriesName}`;
  const groupId = `series-group-${seriesName}`;

  return (
    <>
      <tbody>
        <tr>
          <td colSpan={3}>
            <button
              id={buttonId}
              className="series-collapse"
              aria-expanded={groupOpen}
              aria-controls={groupId}
              onClick={() => setGroupOpen(!groupOpen)}
            >
              <span className="series-name">
                SCP Series {seriesNameToNumber(seriesName)}
              </span>{" "}
              &middot; {solvedCount}/{count} &middot; {completionPercent}%
              <span hidden={groupOpen}> &middot; (Collapsed)</span>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody id={groupId} aria-labelledby={buttonId} hidden={!groupOpen}>
        {children}
        <tr>
          <td colSpan={3} className="text-right">
            <a
              href={`#${buttonId}`}
              className="text-sm text-[#b01] hover:underline"
            >
              Top of series &uarr;
            </a>
          </td>
        </tr>
        <tr>
          <td colSpan={3} className="text-right">
            <a href="#main" className="text-sm text-[#b01] hover:underline">
              Top of page &uarr;
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

function seriesNameToNumber(seriesName: string) {
  const match = /\d+/.exec(seriesName);
  return match ? parseInt(match[0]) : 1;
}
