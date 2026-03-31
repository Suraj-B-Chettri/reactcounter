"use client";
import { useCallback, useEffect, useState } from "react";

export default function WaterIntakePage() {
  const [count, setCount] = useState(0);
  const myFunc = useCallback(() => {
    console.log(count);
  }, [count]); // Only "new" if count changes

  useEffect(()=> {
    myFunc();
  }, [myFunc])
  return (
    <div className="px-4 py-10 sm:px-10">
      <h1 className="text-2xl font-semibold tracking-tight">Water intake</h1>
      <p className="mt-3 text-[color:var(--foreground)]/80">Welcome to water intake</p>
    </div>
  );
}
