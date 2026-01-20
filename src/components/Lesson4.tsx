import React, { useState } from 'react';
import { 
  Ruler, 
  Plane, 
  BookOpen, 
  PenTool, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Info,
  Maximize2,
  Minimize2,
  ArrowUpDown,
  MoveHorizontal
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'dimensions' | 'concepts' | 'grammar' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const SchematicPlane = () => (
  <svg viewBox="0 0 400 300" className="w-full h-64 md:h-80 bg-slate-50 rounded-lg border border-slate-200">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
      </marker>
    </defs>
    
    {/* Body (Fuselage) */}
    <ellipse cx="200" cy="150" rx="30" ry="120" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
    {/* Wings */}
    <path d="M175 120 L20 180 L20 200 L175 160 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    <path d="M225 120 L380 180 L380 200 L225 160 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    {/* Tail */}
    <path d="M185 240 L160 280 L240 280 L215 240 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    {/* Nose */}
    <path d="M180 50 Q200 30 220 50" fill="none" stroke="#64748b" strokeWidth="2" />

    {/* Annotations - Overall Length */}
    <line x1="140" y1="30" x2="140" y2="280" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" />
    <line x1="140" y1="30" x2="140" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
    <text x="120" y="150" fill="#1d4ed8" fontSize="12" textAnchor="end" style={{writingMode: "vertical-rl"}}>Overall Length</text>

    {/* Annotations - Wingspan */}
    <line x1="20" y1="220" x2="380" y2="220" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
    <text x="200" y="235" fill="#b91c1c" fontSize="12" textAnchor="middle">Wingspan</text>
  </svg>
);

const SectionCard = ({ title, children, icon }: { title: string, children: React.ReactNode, icon?: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-2">
      {icon && <span className="text-blue-600">{icon}</span>}
      <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
    </div>
    <div className="p-5 text-slate-600">
      {children}
    </div>
  </div>
);

// --- Tab Contents ---

const OverviewTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Horizontal & Vertical Measurements</h2>
      <p className="text-blue-100 text-lg leading-relaxed">
        This lesson explains how engineers describe and measure linear dimensions, using the example of the Airbus A380.
        It introduces key concepts crucial for engineering drawings and technical descriptions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <SectionCard title="Key Learning Points" icon={<Info size={20}/>}>
        <ul className="space-y-3">
          {[
            "How dimensions are defined and measured",
            "The use of imaginary planes",
            "Differences between external and internal dimensions",
            "Engineering meanings of level, flat, and plumb"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Context: The Airbus A380" icon={<Plane size={20}/>}>
        <p className="mb-4">
          The Airbus A380 serves as our primary example. As a massive engineering feat, precise terminology is required to describe its:
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-slate-100 p-2 rounded text-center">Length</div>
          <div className="bg-slate-100 p-2 rounded text-center">Wingspan</div>
          <div className="bg-slate-100 p-2 rounded text-center">Height</div>
          <div className="bg-slate-100 p-2 rounded text-center">Internal Volume</div>
        </div>
      </SectionCard>
    </div>
  </div>
);

const DimensionsTab = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Maximize2 className="text-blue-600" />
        2.1 Planes in Engineering
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4 text-slate-600">
          <p>In this context, a <strong>plane</strong> is an imaginary surface shown as a line on drawings.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Indicates where measurements start and end.</li>
            <li>Positioned to "strike" (touch) faces, edges, or surfaces.</li>
            <li>Usually Horizontal or Vertical.</li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-48 h-32 border-2 border-dashed border-blue-400 bg-blue-50/50 flex items-center justify-center">
            <span className="text-blue-600 font-mono text-sm">Imaginary Plane</span>
            <div className="absolute -right-1 top-0 bottom-0 w-1 bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <SectionCard title="2.2 Overall Length" icon={<MoveHorizontal size={20} />}>
        <p className="mb-2">Measures total length between front and rear extremities.</p>
        <div className="text-sm bg-yellow-50 p-3 rounded text-yellow-800 border border-yellow-200">
          <strong>Measured:</strong> Along a horizontal plane between two vertical planes (Nose to Tail).
        </div>
      </SectionCard>

      <SectionCard title="2.3 Wingspan" icon={<Maximize2 size={20} />}>
        <p className="mb-2">Total distance spanned by both wings.</p>
        <div className="text-sm bg-yellow-50 p-3 rounded text-yellow-800 border border-yellow-200">
          <strong>Measured:</strong> As a straight line between the two wingtips.
        </div>
      </SectionCard>
      
      <div className="md:col-span-2">
        <SchematicPlane />
        <p className="text-center text-slate-500 text-sm mt-2 italic">Schematic representation of Length vs Wingspan</p>
      </div>

      <SectionCard title="2.4 Overall Height" icon={<ArrowUpDown size={20} />}>
        <p className="mb-2">How tall the aircraft is.</p>
        <div className="text-sm bg-yellow-50 p-3 rounded text-yellow-800 border border-yellow-200">
          <strong>Measured:</strong> Vertically from underside of wheels to a horizontal plane striking the top of the tail.
        </div>
      </SectionCard>

      <SectionCard title="2.5 & 2.6 Fuselage Widths" icon={<Minimize2 size={20} />}>
        <div className="space-y-4">
          <div>
            <strong className="text-slate-800 block">Maximum Fuselage Width (External)</strong>
            <span className="text-sm">Measured horizontally between vertical planes striking outside faces.</span>
          </div>
          <hr />
          <div>
            <strong className="text-slate-800 block">Maximum Cabin Width (Internal)</strong>
            <span className="text-sm">Measured between inside faces. <br/>
            <em>Formula:</em> External Width - (Thickness × 2)</span>
          </div>
        </div>
      </SectionCard>
    </div>
  </div>
);

const ConceptsTab = () => (
  <div className="space-y-6 animate-fadeIn">
    {/* Section 4: Level and Plumb */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <div className="p-2 bg-indigo-200 rounded-lg"><MoveHorizontal size={20} /></div>
          4.1 Level & Flat
        </h3>
        <ul className="space-y-3 text-indigo-800">
          <li className="flex gap-2">
            <ArrowRight size={18} className="mt-1" />
            <span><strong>Level:</strong> Must be horizontal AND flat (smooth).</span>
          </li>
          <li className="flex gap-2">
            <ArrowRight size={18} className="mt-1" />
            <span><strong>Flat:</strong> Does not imply horizontal. A flat surface can be vertical or inclined (sloping).</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
        <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <div className="p-2 bg-emerald-200 rounded-lg"><ArrowUpDown size={20} /></div>
          4.2 Plumb
        </h3>
        <ul className="space-y-3 text-emerald-800">
          <li className="flex gap-2">
            <ArrowRight size={18} className="mt-1" />
            <span><strong>Plumb:</strong> Surfaces that are perfectly vertical (e.g., walls).</span>
          </li>
          <li className="flex gap-2">
            <ArrowRight size={18} className="mt-1" />
            <span><strong>Out of Plumb:</strong> A structure that is slightly inclined from vertical.</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Section 5: Vocab Table */}
    <SectionCard title="5. Technical Vocabulary" icon={<BookOpen size={20} />}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <th className="p-3 border-b border-slate-200">Term</th>
              <th className="p-3 border-b border-slate-200">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
            {[
              { t: "Plane", d: "Imaginary surface used as a reference for measurement" },
              { t: "Horizontal", d: "Parallel to the ground" },
              { t: "Vertical", d: "At a right angle to the horizontal" },
              { t: "Extremity", d: "The furthest end of an object" },
              { t: "Wingspan", d: "Distance between wingtips" },
              { t: "Fuselage", d: "The main body of an aircraft" },
              { t: "Thickness", d: "Distance between inner and outer surfaces" },
              { t: "Plumb", d: "Exactly vertical" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-3 font-semibold text-slate-800">{row.t}</td>
                <td className="p-3">{row.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <h4 className="font-bold text-yellow-800">Abbreviations</h4>
      <p className="text-yellow-700 text-sm">Dimension → <strong>dim</strong> | Dimensions → <strong>dims</strong></p>
    </div>
  </div>
);

const GrammarTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionCard title="6. Passive Voice for Measurements" icon={<PenTool size={20} />}>
      <div className="prose text-slate-600 max-w-none">
        <p>
          Engineering descriptions often use the <strong>passive voice</strong> to focus on the measurement itself, 
          rather than the person performing the action.
        </p>
        
        <div className="grid gap-4 mt-6">
          {[
            "The measurement is taken between two points.",
            "The span is measured as a straight line.",
            "The dimension is measured vertically."
          ].map((sentence, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium text-slate-800">"{sentence}"</p>
              <p className="text-xs text-slate-500 uppercase mt-1 tracking-wide">Focus: The Object/Measurement</p>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="font-bold text-lg mb-4">Practical Examples</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "The overall length is measured along a horizontal plane.",
          "The maximum width is taken between vertical planes.",
          "The wall is slightly out of plumb and must be corrected.",
          "Internal dimensions exclude the thickness of the structure."
        ].map((ex, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded">
            <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
            <span className="text-sm text-slate-700">{ex}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Exercises Interactive Component ---

const ExercisesTab = () => {
  // State for Ex 1
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);

  // State for Ex 2
  const [fillAnswers, setFillAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [fillChecked, setFillChecked] = useState(false);

  // State for Ex 3
  const [showWritingAnswer, setShowWritingAnswer] = useState(false);

  const vocabularyOptions = [
    { id: 'a', text: 'Distance between wingtips' },
    { id: 'b', text: 'Exactly vertical' },
    { id: 'c', text: 'Furthest end' },
    { id: 'd', text: 'Distance between inner and outer surfaces' },
  ];

  const checkMatch = () => setMatchChecked(true);
  const resetMatch = () => { setMatchAnswers({}); setMatchChecked(false); };

  const checkFill = () => setFillChecked(true);
  const resetFill = () => { setFillAnswers({ q1: '', q2: '', q3: '' }); setFillChecked(false); };

  return (
    <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
      
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 1: Vocabulary Match</h3>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">Easy</span>
        </div>
        
        <div className="space-y-4">
          {[
            { term: "Extremity", correct: 'c' },
            { term: "Plumb", correct: 'b' },
            { term: "Wingspan", correct: 'a' },
            { term: "Thickness", correct: 'd' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="font-semibold text-slate-700 w-32">{item.term}</span>
              <select 
                className={`flex-1 p-2 rounded border ${matchChecked 
                  ? (matchAnswers[item.term] === item.correct ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
                  : 'border-slate-300'}`}
                value={matchAnswers[item.term] || ''}
                onChange={(e) => setMatchAnswers({...matchAnswers, [item.term]: e.target.value})}
                disabled={matchChecked}
              >
                <option value="">Select definition...</option>
                {vocabularyOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.text}</option>
                ))}
              </select>
              {matchChecked && (
                matchAnswers[item.term] === item.correct 
                ? <CheckCircle2 className="text-green-500" /> 
                : <XCircle className="text-red-500" />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex gap-3">
          {!matchChecked ? (
            <button onClick={checkMatch} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Check Answers</button>
          ) : (
            <button onClick={resetMatch} className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 transition">Reset</button>
          )}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 2: Sentence Completion</h3>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-bold">Medium</span>
        </div>

        <div className="space-y-4 text-slate-700">
          {[
            { id: 'q1', text: ["The overall height is measured ", " between the wheels and the tail."], ans: "vertically" },
            { id: 'q2', text: ["The dimension is taken between two ", " planes."], ans: "vertical" }, // or horizontal, but context implies length/width usually
            { id: 'q3', text: ["Internal width equals external width minus the ", " of the fuselage."], ans: "thickness" },
          ].map((q) => (
            <div key={q.id} className="p-3 bg-slate-50 rounded-lg">
              {q.text[0]}
              <input 
                type="text" 
                className={`mx-2 border-b-2 bg-transparent outline-none text-center w-32 font-medium
                  ${fillChecked 
                    ? (fillAnswers[q.id as keyof typeof fillAnswers].toLowerCase().trim() === q.ans ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                    : 'border-slate-400 focus:border-blue-500'}`}
                value={fillAnswers[q.id as keyof typeof fillAnswers]}
                onChange={(e) => setFillAnswers({...fillAnswers, [q.id]: e.target.value})}
                disabled={fillChecked}
              />
               {q.text[1]}
               {fillChecked && fillAnswers[q.id as keyof typeof fillAnswers].toLowerCase().trim() !== q.ans && (
                 <span className="block text-xs text-green-600 font-bold mt-1">Answer: {q.ans}</span>
               )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {!fillChecked ? (
            <button onClick={checkFill} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Check Answers</button>
          ) : (
            <button onClick={resetFill} className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 transition">Reset</button>
          )}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Exercise 3: Applied Writing</h3>
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-bold">Challenging</span>
        </div>

        <p className="mb-4 text-slate-600">Rewrite the sentence using formal engineering style and passive voice.</p>
        
        <div className="bg-slate-100 p-4 rounded mb-4">
          <p className="font-mono text-sm text-slate-500 mb-1">Original:</p>
          <p className="font-medium text-slate-800">"Engineers measure the wingspan between the two wingtips."</p>
        </div>

        <textarea 
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
          rows={3}
          placeholder="Type your rewritten sentence here..."
        ></textarea>

        <div className="mt-4">
          <button 
            onClick={() => setShowWritingAnswer(!showWritingAnswer)} 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
          >
            {showWritingAnswer ? "Hide Suggested Answer" : "Show Suggested Answer"}
          </button>
          
          {showWritingAnswer && (
            <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded animate-fadeIn">
              <span className="block text-xs text-green-800 uppercase font-bold mb-1">Suggestion</span>
              <p className="text-green-900">"The wingspan is measured between the two wingtips."</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

// --- Main App Component ---

const Lesson4App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'dimensions', label: 'Dimensions', icon: <Ruler size={18} /> },
    { id: 'concepts', label: 'Concepts', icon: <BookOpen size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Plane className="text-blue-400" />
              Engineering English
            </h1>
            <p className="text-slate-400 text-sm mt-1">Lesson: Horizontal and Vertical Measurements</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">A380 Study</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto p-4 md:p-6">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-4 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-white text-blue-600 shadow-md transform scale-105' 
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Panel */}
        <div className="transition-all duration-300">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'dimensions' && <DimensionsTab />}
          {activeTab === 'concepts' && <ConceptsTab />}
          {activeTab === 'grammar' && <GrammarTab />}
          {activeTab === 'exercises' && <ExercisesTab />}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto p-6 text-center text-slate-400 text-sm border-t border-slate-200 mt-8">
        <p>© 2024 Engineering English Module. Based on standard technical documentation guidelines.</p>
      </footer>
    </div>
  );
};

export default Lesson4App;