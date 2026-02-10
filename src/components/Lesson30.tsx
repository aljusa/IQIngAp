import React, { useState } from 'react';
import { 
  BookOpen, 
  Weight, 
  Activity, 
  Ruler, 
  PenTool, 
  CheckCircle2, 
  AlertCircle, 
  Layout, 
  ArrowRightLeft,
  ChevronRight,
  Calculator
} from 'lucide-react';

// --- Types ---
type Section = 'overview' | 'load' | 'stress-strain' | 'elasticity' | 'grammar' | 'vocab' | 'exercises';

interface Tab {
  id: Section;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-6 ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
    {icon}
    {children}
  </h2>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Section>('overview');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'load', label: 'Load', icon: <Weight size={18} /> },
    { id: 'stress-strain', label: 'Stress & Strain', icon: <Activity size={18} /> },
    { id: 'elasticity', label: 'Elasticity', icon: <ArrowRightLeft size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <PenTool size={18} /> },
    { id: 'vocab', label: 'Vocabulary', icon: <Layout size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <CheckCircle2 size={18} /> },
  ];

  const handleQuizSubmit = (qId: string, val: string) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: val }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-8 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-200 font-semibold tracking-wider uppercase text-sm mb-2">Lesson 30</p>
          <h1 className="text-4xl font-extrabold">Load, Stress, and Strain</h1>
          <p className="mt-2 text-indigo-100 opacity-90 italic">Engineering English for Mechanical & Civil Systems</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className=" top-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-5xl mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        
        {/* Section: Overview */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeading icon={<BookOpen className="text-indigo-600" />}>Lesson Overview</SectionHeading>
            <Card>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                This lesson introduces the fundamental mechanical engineering concepts of 
                <span className="font-bold text-indigo-600 dark:text-indigo-400"> load, stress, and strain</span>. 
                We will explore how forces act on components, how materials respond, and how engineers 
                measure and predict material behavior in real-world scenarios.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Mechanical', 'Civil', 'Structural'].map((field) => (
                  <div key={field} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="font-medium">{field} Engineering</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Section: Load */}
        {activeTab === 'load' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionHeading icon={<Weight className="text-indigo-600" />}>Understanding Load</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calculator size={20} className="text-indigo-500" />
                  Definition
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-300">
                  In engineering, forces acting on a machine or structure are called <span className="italic font-semibold underline decoration-indigo-500">loads</span>.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                    <span>Loads are forces exerted on components.</span>
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight size={18} className="text-indigo-500 flex-shrink-0 mt-1" />
                    <span>Multiple loads can act on a structure simultaneously.</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold mb-4">The Load-Bearing Member</h3>
                <div className="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 mb-1">Engineering Terminology</p>
                  <p className="font-mono text-lg font-bold italic">"Load-bearing component"</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">A component designed to carry a specific load within a system.</p>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border-indigo-200">
              <h3 className="text-xl font-bold mb-6 text-indigo-900 dark:text-indigo-100">Magnitude and Direction (Vectors)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600">
                  <h4 className="font-bold text-indigo-600 mb-2">Vector Quantity</h4>
                  <p className="text-sm">Measurement with <strong>magnitude</strong> (size) and <strong>direction</strong> (way it acts).</p>
                  <div className="mt-4 flex items-center justify-center h-20 bg-slate-50 dark:bg-slate-800 rounded">
                    <div className="w-1/2 h-1 bg-indigo-500 relative">
                      <div className="absolute -right-2 -top-1.5 border-l-8 border-l-indigo-500 border-y-8 border-y-transparent"></div>
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">50kN Force</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600">
                  <h4 className="font-bold text-slate-600 dark:text-slate-300 mb-2">Scalar Quantity</h4>
                  <p className="text-sm">A measurement with <strong>magnitude only</strong> (e.g., temperature, mass).</p>
                  <div className="mt-4 flex items-center justify-center h-20 bg-slate-50 dark:bg-slate-800 rounded">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs font-bold">
                      25 kg
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Section: Stress & Strain */}
        {activeTab === 'stress-strain' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionHeading icon={<Activity className="text-indigo-600" />}>Stress & Strain</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stress Card */}
              <Card>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">1. Stress</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Pressure</span>
                </div>
                <p className="text-sm font-medium mb-2">Definition: Force per unit area</p>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center mb-4">
                   <p className="text-2xl font-serif italic">σ = F / A</p>
                </div>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p><strong>Measured in:</strong></p>
                  <ul className="list-disc ml-5">
                    <li>Newtons per square meter (N/m²)</li>
                    <li>Pascals (Pa)</li>
                  </ul>
                  <p className="text-indigo-500 font-bold mt-4 italic">* 1 N/m² = 1 Pa</p>
                </div>
              </Card>

              {/* Strain Card */}
              <Card>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">2. Strain</h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Deformation</span>
                </div>
                <p className="text-sm mb-4">When materials are stressed, they <strong>deform</strong> (change size or shape).</p>
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs uppercase font-bold text-slate-400 mb-1">Extension</p>
                    <p className="text-sm">The absolute increase in length.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded border border-slate-200 dark:border-slate-600">
                    <p className="text-xs uppercase font-bold text-slate-400 mb-1">Strain</p>
                    <p className="text-sm">The change in length compared with the <strong>original</strong> length.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cable Example Case Study */}
            <Card className="border-l-8 border-amber-500">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="text-amber-500" />
                Case Study: Cable Failure
              </h3>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 space-y-3">
                  <p className="text-sm">Suppose you have two cables lifting the same load:</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5"></div> Thick Cable: Stretches slightly.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div> Thin Cable: Breaks.</li>
                  </ul>
                  <p className="bg-slate-100 dark:bg-slate-700 p-3 rounded text-sm font-medium">
                    The thinner cable fails because the <span className="text-indigo-600 font-bold underline">same load</span> is applied over a <span className="text-indigo-600 font-bold underline">smaller area</span>.
                  </p>
                </div>
                <div className="w-48 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-4">
                   <div className="w-12 h-12 rounded-full border-4 border-slate-300 flex items-center justify-center font-bold text-xs">A1</div>
                   <div className="w-6 h-6 rounded-full border-4 border-red-500 flex items-center justify-center font-bold text-[10px]">A2</div>
                   <p className="text-[10px] text-center text-slate-500">Area 50% smaller = Stress 100% higher</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Section: Elasticity */}
        {activeTab === 'elasticity' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionHeading icon={<ArrowRightLeft className="text-indigo-600" />}>Elasticity & Proportionality</SectionHeading>
            
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h3 className="text-xl font-bold mb-4">Young’s Modulus of Elasticity</h3>
              <p className="text-blue-50 text-lg mb-4 italic font-serif">
                "Stress is proportional to strain."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-bold mb-2">Meaning:</p>
                  <p className="text-sm leading-relaxed">A percentage increase in stress causes the same percentage increase in strain.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-bold mb-2">Application:</p>
                  <p className="text-sm leading-relaxed">This allows engineers to predict exactly how a material will flex under specific loads.</p>
                </div>
              </div>
            </Card>

            <Card className="border-red-200">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="text-red-600" />
                 </div>
                 <h3 className="text-xl font-bold">The Limit of Proportionality</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The linear relationship between stress and strain is only valid up to a specific point.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="relative p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-sm mb-2">Standard Behavior</p>
                    <div className="h-24 flex items-end gap-1">
                       <div className="w-4 bg-indigo-200 h-1/4"></div>
                       <div className="w-4 bg-indigo-300 h-2/4"></div>
                       <div className="w-4 bg-indigo-400 h-3/4"></div>
                       <div className="w-4 bg-indigo-500 h-full"></div>
                    </div>
                    <p className="mt-2 text-[10px] text-slate-500 uppercase font-bold tracking-widest">Linear / Elastic</p>
                 </div>

                 <div className="relative p-6 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                    <p className="font-bold text-sm mb-2 text-red-700 dark:text-red-400">Overstressed</p>
                    <div className="h-24 flex items-end gap-1">
                       <div className="w-4 bg-red-300 h-3/4"></div>
                       <div className="w-4 bg-red-500 h-[120%] -translate-y-2"></div>
                       <div className="w-4 bg-red-600 h-[160%] -translate-y-6"></div>
                    </div>
                    <p className="mt-2 text-[10px] text-red-500 uppercase font-bold tracking-widest">Disproportional Strain</p>
                 </div>
              </div>
              
              <p className="mt-6 text-sm text-slate-500 italic text-center">
                * Beyond this limit, the material becomes permanently deformed or fails.
              </p>
            </Card>
          </div>
        )}

        {/* Section: Grammar */}
        {activeTab === 'grammar' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <SectionHeading icon={<PenTool className="text-indigo-600" />}>Cause-and-Explanation Structures</SectionHeading>
            
            <Card>
              <p className="mb-6">Technical English often uses specific structures to link physical effects with their causes.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">due to + [noun]</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 italic">"The failure was <strong>due to</strong> stress."</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">because + [clause]</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 italic">"This was <strong>because</strong> the load was concentrated into a smaller area."</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">if + [condition], will + [result]</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 italic">"<strong>If</strong> a material is overstressed, it <strong>will</strong> start to become strained by a higher proportion."</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Section: Vocabulary */}
        {activeTab === 'vocab' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionHeading icon={<Layout className="text-indigo-600" />}>Technical Vocabulary</SectionHeading>
            <Card className="overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-600">Term</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-600">Engineering Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    { term: 'Load', def: 'Force acting on a component' },
                    { term: 'Load-bearing', def: 'Designed to carry load' },
                    { term: 'Vector quantity', def: 'Measurement with magnitude and direction' },
                    { term: 'Stress', def: 'Force per unit area' },
                    { term: 'Strain', def: 'Change in length relative to original length' },
                    { term: 'Limit of proportionality', def: 'Point where stress–strain relation stops being linear' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                      <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400">{row.term}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">{row.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 border rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100">
                 <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Practical Tip</h4>
                 <p className="text-sm">Beams in buildings are classic <strong>load-bearing members</strong>. In high-rise design, engineers must calculate the total vertical load on the base columns.</p>
               </div>
               <div className="p-4 border rounded-lg bg-indigo-50 dark:bg-indigo-900/10 border-indigo-100">
                 <h4 className="font-bold text-indigo-800 dark:text-indigo-400 mb-2">Tool Spotlight</h4>
                 <p className="text-sm"><strong>Tensile testing machines</strong> are used in labs to physically pull materials apart to measure strain and find the limit of proportionality.</p>
               </div>
            </div>
          </div>
        )}

        {/* Section: Exercises */}
        {activeTab === 'exercises' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <SectionHeading icon={<CheckCircle2 className="text-indigo-600" />}>Practical Exercises</SectionHeading>
            
            {/* Exercise 1 */}
            <Card>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-indigo-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">1</span>
                Vocabulary Matching
              </h3>
              <div className="space-y-6">
                {[
                  { q: 'Load', a: 'Force applied to a component', options: ['Force per unit area', 'Force applied to a component', 'Measurement with magnitude and direction'] },
                  { q: 'Stress', a: 'Force per unit area', options: ['Force per unit area', 'Measurement with magnitude and direction', 'Change in length relative to original length'] },
                  { q: 'Vector quantity', a: 'Measurement with magnitude and direction', options: ['Change in length relative to original length', 'Measurement with magnitude and direction', 'Force per unit area'] },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Definition for "{item.q}":</p>
                    <div className="flex flex-wrap gap-2">
                      {item.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleQuizSubmit(`ex1-${idx}`, opt)}
                          className={`px-4 py-2 text-sm rounded-full border transition-all ${
                            quizAnswers[`ex1-${idx}`] === opt
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-400'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Exercise 2 */}
            <Card>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-indigo-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">2</span>
                Sentence Completion
              </h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-lg">1. Forces acting on a structure are called <input 
                    type="text" 
                    onChange={(e) => handleQuizSubmit('ex2-1', e.target.value)}
                    placeholder="..." 
                    className="mx-2 px-3 py-1 border-b-2 border-indigo-300 bg-transparent focus:outline-none focus:border-indigo-600 text-indigo-600 font-bold w-32" 
                  />.</p>
                  
                  <p className="text-lg">2. Stress is measured in <input 
                    type="text" 
                    onChange={(e) => handleQuizSubmit('ex2-2', e.target.value)}
                    placeholder="..." 
                    className="mx-2 px-3 py-1 border-b-2 border-indigo-300 bg-transparent focus:outline-none focus:border-indigo-600 text-indigo-600 font-bold w-32" 
                  /> or Pascals.</p>
                  
                  <p className="text-lg">3. Stress is proportional to strain up to the <input 
                    type="text" 
                    onChange={(e) => handleQuizSubmit('ex2-3', e.target.value)}
                    placeholder="..." 
                    className="mx-2 px-3 py-1 border-b-2 border-indigo-300 bg-transparent focus:outline-none focus:border-indigo-600 text-indigo-600 font-bold w-32" 
                  /> of proportionality.</p>
                </div>
                
                <button 
                  onClick={() => setShowResults(!showResults)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                  {showResults ? 'Hide Answers' : 'Check Answers'}
                </button>

                {showResults && (
                  <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl animate-in zoom-in-95 duration-300">
                    <h4 className="font-bold text-green-800 dark:text-green-400 mb-4">Correct Answers:</h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li><strong>Ex 1:</strong> 1. Force applied to component, 2. Force per unit area, 3. Measurement with mag/dir</li>
                      <li><strong>Ex 2:</strong> 1. loads, 2. Newtons per square meter (N/m²), 3. limit</li>
                    </ul>
                  </div>
                )}
              </div>
            </Card>

            {/* Exercise 3 - Discussion */}
            <Card className="bg-slate-900 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-indigo-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">3</span>
                Technical Discussion
              </h3>
              <p className="text-slate-400 mb-6 italic">Prepare a verbal or written response for the following prompts:</p>
              <div className="space-y-4">
                {[
                  "Explain why two components carrying the same load can experience different stresses.",
                  "Describe the difference between stress and strain.",
                  "Explain what happens to a material when it is stressed beyond the limit of proportionality."
                ].map((prompt, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700">
                     <div className="text-indigo-400 font-bold">Q{i+1}</div>
                     <p className="text-slate-300">{prompt}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-12 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-4">
            <Ruler size={24} />
            <span>EngEnglish | Module 4</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Technical Language Materials. Designed for Engineering Professionals.
          </p>
        </div>
      </footer>

      {/* Tailwind Style Adjustment for Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;