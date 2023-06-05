import React from 'react';
import ReactDOM from 'react-dom/client';

import { SmartRange } from './components/SmartRange';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div
      style={{
        padding: '24px',
        gap: '16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      <SmartRange />
      <SmartRange />
      <SmartRange />
    </div>
  </React.StrictMode>,
);
