
import Image from 'next/image';
import {  signIn } from 'next-auth/react';



import Profile from './Profile';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { LogOut } from '@/app/components/Buttons';
const Header = async () => {
  const session = await getServerSession(authOptions)



  return (
    <header
      className={`fixed top-10 left-10 right-10 flex items-center z-30 bg-white text-black  transition-opacity duration-500 ease-in-out`}
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
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">Hem</li>
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">Nyheter</li>
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">podcast</li>
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">Om oss</li>
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">medlemskap</li>
          <li className="p-6 text-sm uppercase font-bold cursor-pointer hover:bg-black hover:text-white">kontakta oss</li>
        </ul>
      </nav>
      <div className="pr-6 cursor-pointer	">
        
          {session ? (
         <Profile session={session}/>
          ) : (
            <LogOut />
          )}
        
      </div>
    </header>
  );
};

export default Header;
