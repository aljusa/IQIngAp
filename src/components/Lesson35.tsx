import React, { useState } from 'react';
import { 
  Zap, 
  Sun, 
  Battery, 
  Flame, 
  Volume2, 
  Activity, 
  Atom, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle, 
  XCircle, 
  BookOpen,
  Settings,
  MoveUp,
  Minimize2
} from 'lucide-react';

// --- Visual Components (Sugerencias Visuales) ---

const EnergyConversionDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 w-32">
      <Battery className="w-10 h-10 text-green-600 mb-2" />
      <span className="text-sm font-semibold text-slate-700 text-center">Chemical Energy</span>
      <span className="text-xs text-slate-500">(Battery)</span>
    </div>
    <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
    <ArrowDown className="w-6 h-6 text-slate-400 md:hidden" />
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 w-32">
      <Zap className="w-10 h-10 text-yellow-500 mb-2" />
      <span className="text-sm font-semibold text-slate-700 text-center">Electrical Energy</span>
      <span className="text-xs text-slate-500">(Wire)</span>
    </div>
    <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
    <ArrowDown className="w-6 h-6 text-slate-400 md:hidden" />
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 w-32 relative">
      <div className="flex space-x-2 mb-2">
        <Sun className="w-8 h-8 text-yellow-400" />
        <Flame className="w-8 h-8 text-orange-500" />
      </div>
      <span className="text-sm font-semibold text-slate-700 text-center">Light & Thermal</span>
      <span className="text-xs text-slate-500">(Bulb)</span>
    </div>
  </div>
);

const StorageDiagram = () => (
  <div className="flex flex-col md:flex-row justify-center gap-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
    {/* Potential Energy */}
    <div className="flex flex-col items-center w-48">
      <div className="relative h-32 w-full border-b-4 border-slate-400 flex flex-col justify-between items-center pb-2">
        <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white shadow-lg z-10 transform -translate-y-4">
          <MoveUp className="w-8 h-8" />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-slate-300 border-dashed border-l-2"></div>
      </div>
      <div className="mt-4 text-center">
        <h4 className="font-semibold text-blue-700">Potential Energy</h4>
        <p className="text-xs text-slate-600">Energy stored in a lifted weight.</p>
      </div>
    </div>

    {/* Strain Energy */}
    <div className="flex flex-col items-center w-48">
      <div className="relative h-32 w-full flex items-center justify-center">
        <div className="flex items-center space-x-1">
          <ArrowRight className="w-5 h-5 text-slate-400" />
          <div className="w-16 h-8 bg-slate-300 rounded-full border-2 border-slate-400 flex items-center justify-center">
             <Minimize2 className="w-4 h-4 text-slate-600" />
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 transform rotate-180" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h4 className="font-semibold text-purple-700">Strain Energy</h4>
        <p className="text-xs text-slate-600">Energy stored in a compressed spring.</p>
      </div>
    </div>
  </div>
);

const EfficiencyDiagram = () => (
  <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 w-full max-w-2xl mx-auto">
    <div className="flex items-center w-full mb-4">
      <div className="w-1/4 h-12 bg-blue-500 rounded-l-lg flex items-center justify-center text-white font-bold text-sm">
        100% Input
      </div>
      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center -ml-4 z-10 border-4 border-white shadow-md">
        <Settings className="w-8 h-8 text-white animate-[spin_4s_linear_infinite]" />
      </div>
      <div className="flex flex-col w-3/4 pl-4 space-y-2">
        <div className="h-8 bg-green-500 rounded-r-lg flex items-center px-4 text-white font-bold text-sm" style={{ width: '75%' }}>
          75% Useful Energy
        </div>
        <div className="h-4 bg-orange-500 rounded-r-lg flex items-center px-4 text-white font-bold text-xs" style={{ width: '25%' }}>
          25% Waste (Heat)
        </div>
      </div>
    </div>
    <p className="text-sm text-slate-600 italic">Efficiency = (Useful Energy / Input Energy) × 100 = 75%</p>
  </div>
);

