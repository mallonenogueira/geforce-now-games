import React from 'react';

export default function LabelValue({ label, value }) {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="value">{String(value)}</span>
    </div>
  );
}
