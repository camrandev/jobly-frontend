import React from 'react';
import { useState, useEffect } from 'react';

function useTokenLocalStorage () {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return [token, setToken];
};

export default useTokenLocalStorage;