import React, { useState } from 'react';
import { 
  BookOpen, 
  Maximize2, 
  Scale, 
  List, 
  PenTool, 
  Lightbulb, 
  CheckCircle,
  Zap,
  Box,
  Thermometer,
  ArrowRight
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'area' | 'mass' | 'vocab' | 'grammar' | 'examples' | 'exercises';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Data & Content ---

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'area', label: 'Area & Wires', icon: <Maximize2 className="w-4 h-4" /> },
  { id: 'mass', label: 'Mass vs Weight', icon: <Scale className="w-4 h-4" /> },
  { id: 'vocab', label: 'Vocabulary', icon: <List className="w-4 h-4" /> },
  { id: 'grammar', label: 'Grammar', icon: <PenTool className="w-4 h-4" /> },
  { id: 'examples', label: 'Examples', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'exercises', label: 'Exercises', icon: <CheckCircle className="w-4 h-4" /> },
];

const VOCAB_DATA = [
  { term: 'Area', def: 'Amount of surface or cross-section' },
  { term: 'Cross-sectional area', def: 'Area of a cut through an object' },
  { term: 'Surface area', def: 'Area exposed to the surrounding environment' },
  { term: 'Conductor', def: 'Material that carries electric current' },
  { term: 'Volume', def: 'Amount of three-dimensional space' },
  { term: 'Density', def: 'Mass per unit volume' },
  { term: 'Mass', def: 'Amount of matter in an object' },
  { term: 'Weight', def: 'Force caused by gravity acting on mass' },
];

// --- Sub-Components ---

const SectionTitle = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-slate-200">
    {icon}
    {children}
  </h2>
);

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {title && <h3 className="text-lg font-semibold text-slate-700 mb-4">{title}</h3>}
    {children}
  </div>
);

// --- Tab Content Components ---

