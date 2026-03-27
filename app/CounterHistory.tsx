'use client';
import { useMemo } from "react";
import ControlButton from "./ControlButton";
type HistoryItem = { id: number; value: number };

interface HistoryProps {
  history: HistoryItem[];
  sum: number
  onClear: () => void;
  onSum: (buffer: number) => void;
}

export default function CounterHistory({ history, sum, onClear, onSum }: HistoryProps) {
    const reversedHistory = useMemo(() => history.toReversed(), [history]);

    return (
      <div>
        {history.length > 0 ? (
          <div>
            <div className="flex justify-end">
              <ControlButton label={'Clear'} action={onClear} color={'red'}></ControlButton>
              <ControlButton label={'Sum'} action={()=> onSum(2)} color={'blue'}></ControlButton>
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