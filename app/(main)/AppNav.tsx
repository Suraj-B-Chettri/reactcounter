"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/auth-actions";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/counter", label: "Counter" },
  { href: "/water-intake", label: "Water intake" },
] as const;

export function AppNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-[color:var(--foreground)]/15 bg-[color:var(--background)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <nav className="flex flex-wrap items-center gap-1 sm:gap-4" aria-label="Main">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[color:var(--foreground)]/10 text-[color:var(--foreground)]"
                    : "text-[color:var(--foreground)]/70 hover:bg-[color:var(--foreground)]/5 hover:text-[color:var(--foreground)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
          >
            Log out
          </button>
        </form>
      </div>
    </header>
  );
}
