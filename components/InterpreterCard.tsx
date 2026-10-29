import React, { useState } from 'react';
import { InterpreterProfile } from '../lib/types';

export const InterpreterCard = ({ interpreter }: { interpreter: InterpreterProfile }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 rounded-2xl p-6 backdrop-blur-sm transition duration-300 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4">
          <img
            src={interpreter.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'}
            alt={interpreter.full_name}
            className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50"
          />
          <div>
            <h3 className="text-lg font-bold text-stone-100">{interpreter.full_name}</h3>
            <p className="text-amber-500 text-sm font-semibold">{interpreter.native_language} Native</p>
            <p className="text-stone-400 text-xs">{interpreter.location}</p>
          </div>
        </div>

        <p className="text-stone-300 text-sm my-4 line-clamp-3 leading-relaxed">
          {interpreter.bio}
        </p>

        {interpreter.secondary_languages && interpreter.secondary_languages.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {interpreter.secondary_languages.map((lang, idx) => (
              <span key={idx} className="bg-stone-800 text-stone-300 text-xs px-2.5 py-1 rounded-full border border-stone-700">
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="border-t border-stone-800 pt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-400">Rate / Hour</span>
            <p className="text-stone-100 font-bold text-lg">${interpreter.hourly_rate_usd}</p>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
          >
            <span>{isPlaying ? 'Close Accent Clip' : 'Listen to Accent'}</span>
          </button>
        </div>

        {isPlaying && (
          <div className="mt-4 rounded-xl overflow-hidden border border-amber-500/30 bg-black">
            <video src={interpreter.accent_video_url} controls autoPlay className="w-full h-40 object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};
