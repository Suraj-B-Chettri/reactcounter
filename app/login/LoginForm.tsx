"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/lib/auth-actions";

const initialState: LoginState = null;

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {state?.error ? (
        <p className="rounded-sm bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-400">
          {state.error}
        </p>
      ) : null}

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={pending}
          className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          disabled={pending}
          className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-sm bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:outline-none disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
