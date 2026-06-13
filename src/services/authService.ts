import axios from "axios";
import { api } from "@/lib/axios";
import { API_BASE_URL } from "@/constants/api";
import { LoginRequest, LoginResponse } from "@/interfaces/auth";

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/auth/login`,
      credentials
    );
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/logout");
  },

  revokeAll: async (): Promise<void> => {
    await api.post("/auth/revoke-all");
  },
};