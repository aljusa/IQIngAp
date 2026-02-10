import React, { useState } from 'react';
import { 
  Trees, 
  Construction, 
  Settings, 
  Layers, 
  BookOpen, 
  PenTool, 
  GraduationCap, 
  Info,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

// --- Types ---
type TabId = 'overview' | 'categories' | 'timber' | 'engineered' | 'vocabulary' | 'grammar' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Card = ({ children, title, icon }: { children: React.ReactNode; title?: string; icon?: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6">
    {title && (
      <div className="border-b border-stone-100 bg-stone-50/50 px-6 py-4 flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-stone-800 uppercase tracking-wider text-sm">{title}</h3>
      </div>
    )}
    <div className="p-6 text-stone-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const Highlight = ({ children, color = "amber" }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    amber: "bg-amber-50 border-amber-200 text-amber-900",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
    blue: "bg-blue-50 border-blue-200 text-blue-900",
  };
  return (
    <span className={`px-1.5 py-0.5 rounded border font-medium ${colors[color] || colors.amber}`}>
      {children}
    </span>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  // Exercise State
  const [ex1Answers, setEx1Answers] = useState<Record<string, string>>({});
  const [ex2Answers, setEx2Answers] = useState({ section: '', planed: '', strands: '' });
  const [ex3Text, setEx3Text] = useState('');
  const [showResults, setShowResults] = useState(false);

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'categories', label: 'Categories', icon: <Trees size={18} /> },
    { id: 'timber', label: 'Structural Timber', icon: <Construction size={18} /> },
    { id: 'engineered', label: 'Engineered Wood', icon: <Layers size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <BookOpen size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
    { id: 'examples', label: 'Context', icon: <Settings size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <GraduationCap size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Lesson: Wood</h1>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                An engineering and construction reference guide to understanding wood categories, structural timber production, and engineered products.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="What you will learn">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                    <span>Main categories of wood (Hardwood vs Softwood)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                    <span>Difference between solid wood and engineered wood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                    <span>Structural timber production and strength grading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                    <span>Common engineered wood products in construction</span>
                  </li>
                </ul>
              </Card>
              <div className="bg-stone-800 rounded-xl p-6 text-white flex flex-col justify-center shadow-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Construction className="text-amber-400" />
                  Engineering Perspective
                </h3>
                <p className="opacity-90 italic">
                  "In construction, wood is not just a biological material but a structural element with specific mechanical properties, surface finishes, and grading standards."
                </p>
              </div>
            </div>
          </div>
        );

      case 'categories':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Hardwood" icon={<Trees className="text-orange-800" />}>
                <p className="mb-4">Usually comes from <Highlight color="amber">deciduous trees</Highlight> (trees that lose leaves in autumn).</p>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-sm">
                  <strong>Note:</strong> Some hardwoods, like tropical hardwoods, may come from other tree types.
                </div>
              </Card>
              <Card title="Softwood" icon={<Trees className="text-emerald-700" />}>
                <p className="mb-4">Comes from <Highlight color="emerald">coniferous trees</Highlight> (evergreens that remain green year-round).</p>
                <p className="text-sm text-stone-500">Softwood is widely used in construction due to its availability and straight growth patterns.</p>
              </Card>
            </div>
            <Card title="Engineering Classifications" icon={<Settings />}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">Solid Wood</h4>
                  <p className="text-sm mb-2">Can be hardwood or softwood. Sawn into specific shapes and sizes.</p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-stone-600">
                    <li>Retains natural structure</li>
                    <li>Includes natural grain and knots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">Engineered Wood</h4>
                  <p className="text-sm mb-2">Made by bonding materials together using resins and adhesives.</p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-stone-600">
                    <li>Layering solid wood sections</li>
                    <li>Mixing wood particles with resin</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'timber':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid md:grid-cols-3 gap-4">
              <Card title="1. Section & Milling">
                <p className="text-sm mb-3">Timber is cut to specific <strong>sections</strong> (Width × Depth).</p>
                <p className="text-sm text-stone-500">Dimensions determine the cross-sectional area, which is vital for load calculations.</p>
              </Card>
              <Card title="2. Surface Finish">
                <p className="text-sm mb-3">Default: <Highlight color="amber">Rough-sawn</Highlight> (coarse texture from circular saws).</p>
                <p className="text-sm">For visibility: <Highlight color="blue">Planed</Highlight> (smoothed by machine for aesthetics).</p>
              </Card>
              <Card title="3. Strength Grading">
                <p className="text-sm mb-3">Assigned a <strong>Stress Grade</strong> used in design calculations.</p>
                <ul className="text-xs space-y-1 text-stone-600">
                  <li><strong>Mechanical:</strong> Machine tested.</li>
                  <li><strong>Visual:</strong> Human inspection (checking knots/weaknesses).</li>
                </ul>
              </Card>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-amber-900 font-medium">Why grade timber?</p>
              <p className="text-amber-800 text-sm italic">"The strength of structural timber varies naturally. Grading ensures that engineers use predictable values for safety."</p>
            </div>
          </div>
        );

      case 'engineered':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card title="Particle Board">
                <p className="text-xs font-semibold text-stone-400 mb-1">CHIPBOARD</p>
                <p className="text-sm">Cheap materials, low structural strength.</p>
              </Card>
              <Card title="MDF">
                <p className="text-xs font-semibold text-stone-400 mb-1">FIBREBOARD</p>
                <p className="text-sm">Made from wood fibres bonded with resin.</p>
              </Card>
              <Card title="OSB">
                <p className="text-xs font-semibold text-stone-400 mb-1">ORIENTED STRAND</p>
                <p className="text-sm">Strands of wood bonded with resin. Suitable for structure.</p>
              </Card>
              <Card title="Plywood">
                <p className="text-xs font-semibold text-stone-400 mb-1">LAYERED</p>
                <p className="text-sm">Plies bonded with grain at 90° for high strength.</p>
              </Card>
            </div>
            <Card title="Glue-Laminated Timber (Glulam)" icon={<Layers />}>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="mb-4">Glulams are made by bonding layers of wood together to form major structural elements.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      Used for large-span beams
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      Common in large public or commercial buildings
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-stone-100 h-32 rounded-lg flex items-center justify-center border-2 border-dashed border-stone-300">
                   <div className="space-y-1">
                      <div className="h-4 w-48 bg-stone-400 rounded"></div>
                      <div className="h-4 w-48 bg-stone-500 rounded"></div>
                      <div className="h-4 w-48 bg-stone-400 rounded"></div>
                      <div className="h-4 w-48 bg-stone-500 rounded"></div>
                   </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'vocabulary':
        const vocab = [
          { t: "Hardwood", d: "Wood from deciduous trees" },
          { t: "Softwood", d: "Wood from coniferous trees" },
          { t: "Grain", d: "Direction of wood fibres" },
          { t: "Knot", d: "Hard area where a branch grew" },
          { t: "Section", d: "Width and depth of timber" },
          { t: "Rough-sawn", d: "Surface finish from a saw" },
          { t: "Planed", d: "Smoothed by machining" },
          { t: "Stress grade", d: "Standard strength classification" },
          { t: "Engineered wood", d: "Wood bonded with resin or adhesives" },
          { t: "Plywood", d: "Layered wood with crossed grain" },
          { t: "OSB", d: "Oriented strand board" },
          { t: "Glulam", d: "Glue-laminated timber" },
        ];
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card title="Technical Terms Glossary">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-stone-100">
                      <th className="py-3 font-bold text-stone-900">Term</th>
                      <th className="py-3 font-bold text-stone-900">Definition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {vocab.map((v, i) => (
                      <tr key={i} className="hover:bg-stone-50 transition-colors">
                        <td className="py-3 pr-4 font-semibold text-amber-800">{v.t}</td>
                        <td className="py-3 text-stone-600">{v.d}</td>
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
            <Card title="Passive Voice in Technical Descriptions" icon={<PenTool />}>
              <p className="mb-4 text-stone-600">
                In engineering and technical handbooks, the <strong>passive voice</strong> is preferred when describing processes where the action or the result is more important than who performs it.
              </p>
              <div className="space-y-4">
                <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-stone-300">
                  <p className="text-xs font-bold text-stone-400 mb-1 uppercase tracking-widest">Example 1</p>
                  <p className="italic">“Timber <strong>is cut</strong> to the required section.”</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-stone-300">
                  <p className="text-xs font-bold text-stone-400 mb-1 uppercase tracking-widest">Example 2</p>
                  <p className="italic">“Strength <strong>is tested</strong> in order to give it a stress grade.”</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-stone-300">
                  <p className="text-xs font-bold text-stone-400 mb-1 uppercase tracking-widest">Example 3</p>
                  <p className="italic">“The grain of each ply runs at 90 degrees…”</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <Card title="Practical Engineering Context">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">Safety & Grading</h4>
                      <p className="text-stone-600">Structural timber is graded to ensure design safety. Without grading, structural calculations would be based on guesswork.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">Aesthetics</h4>
                      <p className="text-stone-600">Planed timber is used where appearance matters, such as exposed beams in architectural designs or furniture components.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">Structural Paneling</h4>
                      <p className="text-stone-600">OSB and plywood are used as structural panels in floor decking, wall sheathing, and roof structures.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">Large Spans</h4>
                      <p className="text-stone-600">Glulam beams are used for long spans in large buildings where traditional solid timber sections would be too small or heavy.</p>
                    </div>
                  </div>
                </div>
             </Card>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12">
            <h2 className="text-2xl font-bold text-stone-800 border-b pb-2">Knowledge Check</h2>
            
            {/* Exercise 1 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="bg-stone-800 text-white w-6 h-6 rounded flex items-center justify-center text-sm">1</span>
                Vocabulary Matching
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {['Softwood', 'Knot', 'Stress grade', 'Plywood'].map((term) => (
                    <div key={term} className="flex items-center justify-between p-2 border rounded bg-stone-50">
                      <span className="font-medium">{term}</span>
                      <select 
                        className="p-1 border rounded text-sm bg-white"
                        value={ex1Answers[term] || ''}
                        onChange={(e) => setEx1Answers({...ex1Answers, [term]: e.target.value})}
                      >
                        <option value="">Select definition...</option>
                        <option value="a">a. Standard strength value</option>
                        <option value="b">b. Layered wood with crossed grain</option>
                        <option value="c">c. Wood from coniferous trees</option>
                        <option value="d">d. Hard area where branch grew</option>
                      </select>
                    </div>
                  ))}
                </div>
                {showResults && (
                   <div className="bg-emerald-50 p-4 rounded text-sm text-emerald-800 border border-emerald-100">
                      <p><strong>Correct Key:</strong></p>
                      <ul className="list-disc list-inside">
                        <li>Softwood = c</li>
                        <li>Knot = d</li>
                        <li>Stress grade = a</li>
                        <li>Plywood = b</li>
                      </ul>
                   </div>
                )}
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="bg-stone-800 text-white w-6 h-6 rounded flex items-center justify-center text-sm">2</span>
                Sentence Completion
              </h3>
              <div className="space-y-4">
                <p>1. Structural timber is cut to the required 
                  <input 
                    type="text" 
                    className="mx-2 border-b-2 border-stone-300 focus:border-amber-500 outline-none px-2 w-32" 
                    placeholder="term"
                    value={ex2Answers.section}
                    onChange={e => setEx2Answers({...ex2Answers, section: e.target.value})}
                  /> 
                  at a sawmill.</p>
                <p>2. Timber that will be visible is often 
                  <input 
                    type="text" 
                    className="mx-2 border-b-2 border-stone-300 focus:border-amber-500 outline-none px-2 w-32" 
                    placeholder="term"
                    value={ex2Answers.planed}
                    onChange={e => setEx2Answers({...ex2Answers, planed: e.target.value})}
                  /> 
                  to improve its finish.</p>
                <p>3. OSB is made from wood 
                  <input 
                    type="text" 
                    className="mx-2 border-b-2 border-stone-300 focus:border-amber-500 outline-none px-2 w-32" 
                    placeholder="term"
                    value={ex2Answers.strands}
                    onChange={e => setEx2Answers({...ex2Answers, strands: e.target.value})}
                  /> 
                  bonded with resin.</p>
              </div>
              {showResults && (
                <div className="mt-4 p-4 bg-emerald-50 rounded text-sm text-emerald-800 border border-emerald-100">
                  Correct answers: 1. Section, 2. Planed, 3. Strands.
                </div>
              )}
            </div>

            {/* Exercise 3 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="bg-stone-800 text-white w-6 h-6 rounded flex items-center justify-center text-sm">3</span>
                Applied Writing: Passive Voice
              </h3>
              <p className="text-sm text-stone-500 mb-4">Rewrite using formal engineering style (Passive Voice):</p>
              <div className="bg-stone-50 p-4 rounded mb-4">
                <p className="text-sm text-stone-400 font-bold uppercase mb-1">Original</p>
                <p className="italic">"Manufacturers bond layers of wood together to produce glulam beams."</p>
              </div>
              <textarea 
                className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none min-h-[100px]"
                placeholder="Write your passive voice version here..."
                value={ex3Text}
                onChange={e => setEx3Text(e.target.value)}
              />
              {showResults && (
                <div className="mt-4 p-4 bg-emerald-50 rounded text-sm text-emerald-800 border border-emerald-100">
                  <strong>Example Solution:</strong> "Layers of wood are bonded together to produce glulam beams."
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowResults(!showResults)}
              className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <AlertCircle size={20} />
              {showResults ? "Hide Suggested Answers" : "Check Your Answers"}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Top Header & Tabs */}
      <header className="bg-white border-b border-stone-200  top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-600 p-2 rounded-lg text-white">
                <Construction size={24} />
              </div>
              <h1 className="text-xl font-bold tracking-tight">Timber Engineering 101</h1>
            </div>
            
            <nav className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                    ${activeTab === tab.id 
                      ? 'bg-stone-900 text-white shadow-md shadow-stone-200' 
                      : 'text-stone-500 hover:bg-stone-100 hover:text-stone-800'
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-stone-500">
          <p className="text-sm">Engineering and Construction Reference Materials — Lesson: Wood</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="flex items-center gap-1"><Info size={14} /> Structural Timber</span>
            <span className="flex items-center gap-1"><Layers size={14} /> Engineered Products</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;