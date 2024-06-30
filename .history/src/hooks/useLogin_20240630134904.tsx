import { useState } from 'react';

interface LoginResponse {
  error: string;
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
      }).then(response => response.json())
      .then(data => {
        // Handle the response data here
        console.
      })
      .catch(error => {
        // Handle any errors
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        //console.log(response)
        setLoggedIn(true);
        setError('');
      } else {

        setError(response.statusText)
    
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
