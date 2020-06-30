import React from 'react';

export default function Input({ label, id, onChange, value, className = '' }) {
  return (
    <label className={`input ${className}`} htmlFor={id}>
      <span className="input-label">{label}</span>
      <input
        className="input-element"
        id={id}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
