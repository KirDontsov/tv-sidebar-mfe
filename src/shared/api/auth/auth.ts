import { BACKEND_PORT, UserInfoResult } from "@/shared";

export async function checkAuth(): Promise<UserInfoResult> {
  try {
    const res = await fetch(`${BACKEND_PORT}/api/users/me`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    console.warn("error", error);
    return null;
  }
}
