import React, { useState } from 'react';
import { 
  Factory, 
  Layers, 
  BookOpen, 
  Settings, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Zap,
  Box,
  Hash,
  Activity
} from 'lucide-react';

// --- Types ---
type Section = 'overview' | 'raw' | 'processed' | 'grammar' | 'vocabulary' | 'examples' | 'exercises';

interface Tab {
  id: Section;
  label: string;
  icon: React.ElementType;
}

// --- Components ---

const Card = ({ title, children, icon: Icon, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-blue-600" />}
      <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm">{title}</h3>
    </div>
    <div className="p-5 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState<Section>('overview');
  const [exerciseResults, setExerciseResults] = useState<Record<string, string>>({});

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'raw', label: 'Raw Materials', icon: Factory },
    { id: 'processed', label: 'Processed Formats', icon: Layers },
    { id: 'grammar', label: 'Grammar', icon: Settings },
    { id: 'vocabulary', label: 'Vocabulary', icon: Activity },
    { id: 'examples', label: 'Practical Use', icon: Zap },
    { id: 'exercises', label: 'Self-Check', icon: CheckCircle2 },
  ];

  const handleExerciseChange = (id: string, value: string) => {
    setExerciseResults(prev => ({ ...prev, [id]: value }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-3xl font-bold mb-4">Lesson 21: Material Formats</h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Master the terminology used in manufacturing, mechanical, and materials engineering to describe how materials are supplied and processed in industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Context" icon={Info}>
                <p>This lesson focuses on the physical characteristics and industrial standards for material supply. Understanding these formats is crucial for procurement, design, and manufacturing processes.</p>
              </Card>
              <Card title="Learning Objectives" icon={CheckCircle2}>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Identify common raw material formats</li>
                  <li>Distinguish between various processed shapes</li>
                  <li>Master technical vocabulary for dimensions</li>
                  <li>Apply passive voice in technical descriptions</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case 'raw':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">2.1 Raw Materials for Processing</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700">Powders</h4>
                <p className="text-sm">Very fine particles (e.g., cement powder).</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700">Pellets</h4>
                <p className="text-sm">Pea-sized standard pieces for melting and molding.</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-700">Fibres</h4>
                <p className="text-sm">Hair-like lengths (e.g., glass fibres).</p>
              </div>
            </div>

            <Card title="Metal Production Blocks" icon={Box}>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-200 font-mono p-2 rounded text-xs shrink-0">INGOTS</div>
                  <p>Large blocks of metal produced during primary manufacturing.</p>
                </div>
                <hr />
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-200 font-mono p-2 rounded text-xs shrink-0">BLOOMS</div>
                  <p>Very large steel ingots (typically 630  mm x 400  mm x 6  m).</p>
                </div>
                <hr />
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-200 font-mono p-2 rounded text-xs shrink-0">BILLETS</div>
                  <p>Smaller metal blocks of various sizes for further processing.</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'processed':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">2.2 Formats of Processed Materials</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Bars, Rods & Sections">
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Round Bars (Rods):</span> Circular cross-section.</li>
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Square Bars:</span> Square cross-section.</li>
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Flat Bars:</span> Rectangular cross-section.</li>
                  <li className="flex gap-2"><span className="font-bold text-blue-600">I-Sections:</span> Profiled shapes for structural strength.</li>
                </ul>
              </Card>

              <Card title="Sheets vs. Plates (Steel)">
                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="text-xs text-blue-600 font-bold uppercase">Sheets</div>
                    <div className="text-xl font-bold text-slate-800">&lt; 3mm</div>
                  </div>
                  <div className="h-8 w-px bg-blue-200"></div>
                  <div className="text-center">
                    <div className="text-xs text-blue-600 font-bold uppercase">Plates</div>
                    <div className="text-xl font-bold text-slate-800">&gt; 3mm</div>
                  </div>
                </div>
                <p className="text-sm italic">Note: Sheets can be supplied in rolls called <strong>coils</strong>.</p>
              </Card>

              <Card title="Tubes, Pipes & Wires">
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Tubes:</span> Hollow shapes (round/sq/rect).</li>
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Pipes:</span> Specifically for liquid/gas transport.</li>
                  <li className="flex gap-2"><span className="font-bold text-blue-600">Cables:</span> Several insulated conductors in an outer layer.</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">3. Grammar: Passive Voice</h2>
            <Card title="Technical Documentation" icon={Settings}>
              <p className="mb-4">Engineering English uses the passive voice to maintain <strong>objectivity</strong> and focus on <strong>materials/processes</strong> rather than human actors.</p>
              
              <div className="bg-slate-800 text-slate-100 p-4 rounded-lg font-mono mb-4 text-center">
                BE + PAST PARTICIPLE
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <p className="text-sm font-bold text-green-800 uppercase">Correct Passive usage:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-600" /> "Raw materials <strong>are processed</strong>..."</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-600" /> "Steel ingots <strong>are called</strong> blooms."</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-green-600" /> "Sheets <strong>can be supplied</strong> in coils."</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'vocabulary':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">4. Technical Vocabulary</h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl">
              <table className="w-full text-left bg-white">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700">Term</th>
                    <th className="px-6 py-4 font-bold text-slate-700">Engineering Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { term: 'Cross-section', def: 'The shape seen when an object is cut across' },
                    { term: 'Hollow', def: 'Not solid; empty inside' },
                    { term: 'Rolled', def: 'Shaped by passing metal through rollers' },
                    { term: 'Extruded', def: 'Shaped by forcing material through a die' },
                    { term: 'Conductor', def: 'Material that carries electrical current' },
                    { term: 'Insulation', def: 'Material that prevents electrical flow' }
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-blue-600">{item.term}</td>
                      <td className="px-6 py-4 text-slate-600">{item.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">5. Practical Engineering Examples</h2>
            <div className="grid gap-4">
              <div className="flex gap-4 items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">1</div>
                <p>Plastic components are manufactured by <strong>melting pellets</strong> and injecting them into molds.</p>
              </div>
              <div className="flex gap-4 items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">2</div>
                <p>Structural beams in buildings often use <strong>I-sections</strong> for maximum strength with minimum weight.</p>
              </div>
              <div className="flex gap-4 items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">3</div>
                <p>Electrical installations typically use <strong>stranded wires</strong> to improve flexibility for pulling through conduits.</p>
              </div>
              <div className="flex gap-4 items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">4</div>
                <p>Industrial pipelines use <strong>pipes</strong>, while structural mechanical frames may use <strong>square tubes</strong>.</p>
              </div>
            </div>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300 pb-12">
            <h2 className="text-2xl font-bold text-slate-800">6. Exercises</h2>
            
            {/* Exercise 1 */}
            <Card title="Exercise 1: Vocabulary Recognition" icon={CheckCircle2}>
              <p className="mb-4 text-sm font-medium">Match the material format to its description:</p>
              <div className="space-y-4">
                {[
                  { id: 'ex1-1', q: '1. Pellets', opts: ['Thin/flat (coils)', 'Small blocks', 'Hollow (liquids)', 'Melting pieces'] },
                  { id: 'ex1-2', q: '2. Billets', opts: ['Thin/flat (coils)', 'Small blocks', 'Hollow (liquids)', 'Melting pieces'] },
                  { id: 'ex1-3', q: '3. Sheets', opts: ['Thin/flat (coils)', 'Small blocks', 'Hollow (liquids)', 'Melting pieces'] },
                  { id: 'ex1-4', q: '4. Pipes', opts: ['Thin/flat (coils)', 'Small blocks', 'Hollow (liquids)', 'Melting pieces'] },
                ].map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
                    <span className="font-bold">{item.q}</span>
                    <select 
                      className="border rounded px-3 py-1 bg-slate-50 text-sm focus:ring-2 ring-blue-500 outline-none"
                      onChange={(e) => handleExerciseChange(item.id, e.target.value)}
                    >
                      <option value="">Select answer...</option>
                      {item.opts.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </Card>

            {/* Exercise 2 */}
            <Card title="Exercise 2: Sentence Completion" icon={Settings}>
              <div className="space-y-6">
                <div className="p-3 bg-blue-50 text-blue-800 rounded text-sm italic">
                  Complete using words from the lesson:
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>1. Steel thinner than 3 mm is supplied as</span>
                    <input className="border-b-2 border-blue-400 outline-none px-2 w-32 bg-transparent" placeholder="..." />.
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span>2. An electrical cable contains several</span>
                    <input className="border-b-2 border-blue-400 outline-none px-2 w-40 bg-transparent" placeholder="..." />
                    <span>covered with insulation.</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center p-4 bg-slate-100 rounded-lg text-slate-500 text-sm italic">
              Knowledge check: Try to answer these to verify your learning.
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200  top-0 z-10 overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-1 py-1 overflow-x-auto min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap
                    ${activeTab === tab.id 
                      ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
                  `}
                >
                  <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;