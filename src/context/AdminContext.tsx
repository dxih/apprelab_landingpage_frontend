import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Admin {
  name: string;
  email: string;
  role?: string;
}

interface AdminContextProps {
  admin: Admin | null;
  token: string | null;
  login: (admin: Admin, token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = sessionStorage.getItem('adminToken');
      const storedAdmin = sessionStorage.getItem('adminData');
      
      if (storedToken && storedToken !== 'undefined') {
        setToken(storedToken);
      }
      
      if (storedAdmin && storedAdmin !== 'undefined') {
        try {
          setAdmin(JSON.parse(storedAdmin));
        } catch (parseError) {
          console.error('Error parsing admin data:', parseError);
          sessionStorage.removeItem('adminData');
        }
      }
    } catch (error) {
      console.error('Error loading admin data:', error);
      sessionStorage.removeItem('adminToken');
      sessionStorage.removeItem('adminData');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (adminData: Admin, token: string) => {
    try {
      sessionStorage.setItem('adminToken', token);
      sessionStorage.setItem('adminData', JSON.stringify(adminData));
      setAdmin(adminData);
      setToken(token);
    } catch (error) {
      console.error('Error saving admin data:', error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminData');
    setAdmin(null);
    setToken(null);
  };

  return (
    <AdminContext.Provider value={{ admin, token, login, logout, isLoading }}>
      {!isLoading ? children : null}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};