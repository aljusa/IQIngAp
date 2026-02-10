import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Wrench, 
  Layers, 
  BookOpen, 
  Terminal, 
  CheckCircle2, 
  AlertCircle,
  ArrowRightLeft,
  Disc
} from 'lucide-react';

// Types
type TabType = 'overview' | 'concepts' | 'preload' | 'washers' | 'grammar' | 'vocab' | 'exercises';

interface ExerciseState {
  ex1: Record<string, string>;
  ex2: Record<string, string>;
  results: Record<string, boolean | null>;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [exerciseState, setExerciseState] = useState<ExerciseState>({
    ex1: {},
    ex2: {},
    results: {}
  });

  // Tab configuration
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'concepts', label: 'Bolts & Nuts', icon: <Settings size={18} /> },
    { id: 'preload', label: 'Preload', icon: <Wrench size={18} /> },
    { id: 'washers', label: 'Washers', icon: <Layers size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <Terminal size={18} /> },
    { id: 'vocab', label: 'Vocabulary', icon: <Disc size={18} /> },
    { id: 'exercises', label: 'Practice', icon: <CheckCircle2 size={18} /> },
  ];

  const handleEx1Match = (term: string, definition: string) => {
    setExerciseState(prev => ({
      ...prev,
      ex1: { ...prev.ex1, [term]: definition }
    }));
  };

  const checkEx2 = (id: string, value: string, correct: string) => {
    const isCorrect = value.trim().toLowerCase() === correct.toLowerCase();
    setExerciseState(prev => ({
      ...prev,
      results: { ...prev.results, [id]: isCorrect }
    }));
  };

  const SectionWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b pb-4 flex items-center gap-3">
        {tabs.find(t => t.id === activeTab)?.icon}
        {title}
      </h2>
      <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 font-sans transition-colors duration-300">
      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-md sticky top-4 z-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main>
        {activeTab === 'overview' && (
          <SectionWrapper title="Lesson Overview">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-lg">
                This lesson introduces mechanical fasteners, focusing on <strong>bolts, nuts, preload</strong> in bolted joints, and <strong>washers</strong>. 
                The language and concepts are typical of mechanical, structural, and manufacturing engineering.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Settings className="text-blue-500" /> Focus Areas</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Assembly & Joint Design</li>
                  <li>Structural Engineering</li>
                  <li>Manufacturing Standards</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2"><Wrench className="text-blue-500" /> Key Equipment</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hex & Socket Head Bolts</li>
                  <li>Torque Wrenches</li>
                  <li>HSFG Bolts</li>
                </ul>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'concepts' && (
          <SectionWrapper title="Bolts and Nuts">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Bolt Components</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: 'Thread', desc: 'Grooves on the shaft cut in a helical pattern.' },
                    { label: 'Shaft / Shank', desc: 'The main body of the bolt.' },
                    { label: 'Head', desc: 'The top part used for turning.' }
                  ].map(item => (
                    <div key={item.label} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 transition-colors">
                      <div className="font-bold text-slate-800 dark:text-slate-100">{item.label}</div>
                      <div className="text-sm">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ArrowRightLeft className="text-blue-500" /> Handedness & Direction
                </h3>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold">R</div>
                      <p><strong>Right-hand thread:</strong> Tightened counterclockwise (AmE), loosened clockwise.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center font-bold">L</div>
                      <p><strong>Left-hand thread:</strong> Used in specific industrial situations.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm border text-center italic">
                    "A nut is screwed <strong>onto</strong> a bolt. A bolt is screwed <strong>into</strong> a threaded hole."
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Bolt Head Types</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold underline mb-1">Hexagonal Head (Hex)</h4>
                    <p className="text-sm">Standard flat sides allowing a <strong>wrench</strong> to turn the bolt.</p>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border-l-4 border-indigo-500">
                    <h4 className="font-bold underline mb-1">Socket Head</h4>
                    <p className="text-sm">Internal hexagonal hole turned using a <strong>hex key (Allen key)</strong>.</p>
                  </div>
                </div>
              </section>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'preload' && (
          <SectionWrapper title="Preload in Bolted Joints">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">The Physics of Joints</h4>
                  <ul className="space-y-3">
                    <li><strong>Torque:</strong> The turning force applied.</li>
                    <li><strong>Tension:</strong> The stretching force inside the bolt.</li>
                    <li><strong>Preload (Clamp Load):</strong> The pressing force holding parts together.</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-2">HSFG Bolts</h4>
                  <p className="text-sm"><strong>High-Strength Friction Grip</strong> bolts are designed to apply extremely high preload to prevent sliding between steel structures.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">The Torque Wrench</h4>
                <p>Essential tool for precision engineering that:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Indicates applied torque level</li>
                  <li>Ensures bolts are tight enough but not <strong>over-tightened</strong></li>
                  <li>Used for periodic safety checks to ensure joints don't loosen over time</li>
                </ul>
                <div className="flex justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                   <Wrench size={48} className="text-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'washers' && (
          <SectionWrapper title="Washers">
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg italic text-center">
                "Metal discs placed between the bolt head/nut and the fastened components."
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-400 transition-all">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Disc className="text-blue-500" /> Flat (Plain) Washers
                  </h4>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Larger outside diameter</li>
                    <li><strong>Spread the load</strong></li>
                    <li>Distribute pressure over wide surfaces</li>
                  </ul>
                </div>

                <div className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-2 border-transparent hover:border-blue-400 transition-all">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Disc className="text-emerald-500" /> Spring Washers
                  </h4>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Designed to be <strong>compressed</strong></li>
                    <li>Allows adjustment of preload</li>
                    <li>Absorbs shocks and vibration</li>
                    <li className="list-none pt-2 opacity-70">Types: Helical, Conical</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'grammar' && (
          <SectionWrapper title="Grammar Focus: Passive Voice">
            <div className="space-y-6">
              <p>Engineering documentation relies heavily on the <strong>Passive Voice</strong> to maintain objectivity and focus on the components rather than the person doing the work.</p>
              
              <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr>
                      <th className="p-4 font-bold">Active Example</th>
                      <th className="p-4 font-bold">Passive Engineering Form</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="p-4">Engineers apply torque.</td>
                      <td className="p-4 font-medium text-blue-600 dark:text-blue-400">Torque is applied.</td>
                    </tr>
                    <tr>
                      <td className="p-4">We design washers to compress.</td>
                      <td className="p-4 font-medium text-blue-600 dark:text-blue-400">Washers are designed to be compressed.</td>
                    </tr>
                    <tr>
                      <td className="p-4">You screw the nut onto the bolt.</td>
                      <td className="p-4 font-medium text-blue-600 dark:text-blue-400">The nut is screwed onto the bolt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg flex gap-3">
                <AlertCircle className="text-amber-500 shrink-0" />
                <p className="text-sm"><strong>Why?</strong> It emphasizes <em>function</em> and <em>process</em> over the individual, creating a professional technical tone.</p>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'vocab' && (
          <SectionWrapper title="Technical Vocabulary">
            <div className="grid gap-4">
              {[
                { term: "Thread", context: "Helical groove used for fastening" },
                { term: "Torque", context: "Turning force applied during tightening" },
                { term: "Tension", context: "Stretching force in a bolt" },
                { term: "Preload", context: "Clamping force holding components together" },
                { term: "Shear Force", context: "Force causing sliding between parts" },
                { term: "Washer", context: "Disc used to spread load or control preload" }
              ].map((v) => (
                <div key={v.term} className="flex flex-col sm:flex-row sm:items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-lg min-w-[150px]">{v.term}</span>
                  <span className="text-slate-500 dark:text-slate-400 italic sm:border-l sm:pl-4 sm:ml-4">{v.context}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'exercises' && (
          <SectionWrapper title="Applied Exercises">
            <div className="space-y-12">
              {/* Exercise 1 */}
              <section>
                <h3 className="font-bold text-xl mb-4">Exercise 1: Matching</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {['Thread', 'Torque', 'Preload', 'Flat Washer'].map(term => (
                      <div key={term} className="p-3 bg-slate-100 dark:bg-slate-800 rounded flex justify-between items-center">
                        <span>{term}</span>
                        <select 
                          className="bg-white dark:bg-slate-700 text-sm p-1 rounded border"
                          onChange={(e) => handleEx1Match(term, e.target.value)}
                        >
                          <option value="">Select definition...</option>
                          <option value="a">a. Turning force</option>
                          <option value="b">b. Helical groove</option>
                          <option value="c">c. Pressing force</option>
                          <option value="d">d. Spread load</option>
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-sm italic">
                    {Object.keys(exerciseState.ex1).length > 0 ? (
                      <ul className="space-y-1">
                        {Object.entries(exerciseState.ex1).map(([t, d]) => (
                          <li key={t}><strong>{t}:</strong> Option {d}</li>
                        ))}
                      </ul>
                    ) : "Select definitions to see matches here."}
                  </div>
                </div>
              </section>

              {/* Exercise 2 */}
              <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Exercise 2: Sentence Completion</h3>
                <div className="space-y-6">
                  {[
                    { id: 'q1', text: "A nut is screwed ______ a bolt.", ans: "onto" },
                    { id: 'q2', text: "The force used to tighten a bolt is called ______.", ans: "torque" },
                    { id: 'q3', text: "High preload helps prevent ______ between components.", ans: "sliding" },
                    { id: 'q4', text: "A socket head bolt is turned using a ______ key.", ans: "hex" }
                  ].map(q => (
                    <div key={q.id} className="flex flex-col gap-2">
                      <p>{q.text.split('______')[0]} 
                        <input 
                          type="text"
                          className={`mx-2 p-1 border-b-2 bg-transparent focus:outline-none focus:border-blue-500 w-32 text-center font-bold ${
                            exerciseState.results[q.id] === true ? 'text-emerald-500' : 
                            exerciseState.results[q.id] === false ? 'text-red-500' : ''
                          }`}
                          onBlur={(e) => checkEx2(q.id, e.target.value, q.ans)}
                          placeholder="..."
                        /> 
                        {q.text.split('______')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenge */}
              <section>
                <h3 className="font-bold text-xl mb-4">Exercise 3: Technical Writing</h3>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-sm">
                  <p className="mb-2 text-blue-400">// Challenge: Write an engineering description</p>
                  <p>Question: Why are torque wrenches critical?</p>
                  <textarea 
                    className="w-full bg-slate-800 border-none rounded p-4 mt-2 focus:ring-2 ring-blue-500 h-24"
                    placeholder="Type your explanation using lesson terminology..."
                  ></textarea>
                </div>
              </section>
            </div>
          </SectionWrapper>
        )}
      </main>

      <footer className="mt-12 text-center text-slate-500 text-sm">
        Lesson 26: Mechanical Fasteners | Engineering English Module
      </footer>
    </div>
  );
};

export default App;