import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  Beaker, 
  Cpu, 
  BookOpen, 
  Table as TableIcon, 
  Edit3, 
  CheckCircle2,
  AlertCircle,
  FlaskConical,
  Microscope
} from 'lucide-react';

// --- Types ---
type TabId = 'overview' | 'metals' | 'composition' | 'composites' | 'vocabulary' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

// --- Components ---

const Header = () => (
  <header className="bg-slate-900 text-white p-6 shadow-lg">
    <div className="max-w-6xl mx-auto flex items-center gap-4">
      <div className="bg-blue-600 p-3 rounded-lg">
        <Layers size={32} />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Engineering Materials</h1>
        <p className="text-slate-400 text-sm">Classification, Composition, and Structure</p>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 border-b pb-2">
    {Icon && <Icon className="text-blue-600" size={28} />}
    {children}
  </h2>
);

const InfoCard = ({ title, children, color = "blue" }: { title: string, children: React.ReactNode, color?: string }) => {
  const colorClasses: Record<string, string> = {
    blue: "border-l-4 border-blue-500 bg-blue-50",
    green: "border-l-4 border-emerald-500 bg-emerald-50",
    purple: "border-l-4 border-purple-500 bg-purple-50",
    amber: "border-l-4 border-amber-500 bg-amber-50",
  };

  return (
    <div className={`p-5 rounded-r-xl mb-4 ${colorClasses[color] || colorClasses.blue}`}>
      <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
      <div className="text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
};

// --- Panels ---

const OverviewPanel = () => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle icon={Box}>Overview of the Topic</SectionTitle>
    <p className="text-lg text-slate-700 mb-6">
      This lesson explains how engineering materials are classified according to their properties, 
      internal structure, and chemical makeup. Understanding these categories is fundamental for 
      selecting the right material for any engineering application.
    </p>
    <div className="grid md:grid-cols-2 gap-4">
      <InfoCard title="Primary Classification" color="blue">
        Distinguishing between metals and non-metals based on physical and chemical characteristics.
      </InfoCard>
      <InfoCard title="Chemical Composition" color="green">
        Analyzing the difference between pure elements, chemically bonded compounds, and physical mixtures.
      </InfoCard>
      <InfoCard title="Advanced Structures" color="purple">
        Exploring alloys and composite materials designed for high-performance modern engineering.
      </InfoCard>
      <InfoCard title="Source Material" color="amber">
        Includes examples from basic chemistry to advanced aerospace applications like Formula 1.
      </InfoCard>
    </div>
  </div>
);

const MetalsPanel = () => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle icon={FlaskConical}>Metals and Non-Metals</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Metals</h3>
        <p className="mb-4 text-slate-600">Engineering materials are traditionally split into two major groups.</p>
        <div className="space-y-4">
          <div className="bg-white border p-4 rounded-lg shadow-sm">
            <span className="font-bold text-slate-800 block mb-1">Ferrous Metals</span>
            <p className="text-sm text-slate-600">Materials that contain iron (Fe) as the primary constituent.</p>
            <span className="inline-block mt-2 px-2 py-1 bg-slate-100 text-xs rounded">Example: Cast Iron, Steel</span>
          </div>
          <div className="bg-white border p-4 rounded-lg shadow-sm">
            <span className="font-bold text-slate-800 block mb-1">Non-Ferrous Metals</span>
            <p className="text-sm text-slate-600">Metals that do not contain iron.</p>
            <span className="inline-block mt-2 px-2 py-1 bg-slate-100 text-xs rounded">Example: Copper (Cu), Aluminium (Al), Gold</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
        <h3 className="text-xl font-semibold mb-4 text-emerald-700">Non-Metals</h3>
        <p className="text-slate-600 mb-4">Materials lacking metallic properties, often used for insulation or specialized tech.</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Carbon (C):</strong> Essential for composites and electronics.</li>
          <li><strong>Silicon (Si):</strong> The foundation of semiconductor technology.</li>
          <li>Used extensively in <strong>ceramics</strong> and <strong>polymers</strong>.</li>
        </ul>
      </div>
    </div>
  </div>
);

