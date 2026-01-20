import React, { useState } from 'react';
import { 
  Book, 
  Ruler, 
  Eye, 
  PenTool, 
  Layers, 
  CheckCircle, 
  Maximize2,
  FileText
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'vocabulary' | 'scales' | 'views' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Data Constants ---

const TABS: Tab[] = [
  { id: 'overview', label: 'Overview', icon: <FileText size={18} /> },
  { id: 'vocabulary', label: 'Vocabulary', icon: <Book size={18} /> },
  { id: 'scales', label: 'Scales & Types', icon: <Ruler size={18} /> },
  { id: 'views', label: 'Views', icon: <Eye size={18} /> },
  { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
  { id: 'examples', label: 'Examples', icon: <Layers size={18} /> },
  { id: 'exercises', label: 'Exercises', icon: <CheckCircle size={18} /> },
];

const VOCABULARY = [
  { term: 'Drawing (dwg)', definition: 'A technical representation of a design.', note: 'Abbreviation: dwg' },
  { term: 'CAD', definition: 'Software used to create engineering drawings on a computer.', note: 'Pronunciation: /kæd/' },
  { term: 'Scale', definition: 'The ratio between the size of an object on a drawing and its real-life size.', note: 'e.g. 1:10' },
  { term: 'Scale drawing', definition: 'A drawing where all items are shown in correct proportion to their real size.', note: '' },
  { term: 'General arrangement (GA)', definition: 'A drawing that shows the whole device or structure, usually at a small scale.', note: '' },
  { term: 'Detail drawing', definition: 'A drawing that shows a part in detail, usually at a large scale.', note: 'e.g. 1:5, 1:1' },
  { term: 'Schematic', definition: 'A simplified drawing used for systems such as electrical circuits or pipe networks.', note: '' },
];

const SCALES = [
  { ratio: '1:100', usage: 'Very small scale', context: 'Entire buildings or structures' },
  { ratio: '1:10', usage: 'Reduced size', context: 'Still proportional' },
  { ratio: '1:5 / 1:2', usage: 'Enlarged details', context: 'Detailed parts' },
  { ratio: '1:1', usage: 'Actual size', context: 'Standard components' },
  { ratio: '2:1', usage: 'Larger than real size', context: 'Very small parts' },
];

// --- Components ---

const SectionTitle = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 border-b pb-4 border-slate-200">
    {icon && <span className="text-blue-600">{icon}</span>}
    {children}
  </h2>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {children}
  </div>
);

// --- Sub-Panels ---

const OverviewPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<FileText />}>Overview: Drawings, Scales, and Views</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="prose text-slate-600">
        <p className="text-lg leading-relaxed">
          In engineering, most design information is communicated through <strong>drawings</strong>. 
          These drawings are usually produced using <strong>CAD</strong> (computer-aided design) systems rather than by hand.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Engineers and technicians rely on different drawing types, scales, and views to understand:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Complete designs (GA)</li>
          <li>Detailed parts</li>
          <li>Internal features</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center items-center text-center">
        <div className="w-full h-48 bg-white border-2 border-dashed border-blue-200 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          <span className="text-blue-400 font-mono text-xl">CAD INTERFACE SIMULATION</span>
        </div>
        <p className="text-sm text-blue-600 font-medium">Modern engineering relies on CAD systems for precision.</p>
      </div>
    </div>
  </div>
);

const VocabularyPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<Book />}>Key Technical Vocabulary</SectionTitle>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {VOCABULARY.map((item, idx) => (
        <Card key={idx} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-blue-500">
          <h3 className="font-bold text-lg text-slate-800 mb-2">{item.term}</h3>
          <p className="text-slate-600 text-sm mb-3">{item.definition}</p>
          {item.note && (
            <div className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded inline-block">
              Note: {item.note}
            </div>
          )}
        </Card>
      ))}
    </div>
  </div>
);

const ScalesPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<Ruler />}>Drawing Types and Scales</SectionTitle>
    
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Scales Table */}
      <Card>
        <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
          <Maximize2 size={20} className="text-blue-500" /> Common Scales
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b">
              <tr>
                <th className="p-3">Scale</th>
                <th className="p-3">Description</th>
                <th className="p-3">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {SCALES.map((s, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-blue-600">{s.ratio}</td>
                  <td className="p-3">{s.usage}</td>
                  <td className="p-3 text-slate-500">{s.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Types of Drawings */}
      <Card>
        <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
          <Layers size={20} className="text-purple-500" /> Types of Drawings
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shrink-0">GA</div>
            <div>
              <strong className="block text-slate-800">General Arrangement</strong>
              <span className="text-slate-600 text-sm">Shows the complete system or structure.</span>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <div className="bg-green-100 p-2 rounded-lg text-green-600 shrink-0">DT</div>
            <div>
              <strong className="block text-slate-800">Detail Drawing</strong>
              <span className="text-slate-600 text-sm">Focus on individual components (larger scale).</span>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600 shrink-0">SC</div>
            <div>
              <strong className="block text-slate-800">Schematic</strong>
              <span className="text-slate-600 text-sm">Shows function and connections, not physical size (e.g., train map).</span>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  </div>
);

const ViewsPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<Eye />}>Types of Views</SectionTitle>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Card className="border-l-4 border-l-indigo-500">
          <h3 className="font-bold text-lg text-indigo-700">2D Views</h3>
          <div className="mt-2 space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Plan</span>
              <span className="text-slate-500 text-sm">View from above</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Elevation</span>
              <span className="text-slate-500 text-sm">Side view (front, rear, etc.)</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Section</span>
              <span className="text-slate-500 text-sm">Cut-through view (internal features)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Exploded</span>
              <span className="text-slate-500 text-sm">Parts spaced apart to show assembly</span>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-4">
        <Card className="border-l-4 border-l-teal-500">
          <h3 className="font-bold text-lg text-teal-700">3D Views</h3>
          <p className="text-sm text-slate-600 mb-4">Used to improve visualization for non-experts or assembly instructions.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Isometric projection</strong>: Equal angles, preserves dimensions.</li>
            <li><strong>Oblique projection</strong>: Front face is flat, depth is angled.</li>
          </ul>
        </Card>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 text-sm uppercase mb-1">Language Note</h4>
            <div className="flex gap-4 text-sm">
                <span>Two-dimensional → <strong>2D</strong></span>
                <span>Three-dimensional → <strong>3D</strong></span>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const GrammarPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<PenTool />}>Grammar Focus: Requirements</SectionTitle>
    <p className="text-slate-600">These structures are essential for technical discussions and design reviews.</p>
    
    <div className="grid gap-6 md:grid-cols-3">
      {/* Structure 1 */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded inline-block text-sm mb-3">NEED</div>
        <p className="font-medium mb-2">We need + noun phrase</p>
        <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 italic">
          "We need a plan of the whole area."
        </div>
      </div>

      {/* Structure 2 */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded inline-block text-sm mb-3">SHOULD BE</div>
        <p className="font-medium mb-2">There should be + noun phrase</p>
        <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 italic">
          "There should be a section through the pipe."
        </div>
      </div>

      {/* Structure 3 */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded inline-block text-sm mb-3">ACCORDING TO</div>
        <p className="font-medium mb-2">According to + source</p>
        <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 italic">
          "According to this list, there are elevations of all four sides."
        </div>
      </div>
    </div>
  </div>
);

const ExamplesPanel = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle icon={<Layers />}>Practical Engineering Examples</SectionTitle>
    
    <div className="space-y-4">
      {[
        "The GA drawing is shown at a scale of 1:100 to include the entire structure.",
        "This valve is too small to see clearly, so it is shown at 2:1 in the detail drawing.",
        "The schematic shows the pipe network but not the exact pipe lengths.",
        "An isometric projection would make this assembly easier to understand."
      ].map((example, i) => (
        <div key={i} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-400">
           <div className="bg-slate-100 h-8 w-8 rounded-full flex items-center justify-center font-bold text-slate-500 shrink-0">
             {i + 1}
           </div>
           <p className="text-slate-700">{example}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Exercises Component (Interactive) ---

const ExercisesPanel = () => {
  const [ex1Answers, setEx1Answers] = useState<Record<string, string>>({});
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [ex3Revealed, setEx3Revealed] = useState<boolean>(false);

  // Exercise 1 Data
  const ex1Matches = [
    { term: 'Scale', id: 'scale', correct: 'b' },
    { term: 'GA drawing', id: 'ga', correct: 'd' },
    { term: 'Schematic', id: 'schem', correct: 'a' },
    { term: 'Section', id: 'sect', correct: 'c' },
  ];

  const ex1Definitions = [
    { key: 'a', text: 'A simplified drawing of a system' },
    { key: 'b', text: 'A ratio between drawing size and real size' },
    { key: 'c', text: 'A cut-through view' },
    { key: 'd', text: 'A drawing showing the whole structure' },
  ];

  // Exercise 2 Data
  const ex2Questions = [
    { id: 1, text: "A drawing at ______ shows an object at actual size.", answer: "1:1" },
    { id: 2, text: "Electrical systems are often shown using ______ drawings.", answer: "schematic" },
    { id: 3, text: "A ______ view would help show the internal parts of the pipe.", answer: "section" },
    { id: 4, text: "The abbreviation for drawing is ______.", answer: "dwg" },
  ];

  const checkEx1 = (id: string, val: string) => {
    setEx1Answers(prev => ({ ...prev, [id]: val }));
  };

  const getEx1Status = (id: string, correctKey: string) => {
    if (!ex1Answers[id]) return 'neutral';
    return ex1Answers[id] === correctKey ? 'correct' : 'incorrect';
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <SectionTitle icon={<CheckCircle />}>Exercises</SectionTitle>

      {/* Exercise 1 */}
      <Card>
        <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 1: Vocabulary Check (Easy)</h3>
        <p className="text-sm text-slate-500 mb-4">Match the term to its definition.</p>
        <div className="grid gap-4">
          {ex1Matches.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="font-bold w-32">{item.term}</span>
              <select 
                className={`flex-1 p-2 rounded border ${
                  getEx1Status(item.id, item.correct) === 'correct' ? 'border-green-500 bg-green-50' : 
                  getEx1Status(item.id, item.correct) === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}
                onChange={(e) => checkEx1(item.id, e.target.value)}
                value={ex1Answers[item.id] || ""}
              >
                <option value="" disabled>Select definition...</option>
                {ex1Definitions.map(def => (
                  <option key={def.key} value={def.key}>{def.text}</option>
                ))}
              </select>
              {getEx1Status(item.id, item.correct) === 'correct' && <CheckCircle size={20} className="text-green-600" />}
            </div>
          ))}
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card>
        <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 2: Sentence Completion (Medium)</h3>
        <div className="space-y-4">
          {ex2Questions.map((q) => (
            <div key={q.id} className="p-3 bg-slate-50 rounded-lg">
               <p className="mb-2 leading-loose">
                 {q.text.split('______')[0]}
                 <input 
                   type="text" 
                   className="mx-2 border-b-2 border-blue-400 bg-transparent outline-none text-center w-32 font-bold text-blue-700"
                   placeholder="type here"
                   onChange={(e) => setEx2Answers(prev => ({...prev, [q.id]: e.target.value}))}
                 />
                 {q.text.split('______')[1]}
               </p>
               {ex2Answers[q.id]?.toLowerCase() === q.answer.toLowerCase() && (
                 <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                   <CheckCircle size={12}/> Correct!
                 </span>
               )}
            </div>
          ))}
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card>
        <h3 className="font-bold text-lg mb-4 text-slate-800">Exercise 3: Applied Engineering English (Challenging)</h3>
        <p className="text-sm text-slate-500 mb-4">Rewrite the notes as clear spoken instructions for a design meeting.</p>
        
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200 font-mono text-sm text-yellow-800">
              Note 1: "Need front view – machine – dwg 28"
            </div>
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200 font-mono text-sm text-yellow-800">
              Note 2: "Valve not visible – add section"
            </div>
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200 font-mono text-sm text-yellow-800">
              Note 3: "Hard to understand assembly – suggest 3D view"
            </div>
          </div>

          <div className="pt-4 border-t">
            <button 
              onClick={() => setEx3Revealed(!ex3Revealed)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              {ex3Revealed ? 'Hide Suggested Answers' : 'Show Suggested Answers'}
            </button>
            
            {ex3Revealed && (
              <div className="mt-4 space-y-3 bg-blue-50 p-4 rounded-lg animate-fadeIn">
                <p><strong>1.</strong> We need a front view of the machine on drawing 28.</p>
                <p><strong>2.</strong> The valve isn't visible, so there should be a section through it.</p>
                <p><strong>3.</strong> It's hard to understand the assembly, so I suggest we add a 3D view.</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

// --- Main App Component ---

const Lesson1App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPanel />;
      case 'vocabulary': return <VocabularyPanel />;
      case 'scales': return <ScalesPanel />;
      case 'views': return <ViewsPanel />;
      case 'grammar': return <GrammarPanel />;
      case 'examples': return <ExamplesPanel />;
      case 'exercises': return <ExercisesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Ruler className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Engineering English</h1>
              <p className="text-xs text-slate-400">Lesson: Drawings, Scales, and Views</p>
            </div>
          </div>
        </div>

        {/* Tabs Bar (Always Visible & Scrollable) */}
        <div className="bg-slate-800 border-t border-slate-700">
          <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-4 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'border-blue-500 text-white bg-slate-700' 
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-750'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer (Simplified) */}
      <footer className="bg-white border-t py-6 mt-auto">
         <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
            <span>Engineering English Module 1.3</span>
         </div>
      </footer>
    </div>
  );
};

export default Lesson1App;