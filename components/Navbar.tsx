'use client';

import React from 'react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  return (
    <nav style={{ padding: '1rem 2rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>SemaAfrica</h2>
      <button 
        onClick={onOpenInquiry}
        style={{ padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
      >
        Inquire
      </button>
    </nav>
  );
}
