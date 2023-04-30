import React from 'react';
import { User } from '../types/User';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  user?: User;
}
export default function UserItem({ user }: Props) {
  return (
    <div className="flex justify-between items-center w-full   px-[20px] py-[5px]">
      <div className="inline-flex items-center space-x-3">
        <Image alt="profile" width={40} height={40} src={user?.avatar_url as string | StaticImageData} className="rounded-full" />
        <span>{user?.login}</span>
      </div>
      <span className="hover:bg-black/80 hover:text-white p-3">
        <Link href={`/detail/${user?.login}`}>
          <ChevronRightIcon className="w-4 h-4" />
        </Link>
      </span>
    </div>
  );
}
