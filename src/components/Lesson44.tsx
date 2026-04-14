import React, { useState } from 'react';
import { Zap, Battery, BatteryCharging, Sun, Home, Activity, ArrowRight, ArrowUpRight, ArrowDownRight, Factory, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';

// --- VISUAL COMPONENTS ---

const ACDCVisualizer = () => (
  <div className="bg-slate-900 rounded-xl p-6 shadow-inner my-6 relative overflow-hidden">
    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
      <Activity className="text-blue-400" size={20} />
      Waveform Visualization: DC vs AC
    </h4>
    <svg viewBox="0 0 400 120" className="w-full h-40">
      {/* Grid */}
      <line x1="0" y1="60" x2="400" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="0" x2="200" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* DC Line */}
      <line x1="0" y1="20" x2="400" y2="20" stroke="#22d3ee" strokeWidth="3" className="animate-pulse" />
      <text x="10" y="15" fill="#22d3ee" fontSize="12" fontWeight="bold">Direct Current (DC)</text>
      
      {/* AC Wave */}
      <path 
        d="M 0 60 Q 50 -20, 100 60 T 200 60 T 300 60 T 400 60" 
        stroke="#facc15" 
        strokeWidth="3" 
        fill="none" 
      />
      <text x="10" y="110" fill="#facc15" fontSize="12" fontWeight="bold">Alternating Current (AC) - 50/60 Hz</text>
    </svg>
    <div className="text-slate-400 text-sm mt-2 text-center">
      Notice how DC maintains a constant voltage, while AC alternates between positive and negative values.
    </div>
  </div>
);

const PowerGridVisualizer = () => (
  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
    <h4 className="text-slate-800 font-semibold mb-6 text-center">The Power Grid Distribution Process</h4>
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Generation */}
      <div className="flex flex-col items-center text-center p-3 bg-blue-50 rounded-lg w-full md:w-1/4 border border-blue-100">
        <Factory size={32} className="text-blue-600 mb-2" />
        <span className="font-bold text-sm text-slate-700">Power Station</span>
        <span className="text-xs text-slate-500">Generator & Armature</span>
      </div>
      
      <ArrowRight className="hidden md:block text-slate-400" />
      
      {/* Step Up */}
      <div className="flex flex-col items-center text-center p-3 bg-red-50 rounded-lg w-full md:w-1/4 border border-red-100 relative">
        <ArrowUpRight size={32} className="text-red-500 mb-2" />
        <span className="font-bold text-sm text-slate-700">Step-Up Transformer</span>
        <span className="text-xs text-slate-500">Increases Voltage for Transmission</span>
        <div className="absolute -top-3 right-0 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-sm">High Voltage (HV)</div>
      </div>
      
      <ArrowRight className="hidden md:block text-slate-400" />
      
      {/* Step Down */}
      <div className="flex flex-col items-center text-center p-3 bg-green-50 rounded-lg w-full md:w-1/4 border border-green-100">
        <ArrowDownRight size={32} className="text-green-500 mb-2" />
        <span className="font-bold text-sm text-slate-700">Step-Down Transformer</span>
        <span className="text-xs text-slate-500">Decreases Voltage for Safety</span>
      </div>

      <ArrowRight className="hidden md:block text-slate-400" />
      
      {/* Local Use */}
      <div className="flex flex-col items-center text-center p-3 bg-indigo-50 rounded-lg w-full md:w-1/4 border border-indigo-100 relative">
        <Home size={32} className="text-indigo-600 mb-2" />
        <span className="font-bold text-sm text-slate-700">Mains Electricity</span>
        <span className="text-xs text-slate-500">Local Distribution</span>
        <div className="absolute -top-3 right-0 bg-indigo-500 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-sm">Low Voltage (LV)</div>
      </div>
    </div>
  </div>
);

