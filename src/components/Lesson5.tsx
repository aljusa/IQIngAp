import React, { useState } from 'react';
import { 
  Ruler, 
  Grid3X3, 
  CheckCircle2, 
  BookOpen, 
  PenTool, 
  Layout,
  ChevronRight,
  Eye,
  EyeOff,
  MoveHorizontal
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'centrelines' | 'grids' | 'accuracy' | 'vocab' | 'exercises';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3 border-b pb-2 border-slate-200">
    {children}
  </h3>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {children}
  </div>
);

const Definition = ({ term, def }: { term: string; def: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3">
    <span className="font-bold text-blue-700 min-w-[150px]">{term}</span>
    <span className="text-slate-600">{def}</span>
  </div>
);

// --- Diagrams ---

const DimensionsDiagram = () => (
  <div className="my-6 p-4 bg-slate-50 rounded-lg border border-slate-200 overflow-x-auto">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Visual Comparison: Dimensioning Methods</h4>
    <svg viewBox="0 0 600 220" className="w-full min-w-[500px]">
      {/* Holes */}
      <circle cx="50" cy="50" r="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="200" cy="50" r="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="350" cy="50" r="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="500" cy="50" r="8" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      
      {/* Centerline */}
      <line x1="20" y1="50" x2="530" y2="50" stroke="#94a3b8" strokeDasharray="10,5" />
      <text x="540" y="55" className="text-xs fill-slate-500 font-mono">CL</text>

      {/* Chain Dimensions */}
      <g transform="translate(0, 80)">
        <text x="10" y="20" className="text-xs font-bold fill-blue-600">Chain Dimensions</text>
        <line x1="50" y1="0" x2="50" y2="35" stroke="#3b82f6" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="35" stroke="#3b82f6" strokeWidth="1" />
        <line x1="350" y1="0" x2="350" y2="35" stroke="#3b82f6" strokeWidth="1" />
        
        {/* Arrows */}
        <line x1="50" y1="30" x2="200" y2="30" stroke="#3b82f6" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
        <text x="125" y="25" textAnchor="middle" className="text-xs fill-blue-600">100</text>
        
        <line x1="200" y1="30" x2="350" y2="30" stroke="#3b82f6" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
        <text x="275" y="25" textAnchor="middle" className="text-xs fill-blue-600">100</text>
      </g>

      {/* Running Dimensions */}
      <g transform="translate(0, 150)">
        <text x="10" y="20" className="text-xs font-bold fill-emerald-600">Running Dimensions (Ref: 0)</text>
        <circle cx="50" cy="30" r="3" fill="#10b981" />
        
        <line x1="50" y1="0" x2="50" y2="60" stroke="#10b981" strokeWidth="1" strokeDasharray="4" />
        <line x1="200" y1="0" x2="200" y2="45" stroke="#10b981" strokeWidth="1" />
        <line x1="350" y1="0" x2="350" y2="60" stroke="#10b981" strokeWidth="1" />

        <line x1="50" y1="40" x2="200" y2="40" stroke="#10b981" markerEnd="url(#arrow-green)" />
        <text x="125" y="35" textAnchor="middle" className="text-xs fill-emerald-600">100</text>

        <line x1="50" y1="55" x2="350" y2="55" stroke="#10b981" markerEnd="url(#arrow-green)" />
        <text x="200" y="50" textAnchor="middle" className="text-xs fill-emerald-600">200</text>
      </g>

      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  </div>
);

const GridDiagram = () => (
  <div className="my-6 p-4 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex justify-center">
    <div className="relative w-64 h-64 border border-slate-300 bg-white">
      {/* Grid Lines Vertical */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-red-400"></div>
      <div className="absolute left-32 top-0 bottom-0 w-px bg-red-400"></div>
      <div className="absolute left-52 top-0 bottom-0 w-px bg-red-400"></div>
      
      {/* Grid Lines Horizontal */}
      <div className="absolute top-10 left-0 right-0 h-px bg-blue-400"></div>
      <div className="absolute top-32 left-0 right-0 h-px bg-blue-400"></div>
      <div className="absolute top-52 left-0 right-0 h-px bg-blue-400"></div>

      {/* Labels */}
      <span className="absolute -top-6 left-10 text-red-500 font-bold">1</span>
      <span className="absolute -top-6 left-32 text-red-500 font-bold">2</span>
      <span className="absolute -top-6 left-52 text-red-500 font-bold">3</span>

      <span className="absolute top-8 -left-6 text-blue-500 font-bold">A</span>
      <span className="absolute top-30 -left-6 text-blue-500 font-bold">B</span>
      <span className="absolute top-50 -left-6 text-blue-500 font-bold">C</span>

      {/* Intersection Point */}
      <div className="absolute left-32 top-32 w-4 h-4 bg-yellow-400 rounded-full -ml-2 -mt-2 opacity-50 animate-pulse"></div>
      <div className="absolute left-32 top-32 w-2 h-2 bg-black rounded-full -ml-1 -mt-1"></div>
      <span className="absolute left-36 top-32 text-xs font-mono bg-slate-800 text-white px-1 rounded">Col B-2</span>
    </div>
  </div>
);

// --- Tab Content Components ---

const OverviewTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle><Layout className="w-8 h-8 text-blue-600" /> Overview of the Topic</SectionTitle>
    <Card>
      <p className="text-lg text-slate-700 leading-relaxed mb-4">
        This lesson explains how engineers locate positions accurately on drawings and on site. Precision is critical in engineering to ensure components fit together correctly.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">Key Concepts</h4>
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li>Centrelines and offsets</li>
            <li>Running and chain dimensions</li>
            <li>Grids and gridlines</li>
            <li>Methods for accurate positioning</li>
          </ul>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg flex items-center justify-center">
          <p className="text-center text-slate-600 italic">
            "The source text uses examples of bolt holes, columns, and floor openings."
          </p>
        </div>
      </div>
    </Card>
  </div>
);

const CentrelinesTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle><Ruler className="w-8 h-8 text-blue-600" /> Centrelines and Offsets</SectionTitle>
    
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <SubTitle>2.1 Centrelines (CL)</SubTitle>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>A line drawn through the <strong>centre</strong> of a feature (e.g., a hole).</li>
          <li>Used as the primary reference for measurements.</li>
          <li>Distances between them are called <strong>centre-to-centre (c/c)</strong> dimensions.</li>
        </ul>
        <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-800">
          <strong>Example:</strong> "Holes located at 100 mm centres" = "100 mm c/c"
        </div>
      </Card>

      <Card>
        <SubTitle>2.3 Using Offsets</SubTitle>
        <p className="text-slate-700 mb-3">
          An offset is a measurement taken from a centreline to locate features precisely.
        </p>
        <div className="bg-slate-800 text-white p-4 rounded-lg">
          <p className="font-mono text-sm mb-2 opacity-70">Language Note:</p>
          <ul className="space-y-1 text-sm">
            <li>✅ at a right angle to X</li>
            <li>✅ at 90 degrees to X</li>
            <li>✅ at right-angles to X</li>
          </ul>
        </div>
      </Card>
    </div>

    <Card>
      <SubTitle>2.2 Running vs. Chain Dimensions</SubTitle>
      <p className="text-slate-700 mb-4">
        Both systems locate the same points but present the information differently.
      </p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="border border-blue-200 bg-blue-50 p-3 rounded">
          <h5 className="font-bold text-blue-800">Running Dimensions</h5>
          <p>All distances measured from <strong>one reference point</strong>.</p>
          <p className="mt-1 text-slate-500">Values increase: 100, 200, 300 mm...</p>
        </div>
        <div className="border border-slate-200 bg-slate-50 p-3 rounded">
          <h5 className="font-bold text-slate-800">Chain Dimensions</h5>
          <p>Distances measured between <strong>adjacent features</strong>.</p>
          <p className="mt-1 text-slate-500">Segments shown separately: 100 + 100 + 100 mm</p>
        </div>
      </div>
      <DimensionsDiagram />
    </Card>
  </div>
);

const GridsTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle><Grid3X3 className="w-8 h-8 text-blue-600" /> Grids</SectionTitle>
    
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 space-y-6">
        <Card>
          <SubTitle>3.1 Gridlines in Large Designs</SubTitle>
          <p className="text-slate-700 mb-3">
            Used for horizontal positioning in structures. They are identified by numbers (1, 2, 3) and letters (G, H).
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <MoveHorizontal className="w-5 h-5 text-blue-500 mt-1" />
              <span>Numbered lines are parallel to each other.</span>
            </li>
            <li className="flex items-start gap-2">
              <MoveHorizontal className="w-5 h-5 text-red-500 mt-1" />
              <span>Lettered lines are parallel to each other.</span>
            </li>
            <li className="flex items-start gap-2">
              <Grid3X3 className="w-5 h-5 text-purple-500 mt-1" />
              <span>Numbered and lettered lines are <strong>perpendicular</strong> (90°).</span>
            </li>
          </ul>
        </Card>

        <Card>
          <SubTitle>3.2 Using Grids to Set Out</SubTitle>
          <p className="text-slate-700 mb-4">
            Site engineers use grid intersections (e.g., column centers) as base points. To locate an opening:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 marker:font-bold marker:text-blue-600">
            <li><strong>Square off</strong> the gridlines.</li>
            <li>Mark lines at right angles to them.</li>
            <li>Measure distances along these lines using a tape measure.</li>
          </ol>
        </Card>
      </div>
      
      <div className="md:w-1/3">
        <Card className="h-full flex flex-col items-center justify-center bg-slate-50">
          <p className="text-sm font-bold text-slate-400 uppercase mb-2">Grid Visualizer</p>
          <GridDiagram />
          <p className="text-center text-xs text-slate-500 mt-2 px-4">
            Gridlines A, B, C intersect with 1, 2, 3 to create precise coordinate points for columns.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

const AccuracyTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle><CheckCircle2 className="w-8 h-8 text-blue-600" /> Accuracy and Checking</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>4.1 Squaring Off</SubTitle>
        <p className="text-slate-700 mb-4">
          Creating lines that are exactly at right angles to ensure accurate positioning on site.
        </p>
        <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
          <Eye className="w-6 h-6 text-blue-600 shrink-0" />
          <div>
            <span className="font-bold text-blue-800">Theodolite:</span>
            <p className="text-sm text-blue-700">An instrument used to measure angles optically and square off gridlines accurately.</p>
          </div>
        </div>
      </Card>

      <Card>
        <SubTitle>4.2 Double-Checking with Diagonals</SubTitle>
        <p className="text-slate-700 mb-4">
          To verify the layout is perfectly square, engineers measure the diagonals.
        </p>
        <div className="bg-slate-800 text-white p-4 rounded-lg">
          <p className="font-bold mb-2">Pythagoras’s Theorem</p>
          <p className="font-mono text-center text-xl tracking-widest mb-2">a² + b² = c²</p>
          <p className="text-sm opacity-80 text-center">
            If calculated diagonal matches measured diagonal = <span className="text-green-400 font-bold">ACCURATE</span>
          </p>
        </div>
      </Card>
    </div>
  </div>
);

const VocabTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle><BookOpen className="w-8 h-8 text-blue-600" /> Technical Vocabulary</SectionTitle>
    
    <Card>
      <div className="divide-y divide-slate-100">
        <Definition term="Centreline (CL)" def="Line through the center of a feature." />
        <Definition term="Centre-to-centre (c/c)" def="Distance between centrelines." />
        <Definition term="Running dimensions" def="Dimensions measured from one single reference point." />
        <Definition term="Chain dimensions" def="Dimensions measured between adjacent features." />
        <Definition term="Offset" def="Measurement taken from a reference line." />
        <Definition term="Gridline" def="Reference line used for positioning (numbered or lettered)." />
        <Definition term="Set out" def="To mark positions on site." />
        <Definition term="Square off" def="To create right angles." />
        <Definition term="Theodolite" def="Instrument for measuring angles optically." />
      </div>
    </Card>

    <Card>
      <SubTitle>Grammar Focus: Verbs</SubTitle>
      <div className="flex flex-wrap gap-2">
        {['locate points', 'mark positions', 'measure distances', 'intersect at points', 'set out openings'].map((verb, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {verb}
          </span>
        ))}
      </div>
    </Card>
  </div>
);

