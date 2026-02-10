import React, { useState } from 'react';
import { 
  Wrench, 
  Anchor, 
  Hammer, 
  BookOpen, 
  PenTool, 
  CheckCircle, 
  Settings, 
  ArrowRight,
  Info,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/**
 * Types and Interfaces
 */
type TabId = 'overview' | 'concepts' | 'grammar' | 'vocabulary' | 'examples' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface TermDefinition {
  term: string;
  def: string;
}

/**
 * Main Application Component
 */
export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'concepts', label: 'Key Concepts', icon: <Settings size={18} /> },
    { id: 'grammar', label: 'Grammar', icon: <BookOpen size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <BookOpen size={18} /> },
    { id: 'examples', label: 'Examples', icon: <Wrench size={18} /> },
    { id: 'exercises', label: 'Exercises', icon: <PenTool size={18} /> },
  ];

  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Settings className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Engineering English</h1>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Lesson 27: Mechanical Fasteners 2</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md text-base font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'overview' && <OverviewPanel />}
          {activeTab === 'concepts' && <ConceptsPanel />}
          {activeTab === 'grammar' && <GrammarPanel />}
          {activeTab === 'vocabulary' && <VocabularyPanel />}
          {activeTab === 'examples' && <ExamplesPanel />}
          {activeTab === 'exercises' && <ExercisesPanel />}
        </div>
      </main>
    </div>
  );
}

/**
 * Panel Components
 */

