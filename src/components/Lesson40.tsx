import React, { useState } from 'react';
import { Settings, Zap, Droplet, Wind, FastForward, RotateCw, CheckCircle, XCircle } from 'lucide-react';

// --- COMPONENTES VISUALES ---

// Diagrama interactivo del pistón (Sugerencia Visual del Ciclo de 4 Tiempos)
const PistonDiagram = ({ step }) => {
  // Configuración del estado visual dependiendo del tiempo (stroke)
  const states = {
    0: { y: 80, intakeOpen: true, exhaustOpen: false, color: 'bg-blue-200', spark: false, label: 'Induction (Intake)' },
    1: { y: 20, intakeOpen: false, exhaustOpen: false, color: 'bg-blue-400', spark: false, label: 'Compression' },
    2: { y: 80, intakeOpen: false, exhaustOpen: false, color: 'bg-orange-500', spark: true, label: 'Power (Ignition)' },
    3: { y: 20, intakeOpen: false, exhaustOpen: true, color: 'bg-gray-400', spark: false, label: 'Exhaust' },
  };

  const current = states[step];

  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200 shadow-inner overflow-hidden">
      <div className="absolute top-4 text-sm font-bold text-gray-500 uppercase tracking-widest">{current.label}</div>
      
      <svg width="120" height="180" viewBox="0 0 120 180" className="mt-8">
        {/* Spark Plug */}
        <rect x="55" y="0" width="10" height="20" fill="#cbd5e1" />
        {current.spark && <path d="M 60 20 L 55 30 L 62 30 L 58 40" stroke="#fbbf24" strokeWidth="2" fill="none" />}
        
        {/* Valves */}
        {/* Intake Valve (Left) */}
        <line x1="30" y1="0" x2="30" y2={current.intakeOpen ? "30" : "20"} stroke="#475569" strokeWidth="4" />
        <line x1="20" y1={current.intakeOpen ? "30" : "20"} x2="40" y2={current.intakeOpen ? "30" : "20"} stroke="#475569" strokeWidth="4" />
        {/* Exhaust Valve (Right) */}
        <line x1="90" y1="0" x2="90" y2={current.exhaustOpen ? "30" : "20"} stroke="#475569" strokeWidth="4" />
        <line x1="80" y1={current.exhaustOpen ? "30" : "20"} x2="100" y2={current.exhaustOpen ? "30" : "20"} stroke="#475569" strokeWidth="4" />

        {/* Cylinder Chamber */}
        <path d="M 20 20 L 20 150 M 100 20 L 100 150" stroke="#334155" strokeWidth="4" fill="none" />
        
        {/* Fuel/Air/Exhaust Mixture */}
        <rect x="22" y="22" width="76" height={current.y - 22} className={`transition-all duration-500 ease-in-out ${current.color} opacity-50`} />

        {/* Piston */}
        <g className="transition-all duration-500 ease-in-out" style={{ transform: `translateY(${current.y}px)` }}>
          <rect x="22" y="0" width="76" height="40" fill="#94a3b8" rx="2" />
          <line x1="22" y1="10" x2="98" y2="10" stroke="#64748b" strokeWidth="2" />
          <line x1="22" y1="20" x2="98" y2="20" stroke="#64748b" strokeWidth="2" />
          {/* Connecting Rod */}
          <line x1="60" y1="40" x2="60" y2="100" stroke="#cbd5e1" strokeWidth="8" />
          <circle cx="60" cy="40" r="4" fill="#334155" />
        </g>
      </svg>
    </div>
  );
};

