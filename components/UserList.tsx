import React from 'react';
import { SearchRes } from '../types/SearchRes';
import UserItem from './UserItem';

interface Props {
  result: SearchRes;
}
export default function UserList({ result }: Props) {
  return (
    <div className="border border-zinc-300 rounded-[8px] w-full space-y-5">
      <p className="text-center p-[20px]">
        Hasil Pencarian : <span className="font-bold">{result?.search}</span>
      </p>
      {result?.users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}
