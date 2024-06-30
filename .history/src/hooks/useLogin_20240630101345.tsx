import { useState } from 'react';

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (username:string, password:string) => {
    setLoading(true);

    try {
      const response = await fetch('https://mqtt-broker.ir/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
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