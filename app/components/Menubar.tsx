import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tiktok from '../../public/tiktok-logo.png';

const MenuBar: React.FC = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={tiktok} 
              alt="Website Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;