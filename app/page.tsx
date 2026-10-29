import React from 'react';
import Navbar from '../components/Navbar';
import InterpreterCard from '../components/InterpreterCard';

const sampleInterpreter = {
  id: '1',
  name: 'Sample Interpreter',
  languages: ['English', 'Swahili', 'French'],
  location: 'Nairobi, Kenya',
  bio: 'Professional interpreter bridging communication across Africa.',
  rating: 5.0,
  isAvailable: true,
};

export default function Home() {
  const handleOpenInquiry = () => {};

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Navbar onOpenInquiry={handleOpenInquiry} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>
            SemaAfrica Translate
          </h1>
          <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>
            Connecting professional interpreters and bridging communication across Africa.
          </p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <InterpreterCard interpreter={sampleInterpreter} />
        </section>
      </div>
    </main>
  );
}