const CompositionPanel = () => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle icon={Beaker}>Elements, Compounds, and Mixtures</SectionTitle>
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-bold text-blue-800 mb-2">3.1 Elements</h3>
          <p className="text-slate-700 mb-3">Pure materials in their most basic form. They cannot be broken down further.</p>
          <div className="flex gap-2">
            {['Fe (Iron)', 'C (Carbon)', 'Al (Aluminium)'].map(el => (
              <span key={el} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">{el}</span>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
          <h3 className="text-lg font-bold text-emerald-800 mb-2">3.2 Compounds</h3>
          <p className="text-slate-700 mb-3">Two or more elements chemically bound together by a reaction.</p>
          <p className="text-sm font-medium text-emerald-600">Example: Water (H₂O)</p>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
        <h3 className="text-lg font-bold text-amber-800 mb-2">3.3 & 3.4 Mixtures and Alloys</h3>
        <p className="text-slate-700 mb-4">Elements or compounds mixed together but <strong>not</strong> chemically bonded.</p>
        <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-2">Engineering Focus: Alloys</h4>
          <p className="text-slate-600 mb-4">Metals mixed with other metals or non-metals to enhance properties.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded">
              <span className="font-bold block">Steel</span>
              <span className="text-sm">Iron + Carbon</span>
            </div>
            <div className="p-3 bg-slate-50 rounded">
              <span className="font-bold block">Alloying Additives</span>
              <span className="text-sm">Chromium (Cr), Manganese (Mn), Tungsten (W)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CompositesPanel = () => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle icon={Layers}>Composite Materials</SectionTitle>
    <div className="mb-8 p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">The Golden Rule of Composites</h3>
        <p className="text-slate-300 text-lg">Matrix + Reinforcement = Improved Performance</p>
      </div>
      <div className="absolute top-0 right-0 opacity-10 p-4">
        <Layers size={120} />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="border p-5 rounded-xl">
        <h4 className="font-bold text-blue-600 mb-2">The Matrix</h4>
        <p className="text-slate-600">The surrounding material that supports and protects the reinforcement.</p>
      </div>
      <div className="border p-5 rounded-xl">
        <h4 className="font-bold text-emerald-600 mb-2">The Reinforcement</h4>
        <p className="text-slate-600">The structural network inside that provides strength or stiffness.</p>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="font-bold text-lg text-slate-800">Evolution of Composites</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center gap-4 bg-white border p-4 rounded-lg shadow-sm">
          <div className="bg-amber-100 text-amber-700 p-2 rounded">Historical</div>
          <p className="text-slate-700"><strong>Mud Bricks:</strong> Mud (Matrix) + Straw (Reinforcement)</p>
        </div>
        <div className="flex items-center gap-4 bg-white border p-4 rounded-lg shadow-sm">
          <div className="bg-blue-100 text-blue-700 p-2 rounded">Modern</div>
          <p className="text-slate-700"><strong>Carbon Fibre:</strong> High-tech polymer (Matrix) + Carbon (Reinforcement)</p>
        </div>
        <div className="flex items-center gap-4 bg-white border p-4 rounded-lg shadow-sm">
          <div className="bg-emerald-100 text-emerald-700 p-2 rounded">GRP</div>
          <p className="text-slate-700"><strong>Fibreglass:</strong> Plastic (Matrix) + Glass Fibres (Reinforcement)</p>
        </div>
      </div>
    </div>
  </div>
);

const VocabularyPanel = () => {
  const vocab = [
    { term: "Metal", def: "Material with metallic properties" },
    { term: "Non-metal", def: "Material without metallic properties" },
    { term: "Ferrous", def: "Containing iron" },
    { term: "Non-ferrous", def: "Not containing iron" },
    { term: "Element", def: "Pure substance in basic form" },
    { term: "Compound", def: "Chemically bonded elements" },
    { term: "Mixture", def: "Materials mixed, not chemically bonded" },
    { term: "Alloy", def: "Mixture based on a metal" },
    { term: "Matrix", def: "Material surrounding reinforcement" },
    { term: "Reinforcement", def: "Material that strengthens a composite" },
    { term: "Composite", def: "Material made from matrix and reinforcement" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <SectionTitle icon={TableIcon}>Technical Vocabulary</SectionTitle>
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-100 text-slate-600 uppercase text-xs font-bold">
            <tr>
              <th className="px-6 py-4">Term</th>
              <th className="px-6 py-4">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vocab.map((v, i) => (
              <tr key={v.term} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                <td className="px-6 py-4 font-bold text-slate-800">{v.term}</td>
                <td className="px-6 py-4 text-slate-600">{v.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GrammarPanel = () => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle icon={BookOpen}>Grammar & Practical Examples</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">Defining and Classifying</h3>
        <p className="text-slate-600 mb-4">Technical writing uses specific structures to define materials:</p>
        <ul className="space-y-4">
          <li className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <code className="text-blue-700 block mb-1">“Ferrous metals are those that contain iron.”</code>
            <span className="text-xs text-slate-500">Structure: [Subject] + [be] + [Defining Relative Clause]</span>
          </li>
          <li className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
            <code className="text-emerald-700 block mb-1">“Compounds consist of elements that are chemically bound.”</code>
            <span className="text-xs text-slate-500">Structure: [Subject] + [consist of] + [Defining Relative Clause]</span>
          </li>
          <li className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
            <code className="text-purple-700 block mb-1">“Alloys are metals which have other metals mixed with them.”</code>
            <span className="text-xs text-slate-500">Structure: [Subject] + [be] + [Relative Clause (which)]</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">Practical Contexts</h3>
        <div className="space-y-3">
          {[
            "Steel is classified as a ferrous alloy.",
            "Aluminium is a non-ferrous metal.",
            "Water is a compound, not a mixture.",
            "GRP combines a plastic matrix with glass reinforcement."
          ].map((ex, i) => (
            <div key={i} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
              <span className="text-slate-700 font-medium">{ex}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExercisesPanel = () => {
  const [exercise1, setExercise1] = useState<Record<string, string>>({});
  const [exercise2, setExercise2] = useState<string[]>(['', '', '']);
  const [exercise3, setExercise3] = useState('');

  const check1 = {
    'Ferrous': 'a',
    'Compound': 'b',
    'Alloy': 'c',
    'Matrix': 'd'
  };

  const check2 = ['alloy', 'element', 'matrix'];

  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-12">
      <div>
        <SectionTitle icon={Edit3}>Exercise 1: Vocabulary Match</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {Object.keys(check1).map(term => (
              <div key={term} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-bold">{term}</span>
                <select 
                  className="p-1 border rounded bg-white text-sm"
                  onChange={(e) => setExercise1(prev => ({...prev, [term]: e.target.value}))}
                  value={exercise1[term] || ""}
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
          <div className="text-slate-600 bg-slate-50 p-4 rounded-lg space-y-2">
            <p><strong>a.</strong> Material containing iron</p>
            <p><strong>b.</strong> Chemically bonded elements</p>
            <p><strong>c.</strong> Metal-based mixture</p>
            <p><strong>d.</strong> Material surrounding reinforcement</p>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle icon={Edit3}>Exercise 2: Sentence Completion</SectionTitle>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 p-4 bg-white border rounded-lg">
            <span>Steel is an iron–carbon</span>
            <input 
              className={`border-b-2 focus:outline-none px-2 w-32 text-center transition-colors ${exercise2[0].toLowerCase() === 'alloy' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300'}`}
              placeholder="..."
              value={exercise2[0]}
              onChange={(e) => {
                const n = [...exercise2];
                n[0] = e.target.value;
                setExercise2(n);
              }}
            />
            <span>.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 p-4 bg-white border rounded-lg">
            <span>Aluminium is an example of an</span>
            <input 
              className={`border-b-2 focus:outline-none px-2 w-32 text-center transition-colors ${exercise2[1].toLowerCase() === 'element' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300'}`}
              placeholder="..."
              value={exercise2[1]}
              onChange={(e) => {
                const n = [...exercise2];
                n[1] = e.target.value;
                setExercise2(n);
              }}
            />
            <span>.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 p-4 bg-white border rounded-lg">
            <span>In a composite, the</span>
            <input 
              className={`border-b-2 focus:outline-none px-2 w-32 text-center transition-colors ${exercise2[2].toLowerCase() === 'matrix' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300'}`}
              placeholder="..."
              value={exercise2[2]}
              onChange={(e) => {
                const n = [...exercise2];
                n[2] = e.target.value;
                setExercise2(n);
              }}
            />
            <span>surrounds the reinforcing material.</span>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle icon={Edit3}>Exercise 3: Applied Writing</SectionTitle>
        <p className="text-sm text-slate-500 mb-4 italic">Rewrite: "Engineers mix metals to create alloys with improved properties" using formal style and passive voice.</p>
        <textarea 
          className="w-full h-32 p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type your rewrite here..."
          value={exercise3}
          onChange={(e) => setExercise3(e.target.value)}
        />
        {exercise3.toLowerCase().includes('are mixed') && (
          <div className="mt-4 p-4 bg-emerald-50 text-emerald-700 rounded-lg flex gap-3 items-center">
            <CheckCircle2 size={20} />
            <span>Great job using the passive voice ("metals are mixed")!</span>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Box },
    { id: 'metals', label: 'Metals vs Non-Metals', icon: FlaskConical },
    { id: 'composition', label: 'Composition', icon: Beaker },
    { id: 'composites', label: 'Composites', icon: Layers },
    { id: 'vocabulary', label: 'Vocabulary', icon: TableIcon },
    { id: 'grammar', label: 'Grammar', icon: BookOpen },
    { id: 'exercises', label: 'Exercises', icon: Edit3 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPanel />;
      case 'metals': return <MetalsPanel />;
      case 'composition': return <CompositionPanel />;
      case 'composites': return <CompositesPanel />;
      case 'vocabulary': return <VocabularyPanel />;
      case 'grammar': return <GrammarPanel />;
      case 'exercises': return <ExercisesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Navigation Tabs */}
        <div className="flex flex-nowrap overflow-x-auto pb-2 mb-8 border-b scrollbar-hide gap-1 md:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all duration-200 whitespace-nowrap font-medium text-sm md:text-base ${
                  isActive 
                  ? 'bg-white text-blue-600 border-t-2 border-x border-blue-600 shadow-sm translate-y-[1px]' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 min-h-[500px]">
          {renderContent()}
        </div>
      </main>

      <footer className="max-w-6xl mx-auto p-8 text-center text-slate-400 text-sm">
        Engineering Materials Lesson Module &bull; 2024
      </footer>
    </div>
  );
}