const PowerDiagram = () => (
  <div className="flex justify-center gap-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm w-40">
      <h4 className="font-bold text-slate-700 mb-2">Motor A (Low Power)</h4>
      <div className="h-24 w-4 bg-slate-200 rounded-full mb-2 relative overflow-hidden">
        <div className="absolute bottom-0 w-full bg-blue-400 rounded-full animate-[pulse_2s_linear_infinite]" style={{ height: '50%' }}></div>
      </div>
      <span className="text-xs font-semibold text-slate-500">Lifts load in 10s</span>
      <span className="text-sm font-bold text-blue-600">10 Watts</span>
    </div>
    
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm w-40">
      <h4 className="font-bold text-slate-700 mb-2">Motor B (High Power)</h4>
      <div className="h-24 w-4 bg-slate-200 rounded-full mb-2 relative overflow-hidden">
        <div className="absolute bottom-0 w-full bg-blue-600 rounded-full animate-[pulse_0.5s_linear_infinite]" style={{ height: '100%' }}></div>
      </div>
      <span className="text-xs font-semibold text-slate-500">Lifts load in 5s</span>
      <span className="text-sm font-bold text-blue-800">20 Watts</span>
    </div>
  </div>
);

// --- Content Wrapper Component ---

const ConceptSection = ({ title, explanation, visualTitle, children }) => (
  <div className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <BookOpen className="w-6 h-6 mr-3 text-indigo-600" />
        {title}
      </h2>
    </div>
    <div className="p-6">
      <div className="prose max-w-none text-slate-600 mb-8">
        {explanation}
      </div>
      <div className="mt-6 border-t border-slate-100 pt-6">
        <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">
          Visual Simulation: {visualTitle}
        </h3>
        {children}
      </div>
    </div>
  </div>
);

// --- Interactive Quiz Component ---

