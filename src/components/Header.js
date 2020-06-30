import React from 'react';

import Input from 'components/Input';
import formatLabel from 'utils/format-label';

export default function Header({ title, filters, onChangeFilters }) {
  return (
    <header className="filters">
      <h2 className="filters-title">{title}</h2>

      <div className="filters-body">
        {Object.keys(filters).map((field) => (
          <Input
            key={field}
            id={field}
            label={formatLabel(field)}
            value={filters[field]}
            onChange={(e) => onChangeFilters(field, e.target.value)}
          />
        ))}
      </div>
    </header>
  );
}