const OverviewPanel = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle icon={<BookOpen className="text-blue-600" />}>Overview of the Topic</SectionTitle>
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="What creates this lesson?">
        <p className="text-slate-600 mb-4">
          This lesson explains fundamental engineering concepts used to describe materials and electrical performance.
          It focuses on the critical distinctions between physical properties.
        </p>
        <ul className="space-y-3">
          {[
            "Area (Cross-sectional vs. Surface)",
            "Size & Electrical Performance",
            "Weight vs. Mass",
            "Volume, Density & Mass Relationship"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Context">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
          <p className="text-sm text-blue-800 font-medium">
            Source Material Context
          </p>
          <p className="text-slate-600 mt-1">
            Examples are drawn from <span className="font-semibold">electrical wires</span>, 
            <span className="font-semibold"> power lines</span>, and 
            <span className="font-semibold"> materials engineering</span>.
          </p>
        </div>
        <div className="flex justify-center items-center h-32">
          <Zap className="w-16 h-16 text-yellow-500 opacity-80" />
        </div>
      </Card>
    </div>
  </div>
);

const AreaPanel = () => {
  const [radius, setRadius] = useState(1.38);
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <SectionTitle icon={<Maximize2 className="text-indigo-600" />}>Area: Cross-Section & Surface</SectionTitle>
      
      {/* Interactive Calculator Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="2.1 & 2.2 Cross-Sectional Area">
          <p className="text-slate-600 mb-4">
            Wire size is specified in <strong>mm²</strong>. This represents the cross-sectional area of the conductor.
            A larger area allows more current safely.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-2">Wire Radius (mm)</label>
            <input 
              type="range" 
              min="0.5" 
              max="5" 
              step="0.01" 
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
              className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer mb-4"
            />
            <div className="flex justify-between items-center text-sm mb-4">
              <span>Current Radius: <strong>{radius} mm</strong></span>
              <span>Formula: <span className="font-serif italic">A = πr²</span></span>
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div 
                className="rounded-full bg-orange-400 border-4 border-orange-600 transition-all duration-300 flex items-center justify-center text-white text-xs font-bold"
                style={{ width: `${radius * 20}px`, height: `${radius * 20}px` }}
              >
                Cu
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-800">{area}</div>
                <div className="text-sm text-slate-500">mm² Area</div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="2.3 Surface Area and Cooling">
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-slate-600 mb-4">
                For high-voltage lines, <strong>Surface Area</strong> is key for cooling.
                More surface contact with air = better heat dissipation.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>Engineering Strategy:</strong> Use groups of small cables instead of one huge cable.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-4 border border-dashed border-slate-300 rounded-lg">
                <div className="w-16 h-16 bg-slate-400 rounded-full mx-auto mb-2"></div>
                <p className="text-xs font-semibold">Single Large Cable</p>
                <p className="text-xs text-red-500">Less Surface Area (Hotter)</p>
              </div>
              <div className="text-center p-4 border border-dashed border-slate-300 rounded-lg">
                <div className="grid grid-cols-2 gap-1 w-16 mx-auto mb-2">
                   <div className="w-7 h-7 bg-slate-400 rounded-full"></div>
                   <div className="w-7 h-7 bg-slate-400 rounded-full"></div>
                   <div className="w-7 h-7 bg-slate-400 rounded-full"></div>
                   <div className="w-7 h-7 bg-slate-400 rounded-full"></div>
                </div>
                <p className="text-xs font-semibold">Bundled Cables</p>
                <p className="text-xs text-green-600">More Surface Area (Cooler)</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const MassPanel = () => {
  const [volume, setVolume] = useState(1);
  const [density, setDensity] = useState(1000); // Default water roughly
  const mass = volume * density;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <SectionTitle icon={<Scale className="text-green-600" />}>Mass, Weight, Volume & Density</SectionTitle>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="3.1 Weight vs Mass">
             <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-2">Mass (kg)</h4>
                  <p className="text-sm text-slate-600 mb-4">Independent of gravity. Contains the same amount of matter whether on Earth or in Space.</p>
                  <h4 className="font-bold text-slate-800 mb-2">Weight (N)</h4>
                  <p className="text-sm text-slate-600">Force exerted by gravity. Changes depending on where you are (Earth vs Moon).</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-lg w-full md:w-48 text-center">
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Concept</div>
                  <div className="font-bold">Mass is constant.</div>
                  <div className="font-bold text-blue-400">Weight changes.</div>
                </div>
             </div>
          </Card>

          <Card title="3.3 Interactive: Mass = Volume × Density">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Volume (m³)</label>
                  <input 
                    type="range" min="1" max="10" step="1" 
                    value={volume} onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-green-600"
                  />
                  <div className="text-center font-mono mt-1">{volume} m³</div>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Density (kg/m³)</label>
                   <select 
                    className="w-full p-2 border rounded bg-white text-sm"
                    value={density}
                    onChange={(e) => setDensity(Number(e.target.value))}
                   >
                     <option value="10">Expanded Polystyrene (10)</option>
                     <option value="1000">Water (1000)</option>
                     <option value="2400">Concrete (2400)</option>
                     <option value="7850">Steel (7850)</option>
                     <option value="11340">Lead (11340)</option>
                   </select>
                </div>
              </div>
              
              <div className="bg-slate-100 p-4 rounded flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Calculation</span>
                  <div className="font-mono text-lg">{volume} × {density} = </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Total Mass</span>
                  <div className="text-3xl font-bold text-green-700">{mass.toLocaleString()} kg</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
           <Card title="3.4 Material Examples" className="h-full bg-gradient-to-b from-white to-slate-50">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded mx-auto mb-2 shadow-lg"></div>
                  <h4 className="font-bold">Lead (Pb)</h4>
                  <p className="text-xs text-slate-500">Very Dense</p>
                  <p className="font-mono text-sm text-slate-800">11,340 kg/m³</p>
                </div>
                <hr />
                <div className="text-center opacity-70">
                  <div className="w-16 h-16 bg-slate-200 border border-slate-300 rounded mx-auto mb-2 dashed"></div>
                  <h4 className="font-bold">Polystyrene</h4>
                  <p className="text-xs text-slate-500">Lightweight</p>
                  <p className="font-mono text-sm text-slate-800">10 kg/m³</p>
                </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

const VocabPanel = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionTitle icon={<List className="text-purple-600" />}>Technical Vocabulary</SectionTitle>
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 font-semibold text-slate-700 border-b border-slate-200">Term</th>
            <th className="p-4 font-semibold text-slate-700 border-b border-slate-200">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {VOCAB_DATA.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium text-purple-700">{item.term}</td>
              <td className="p-4 text-slate-600">{item.def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const GrammarPanel = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionTitle icon={<PenTool className="text-pink-600" />}>Grammar Focus: Cause and Effect</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="The Structure">
        <p className="text-slate-600 mb-4">
          Engineering explanations frequently use <strong>cause-effect</strong> structures to explain relationships between variables.
        </p>
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
          <p className="font-medium text-pink-800 mb-2">Common Patterns:</p>
          <ul className="list-disc list-inside text-sm text-pink-700 space-y-1">
            <li>Increasing X allows Y...</li>
            <li>As X increases, Y increases...</li>
            <li>X causes Y because...</li>
          </ul>
        </div>
      </Card>

      <div className="space-y-4">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-slate-200 border-l-pink-500">
            <p className="text-slate-500 text-xs uppercase font-bold mb-2">Example 1</p>
            <p className="text-lg">
              "<span className="font-bold text-pink-600">Increasing</span> the cross-sectional area <span className="underline decoration-pink-300 decoration-2">allows</span> the conductor to carry more current."
            </p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-slate-200 border-l-pink-500">
            <p className="text-slate-500 text-xs uppercase font-bold mb-2">Example 2</p>
            <p className="text-lg">
              "<span className="font-bold text-pink-600">As</span> volume increases, mass <span className="underline decoration-pink-300 decoration-2">increases</span>."
            </p>
         </div>
      </div>
    </div>
  </div>
);

const ExamplesPanel = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionTitle icon={<Lightbulb className="text-yellow-600" />}>Practical Engineering Examples</SectionTitle>
    <div className="grid md:grid-cols-2 gap-4">
       {[
         { icon: <Thermometer className="text-red-500" />, title: "Overheating Prevention", text: "A larger cross-sectional area reduces resistance, reducing the risk of overheating in circuits." },
         { icon: <Box className="text-blue-500" />, title: "Cooling Efficiency", text: "Engineers use multiple small cables instead of one large one to provide greater surface area for air cooling." },
         { icon: <Scale className="text-green-500" />, title: "Density Comparison", text: "Two objects can have the exact same volume (size) but radically different masses if their densities differ (e.g., gold vs. foam)." },
         { icon: <Zap className="text-yellow-500" />, title: "Gravity Independence", text: "An electrical component has a specific mass. This mass remains constant whether the component is in a factory on Earth or installed on a satellite." }
       ].map((ex, i) => (
         <div key={i} className="flex gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="shrink-0 pt-1">{ex.icon}</div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">{ex.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{ex.text}</p>
            </div>
         </div>
       ))}
    </div>
  </div>
);

// --- Exercises Logic ---

const ExercisesPanel = () => {
  // Ex 1 State
  const [ex1Answers, setEx1Answers] = useState<Record<string, string>>({});
  const [ex1Status, setEx1Status] = useState<'idle'|'checked'>('idle');

  // Ex 2 State
  const [ex2Inputs, setEx2Inputs] = useState({ q1: '', q2: '', q3: '' });
  const [ex2Status, setEx2Status] = useState<'idle'|'checked'>('idle');

  // Ex 3 State
  const [showEx3Answer, setShowEx3Answer] = useState(false);

  // Check Logic
  const checkEx1 = () => setEx1Status('checked');
  const checkEx2 = () => setEx2Status('checked');

  const ex1Matches = {
    'Density': 'b',
    'Surface area': 'a',
    'Cross-sectional area': 'c',
    'Mass': 'd'
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <SectionTitle icon={<CheckCircle className="text-teal-600" />}>Exercises</SectionTitle>

      {/* Exercise 1 */}
      <Card title="Exercise 1: Vocabulary Match">
        <p className="text-slate-600 mb-6">Match the term to its meaning (select the correct letter).</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
             {Object.keys(ex1Matches).map((term) => (
               <div key={term} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200">
                 <span className="font-medium text-slate-700">{term}</span>
                 <select 
                    className={`ml-4 p-2 rounded border ${ex1Status === 'checked' 
                      ? (ex1Answers[term] === ex1Matches[term as keyof typeof ex1Matches] ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500')
                      : 'border-slate-300'}`}
                    onChange={(e) => setEx1Answers(prev => ({...prev, [term]: e.target.value}))}
                    value={ex1Answers[term] || ''}
                    disabled={ex1Status === 'checked'}
                 >
                   <option value="">Select...</option>
                   <option value="a">a</option>
                   <option value="b">b</option>
                   <option value="c">c</option>
                   <option value="d">d</option>
                 </select>
               </div>
             ))}
          </div>
          <div className="bg-slate-100 p-4 rounded text-sm space-y-2 text-slate-700">
             <p><strong>a.</strong> Area exposed to air</p>
             <p><strong>b.</strong> Mass per unit volume</p>
             <p><strong>c.</strong> Area of a cut through an object</p>
             <p><strong>d.</strong> Amount of matter in an object</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={checkEx1} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors disabled:opacity-50" disabled={ex1Status === 'checked'}>
            Check Answers
          </button>
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card title="Exercise 2: Sentence Completion">
        <p className="text-slate-600 mb-6">Complete the sentences using words from the lesson (area, volume, density).</p>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span>1. Increasing the cross-sectional</span>
            <input 
              type="text" 
              className={`border p-2 rounded w-40 ${ex2Status === 'checked' ? (ex2Inputs.q1.toLowerCase().includes('area') ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : ''}`}
              value={ex2Inputs.q1}
              onChange={(e) => setEx2Inputs({...ex2Inputs, q1: e.target.value})}
              placeholder="word..."
            />
            <span>allows more current to flow safely.</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span>2. The</span>
            <input 
              type="text" 
              className={`border p-2 rounded w-40 ${ex2Status === 'checked' ? (ex2Inputs.q2.toLowerCase().includes('volume') ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : ''}`}
              value={ex2Inputs.q2}
              onChange={(e) => setEx2Inputs({...ex2Inputs, q2: e.target.value})}
              placeholder="word..."
            />
            <span>of an object is measured in cubic metres.</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span>3. Lead is heavy because it has a high</span>
            <input 
              type="text" 
              className={`border p-2 rounded w-40 ${ex2Status === 'checked' ? (ex2Inputs.q3.toLowerCase().includes('density') ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : ''}`}
              value={ex2Inputs.q3}
              onChange={(e) => setEx2Inputs({...ex2Inputs, q3: e.target.value})}
              placeholder="word..."
            />
            <span>.</span>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={checkEx2} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors disabled:opacity-50" disabled={ex2Status === 'checked'}>
            Check Answers
          </button>
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card title="Exercise 3: Applied Writing (Challenge)">
        <p className="text-slate-600 mb-4">Rewrite the sentence using formal engineering style and passive voice.</p>
        
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-4">
          <p className="text-sm font-bold text-yellow-800 uppercase mb-1">Original Active Sentence:</p>
          <p className="text-lg font-medium text-slate-800">"Engineers increase surface area to improve cooling of power cables."</p>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-sm">Think about how to start the sentence with "Surface area..."</span>
            <button 
              onClick={() => setShowEx3Answer(!showEx3Answer)}
              className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
            >
              {showEx3Answer ? 'Hide Answer' : 'Show Answer'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {showEx3Answer && (
            <div className="mt-4 p-4 bg-teal-50 border border-teal-100 rounded animate-in slide-in-from-top-2">
              <p className="text-sm font-bold text-teal-800 uppercase mb-1">Suggested Rewrites:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>"Surface area is increased to improve the cooling of power cables."</li>
                <li>"To improve cooling, the surface area of power cables is increased."</li>
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};


// --- Main App Component ---

const Lesson9App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPanel />;
      case 'area': return <AreaPanel />;
      case 'mass': return <MassPanel />;
      case 'vocab': return <VocabPanel />;
      case 'grammar': return <GrammarPanel />;
      case 'examples': return <ExamplesPanel />;
      case 'exercises': return <ExercisesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header & Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Lesson: Area, Size, and Mass</h1>
          <p className="text-slate-500 mb-6">Technical English for Engineering</p>
          
          {/* Scrollable Tab Container */}
          <div className="flex overflow-x-auto no-scrollbar gap-1 -mb-px">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium whitespace-nowrap transition-colors
                    ${isActive 
                      ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-8">
        <p>© 2024 Engineering English Module. Use tabs above to navigate.</p>
      </footer>
    </div>
  );
};

export default Lesson9App;