import React, { useState } from 'react';
import { 
  Info, 
  Cpu, 
  Layers, 
  Book, 
  MessageSquare, 
  Wrench, 
  CheckCircle2,
  ChevronRight,
  Zap,
  ShieldCheck,
  FlaskConical,
  Beaker
} from 'lucide-react';

// --- Types ---
type TabId = 'overview' | 'metals' | 'plating' | 'vocabulary' | 'grammar' | 'practical' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
    {children}
  </h2>
);

const Card = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Icon size={20} /></div>}
      <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
    </div>
    <div className="text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [exerciseAnswers, setExerciseAnswers] = useState({
    ex1: { q1: '', q2: '', q3: '', q4: '' },
    ex2: { q1: '', q2: '', q3: '' },
    ex3: ''
  });

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'metals', label: 'Common Metals', icon: <Cpu size={18} /> },
    { id: 'plating', label: 'Plating', icon: <Layers size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <Book size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <MessageSquare size={18} /> },
    { id: 'practical', label: 'Practical', icon: <Wrench size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle2 size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle>Topic Overview</SectionTitle>
            <div className="bg-blue-600 text-white p-8 rounded-2xl mb-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-4">Non-Ferrous Metals</h1>
              <p className="text-blue-100 text-lg">
                Essential engineering materials that do not contain iron, offering unique properties for modern technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="What are they?" icon={Info}>
                <p>Non-ferrous metals are defined as metals that <strong>do not contain iron</strong>.</p>
                <p className="mt-2 text-sm italic text-slate-500">Examples: Aluminium, Copper, Gold, Zinc.</p>
              </Card>
              <Card title="What we will cover" icon={CheckCircle2}>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500" /> Common engineering metals</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500" /> Aluminium, Copper, Silver, and Gold</li>
                  <li className="flex items-center gap-2"><ChevronRight size={14} className="text-blue-500" /> Plating & Corrosion protection</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case 'metals':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <SectionTitle>Common Non-Ferrous Engineering Metals</SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card title="Aluminium (Al)" icon={Cpu}>
                  <p className="mb-4">Widely used in engineering, especially in alloy form like <strong>Duralumin</strong>.</p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase">Duralumin Composition:</h4>
                    <div className="flex gap-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Copper (4.4%)</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Magnesium (1.5%)</span>
                    </div>
                  </div>
                </Card>
                <Card title="Copper (Cu)" icon={Zap}>
                  <p>An excellent electrical conductor with high ductility. Often alloyed to create:</p>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    <li className="bg-orange-50 p-2 rounded border border-orange-100 text-sm"><strong>Brass:</strong> Cu + Zinc</li>
                    <li className="bg-amber-50 p-2 rounded border border-amber-100 text-sm"><strong>Bronze:</strong> Cu + Tin</li>
                  </ul>
                </Card>
              </div>

              <div className="space-y-6">
                <Card title="Silver & Gold" icon={ShieldCheck}>
                  <p className="mb-4 text-amber-600 font-semibold italic">Precious Metals (High Cost)</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-slate-200 pl-4">
                      <p className="font-bold">Silver:</p>
                      <p className="text-sm">The best electrical conductor of all materials. Used in electronic connections.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <p className="font-bold">Gold:</p>
                      <p className="text-sm">Excellent conductor and highly corrosion-resistant. Critical for reliability.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'plating':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionTitle>Plating with Non-Ferrous Metals</SectionTitle>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Purpose of Plating</h3>
              <p className="text-indigo-700">Covering steel with a thin layer of non-ferrous metal to protect it from corrosion.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Beaker className="text-blue-500" /> Galvanizing (Zinc)</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded">
                    <h4 className="font-semibold text-blue-600">Hot-Dip Galvanizing</h4>
                    <p className="text-sm">Steel is placed in molten (liquid) zinc.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded">
                    <h4 className="font-semibold text-blue-600">Electro-galvanizing</h4>
                    <ul className="text-sm list-disc ml-4 mt-1">
                      <li>Uses an electrolyte</li>
                      <li>Steel = Cathode (-)</li>
                      <li>Zinc = Anode (+)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FlaskConical className="text-emerald-500" /> Anodizing (Aluminium)</h3>
                <p className="mb-4">Protective process specifically for aluminium components.</p>
                <div className="bg-slate-900 text-white p-4 rounded-lg text-sm font-mono">
                  <p>1. Al component = Anode (+)</p>
                  <p>2. Al oxide layer forms</p>
                  <p>3. Oxide is HARDER than Al metal</p>
                  <p>4. Result: Superior protection</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vocabulary':
        const vocab = [
          { term: 'Non-ferrous', def: 'Not containing iron' },
          { term: 'Alloy', def: 'Mixture of metals' },
          { term: 'Ductility', def: 'Ability to be drawn into wires' },
          { term: 'Precious metal', def: 'Valuable metal with high cost' },
          { term: 'Plating', def: 'Covering with a thin metal layer' },
          { term: 'Galvanizing', def: 'Zinc coating to prevent corrosion' },
          { term: 'Electrolyte', def: 'Conductive liquid used in electroplating' },
          { term: 'Anode', def: 'Positive electrode' },
          { term: 'Cathode', def: 'Negative electrode' },
          { term: 'Anodizing', def: 'Oxide coating process for aluminium' },
        ];
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle>Technical Vocabulary</SectionTitle>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-bold text-slate-700">Term</th>
                    <th className="px-6 py-4 font-bold text-slate-700">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {vocab.map((v, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-blue-600">{v.term}</td>
                      <td className="px-6 py-4 text-slate-600">{v.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionTitle>Grammar Focus: Cause and Purpose</SectionTitle>
            <p className="text-slate-600 mb-6">
              Engineers use specific language to explain <strong>why</strong> a material is chosen.
            </p>
            <div className="grid gap-4">
              {[
                { type: "Cause & Result", text: "Copper is an excellent conductor, which makes it ideal for electric wires.", highlight: "which makes it ideal" },
                { type: "Purpose", text: "Non-ferrous metals can be used to protect steel from corrosion.", highlight: "to protect" },
                { type: "Reasoning", text: "As it is harder than aluminium, it provides protection.", highlight: "As it is harder" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase text-slate-400">{item.type}</span>
                  <p className="text-lg flex-1">
                    {item.text.split(item.highlight)[0]}
                    <span className="text-blue-600 font-bold underline decoration-blue-200">{item.highlight}</span>
                    {item.text.split(item.highlight)[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'practical':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle>Practical Examples</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { item: "Aircraft Structures", material: "Aluminium Alloys", reason: "Lightweight strength" },
                { item: "Electrical Wiring", material: "Copper", reason: "High conductivity" },
                { item: "Rust Prevention", material: "Galvanized Steel", reason: "Corrosion resistance" },
                { item: "Surface Hardness", material: "Anodized Aluminium", reason: "Increased protection" }
              ].map((ex, i) => (
                <div key={i} className="bg-slate-50 border p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 font-bold">
                    {i+1}
                  </div>
                  <h4 className="font-bold text-slate-800">{ex.item}</h4>
                  <p className="text-blue-600 text-sm font-semibold mb-2">{ex.material}</p>
                  <p className="text-xs text-slate-500 italic">"Used due to its {ex.reason}."</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'exercises':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <SectionTitle>Test Your Knowledge</SectionTitle>
            
            {/* Ex 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-700">Exercise 1: Vocabulary Matching</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="w-8 font-bold text-slate-400">1.</span>
                    <span className="flex-1 p-2 bg-slate-50 rounded">Non-ferrous</span>
                    <select 
                      className="p-2 border rounded"
                      value={exerciseAnswers.ex1.q1}
                      onChange={(e) => setExerciseAnswers({...exerciseAnswers, ex1: {...exerciseAnswers.ex1, q1: e.target.value}})}
                    >
                      <option value="">-Select-</option>
                      <option value="a">a</option><option value="b">b</option><option value="c">c</option><option value="d">d</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 font-bold text-slate-400">2.</span>
                    <span className="flex-1 p-2 bg-slate-50 rounded">Brass</span>
                    <select 
                      className="p-2 border rounded"
                      value={exerciseAnswers.ex1.q2}
                      onChange={(e) => setExerciseAnswers({...exerciseAnswers, ex1: {...exerciseAnswers.ex1, q2: e.target.value}})}
                    >
                      <option value="">-Select-</option>
                      <option value="a">a</option><option value="b">b</option><option value="c">c</option><option value="d">d</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 font-bold text-slate-400">3.</span>
                    <span className="flex-1 p-2 bg-slate-50 rounded">Galvanizing</span>
                    <select 
                      className="p-2 border rounded"
                      value={exerciseAnswers.ex1.q3}
                      onChange={(e) => setExerciseAnswers({...exerciseAnswers, ex1: {...exerciseAnswers.ex1, q3: e.target.value}})}
                    >
                      <option value="">-Select-</option>
                      <option value="a">a</option><option value="b">b</option><option value="c">c</option><option value="d">d</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-8 font-bold text-slate-400">4.</span>
                    <span className="flex-1 p-2 bg-slate-50 rounded">Anode</span>
                    <select 
                      className="p-2 border rounded"
                      value={exerciseAnswers.ex1.q4}
                      onChange={(e) => setExerciseAnswers({...exerciseAnswers, ex1: {...exerciseAnswers.ex1, q4: e.target.value}})}
                    >
                      <option value="">-Select-</option>
                      <option value="a">a</option><option value="b">b</option><option value="c">c</option><option value="d">d</option>
                    </select>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm space-y-2">
                  <p><strong>a.</strong> Zinc coating process</p>
                  <p><strong>b.</strong> Metal that does not contain iron</p>
                  <p><strong>c.</strong> Copper and zinc alloy</p>
                  <p><strong>d.</strong> Positive electrode</p>
                </div>
              </div>
            </div>

            {/* Ex 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-700">Exercise 2: Sentence Completion</h3>
              <div className="space-y-6">
                {[
                  { q: "Copper is widely used in electrical _________.", field: 'q1' },
                  { q: "Steel can be protected from corrosion by _________ it with zinc.", field: 'q2' },
                  { q: "Aluminium oxide forms during the _________ process.", field: 'q3' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <p className="text-slate-700">{item.q}</p>
                    <input 
                      type="text" 
                      className="p-2 border-b-2 border-slate-200 focus:border-blue-500 outline-none w-64 transition-all"
                      placeholder="Type answer..."
                      value={(exerciseAnswers.ex2 as any)[item.field]}
                      onChange={(e) => setExerciseAnswers({
                        ...exerciseAnswers, 
                        ex2: { ...exerciseAnswers.ex2, [item.field]: e.target.value }
                      })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Ex 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-700">Exercise 3: Applied Writing</h3>
              <p className="text-sm text-slate-500">Rewrite using formal engineering style and passive voice:</p>
              <div className="bg-slate-100 p-3 rounded italic mb-2 text-slate-600">
                "Engineers plate steel with zinc to protect it from corrosion."
              </div>
              <textarea 
                className="w-full h-32 p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                placeholder="Rewrite here..."
                value={exerciseAnswers.ex3}
                onChange={(e) => setExerciseAnswers({...exerciseAnswers, ex3: e.target.value})}
              />
              <div className="text-right">
                <button 
                  onClick={() => {
                    const msg = "Check your answers with the lesson notes above! Tip for Ex 3: Start with 'Steel is plated...'";
                    // Custom message instead of alert
                    const el = document.getElementById('feedback-msg');
                    if (el) {
                      el.innerText = msg;
                      el.classList.remove('hidden');
                      setTimeout(() => el.classList.add('hidden'), 5000);
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Verify Answers
                </button>
                <p id="feedback-msg" className="hidden mt-4 text-blue-600 font-semibold text-center bg-blue-50 p-3 rounded animate-pulse"></p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 pb-12">
      {/* Header Tabs */}
      <nav className=" top-0 z-50 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id 
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto mt-8 px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[70vh] p-6 sm:p-10">
          {renderContent()}
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="max-w-6xl mx-auto mt-8 text-center text-slate-400 text-xs">
        Materials Engineering Education Module • Non-Ferrous Metals Section
      </footer>
    </div>
  );
};

export default App;