export default function App() {
  const [activeStroke, setActiveStroke] = useState(0);

  // Estados para los ejercicios
  const [matchAnswers, setMatchAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [fillAnswers, setFillAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  
  const handleMatchChange = (q, val) => setMatchAnswers(prev => ({ ...prev, [q]: val }));
  const handleFillChange = (q, val) => setFillAnswers(prev => ({ ...prev, [q]: val }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* HEADER */}
      <header className="bg-indigo-900 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-3">
            <Settings className="w-10 h-10 text-indigo-400" />
            Engines and Motors
          </h1>
          
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-12">
        
        {/* 1. OVERVIEW */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-2">1. Overview</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            This lesson explains the types and functions of engines and motors, how they produce motion and power, and how internal combustion engines operate. The focus is on key technical vocabulary used in mechanical and automotive engineering.
          </p>
        </section>

        {/* 2A. KEY VOCABULARY: ENGINES VS MOTORS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-2">2A. Types and Functions (Engine vs. Motor)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Engine Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Droplet className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Engine</h3>
              </div>
              <p className="text-slate-600 mb-4">A machine that converts <strong>fuel</strong> into mechanical energy (e.g., petrol, diesel, jet engines).</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 font-mono">
                Fuel → Combustion → Mechanical Energy
              </div>
            </div>

            {/* Motor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Motor</h3>
              </div>
              <p className="text-slate-600 mb-4">A machine that converts <strong>electrical energy</strong> into mechanical motion.</p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 font-mono">
                Electricity → Magnetic Fields → Motion
              </div>
            </div>
          </div>

          {/* Core Concepts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <RotateCw className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="font-bold text-slate-800">Rotary Motion</div>
              <div className="text-xs text-slate-600">Circular movement</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <FastForward className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="font-bold text-slate-800">Thrust</div>
              <div className="text-xs text-slate-600">Forward force</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <Settings className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="font-bold text-slate-800">Torque</div>
              <div className="text-xs text-slate-600">Rotational force</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl text-center">
              <Zap className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="font-bold text-slate-800">Power (bhp)</div>
              <div className="text-xs text-slate-600">Rate of doing work</div>
            </div>
          </div>
          
        
        </section>

        {/* 2B. INTERNAL COMBUSTION ENGINE (4-STROKE CYCLE) */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-100 pb-2">2B. Internal Combustion & The 4-Stroke Cycle</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Interactive Diagram */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center text-slate-700">Simulador de Ciclo</h3>
              <PistonDiagram step={activeStroke} />
              
              <div className="flex justify-between mt-6 gap-2">
                {[
                  { id: 0, label: '1. Induction' },
                  { id: 1, label: '2. Compression' },
                  { id: 2, label: '3. Power' },
                  { id: 3, label: '4. Exhaust' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStroke(s.id)}
                    className={`flex-1 py-2 px-1 text-xs md:text-sm font-bold rounded-lg transition-colors ${
                      activeStroke === s.id 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation text dependent on state */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-full flex flex-col justify-center">
              {activeStroke === 0 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">1. Induction (Intake)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Intake valve <strong>opens</strong>.</li>
                    <li>Fuel-air mixture <strong>enters</strong> the combustion chamber.</li>
                    <li>Piston moves <strong>downward</strong>.</li>
                  </ul>
                </div>
              )}
              {activeStroke === 1 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">2. Compression</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Intake valve <strong>closes</strong>.</li>
                    <li>Piston moves <strong>upward</strong>.</li>
                    <li>Mixture is <strong>compressed</strong> to a high pressure.</li>
                  </ul>
                </div>
              )}
              {activeStroke === 2 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl font-bold text-orange-600 mb-3">3. Power (Ignition)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Spark plug <strong>ignites</strong> the mixture.</li>
                    <li>Explosion generates intense <strong>pressure</strong>.</li>
                    <li>Piston is forced <strong>downward</strong>, generating torque.</li>
                  </ul>
                </div>
              )}
              {activeStroke === 3 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl font-bold text-gray-700 mb-3">4. Exhaust</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Exhaust valve <strong>opens</strong>.</li>
                    <li>Piston moves <strong>upward</strong>.</li>
                    <li>Exhaust gases <strong>exit</strong> the cylinder.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. EXAMPLE SENTENCES */}
        <section className="bg-indigo-900 text-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-indigo-700 pb-2">3. Example Sentences</h2>
          <ul className="grid md:grid-cols-1 gap-4">
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">1.</span> 
              The engine produces <strong>torque</strong> to rotate the wheels.
            </li>
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">2.</span> 
              The <strong>motor</strong> converts electrical energy into rotary motion.
            </li>
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">3.</span> 
              A jet engine generates <strong>thrust</strong> by expelling air at high speed.
            </li>
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">4.</span> 
              The <strong>output shaft</strong> transfers power to the drivetrain.
            </li>
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">5.</span> 
              Engine performance is measured in <strong>brake horsepower</strong>.
            </li>
            <li className="bg-indigo-800/50 p-4 rounded-lg flex gap-3">
              <span className="text-indigo-300 font-bold">6.</span> 
              The <strong>piston</strong> moves inside the cylinder during operation.
            </li>
          </ul>
        </section>

        {/* 4. EXERCISES (Interactive) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-indigo-100 pb-2">4. Exercises</h2>

          {/* Exercise 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Exercise 1: Matching</h3>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                {[
                  { id: 'q1', term: 'Torque', correct: 'b' },
                  { id: 'q2', term: 'Thrust', correct: 'e' },
                  { id: 'q3', term: 'Piston', correct: 'a' },
                  { id: 'q4', term: 'Combustion chamber', correct: 'd' },
                  { id: 'q5', term: 'Motor', correct: 'c' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <span className="font-bold w-40 text-right">{item.term}</span>
                    <span>→</span>
                    <select 
                      className="border border-slate-300 rounded p-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={matchAnswers[item.id]}
                      onChange={(e) => handleMatchChange(item.id, e.target.value)}
                    >
                      <option value="">--</option>
                      <option value="a">a</option>
                      <option value="b">b</option>
                      <option value="c">c</option>
                      <option value="d">d</option>
                      <option value="e">e</option>
                    </select>
                    {matchAnswers[item.id] === item.correct && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {matchAnswers[item.id] !== '' && matchAnswers[item.id] !== item.correct && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl text-sm space-y-2 border border-slate-200">
                <p><strong>a.</strong> Component moving inside a cylinder</p>
                <p><strong>b.</strong> Rotational force</p>
                <p><strong>c.</strong> Device converting electrical energy to motion</p>
                <p><strong>d.</strong> Enclosed space where fuel burns</p>
                <p><strong>e.</strong> Forward pushing force</p>
              </div>
            </div>
          </div>

          {/* Exercise 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Exercise 2: Fill in the Blanks </h3>
            <div className="space-y-4">
              {[
                { id: 'q1', pre: 'Rotational force is called ', post: '.', correct: 'torque' },
                { id: 'q2', pre: 'The part that delivers power is the output ', post: '.', correct: 'shaft' },
                { id: 'q3', pre: 'Fuel burns inside the ', post: ' chamber.', correct: 'combustion' },
                { id: 'q4', pre: 'A device that sprays fuel is a fuel ', post: '.', correct: 'injector' },
                { id: 'q5', pre: 'Engine power can be measured in ', post: ' horsepower.', correct: 'brake' }
              ].map((item) => (
                <div key={item.id} className="flex items-center flex-wrap gap-2 text-slate-700">
                  <span>{item.pre}</span>
                  <div className="relative">
                    <input 
                      type="text" 
                      className="border-b-2 border-slate-300 bg-transparent px-2 py-1 outline-none focus:border-indigo-500 text-center w-32"
                      value={fillAnswers[item.id]}
                      onChange={(e) => handleFillChange(item.id, e.target.value.toLowerCase().trim())}
                    />
                  </div>
                  <span>{item.post}</span>
                  {fillAnswers[item.id] === item.correct && <CheckCircle className="w-5 h-5 text-green-500 inline-block ml-2" />}
                </div>
              ))}
            </div>
          </div>
          
        </section>

      </main>
    </div>
  );
}