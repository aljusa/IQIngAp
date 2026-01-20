import React, { useState } from 'react';
import { 
  BookOpen, 
  ClipboardList, 
  Calculator, 
  ShieldAlert, 
  Type, 
  PenTool, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Lightbulb,
  Scale,
  Target,
  DollarSign,
  Settings
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'brief' | 'calculations' | 'risk' | 'vocab' | 'grammar' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const SectionTitle = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 border-b pb-2 border-slate-200">
    {icon && <span className="text-blue-600">{icon}</span>}
    {children}
  </h2>
);

const Card = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {title && <h3 className="text-lg font-semibold text-slate-700 mb-3">{title}</h3>}
    <div className="text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Tab Panels ---

const OverviewPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<BookOpen />}>1. Overview of the Topic</SectionTitle>
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Lesson Goal">
        <p>
          This lesson explains how engineers define design objectives and carry out design calculations 
          to produce <span className="font-semibold text-blue-600">safe</span>, 
          <span className="font-semibold text-blue-600"> effective</span>, and 
          <span className="font-semibold text-blue-600"> cost-efficient</span> design solutions.
        </p>
      </Card>
      <Card title="Key Focus Areas">
        <ul className="space-y-2">
          {['The design brief', 'Technical objectives and constraints', 'Loads, factors of safety, and component sizing', 'Engineering judgment and risk management'].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
      <Lightbulb className="w-6 h-6 text-blue-600 shrink-0" />
      <p className="text-sm text-blue-800">
        <strong>Context:</strong> The source text is based on a manufacturing company’s actual design procedure.
      </p>
    </div>
  </div>
);

const DesignBriefPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<ClipboardList />}>2. Design Objectives and the Design Brief</SectionTitle>
    
    <Card className="bg-gradient-to-r from-slate-50 to-white">
      <h3 className="text-xl font-bold text-slate-800 mb-2">2.1 The Design Brief</h3>
      <p className="mb-4">A formal document drawn up by the project engineer that guides the design team.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
          <span className="block font-bold text-slate-700">Who?</span>
          Project Engineer
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
          <span className="block font-bold text-slate-700">What?</span>
          Technical objectives
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
          <span className="block font-bold text-slate-700">Why?</span>
          Defines limits & goals
        </div>
      </div>
    </Card>

    <h3 className="text-lg font-bold text-slate-700 mt-8 mb-4">2.2 Key Elements</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-xl border-t-4 border-blue-500 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Settings className="w-5 h-5 text-blue-500" />
          <h4 className="font-bold text-slate-800">Function</h4>
        </div>
        <p className="text-sm text-slate-600">Intended use and performance targets (strength, power, durability).</p>
      </div>

      <div className="bg-white p-5 rounded-xl border-t-4 border-red-500 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="w-5 h-5 text-red-500" />
          <h4 className="font-bold text-slate-800">Constraints</h4>
        </div>
        <p className="text-sm text-slate-600">Limits on the design such as maximum size or weight.</p>
      </div>

      <div className="bg-white p-5 rounded-xl border-t-4 border-emerald-500 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-emerald-500" />
          <h4 className="font-bold text-slate-800">Targets</h4>
        </div>
        <p className="text-sm text-slate-600">Comparison with existing models to ensure competitiveness.</p>
      </div>

      <div className="bg-white p-5 rounded-xl border-t-4 border-amber-500 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="w-5 h-5 text-amber-500" />
          <h4 className="font-bold text-slate-800">Budget</h4>
        </div>
        <p className="text-sm text-slate-600">Cost limits to ensure the design is cost-effective.</p>
      </div>
    </div>
  </div>
);

