import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  Settings, 
  BookOpen, 
  PenTool, 
  CheckCircle, 
  ArrowRight,
  Info,
  Maximize2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [exerciseState, setExerciseState] = useState({
    ex1: Array(4).fill(null),
    ex2: Array(4).fill(''),
    results: { ex1: null, ex2: null }
  });

  const tabs = [
    { id: 'overview', label: '1. Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'edges', label: '2.1 Edges & Joints', icon: <Layers className="w-4 h-4" /> },
    { id: 'holes', label: '2.2 Holes & Fasteners', icon: <Settings className="w-4 h-4" /> },
    { id: 'grammar', label: '3. Grammar & Vocab', icon: <Info className="w-4 h-4" /> },
    { id: 'exercises', label: '4. Practice', icon: <PenTool className="w-4 h-4" /> },
  ];

  // Exercises Data
  const ex1Matches = [
    { term: "Chamfer", def: "An angled cut on an edge" },
    { term: "Rebate", def: "An internal step or corner cut into a component" },
    { term: "Through hole", def: "A hole that passes completely through a component" },
    { term: "Countersunk screw", def: "A screw designed to sit flush with the surface" }
  ];

  const checkEx1 = () => {
    const isCorrect = exerciseState.ex1.every((val, idx) => val === ex1Matches[idx].def);
    setExerciseState(prev => ({ ...prev, results: { ...prev.results, ex1: isCorrect ? 'correct' : 'incorrect' } }));
  };

  const checkEx2 = () => {
    const answers = ['groove', 'threads', 'proud', 'cavity'];
    const isCorrect = exerciseState.ex2.map(s => s.toLowerCase().trim()).every((val, idx) => val === answers[idx]);
    setExerciseState(prev => ({ ...prev, results: { ...prev.results, ex2: isCorrect ? 'correct' : 'incorrect' } }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Lesson 22: 3D Component Features</h1>
        <p className="text-slate-500 font-medium">Engineering English & Mechanical Design</p>
      </header>

      {/* Tabs Navigation */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all border-b-2 rounded-t-lg ${
                activeTab === tab.id 
                  ? 'border-blue-600 text-blue-600 bg-blue-50' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px]">
        <div className="p-6 md:p-10 animate-in fade-in duration-500">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-4">Lesson Overview</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                This lesson describes three-dimensional features of mechanical components, focusing on 
                <strong> edges, joints, holes, and fasteners</strong>. The language is typical of technical 
                drawings and manufacturing documentation, especially in industrial and chemical plant contexts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">Technical Specs</h3>
                  <p className="text-sm text-slate-600">Focuses on geometry terminology like chamfers and rebates.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2">Joinery</h3>
                  <p className="text-sm text-slate-600">Explains interlocking features and sealing mechanisms.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-2">Fastening</h3>
                  <p className="text-sm text-slate-600">Details types of holes and screw head orientations.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Edges & Joints */}
          {activeTab === 'edges' && (
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold text-slate-800 mb-4">2.1 3D Forms of Edges and Joints</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <h4 className="font-bold text-blue-700 mb-2 underline">Edge and Corner Features</h4>
                      <ul className="space-y-3 text-sm">
                        <li><strong>Chamfered edge:</strong> An edge cut at an angle (usually 45°) instead of square.</li>
                        <li><strong>Square edge:</strong> An edge with a standard 90° angle.</li>
                        <li><strong>Rebate:</strong> An internal step cut into a component. <em>"The plate has a rebate around the bottom."</em></li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-6 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300">
                    <svg width="200" height="150" viewBox="0 0 200 150" className="drop-shadow-sm">
                       {/* Simplified Rebate/Chamfer Visualization */}
                       <path d="M20,100 L140,100 L140,80 L160,80 L160,40 L140,20 L20,20 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                       <text x="30" y="65" fontSize="12" fill="#475569">Main Component</text>
                       <path d="M140,100 L140,80 L160,80" fill="none" stroke="#ef4444" strokeWidth="2" />
                       <text x="145" y="95" fontSize="10" fill="#ef4444">Rebate</text>
                       <line x1="140" y1="20" x2="160" y2="40" stroke="#ef4444" strokeWidth="2" />
                       <text x="140" y="15" fontSize="10" fill="#ef4444">Chamfer (45°)</text>
                    </svg>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Interlocking Joint Features</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-bold text-blue-600 mb-1">Ridge (Tongue)</h4>
                    <p className="text-xs text-slate-600">A long, thin, raised surface.</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-bold text-blue-600 mb-1">Groove (Channel)</h4>
                    <p className="text-xs text-slate-600">A cut or recessed track for the ridge.</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-bold text-blue-600 mb-1">Cavity / Void</h4>
                    <p className="text-xs text-slate-600">Hollow space, often for sealing rings.</p>
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 p-4 border-l-4 border-blue-400">
                  <p className="italic text-slate-700">"The pipe is rebated on the inside so the plate can slot into it, forming a <strong>tongue-and-groove joint</strong>."</p>
                </div>
              </section>
            </div>
          )}

          {/* Tab 3: Holes & Fasteners */}
          {activeTab === 'holes' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-10">
                <section>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Maximize2 className="w-5 h-5 text-indigo-500" />
                    Types of Holes
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start border-b border-slate-100 pb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 text-xs">TH</div>
                      <div>
                        <h4 className="font-bold">Through holes</h4>
                        <p className="text-sm text-slate-600">Goes completely through the material.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start border-b border-slate-100 pb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 text-xs">BH</div>
                      <div>
                        <h4 className="font-bold">Blind holes</h4>
                        <p className="text-sm text-slate-600">Ends inside the material (does not exit).</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 text-xs">TR</div>
                      <div>
                        <h4 className="font-bold">Threaded holes</h4>
                        <p className="text-sm text-slate-600">Contain internal helical grooves for screws.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-indigo-500" />
                    Screws & Heads
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-slate-50 border rounded text-xs">
                      <span className="font-bold block">Machine Screws</span>
                      Constant thickness
                    </div>
                    <div className="p-3 bg-slate-50 border rounded text-xs">
                      <span className="font-bold block">Tapered/Pointed</span>
                      Thickness decreases
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 border-l-4 border-amber-400 rounded">
                    <h4 className="font-bold mb-2">Head Orientation</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Raised (Proud):</strong> Sits above the surface.</li>
                      <li><strong>Flat (Fully Recessed):</strong> Sits within the thickness.</li>
                      <li><strong>Flush:</strong> At the same level as the surface.</li>
                      <li><strong>Countersinking:</strong> Chamfering the hole so the head sits flush.</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* Tab 4: Grammar & Vocab */}
          {activeTab === 'grammar' && (
            <div className="grid md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-xl font-bold mb-4">3. Grammar: Relative Clauses</h3>
                <p className="text-sm text-slate-600 mb-4">In engineering, we use relative clauses to define components precisely.</p>
                <div className="space-y-3">
                  <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
                    <p className="text-sm">"Screws <span className="text-indigo-700 font-bold underline">which are intended to be screwed into these holes</span> have threads."</p>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
                    <p className="text-sm">"Machine screws, <span className="text-indigo-700 font-bold underline">which have a constant thickness</span>, ..."</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-700">
                  <p className="font-bold mb-1 underline">Why use them?</p>
                  <ul className="list-disc ml-5">
                    <li>Add essential technical detail</li>
                    <li>Clearly identify function/characteristics</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 text-slate-800">4. Key Vocabulary</h3>
                <div className="overflow-hidden border rounded-lg border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-2 font-bold">Term</th>
                        <th className="px-4 py-2 font-bold">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Chamfer</td><td className="px-4 py-2">Angled cut on an edge</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Recessed</td><td className="px-4 py-2">Set below the surface</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Proud</td><td className="px-4 py-2">Raised above the surface</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Helical</td><td className="px-4 py-2">Spiral-shaped</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Flush</td><td className="px-4 py-2">Level with surface</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-blue-600">Sealing ring</td><td className="px-4 py-2">Rubber ring to prevent leaks</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {/* Tab 5: Exercises */}
          {activeTab === 'exercises' && (
            <div className="space-y-10">
              {/* Ex 1 */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Ex 1: Vocabulary Matching</h3>
                  {exerciseState.results.ex1 === 'correct' && <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle className="w-4 h-4"/> Correct!</span>}
                </div>
                <div className="grid gap-4">
                  {ex1Matches.map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-4 items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="w-full md:w-1/4 font-bold text-slate-700">{item.term}</div>
                      <select 
                        className="w-full md:w-3/4 p-2 bg-white border rounded text-sm outline-blue-500"
                        onChange={(e) => {
                          const newEx1 = [...exerciseState.ex1];
                          newEx1[idx] = e.target.value;
                          setExerciseState({...exerciseState, ex1: newEx1});
                        }}
                      >
                        <option value="">Select definition...</option>
                        {ex1Matches.map((opt, oIdx) => (
                          <option key={oIdx} value={opt.def}>{opt.def}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <button 
                    onClick={checkEx1}
                    className="w-full md:w-auto self-start mt-2 px-6 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors"
                  >
                    Check Matchings
                  </button>
                </div>
              </section>

              {/* Ex 2 */}
              <section className="border-t pt-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Ex 2: Sentence Completion</h3>
                  {exerciseState.results.ex2 === 'correct' && <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle className="w-4 h-4"/> Perfect!</span>}
                </div>
                <div className="space-y-6">
                  {[
                    "The ridge on the pipe fits into the [input] on the plate.",
                    "Screws used in blind holes must have [input].",
                    "A raised screw head is described as being [input].",
                    "The hollow space for the rubber ring is called a [input]."
                  ].map((sentence, idx) => {
                    const parts = sentence.split('[input]');
                    return (
                      <div key={idx} className="text-lg text-slate-700 flex flex-wrap items-center gap-2">
                        {parts[0]}
                        <input 
                          type="text" 
                          className="px-3 py-1 border-b-2 border-slate-300 outline-none focus:border-blue-500 w-32 font-bold text-blue-600 bg-blue-50 rounded"
                          value={exerciseState.ex2[idx]}
                          onChange={(e) => {
                            const newEx2 = [...exerciseState.ex2];
                            newEx2[idx] = e.target.value;
                            setExerciseState({...exerciseState, ex2: newEx2});
                          }}
                        />
                        {parts[1]}
                      </div>
                    );
                  })}
                  <button 
                    onClick={checkEx2}
                    className="w-full md:w-auto self-start mt-2 px-6 py-2 bg-indigo-600 text-white rounded font-bold hover:bg-indigo-700 transition-colors"
                  >
                    Check Sentences
                  </button>
                </div>
              </section>

              {/* Final Note */}
              <div className="p-4 bg-slate-900 text-white rounded-lg flex items-center gap-4">
                <ArrowRight className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="font-bold">Next Step: Technical Description</h4>
                  <p className="text-xs opacity-70">Review your results and practice describing components using 'which' or 'that' clauses.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-slate-400 text-xs">
        &copy; 2024 Engineering English Series &bull; Lesson 22: Interactive Edition
      </footer>
    </div>
  );
};

export default App;