const ExercisesTab = () => {
  const [revealedEx1, setRevealedEx1] = useState(false);
  const [revealedEx2, setRevealedEx2] = useState(false);
  const [revealedEx3, setRevealedEx3] = useState(false);

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      <SectionTitle><PenTool className="w-8 h-8 text-blue-600" /> Exercises</SectionTitle>

      {/* Ex 1 */}
      <Card>
        <div className="flex justify-between items-start">
          <SubTitle>Exercise 1: Vocabulary Match</SubTitle>
          <button onClick={() => setRevealedEx1(!revealedEx1)} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            {revealedEx1 ? <><EyeOff size={16} /> Hide Answers</> : <><Eye size={16} /> Show Answers</>}
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <p className="font-semibold">Match terms to definitions:</p>
            <ol className="list-decimal list-inside text-slate-700 space-y-1">
              <li>Offset</li>
              <li>Chain dimensions</li>
              <li>Gridline</li>
              <li>Set out</li>
            </ol>
          </div>
          <div className="space-y-2 bg-slate-50 p-4 rounded text-sm">
            <p className="font-semibold text-slate-500">Definitions:</p>
            <ul className="list-[lower-alpha] list-inside text-slate-600 space-y-1">
              <li>Measurement taken from a reference line</li>
              <li>Mark positions on site</li>
              <li>Dimensioning between adjacent features</li>
              <li>Reference line for positioning</li>
            </ul>
          </div>
        </div>
        {revealedEx1 && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 border border-green-200 rounded animate-in fade-in slide-in-from-top-2">
            <strong>Answers:</strong> 1-a, 2-c, 3-d, 4-b
          </div>
        )}
      </Card>

      {/* Ex 2 */}
      <Card>
        <div className="flex justify-between items-start">
          <SubTitle>Exercise 2: Sentence Completion</SubTitle>
          <button onClick={() => setRevealedEx2(!revealedEx2)} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            {revealedEx2 ? <><EyeOff size={16} /> Hide Answers</> : <><Eye size={16} /> Show Answers</>}
          </button>
        </div>
        <div className="space-y-3 mt-4 text-slate-700">
          <p>1. The holes are located at 100 mm <span className="border-b-2 border-slate-300 w-24 inline-block"></span>.</p>
          <p>2. The offset is measured at a right <span className="border-b-2 border-slate-300 w-24 inline-block"></span> to the centreline.</p>
          <p>3. Gridlines intersect at the centres of <span className="border-b-2 border-slate-300 w-24 inline-block"></span>.</p>
        </div>
        {revealedEx2 && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 border border-green-200 rounded animate-in fade-in slide-in-from-top-2">
            <strong>Answers:</strong> 1. centres (or c/c), 2. angle, 3. columns
          </div>
        )}
      </Card>

      {/* Ex 3 */}
      <Card>
        <div className="flex justify-between items-start">
          <SubTitle>Exercise 3: Applied Writing</SubTitle>
          <button onClick={() => setRevealedEx3(!revealedEx3)} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            {revealedEx3 ? <><EyeOff size={16} /> Hide Answers</> : <><Eye size={16} /> Show Model Answer</>}
          </button>
        </div>
        <div className="mt-4">
          <p className="text-slate-700 mb-2">Rewrite using formal engineering style and passive voice:</p>
          <div className="bg-slate-100 p-3 rounded mb-3 text-slate-800 italic">
            "The site engineer set out the opening using gridlines and offsets."
          </div>
          <textarea 
            className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            placeholder="Type your answer here..."
            rows={2}
          />
        </div>
        {revealedEx3 && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 border border-green-200 rounded animate-in fade-in slide-in-from-top-2">
            <strong>Model Answer:</strong> The opening was set out using gridlines and offsets.
          </div>
        )}
      </Card>
    </div>
  );
}

// --- Main App Component ---

const Lesson5App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: TabConfig[] = [
    { id: 'overview', label: 'Overview', icon: <Layout size={18} /> },
    { id: 'centrelines', label: 'Centrelines', icon: <Ruler size={18} /> },
    { id: 'grids', label: 'Grids', icon: <Grid3X3 size={18} /> },
    { id: 'accuracy', label: 'Accuracy', icon: <CheckCircle2 size={18} /> },
    { id: 'vocab', label: 'Vocabulary', icon: <BookOpen size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <PenTool size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-2 text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Engineering English <ChevronRight size={14} /> Module 4
          </div>
          <h1 className="text-3xl font-bold">Locating and Setting Out</h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            A guide to accurate positioning on drawings and construction sites.
          </p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-1 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors
                  border-b-2 outline-none
                  ${activeTab === tab.id 
                    ? 'border-blue-600 text-blue-700 bg-blue-50/50 rounded-t-lg' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'centrelines' && <CentrelinesTab />}
        {activeTab === 'grids' && <GridsTab />}
        {activeTab === 'accuracy' && <AccuracyTab />}
        {activeTab === 'vocab' && <VocabTab />}
        {activeTab === 'exercises' && <ExercisesTab />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-200 py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2024 Engineering Education Resource. Based on source text "Locating and Setting Out".</p>
        </div>
      </footer>
    </div>
  );
};

export default Lesson5App;