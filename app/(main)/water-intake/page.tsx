import { redirect } from "next/navigation";

export default function WaterIntakePage() {
  const profile = true;

  redirect(profile ? "/water-intake/dashboard" : "/water-intake/profile");
}
