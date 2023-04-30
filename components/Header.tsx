import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5">
      <Image alt="Logo" src={'/logo.png'} width={100} height={100} />
      <div>
        <p className=" text-3xl md:text-5xl">Cari Orang</p>
        <p className="text-4xl font-bold">Di Github</p>
      </div>
    </div>
  );
}
