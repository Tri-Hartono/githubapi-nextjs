import React, { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen px-4 md:px-10 lg:px-0 bg-white text-black ">
      <main className="m-auto lg:w-1/3">{children}</main>
    </div>
  );
}
