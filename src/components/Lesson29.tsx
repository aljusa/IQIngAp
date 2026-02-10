import React, { useState } from 'react';
import { 
  Zap, 
  Flame, 
  Droplets, 
  Hammer, 
  BookOpen, 
  PenTool, 
  CheckCircle, 
  XCircle, 
  Activity, 
  Layers, 
  HelpCircle,
  Construction,
  Cpu,
  Car
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'welding' | 'brazing' | 'adhesives' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Sub-Components ---

const SectionHeader: React.FC<{ title: string; icon?: React.ReactNode }> = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-6 border-b pb-2 border-slate-200">
    {icon && <div className="text-blue-600">{icon}</div>}
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 ${className}`}>
    <h3 className="text-lg font-bold text-slate-700 mb-3">{title}</h3>
    <div className="text-slate-600">{children}</div>
  </div>
);

// --- Tab Content Components ---

const OverviewPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionHeader title="1. Lesson Overview" icon={<BookOpen size={28} />} />
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
      <p className="text-lg text-slate-700 leading-relaxed">
        This lesson continues the topic of non-mechanical joints, focusing on specialized 
        <strong> welding techniques</strong>, <strong>brazing</strong>, <strong>soldering</strong>, and <strong>adhesives</strong>. 
        The content reflects language used in manufacturing, materials, mechanical, and electrical engineering, 
        particularly for joining processes where traditional fasteners are not used.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border text-center">
        <Zap className="mb-2 text-yellow-500" size={32} />
        <span className="font-semibold">Specialized Welding</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border text-center">
        <Flame className="mb-2 text-orange-500" size={32} />
        <span className="font-semibold">Brazing & Soldering</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border text-center">
        <Droplets className="mb-2 text-cyan-500" size={32} />
        <span className="font-semibold">Adhesives</span>
      </div>
    </div>
  </div>
);

const WeldingPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionHeader title="2.1 Specialized Welding Techniques" icon={<Zap size={28} />} />
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Resistance Welding" className="border-t-4 border-t-yellow-500">
        <ul className="space-y-3 list-disc list-inside">
          <li>Uses an <strong>electric current</strong> passed through touching metal components.</li>
          <li>Current heats and melts metal at <strong>contact points</strong>.</li>
          <li className="mt-4 font-semibold text-slate-800 list-none">Applications:</li>
          <li className="pl-4"><strong>Spot welding:</strong> joining components at small points.</li>
          <li className="pl-4"><strong>Seam welding:</strong> making long, narrow welds.</li>
        </ul>
      </Card>

      <Card title="Ultrasonic Welding" className="border-t-4 border-t-blue-500">
        <ul className="space-y-3 list-disc list-inside">
          <li>Uses <strong>high-frequency acoustic vibrations</strong>.</li>
          <li>Vibrations cause touching surfaces to:
            <ul className="pl-6 list-circle mt-1 space-y-1">
              <li>Vibrate</li>
              <li>Generate friction</li>
              <li>Heat up and fuse</li>
            </ul>
          </li>
          <li className="mt-2 text-blue-600 bg-blue-50 p-2 rounded inline-block">
            Commonly used to weld <strong>plastics</strong>.
          </li>
        </ul>
      </Card>
    </div>
  </div>
);

const BrazingSolderingPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionHeader title="2.2 Brazing and Soldering" icon={<Flame size={28} />} />
    
    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6 flex items-start gap-3">
      <Activity className="text-amber-600 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-amber-800">Key Similarity</h4>
        <p className="text-amber-700">In both processes, the <strong>base metal is not melted</strong>. Only the filler material melts.</p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Brazing">
        <ul className="space-y-2 text-sm md:text-base">
          <li><strong>Filler:</strong> Brass (Copper + Zinc).</li>
          <li><strong>Heat Source:</strong> Oxyfuel torch.</li>
          <li><strong>Result:</strong> Components are not fused directly.</li>
          <li><strong>Strength:</strong> Weaker than welded joints.</li>
        </ul>
      </Card>

      <Card title="Soldering">
        <ul className="space-y-2 text-sm md:text-base">
          <li><strong>Uses:</strong> Pipe joints, Electrical connections.</li>
          <li><strong>Filler:</strong> Metal with low melting temperature.</li>
          <li><strong>Strength:</strong> Weaker than welded AND brazed joints.</li>
        </ul>
      </Card>
    </div>

    <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Types of Soldering</h3>
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-4">Type</th>
            <th className="p-4">Alloy Composition</th>
            <th className="p-4">Tool/Heat</th>
            <th className="p-4">Characteristics</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-white">
            <td className="p-4 font-semibold text-blue-600">Soft Soldering</td>
            <td className="p-4">Tin (Sn) + Lead (Pb) OR Tin + Copper</td>
            <td className="p-4">Soldering iron (Electric rod)</td>
            <td className="p-4">Lower strength, electronic use</td>
          </tr>
          <tr className="bg-white">
            <td className="p-4 font-semibold text-orange-600">Hard Soldering</td>
            <td className="p-4">Copper + Silver (Ag)</td>
            <td className="p-4">Flame (Oxyfuel torch)</td>
            <td className="p-4">Stronger joints, higher melting point</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const AdhesivesPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionHeader title="2.3 Adhesives" icon={<Droplets size={28} />} />
    
    <p className="text-slate-600 mb-6">
      Adhesives are used to <strong>bond</strong> (permanently join) components together by adhering to surfaces. Most are liquids.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-slate-700 border-b pb-2">Types of Adhesion</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-l-4 border-l-emerald-500">
          <h4 className="font-bold text-emerald-700">Mechanical Bond</h4>
          <p className="text-sm text-slate-600 mt-1">Wet adhesive is absorbed. After hardening, it is anchored into the substrate.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-l-4 border-l-purple-500">
          <h4 className="font-bold text-purple-700">Chemical Bond</h4>
          <p className="text-sm text-slate-600 mt-1">Occurs due to a chemical reaction between the adhesive and the materials.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg text-slate-700 border-b pb-2">Drying vs. Curing</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-slate-100 p-2 rounded text-slate-500">1</div>
            <div>
              <span className="font-bold block">Drying (Solvent Evaporation)</span>
              <span className="text-sm text-slate-600">Solvent (water/chemical) evaporates leaving solid. e.g., PVA (Wood glue).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-slate-100 p-2 rounded text-slate-500">2</div>
            <div>
              <span className="font-bold block">Curing (Chemical Reaction)</span>
              <span className="text-sm text-slate-600">Two parts mix and react to harden. e.g., Epoxy resins.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-slate-100 p-2 rounded text-slate-500">3</div>
            <div>
              <span className="font-bold block">Contact Adhesives</span>
              <span className="text-sm text-slate-600">Applied to both surfaces, dried, then bond on touch.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GrammarVocabPanel = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionHeader title="3 & 4. Grammar & Vocabulary" icon={<Layers size={28} />} />
    
    <div>
      <h3 className="text-xl font-bold text-slate-800 mb-4">3.1 Contrast Structures</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
          <span className="font-mono text-rose-700 font-bold block mb-2">unlike + noun</span>
          <p className="text-sm italic">"Unlike welding, the base metal is not melted."</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <span className="font-mono text-emerald-700 font-bold block mb-2">like + noun</span>
          <p className="text-sm italic">"Like brazing, soldering forms joints without melting..."</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <span className="font-mono text-blue-700 font-bold block mb-2">comparatives</span>
          <p className="text-sm italic">"weaker than", "not as strong as"</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold text-slate-800 mb-4">4. Technical Vocabulary</h3>
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-3">Term</th>
              <th className="p-3">Engineering Meaning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {[
              { t: 'Resistance welding', m: 'Welding using electric current at contact points' },
              { t: 'Spot welding', m: 'Welding at small, localized points' },
              { t: 'Seam welding', m: 'Continuous narrow weld' },
              { t: 'Brazing', m: 'Joining with melted filler, not base metal' },
              { t: 'Soldering', m: 'Low-temperature joining with soft filler' },
              { t: 'Cure', m: 'Harden due to a chemical reaction' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                <td className="p-3 font-semibold text-slate-700">{row.t}</td>
                <td className="p-3 text-slate-600">{row.m}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ExamplesPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionHeader title="5. Practical Engineering Examples" icon={<Construction size={28} />} />
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-5 rounded-lg border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
          <Car />
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Automotive</h4>
          <p className="text-slate-600 text-sm mt-1">Body panels are often assembled using <strong>spot welding</strong>.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-3 rounded-full text-green-600">
          <Layers />
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Plastic Housings</h4>
          <p className="text-slate-600 text-sm mt-1"><strong>Ultrasonic welding</strong> is common in packaging and housings.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
        <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
          <Cpu />
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Electronics</h4>
          <p className="text-slate-600 text-sm mt-1">Electrical circuit boards rely on <strong>soft soldering</strong>.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full text-purple-600">
          <Hammer />
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Structural Repairs</h4>
          <p className="text-slate-600 text-sm mt-1">May use <strong>epoxy adhesives</strong> where welding is impractical.</p>
        </div>
      </div>
    </div>
  </div>
);

const ExercisesPanel = () => {
  // State for Ex 1
  const [matches, setMatches] = useState<{[key: string]: string}>({});
  const [showResult1, setShowResult1] = useState(false);

  // State for Ex 2
  const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);
  const [showResult2, setShowResult2] = useState(false);

  // State for Ex 3
  const [showModelAnswers, setShowModelAnswers] = useState(false);

  // Data Ex 1
  const ex1Terms = [
    { id: 'a', text: 'Spot welding' },
    { id: 'b', text: 'Brazing' },
    { id: 'c', text: 'Soft soldering' },
    { id: 'd', text: 'Contact adhesive' },
  ];
  const ex1Defs = [
    { id: '1', text: 'Joining at small points using electric current', match: 'a' },
    { id: '2', text: 'Joining with melted filler but unmelted base metal', match: 'b' },
    { id: '3', text: 'Low-temperature joining using tin-based filler', match: 'c' },
    { id: '4', text: 'Adhesive applied to both surfaces before joining', match: 'd' },
  ];

  const handleMatch = (defId: string, termId: string) => {
    setMatches(prev => ({ ...prev, [defId]: termId }));
    setShowResult1(false);
  };

  const checkEx1 = () => {
    let correct = 0;
    ex1Defs.forEach(def => {
      if (matches[def.id] === def.match) correct++;
    });
    return correct;
  };

  // Data Ex 2
  const ex2Answers = ["acoustic", "base", "react", "evaporates"];
  const handleInput = (index: number, val: string) => {
    const newInputs = [...inputs];
    newInputs[index] = val;
    setInputs(newInputs);
    setShowResult2(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <SectionHeader title="6. Exercises" icon={<PenTool size={28} />} />
      
      {/* Exercise 1 */}
      <Card title="Exercise 1 – Vocabulary Recognition (Match)" className="border-t-4 border-t-indigo-500">
        <p className="mb-4 text-sm text-slate-500">Select the correct term for each description.</p>
        <div className="space-y-3">
          {ex1Defs.map((def) => (
            <div key={def.id} className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 p-3 rounded">
              <div className="flex-grow text-sm font-medium text-slate-700">{def.text}</div>
              <select 
                className={`p-2 rounded border text-sm ${
                  showResult1 
                    ? matches[def.id] === def.match 
                      ? 'bg-green-100 border-green-500 text-green-700' 
                      : 'bg-red-100 border-red-500 text-red-700'
                    : 'border-slate-300'
                }`}
                onChange={(e) => handleMatch(def.id, e.target.value)}
                value={matches[def.id] || ""}
              >
                <option value="" disabled>Select Term</option>
                {ex1Terms.map(t => <option key={t.id} value={t.id}>{t.text}</option>)}
              </select>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setShowResult1(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm font-medium"
        >
          Check Answers
        </button>
      </Card>

      {/* Exercise 2 */}
      <Card title="Exercise 2 – Sentence Completion" className="border-t-4 border-t-pink-500">
        <p className="mb-4 text-sm text-slate-500">Fill in the blanks. (Capitalization doesn't matter).</p>
        <div className="space-y-4">
          {[
            { pre: "Ultrasonic welding uses high-frequency", post: "vibrations." },
            { pre: "In brazing, the", post: "metal is not melted." },
            { pre: "Two-part adhesives harden when the components", post: "." },
            { pre: "PVA adhesive hardens when the solvent", post: "." }
          ].map((sent, idx) => (
            <div key={idx} className="bg-slate-50 p-3 rounded">
              <span className="text-slate-700">{sent.pre} </span>
              <input 
                type="text" 
                className={`mx-2 border-b-2 bg-transparent outline-none w-32 text-center font-bold ${
                  showResult2
                    ? inputs[idx].toLowerCase().includes(ex2Answers[idx]) || (idx === 2 && inputs[idx].toLowerCase().includes("mix")) // Allow 'mix' for 'react' vaguely
                      ? 'border-green-500 text-green-700'
                      : 'border-red-500 text-red-700'
                    : 'border-slate-400 focus:border-blue-500'
                }`}
                value={inputs[idx]}
                onChange={(e) => handleInput(idx, e.target.value)}
              />
              <span className="text-slate-700">{sent.post}</span>
              {showResult2 && (
                <div className="text-xs text-slate-500 mt-1 ml-2">Answer: {ex2Answers[idx]}</div>
              )}
            </div>
          ))}
        </div>
        <button 
          onClick={() => setShowResult2(true)}
          className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 text-sm font-medium"
        >
          Check Answers
        </button>
      </Card>

      {/* Exercise 3 */}
      <Card title="Exercise 3 – Applied Technical Description" className="border-t-4 border-t-slate-600">
        <p className="mb-4 text-sm text-slate-500">Think about your answers, then toggle to see model answers.</p>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-slate-800 mb-2">1. Difference between resistance and ultrasonic welding?</h4>
            {showModelAnswers ? (
              <p className="text-green-700 bg-green-50 p-3 rounded text-sm">
                Resistance welding uses an electric current to heat and melt metal at contact points, whereas ultrasonic welding uses high-frequency acoustic vibrations to generate friction and heat to fuse materials (often plastics).
              </p>
            ) : (
              <textarea className="w-full border rounded p-2 text-sm h-20" placeholder="Write your answer here..." />
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-slate-800 mb-2">2. Compare brazing and soldering (strength & temperature).</h4>
            {showModelAnswers ? (
              <p className="text-green-700 bg-green-50 p-3 rounded text-sm">
                Brazing uses higher temperatures and produces stronger joints than soldering, though both are generally weaker than welding. Brazing often uses brass filler, while soldering uses softer fillers like tin.
              </p>
            ) : (
              <textarea className="w-full border rounded p-2 text-sm h-20" placeholder="Write your answer here..." />
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-slate-800 mb-2">3. Describe how a two-part adhesive forms a bond.</h4>
            {showModelAnswers ? (
              <p className="text-green-700 bg-green-50 p-3 rounded text-sm">
                Two-part adhesives are supplied as separate chemicals. When mixed and applied, they chemically react to cure (harden) and form a bond.
              </p>
            ) : (
              <textarea className="w-full border rounded p-2 text-sm h-20" placeholder="Write your answer here..." />
            )}
          </div>
        </div>

        <button 
          onClick={() => setShowModelAnswers(!showModelAnswers)}
          className="mt-4 px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 text-sm font-medium flex items-center gap-2"
        >
          {showModelAnswers ? <><XCircle size={16}/> Hide Models</> : <><CheckCircle size={16}/> Show Model Answers</>}
        </button>
      </Card>
    </div>
  );
}

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'welding', label: 'Welding', icon: <Zap size={18} /> },
    { id: 'brazing', label: 'Brazing & Soldering', icon: <Flame size={18} /> },
    { id: 'adhesives', label: 'Adhesives', icon: <Droplets size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <Layers size={18} /> },
    { id: 'examples', label: 'Examples', icon: <Construction size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <PenTool size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPanel />;
      case 'welding': return <WeldingPanel />;
      case 'brazing': return <BrazingSolderingPanel />;
      case 'adhesives': return <AdhesivesPanel />;
      case 'grammar': return <GrammarVocabPanel />;
      case 'examples': return <ExamplesPanel />;
      case 'exercises': return <ExercisesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <HelpCircle className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Engineering English</h1>
            <p className="text-slate-400 text-sm">Lesson 29: Non-Mechanical Joints 2</p>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex w-max md:w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600 bg-blue-50' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t py-6 text-center text-slate-500 text-sm">
        <p>Engineering English Module • Lesson 29</p>
      </footer>
    </div>
  );
};

export default App;