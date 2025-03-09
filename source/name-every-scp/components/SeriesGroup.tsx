import { useState } from "react";

interface SeriesGroupProps extends React.PropsWithChildren {
  seriesName: string;
}

export default function SeriesGroup({
  seriesName,
  children,
}: SeriesGroupProps) {
  const [groupOpen, setGroupOpen] = useState(true);

  return (
    <>
      <tbody>
        <tr>
          <td colSpan={3}>
            <button
              id={`series-group-button-${seriesName}`}
              className="series-collapse"
              aria-expanded={groupOpen}
              aria-controls={`series-group-${seriesName}`}
              onClick={() => setGroupOpen(!groupOpen)}
            >
              <span className="series-name">
                SCP Series {seriesNameToNumber(seriesName)}
              </span>{" "}
              &middot; (<span className="series-completion"></span>)
              <span className="series-collapse__state" hidden={groupOpen}>
                {" "}
                &middot; (Collapsed)
              </span>
            </button>
          </td>
        </tr>
      </tbody>
      <tbody
        id={`series-group-${seriesName}`}
        aria-labelledby={`series-group-button-${seriesName}`}
        hidden={!groupOpen}
      >
        {children}
      </tbody>
    </>
  );
}

function seriesNameToNumber(seriesName: string) {
  const match = /\d+/.exec(seriesName);
  return match ? parseInt(match[0]) : 1;
}
