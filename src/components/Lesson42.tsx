import React, { useState, useEffect } from 'react';
import { BookOpen, Settings, Activity, List, CheckCircle, ArrowRight } from 'lucide-react';

// --- VISUAL COMPONENTS (DIAGRAMS) ---

const PulleysAndChainsDiagram = () => (
  <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-slate-700 mb-4">Belt Drive (Pulley System)</h4>
      <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-md">
        {/* Belt */}
        <rect x="40" y="30" width="120" height="60" rx="30" fill="none" stroke="#475569" strokeWidth="8" />
        {/* Pulleys */}
        <circle cx="40" cy="60" r="26" fill="#94a3b8" />
        <circle cx="40" cy="60" r="10" fill="#cbd5e1" />
        <circle cx="160" cy="60" r="26" fill="#94a3b8" />
        <circle cx="160" cy="60" r="10" fill="#cbd5e1" />
        {/* Rotation arrows */}
        <path d="M 25 45 A 20 20 0 0 1 55 45" fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
      <p className="text-sm text-slate-500 mt-2 text-center max-w-[200px]">Smooth wheels (pulleys) with a flexible belt. Can slip under heavy loads.</p>
    </div>
    
    <div className="w-px h-32 bg-slate-200 hidden md:block"></div>
    
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-slate-700 mb-4">Chain Drive (Sprockets)</h4>
      <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-md">
        {/* Chain */}
        <rect x="40" y="30" width="120" height="60" rx="30" fill="none" stroke="#334155" strokeWidth="6" strokeDasharray="4 4"/>
        {/* Sprockets (Toothed) */}
        <path d="M 40 25 L 45 30 L 55 30 L 60 40 L 65 50 L 60 65 L 50 75 L 30 75 L 20 65 L 15 50 L 20 40 L 30 30 Z" fill="#64748b" />
        <circle cx="40" cy="60" r="22" fill="#475569" />
        <circle cx="40" cy="60" r="8" fill="#e2e8f0" />
        
        <path d="M 160 25 L 165 30 L 175 30 L 180 40 L 185 50 L 180 65 L 170 75 L 150 75 L 140 65 L 135 50 L 140 40 L 150 30 Z" fill="#64748b" />
        <circle cx="160" cy="60" r="22" fill="#475569" />
        <circle cx="160" cy="60" r="8" fill="#e2e8f0" />
      </svg>
      <p className="text-sm text-slate-500 mt-2 text-center max-w-[200px]">Toothed wheels (sprockets) with a metal chain. Prevents slipping.</p>
    </div>
  </div>
);

const ReciprocatingRotaryDiagram = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden">
      <style>{`
        @keyframes rotateCrank {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes movePiston {
          0% { transform: translateY(0px); }
          50% { transform: translateY(40px); }
          100% { transform: translateY(0px); }
        }
        .crank-animate {
          animation: rotateCrank 2s linear infinite;
          transform-origin: 100px 140px;
        }
        .piston-animate {
          animation: movePiston 2s ease-in-out infinite;
        }
      `}</style>
      <h4 className="font-semibold text-slate-700 mb-4">Piston & Crankshaft (Motion Conversion)</h4>
      <div className="relative w-[200px] h-[220px]">
        {/* Cylinder outline */}
        <rect x="75" y="10" width="50" height="90" fill="none" stroke="#cbd5e1" strokeWidth="4" />
        
        <svg width="200" height="220" viewBox="0 0 200 220">
          {/* Crank Center */}
          <circle cx="100" cy="140" r="6" fill="#334155" />
          {/* Piston (Reciprocating) */}
          <g className="piston-animate">
            <rect x="78" y="20" width="44" height="30" rx="4" fill="#64748b" />
            <line x1="100" y1="50" x2="100" y2="70" stroke="#475569" strokeWidth="6" strokeLinecap="round"/>
          </g>
          {/* Crank & Conrod (Rotary) */}
          <g className="crank-animate">
            <line x1="100" y1="140" x2="100" y2="100" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
            <circle cx="100" cy="100" r="8" fill="#475569" />
          </g>
          {/* Rotary Path Indicator */}
          <circle cx="100" cy="140" r="40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="flex gap-4 mt-4 w-full justify-center">
        <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Reciprocating (Linear)</span>
        <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">Rotary (Circular)</span>
      </div>
    </div>
  );
};

