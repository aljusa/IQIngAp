import React, { useState } from 'react';
import { 
  Info, 
  Layers, 
  FlaskConical, 
  ShieldAlert, 
  BookOpen, 
  PenTool, 
  Construction, 
  CheckCircle2,
  Table as TableIcon,
  ChevronRight
} from 'lucide-react';

// --- Types ---
type SectionId = 'overview' | 'carbon' | 'alloy' | 'corrosion' | 'vocabulary' | 'grammar' | 'practical' | 'exercises';

interface Tab {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {title && <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">{title}</h3>}
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
    slate: "bg-slate-100 text-slate-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
  };
  return <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${colors[color]}`}>{children}</span>;
};

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'carbon', label: 'Carbon Steels', icon: <Layers size={18} /> },
    { id: 'alloy', label: 'Alloy Steels', icon: <FlaskConical size={18} /> },
    { id: 'corrosion', label: 'Corrosion', icon: <ShieldAlert size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <TableIcon size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <BookOpen size={18} /> },
    { id: 'practical', label: 'Practical', icon: <Construction size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <PenTool size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <header className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900">Engineering Lesson: Steel</h1>
              <p className="text-slate-500 mt-2">A comprehensive guide to classifications, alloys, and properties.</p>
            </header>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="What you will learn">
                <ul className="space-y-3">
                  {[
                    "Why steel is widely used in engineering",
                    "Difference between carbon and alloy steels",
                    "Classification by carbon and alloying elements",
                    "The chemical process of corrosion"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1 bg-blue-500 rounded-full p-1"><CheckCircle2 size={12} className="text-white" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-slate-50 border-dashed border-2 flex flex-col justify-center items-center text-center">
                <div className="p-4 bg-white rounded-full shadow-md mb-4 text-blue-600">
                  <BookOpen size={32} />
                </div>
                <p className="text-sm font-medium text-slate-500">Source: Engineering Journal</p>
                <p className="text-xs text-slate-400 mt-1 italic">Technical Documentation Series</p>
              </Card>
            </div>
          </div>
        );

      case 'carbon':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card title="Defining Carbon Steel">
              <p className="text-slate-600 leading-relaxed">
                Steel is fundamentally an alloy of <span className="font-bold text-slate-800">Iron (Fe)</span> and <span className="font-bold text-slate-800">Carbon (C)</span>. Carbon steels are the primary grade where no significant other metals are added.
              </p>
            </Card>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Mild Steel', carbon: 'Up to 0.3%', desc: 'Most widely used grade; low carbon content.', color: 'blue' },
                { name: 'Medium Carbon', carbon: '0.3% – 0.6%', desc: 'Balanced strength and ductility.', color: 'amber' },
                { name: 'High Carbon', carbon: '0.6% – 1.4%', desc: 'High hardness; used for springs and high-strength wires.', color: 'red' },
              ].map((grade) => (
                <div key={grade.name} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition-colors">
                  <Badge color={grade.color}>{grade.carbon}</Badge>
                  <h4 className="font-bold text-lg mt-2 text-slate-800">{grade.name}</h4>
                  <p className="text-sm text-slate-500 mt-2">{grade.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'alloy':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card title="The Role of Alloying Metals">
              <p className="text-slate-600 mb-4">Alloy steels contain iron, carbon, and one or more additional metals to modify physical properties.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-700 mb-2">Low Alloy Steels</h4>
                  <p className="text-sm text-slate-500 mb-2">Contains ~90%+ iron and up to 10% alloying metals.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Chromium', 'Nickel', 'Manganese', 'Molybdenum', 'Vanadium'].map(el => (
                      <span key={el} className="px-2 py-0.5 bg-white border border-slate-200 text-xs rounded shadow-sm">{el}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-700 mb-2">Specialty Steels</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li><span className="font-bold">HSLA:</span> High Strength Low Alloy ({"<"}2% alloy).</li>
                    <li><span className="font-bold">Stainless:</span> Chromium-based; resists oxidation/rust.</li>
                    <li><span className="font-bold">Tool Steel:</span> Extremely hard; Tungsten/Cobalt additions.</li>
                  </ul>
                </div>
              </div>
            </Card>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <h4 className="font-bold text-amber-800 text-sm flex items-center gap-2"><Info size={16}/> Terminology Note</h4>
              <p className="text-amber-700 text-sm mt-1">
                The terms can be confusing: carbon steels are also alloys, and all alloy steels contain carbon. The distinction lies in the <em>intent</em> and <em>quantity</em> of additional elements.
              </p>
            </div>
          </div>
        );

      case 'corrosion':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="The Chemical Reaction">
                <div className="flex items-center justify-center bg-blue-50 p-6 rounded-lg mb-4 text-blue-800 font-mono font-bold text-lg border border-blue-100">
                  Iron (Fe) + Oxygen (O₂) → Iron Oxide (Rust)
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Corrosion is a chemical reaction between iron in the steel and oxygen in the air. In mild steel, this process is continuous and destructive.
                </p>
              </Card>
              <Card title="Progressive Deterioration">
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-slate-200">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-slate-400"></div>
                    <h5 className="font-bold text-slate-700 text-sm">Contrast with Aluminium</h5>
                    <p className="text-xs text-slate-500">Aluminium forms a hard oxide layer that protects the metal underneath.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-red-200">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-red-400"></div>
                    <h5 className="font-bold text-red-700 text-sm">The Steel Problem</h5>
                    <p className="text-xs text-slate-500">Rust on steel flakes off continuously, exposing new metal to the air. It progressively "eats" into the structure.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'vocabulary':
        const vocab = [
          { term: 'Steel', def: 'Alloy of iron and carbon' },
          { term: 'Carbon steel', def: 'Steel with no significant alloying metals' },
          { term: 'Mild steel', def: 'Low carbon steel (up to ~0.3% C)' },
          { term: 'Alloy steel', def: 'Steel containing additional metals' },
          { term: 'Stainless steel', def: 'Chromium-containing steel that does not rust' },
          { term: 'Tool steel', def: 'Very hard steel for cutting tools' },
          { term: 'Corrosion', def: 'Chemical deterioration of metal' },
          { term: 'Rust', def: 'Iron oxide formed by corrosion' },
        ];
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Term</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Definition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {vocab.map((v) => (
                      <tr key={v.term} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-blue-600">{v.term}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{v.def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card title="Classification and Quantification">
              <p className="text-slate-600 mb-6">In technical English, we use specific language to categorize items and provide approximations when exact figures vary.</p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded border border-slate-200">
                  <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Classification</h5>
                  <p className="text-slate-700 italic font-medium">“Carbon steels can be <span className="text-blue-600">divided into</span> three main grades.”</p>
                </div>
                <div className="p-4 bg-slate-50 rounded border border-slate-200">
                  <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Approximate Quantities</h5>
                  <ul className="space-y-2">
                    <li className="text-slate-700">“Contains <span className="text-blue-600">up to approximately</span> 0.3% carbon.”</li>
                    <li className="text-slate-700">“<span className="text-blue-600">Typically less than</span> 2%.”</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'practical':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {[
              { title: 'Structural Engineering', text: 'Mild steel is widely used for beams and frameworks due to its availability and low cost.', icon: <Construction /> },
              { title: 'Chemical & Marine', text: 'Stainless steel is the primary choice where high corrosion resistance is required.', icon: <ShieldAlert /> },
              { title: 'Manufacturing', text: 'Tool steels enable high-temperature machining and cutting of other metals.', icon: <PenTool /> },
              { title: 'Civil Planning', text: 'Corrosion progression must be accounted for in the lifecycle design of bridges.', icon: <Info /> },
            ].map((item, idx) => (
              <Card key={idx} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'exercises':
        return <ExercisePanel />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm overflow-x-auto scrollbar-hide">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex space-x-2 py-4 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        {renderContent()}
      </main>
      
      <footer className="py-10 text-center text-slate-400 text-xs uppercase tracking-widest border-t border-slate-200 mt-10">
        Engineering Materials Lesson &copy; 2024
      </footer>
    </div>
  );
}

const ExercisePanel = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({
    ex2_1: '', ex2_2: '', ex2_3: ''
  });
  const [matching, setMatching] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const matchOptions = [
    { id: '1', term: 'Mild steel', correct: 'b' },
    { id: '2', term: 'Alloy steel', correct: 'c' },
    { id: '3', term: 'Corrosion', correct: 'a' },
    { id: '4', term: 'Tool steel', correct: 'd' },
  ];

  const meanings = [
    { id: 'a', text: 'Chemical deterioration of metal' },
    { id: 'b', text: 'Low carbon steel' },
    { id: 'c', text: 'Steel with added alloying metals' },
    { id: 'd', text: 'Very hard steel used for cutting tools' },
  ];

  const handleMatch = (termId: string, meaningId: string) => {
    setMatching(prev => ({ ...prev, [termId]: meaningId }));
  };

  const isMatchingCorrect = (termId: string) => {
    const term = matchOptions.find(t => t.id === termId);
    return matching[termId] === term?.correct;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <Card title="Exercise 1: Vocabulary Matching">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {matchOptions.map(m => (
              <div key={m.id} className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">{m.term}</span>
                <select 
                  className={`text-xs p-1 rounded border outline-none ${showResults ? (isMatchingCorrect(m.id) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-slate-300'}`}
                  value={matching[m.id] || ''}
                  onChange={(e) => handleMatch(m.id, e.target.value)}
                  disabled={showResults}
                >
                  <option value="">Select...</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {meanings.map(m => (
              <div key={m.id} className="flex gap-3 text-sm text-slate-600">
                <span className="font-bold text-blue-600 w-4">{m.id.toUpperCase()}.</span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Exercise 2: Sentence Completion">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-slate-700">
              1. Carbon steels consist mainly of iron and
              <input 
                className="border-b-2 border-slate-300 outline-none focus:border-blue-500 px-2 w-32"
                value={answers.ex2_1}
                onChange={e => setAnswers({...answers, ex2_1: e.target.value})}
                disabled={showResults}
              />.
              {showResults && (answers.ex2_1.toLowerCase() === 'carbon' ? <span className="text-green-600 text-xs">✓</span> : <span className="text-red-500 text-xs"> (carbon)</span>)}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-slate-700">
              2. Stainless steels contain
              <input 
                className="border-b-2 border-slate-300 outline-none focus:border-blue-500 px-2 w-32"
                value={answers.ex2_2}
                onChange={e => setAnswers({...answers, ex2_2: e.target.value})}
                disabled={showResults}
              /> and do not rust.
              {showResults && (answers.ex2_2.toLowerCase() === 'chromium' ? <span className="text-green-600 text-xs">✓</span> : <span className="text-red-500 text-xs"> (chromium)</span>)}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-slate-700">
              3. Rust forms when iron reacts with
              <input 
                className="border-b-2 border-slate-300 outline-none focus:border-blue-500 px-2 w-32"
                value={answers.ex2_3}
                onChange={e => setAnswers({...answers, ex2_3: e.target.value})}
                disabled={showResults}
              /> in the air.
              {showResults && (answers.ex2_3.toLowerCase() === 'oxygen' ? <span className="text-green-600 text-xs">✓</span> : <span className="text-red-500 text-xs"> (oxygen)</span>)}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Exercise 3: Applied Writing">
        <p className="text-xs text-slate-400 uppercase font-bold mb-4">Task: Rewrite using formal engineering style and passive voice.</p>
        <div className="p-4 bg-slate-50 rounded italic text-slate-500 mb-4 border border-slate-200">
          "Engineers add chromium to steel to improve corrosion resistance."
        </div>
        <textarea 
          className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none h-24"
          placeholder="Type your formal version here..."
          disabled={showResults}
        ></textarea>
        {showResults && (
          <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
            <h5 className="text-xs font-bold text-blue-800 uppercase mb-1">Suggested Model Answer:</h5>
            <p className="text-sm text-blue-900">“Chromium is added to steel to improve corrosion resistance.”</p>
          </div>
        )}
      </Card>

      <div className="flex justify-center">
        <button 
          onClick={() => setShowResults(!showResults)}
          className={`px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95 ${
            showResults ? 'bg-slate-800 text-white' : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {showResults ? 'Reset Exercises' : 'Check Answers'}
        </button>
      </div>
    </div>
  );
};