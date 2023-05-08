const API_BASE_URL = "/api";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
};

export const verifyEmail = async (email: string, access_token: string) => {
    const response = await fetch(`${API_BASE_URL}/verify_email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, access_token }),
    });
  
    if (!response.ok) {
      throw new Error("Verification failed");
    }
  
    const data = await response.json();
    return data;
  };