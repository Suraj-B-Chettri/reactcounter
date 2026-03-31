import { AppNav } from "./AppNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <AppNav />
      <main className="flex-1">{children}</main>
    </div>
  );
}
