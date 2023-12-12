'use client';

import { ChangeEventHandler, useState } from 'react';

type UseInputReturn = [
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
];

export const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
