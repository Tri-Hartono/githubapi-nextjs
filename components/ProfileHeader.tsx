import Image from 'next/image';
import React from 'react';
import { UserDetail } from '../types/UserDetail';

export default function ProfileHeader({ user }: Props) {
  if (!user) return null;

  const StatsItem = ({ value, label }: { value: number; label: string }) => {
    return (
      <div className="flex flex-col items-center border border-zinc-200 p-2 md:p-4 rounded-lg">
        <p className="text-xl font-bold text-gray-700">{value}</p>
        <p className="font-semibold text-gray-500">{label}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center space-x-5 justify-center">
      <div className="flex items-center md:items-start space-x-4 w-full ">
        <Image alt="logo" src={user?.avatar_url} width={100} height={100} className="rounded-full border" />
        <div className="space-y-2">
          <p className="text-3xl md:text-5xl font-semibold">{user?.name}</p>
          <div className="bg-zinc-900 w-fit text-white px-3 py-1 rounded-md text-md">{user.id}</div>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center space-x-2 md:space-x-5 mt-5">
          <StatsItem value={user?.followers} label="Followers" />
          <StatsItem value={user?.following} label="Following" />
          <StatsItem value={user?.public_repos} label="Public Repos" />
        </div>
      </div>
    </div>
  );
}

interface Props {
  user?: UserDetail;
}
