'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(
        currentScrollPos < prevScrollPos || currentScrollPos < 50
      ); // Om man scrollar uppåt eller är nära toppen visas headern
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${
        isSticky
          ? 'fixed top-0 flex items-center z-30 bg-white text-black mx-auto ml-5 mt-5 mr-5 w-full transition-opacity duration-500 ease-in-out'
          : 'opacity-0 pointer-events-none' 
      }`}
    >
      <nav className="flex w-full items-center">
        <ul className="flex items-center gap-4">
          <li className="p-6 bg-red-600">
            <Image
              src="/arsenal.png"
              width={150}
              height={100}
              alt="Arsenal Göteborg"
            />
          </li>
          <li className="p-6 text-sm uppercase font-bold">Hem</li>
          <li className="p-6 text-sm uppercase font-bold">Nyheter</li>
          <li className="p-6 text-sm uppercase font-bold">podcast</li>
          <li className="p-6 text-sm uppercase font-bold">Om oss</li>
          <li className="p-6 text-sm uppercase font-bold">medlemskap</li>
          <li className="p-6 text-sm uppercase font-bold">kontakta oss</li>
        </ul>
      </nav>
      <div>
        <ul>
          <li className="p-6 text-sm uppercase font-bold whitespace-nowrap">
            Logga In
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
