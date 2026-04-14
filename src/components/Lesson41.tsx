import React, { useState } from 'react';
import { Settings, RefreshCw, PenTool, BookOpen, CheckCircle, ArrowRight, Cogs } from 'lucide-react';

// --- COMPONENTES VISUALES ---

// 1. Animación de Engranajes Básicos (Meshing)
const BasicGearsVisual = () => (
  <div className="flex items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-200">
    <div className="relative flex items-center">
      {/* Engranaje Conductor (Driver) */}
      <div className="flex flex-col items-center mr-[-10px] z-10">
        <Settings 
          size={80} 
          className="text-blue-600 animate-[spin_4s_linear_infinite]" 
          strokeWidth={1.5}
        />
        <span className="mt-2 text-sm font-semibold text-blue-700">Driver (Input)</span>
      </div>
      {/* Engranaje Conducido (Follower) */}
      <div className="flex flex-col items-center">
        <Settings 
          size={80} 
          className="text-slate-600 animate-[spin_4s_linear_infinite_reverse]" 
          strokeWidth={1.5}
        />
        <span className="mt-2 text-sm font-semibold text-slate-700">Follower (Output)</span>
      </div>
    </div>
  </div>
);

// 2. Diagrama de Relación de Engranajes (Gear Ratio)
const GearRatioVisual = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-blue-50 rounded-xl border border-blue-100">
    <div className="flex items-center gap-4 relative">
      <div className="flex flex-col items-center">
        <Settings 
          size={60} 
          className="text-amber-500 animate-[spin_2s_linear_infinite]" 
        />
        <div className="text-center mt-3">
          <p className="font-bold text-amber-700">Driver</p>
          <p className="text-xs text-amber-600">20 teeth</p>
          <p className="text-xs font-mono bg-amber-100 px-2 py-1 rounded mt-1">3 Rotations</p>
        </div>
      </div>
      
      <ArrowRight className="text-blue-300" size={32} />
      
      <div className="flex flex-col items-center">
        <Settings 
          size={120} 
          className="text-indigo-600 animate-[spin_6s_linear_infinite_reverse]" 
          strokeWidth={1}
        />
        <div className="text-center mt-3">
          <p className="font-bold text-indigo-700">Follower</p>
          <p className="text-xs text-indigo-600">60 teeth</p>
          <p className="text-xs font-mono bg-indigo-100 px-2 py-1 rounded mt-1">1 Rotation</p>
        </div>
      </div>
    </div>
    <div className="mt-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100 w-full max-w-md text-center">
      <p className="text-lg font-bold text-slate-800">Ratio = 60 / 20 = <span className="text-blue-600">3:1</span></p>
      <p className="text-sm text-slate-500 mt-1">Mechanical Advantage Visualized</p>
    </div>
  </div>
);

