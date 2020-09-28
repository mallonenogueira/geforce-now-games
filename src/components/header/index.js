import React from 'react';

import Input from 'components/input';
import formatLabel from 'utils/format-label';

export default function Header({
  title,
  mobileTitle,
  filters = {},
  onChangeFilters,
}) {
  return (
    <header className="filters">
      <h2 className="filters-title">
        <div className="d-sm-none">{title}</div>
        <div className="d-none d-sm-block">{mobileTitle}</div>
      </h2>

      <div className="filters-body">
        {Object.keys(filters).map((field) => (
          <Input
            className={filters[field].alwaysVisible ? '' : 'd-md-none'}
            key={field}
            id={field}
            label={formatLabel(field)}
            value={filters[field].value}
            onChange={(e) => onChangeFilters(field, e.target.value)}
          />
        ))}
      </div>
    </header>
  );
}
