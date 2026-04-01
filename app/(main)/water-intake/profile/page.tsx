"use client";
import { useActionState } from "react";
import { profileAction, type profileState } from "@/lib/profile-actions";
const initialState: profileState = null;

export default function WaterIntakeProfile() {
  const [state, formAction, pending] = useActionState(profileAction, initialState);

  return (
    <div className="rounded-md border border-[color:var(--foreground)]/15 p-4 w-sm">
      <h2 className="text-lg font-medium">Profile</h2>
      <div>
        <form action={formAction} className="mt-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium ">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
              />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium ">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
              />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
              />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium ">Contact</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-sm border border-[color:var(--foreground)]/20 bg-[color:var(--background)] px-3 py-2 text-sm outline-none ring-offset-2 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
              />
          </div>
          <button
            className="mt-5 rounded-md bg-blue-400 px-2 py-1 hover:bg-blue-800 disabled:opacity-60"
            type="submit"
            disabled={pending}
          >
            {pending ? "Saving..." : "Submit Profile"}
          </button>
          {state?.error ? <p className="mt-2 text-sm text-red-600">{state.error}</p> : null}
        </form>
      </div>
    </div>
  );
}