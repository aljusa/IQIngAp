import React, { useState } from 'react';
import { 
  Beaker, 
  Settings, 
  Leaf, 
  Factory, 
  Thermometer, 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  Zap,
  Info
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [exerciseResults, setExerciseResults] = useState({
    matching: {},
    completion: { p1: '', p2: '', p3: '' }
  });

  const tabs = [
    { id: 'overview', title: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'what-are-polymers', title: 'Chemical Structure', icon: <Beaker className="w-4 h-4" /> },
    { id: 'natural-synthetic', title: 'Types', icon: <Leaf className="w-4 h-4" /> },
    { id: 'classifications', title: 'Thermoplastics', icon: <Thermometer className="w-4 h-4" /> },
    { id: 'engineering-elastomers', title: 'Specialized', icon: <Zap className="w-4 h-4" /> },
    { id: 'reference', title: 'Vocab & Grammar', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'exercises', title: 'Exercises', icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  const handleMatching = (term, definition) => {
    setExerciseResults(prev => ({
      ...prev,
      matching: { ...prev.matching, [term]: definition }
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <header className="border-b pb-4">
              <h1 className="text-3xl font-bold text-slate-800">Introduction to Polymers</h1>
              <p className="text-slate-600 mt-2">A foundational lesson for engineering students on the chemistry and application of large molecular chains.</p>
            </header>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-800 flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5" /> Learning Objectives
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2"><span>•</span> Understanding polymers at a chemical level</li>
                  <li className="flex gap-2"><span>•</span> Distinguishing natural vs. synthetic types</li>
                  <li className="flex gap-2"><span>•</span> Classifying thermoplastics and thermosets</li>
                  <li className="flex gap-2"><span>•</span> Identifying engineering applications</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Factory className="w-12 h-12 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-500 italic">Source text adapted for engineering education</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. What Polymers Are</h2>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Polymers are compounds made up of several elements that are chemically bound.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <span className="block text-2xl font-bold text-indigo-600 mb-1">Large</span>
                    <span className="text-sm text-slate-600">Numbers of tiny molecules</span>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <span className="block text-2xl font-bold text-indigo-600 mb-1">Few</span>
                    <span className="text-sm text-slate-600">Atoms per molecule</span>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <span className="block text-2xl font-bold text-indigo-600 mb-1">Chains</span>
                    <span className="text-sm text-slate-600">Joined in long sequences</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Molecules and Chains Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-6 bg-slate-50">
                  <h4 className="font-bold text-slate-700 mb-2">Water Molecule ($H_2O$)</h4>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">O</div>
                    <div className="text-2xl">+</div>
                    <div className="flex flex-col gap-1">
                      <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-white text-xs">H</div>
                      <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-white text-xs">H</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">Small, simple structure containing only 3 atoms.</p>
                </div>
                <div className="border rounded-xl p-6 bg-indigo-50 border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-2">Polymer Molecule</h4>
                  <div className="flex items-center gap-1 overflow-hidden h-12">
                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                      <div key={i} className="flex-shrink-0 w-8 h-8 border-2 border-indigo-400 rounded-full bg-white flex items-center justify-center text-[10px] text-indigo-600">M</div>
                    ))}
                    <div className="text-indigo-400">...</div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">Huge numbers of atoms linked to form expansive chains.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold text-slate-800">3. Natural and Synthetic Polymers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-6 space-y-4">
                <h3 className="text-xl font-semibold text-green-800">Natural Polymers</h3>
                <div className="bg-green-50 p-4 rounded-r-lg">
                  <p className="font-medium">Example: Rubber</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Source: Latex (liquid from rubber trees)</li>
                    <li>• Use: Rubber bands, Car tyres</li>
                  </ul>
                </div>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-800">Synthetic Polymers</h3>
                <div className="bg-blue-50 p-4 rounded-r-lg">
                  <p className="font-medium">Generally known as Plastics</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Source: Manmade industrial processes</li>
                    <li>• Note: Rubber can be either natural OR synthetic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold text-slate-800">4. Categories of Synthetic Polymers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-1 bg-orange-100 rounded-lg inline-block text-orange-700 font-bold px-3">Thermoplastics</div>
                <div className="bg-white border p-6 rounded-xl shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-700">
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-400" />
                      <span>Can be melted by heat and cooled into solids repeatedly.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-400" />
                      <span>Formed using <strong>moulds</strong>.</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <h4 className="font-bold text-sm uppercase text-slate-500">Engineering Examples:</h4>
                    <div className="p-3 bg-slate-50 rounded border text-sm">
                      <p><strong>ABS:</strong> Stiff/Light (Vehicle bodywork)</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border text-sm">
                      <p><strong>Polycarbonate:</strong> Strong/Transparent (Panels/Lights)</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border text-sm">
                      <p><strong>PVC:</strong> Cost-effective (Windows/Pipes)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-1 bg-red-100 rounded-lg inline-block text-red-700 font-bold px-3">Thermosetting Plastics</div>
                <div className="bg-white border p-6 rounded-xl shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-700">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-400" />
                      <span>Undergo chemical reaction during cooling; set <strong>permanently</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-400" />
                      <span>Process is called <strong>curing</strong>. Will burn if reheated.</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-3">
                    <h4 className="font-bold text-sm uppercase text-slate-500">Engineering Examples:</h4>
                    <div className="p-3 bg-slate-50 rounded border text-sm">
                      <p><strong>Epoxy Resins:</strong> High-strength adhesives</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border text-sm">
                      <p><strong>Polyimides:</strong> Strong/Flexible insulators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Specialized Polymers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">Engineering Plastics</h3>
                  <p className="mb-4 opacity-90">Mostly thermoplastics designed for high performance and strength.</p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">ABS</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Polycarbonate</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">Elastomers</h3>
                  <p className="mb-4 opacity-90">Highly elastic polymers that return to original length when force is removed.</p>
                  <div className="text-sm bg-white/10 p-3 rounded">
                    Property: Can stretch to $\ge 2 \times$ original length.
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Practical Context Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-200">
                    <tr>
                      <th className="px-4 py-2">Need</th>
                      <th className="px-4 py-2">Selection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-4 py-3">Re-moulding required</td>
                      <td className="px-4 py-3 font-medium text-slate-800">Thermoplastics</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                      <td className="px-4 py-3">Permanent shape required</td>
                      <td className="px-4 py-3 font-medium text-slate-800">Thermosets</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-4 py-3">Transparent & Strong</td>
                      <td className="px-4 py-3 font-medium text-slate-800">Polycarbonate</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                      <td className="px-4 py-3">Flexibility & Recovery</td>
                      <td className="px-4 py-3 font-medium text-slate-800">Elastomers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Technical Vocabulary</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { t: 'Polymer', d: 'Compound made of long molecular chains' },
                  { t: 'Molecule', d: 'Group of atoms chemically bonded' },
                  { t: 'Chain', d: 'Long sequence of connected atoms' },
                  { t: 'Natural polymer', d: 'Polymer from natural sources' },
                  { t: 'Synthetic polymer', d: 'Manmade polymer' },
                  { t: 'Thermoplastic', d: 'Polymer that can be remelted' },
                  { t: 'Thermoset', d: 'Polymer that cures permanently' },
                  { t: 'Cure', d: 'Set by chemical reaction' },
                  { t: 'Mould', d: 'Shaped container for forming materials' },
                  { t: 'Elastomer', d: 'Highly elastic polymer' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-3 border rounded hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-indigo-700">{item.t}</span>
                    <span className="text-sm text-slate-600">{item.d}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" /> 7. Grammar Focus
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Definition Structures</p>
                  <code className="text-sm text-slate-700 italic">“Polymers are compounds made up of…”</code>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Contrast Markers</p>
                  <code className="text-sm text-slate-700 italic">“However, most of the polymers used in industry are synthetic.”</code>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Consequence/Definition</p>
                  <code className="text-sm text-slate-700 italic">“This means they set permanently, and cannot be moulded again.”</code>
                </div>
              </div>
            </section>
          </div>
        );

      case 6:
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-500 pb-12">
            <h2 className="text-2xl font-bold text-slate-800">9. Lesson Exercises</h2>
            
            <section className="space-y-4">
              <h3 className="font-bold text-slate-700">Exercise 1: Vocabulary Matching</h3>
              <p className="text-sm text-slate-500 mb-4">Click a term then its meaning.</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  {['Thermoplastic', 'Thermoset', 'Elastomer', 'Polymer chain'].map(t => (
                    <button 
                      key={t}
                      onClick={() => handleMatching('selectedTerm', t)}
                      className={`w-full text-left p-2 rounded border text-sm transition-all ${exerciseResults.matching.selectedTerm === t ? 'bg-indigo-600 text-white' : 'bg-white hover:border-indigo-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'a', val: 'Polymer that cures permanently' },
                    { id: 'b', val: 'Long sequence of bonded atoms' },
                    { id: 'c', val: 'Polymer that can be remelted' },
                    { id: 'd', val: 'Elastic polymer that returns to shape' }
                  ].map(m => (
                    <button 
                      key={m.id}
                      onClick={() => handleMatching(exerciseResults.matching.selectedTerm, m.id)}
                      className={`w-full text-left p-2 rounded border text-sm hover:border-indigo-400 bg-white transition-all`}
                    >
                      {m.val}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded border text-xs">
                Current Matches: {Object.entries(exerciseResults.matching).filter(([k]) => k !== 'selectedTerm').map(([k, v]) => `${k} → ${v}`).join(', ')}
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="font-bold text-slate-700">Exercise 2: Sentence Completion</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-slate-700">
                  <span>1. Plastics are generally</span>
                  <input 
                    type="text" 
                    placeholder="..." 
                    className="border-b-2 border-slate-300 focus:border-indigo-500 outline-none px-2 w-32 bg-transparent"
                    onChange={(e) => setExerciseResults(prev => ({...prev, completion: {...prev.completion, p1: e.target.value}}))}
                  />
                  <span>polymers.</span>
                  {exerciseResults.completion.p1.toLowerCase() === 'synthetic' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
                
                <div className="flex flex-wrap items-center gap-2 text-slate-700">
                  <span>2. Thermoplastics are formed in shaped containers called</span>
                  <input 
                    type="text" 
                    placeholder="..." 
                    className="border-b-2 border-slate-300 focus:border-indigo-500 outline-none px-2 w-32 bg-transparent"
                    onChange={(e) => setExerciseResults(prev => ({...prev, completion: {...prev.completion, p2: e.target.value}}))}
                  />
                  <span>.</span>
                  {exerciseResults.completion.p2.toLowerCase() === 'moulds' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-slate-700">
                  <span>3. After curing, thermosets cannot be</span>
                  <input 
                    type="text" 
                    placeholder="..." 
                    className="border-b-2 border-slate-300 focus:border-indigo-500 outline-none px-2 w-32 bg-transparent"
                    onChange={(e) => setExerciseResults(prev => ({...prev, completion: {...prev.completion, p3: e.target.value}}))}
                  />
                  <span>again.</span>
                  {exerciseResults.completion.p3.toLowerCase() === 'moulded' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="font-bold text-slate-700">Exercise 3: Applied Writing</h3>
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-slate-500 mb-1">Original Active Voice:</p>
                <p className="italic text-slate-700">“Manufacturers heat thermoplastics and mould them into shape.”</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-500">Rewritten (Passive Voice):</p>
                <textarea 
                  className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none h-24"
                  placeholder="Type the formal engineering rewrite here..."
                />
                <p className="text-xs text-slate-400">Tip: Formal style usually starts with 'Thermoplastics are...'</p>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto scrollbar-hide bg-slate-50 border-b">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === index 
                ? 'bg-white border-indigo-600 text-indigo-600 shadow-inner' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="p-6 md:p-12 min-h-[600px]">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 border-t p-4 px-12 text-center">
          <p className="text-xs text-slate-400">Polymers: Engineering Materials & Chemistry Lesson Module</p>
        </footer>
      </div>
    </div>
  );
};

export default App;