"use server";

import { cookies } from "next/headers";

export type profileState = { error: string } | null;

export async function profileAction(
  _prevState: profileState,
  formData: FormData
): Promise<profileState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!firstName || !lastName || !email || !phone) {
    return { error: "All profile fields are required." };
  }

  return null;
}