import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  FlaskConical, 
  BrickWall, 
  ShieldCheck, 
  Globe, 
  Table as TableIcon, 
  MessageSquare,
  CheckCircle2,
  Cpu
} from 'lucide-react';

// --- Types ---
type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

// --- Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "blue" }: { children: React.ReactNode, variant?: "blue" | "green" | "amber" | "purple" }) => {
  const variants = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-emerald-100 text-emerald-700 border-emerald-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
  };
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  );
};

// --- Main App ---
export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const sections: Section[] = [
    {
      id: 'overview',
      title: 'Overview',
      icon: BookOpen,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <header className="border-b border-slate-100 dark:border-slate-700 pb-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Course Introduction</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Inorganic, non-metallic engineering materials.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-l-4 border-l-blue-500">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" /> Foundations
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Minerals vs. Rocks</li>
                <li>• Metallic vs. Non-metallic minerals</li>
              </ul>
            </Card>
            <Card className="border-l-4 border-l-emerald-500">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-emerald-500" /> Engineering
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Ceramic production and usage</li>
                <li>• Properties of glass and safety glass</li>
              </ul>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'minerals',
      title: 'Minerals & Ores',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-4">What are Minerals?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              A mineral is a <strong>natural, inorganic material</strong> found in the ground, often within rocks. Unlike rocks, which are mixtures, minerals are often quite pure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-center border border-slate-100 dark:border-slate-700">
                <div className="font-bold text-blue-600">Natural</div>
                <div className="text-xs text-slate-500">Occurs in nature</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-center border border-slate-100 dark:border-slate-700">
                <div className="font-bold text-blue-600">Inorganic</div>
                <div className="text-xs text-slate-500">Non-living matter</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg text-center border border-slate-100 dark:border-slate-700">
                <div className="font-bold text-blue-600">Underground</div>
                <div className="text-xs text-slate-500">Found in crust/rocks</div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Badge variant="blue">Metallic</Badge>
              <h4 className="font-bold mt-2">Metallic Minerals</h4>
              <p className="text-sm text-slate-500 mt-1 mb-3">Sources used to extract metals.</p>
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold">Fe</div>
                <div>
                  <div className="font-medium">Iron Ore</div>
                  <div className="text-xs">Primary source for steel</div>
                </div>
              </div>
            </Card>
            <Card>
              <Badge variant="purple">Non-Metallic</Badge>
              <h4 className="font-bold mt-2">Non-Metallic Minerals</h4>
              <p className="text-sm text-slate-500 mt-1 mb-3">Used for specific properties (hardness, chemistry).</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Diamond</span>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">Abrasive (Industrial)</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Silicon (Silica)</span>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">Glass / Sand</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'ceramics',
      title: 'Ceramics',
      icon: BrickWall,
      content: (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 border-amber-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-2">Defining Ceramics</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Ceramics are inorganic, non-metallic materials formed by <strong>heating</strong>. 
              Because glass is formed by heating silica, glass is technically a ceramic.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <FlaskConical className="w-4 h-4 text-amber-600" /> Vitrification
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                When materials are heated to extremely high temperatures, they may form 
                ceramics that are glass-like with a similar internal structure. 
                This process is called <strong>vitrification</strong>.
              </p>
              <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-800 dark:text-amber-200 text-sm italic">
                Example: Clay pipes can be vitrified to make them waterproof.
              </div>
            </Card>
            <Card>
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <BrickWall className="w-4 h-4 text-orange-600" /> Construction
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold">Bricks</div>
                  <div className="text-xs text-slate-500">Made from clay, fired in a <strong>kiln</strong> (industrial oven).</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'glass',
      title: 'Glass Production',
      icon: Layers,
      content: (
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-4">Float Glass Manufacturing</h3>
            <div className="relative p-6 bg-slate-100 dark:bg-slate-900 rounded-xl mb-4 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="flex-1 space-y-3 text-center md:text-left">
                  <h4 className="font-bold text-blue-600">The Floating Process</h4>
                  <p className="text-sm">Molten glass is <strong>floated on molten tin</strong> to produce perfectly flat sheets.</p>
                  <div className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-xs font-bold uppercase tracking-wider">
                    Annealing Phase
                  </div>
                  <p className="text-xs italic text-slate-500">After forming, glass is annealed (cooled slowly).</p>
                </div>
                <div className="w-full md:w-64 h-32 bg-gradient-to-r from-blue-300 to-cyan-300 rounded border-t-4 border-slate-300 dark:border-slate-600 shadow-inner flex items-center justify-center">
                  <span className="text-white font-bold opacity-50">Molten Tin</span>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 flex items-center gap-2 mb-2">
                ⚠️ The Problem with Annealed Glass
              </h4>
              <p className="text-sm text-red-800 dark:text-red-300">
                If annealed glass breaks, it forms <strong>dangerous, sharp pieces</strong>. 
                It is generally unsuitable for engineering and architectural uses without further processing.
              </p>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'safety-glass',
      title: 'Safety Glass',
      icon: ShieldCheck,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-cyan-500">
              <h3 className="text-lg font-bold mb-3">Toughened (Tempered) Glass</h3>
              <div className="text-sm space-y-3">
                <p>Created by heating glass and holding it at temperature to change its internal structure.</p>
                <div className="p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded border border-cyan-100 dark:border-cyan-800">
                  <strong className="text-cyan-700 dark:text-cyan-400">Behavior:</strong> Shatters into tiny, relatively harmless pieces.
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-800">
                  <strong className="text-red-700 dark:text-red-400">Disadvantage:</strong> Sensitive to small impacts (like stones). Unsuitable for windscreens.
                </div>
              </div>
            </Card>

            <Card className="border-t-4 border-t-indigo-500">
              <h3 className="text-lg font-bold mb-3">Laminated Glass</h3>
              <div className="text-sm space-y-3">
                <p>Created by laminating glass layers with a <strong>polymer</strong> middle layer.</p>
                <div className="flex flex-col items-center gap-1 p-2 bg-slate-100 dark:bg-slate-900 rounded">
                  <div className="w-full h-2 bg-blue-300 rounded"></div>
                  <div className="w-full h-1 bg-slate-400 rounded"></div>
                  <div className="w-full h-2 bg-blue-300 rounded"></div>
                  <span className="text-[10px] uppercase text-slate-500">Glass-Polymer Sandwich</span>
                </div>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded border border-indigo-100 dark:border-indigo-800">
                  <strong className="text-indigo-700 dark:text-indigo-400">Behavior:</strong> Pieces stay bonded to the polymer if broken. They do not fly apart.
                </div>
                <p className="font-semibold text-center mt-2">Best for: Vehicle Windscreens</p>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary',
      icon: TableIcon,
      content: (
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 uppercase font-bold">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Term</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {[
                    { term: "Mineral", def: "Natural, inorganic material" },
                    { term: "Rock", def: "Mixture of minerals" },
                    { term: "Ceramic", def: "Inorganic, non-metallic material formed by heating" },
                    { term: "Abrasive", def: "Very hard material used for cutting or grinding" },
                    { term: "Vitrified", def: "Heated to form a glass-like structure" },
                    { term: "Kiln", def: "High-temperature industrial oven" },
                    { term: "Float glass", def: "Flat glass made by floating molten glass" },
                    { term: "Annealed", def: "Slowly cooled to relieve stress" },
                    { term: "Toughened glass", def: "Glass that shatters into small pieces" },
                    { term: "Laminated glass", def: "Glass bonded with a polymer layer" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">{row.term}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'grammar',
      title: 'Grammar & Context',
      icon: MessageSquare,
      content: (
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-4">Defining Processes</h3>
            <p className="text-sm text-slate-500 mb-4">Technical texts often use defining clauses and the passive voice to describe manufacturing.</p>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-slate-400 uppercase">Definition</div>
                <div className="text-slate-700 dark:text-slate-200">"A mineral <strong>is</strong> a natural, inorganic material..."</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-slate-400 uppercase">Process Explanation</div>
                <div className="text-slate-700 dark:text-slate-200">"These are made from clay, and <strong>are then fired</strong> in a kiln."</div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-slate-500" /> Engineering Context
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm">Industrial diamond is used in <strong>cutting tools</strong>.</span>
              </li>
              <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm">Bricks are fired in a kiln to <strong>increase strength</strong>.</span>
              </li>
              <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm">Float glass is processed into <strong>safety glass</strong> for buildings.</span>
              </li>
              <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm">Laminated glass is used in <strong>vehicle windscreens</strong>.</span>
              </li>
            </ul>
          </Card>
        </div>
      )
    },
    {
      id: 'exercises',
      title: 'Exercises',
      icon: CheckCircle2,
      content: (
        <div className="space-y-8 pb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Exercise 1: Vocabulary (Easy)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { term: "Vitrified", key: "b" },
                { term: "Kiln", key: "d" },
                { term: "Annealed", key: "a" },
                { term: "Laminated glass", key: "c" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border rounded shadow-sm">
                  <span className="font-medium">{item.term}</span>
                  <select className="text-xs bg-slate-100 dark:bg-slate-700 p-1 rounded border-none focus:ring-2 ring-blue-500">
                    <option>?</option>
                    <option value="a">a. Slow cooling</option>
                    <option value="b">b. Glass-like</option>
                    <option value="c">c. Bonded layers</option>
                    <option value="d">d. Industrial oven</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Exercise 2: Sentence Completion</h3>
            <Card className="space-y-4">
              <div className="text-sm">
                1. Bricks are made from clay and fired in a <input type="text" className="border-b border-slate-400 focus:outline-none w-24 px-1" placeholder="..." />.
              </div>
              <div className="text-sm">
                2. Glass that breaks into small pieces is called <input type="text" className="border-b border-slate-400 focus:outline-none w-24 px-1" placeholder="..." /> glass.
              </div>
              <div className="text-sm">
                3. Laminated glass contains a <input type="text" className="border-b border-slate-400 focus:outline-none w-24 px-1" placeholder="..." /> layer between sheets.
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Exercise 3: Applied Writing</h3>
            <Card>
              <div className="text-xs font-bold text-slate-400 uppercase mb-2">Original Sentence</div>
              <p className="italic text-slate-600 dark:text-slate-400 mb-4">"Manufacturers heat glass and laminate it with a polymer for safety."</p>
              
              <div className="text-xs font-bold text-slate-400 uppercase mb-2">Rewritten (Formal/Passive)</div>
              <textarea 
                className="w-full h-24 p-3 bg-slate-50 dark:bg-slate-900 border rounded-lg focus:ring-2 ring-blue-500 text-sm"
                placeholder="Rewrite the sentence here..."
              ></textarea>
              <p className="text-[10px] mt-2 text-slate-400">Hint: Start with "Glass is heated and..."</p>
            </Card>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Minerals <span className="text-blue-600">&</span> Ceramics
          </h1>
          <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">Engineering Materials & Processes</p>
        </div>

        {/* Tab Navigation - Scrollable on mobile */}
        <div className="flex items-center overflow-x-auto pb-2 scrollbar-hide border-b border-slate-200 dark:border-slate-800 mb-8 sticky top-0 bg-slate-50 dark:bg-slate-950 z-50">
          <div className="flex space-x-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-t-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                    ${isActive 
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-white dark:bg-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel Content */}
        <main className="min-h-[500px]">
          {sections.find(s => s.id === activeTab)?.content}
        </main>

        {/* Footer info */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
          <p>Technical English for Materials Science & Engineering</p>
        </footer>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}