const SolarVisualizer = () => (
  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm my-6 border border-orange-100">
    <h4 className="text-slate-800 font-semibold mb-6 text-center">Solar Power Conversion (DC to AC)</h4>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-orange-100 p-4 rounded-full shadow-inner mb-2">
          <Sun size={40} className="text-orange-500" />
        </div>
        <span className="font-bold text-sm">Sunlight</span>
      </div>
      
      <ArrowRight className="hidden sm:block text-orange-300" size={24}/>
      
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <BatteryCharging size={32} className="text-blue-500 mb-2" />
        <span className="font-bold text-sm text-center">Photovoltaic Cells<br/>(Solar Panels)</span>
        <span className="text-xs text-blue-600 font-bold mt-1 bg-blue-50 px-2 py-1 rounded">Generates DC</span>
      </div>
      
      <ArrowRight className="hidden sm:block text-orange-300" size={24}/>
      
      <div className="flex flex-col items-center bg-slate-800 text-white p-4 rounded-xl shadow-sm">
        <Activity size={32} className="text-green-400 mb-2" />
        <span className="font-bold text-sm">Inverter</span>
        <span className="text-xs text-slate-300 mt-1">Converts DC → AC</span>
      </div>
      
      <ArrowRight className="hidden sm:block text-orange-300" size={24}/>
      
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <Lightbulb size={32} className="text-yellow-500 mb-2" />
        <span className="font-bold text-sm">Household Uses</span>
        <span className="text-xs text-yellow-600 font-bold mt-1 bg-yellow-50 px-2 py-1 rounded">Uses AC</span>
      </div>
    </div>
  </div>
);