const CamFollowerDiagram = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200">
       <style>{`
        @keyframes rotateCam {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes moveFollower {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-20px); }
          50% { transform: translateY(0px); }
        }
        .cam-animate {
          animation: rotateCam 3s linear infinite;
          transform-origin: 100px 120px;
        }
        .follower-animate {
          animation: moveFollower 3s linear infinite;
        }
      `}</style>
      <h4 className="font-semibold text-slate-700 mb-4">Cam & Follower System</h4>
      <div className="relative w-[200px] h-[180px]">
        <svg width="200" height="180" viewBox="0 0 200 180">
          {/* Valve/Follower */}
          <g className="follower-animate">
            <rect x="95" y="20" width="10" height="70" fill="#94a3b8" />
            <rect x="85" y="90" width="30" height="6" rx="2" fill="#475569" />
            <path d="M 85 20 L 115 20 L 100 5 Z" fill="#64748b" /> {/* Valve head */}
          </g>
          {/* Guide for follower */}
          <rect x="85" y="40" width="30" height="20" fill="none" stroke="#cbd5e1" strokeWidth="4" />
          
          {/* Cam (Egg shaped) */}
          <g className="cam-animate">
            <path d="M 100 120 C 130 120, 120 85, 100 85 C 80 85, 70 120, 100 120 Z" fill="#3b82f6" transform="scale(1.5) translate(-33, -30)" />
            <circle cx="100" cy="120" r="4" fill="#1e40af" />
          </g>
        </svg>
      </div>
      <p className="text-sm text-slate-500 mt-2 text-center max-w-[220px]">Rotary motion of the shaped <strong>cam</strong> causes the <strong>follower</strong> to move up and down, opening and closing valves.</p>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState('lesson');
  const [exercise1Answers, setExercise1Answers] = useState({});
  const [ex1Score, setEx1Score] = useState(null);

  // Ex 1 logic
  const ex1Questions = [
    { id: 'q1', term: 'Sprocket', correct: 'C' },
    { id: 'q2', term: 'Pulley', correct: 'E' },
    { id: 'q3', term: 'Crankshaft', correct: 'B' },
    { id: 'q4', term: 'Flywheel', correct: 'A' },
    { id: 'q5', term: 'Cam', correct: 'D' },
  ];
  const ex1Options = [
    { id: 'A', text: 'Stabilizes rotational motion' },
    { id: 'B', text: 'Converts reciprocating motion to rotary motion' },
    { id: 'C', text: 'Toothed wheel for a chain' },
    { id: 'D', text: 'Controls movement of a follower' },
    { id: 'E', text: 'Smooth wheel for belts' },
  ];

  const handleEx1Change = (qId, val) => {
    setExercise1Answers(prev => ({ ...prev, [qId]: val }));
  };

  const checkEx1 = () => {
    let score = 0;
    ex1Questions.forEach(q => {
      if (exercise1Answers[q.id] === q.correct) score++;
    });
    setEx1Score(score);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
         
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Transmission Systems: <br/> Chains, Pulleys & Motion
          </h1>
        
        </div>
      </header>

    

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 py-10">
        
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Section 1 */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">1. Chains, Sprockets, and Pulleys</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Transmitting Motion Over Distance</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Mechanical drives are essential for transferring power from one shaft to another. 
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Chain Drives:</strong> Use a chain driven by toothed wheels called <em>sprockets</em>. Changing sprocket sizes alters the gear ratio. They are used when slipping must be avoided.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Belt Drives:</strong> Work similarly but use smooth wheels called <em>pulleys</em> (or sheaves) and a flexible belt. Toothed belts exist for slip-free applications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Mechanical Advantage:</strong> A system of pulleys can multiply force, allowing us to lift heavy loads (e.g., cranes using cables/wire ropes).</span>
                    </li>
                  </ul>
                </div>
                {/* Visual Component */}
                <PulleysAndChainsDiagram />
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-700">
                  <Activity className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">2. Conversion: Reciprocating ↔ Rotary</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="order-2 md:order-1">
                  <ReciprocatingRotaryDiagram />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">Understanding Motion Types</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Machines often need to transform back-and-forth movement into continuous circular movement, or vice versa.
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span><strong>Reciprocating Motion:</strong> Back-and-forth linear movement (e.g., the up and down movement of pistons).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span><strong>Rotary Motion:</strong> Circular movement (e.g., rotating shafts).</span>
                    </li>
                  </ul>
                  
                 
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-700">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">3. Engine Components & Motion Control</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Controlling Speed and Timing</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                      <span className="bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">A</span>
                      The Flywheel
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 ml-7">
                      A heavy rotating wheel attached to the crankshaft. It provides momentum and ensures the rotational motion remains smooth and constant between power strokes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                      <span className="bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">B</span>
                      The Camshaft System
                    </h4>
                    <p className="text-slate-600 text-sm mt-1 ml-7">
                      Transfers rotary motion to precisely control engine valves. It consists of:
                    </p>
                    <ul className="list-disc ml-12 text-sm text-slate-600 mt-2 space-y-1">
                      <li><strong>Cam:</strong> A rotating part with a specifically shaped profile (often egg-shaped).</li>
                      <li><strong>Follower:</strong> A component that rides on the cam and moves up and down as the cam rotates.</li>
                      <li><strong>Function:</strong> Opens and closes engine valves at the exact right time.</li>
                    </ul>
                  </div>
                </div>
                {/* Visual Component */}
                <CamFollowerDiagram />
              </div>
            </section>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Vocabulary Reference List</h2>
                <p className="text-slate-500 mt-1">Key terminology for mechanical transmission systems.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 font-semibold border-b">Term</th>
                      <th className="py-4 px-6 font-semibold border-b">Definition</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {[
                      { term: "Chain drive", def: "System using a chain to transmit motion" },
                      { term: "Sprocket", def: "Toothed wheel driving a chain" },
                      { term: "Belt drive", def: "System using a belt and pulleys" },
                      { term: "Pulley / Sheave", def: "Smooth wheel guiding a belt" },
                      { term: "Mechanical advantage", def: "System that increases force" },
                      { term: "Reciprocating motion", def: "Back-and-forth motion" },
                      { term: "Rotary motion", def: "Circular motion" },
                      { term: "Connecting rod", def: "Link between piston and crankshaft" },
                      { term: "Crankshaft", def: "Converts motion types" },
                      { term: "Torque", def: "Turning force" },
                      { term: "Flywheel", def: "Wheel that stabilizes motion" },
                      { term: "Cam", def: "Shaped rotating component" },
                      { term: "Follower", def: "Component that tracks cam motion" },
                      { term: "Valve", def: "Controls flow in engine" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-medium text-blue-900">{row.term}</td>
                        <td className="py-4 px-6">{row.def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Exercise 1: Matching Terms (Basic)</h2>
              <p className="text-slate-600 mb-6">Match each mechanical term to its correct definition using the dropdown menus.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {ex1Questions.map((q) => (
                    <div key={q.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-semibold text-slate-700">{q.term}</span>
                      <select 
                        className="bg-white border border-slate-300 rounded p-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={exercise1Answers[q.id] || ''}
                        onChange={(e) => handleEx1Change(q.id, e.target.value)}
                        disabled={ex1Score !== null}
                      >
                        <option value="">Select...</option>
                        {ex1Options.map(opt => (
                          <option key={opt.id} value={opt.id}>{opt.id}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-4">Definitions</h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    {ex1Options.map(opt => (
                      <li key={opt.id} className="flex gap-3">
                        <span className="font-bold bg-blue-200 w-6 h-6 flex items-center justify-center rounded shrink-0">{opt.id}</span>
                        <span>{opt.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                {ex1Score === null ? (
                  <button 
                    onClick={checkEx1}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Check Answers
                  </button>
                ) : (
                  <div className="flex items-center gap-4 w-full">
                    <div className={`flex items-center gap-2 font-bold text-lg ${ex1Score === 5 ? 'text-emerald-600' : 'text-amber-600'}`}>
                      <CheckCircle className="w-6 h-6" />
                      Score: {ex1Score} / 5
                    </div>
                    <button 
                      onClick={() => { setEx1Score(null); setExercise1Answers({}); }}
                      className="ml-auto text-slate-500 hover:text-slate-800 underline text-sm"
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Static Exercises for preview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Exercise 2</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-3 border-b pb-2">Fill in the Blanks</h3>
                  <ol className="list-decimal ml-5 space-y-3 text-slate-600">
                    <li>A <span className="inline-block w-24 border-b-2 border-slate-300"></span> transmits motion using a flexible belt.</li>
                    <li>A <span className="inline-block w-24 border-b-2 border-slate-300"></span> connects the piston to the crankshaft.</li>
                    <li>A <span className="inline-block w-24 border-b-2 border-slate-300"></span> system can lift heavy loads with less effort.</li>
                    <li>A <span className="inline-block w-24 border-b-2 border-slate-300"></span> rotates and causes a follower to move.</li>
                    <li>A <span className="inline-block w-24 border-b-2 border-slate-300"></span> helps maintain constant rotational speed.</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-3 border-b pb-2">Contextual Usage</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li><span className="text-blue-500 mr-2">→</span> A system that uses toothed wheels and a chain to transmit motion. <span className="italic text-slate-400">(Answer: ________________)</span></li>
                    <li><span className="text-blue-500 mr-2">→</span> A mechanism that converts linear piston motion into rotation. <span className="italic text-slate-400">(Answer: ________________)</span></li>
                    <li><span className="text-blue-500 mr-2">→</span> A rotating component that opens and closes valves. <span className="italic text-slate-400">(Answer: ________________)</span></li>
                    <li><span className="text-blue-500 mr-2">→</span> A system designed to increase lifting force. <span className="italic text-slate-400">(Answer: ________________)</span></li>
                    <li><span className="text-blue-500 mr-2">→</span> A rotating mass used to smooth engine operation. <span className="italic text-slate-400">(Answer: ________________)</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

      </main>
    </div>
  );
}