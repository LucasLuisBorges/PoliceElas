import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services';

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  full_name: string;
  social_name: string;
  password: string;
  email: string;
  cpf: number;
  gender: string;
  phone: number;
  cep: number;
  address: string;
  complement: string;
  role?: number;
}

export type IUserResponse = Pick<IUser, 'id' | 'social_name'>;

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface ICode {
  value: string;
  id: string;
}

export interface IGenerateCodeResponse {
  code: ICode;
}

export interface IRecoverResponse {
  user_id: string;
}

export interface IRecoverPasswordRequest {
  email: string;
  newPassword: string;
  code: ICode;
}

export interface ICheckCodeResponse {
  token: string;
  code: ICode;
}

interface IAuthContextData {
  user: IUserResponse | null;
  signOut: () => void;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signUp: (data: IUser) => Promise<IUserResponse>;
  generateCodeForRecoverPassword: (email: string) => Promise<string>;
  checkCode: (email: string, code: string) => Promise<ICode>;
  recoverPassword: ({
    code,
    email,
    newPassword,
  }: IRecoverPasswordRequest) => Promise<IRecoverResponse>;
}

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    social_name: string;
  };
}

export const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = localStorage.getItem('@elas-app:token');
    const user_id = localStorage.getItem('@elas-app:id');

    if (token && user_id) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get(`/users/${user_id}`).then(res => {
        setUser(res.data);
      });
    }
  };
  const signOut = async () => {
    localStorage.removeItem('@elas-app:token');
    localStorage.removeItem('@elas-app:id');
    api.defaults.headers.common.authorization = `Bearer ${''}`;
    setUser(null);
  };

  const signIn = async ({ email, password }: IUserSignIn) => {
    const res = await api.post<IAuthResponse>('/login', {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem('@elas-app:token', token);
    localStorage.setItem('@elas-app:id', user.id);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  };

  const signUp = async (data: IUser) => {
    const res = await api.post<IAuthResponse>('/users', {
      ...data,
    });
    const { user } = res.data;

    return user;
  };

  const generateCodeForRecoverPassword = async (email: string) => {
    const res = await api.post<string>('/user/request-password', {
      email,
    });
    const result = res.data;

    return result;
  };

  const checkCode = async (email: string, code: string) => {
    const res = await api.post<ICheckCodeResponse>('/user/check-code', {
      email,
      code,
    });
    const { code: userCode, token } = res.data;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    return userCode;
  };

  const recoverPassword = async (data: IRecoverPasswordRequest) => {
    const res = await api.post<IRecoverResponse>('/user/recover-password', {
      ...data,
    });

    api.defaults.headers.common.authorization = `Bearer ${''}`;
    const user_id = res.data;

    return user_id;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        signIn,
        signUp,
        generateCodeForRecoverPassword,
        checkCode,
        recoverPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
