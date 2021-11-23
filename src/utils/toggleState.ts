import React from 'react';

export const toggleState = (
  setState: React.Dispatch<React.SetStateAction<boolean>>
): void => setState((prevState) => !prevState);
