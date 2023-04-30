import React from 'react';

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <input value={value} onChange={onChange} placeholder="Cari user di github" className="w-full border border-zinc-100 p-[20px] rounded-[8px]" />
    </div>
  );
}
