'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { UserContext } from '@/contexts/userContext';
import { useContext } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const LoadingPage = () => {
  const { isLogged, handleGoogleLogin } = useContext(UserContext);
  const router = useRouter();

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const authCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth='));

      console.log('Auth cookie:', authCookie);

      if (!authCookie) return;

      const cookieValue = decodeURIComponent(authCookie.split('=')[1]);
      const { token, user } = JSON.parse(cookieValue);

      if (!token || !user) {
        console.error('Token or user data missing.');
        return;
      }
      handleGoogleLogin({
        token,
        user,
      });

      router.push('/profile');
    } catch (error) {
      console.error('Error during authentication process:', error);
    }
  };

  if (!isLogged()) {
    setTimeout(() => fetchUserData(), 400);
  } else {
    router.push('/profile');
  }
}, [isLogged, handleGoogleLogin, router]);


  return (
    <div className='flex justify-center items-center h-screen'>
    <LoadingSpinner/>
    </div>
  );
};

export default LoadingPage;
