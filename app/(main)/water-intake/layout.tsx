"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/water-intake/dashboard", label: "Dashboard" },
  { href: "/water-intake/profile", label: "Profile" },
] as const;

export default function WaterIntakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <section className="px-4 py-10 sm:px-10">
      <h1 className="text-2xl font-semibold tracking-tight">Water intake</h1>
      <nav aria-label="Water intake tabs" className="mt-6 flex items-center gap-2">
        {tabs.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[color:var(--foreground)]/10 text-[color:var(--foreground)]"
                  : "text-[color:var(--foreground)]/70 hover:bg-[color:var(--foreground)]/5 hover:text-[color:var(--foreground)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6">{children}</div>
    </section>
  );
}
