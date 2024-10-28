import React from 'react';
import { InputAnnotation, InputAnnotationProps } from './InputAnnotation';
import { InputLabel, InputLabelProps } from './InputLabel';
import { InputText, InputTextProps } from './InputText';

export interface InputGroupProps {
  label?: string;
  input: InputTextProps;
  annotation?: InputAnnotationProps;
  helpText?: string;
  errorMessage?: string;
  darkMode?: boolean;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  input,
  annotation,
  helpText,
  errorMessage,
  darkMode = false,
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <InputLabel text={label} required={input.required} darkMode={darkMode} />}
      <div style={{ marginTop: '4px' }}>
        <InputText {...input} darkMode={darkMode} />
      </div>
      {!!annotation && <InputAnnotation {...annotation} darkMode={darkMode} />}
      {helpText && (
        <div style={{ marginTop: '4px', color: darkMode ? 'lightgray' : 'gray' }}>{helpText}</div>
      )}
      {errorMessage && (
        <div style={{ marginTop: '4px', color: darkMode ? 'red' : 'red' }}>{errorMessage}</div>
      )}
    </div>
  );
};