// --- MAIN APPLICATION ---

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Lightbulb size={18} /> },
    { id: 'acdc', label: 'DC & AC', icon: <Activity size={18} /> },
    { id: 'generation', label: 'AC Generation', icon: <Factory size={18} /> },
    { id: 'solar', label: 'DC & Solar', icon: <Sun size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle2 size={18} /> }
  ];

  const VocabCard = ({ term, definition }) => (
    <div className="flex flex-col p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="font-bold text-indigo-700 text-lg border-b border-slate-100 pb-2 mb-2">{term}</span>
      <span className="text-slate-600 text-sm leading-relaxed">{definition}</span>
    </div>
  );

  const KeyIdea = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg my-6 flex gap-4 items-start">
      <Zap className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
      <div>
        <h4 className="font-bold text-indigo-900 mb-1">Key Idea</h4>
        <p className="text-indigo-800 text-sm">{children}</p>
      </div>
    </div>
  );

  const ExampleSentences = ({ sentences }) => (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Home size={20} className="text-slate-500" /> Example Sentences in Context
      </h3>
      <ul className="space-y-3">
        {sentences.map((sentence, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-slate-700 bg-white p-3 rounded shadow-sm border border-slate-100">
            <span className="text-indigo-400 font-bold">»</span> {sentence}
          </li>
        ))}
      </ul>
    </div>
  );

  // EXERCISES COMPONENT
  const ExercisesSection = () => {
    // Basic state for the exercises to give minimal interactivity
    const [ex1Answers, setEx1Answers] = useState({ dc: '', ac: '', trans: '', gen: '', freq: '' });
    const [ex1Score, setEx1Score] = useState(null);

    const checkEx1 = () => {
      let score = 0;
      if (ex1Answers.dc === 'e') score++;
      if (ex1Answers.ac === 'b') score++;
      if (ex1Answers.trans === 'd') score++;
      if (ex1Answers.gen === 'a') score++;
      if (ex1Answers.freq === 'c') score++;
      setEx1Score(score);
    };

    return (
      <div className="space-y-10 animate-fade-in">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2 border-b pb-2">Knowledge Check</h2>
          <p className="text-slate-600 mb-8">Test your engineering vocabulary from the previous sections.</p>
        </div>

        {/* Exercise 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-slate-800">Exercise 1: Matching (Basic)</h3>
            {ex1Score !== null && (
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${ex1Score === 5 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                Score: {ex1Score} / 5
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { id: 'dc', term: 'DC' },
                { id: 'ac', term: 'AC' },
                { id: 'trans', term: 'Transformer' },
                { id: 'gen', term: 'Generator' },
                { id: 'freq', term: 'Frequency' },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="font-semibold w-24">{item.term}</span>
                  <span className="text-slate-400">→</span>
                  <select 
                    className="border border-slate-300 rounded p-2 text-sm flex-grow focus:outline-none focus:border-indigo-500"
                    value={ex1Answers[item.id]}
                    onChange={(e) => setEx1Answers({...ex1Answers, [item.id]: e.target.value})}
                  >
                    <option value="">Select option...</option>
                    <option value="a">a. Device that produces electricity</option>
                    <option value="b">b. Current that changes direction</option>
                    <option value="c">c. Cycles per second</option>
                    <option value="d">d. Device that changes voltage</option>
                    <option value="e">e. Current flowing in one direction</option>
                  </select>
                </div>
              ))}
              <button 
                onClick={checkEx1}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Check Answers
              </button>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h4 className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Options Bank</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li><strong>a.</strong> Device that produces electricity</li>
                <li><strong>b.</strong> Current that changes direction</li>
                <li><strong>c.</strong> Cycles per second</li>
                <li><strong>d.</strong> Device that changes voltage</li>
                <li><strong>e.</strong> Current flowing in one direction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exercise 2 & 3 Static Views (for layout completeness) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Exercise 2: Fill in the Blanks</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li>1. Current that flows in one direction is <span className="inline-block border-b-2 border-slate-300 w-16 mx-1"></span> current.</li>
              <li>2. The unit of frequency is <span className="inline-block border-b-2 border-slate-300 w-16 mx-1"></span>.</li>
              <li>3. A device that increases voltage is a <span className="inline-block border-b-2 border-slate-300 w-16 mx-1"></span>-up transformer.</li>
              <li>4. Electricity is distributed through the <span className="inline-block border-b-2 border-slate-300 w-16 mx-1"></span> grid.</li>
              <li>5. A device that converts DC to AC is an <span className="inline-block border-b-2 border-slate-300 w-24 mx-1"></span>.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Exercise 3: Contextual Usage</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li>1. Household electricity is supplied as <span className="inline-block border-b-2 border-indigo-200 bg-indigo-50 px-2 text-transparent selection:text-indigo-700">alternating</span> current.</li>
              <li>2. A solar panel produces <span className="inline-block border-b-2 border-indigo-200 bg-indigo-50 px-2 text-transparent selection:text-indigo-700">direct</span> current.</li>
              <li>3. A power station uses a <span className="inline-block border-b-2 border-indigo-200 bg-indigo-50 px-2 text-transparent selection:text-indigo-700">generator</span> to generate electricity.</li>
              <li>4. High-voltage transmission reduces energy <span className="inline-block border-b-2 border-indigo-200 bg-indigo-50 px-2 text-transparent selection:text-indigo-700">loss</span>.</li>
              <li>5. Before entering homes, voltage is reduced by a <span className="inline-block border-b-2 border-indigo-200 bg-indigo-50 px-2 text-transparent selection:text-indigo-700">step-down</span> transformer.</li>
            </ul>
            <p className="text-xs text-slate-400 mt-4 italic">* Highlight the blank boxes to reveal answers in Exercise 3.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-8 shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-yellow-400" size={32} fill="currentColor" />
            <h1 className="text-3xl font-bold tracking-tight">Electrical Supply</h1>
          </div>
          <p className="text-indigo-200 text-lg max-w-2xl">
            Learn how electrical energy is supplied and distributed, focusing on DC/AC systems, power generation, and key engineering vocabulary.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 mt-4">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-slate-100 sticky top-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Course Modules</h3>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-grow bg-white rounded-xl shadow-sm border border-slate-100 p-8 min-h-[600px]">
          
          {/* 1. Overview Tab */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">1. Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                This lesson explains how electrical energy is supplied and distributed, focusing on <strong className="text-indigo-600">direct current (DC)</strong>, <strong className="text-indigo-600">alternating current (AC)</strong>, power generation, and how electricity is delivered to users. The emphasis is on key engineering vocabulary.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                  <Activity className="text-blue-500 mb-2" size={28} />
                  <h4 className="font-bold text-slate-800">Current Types</h4>
                  <p className="text-sm text-slate-600 mt-1">Understanding AC & DC behaviors.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex flex-col items-center text-center">
                  <Factory className="text-emerald-500 mb-2" size={28} />
                  <h4 className="font-bold text-slate-800">Generation</h4>
                  <p className="text-sm text-slate-600 mt-1">From mechanical/solar energy to electricity.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex flex-col items-center text-center">
                  <Zap className="text-purple-500 mb-2" size={28} />
                  <h4 className="font-bold text-slate-800">Distribution</h4>
                  <p className="text-sm text-slate-600 mt-1">High and Low voltage networks.</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. DC & AC Tab */}
          {activeTab === 'acdc' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2 flex items-center gap-2">
                <Activity className="text-indigo-500" />
                Direct Current and Alternating Current
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <VocabCard term="Direct current (DC)" definition="Electric current flowing in one direction." />
                <VocabCard term="Alternating current (AC)" definition="Electric current that changes direction repeatedly." />
                <VocabCard term="Mains electricity (supply)" definition="Electrical power supplied to buildings." />
                <VocabCard term="Frequency (Hz)" definition="Number of cycles per second of AC." />
                <VocabCard term="Single-phase supply" definition="One alternating waveform." />
                <VocabCard term="Three-phase supply" definition="Three alternating waveforms with different timing." />
              </div>

              <ACDCVisualizer />

              <KeyIdea>
                AC is widely used for power distribution because it can be efficiently transmitted over long distances.
              </KeyIdea>

              <ExampleSentences sentences={[
                "A battery provides direct current (DC).",
                "Household electricity is supplied as alternating current (AC).",
                "The system operates at a frequency of 50 Hz."
              ]} />
            </div>
          )}

          {/* 3. AC Generation Tab */}
          {activeTab === 'generation' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2 flex items-center gap-2">
                <Factory className="text-indigo-500" />
                AC Generation and Supply
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <VocabCard term="Power station" definition="Facility where electricity is generated." />
                <VocabCard term="Generator" definition="Device that converts mechanical energy into electrical energy." />
                <VocabCard term="Armature" definition="Rotating part containing coils in a generator." />
                <VocabCard term="Field coils (windings)" definition="Coils that create a magnetic field." />
                <VocabCard term="Electromagnetic induction" definition="Process of generating electricity from motion in a magnetic field." />
                <VocabCard term="Power grid (grid)" definition="Network that distributes electricity." />
                <VocabCard term="Transformer" definition="Device that changes voltage levels." />
                <VocabCard term="High voltage (HV)" definition="Used for long-distance transmission." />
                <VocabCard term="Low voltage (LV)" definition="Used for local distribution." />
              </div>

              <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-2">Transformer Types:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                  <li><strong>Step-up transformer:</strong> Increases voltage, reduces current.</li>
                  <li><strong>Step-down transformer:</strong> Decreases voltage, increases current.</li>
                </ul>
              </div>

              <PowerGridVisualizer />

              <KeyIdea>
                Electricity is transmitted at high voltage to reduce energy loss, then reduced for safe use.
              </KeyIdea>

              <ExampleSentences sentences={[
                "A generator produces electricity using electromagnetic induction.",
                "The power grid distributes electricity nationwide.",
                "A step-up transformer increases voltage for transmission.",
                "Homes receive electricity at low voltage."
              ]} />
            </div>
          )}

          {/* 4. DC & Solar Tab */}
          {activeTab === 'solar' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2 flex items-center gap-2">
                <Sun className="text-indigo-500" />
                DC Generation and Use
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <VocabCard term="Photovoltaic cells" definition="(Solar cells) Devices that convert sunlight into electricity." />
                <VocabCard term="Rechargeable batteries" definition="Devices that store electrical energy." />
                <VocabCard term="Inverter" definition="Device that converts DC to AC." />
              </div>

              <SolarVisualizer />

              <KeyIdea>
                DC from solar panels must be converted to AC for most household applications.
              </KeyIdea>

              <ExampleSentences sentences={[
                "Solar panels generate DC, which is converted using an inverter."
              ]} />
            </div>
          )}

          {/* 5. Exercises Tab */}
          {activeTab === 'exercises' && <ExercisesSection />}

        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>Engineering Vocabulary Lesson Module • Built for Educational Purposes</p>
      </footer>
      
      {/* Minimal custom CSS for fade-in animation since we don't have access to tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}