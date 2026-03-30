import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-2 text-sm text-[color:var(--foreground)]/70">
            Sign in to open the app. Demo auth accepts any non-empty email and
            password.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
