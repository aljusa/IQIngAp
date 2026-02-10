import React, { useState } from 'react';
import { 
  BookOpen, 
  Anchor, 
  Move, 
  Hammer, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  PenTool,
  Menu,
  X
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'concepts' | 'grammar' | 'vocab' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Data ---

const VOCAB_LIST = [
  { term: 'Anchor', def: 'Fix securely to prevent movement' },
  { term: 'Embedded', def: 'Set firmly inside another material' },
  { term: 'Play', def: 'Small amount of free movement' },
  { term: 'Plumbed', def: 'Made exactly vertical' },
  { term: 'Shim', def: 'Thin spacer used for adjustment' },
  { term: 'Grout', def: 'Cementitious material used to fill gaps' },
];

const MATCHING_EXERCISE = [
  { id: '1', term: 'Base plate', correctMatch: 'c', options: ['a', 'b', 'c', 'd'] },
  { id: '2', term: 'Play', correctMatch: 'a', options: ['a', 'b', 'c', 'd'] },
  { id: '3', term: 'Wedge', correctMatch: 'd', options: ['a', 'b', 'c', 'd'] },
  { id: '4', term: 'Grout', correctMatch: 'b', options: ['a', 'b', 'c', 'd'] },
];

const MATCHING_DEFINITIONS = {
  a: 'Allows small positional adjustment',
  b: 'Fills gaps and seals the joint',
  c: 'Plate fixed to the bottom of a column',
  d: 'Used to adjust and plumb the column'
};

const FILL_BLANK_EXERCISE = [
  { id: 1, text: "The bolts are ___ in the concrete foundation.", answer: "embedded" },
  { id: 2, text: "Cone-shaped holes allow the bolts a small amount of ___.", answer: "play" },
  { id: 3, text: "Steel wedges act as packers or ___.", answer: "spacers" }, // accepting spacers or shims in logic
  { id: 4, text: "Grout protects the bolts from ___.", answer: "corrosion" },
];

// --- Components ---

const Diagram = () => (
  <div className="flex justify-center my-8">
    <div className="relative w-full max-w-md bg-white p-4 rounded-xl shadow-inner border border-slate-200">
      <h4 className="text-center text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">Structural Diagram: Column Base</h4>
      <svg viewBox="0 0 400 350" className="w-full h-auto">
        {/* Concrete Foundation */}
        <path d="M 20 250 L 380 250 L 380 340 L 20 340 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
        <text x="200" y="320" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Concrete Foundation</text>

        {/* Bolts (Embedded part) */}
        <line x1="100" y1="250" x2="100" y2="300" stroke="#334155" strokeWidth="4" strokeDasharray="5,3" />
        <line x1="300" y1="250" x2="300" y2="300" stroke="#334155" strokeWidth="4" strokeDasharray="5,3" />

        {/* Grout Layer */}
        <rect x="50" y="230" width="300" height="20" fill="#cbd5e1" stroke="#64748b" />
        <text x="360" y="245" fill="#475569" fontSize="12">Grout</text>
        <line x1="355" y1="240" x2="320" y2="240" stroke="#475569" strokeWidth="1" />

        {/* Shims/Wedges */}
        <polygon points="80,230 120,230 120,225" fill="#f59e0b" stroke="#b45309" />
        <polygon points="280,230 320,230 280,225" fill="#f59e0b" stroke="#b45309" />
        <text x="360" y="220" fill="#b45309" fontSize="12">Shims</text>
        <line x1="355" y1="215" x2="310" y2="228" stroke="#b45309" strokeWidth="1" />

        {/* Base Plate */}
        <rect x="60" y="210" width="280" height="20" fill="#334155" stroke="black" />
        <text x="360" y="200" fill="#334155" fontSize="12">Base Plate</text>
        <line x1="355" y1="195" x2="300" y2="215" stroke="#334155" strokeWidth="1" />

        {/* Column */}
        <rect x="160" y="50" width="80" height="160" fill="#475569" stroke="black" />
        <line x1="200" y1="50" x2="200" y2="210" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
        <text x="200" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Steel Column</text>

        {/* Bolts (Top part) */}
        <rect x="90" y="190" width="20" height="40" fill="#cbd5e1" stroke="black" rx="2" />
        <rect x="290" y="190" width="20" height="40" fill="#cbd5e1" stroke="black" rx="2" />
        
        {/* Play Indication */}
        <circle cx="100" cy="220" r="15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" opacity="0.6" />
        <text x="40" y="180" fill="#ef4444" fontSize="12">"Play"</text>
        <path d="M 50 185 Q 70 200 85 210" fill="none" stroke="#ef4444" markerEnd="url(#arrow)" />
      </svg>
    </div>
  </div>
);

// --- Section Components ---

const OverviewSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Lesson Overview</h2>
      <p className="text-slate-700 leading-relaxed">
        This lesson explains how engineering components are interconnected, with a specific focus on 
        attaching, supporting, and fitting together a <strong>steel column</strong> and a <strong>concrete foundation</strong>.
        The language reflects civil and structural engineering practice, especially regarding foundations and steel erection.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-500" />
          Focus Areas
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Component interconnection methods</li>
          <li>Civil/Structural engineering terminology</li>
          <li>Foundation and Steel Erection processes</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-4 bg-slate-100 rounded-full mb-3">
             <Anchor className="w-10 h-10 text-slate-600" />
          </div>
          <p className="font-semibold text-slate-700">Structural Integrity</p>
        </div>
      </div>
    </div>
  </div>
);

const ConceptsSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="grid lg:grid-cols-2 gap-8">
      
      {/* 2.1 Attaching and Supporting */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 border-b pb-2">2.1 Attaching and Supporting</h2>
        <p className="text-slate-600">Engineering assemblies rely on controlled connections.</p>
        
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-bold text-blue-800 mb-2">Functions</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded h-fit">Support</span>
              <span className="text-sm text-slate-600">The foundation supports the column by preventing downward movement.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded h-fit">Anchoring</span>
              <span className="text-sm text-slate-600">The column is anchored to stop it from sliding or lifting.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded h-fit">Connection</span>
              <span className="text-sm text-slate-600">The joint where the steel column meets the concrete foundation.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="font-bold text-slate-700 text-sm uppercase mb-2">Verbs for Interconnection</h4>
          <div className="flex flex-wrap gap-2">
            {['Attached', 'Connected', 'Joined', 'Fastened', 'Fixed', 'Held'].map(verb => (
              <span key={verb} className="px-3 py-1 bg-white border border-slate-300 rounded-full text-xs font-medium text-slate-600">
                {verb}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">Often used with "to" or "together".</p>
        </div>
      </div>

      {/* 2.2 Fitting Together */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 border-b pb-2">2.2 Fitting Together</h2>
        
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
          <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <Move className="w-4 h-4" /> Bolt Adjustment & Play
          </h3>
          <ul className="list-disc list-inside text-sm text-amber-900 space-y-2">
            <li><strong>Cone-shaped holes:</strong> Formed in concrete to accommodate bolts.</li>
            <li><strong>Play:</strong> A small amount of free movement allowing bolts to slot through holes and enable adjustment.</li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
           <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4" /> Packers, Spacers & Shims
          </h3>
          <p className="text-sm text-emerald-800 mb-2">Steel wedges (packers/shims) are placed below the base plate.</p>
          <ul className="list-disc list-inside text-sm text-emerald-800">
            <li>Allow adjustment</li>
            <li>Enable the column to be <strong>plumbed</strong> (made vertical)</li>
          </ul>
        </div>

        <div className="bg-slate-800 text-white p-5 rounded-lg">
           <h3 className="font-bold mb-2 flex items-center gap-2">
            <Hammer className="w-4 h-4" /> Grouting
          </h3>
          <p className="text-sm text-slate-300 mb-2">Cement placed beneath the base plate after alignment.</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-700 p-2 rounded">Fills gaps</div>
            <div className="bg-slate-700 p-2 rounded">Fills bolt holes</div>
            <div className="bg-slate-700 p-2 rounded">Seals against rain</div>
            <div className="bg-slate-700 p-2 rounded">Protects from corrosion</div>
          </div>
        </div>
      </div>

    </div>
    
    <Diagram />
  </div>
);

const GrammarSection = () => (
  <div className="space-y-6 animate-fadeIn max-w-3xl mx-auto">
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">3.1 Passive Voice in Construction</h2>
      <p className="text-slate-600 mb-6">
        The text mainly uses the <strong>passive voice</strong>, which is standard in engineering descriptions.
        It focuses on processes and results rather than the person performing the action.
      </p>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
          <div className="mt-1 bg-indigo-200 p-1 rounded">
            <PenTool className="w-4 h-4 text-indigo-700" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-900">Example 1</h4>
            <p className="text-slate-700 italic">"Bolts <strong>are attached</strong> to a plate."</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
          <div className="mt-1 bg-indigo-200 p-1 rounded">
             <PenTool className="w-4 h-4 text-indigo-700" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-900">Example 2</h4>
            <p className="text-slate-700 italic">"Cone-shaped holes <strong>are formed</strong> in the concrete."</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
          <div className="mt-1 bg-indigo-200 p-1 rounded">
             <PenTool className="w-4 h-4 text-indigo-700" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-900">Example 3</h4>
            <p className="text-slate-700 italic">"Grout is then <strong>placed</strong> beneath the base plate."</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-slate-100 rounded text-sm text-slate-600 text-center">
        <strong>Why?</strong> To de-emphasize the worker and emphasize the engineering result.
      </div>
    </div>
  </div>
);

const VocabSection = () => (
  <div className="animate-fadeIn">
    <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Technical Vocabulary</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {VOCAB_LIST.map((item, idx) => (
        <div key={idx} className="bg-white group hover:shadow-md transition-shadow p-6 rounded-xl border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">{item.term}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.def}</p>
        </div>
      ))}
    </div>
  </div>
);

const ExamplesSection = () => (
  <div className="animate-fadeIn max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Practical Engineering Examples</h2>
    <div className="grid gap-4">
      {[
        "Base plates are commonly used to transfer loads from steel columns to concrete foundations.",
        "Bolt play allows minor positioning corrections during erection.",
        "Shims and wedges are essential for accurate vertical alignment.",
        "Grouting completes the connection and protects embedded fasteners."
      ].map((example, idx) => (
        <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
            {idx + 1}
          </div>
          <p className="text-slate-700 font-medium">{example}</p>
        </div>
      ))}
    </div>
  </div>
);

const ExercisesSection = () => {
  const [matchState, setMatchState] = useState<Record<string, string>>({});
  const [matchResults, setMatchResults] = useState<Record<string, boolean | null>>({});
  
  const [fillState, setFillState] = useState<Record<number, string>>({});
  const [fillResults, setFillResults] = useState<Record<number, boolean | null>>({});

  const [showWrittenAnswers, setShowWrittenAnswers] = useState(false);

  const checkMatching = () => {
    const results: Record<string, boolean> = {};
    MATCHING_EXERCISE.forEach(ex => {
      results[ex.id] = matchState[ex.id] === ex.correctMatch;
    });
    setMatchResults(results);
  };

  const checkFill = () => {
    const results: Record<number, boolean> = {};
    FILL_BLANK_EXERCISE.forEach(ex => {
      const val = fillState[ex.id]?.toLowerCase().trim() || "";
      // Allow 'shm' or 'spacer' for question 3 based on logic, though strict answer key says spacers/shims
      const isCorrect = ex.id === 3 
        ? (val.includes("shim") || val.includes("spacer")) 
        : val === ex.answer;
      results[ex.id] = isCorrect;
    });
    setFillResults(results);
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-800">Exercise 1: Vocabulary Recognition</h3>
          <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">Easy</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-500 uppercase text-xs tracking-wider">Terms</h4>
            {MATCHING_EXERCISE.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <span className="font-medium text-slate-700">{item.term}</span>
                <select 
                  className={`border rounded p-1 text-sm ${matchResults[item.id] === true ? 'border-green-500 bg-green-50' : matchResults[item.id] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  value={matchState[item.id] || ''}
                  onChange={(e) => setMatchState({...matchState, [item.id]: e.target.value})}
                >
                  <option value="">Select...</option>
                  {item.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="space-y-4">
             <h4 className="font-semibold text-slate-500 uppercase text-xs tracking-wider">Definitions</h4>
             <div className="space-y-2 text-sm text-slate-600">
               {Object.entries(MATCHING_DEFINITIONS).map(([key, def]) => (
                 <div key={key} className="flex gap-2">
                   <span className="font-bold text-slate-400">{key}.</span>
                   <span>{def}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
        <button 
          onClick={checkMatching}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Check Answers
        </button>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-800">Exercise 2: Sentence Completion</h3>
          <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
        </div>

        <div className="space-y-4">
          {FILL_BLANK_EXERCISE.map(ex => (
            <div key={ex.id} className="p-3 bg-slate-50 rounded border border-slate-100">
              <p className="text-slate-700 leading-7">
                {ex.id}. {ex.text.split('___')[0]}
                <input 
                  type="text" 
                  className={`mx-2 border-b-2 outline-none px-1 py-0 w-32 text-center bg-transparent ${fillResults[ex.id] === true ? 'border-green-500 text-green-700' : fillResults[ex.id] === false ? 'border-red-500 text-red-700' : 'border-slate-400'}`}
                  placeholder="type here..."
                  value={fillState[ex.id] || ''}
                  onChange={(e) => setFillState({...fillState, [ex.id]: e.target.value})}
                />
                {ex.text.split('___')[1]}
              </p>
            </div>
          ))}
        </div>
        <button 
          onClick={checkFill}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Check Answers
        </button>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-800">Exercise 3: Applied Technical Description</h3>
          <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded">Challenging</span>
        </div>

        <div className="space-y-6">
          {[
            "Describe how a base plate is anchored to a concrete foundation.",
            "Explain why play is required in the bolt holes during installation.",
            "Describe the purpose of grout in a column base connection."
          ].map((prompt, idx) => (
            <div key={idx} className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">{idx + 1}. {prompt}</label>
              <textarea 
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                rows={3}
                placeholder="Write your description here..."
              ></textarea>
              {showWrittenAnswers && (
                <div className="bg-green-50 p-3 rounded text-sm text-green-800 border border-green-200">
                  <strong>Suggested Answer:</strong> 
                  {idx === 0 && " Base plates are fixed using bolts embedded in the concrete. The bolts pass through the plate and are fastened to it."}
                  {idx === 1 && " Play (gap around the bolt) allows the plate to move slightly so it can be aligned correctly before tightening."}
                  {idx === 2 && " Grout fills the gap between the plate and concrete, supports the load, and seals the connection against corrosion."}
                </div>
              )}
            </div>
          ))}
        </div>
        <button 
          onClick={() => setShowWrittenAnswers(!showWrittenAnswers)}
          className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium"
        >
          {showWrittenAnswers ? 'Hide Suggested Answers' : 'Show Suggested Answers'}
        </button>
      </div>

    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'concepts', label: 'Key Concepts', icon: <Layers className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool className="w-4 h-4" /> },
    { id: 'vocab', label: 'Vocabulary', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'examples', label: 'Examples', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'exercises', label: 'Exercises', icon: <Hammer className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection />;
      case 'concepts': return <ConceptsSection />;
      case 'grammar': return <GrammarSection />;
      case 'vocab': return <VocabSection />;
      case 'examples': return <ExamplesSection />;
      case 'exercises': return <ExercisesSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg md:text-xl leading-tight text-slate-900">Engineering English</h1>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Lesson 25: Interconnection</p>
              </div>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 overflow-x-auto pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-6 py-4 text-sm font-medium border-l-4 transition-colors
                  ${activeTab === tab.id 
                    ? 'border-blue-600 text-blue-900 bg-blue-50' 
                    : 'border-transparent text-slate-600 hover:bg-slate-50'
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="min-h-[500px]">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm">© Engineering English Module • Lesson 25</p>
          <p className="text-xs mt-2 text-slate-600">Educational material for demonstration purposes.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;