"use server";

export async function loginUser({ email, password }) {
  console.log("Attempting login for:", email);

  try {
    const res = await fetch("http://frontend.localhost:8080/api/method/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usr: email,
        pwd: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Login failed - Response not OK:", data);
      return { success: false, error: data.message || "Login failed" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Login failed - Exception:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
}