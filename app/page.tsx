'use client';
import { useCallback, useState } from "react";
import CounterHistory from "./CounterHistory";

type HistoryItem = { id: number; value: number };
type CounterState = { count: number; history: HistoryItem[] };

export default function Home() {
  const [counterState, setCounterState] = useState<CounterState>({ count: 5, history: [] });
  const [sum, setSum] = useState<number>(0);
  const { count, history } = counterState;

  const updateCounter = useCallback((buffer: number) => {
    setCounterState((prevState) => {
      const newCount = prevState?.count + buffer;
      return {
        count: newCount,
        history: [...prevState?.history, {id: Date.now(), value: newCount}]
      }
    })
  }, [])

  const increaseCounter = useCallback(() => {
    updateCounter(1);
  }, [updateCounter]);

  const decreaseCounter = useCallback(() => {
    updateCounter(-1);
  }, [updateCounter]);

  const getTotalWithBuffer = useCallback(
    (buffer: number) => {
      const total = history.reduce((acc, record) => acc + record.value, 0)
      setSum(total + buffer);
    },
    [history]
  );

  const clearHistory = useCallback(() => {
    setCounterState((prevState) => ({ ...prevState, history: [] }));
    setSum(0);
  }, []);
  
  return (
    <div className="flex flex-col justify-center pt-10 px-10">
      <div className="flex justify-between">
        <div>Counter value is {count}</div>
      </div>
      <br/>
      <button className="w-100 bg-blue-600 text-white hover:bg-blue-700 rounded-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-4" onClick={increaseCounter}>
        Increase Counter
      </button>
      <br/>
      <button className="w-100 bg-red-600 text-white hover:bg-red-700 rounded-sm focus:ring-2 focus:ring-red-500 focus:ring-offset-4" 
        onClick={decreaseCounter}>
        Decrease Counter
      </button>

      <CounterHistory history={history} sum={sum} onSum={getTotalWithBuffer} onClear={clearHistory} />
    </div>
  );
}