const QuizSection = () => {
  const [answers, setAnswers] = useState({
    m1: '', m2: '', m3: '', m4: '', m5: '',
    fb1: '', fb2: '', fb3: '', fb4: '', fb5: '',
    c1: '', c2: '', c3: '', c4: '', c5: ''
  });
  
  const [results, setResults] = useState(null);

  const correctAnswers = {
    m1: 'b', m2: 'a', m3: 'e', m4: 'd', m5: 'c',
    fb1: 'kinetic', fb2: 'potential', fb3: 'waste', fb4: 'joule', fb5: 'power',
    c1: 'electrical', c2: 'efficiency', c3: 'strain', c4: 'power', c5: 'work'
  };

  const handleSelect = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const checkAnswers = () => {
    let score = 0;
    const newResults = {};
    for (const key in correctAnswers) {
      const isCorrect = answers[key].toLowerCase().trim() === correctAnswers[key];
      newResults[key] = isCorrect;
      if (isCorrect) score++;
    }
    setResults({ details: newResults, score, total: Object.keys(correctAnswers).length });
  };

  const renderFeedback = (key) => {
    if (!results) return null;
    return results.details[key] ? 
      <CheckCircle className="w-5 h-5 text-green-500 inline ml-2" /> : 
      <XCircle className="w-5 h-5 text-red-500 inline ml-2" />;
  };

  return (
    <div className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="border-b border-slate-100 bg-indigo-50 px-6 py-4">
        <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
          <Activity className="w-6 h-6 mr-3 text-indigo-600" />
          Knowledge Check Exercises
        </h2>
      </div>
      <div className="p-6 space-y-8">
        
        {/* Exercise 1 */}
        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 1: Matching (Basic)</h3>
          <p className="text-sm text-slate-500 mb-4">Options: a) Stored energy, b) Energy of movement, c) Rate of doing work, d) Energy used to perform a task, e) Percentage of useful output energy</p>
          <div className="space-y-3">
            {[
              { id: 'm1', label: 'Kinetic energy' },
              { id: 'm2', label: 'Potential energy' },
              { id: 'm3', label: 'Efficiency' },
              { id: 'm4', label: 'Work' },
              { id: 'm5', label: 'Power' }
            ].map(item => (
              <div key={item.id} className="flex items-center">
                <span className="w-40 font-medium text-slate-700">{item.label}</span>
                <select 
                  className="p-2 border rounded border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={answers[item.id]}
                  onChange={(e) => handleSelect(item.id, e.target.value)}
                >
                  <option value="">Select option...</option>
                  <option value="a">a. Stored energy</option>
                  <option value="b">b. Energy of movement</option>
                  <option value="c">c. Rate of doing work</option>
                  <option value="d">d. Energy used to perform a task</option>
                  <option value="e">e. Percentage of useful output energy</option>
                </select>
                {renderFeedback(item.id)}
              </div>
            ))}
          </div>
        </div>

        {/* Exercise 2 */}
        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 2: Fill in the Blanks (Intermediate)</h3>
          <div className="space-y-3 text-slate-700">
            <div>
              1. Energy of motion is called <input type="text" className="border-b-2 border-slate-300 bg-transparent px-2 w-24 focus:border-indigo-500 outline-none" value={answers.fb1} onChange={e => handleSelect('fb1', e.target.value)} /> energy. {renderFeedback('fb1')}
            </div>
            <div>
              2. Stored energy in a raised object is <input type="text" className="border-b-2 border-slate-300 bg-transparent px-2 w-24 focus:border-indigo-500 outline-none" value={answers.fb2} onChange={e => handleSelect('fb2', e.target.value)} /> energy. {renderFeedback('fb2')}
            </div>
            <div>
              3. Energy lost as heat is called <input type="text" className="border-b-2 border-slate-300 bg-transparent px-2 w-24 focus:border-indigo-500 outline-none" value={answers.fb3} onChange={e => handleSelect('fb3', e.target.value)} /> energy. {renderFeedback('fb3')}
            </div>
            <div>
              4. The unit of work is the <input type="text" className="border-b-2 border-slate-300 bg-transparent px-2 w-24 focus:border-indigo-500 outline-none" value={answers.fb4} onChange={e => handleSelect('fb4', e.target.value)} />. {renderFeedback('fb4')}
            </div>
            <div>
              5. The rate at which work is done is called <input type="text" className="border-b-2 border-slate-300 bg-transparent px-2 w-24 focus:border-indigo-500 outline-none" value={answers.fb5} onChange={e => handleSelect('fb5', e.target.value)} />. {renderFeedback('fb5')}
            </div>
          </div>
        </div>

        {/* Exercise 3 */}
        <div className="bg-slate-50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 3: Contextual Usage (Advanced)</h3>
          <div className="space-y-3 text-slate-700">
            <div>
              1. A battery converts chemical energy into 
              <select className="ml-2 p-1 border rounded" value={answers.c1} onChange={e => handleSelect('c1', e.target.value)}>
                <option value="">...</option><option value="electrical">electrical</option><option value="kinetic">kinetic</option>
              </select> energy. {renderFeedback('c1')}
            </div>
            <div>
              2. A machine that wastes little energy has high 
              <select className="ml-2 p-1 border rounded" value={answers.c2} onChange={e => handleSelect('c2', e.target.value)}>
                <option value="">...</option><option value="efficiency">efficiency</option><option value="power">power</option>
              </select>. {renderFeedback('c2')}
            </div>
            <div>
              3. A compressed spring stores 
              <select className="ml-2 p-1 border rounded" value={answers.c3} onChange={e => handleSelect('c3', e.target.value)}>
                <option value="">...</option><option value="strain">strain</option><option value="thermal">thermal</option>
              </select> energy. {renderFeedback('c3')}
            </div>
            <div>
              4. A fast motor with high output has high 
              <select className="ml-2 p-1 border rounded" value={answers.c4} onChange={e => handleSelect('c4', e.target.value)}>
                <option value="">...</option><option value="power">power</option><option value="work">work</option>
              </select>. {renderFeedback('c4')}
            </div>
            <div>
              5. Energy used to lift an object is called 
              <select className="ml-2 p-1 border rounded" value={answers.c5} onChange={e => handleSelect('c5', e.target.value)}>
                <option value="">...</option><option value="work">work</option><option value="efficiency">efficiency</option>
              </select>. {renderFeedback('c5')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
          <button 
            onClick={checkAnswers}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
          >
            Check Answers
          </button>
          
          {results && (
            <div className={`px-4 py-2 rounded-lg font-bold text-lg ${results.score === results.total ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              Score: {results.score} / {results.total}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-12">
      {/* Hero Header */}
      <header className="bg-indigo-900 text-white py-16 px-6 mb-12 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Engineering Principles: Energy</h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl">
            An interactive module introducing different forms of energy, conversion in engineering systems, efficiency, work, and power.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        
        <ConceptSection 
          title="Forms of Energy & Conversion" 
          visualTitle="The Principle of Energy Conversion"
          explanation={
            <>
              <p className="mb-4">Energy exists in multiple forms across engineering contexts. The fundamental principle states that <strong>energy cannot be created or destroyed, only converted from one form to another</strong>.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <li className="flex items-center bg-slate-50 p-2 rounded"><Activity className="w-4 h-4 mr-2 text-blue-500"/> <strong>Kinetic:</strong> Energy of movement.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Flame className="w-4 h-4 mr-2 text-orange-500"/> <strong>Thermal:</strong> Energy in the form of heat.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Zap className="w-4 h-4 mr-2 text-yellow-500"/> <strong>Electrical:</strong> Carried by electric current.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Volume2 className="w-4 h-4 mr-2 text-slate-500"/> <strong>Sound:</strong> Energy in the form of noise.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Sun className="w-4 h-4 mr-2 text-yellow-400"/> <strong>Light:</strong> Emitted as light.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Battery className="w-4 h-4 mr-2 text-green-500"/> <strong>Chemical:</strong> Stored in substances.</li>
                <li className="flex items-center bg-slate-50 p-2 rounded"><Atom className="w-4 h-4 mr-2 text-purple-500"/> <strong>Nuclear:</strong> Released from atomic reactions.</li>
              </ul>
              <p className="mt-4 italic text-slate-500 text-sm">Example: A battery stores chemical energy, which converts to electrical energy.</p>
            </>
          }
        >
          <EnergyConversionDiagram />
        </ConceptSection>

        <ConceptSection 
          title="Energy Storage" 
          visualTitle="Potential vs. Strain Energy"
          explanation={
            <>
              <p className="mb-4">In mechanical systems, energy can be physically stored to perform work later.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Potential energy:</strong> Stored energy based on position or height. For example, a raised load stores potential energy waiting to be released.</li>
                <li><strong>Strain energy:</strong> Energy stored when a material is elastically deformed. For example, a compressed spring holds strain energy.</li>
              </ul>
            </>
          }
        >
          <StorageDiagram />
        </ConceptSection>

        <ConceptSection 
          title="Energy Efficiency" 
          visualTitle="Energy Flow and Waste"
          explanation={
            <>
              <p className="mb-4">No machine is perfect. When energy is converted, some of it is inevitably lost.</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Energy source:</strong> The input energy provided to the system.</li>
                <li><strong>Useful energy:</strong> Energy used for the specific intended purpose.</li>
                <li><strong>Waste energy:</strong> Energy lost during conversion (commonly as heat or sound).</li>
              </ul>
              <p className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded">
                <strong>Efficiency</strong> is the percentage of input energy successfully converted into useful energy. If a machine converts 75% of input energy into useful energy, it is 75% efficient.
              </p>
            </>
          }
        >
          <EfficiencyDiagram />
        </ConceptSection>

        <ConceptSection 
          title="Work and Power" 
          visualTitle="The Relationship Between Power and Speed"
          explanation={
            <>
              <p className="mb-4">These two concepts define how much energy is used and how fast it is deployed.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-lg mb-2 text-slate-800">Work</h4>
                  <p className="text-sm">Energy required to perform a task. Lifting a load requires work.</p>
                  <div className="mt-2 text-sm font-semibold text-indigo-600">Unit: Joule (J)</div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-lg mb-2 text-slate-800">Power</h4>
                  <p className="text-sm">The rate of doing work. Higher power means work is done faster.</p>
                  <div className="mt-2 text-sm font-semibold text-indigo-600">Unit: Watt (W) <span className="text-xs text-slate-500 font-normal">(1 W = 1 J/s)</span></div>
                </div>
              </div>
            </>
          }
        >
          <PowerDiagram />
        </ConceptSection>

        {/* Interactive Exercises Module */}
        <QuizSection />

      </main>
    </div>
  );
}