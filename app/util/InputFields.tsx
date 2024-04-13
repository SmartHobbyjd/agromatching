import React, { useState } from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number'; // Set default type to 'text' 
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', name, value, onChange }) => {
  return (
    <div className="mb-4"> 
      <label htmlFor={name} className="block text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default InputField;