function OverviewPanel() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-blue-600 h-2 w-full"></div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Lesson Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            This lesson continues the study of mechanical fasteners, focusing specifically on 
            <span className="font-semibold text-blue-700"> screws</span>, 
            <span className="font-semibold text-blue-700"> screw anchors</span>, and 
            <span className="font-semibold text-blue-700"> rivets</span>.
          </p>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Focus Areas</h3>
            <ul className="space-y-3">
              {[
                "Mechanical, civil, and manufacturing engineering contexts",
                "Assembly and fixing to structures",
                "Creation of permanent joints"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptsPanel() {
  const [activeSection, setActiveSection] = useState<'screws' | 'anchors' | 'rivets'>('screws');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Sub-navigation for Concepts */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
        {[
            { id: 'screws', label: '2.1 Screws', icon: <Settings className="w-4 h-4" /> },
            { id: 'anchors', label: '2.2 Screw Anchors', icon: <Anchor className="w-4 h-4" /> },
            { id: 'rivets', label: '2.3 Rivets', icon: <Hammer className="w-4 h-4" /> }
        ].map((item) => (
            <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.id 
                    ? 'bg-slate-800 text-white ring-2 ring-offset-2 ring-slate-800' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
            >
                {item.icon}
                <span>{item.label}</span>
            </button>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {activeSection === 'screws' && (
          <div className="md:col-span-12 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Settings className="mr-2 text-blue-600" /> Screws
              </h3>
              <p className="text-slate-600 mb-6">Screws have threaded shafts with heads and are generally tightened using a screwdriver.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Installation Types */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-3">Installation Methods</h4>
                  <ul className="space-y-4">
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-bold text-blue-700 block">Predrilled hole</span>
                      <span className="text-sm text-slate-600">A hole drilled before inserting the screw.</span>
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-bold text-blue-700 block">Self-tapping screw</span>
                      <span className="text-sm text-slate-600">Does not require a predrilled hole. Cuts its own hole as it is screwed in.</span>
                    </li>
                  </ul>
                </div>

                {/* Screw vs Bolt */}
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Screws vs. Bolts</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Screws</span>
                      <ul className="text-sm text-blue-900 mt-1 list-disc list-inside">
                        <li>No nuts used</li>
                        <li>Rarely threaded holes</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Bolts</span>
                      <ul className="text-sm text-blue-900 mt-1 list-disc list-inside">
                        <li>Used with nuts</li>
                        <li>Used in threaded holes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Types */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-4">Special Types</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card title="Machine Screws" content="Small-diameter bolts. Can be used with nuts or screwed into threaded holes." />
                    <Card title="Set / Grub Screws" content="Hold components in place by friction (pressing against component). Used for wheels on shafts or connecting wires." />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'anchors' && (
          <div className="md:col-span-12 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Anchor className="mr-2 text-blue-600" /> Screw Anchors
              </h3>
              <p className="text-slate-600 mb-6">Fasteners designed to fix objects to walls.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border-l-4 border-yellow-400 shadow-sm p-4 rounded-r-lg">
                    <h4 className="font-bold text-slate-800 text-lg mb-2">Plastic Wall Plug</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>• Inserted into predrilled hole</li>
                        <li>• Plug expands as screw enters</li>
                        <li>• Friction resists pullout forces</li>
                    </ul>
                </div>
                <div className="bg-white border-l-4 border-orange-500 shadow-sm p-4 rounded-r-lg">
                    <h4 className="font-bold text-slate-800 text-lg mb-2">Expansion Anchor</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>• Bolt inside metal sleeve</li>
                        <li>• Tightening expands sleeve</li>
                        <li>• Grips hole tightly</li>
                    </ul>
                </div>
                <div className="bg-white border-l-4 border-red-600 shadow-sm p-4 rounded-r-lg">
                    <h4 className="font-bold text-slate-800 text-lg mb-2">Chemical Anchor</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>• For very high pullout forces</li>
                        <li>• Threaded bars (studs) set in adhesive</li>
                        <li>• Uses epoxy resin</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'rivets' && (
          <div className="md:col-span-12 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Hammer className="mr-2 text-blue-600" /> Rivets
              </h3>
              <p className="text-slate-600 mb-6">Permanent fasteners that cannot be unscrewed.</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-xl -z-10" />
                    <h4 className="font-bold text-lg text-slate-800 mb-2">Solid Rivets</h4>
                    <p className="text-slate-600 text-sm mb-4">Short, solid metal shaft.</p>
                    <div className="space-y-3">
                        <div className="flex items-center text-sm">
                            <span className="w-24 font-semibold text-slate-500">Structure:</span>
                            <span>Factory head + Shop head (formed)</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <span className="w-24 font-semibold text-slate-500">Usage:</span>
                            <span>Widely used in aircraft</span>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent rounded-xl -z-10" />
                    <h4 className="font-bold text-lg text-slate-800 mb-2">Blind Rivets (Pop)</h4>
                    <p className="text-slate-600 text-sm mb-4">Made from hollow tubes.</p>
                    <div className="space-y-3">
                        <div className="flex items-center text-sm">
                            <span className="w-24 font-semibold text-slate-500">Install:</span>
                            <span>Using a rivet gun</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <span className="w-24 font-semibold text-slate-500">Pros/Cons:</span>
                            <span>One-side access OK / Not high-strength</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ title, content }: { title: string; content: string }) {
    return (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-slate-800 mb-2">{title}</h5>
            <p className="text-sm text-slate-600">{content}</p>
        </div>
    )
}

function GrammarPanel() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
                <BookOpen className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Passive Voice for Process Description</h2>
        </div>
        
        <div className="prose prose-slate max-w-none text-slate-600">
            <p className="text-lg">
                The passive voice is frequently used in engineering to describe installation processes. 
                It shifts the focus from the person doing the action to the <strong>component</strong> itself.
            </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Text Examples</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <ArrowRight className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span>"Screws <span className="font-bold text-purple-700 bg-purple-50 px-1">are screwed</span> into a predrilled hole."</span>
                    </li>
                    <li className="flex items-start">
                        <ArrowRight className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span>"The rivet <span className="font-bold text-purple-700 bg-purple-50 px-1">is inserted</span> through a predrilled hole."</span>
                    </li>
                    <li className="flex items-start">
                        <ArrowRight className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span>"Chemical anchors <span className="font-bold text-purple-700 bg-purple-50 px-1">are set</span> into holes using epoxy resin."</span>
                    </li>
                </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wider mb-4">Why use it?</h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-semibold text-slate-800">Focus on the Component</p>
                        <p className="text-sm text-slate-600 mt-1">The object being assembled is more important than the assembler.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="font-semibold text-slate-800">Standard Style</p>
                        <p className="text-sm text-slate-600 mt-1">This is the expected format for engineering instructions and manuals.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function VocabularyPanel() {
  const vocab: TermDefinition[] = [
    { term: 'Self-tapping', def: 'Able to cut its own thread' },
    { term: 'Pullout force', def: 'Force that tries to pull a fastener out' },
    { term: 'Expansion', def: 'Increase in diameter to grip material' },
    { term: 'Permanent fastener', def: 'Fastener that cannot be removed' },
    { term: 'Factory head', def: 'Original head of a rivet' },
    { term: 'Shop head', def: 'Head formed during rivet installation' },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Vocabulary</h2>
        <div className="grid md:grid-cols-2 gap-4">
            {vocab.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-blue-700 mb-1">{item.term}</h3>
                    <p className="text-slate-600">{item.def}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

function ExamplesPanel() {
  const examples = [
    { title: "Sheet Metal Assembly", desc: "Self-tapping screws are common here because the material is thin and easy to cut.", icon: <Settings /> },
    { title: "Wall Mounting", desc: "Wall-mounted equipment often uses plastic or expansion anchors to grip masonry.", icon: <Anchor /> },
    { title: "Structural Loads", desc: "Chemical anchors are selected for heavy structural loads where friction anchors might fail.", icon: <Info /> },
    { title: "Aircraft Fuselage", desc: "Aircraft structures rely on solid rivets because vibrations would loosen screws.", icon: <Hammer /> },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Engineering Examples</h2>
        <div className="grid gap-6">
            {examples.map((ex, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-full text-slate-700">
                        {ex.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800">{ex.title}</h3>
                        <p className="text-slate-600 mt-1">{ex.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

/**
 * Interactive Exercises Component
 */
function ExercisesPanel() {
  const [exercise, setExercise] = useState<1 | 2 | 3>(1);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="flex space-x-2 border-b border-slate-200 pb-2 overflow-x-auto">
            <button 
                onClick={() => setExercise(1)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${exercise === 1 ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
            >
                Ex 1: Matching
            </button>
            <button 
                onClick={() => setExercise(2)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${exercise === 2 ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
            >
                Ex 2: Completion
            </button>
            <button 
                onClick={() => setExercise(3)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${exercise === 3 ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:text-slate-800'}`}
            >
                Ex 3: Description
            </button>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[400px]">
            {exercise === 1 && <ExerciseMatching />}
            {exercise === 2 && <ExerciseCompletion />}
            {exercise === 3 && <ExerciseWriting />}
        </div>
    </div>
  );
}

function ExerciseMatching() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [matches, setMatches] = useState<Set<string>>(new Set());
    const [feedback, setFeedback] = useState<string>('');

    const pairs = {
        'term-1': 'desc-b', // Self-tapping -> cuts own hole
        'term-2': 'desc-d', // Set screw -> prevents movement by friction
        'term-3': 'desc-a', // Expansion anchor -> grips by expanding
        'term-4': 'desc-c', // Blind rivet -> from one side only
    };

    const terms = [
        { id: 'term-1', text: 'Self-tapping screw' },
        { id: 'term-2', text: 'Set screw' },
        { id: 'term-3', text: 'Expansion anchor' },
        { id: 'term-4', text: 'Blind rivet' },
    ];

    const descriptions = [
        { id: 'desc-a', text: 'Fastener that grips a hole by expanding' },
        { id: 'desc-b', text: 'Screw that cuts its own hole' },
        { id: 'desc-c', text: 'Rivet installed from one side only' },
        { id: 'desc-d', text: 'Screw that prevents movement by friction' },
    ];

    const handleSelect = (id: string, type: 'term' | 'desc') => {
        if (matches.has(id)) return;

        if (!selectedId) {
            setSelectedId(id);
            setFeedback('Select the matching pair...');
            return;
        }

        if (selectedId === id) {
            setSelectedId(null);
            setFeedback('');
            return;
        }

        // check match
        const pair1 = pairs[selectedId as keyof typeof pairs];
        const pair2 = pairs[id as keyof typeof pairs];

        const isMatch = (pair1 === id) || (pair2 === selectedId);

        if (isMatch) {
            setMatches(new Set([...matches, selectedId, id]));
            setFeedback('Correct!');
            setSelectedId(null);
        } else {
            setFeedback('Incorrect, try again.');
            setSelectedId(null);
        }
    };

    const isComplete = matches.size === 8;

    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Match the term to its description</h3>
            {isComplete ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 flex items-center">
                    <CheckCircle className="mr-2" /> All matched correctly!
                </div>
            ) : (
                <div className={`p-2 h-8 mb-4 text-sm font-semibold ${feedback.includes('Correct') ? 'text-green-600' : 'text-blue-600'}`}>
                    {feedback}
                </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <h4 className="font-semibold text-slate-500 uppercase text-xs">Terms</h4>
                    {terms.map(t => (
                        <button
                            key={t.id}
                            disabled={matches.has(t.id)}
                            onClick={() => handleSelect(t.id, 'term')}
                            className={`w-full p-4 text-left rounded-lg border transition-all ${
                                matches.has(t.id) 
                                    ? 'bg-green-50 border-green-200 text-green-700 opacity-50' 
                                    : selectedId === t.id 
                                        ? 'bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500' 
                                        : 'bg-white border-slate-200 hover:border-blue-300'
                            }`}
                        >
                            {t.text}
                        </button>
                    ))}
                </div>
                <div className="space-y-3">
                    <h4 className="font-semibold text-slate-500 uppercase text-xs">Descriptions</h4>
                    {descriptions.map(d => (
                        <button
                            key={d.id}
                            disabled={matches.has(d.id)}
                            onClick={() => handleSelect(d.id, 'desc')}
                            className={`w-full p-4 text-left rounded-lg border transition-all ${
                                matches.has(d.id) 
                                    ? 'bg-green-50 border-green-200 text-green-700 opacity-50' 
                                    : selectedId === d.id 
                                        ? 'bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500' 
                                        : 'bg-white border-slate-200 hover:border-blue-300'
                            }`}
                        >
                            {d.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExerciseCompletion() {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
    const [results, setResults] = useState<{ [key: string]: boolean | null }>({});
    const [showResults, setShowResults] = useState(false);

    const checkAnswers = () => {
        setResults({
            q1: answers.q1.toLowerCase().includes('predrilled') || answers.q1.toLowerCase().includes('pre-drilled'),
            q2: answers.q2.toLowerCase().includes('friction'),
            q3: answers.q3.toLowerCase().includes('shop'),
            q4: answers.q4.toLowerCase().includes('epoxy')
        });
        setShowResults(true);
    };

    const handleChange = (q: string, val: string) => {
        setAnswers(prev => ({ ...prev, [q]: val }));
        setShowResults(false);
    };

    return (
        <div className="space-y-6">
             <h3 className="text-xl font-bold mb-4">Complete the sentences</h3>
             
             <div className="space-y-6">
                {[
                    { id: 'q1', text: 'Self-tapping screws do not require ________ holes.', hint: 'Starts with P' },
                    { id: 'q2', text: 'A wall plug increases ________ to resist pullout forces.', hint: 'Starts with F' },
                    { id: 'q3', text: 'A rivet head formed during installation is called the ________ head.', hint: 'Opposite of factory' },
                    { id: 'q4', text: 'Chemical anchors are fixed in place using ________ resin.', hint: 'Type of adhesive' }
                ].map((q) => (
                    <div key={q.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-lg text-slate-800 font-medium mb-3">
                            {q.text.split('________').map((part, i) => (
                                <span key={i}>
                                    {part}
                                    {i === 0 && (
                                        <input 
                                            type="text" 
                                            className={`mx-2 p-1 border-b-2 bg-transparent focus:outline-none w-32 text-center font-bold ${
                                                showResults 
                                                    ? results[q.id] 
                                                        ? 'border-green-500 text-green-700' 
                                                        : 'border-red-500 text-red-700'
                                                    : 'border-slate-400 focus:border-blue-500'
                                            }`}
                                            value={answers[q.id as keyof typeof answers]}
                                            onChange={(e) => handleChange(q.id, e.target.value)}
                                            placeholder="?"
                                        />
                                    )}
                                </span>
                            ))}
                        </p>
                        {showResults && !results[q.id] && (
                            <p className="text-sm text-red-500 mt-1">Hint: {q.hint}</p>
                        )}
                         {showResults && results[q.id] && (
                            <p className="text-sm text-green-600 mt-1 flex items-center"><CheckCircle size={14} className="mr-1"/> Correct</p>
                        )}
                    </div>
                ))}
             </div>

             <button 
                onClick={checkAnswers}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
                Check Answers
             </button>
        </div>
    )
}

function ExerciseWriting() {
    const [revealed, setRevealed] = useState<{[key: number]: boolean}>({});

    const toggleReveal = (id: number) => {
        setRevealed(prev => ({...prev, [id]: !prev[id]}));
    }

    const questions = [
        { 
            id: 1, 
            q: "Explain how a plastic wall plug anchor resists pullout forces.", 
            a: "As the screw enters the plug, the plug expands. This increases the friction between the plug and the wall hole, which resists pullout forces." 
        },
        { 
            id: 2, 
            q: "Describe the difference between a solid rivet and a blind rivet.", 
            a: "A solid rivet is a solid shaft that requires access to both sides to form a shop head. A blind rivet is a hollow tube that can be installed from one side only using a rivet gun." 
        },
        { 
            id: 3, 
            q: "Explain why chemical anchors are used for high pullout loads.", 
            a: "They use strong adhesives (like epoxy resin) to bond the stud to the hole material, creating a bond stronger than friction-based expansion anchors." 
        }
    ];

    return (
        <div className="space-y-8">
            <h3 className="text-xl font-bold mb-4">Applied Technical Description</h3>
            <p className="text-slate-600 mb-6">Write your answer in your own notes, then check against the model answer.</p>

            {questions.map((item) => (
                <div key={item.id} className="border-b border-slate-100 pb-6 last:border-0">
                    <h4 className="font-bold text-slate-800 mb-3">{item.id}. {item.q}</h4>
                    <textarea 
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                        rows={3}
                        placeholder="Type your description here..."
                    />
                    <button 
                        onClick={() => toggleReveal(item.id)}
                        className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center"
                    >
                        {revealed[item.id] ? <ChevronUp size={16} className="mr-1"/> : <ChevronDown size={16} className="mr-1"/>}
                        {revealed[item.id] ? "Hide Model Answer" : "Show Model Answer"}
                    </button>
                    
                    {revealed[item.id] && (
                        <div className="mt-3 bg-green-50 p-4 rounded-lg border border-green-100 text-green-900 animate-fade-in">
                            <span className="font-bold block text-xs uppercase tracking-wider mb-1 text-green-600">Model Answer</span>
                            {item.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}