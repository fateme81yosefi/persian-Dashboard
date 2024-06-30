import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface LoginResponse {
  error: string;
}

function useLogin() {
  const history = useHistory();
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
        setLoggedIn(true);
        setError('');
        history.push('/dashboard'); // Redirect to dashboard on successful login
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
