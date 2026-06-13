export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  email: string;
  role: string;
  expiresAt: string;
}

export interface RefreshRequest {
  userId: string;
  refreshToken: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}