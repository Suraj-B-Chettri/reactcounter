'use client';
import { useMemo } from "react";

type HistoryItem = { id: number; value: number };

export default function CounterHistory(
  { history, sum, onClear, onSum }: {
    history: HistoryItem[];
    sum: number;
    onClear: () => void;
    onSum: (buffer: number) => void;
  }
  ) {
    const reversedHistory = useMemo(() => history.toReversed(), [history]);

    return (
      <div>
        {history.length > 0 ? (
          <div>
            <div className="flex justify-end">
              <button className="w-30 bg-red-700" onClick={onClear}>Clear</button>
              <button className="w-30 bg-blue-700" onClick={()=> onSum(2)}>Sum</button>
            </div>
            <div>Total History Sum: {sum} </div>
            <div className="mt-10 p-10 rounded-md border-2 border-solid border-red-500">
              {reversedHistory.map((eachHistory) => (
                <div key={eachHistory.id}>Value was {eachHistory.value} at {new Date(eachHistory.id).toLocaleString()}</div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    )
}