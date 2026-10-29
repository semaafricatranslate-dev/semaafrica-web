
import React from 'react';
import Navbar from '../components/Navbar';
import InterpreterCard from '../components/InterpreterCard';
import type { InterpreterProfile } from '../types/interpreter';

const sampleInterpreter: InterpreterProfile = {
  id: '1',
  full_name: 'Sample Interpreter',
  native_language: 'English',
  secondary_languages: ['Swahili', 'French'],
  location: 'Nairobi, Kenya',
  bio: 'Professional interpreter bridging communication across Africa.',
  rating: 5.0,
  is_available: true,
  hourly_rate_usd: 25,
  // Add any other required fields from InterpreterProfile here.
};

export default function Home() {
  const handleOpenInquiry = () => {
    // TODO: Open the inquiry form or modal.
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
      }}
    >
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <header
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
            }}
          >
            SemaAfrica Translate
          </h1>

          <p
            style={{
              color: '#4b5563',
              marginTop: '0.5rem',
            }}
          >
            Connecting professional interpreters and bridging
            communication across Africa.
          </p>
        </header>

        <section
          aria-label="Featured interpreters"
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <InterpreterCard interpreter={sampleInterpreter} />
        </section>
      </div>
    </main>
  );
}
