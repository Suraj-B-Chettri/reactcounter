"use client";

import { useCallback, useState } from "react";
import CounterHistory from "@/app/CounterHistory";

type HistoryItem = { id: number; value: number };
type CounterState = { count: number; history: HistoryItem[] };

export default function CounterPage() {
  const [counterState, setCounterState] = useState<CounterState>({
    count: 5,
    history: [],
  });
  const [sum, setSum] = useState<number>(0);
  const { count, history } = counterState;

  const updateCounter = useCallback((buffer: number) => {
    setCounterState((prevState) => {
      const newCount = prevState?.count + buffer;
      return {
        count: newCount,
        history: [...prevState?.history, { id: Date.now(), value: newCount }],
      };
    });
  }, []);

  const increaseCounter = useCallback(() => {
    updateCounter(1);
  }, [updateCounter]);

  const decreaseCounter = useCallback(() => {
    updateCounter(-1);
  }, [updateCounter]);

  const getTotalWithBuffer = useCallback(
    (buffer: number) => {
      const total = history.reduce((acc, record) => acc + record.value, 0);
      setSum(total + buffer);
    },
    [history]
  );

  const clearHistory = useCallback(() => {
    setCounterState((prevState) => ({ ...prevState, history: [] }));
    setSum(0);
  }, []);

  return (
    <div className="flex flex-col justify-center px-4 pt-10 sm:px-10">
      <h1 className="mb-6 text-xl font-semibold">Counter</h1>
      <div>Counter value is {count}</div>
      <br />
      <button
        className="w-100 rounded-sm bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-4"
        onClick={increaseCounter}
      >
        Increase Counter
      </button>
      <br />
      <button
        className="w-100 rounded-sm bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-4"
        onClick={decreaseCounter}
      >
        Decrease Counter
      </button>

      <CounterHistory
        history={history}
        sum={sum}
        onSum={getTotalWithBuffer}
        onClear={clearHistory}
      />
    </div>
  );
}
