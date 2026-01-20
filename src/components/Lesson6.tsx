import React, { useState } from 'react';
import { Circle, Ruler, ArrowRight, Settings, BookOpen, PenTool, CheckCircle, Info, MoveDiagonal, ArrowDownToLine, MousePointerClick } from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'dimensions' | 'deformation' | 'pipes' | 'vocabulary' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">{children}</h2>
);

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-blue-700 bg-blue-50 px-1 rounded">{children}</span>
);

// --- Content Panels ---

const OverviewPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>1. Overview of the Topic</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          This lesson explains how engineers describe and measure circular dimensions. 
          Understanding these concepts is critical for fields ranging from automotive engineering to civil infrastructure.
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Key Applications:</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Tyres and wheels (Automotive)</li>
            <li>Deformation of circular shapes (Materials)</li>
            <li>Pipes and drainage (Civil Engineering)</li>
          </ul>
        </div>
        <p>
          It introduces key geometric terms such as <Highlight>radius</Highlight>, <Highlight>diameter</Highlight>, 
          <Highlight>circumference</Highlight>, <Highlight>arc</Highlight>, and <Highlight>chord</Highlight>.
        </p>
      </div>
      <div className="flex justify-center bg-blue-50 p-8 rounded-xl">
        <div className="relative w-64 h-64">
           {/* Abstract Gear/Wheel Graphic */}
           <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
             <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
             <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
             <line x1="50" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
             <text x="60" y="45" fontSize="8" fill="currentColor">Radius</text>
             <circle cx="50" cy="50" r="3" fill="currentColor" />
           </svg>
      </div>
      </div>
    </div>
  </div>
);

const DimensionsPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>2. Key Dimensions of Circles</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Circle size={20} className="text-blue-500" /> 2.1 Inner and Outer Circles
          </h3>
          <p className="text-slate-600 mb-3">In the tyre example:</p>
          <ul className="space-y-2 text-slate-700 ml-4 list-disc">
            <li>The <strong>outer circle</strong> represents the outside of the tyre.</li>
            <li>The <strong>inner circle</strong> represents the inside of the tyre (and outside of the wheel).</li>
          </ul>
          <div className="mt-4 bg-yellow-50 p-3 rounded text-sm text-yellow-800 border-l-4 border-yellow-400">
            <strong>Key Concept:</strong> Because both circles share the same centre, they are called <span className="font-bold">concentric circles</span>.
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Ruler size={20} className="text-green-500" /> 2.2 Radius and Circumference
          </h3>
          <ul className="space-y-2 text-slate-700 ml-4 list-disc">
            <li>The <strong>radius</strong> is measured from the centre to the edge.</li>
            <li>Points on the edge form the <strong>circumference</strong>.</li>
            <li>All radii are equal, meaning the tyre has a constant radius.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-50 p-8 rounded-xl border border-slate-200">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Visual Model: Concentric Circles</h4>
        <svg viewBox="0 0 200 200" className="w-64 h-64">
          {/* Outer Circle */}
          <circle cx="100" cy="100" r="90" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" />
          <text x="100" y="25" textAnchor="middle" className="text-xs font-bold fill-blue-900">Outer Circle (Tyre)</text>
          
          {/* Inner Circle */}
          <circle cx="100" cy="100" r="50" fill="#fff" stroke="#334155" strokeWidth="3" />
          <text x="100" y="95" textAnchor="middle" className="text-xs font-bold fill-slate-700">Inner Circle</text>
          <text x="100" y="110" textAnchor="middle" className="text-xs font-bold fill-slate-700">(Wheel)</text>
          
          {/* Center */}
          <circle cx="100" cy="100" r="3" fill="#ef4444" />
          
          {/* Radius Line */}
          <line x1="100" y1="100" x2="190" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
          <text x="145" y="95" textAnchor="middle" className="text-xs font-bold fill-red-600">Radius</text>
        </svg>
      </div>
    </div>
  </div>
);

const DeformationPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>3. Deformation of a Tyre</SectionTitle>

    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
          <h3 className="text-lg font-bold text-orange-800 mb-2">3.1 Change in Shape</h3>
          <p className="text-slate-700 mb-2">
            When a tyre is fitted and compressed against the road:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-2">
            <li>The wheel (inner circle) remains round.</li>
            <li>The tyre (outer circle) <strong>deforms</strong>.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">3.2 Arc vs. Chord</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
              <span className="block text-xs font-bold text-slate-400 uppercase">Before Load</span>
              <p className="font-semibold text-blue-600 text-lg">Arc</p>
              <p className="text-sm text-slate-600">Curved line on the circumference.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
              <span className="block text-xs font-bold text-slate-400 uppercase">After Load</span>
              <p className="font-semibold text-red-600 text-lg">Chord</p>
              <p className="text-sm text-slate-600">Straight line between two points.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 italic mt-2">
            Note: The length of an arc and a chord between the same points are different.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-200">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Deformation Diagram</h4>
        <svg viewBox="0 0 200 160" className="w-full max-w-xs">
          {/* Ground */}
          <line x1="0" y1="150" x2="200" y2="150" stroke="#334155" strokeWidth="4" />
          <text x="180" y="145" className="text-xs fill-slate-500">Road</text>

          {/* Deformed Tyre Shape */}
          <path d="M 20,100 A 80,80 0 1 1 180,100 L 140,150 L 60,150 Z" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Simplified Visual for Lesson */}
          {/* Standard Circle */}
          <circle cx="100" cy="80" r="60" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
          <text x="100" y="15" textAnchor="middle" className="text-xs fill-slate-400">Original Shape</text>

          {/* Deformed part */}
          <path d="M 45,100 A 60,60 0 1 1 155,100 L 130,130 L 70,130 Z" fill="#eff6ff" stroke="#2563eb" strokeWidth="3" />
          
          {/* Chord Line */}
          <line x1="70" y1="130" x2="130" y2="130" stroke="#ef4444" strokeWidth="4" />
          <text x="100" y="145" textAnchor="middle" className="text-xs font-bold fill-red-600">Chord (A to B)</text>

          {/* Arc Line (Projected) */}
          <path d="M 70,130 Q 100,160 130,130" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="2 2" />
          <text x="100" y="115" textAnchor="middle" className="text-xs font-bold fill-blue-600">Arc (Original)</text>

          {/* Points */}
          <circle cx="70" cy="130" r="3" fill="#0f172a" />
          <text x="60" y="130" className="text-xs font-bold">A</text>
          <circle cx="130" cy="130" r="3" fill="#0f172a" />
          <text x="140" y="130" className="text-xs font-bold">B</text>
        </svg>
      </div>
    </div>
  </div>
);

const PipesPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>4. Pipe Dimensions</SectionTitle>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Text Content */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">4.1 Inside & Outside Diameters</h3>
          <dl className="space-y-3">
            <div className="bg-white p-3 rounded border-l-4 border-purple-500 shadow-sm">
              <dt className="font-bold text-purple-900">Inside Diameter (ID)</dt>
              <dd className="text-slate-600 text-sm">Width of the inside. Also called the <span className="font-semibold">bore</span>.</dd>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-indigo-500 shadow-sm">
              <dt className="font-bold text-indigo-900">Outside Diameter (OD)</dt>
              <dd className="text-slate-600 text-sm">Width of the outside of the pipe.</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">4.2 Crown & Invert</h3>
          <p className="text-sm text-slate-500 mb-2">Common terms in civil and drainage engineering for horizontal pipes.</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-sky-50 rounded text-center">
              <ArrowDownToLine className="mx-auto mb-1 text-sky-600" size={20} />
              <span className="font-bold text-sky-800 block">Crown</span>
              <span className="text-xs text-sky-600">Top of outside</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded text-center">
              <MoveDiagonal className="mx-auto mb-1 text-emerald-600" size={20} />
              <span className="font-bold text-emerald-800 block">Invert</span>
              <span className="text-xs text-emerald-600">Bottom of inside</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="flex items-center justify-center bg-slate-900 rounded-xl p-8 text-white">
        <div className="relative w-64 h-64">
           <svg viewBox="0 0 200 200" className="w-full h-full">
             {/* Pipe Body */}
             <circle cx="100" cy="100" r="80" fill="#475569" stroke="#94a3b8" strokeWidth="2" /> {/* OD */}
             <circle cx="100" cy="100" r="60" fill="#0f172a" stroke="#000" strokeWidth="1" /> {/* ID */}

             {/* Crown */}
             <line x1="100" y1="20" x2="100" y2="5" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
             <text x="100" y="10" textAnchor="middle" dy="-5" className="text-xs font-bold fill-sky-400">Crown</text>

             {/* Invert */}
             <line x1="100" y1="160" x2="100" y2="190" stroke="#34d399" strokeWidth="2" />
             <text x="100" y="195" textAnchor="middle" dy="5" className="text-xs font-bold fill-emerald-400">Invert</text>

             {/* OD Line */}
             <line x1="20" y1="100" x2="180" y2="100" stroke="#818cf8" strokeWidth="1" />
             <line x1="20" y1="95" x2="20" y2="105" stroke="#818cf8" strokeWidth="1" />
             <line x1="180" y1="95" x2="180" y2="105" stroke="#818cf8" strokeWidth="1" />
             <text x="160" y="90" className="text-xs font-bold fill-indigo-400">OD</text>

             {/* ID Line */}
             <line x1="40" y1="115" x2="160" y2="115" stroke="#c084fc" strokeWidth="1" />
             <line x1="40" y1="110" x2="40" y2="120" stroke="#c084fc" strokeWidth="1" />
             <line x1="160" y1="110" x2="160" y2="120" stroke="#c084fc" strokeWidth="1" />
             <text x="100" y="125" textAnchor="middle" dy="10" className="text-xs font-bold fill-purple-400">ID (Bore)</text>
           </svg>
        </div>
      </div>
    </div>
  </div>
);

