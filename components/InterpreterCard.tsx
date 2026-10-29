'use client';

import React from 'react';
import { InterpreterProfile } from '../lib/types';

interface InterpreterCardProps {
  interpreter: InterpreterProfile | any;
}

export default function InterpreterCard({ interpreter }: InterpreterCardProps) {
  return (
    <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{interpreter.name}</h3>
      <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '1rem' }}>{interpreter.bio}</p>
      <div style={{ fontSize: '0.875rem', color: '#2563eb' }}>
        {interpreter.languages?.join(', ')}
      </div>
    </div>
  );
}
