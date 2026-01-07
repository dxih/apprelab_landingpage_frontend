import { useAdmin } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useAuth = () => {
  const { token } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/admin/login');
  }, [token, navigate]);
};