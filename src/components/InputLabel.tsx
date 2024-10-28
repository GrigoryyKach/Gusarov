import React from 'react';

export interface InputLabelProps {
  text: string;
  required?: boolean;
  darkMode?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  text,
  required,
  darkMode = false,
}) => {
  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    color: darkMode ? 'white' : 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as React.CSSProperties;

  return (
    <label style={labelStyle}>
      {text}
      {required && <span style={{ color: 'red' }}> *</span>}
    </label>
  );
};
