import React, { useState } from 'react';
import { 
  Flame, 
  Settings, 
  Layers, 
  BookOpen, 
  Thermometer, 
  PenTool, 
  Zap, 
  ShieldCheck,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'concepts', label: 'Key Concepts', icon: <Settings className="w-4 h-4" /> },
    { id: 'techniques', label: 'Welding Techniques', icon: <Flame className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar & Vocab', icon: <PenTool className="w-4 h-4" /> },
    { id: 'exercises', label: 'Exercises', icon: <Zap className="w-4 h-4" /> },
  ];

  const handleQuizChange = (id, val) => {
    setQuizAnswers(prev => ({ ...prev, [id]: val }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-slate-700">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Lesson 28: Non-Mechanical Joints 1</h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Welcome to Engineering English. This lesson introduces <strong>non-mechanical joints</strong>, 
                focusing on the principles of <strong>welding</strong>. You will explore concepts typical of 
                mechanical, structural, and materials engineering, specifically regarding fabrication and metal joining.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Layers className="text-blue-500" /> Focus Areas
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Fusion and Base Metals</li>
                  <li>• Heat-Affected Zones (HAZ)</li>
                  <li>• Common Arc Welding Techniques</li>
                  <li>• Technical Vocabulary for Fabrication</li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-green-500" /> Key Outcome
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  By the end of this lesson, you will be able to describe different welding processes 
                  and use technical terminology to explain how materials are permanently joined using heat.
                </p>
              </div>
            </div>
          </div>
        );

      case 'concepts':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100 border-b pb-2">2.1 Welding Fundamentals</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-lg">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400">1. Melting</h4>
                  <p className="text-sm">Heat melts the edges of the components.</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-lg">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400">2. Mixing</h4>
                  <p className="text-sm">Molten material mixes in the weld pool.</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-lg">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400">3. Solidifying</h4>
                  <p className="text-sm">Metal solidifies into a solid fusion joint.</p>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Thermometer className="text-red-500"/> Zones and Stress</h3>
                <div className="space-y-3">
                  <div className="p-4 border-l-4 border-red-500 bg-slate-50 dark:bg-slate-800">
                    <span className="font-bold block">Heat-Affected Zone (HAZ)</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Area modified by heat but not melted.</span>
                  </div>
                  <div className="p-4 border-l-4 border-yellow-500 bg-slate-50 dark:bg-slate-800">
                    <span className="font-bold block">Residual Stress</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Tension trapped around the joint due to contraction as the weld cools.</span>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-800">
                    <span className="font-bold block">Discontinuity</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Areas where the joint does not completely solidify.</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                <h4 className="font-bold mb-4">Weld Section Diagram</h4>
                <svg width="240" height="120" viewBox="0 0 240 120" className="drop-shadow-lg">
                  {/* Base Metal */}
                  <rect x="0" y="40" width="240" height="40" fill="#94a3b8" />
                  {/* HAZ */}
                  <ellipse cx="120" cy="60" rx="60" ry="35" fill="#f87171" opacity="0.4" />
                  {/* Fusion Zone */}
                  <ellipse cx="120" cy="60" rx="30" ry="20" fill="#1e293b" />
                  {/* Labels */}
                  <text x="120" y="65" fontSize="8" fill="white" textAnchor="middle">Fusion Zone</text>
                  <text x="185" y="55" fontSize="8" fill="#ef4444" textAnchor="middle">HAZ</text>
                  <text x="30" y="95" fontSize="8" fill="#475569" textAnchor="middle">Base Metal</text>
                </svg>
                <p className="mt-4 text-xs text-center text-slate-500">Visualization of the fusion zone vs the heat-affected zone (HAZ).</p>
              </div>
            </div>
          </div>
        );

      case 'techniques':
        const techs = [
          {
            name: "SMAW (Shielded Metal)",
            aka: "Stick / Arc Welding",
            electrode: "Consumable Rod",
            shielding: "Flux coating produces gas",
            use: "Structural steel on site"
          },
          {
            name: "GMAW (Gas Metal)",
            aka: "MIG Welding",
            electrode: "Consumable Wire",
            shielding: "External gas (e.g. Argon)",
            use: "Production environments"
          },
          {
            name: "GTAW (Gas Tungsten)",
            aka: "TIG Welding",
            electrode: "Non-consumable Tungsten",
            shielding: "External gas (e.g. Argon)",
            use: "High quality & control"
          },
          {
            name: "Gas Welding",
            aka: "Oxyacetylene",
            electrode: "Separate Rod (Filler)",
            shielding: "CO₂ from burning fuel",
            use: "Repair & light fabrication"
          }
        ];

        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">2.2 Common Welding Techniques</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {techs.map((t, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{t.name}</h3>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{t.aka}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-500">Electrode:</div>
                    <div>{t.electrode}</div>
                    <div className="text-slate-500">Shielding:</div>
                    <div>{t.shielding}</div>
                    <div className="text-slate-500">Typical Use:</div>
                    <div>{t.use}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm italic">
              <strong>Note:</strong> MIG and TIG are pronounced as individual words (acronyms), not initialisms.
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">3. Grammar Focus: Cause & Result</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl space-y-4">
                <p className="text-slate-600 dark:text-slate-400">Scientific processes in engineering often use the present simple and specific connectors.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm border-t-4 border-blue-400">
                    <div className="font-bold text-blue-500 mb-1">When + Clause</div>
                    <p className="text-sm">"<strong>When</strong> heated, flux produces a shielding gas."</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm border-t-4 border-green-400">
                    <div className="font-bold text-green-500 mb-1">As a result of + Noun</div>
                    <p className="text-sm">"<strong>As a result of</strong> contraction, stress occurs."</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm border-t-4 border-purple-400">
                    <div className="font-bold text-purple-500 mb-1">Simple Present</div>
                    <p className="text-sm">"The heat <strong>melts</strong> the edges of the components."</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">4. Technical Vocabulary</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { t: "Fusion", d: "Joining by melting/mixing" },
                  { t: "Weld pool", d: "Liquid metal at the joint" },
                  { t: "Filler", d: "Added metal for the weld" },
                  { t: "Flux", d: "Gas-producing coating" },
                  { t: "Consumable", d: "Used up during process" },
                  { t: "HAZ", d: "Area altered by heat" },
                ].map((item, i) => (
                  <div key={i} className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:bg-slate-50 transition-colors">
                    <div className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-500">{item.t}</div>
                    <div className="text-xs text-slate-500">{item.d}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg flex items-start gap-3 border border-yellow-200 dark:border-yellow-800">
              <HelpCircle className="text-yellow-600 w-5 h-5 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">Test your knowledge of the lesson content below. Check your answers when finished.</p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Exercise 1: Vocabulary Recognition</h3>
              <div className="space-y-3">
                {[
                  { q: "1. Molten metal at the joint is the...", options: ["Filler", "Flux", "Weld pool"], correct: "Weld pool" },
                  { q: "2. The coating that produces shielding gas is...", options: ["Flux", "Electrode", "Base metal"], correct: "Flux" },
                  { q: "3. The area near the weld modified by heat is...", options: ["Fusion zone", "HAZ", "Residual zone"], correct: "HAZ" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <p className="font-medium mb-3">{item.q}</p>
                    <div className="flex gap-4">
                      {item.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleQuizChange(`v${idx}`, opt)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all ${
                            quizAnswers[`v${idx}`] === opt 
                              ? 'bg-blue-500 text-white border-blue-600' 
                              : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {showResults && (
                      <p className={`mt-2 text-sm font-bold ${quizAnswers[`v${idx}`] === item.correct ? 'text-green-500' : 'text-red-500'}`}>
                        {quizAnswers[`v${idx}`] === item.correct ? '✓ Correct' : `✗ Correct answer: ${item.correct}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold">Exercise 2: Sentence Completion</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label>1. Welding permanently joins materials by <input 
                    type="text" 
                    placeholder="..." 
                    className="border-b-2 border-slate-300 dark:bg-slate-800 px-2 outline-none focus:border-blue-500"
                    onChange={(e) => handleQuizChange('s1', e.target.value.toLowerCase())}
                  /> the joint.</label>
                  {showResults && <span className="text-xs text-green-600">Answer: heating</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label>2. In TIG welding, the electrode is <input 
                    type="text" 
                    placeholder="..." 
                    className="border-b-2 border-slate-300 dark:bg-slate-800 px-2 outline-none focus:border-blue-500"
                    onChange={(e) => handleQuizChange('s2', e.target.value.toLowerCase())}
                  /> consumable.</label>
                  {showResults && <span className="text-xs text-green-600">Answer: non (or not)</span>}
                </div>
              </div>
            </section>

            <div className="flex justify-center pt-4">
              <button 
                onClick={() => setShowResults(!showResults)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-transform active:scale-95"
              >
                {showResults ? "Reset Quiz" : "Check My Answers"}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800  top-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md z-10 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-slate-900 border-x border-t border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <main className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-200 dark:border-slate-800 min-h-[600px]">
          {renderTabContent()}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          <p>© 2024 Engineering English - Lesson 28 - Interactive Study Module</p>
        </footer>
      </div>
    </div>
  );
};

export default App;