import React, { useState } from 'react';
import { 
  Zap, 
  Settings, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  ToggleRight, 
  Radio, 
  Lightbulb,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('lesson');
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  // Components for Visual Suggestions
  const SeriesParallelDiagram = () => (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-around p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
      <div className="text-center">
        <p className="font-bold mb-4 text-blue-600">Series Circuit</p>
        <svg width="160" height="120" viewBox="0 0 160 120" className="mx-auto">
          <rect x="10" y="10" width="140" height="100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
          <circle cx="80" cy="10" r="10" className="fill-yellow-400 stroke-yellow-600" />
          <circle cx="150" cy="60" r="10" className="fill-yellow-400 stroke-yellow-600" />
          <rect x="5" y="55" width="10" height="10" fill="currentColor" />
          <text x="80" y="115" fontSize="10" textAnchor="middle" fill="currentColor">Single Path</text>
        </svg>
      </div>
      <div className="text-center">
        <p className="font-bold mb-4 text-blue-600">Parallel Circuit</p>
        <svg width="160" height="120" viewBox="0 0 160 120" className="mx-auto">
          <line x1="20" y1="10" x2="20" y2="110" stroke="currentColor" strokeWidth="2" />
          <line x1="140" y1="10" x2="140" y2="110" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="30" x2="140" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="90" x2="140" y2="90" stroke="currentColor" strokeWidth="2" />
          <circle cx="80" cy="30" r="10" className="fill-yellow-400 stroke-yellow-600" />
          <circle cx="80" cy="90" r="10" className="fill-yellow-400 stroke-yellow-600" />
          <text x="80" y="115" fontSize="10" textAnchor="middle" fill="currentColor">Multiple Paths</text>
        </svg>
      </div>
    </div>
  );

  const CircuitBreakerVisual = () => {
    const [tripped, setTripped] = useState(false);
    return (
      <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-xl border-l-4 border-blue-500">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold">Circuit Breaker Simulation</h4>
          <button 
            onClick={() => setTripped(!tripped)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${tripped ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
          >
            {tripped ? 'TRIPPED (OFF)' : 'ACTIVE (ON)'}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tripped ? 'bg-gray-300' : 'bg-yellow-400 animate-pulse'}`}>
            <Zap size={24} className={tripped ? 'text-gray-500' : 'text-yellow-700'} />
          </div>
          <p className="text-sm italic">
            {tripped ? 'Safety triggered! The circuit is disconnected to prevent damage.' : 'Current is flowing normally through the switchboard.'}
          </p>
        </div>
      </div>
    );
  };

  const PCBVisual = () => (
    <div className="relative p-8 bg-green-900 rounded-lg overflow-hidden border-4 border-green-800 shadow-inner">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      <div className="relative z-10 flex justify-around">
        <div className="w-16 h-16 bg-black rounded flex items-center justify-center border border-gray-600">
          <Cpu className="text-gray-400" size={32} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-1 w-20 bg-yellow-500/50 rounded"></div>
          <div className="h-1 w-24 bg-yellow-500/50 rounded"></div>
          <div className="h-1 w-16 bg-yellow-500/50 rounded"></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
      </div>
      <p className="text-center mt-4 text-xs font-mono text-green-200">INTEGRATED CIRCUIT (IC) ON PCB</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans pb-12">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-12 px-6 shadow-lg mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-yellow-300" size={32} />
            <h1 className="text-4xl font-extrabold tracking-tight">Circuits and Components</h1>
          </div>
         
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 mb-8">
        <div className="flex border-b border-gray-200 dark:border-slate-700">
          <button 
            onClick={() => setActiveTab('lesson')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'lesson' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}
          >
            Lesson Content
          </button>
          <button 
            onClick={() => setActiveTab('exercises')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'exercises' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-indigo-500'}`}
          >
            Practice Exercises
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-6">
        {activeTab === 'lesson' ? (
          <div className="space-y-12">
            
            {/* Section A */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  <Activity size={24} />
                </div>
                <h2 className="text-2xl font-bold">Simple Circuits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">
                    Understanding the path of current is fundamental. A <strong>circuit</strong> is a complete loop, while the type of connection determines how components interact.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><span className="font-bold text-indigo-500">Live (Phase):</span> Carries current to the device.</li>
                    <li><span className="font-bold text-slate-500">Neutral:</span> Returns the current to the source.</li>
                    <li><span className="font-bold text-green-600">Earth:</span> A safety safety path to ground.</li>
                  </ul>
                  
                </div>
                <SeriesParallelDiagram />
              </div>
            </section>

            {/* Section B */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold">Mains AC & Switchboards</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <CircuitBreakerVisual />
                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">
                    Safety is paramount in building power distribution. The <strong>switchboard</strong> acts as the brain, controlling distribution through <strong>switchgear</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Circuit Breaker', 'Short Circuit', 'Power Socket', 'Insulation'].map(term => (
                      <span key={term} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section C & D */}
            <section className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold">PCBs and Microchips</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Modern electronics rely on <strong>Printed Circuit Boards (PCB)</strong> and <strong>Integrated Circuits (IC)</strong> built on silicon wafers.
                </p>
                <PCBVisual />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Components</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <Radio className="text-purple-500 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold block">Sensors & Logic Gates</span>
                      <span className="text-sm text-slate-500 italic">Detect physical values and process digital signals.</span>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <ToggleRight className="text-purple-500 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold block">Servomechanisms</span>
                      <span className="text-sm text-slate-500 italic">Automatically controlled mechanical systems.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Examples */}
            <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Lightbulb size={20} className="text-yellow-500" /> Engineering Context Examples</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  "A <strong>series circuit</strong> stops working if one component fails."
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  "The <strong>live conductor</strong> supplies current to the appliance."
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  "A <strong>sensor</strong> detects temperature changes."
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  "A <strong>logic gate</strong> processes digital signals."
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-10 animate-in fade-in duration-500">
            {/* Exercise 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Matching: Definitions
              </h3>
              <div className="space-y-6">
                {[
                  { id: 'e1_1', term: 'Parallel circuit', target: 'd' },
                  { id: 'e1_2', term: 'Series circuit', target: 'b' },
                  { id: 'e1_3', term: 'Circuit breaker', target: 'c' },
                  { id: 'e1_4', term: 'PCB', target: 'e' },
                  { id: 'e1_5', term: 'Sensor', target: 'a' }
                ].map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 font-medium text-indigo-600">{item.term} →</div>
                    <select 
                      onChange={(e) => setAnswers({...answers, [item.id]: e.target.value})}
                      className="w-full md:w-2/3 p-2 rounded-md border border-slate-300 dark:bg-slate-700 dark:border-slate-600"
                    >
                      <option value="">Select an option...</option>
                      <option value="a">a. Device detecting changes</option>
                      <option value="b">b. Circuit with one path</option>
                      <option value="c">c. Safety device that cuts power</option>
                      <option value="d">d. Circuit with multiple paths</option>
                      <option value="e">e. Board with electrical connections</option>
                    </select>
                    {showFeedback && (
                      <div className="shrink-0">
                        {answers[item.id] === item.target ? 
                          <CheckCircle2 className="text-green-500" /> : 
                          <AlertTriangle className="text-red-500" />
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Fill in the Blanks
              </h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2 flex-wrap">
                  A complete path for current is a <input type="text" className="border-b-2 border-indigo-300 dark:bg-slate-700 px-2 outline-none focus:border-indigo-600" placeholder="term" />.
                </p>
                <p className="flex items-center gap-2 flex-wrap">
                  A device that interrupts power automatically is a <input type="text" className="border-b-2 border-indigo-300 dark:bg-slate-700 px-2 outline-none focus:border-indigo-600 w-32" placeholder="circuit breaker" />.
                </p>
                <p className="flex items-center gap-2 flex-wrap">
                  A board used to connect components is a <input type="text" className="border-b-2 border-indigo-300 dark:bg-slate-700 px-2 outline-none focus:border-indigo-600" placeholder="printed" /> circuit board.
                </p>
              </div>
            </div>

            <div className="flex justify-center pb-8">
              <button 
                onClick={() => setShowFeedback(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-12 rounded-full transition-all shadow-lg hover:shadow-indigo-500/20"
              >
                Check My Answers
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;