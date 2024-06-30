import { useState } from 'react';

interface ApiResponse {
  error: string;
}

function useApi() {
  const [error, setError] = useState('');
  const [statusAdd, setStatusAdd] = useState('');

  
  const create = async (phone_number: string,full_name :string,email:string, password: string) => {

    try {
      const response = await fetch('https://mqtt-broker.ir/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone_number,full_name,email, password }),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        console.log(data); 
        setError('');
        window.location.href = '/dashboard'; 
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } finally {
    }
  };

  return {error, create ,statusAdd};
}

export default useApi;

