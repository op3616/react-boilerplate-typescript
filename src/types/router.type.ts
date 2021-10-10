import React from 'react';

export interface Route {
  name: string;
  path: string;
  component: React.ComponentType;
  listKey?: (data: any) => string;
}
