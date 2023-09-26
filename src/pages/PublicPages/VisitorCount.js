import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import io from 'socket.io-client';
import { generateRandomNumber, getCookie, setCookie } from '../../utilities/helper';

const VisitorCount = () => {
  const [count, setCount] = useState(0);
  const { visitorCount, setVisitorCount } = useAuth();
  const [cookiesForVisitor, setCookiesForVisitor] = useState(getCookie('randomNumberForVisitorCount'));

  useEffect(() => {

    const socket = io('/', { withCredentials: true, path: '/mywebsocket' });

    if (!cookiesForVisitor) {
      const uniqueId = generateRandomNumber();
      setCookie('randomNumberForVisitorCount', uniqueId);
      setCookiesForVisitor(uniqueId);

    }
    // Listen for the visitorCount event and update the visitor count
    socket.on('visitorCount', (count) => {
      setVisitorCount(count);
    });

    socket.emit('incrementVisitorCount', cookiesForVisitor);


    // Clean up the event listener on unmount
    return () => {
      socket.off('visitorCount');
    };
  }, [cookiesForVisitor]);
  return (
    <>
    </>
  );
};

export default VisitorCount;