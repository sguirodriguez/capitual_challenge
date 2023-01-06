import React from 'react';
import { TextField } from '@mui/material';
import { Container } from './styles';
import { theme } from '../../styles/theme/generalColors';

interface InputProps {
  value?: any;
  onChange?: (event: any) => any;
  label?: string;
  placeholderText?: string;
  style?: any;
  disabled?: boolean;
  ref?: any;
  type?: string;
}

function Input({
  value,
  onChange,
  label,
  placeholderText,
  style,
  disabled,
  ref,
  type = 'text',
}: InputProps) {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        variant="outlined"
        className="input"
        label={label}
        value={value}
        onChange={onChange}
        style={style}
        placeholder={placeholderText}
        disabled={disabled}
        ref={ref}
        type={type}
        InputProps={{
          style: {
            width: '100%',
            borderRadius: 16,
            height: 45,
            backgroundColor: theme.colors.gray,
            border: `1px solid ${theme.colors.graySemiMedium}`,
            boxShadow: 'none',
          },
        }}
      />
    </Container>
  );
}

export default Input;