const VocabularyPanel: React.FC = () => {
  const vocab = [
    { term: "Concentric", def: "Sharing the same centre" },
    { term: "Radius", def: "Distance from centre to circumference" },
    { term: "Diameter", def: "Distance across a circle through its centre" },
    { term: "Circumference", def: "The edge of a circle" },
    { term: "Arc", def: "Curved section of a circle" },
    { term: "Chord", def: "Straight line between two points on a circle" },
    { term: "Deform", def: "Change shape under load" },
    { term: "Inside diameter (ID)", def: "Internal width of a pipe" },
    { term: "Outside diameter (OD)", def: "External width of a pipe" },
    { term: "Crown", def: "Top of the outside of a pipe" },
    { term: "Invert", def: "Bottom of the inside of a pipe" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle>5. Technical Vocabulary</SectionTitle>
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-slate-200">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
            <tr>
              <th className="px-6 py-3">Term</th>
              <th className="px-6 py-3">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vocab.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 font-semibold text-blue-700">{item.term}</td>
                <td className="px-6 py-3">{item.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GrammarPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>6. Grammar Focus: Defining Changes</SectionTitle>
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
      <h3 className="text-lg font-bold text-indigo-900 mb-2">Cause–Effect Language</h3>
      <p className="text-indigo-800 mb-4">
        Engineering explanations frequently use specific structures to describe behavior under load.
      </p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-bold mb-1">Example 1</p>
          <p className="text-lg text-slate-800">"This <span className="text-indigo-600 font-bold">means</span> its geometry changes."</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-bold mb-1">Example 2</p>
          <p className="text-lg text-slate-800">"Before deformation, this part <span className="text-indigo-600 font-bold">forms</span> an arc."</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-bold mb-1">Example 3</p>
          <p className="text-lg text-slate-800">"After deformation, it <span className="text-indigo-600 font-bold">becomes</span> a chord."</p>
        </div>
      </div>
    </div>
  </div>
);

const ExamplesPanel: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>7. Practical Examples (Context)</SectionTitle>
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        "The inner and outer diameters form concentric circles.",
        "All points on the circumference are at a constant radius.",
        "Under load, the tyre deforms and a chord is formed.",
        "The pipe specification lists both ID and OD values."
      ].map((text, i) => (
        <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
          <p className="text-slate-700">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

const ExercisesPanel: React.FC = () => {
  // Ex 1 State
  const [matchAnswers, setMatchAnswers] = useState<{[key: string]: string}>({});
  const [matchFeedback, setMatchFeedback] = useState<{[key: string]: boolean | null}>({});

  // Ex 2 State
  const [fillAnswers, setFillAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [fillResult, setFillResult] = useState<boolean | null>(null);

  // Ex 3 State
  const [showWritingModel, setShowWritingModel] = useState(false);

  // Ex 1 Data
  const pairs = [
    { id: 'q1', term: 'Chord', correct: 'b' },
    { id: 'q2', term: 'Arc', correct: 'a' },
    { id: 'q3', term: 'Bore', correct: 'c' },
    { id: 'q4', term: 'Crown', correct: 'd' },
  ];
  const options = [
    { id: 'a', text: 'Curved part of a circle' },
    { id: 'b', text: 'Straight line between two points' },
    { id: 'c', text: 'Inside diameter of a pipe' },
    { id: 'd', text: 'Top of the outside of a pipe' },
  ];

  const handleMatchCheck = (id: string, correct: string) => {
    const isCorrect = matchAnswers[id] === correct;
    setMatchFeedback(prev => ({ ...prev, [id]: isCorrect }));
  };

  const checkFill = () => {
    const a1 = fillAnswers.q1.toLowerCase().trim();
    const a2 = fillAnswers.q2.toLowerCase().trim();
    const a3 = fillAnswers.q3.toLowerCase().trim();
    
    // Simple validation
    const correct = (a1 === 'concentric' && a2 === 'chord' && (a3 === 'inside' || a3 === 'internal'));
    setFillResult(correct);
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-10">
      <SectionTitle>8. Exercises</SectionTitle>
      
      {/* Exercise 1 */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded uppercase">Exercise 1</span>
          Vocabulary Match
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {pairs.map((p) => (
              <div key={p.id} className="flex items-center justify-between bg-slate-50 p-3 rounded">
                <span className="font-bold text-slate-700">{p.term}</span>
                <div className="flex items-center gap-2">
                  <select 
                    className="border border-slate-300 rounded px-2 py-1 text-sm w-48"
                    value={matchAnswers[p.id] || ''}
                    onChange={(e) => {
                      setMatchAnswers({...matchAnswers, [p.id]: e.target.value});
                      setMatchFeedback({...matchFeedback, [p.id]: null});
                    }}
                  >
                    <option value="">Select meaning...</option>
                    {options.map(o => (
                      <option key={o.id} value={o.id}>{o.text}</option>
                    ))}
                  </select>
                  <button 
                    onClick={() => handleMatchCheck(p.id, p.correct)}
                    className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <CheckCircle size={18} />
                  </button>
                </div>
                {matchFeedback[p.id] === true && <span className="text-green-500 text-xs font-bold">✓ Correct</span>}
                {matchFeedback[p.id] === false && <span className="text-red-500 text-xs font-bold">✗ Try again</span>}
              </div>
            ))}
          </div>
          <div className="bg-slate-100 p-4 rounded text-sm text-slate-600">
            <strong>Options:</strong>
            <ul className="list-decimal ml-5 mt-2 space-y-2">
              {options.map(o => <li key={o.id}>{o.text}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded uppercase">Exercise 2</span>
          Sentence Completion
        </h3>
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-700">1. The tyre and wheel form</span>
            <input 
              type="text" 
              className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-1 py-0.5 w-32 text-center bg-slate-50"
              placeholder="..."
              value={fillAnswers.q1}
              onChange={(e) => setFillAnswers({...fillAnswers, q1: e.target.value})}
            />
            <span className="text-slate-700">circles.</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-700">2. After deformation, the curved edge becomes a</span>
            <input 
              type="text" 
              className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-1 py-0.5 w-32 text-center bg-slate-50"
              placeholder="..."
              value={fillAnswers.q2}
              onChange={(e) => setFillAnswers({...fillAnswers, q2: e.target.value})}
            />
            <span className="text-slate-700">.</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-700">3. The</span>
            <input 
              type="text" 
              className="border-b-2 border-slate-300 focus:border-blue-500 outline-none px-1 py-0.5 w-32 text-center bg-slate-50"
              placeholder="..."
              value={fillAnswers.q3}
              onChange={(e) => setFillAnswers({...fillAnswers, q3: e.target.value})}
            />
            <span className="text-slate-700">diameter of the pipe is also called the bore.</span>
          </div>
          
          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={checkFill}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Check Answers
            </button>
            {fillResult === true && <span className="text-green-600 font-bold">All correct! Great job.</span>}
            {fillResult === false && <span className="text-red-500">Some answers are incorrect. Check spelling.</span>}
          </div>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded uppercase">Exercise 3</span>
          Applied Writing
        </h3>
        <p className="text-slate-600 mb-4">
          Rewrite the sentence using formal engineering style and passive voice.
        </p>
        <div className="bg-slate-50 p-4 rounded mb-4 border border-slate-200">
          <strong>Original:</strong> "When the tyre touches the road, it changes shape."
        </div>
        <textarea 
          className="w-full p-3 border border-slate-300 rounded h-24 focus:ring-2 focus:ring-purple-200 focus:border-purple-500 outline-none transition-all"
          placeholder="Type your rewrite here..."
        />
        <div className="mt-4">
          <button 
            onClick={() => setShowWritingModel(!showWritingModel)}
            className="text-purple-600 hover:text-purple-800 text-sm font-semibold underline"
          >
            {showWritingModel ? "Hide Model Answer" : "Show Model Answer"}
          </button>
          
          {showWritingModel && (
            <div className="mt-3 p-3 bg-purple-50 text-purple-900 rounded border border-purple-100 animate-fadeIn">
              <strong>Model Answer:</strong> "When the tyre is in contact with the road surface, deformation occurs." 
              <br/>
              <em className="text-xs text-purple-700">(Other variations using 'compressed' or 'deformed' are also acceptable)</em>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

// --- Main App Component ---

const Lesson6App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: '1. Overview', icon: <BookOpen size={18} /> },
    { id: 'dimensions', label: '2. Dimensions', icon: <Circle size={18} /> },
    { id: 'deformation', label: '3. Deformation', icon: <Settings size={18} /> },
    { id: 'pipes', label: '4. Pipes', icon: <ArrowDownToLine size={18} /> },
    { id: 'vocabulary', label: '5. Vocab', icon: <Info size={18} /> },
    { id: 'grammar', label: '6. Grammar', icon: <PenTool size={18} /> },
    { id: 'examples', label: '7. Examples', icon: <ArrowRight size={18} /> },
    { id: 'exercises', label: '8. Exercises', icon: <MousePointerClick size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPanel />;
      case 'dimensions': return <DimensionsPanel />;
      case 'deformation': return <DeformationPanel />;
      case 'pipes': return <PipesPanel />;
      case 'vocabulary': return <VocabularyPanel />;
      case 'grammar': return <GrammarPanel />;
      case 'examples': return <ExamplesPanel />;
      case 'exercises': return <ExercisesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="p-2 bg-blue-600 text-white rounded-lg">
              <Settings size={24} />
            </span>
            Engineering English: Dimensions of Circles
          </h1>
        </div>
        
        {/* Scrollable Tab Navigation */}
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-2" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200
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
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 md:p-8 min-h-[500px]">
          {renderContent()}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-6 text-center text-slate-400 text-sm">
        Engineering Lesson Module • React & TypeScript • Interactive Geometry
      </footer>

      {/* Tailwind Utility for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        /* Hide scrollbar for cleaner tab look */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Lesson6App;