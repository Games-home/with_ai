import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border p-4 shadow hover:shadow-md transition">{children}</div>
);
