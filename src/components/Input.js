import React from 'react';

export default function Input({ label, id, onChange, value }) {
  return (
    <label className="input" htmlFor={id}>
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
