import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string; // اضافه کردن فیلد token به interface LoginResponse
}

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (phone_number: string, password: string) => {
    setLoading(true);

    try {
      const response = await fetch('https://mqtt-broker.ir/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone_number, password }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        console.log(data.token); 
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setError('');
        
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loggedIn, login };
}

export default useLogin;

const checkTokenValidity = () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      // Token not found in localStorage, user is not logged in
      return false;
    }
  
    // Decode and check token expiration
    const decodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
  
    if (decodedToken.exp < currentTime) {
      // Token has expired
      localStorage.removeItem('token'); // Remove expired token
      return false;
    }
  
    return true;
  };
  
  const decodeToken = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };