import { useState } from 'react';

interface LoginResponse {
  error: string;
}

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (phone_number: string,full_name :string,email:string, password: string) => {
    setLoading(true);

    try {
      const response = await fetch('https://mqtt-broker.ir/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone_number,full_name,email, password }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        console.log(data); 
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setError('');
        window.location.href = '/dashboard'; 
      } else {
        setError(response.statusText);
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

