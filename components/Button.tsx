import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoading?: boolean;
}
export default function Button({ type, isLoading }: Props) {
  const Loading = () => {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  };
  return (
    <button type={type} className="bg-black hover:bg-zinc-950 p-[20px] aspect-square rounded-lg text-white">
      {isLoading ? <Loading /> : <MagnifyingGlassIcon className="w-6 h-6" />}
    </button>
  );
}
