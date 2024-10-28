import React from 'react';

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  quiet?: boolean;
  hasError?: boolean;
  darkMode?: boolean;
}

export const InputText: React.FC<InputTextProps> = ({
  inputSize = 'md',
  quiet = false,
  hasError = false,
  darkMode = false,
  ...nativeInputProps
}) => {
  const sizes = {
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '16px',
  };

  const inputStyle = {
    padding: sizes[inputSize],
    fontSize: sizes[inputSize],
    border: hasError ? '1px solid red' : quiet ? 'none' : '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    backgroundColor: quiet ? 'transparent' : darkMode ? '#333' : 'white',
    color: darkMode ? 'white' : 'black',
  } as React.CSSProperties;

  return <input style={inputStyle} {...nativeInputProps} />;
};
