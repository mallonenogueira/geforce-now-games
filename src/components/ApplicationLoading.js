import React from 'react';

export default function ApplicationLoading({ children, loading }) {
  if (loading) {
    return <div className="application-loading" />;
  }

  return children;
}