const CalculationsPanel = () => (
  <div className="space-y-8 animate-fadeIn">
    <SectionTitle icon={<Calculator />}>3. Design Calculations</SectionTitle>

    <div className="relative">
      <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200"></div>
      
      {/* Step 1 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2 shadow absolute left-0 md:static">
          1
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 ml-14 md:ml-0 md:w-[45%]">
          <h3 className="font-bold text-lg mb-2 text-slate-800">Specifications & Info</h3>
          <p className="text-slate-600 text-sm">
            Engineers start with drawings and specs describing materials, sizes, and technical requirements.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2 shadow absolute left-0 md:static">
          2
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 ml-14 md:ml-0 md:w-[45%]">
          <h3 className="font-bold text-lg mb-2 text-slate-800">Evaluating Loads</h3>
          <p className="text-slate-600 text-sm mb-2">
            Determine and quantify loads based on a <strong>worst-case scenario</strong> (max possible load).
          </p>
          <div className="text-xs bg-slate-100 p-2 rounded text-slate-500">
            e.g., Aircraft hard landing, Bridge in high winds.
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2 shadow absolute left-0 md:static">
          3
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 ml-14 md:ml-0 md:w-[45%]">
          <h3 className="font-bold text-lg mb-2 text-slate-800">Factors of Safety</h3>
          <p className="text-slate-600 text-sm">
            An extra margin applied to the max load.
            <br />
            <span className="italic text-slate-500">Example: Factor of 1.5 = +50% load capacity.</span>
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:translate-x-1/2 md:group-even:-translate-x-1/2 shadow absolute left-0 md:static">
          4
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 ml-14 md:ml-0 md:w-[45%]">
          <h3 className="font-bold text-lg mb-2 text-slate-800">Sizing Components</h3>
          <p className="text-slate-600 text-sm">
            Calculate required dimensions to ensure components are strong enough without unnecessary cost.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const RiskPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<ShieldAlert />}>4. Engineering Judgment and Risk</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="4.1 Overdesign" className="border-l-4 border-l-amber-400">
        <p className="mb-4">
          Sometimes criticized, overdesign means using excessive factors of safety, which increases cost unnecessarily.
        </p>
        <div className="bg-amber-50 p-3 rounded text-amber-800 text-sm">
          <strong>Key Point:</strong> Text emphasizes that uncertainty is unavoidable, justifying some caution.
        </div>
      </Card>

      <Card title="4.2 Murphy’s Law" className="border-l-4 border-l-slate-600">
        <blockquote className="italic text-lg text-slate-700 mb-4 border-l-2 border-slate-300 pl-4">
          “Anything that can go wrong, will.”
        </blockquote>
        <p className="mb-2">
          This supports a <strong>conservative engineering approach</strong>.
        </p>
        <div className="flex items-center gap-2 mt-4 bg-slate-100 p-3 rounded">
          <span className="font-bold text-slate-800">Idiom:</span>
          <span className="text-blue-600">"Belt and braces"</span>
          <span className="text-slate-500 text-sm">(Designing with extra safety to reduce risk)</span>
        </div>
      </Card>
    </div>
  </div>
);

const VocabPanel = () => {
  const vocab = [
    { term: "Design brief", def: "Document defining objectives and limits of a design" },
    { term: "Constraint", def: "A limitation on the design" },
    { term: "Comparative target", def: "Performance goal relative to existing products" },
    { term: "Specification", def: "Document describing materials and technical requirements" },
    { term: "Load", def: "A force acting on a component" },
    { term: "Worst-case scenario", def: "The most extreme expected condition" },
    { term: "Factor of safety", def: "Extra margin added to design strength" },
    { term: "Overdesign", def: "Designing with unnecessarily high safety margins" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle icon={<Type />}>5. Technical Vocabulary</SectionTitle>
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 font-bold text-slate-700 border-b border-slate-200 w-1/3">Term</th>
              <th className="p-4 font-bold text-slate-700 border-b border-slate-200">Definition</th>
            </tr>
          </thead>
          <tbody>
            {vocab.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-0">
                <td className="p-4 font-medium text-blue-700">{item.term}</td>
                <td className="p-4 text-slate-600">{item.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GrammarPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<PenTool />}>6. Grammar: Verb–Noun Collocations</SectionTitle>
    <p className="text-slate-600">These combinations are standard in professional engineering English.</p>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "draw up a design brief",
        "evaluate loads",
        "apply a factor of safety",
        "size components",
        "exceed limits"
      ].map((collocation, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-center font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default">
          {collocation}
        </div>
      ))}
    </div>

    <h3 className="text-lg font-bold text-slate-800 mt-8 mb-4">7. Practical Examples</h3>
    <div className="space-y-3">
      {[
        "The design brief was drawn up by the project engineer.",
        "The maximum load was quantified using a worst-case scenario.",
        "A factor of safety was applied before sizing the beam.",
        "The component was overdesigned, increasing manufacturing cost."
      ].map((sentence, idx) => (
        <div key={idx} className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded-r text-slate-700">
          {sentence}
        </div>
      ))}
    </div>
  </div>
);

// --- Exercises Interactive Component ---

const ExercisesPanel = () => {
  // Exercise 1 State
  const [ex1Answers, setEx1Answers] = useState<Record<string, string>>({});
  const [ex1Result, setEx1Result] = useState<Record<string, boolean | null>>({});

  const ex1Questions = [
    { id: "q1", term: "Constraint", options: ["Extra design margin", "Document describing materials", "Design limitation", "Extreme condition"], correct: "Design limitation" },
    { id: "q2", term: "Factor of safety", options: ["Extra design margin", "Document describing materials", "Design limitation", "Extreme condition"], correct: "Extra design margin" },
    { id: "q3", term: "Specification", options: ["Extra design margin", "Document describing materials", "Design limitation", "Extreme condition"], correct: "Document describing materials" },
    { id: "q4", term: "Worst-case scenario", options: ["Extra design margin", "Document describing materials", "Design limitation", "Extreme condition"], correct: "Extreme condition" },
  ];

  const checkEx1 = () => {
    const results: Record<string, boolean> = {};
    ex1Questions.forEach(q => {
      results[q.id] = ex1Answers[q.id] === q.correct;
    });
    setEx1Result(results);
  };

  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState({ q1: "", q2: "", q3: "" });
  const [ex2Show, setEx2Show] = useState(false);

  // Exercise 3 State
  const [ex3Input, setEx3Input] = useState("");
  const [ex3Show, setEx3Show] = useState(false);

  return (
    <div className="space-y-10 animate-fadeIn pb-10">
      <SectionTitle icon={<CheckCircle2 />}>8. Exercises</SectionTitle>

      {/* Exercise 1 */}
      <Card title="Exercise 1: Vocabulary (Match the term to its meaning)">
        <div className="space-y-4 mt-4">
          {ex1Questions.map((q) => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-100 pb-4 last:border-0">
              <span className="font-bold text-slate-700 w-40">{q.term}</span>
              <select 
                className={`flex-1 p-2 rounded border ${ex1Result[q.id] === true ? 'border-green-500 bg-green-50' : ex1Result[q.id] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                onChange={(e) => setEx1Answers({...ex1Answers, [q.id]: e.target.value})}
                value={ex1Answers[q.id] || ""}
              >
                <option value="" disabled>Select definition...</option>
                {q.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              {ex1Result[q.id] === true && <CheckCircle2 className="text-green-500 w-5 h-5" />}
              {ex1Result[q.id] === false && <XCircle className="text-red-500 w-5 h-5" />}
            </div>
          ))}
          <button onClick={checkEx1} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Check Answers</button>
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card title="Exercise 2: Sentence Completion">
        <p className="text-sm text-slate-500 mb-4">Complete the sentences using words from the lesson.</p>
        <div className="space-y-4">
          <div className="p-3 bg-slate-50 rounded">
            1. The engineer evaluated the loads using a <input type="text" className="mx-2 p-1 border rounded w-32 text-center" value={ex2Answers.q1} onChange={e => setEx2Answers({...ex2Answers, q1: e.target.value})} /> scenario.
          </div>
          <div className="p-3 bg-slate-50 rounded">
            2. The design must not <input type="text" className="mx-2 p-1 border rounded w-32 text-center" value={ex2Answers.q2} onChange={e => setEx2Answers({...ex2Answers, q2: e.target.value})} /> the maximum weight limit.
          </div>
          <div className="p-3 bg-slate-50 rounded">
            3. A factor of safety was <input type="text" className="mx-2 p-1 border rounded w-32 text-center" value={ex2Answers.q3} onChange={e => setEx2Answers({...ex2Answers, q3: e.target.value})} /> before sizing the component.
          </div>
          
          <button onClick={() => setEx2Show(!ex2Show)} className="text-blue-600 text-sm font-medium hover:underline">
            {ex2Show ? "Hide Answers" : "Show Answers"}
          </button>
          
          {ex2Show && (
            <div className="bg-green-50 p-3 rounded text-green-800 text-sm mt-2">
              <strong>Answers:</strong> 1. worst-case, 2. exceed, 3. applied
            </div>
          )}
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card title="Exercise 3: Applied Writing">
        <p className="mb-2 font-medium">Rewrite the sentence using formal engineering style and passive voice.</p>
        <div className="bg-white p-3 border border-slate-200 rounded text-slate-600 mb-4 italic">
          Original: "The engineer calculated the loads and added a factor of safety."
        </div>
        
        <textarea 
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={3}
          placeholder="Type your rewritten sentence here..."
          value={ex3Input}
          onChange={(e) => setEx3Input(e.target.value)}
        />
        
        <div className="mt-4">
          <button onClick={() => setEx3Show(!ex3Show)} className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition">
            {ex3Show ? "Hide Model Answer" : "Reveal Model Answer"}
          </button>
        </div>

        {ex3Show && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
            <h4 className="font-bold text-green-800 mb-1">Model Answer:</h4>
            <p className="text-green-900">
              The loads were calculated and a factor of safety was applied.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- Main App Component ---

export default function Lesson3App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'brief', label: 'Design Brief', icon: <ClipboardList size={18} /> },
    { id: 'calculations', label: 'Calculations', icon: <Calculator size={18} /> },
    { id: 'risk', label: 'Risk & Judgment', icon: <ShieldAlert size={18} /> },
    { id: 'vocab', label: 'Vocabulary', icon: <Type size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-12">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between pb-2 md:pb-0 md:h-16">
          
          {/* Top Title Section */}
          <div className="flex items-center gap-2 h-16 md:h-auto shrink-0">
            <Settings className="text-blue-400" />
            <h1 className="text-xl font-bold tracking-tight">Engineering English</h1>
          </div>
          
          {/* Scrollable Nav Bar - Visible on all screens */}
          <nav className="flex overflow-x-auto w-full md:w-auto space-x-1 pb-1 md:pb-0 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0
                  ${activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 min-h-[600px]">
          {activeTab === 'overview' && <OverviewPanel />}
          {activeTab === 'brief' && <DesignBriefPanel />}
          {activeTab === 'calculations' && <CalculationsPanel />}
          {activeTab === 'risk' && <RiskPanel />}
          {activeTab === 'vocab' && <VocabPanel />}
          {activeTab === 'grammar' && <GrammarPanel />}
          {activeTab === 'exercises' && <ExercisesPanel />}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
        <p>Design Solutions in Engineering • Educational Material</p>
      </footer>
    </div>
  );
}