// 3. Tipos de Engranajes Visual
const GearTypesVisual = () => {
  const types = [
    { name: 'Spur Gear', desc: 'Straight teeth, simplest design.', icon: <Settings size={40} className="text-slate-700" /> },
    { name: 'Helical Gear', desc: 'Angled teeth, smoother operation.', icon: <RefreshCw size={40} className="text-blue-600" /> },
    { name: 'Bevel Gear', desc: 'Transmits motion at an angle (90°).', icon: <div className="transform rotate-45"><Settings size={40} className="text-amber-600" /></div> },
    { name: 'Worm Gear', desc: 'Reduces speed significantly, one-way.', icon: <div className="flex"><div className="w-8 h-2 bg-red-500 rounded mt-4"></div><Settings size={40} className="text-red-500" /></div> }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {types.map((type, idx) => (
        <div key={idx} className="flex items-center p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="mr-4 bg-slate-50 p-3 rounded-full border border-slate-100">
            {type.icon}
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{type.name}</h4>
            <p className="text-xs text-slate-500 mt-1">{type.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


// --- COMPONENTES DE EJERCICIOS ---

const ExercisesSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const checkAnswers = () => setShowResults(true);
  const reset = () => { setAnswers({}); setShowResults(false); };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-8">
      <div className="bg-slate-800 p-4 text-white flex items-center gap-2">
        <PenTool size={20} />
        <h2 className="text-xl font-bold">4. Exercises & Practice</h2>
      </div>
      
      <div className="flex border-b border-slate-200 bg-slate-50">
        {[1, 2, 3].map(num => (
          <button 
            key={num}
            onClick={() => setActiveTab(num)}
            className={`px-6 py-3 font-medium text-sm flex-1 ${activeTab === num ? 'bg-white border-b-2 border-blue-600 text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Exercise {num}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Matching (Basic)</h3>
            <p className="text-sm text-slate-600 mb-4">Match each term with its correct definition (Select the letter).</p>
            {[
              { id: 'q1', term: 'Gear', ans: 'd' },
              { id: 'q2', term: 'Shaft', ans: 'c' },
              { id: 'q3', term: 'Driver', ans: 'b' },
              { id: 'q4', term: 'Follower', ans: 'a' },
              { id: 'q5', term: 'Idler gear', ans: 'e' }
            ].map(q => (
              <div key={q.id} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-100">
                <span className="font-medium text-slate-800 w-1/3">{q.term}</span>
                <select 
                  className={`border rounded p-1 w-2/3 ${showResults ? (answers[q.id] === q.ans ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500') : 'border-slate-300'}`}
                  value={answers[q.id] || ''}
                  onChange={(e) => handleSelect(q.id, e.target.value)}
                  disabled={showResults}
                >
                  <option value="">Select definition...</option>
                  <option value="a">a. Gear that is driven</option>
                  <option value="b">b. Gear that provides motion</option>
                  <option value="c">c. Rotating rod transmitting motion</option>
                  <option value="d">d. Wheel with teeth</option>
                  <option value="e">e. Gear that changes direction only</option>
                </select>
              </div>
            ))}
          </div>
        )}

        {/* Similar structures could be built for Exercise 2 and 3, keeping it simple for the demo */}
        {activeTab !== 1 && (
          <div className="text-center py-12 text-slate-500">
            <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
            <p>Interactive module for Exercise {activeTab} is available in the full version.</p>
            <p className="text-sm mt-2">Refer to the text content above for the questions.</p>
          </div>
        )}

        {activeTab === 1 && (
          <div className="mt-6 flex justify-end gap-3">
            {showResults ? (
              <button onClick={reset} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium">Try Again</button>
            ) : (
              <button onClick={checkAnswers} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                <CheckCircle size={18} /> Check Answers
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 pb-12">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Settings size={24} className="animate-[spin_10s_linear_infinite]" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Transmission 1: Gears</h1>
            <p className="text-sm text-slate-500 font-medium">Módulo Educativo Interactivo</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-8 space-y-8">
        
        {/* Introducción */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
          <h2 className="text-lg font-bold text-blue-900 mb-2">1. Overview</h2>
          <p className="text-blue-800 leading-relaxed">
            This lesson explains how gears transmit motion and power between shafts, how gear ratios affect speed, and the different types of gear wheels used in engineering systems.
          </p>
        </div>

        {/* Sección 1: Vocabulario */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">Concepto 1</span>
              <h2 className="text-2xl font-bold text-slate-800">A. Gears (Basic Vocabulary)</h2>
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-700 mb-3 border-b pb-2 flex items-center gap-2">
                <BookOpen size={18}/> Explicación & Términos
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong className="text-slate-800">Gear wheel:</strong> A rotating wheel with teeth (cogs).</li>
                <li><strong className="text-slate-800">Teeth / Mesh:</strong> Projections that interlock / When gear teeth fit together.</li>
                <li><strong className="text-slate-800">Shaft / Driveshaft:</strong> A rotating rod / Shaft receiving power.</li>
                <li><strong className="text-slate-800">Driver vs Follower:</strong> Gear providing motion vs Gear driven by driver.</li>
                <li><strong className="text-slate-800">Idler gear:</strong> Changes direction without affecting speed.</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium"><strong>Key Idea:</strong> When two gears mesh, they rotate in opposite directions and transmit rotary motion.</p>
              </div>
            </div>
            
            <div>
               <h3 className="font-bold text-slate-700 mb-3 border-b pb-2 flex items-center gap-2">
                <Settings size={18}/> Sugerencia Visual & Diagrama
              </h3>
              <p className="text-xs text-slate-500 mb-4 italic">Animación de dos engranajes engranados rotando en direcciones opuestas para ilustrar "Driver", "Follower" y el concepto de "Mesh".</p>
              <BasicGearsVisual />
            </div>
          </div>
        </section>

        {/* Sección 2: Gear Ratios */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1 block">Concepto 2</span>
            <h2 className="text-2xl font-bold text-slate-800">B. Gear Ratios</h2>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <h3 className="font-bold text-slate-700 mb-3 border-b pb-2 flex items-center gap-2">
                <Settings size={18}/> Sugerencia Visual & Diagrama
              </h3>
              <p className="text-xs text-slate-500 mb-4 italic">Representación de la ventaja mecánica: Un engranaje pequeño (20 dientes) girando rápido para mover un engranaje grande (60 dientes) lentamente. Relación 3:1.</p>
              <GearRatioVisual />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="font-bold text-slate-700 mb-3 border-b pb-2 flex items-center gap-2">
                <BookOpen size={18}/> Explicación & Términos
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 mb-4">
                <li><strong className="text-slate-800">Gear ratio:</strong> Ratio of the number of teeth between driver and follower.</li>
                <li><strong className="text-slate-800">Speeds:</strong> Input speed (driver) vs Output speed (follower).</li>
                <li><strong className="text-slate-800">Mechanical advantage:</strong> Change in speed or force due to gear ratio.</li>
                <li><strong className="text-slate-800">Gearbox:</strong> System containing multiple gear ratios (Manual or Automatic).</li>
              </ul>
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg font-mono text-sm text-indigo-900">
                <strong>Example:</strong><br/>
                Driver: 20 teeth<br/>
                Follower: 60 teeth<br/>
                <span className="bg-indigo-200 px-1 rounded">Gear ratio = 3:1</span><br/>
                → Driver rotates 3 times for 1 rotation of follower
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Tipos de Engranajes */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
             <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">Concepto 3</span>
            <h2 className="text-2xl font-bold text-slate-800">C. Types of Gear Wheel</h2>
          </div>
          
          <div className="p-6">
             <p className="text-sm text-slate-600 mb-6 max-w-3xl">
              <strong>Explicación:</strong> Different gear types are used depending on direction, speed, and smoothness requirements. Below are the visual representations and descriptions of the main types discussed.
            </p>
            
            <div className="mb-4 text-xs text-slate-500 italic">
              <strong>Sugerencia Visual:</strong> Tarjetas con iconos representativos de la disposición geométrica de cada tipo de engranaje (Recto, Helicoidal, Cónico, Tornillo Sin Fin).
            </div>

            <GearTypesVisual />
          </div>
        </section>

        {/* Contexto y Ejercicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Example Sentences */}
          <div className="md:col-span-1 bg-slate-800 text-slate-300 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-400"/> 3. Example Sentences
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">The gear wheels mesh to transmit motion between shafts.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">The driver rotates the follower in the opposite direction.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">The gear ratio determines the output speed.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">A gearbox allows multiple speed settings.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">Helical gears provide smoother operation than spur gears.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">A worm gear reduces speed and increases torque.</li>
              <li className="pl-4 border-l-2 border-blue-500 hover:text-white transition-colors">An idler gear changes the direction of rotation.</li>
            </ul>
          </div>

          {/* Interactive Exercises */}
          <div className="md:col-span-2">
            <ExercisesSection />
          </div>

        </div>

      </main>
    </div>
  );
}