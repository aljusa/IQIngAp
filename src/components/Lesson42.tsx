import React, { useState, useEffect } from 'react';
import { Settings, RefreshCw, ChevronRight, CheckCircle2, Info, BookOpen, Layers } from 'lucide-react';

const TransmissionApp = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [quizScore, setQuizScore] = useState(null);
  const [answers, setAnswers] = useState({});

  // --- Visual Components ---

  const ChainBeltVisual = ({ type = 'chain' }) => {
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 2) % 360);
      }, 20);
      return () => clearInterval(interval);
    }, []);

    const isChain = type === 'chain';

    return (
      <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl border border-slate-200 my-4 shadow-inner">
        <div className="text-sm font-semibold mb-4 text-slate-500 uppercase tracking-wider">
          Live Simulation: {isChain ? 'Chain & Sprocket' : 'Belt & Pulley'}
        </div>
        <svg width="300" height="150" viewBox="0 0 300 150">
          {/* Connecting Line (Chain or Belt) */}
          <path 
            d="M 80 40 L 220 50 M 80 110 L 220 100" 
            stroke={isChain ? "#475569" : "#1e293b"} 
            strokeWidth={isChain ? "4" : "6"}
            strokeDasharray={isChain ? "10,5" : "0"}
          />
          
          {/* Small Gear/Pulley */}
          <g transform={`translate(80, 75) rotate(${rotation})`}>
            <circle cx="0" cy="0" r="35" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="5" fill="white" />
            {isChain && [...Array(12)].map((_, i) => (
              <rect key={i} x="-4" y="-40" width="8" height="10" fill="#475569" transform={`rotate(${i * 30})`} />
            ))}
            {!isChain && <line x1="0" y1="-35" x2="0" y2="35" stroke="#475569" strokeWidth="2" />}
          </g>

          {/* Large Gear/Pulley */}
          <g transform={`translate(220, 75) rotate(${rotation * 0.5})`}>
            <circle cx="0" cy="0" r="50" fill="#64748b" stroke="#334155" strokeWidth="2" />
            <circle cx="0" cy="0" r="5" fill="white" />
            {isChain && [...Array(18)].map((_, i) => (
              <rect key={i} x="-4" y="-55" width="8" height="10" fill="#334155" transform={`rotate(${i * 20})`} />
            ))}
            {!isChain && <line x1="-50" y1="0" x2="50" y2="0" stroke="#334155" strokeWidth="2" />}
          </g>
        </svg>
        <p className="mt-4 text-xs text-slate-400 italic">
          {isChain 
            ? "Chain Drive: No slip, high force, uses toothed sprockets." 
            : "Belt Drive: Smooth, allows some slip (unless toothed), uses pulleys."}
        </p>
      </div>
    );
  };

  const CrankshaftVisual = () => {
    const [angle, setAngle] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setAngle(prev => (prev + 0.05) % (Math.PI * 2));
      }, 20);
      return () => clearInterval(interval);
    }, []);

    const r = 30; // crank radius
    const l = 80; // conrod length
    const cx = 150;
    const cy = 100;
    
    const crankX = cx + r * Math.cos(angle);
    const crankY = cy + r * Math.sin(angle);
    
    // Piston position y (approximate)
    const pistonY = cy - Math.sqrt(l*l - Math.pow(r * Math.cos(angle), 2)) + r * Math.sin(angle);

    return (
      <div className="flex flex-col items-center bg-slate-900 p-6 rounded-xl border border-slate-700 my-4 shadow-2xl">
        <div className="text-sm font-semibold mb-4 text-blue-400 uppercase tracking-wider">
          Conversion: Reciprocating ↔ Rotary
        </div>
        <svg width="300" height="200" viewBox="0 0 300 200">
          {/* Cylinder Walls */}
          <line x1="120" y1="20" x2="120" y2="100" stroke="#475569" strokeWidth="2" />
          <line x1="180" y1="20" x2="180" y2="100" stroke="#475569" strokeWidth="2" />
          
          {/* Piston */}
          <rect x="125" y={pistonY - 15} width="50" height="30" rx="2" fill="#94a3b8" />
          
          {/* Connecting Rod */}
          <line x1="150" y1={pistonY} x2={crankX} y2={crankY} stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
          
          {/* Crankshaft */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#334155" strokeDasharray="4" />
          <line x1={cx} y1={cy} x2={crankX} y2={crankY} stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
        </svg>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full text-center">
            <div className="text-xs text-slate-300"><span className="text-blue-400 font-bold">Piston:</span> Reciprocating</div>
            <div className="text-xs text-slate-300"><span className="text-red-400 font-bold">Crank:</span> Rotary</div>
        </div>
      </div>
    );
  };

  const CamVisual = () => {
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 2) % 360);
      }, 20);
      return () => clearInterval(interval);
    }, []);

    // Cam shape: slightly egg-shaped
    const rad = (rotation * Math.PI) / 180;
    const camOffset = Math.sin(rad) > 0 ? Math.sin(rad) * 25 : 0;
    const followerY = 60 - camOffset;

    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-xl border border-slate-200 my-4">
        <div className="text-sm font-semibold mb-4 text-emerald-600 uppercase tracking-wider">
          Valve Mechanism: Cam & Follower
        </div>
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Follower / Valve */}
          <rect x="95" y={followerY} width="10" height="60" fill="#475569" />
          <rect x="80" y={followerY - 5} width="40" height="5" fill="#1e293b" />
          
          {/* Guide */}
          <line x1="90" y1="40" x2="90" y2="100" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="110" y1="40" x2="110" y2="100" stroke="#cbd5e1" strokeWidth="2" />

          {/* Cam */}
          <g transform={`translate(100, 140) rotate(${rotation})`}>
            <path 
              d="M -30 0 A 30 30 0 1 0 30 0 C 30 -50 0 -60 -30 0" 
              fill="#10b981" 
              stroke="#065f46" 
              strokeWidth="2" 
            />
            <circle cx="0" cy="0" r="5" fill="white" />
          </g>
        </svg>
        <p className="mt-2 text-xs text-slate-500">The <strong>Cam</strong> converts rotary motion into timed linear motion.</p>
      </div>
    );
  };

  // --- Handlers ---
  const handleAnswer = (q, val) => {
    setAnswers(prev => ({ ...prev, [q]: val }));
  };

  const checkQuiz = () => {
    const correct = {
      q1: 'c',
      q2: 'a',
      q3: 'b',
      q4: 'e',
      q5: 'd'
    };
    let score = 0;
    Object.keys(correct).forEach(key => {
      if (answers[key] === correct[key]) score++;
    });
    setQuizScore(score);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Settings className="animate-spin-slow" size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Engineering Module</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Transmission II</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Exploring the advanced dynamics of motion transfer: from chains and belts to the intricate conversion between linear and circular movement.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto flex overflow-x-auto">
          {['overview', 'transmitting', 'conversion', 'mechanisms', 'exercises'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Section: Overview */}
        {activeTab === 'overview' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
              <Info className="text-blue-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">Lesson Objectives</h2>
                <ul className="text-blue-800 space-y-2">
                  <li>• Master mechanical vocabulary for power transmission.</li>
                  <li>• Understand the difference between chain and belt drive systems.</li>
                  <li>• Analyze the transformation of reciprocating motion into rotary motion.</li>
                </ul>
              </div>
            </div>
            <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                    Mechanical systems are the heart of industry. In this lesson, we focus on how power moves over distances between shafts and how we change the <strong>type</strong> of motion to suit our needs—like turning the vertical explosion in an engine into the rotation of wheels.
                </p>
            </div>
          </section>
        )}

        {/* Section: Transmitting Power */}
        {activeTab === 'transmitting' && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                  <Layers className="text-blue-600" /> Chains, Sprockets & Pulleys
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-800">Chain Drive</h3>
                    <p className="text-sm text-slate-600">Uses a <strong>Sprocket</strong> (toothed wheel) to transmit high forces without slipping. Commonly seen in bicycles and motorcycles.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-800">Belt Drive</h3>
                    <p className="text-sm text-slate-600">Uses a <strong>Pulley</strong> (smooth or toothed wheel). Quieter than chains but may slip if not toothed.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <ChainBeltVisual type="chain" />
                <ChainBeltVisual type="belt" />
              </div>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" /> Key Engineering Principle
              </h3>
              <p className="text-slate-300">
                <strong>Mechanical Advantage:</strong> By changing the size ratio between two sprockets or pulleys, we can increase output force at the cost of speed, or vice versa.
              </p>
            </div>
          </section>
        )}

        {/* Section: Motion Conversion */}
        {activeTab === 'conversion' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold mb-6">Reciprocating vs. Rotary Motion</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-slate-600">
                  In internal combustion engines, pistons move up and down (<strong>Reciprocating Motion</strong>). To move a vehicle, this must become circular movement (<strong>Rotary Motion</strong>).
                </p>
                <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">01</div>
                        <div>
                            <h4 className="font-bold">Connecting Rod</h4>
                            <p className="text-xs text-slate-500">The link between the piston and the crank.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">02</div>
                        <div>
                            <h4 className="font-bold">Crankshaft</h4>
                            <p className="text-xs text-slate-500">The central shaft that handles the turning moment.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">03</div>
                        <div>
                            <h4 className="font-bold">Flywheel</h4>
                            <p className="text-xs text-slate-500">A heavy wheel that uses inertia to keep the rotation smooth.</p>
                        </div>
                    </div>
                </div>
              </div>
              <CrankshaftVisual />
            </div>
          </section>
        )}

        {/* Section: Valve Mechanisms */}
        {activeTab === 'mechanisms' && (
          <section className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Valve Control Systems</h2>
                <p className="text-slate-600 mb-6">
                  Engine valves must open and close with perfect timing. This is achieved using a <strong>Camshaft</strong>.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-600">Cam:</span> A rotating part with an irregular (egg) shape.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-600">Follower:</span> The part that rests on the cam and moves up/down as the cam rotates.
                  </li>
                  <li className="flex gap-2 text-sm italic text-slate-500 bg-slate-100 p-2 rounded">
                    Concept: "Cams convert rotary motion back into controlled reciprocating motion."
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <CamVisual />
              </div>
            </div>
          </section>
        )}

        {/* Section: Exercises */}
        {activeTab === 'exercises' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold mb-6">Knowledge Check</h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-lg font-bold mb-6 text-slate-700 border-b pb-2">Match the Terminology</h3>
              
              <div className="space-y-6">
                {[
                  { id: 'q1', label: '1. Sprocket', options: [{v:'a', l:'Wheel used with belts'}, {v:'b', l:'Converts motion types'}, {v:'c', l:'Toothed wheel for chains'}] },
                  { id: 'q2', label: '2. Pulley', options: [{v:'a', l:'Wheel used with belts'}, {v:'b', l:'Heavy stabilizing wheel'}, {v:'c', l:'Irregular rotating part'}] },
                  { id: 'q3', label: '3. Crankshaft', options: [{v:'a', l:'Connecting rod'}, {v:'b', l:'Converts reciprocating to rotary'}, {v:'c', l:'Controls valve timing'}] },
                  { id: 'q4', label: '4. Flywheel', options: [{v:'e', l:'Heavy wheel maintaining smooth rotation'}, {v:'f', l:'A simple cable'}] },
                  { id: 'q5', label: '5. Cam', options: [{v:'d', l:'Rotating part controlling linear timing'}, {v:'f', l:'A type of belt'}] }
                ].map((q) => (
                  <div key={q.id} className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 font-bold text-slate-800">{q.label}</span>
                    <select 
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      className="flex-1 p-2 rounded border border-slate-300 bg-slate-50"
                    >
                      <option value="">Select Definition...</option>
                      {q.options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <button 
                onClick={checkQuiz}
                className="mt-8 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Check My Answers
              </button>

              {quizScore !== null && (
                <div className={`mt-6 p-4 rounded-lg flex items-center justify-between ${quizScore >= 4 ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
                  <span className="font-bold text-lg">Result: {quizScore} / 5</span>
                  {quizScore === 5 ? <p>Perfect Engineering Skill!</p> : <p>Review the visuals above.</p>}
                  <button onClick={() => setQuizScore(null)} className="text-sm underline">Reset</button>
                </div>
              )}
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
        <div className="flex justify-center gap-8 mb-4">
            <span className="flex items-center gap-1"><BookOpen size={16} /> Technical Theory</span>
            <span className="flex items-center gap-1"><RefreshCw size={16} /> Dynamic Systems</span>
        </div>
        <p>© 2024 Educational Engineering Series - Transmission 2 Module</p>
      </footer>
    </div>
  );
};

export default TransmissionApp;