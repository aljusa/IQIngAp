import React, { useState } from 'react';
import { BookOpen, CheckCircle, Lightbulb, ChevronDown, ChevronUp, ArrowRight, Activity, Target, Triangle } from 'lucide-react';

// --- Visual Diagram Components (SVG) ---

const EquilibriumDiagram = () => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 h-64 w-full">
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Supports */}
      <polygon points="80,150 100,100 120,150" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <polygon points="280,150 300,100 320,150" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <rect x="60" y="150" width="280" height="10" fill="#94a3b8" />
      
      {/* Beam */}
      <rect x="50" y="80" width="300" height="20" fill="#3b82f6" rx="4" />
      
      {/* Load Arrow (Downward) */}
      <path d="M 200,20 L 200,70" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
      <text x="210" y="45" fill="#ef4444" fontSize="14" fontWeight="bold">Load (Force)</text>
      
      {/* Reaction Arrows (Upward) */}
      <path d="M 100,180 L 100,160" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
      <text x="40" y="175" fill="#10b981" fontSize="14" fontWeight="bold">Reaction</text>
      
      <path d="M 300,180 L 300,160" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
      <text x="315" y="175" fill="#10b981" fontSize="14" fontWeight="bold">Reaction</text>

      {/* Defs for arrowheads */}
      <defs>
        <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
        </marker>
        <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
        </marker>
      </defs>
    </svg>
    <p className="text-sm text-slate-500 mt-2 text-center font-medium">Equilibrium: Downward Load = Upward Reactions</p>
  </div>
);

const ResultantForceDiagram = () => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 h-64 w-full">
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Object */}
      <rect x="120" y="50" width="160" height="100" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" rx="8" />
      
      {/* Centre of Gravity */}
      <circle cx="200" cy="100" r="6" fill="#f59e0b" />
      <circle cx="200" cy="100" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2,2" />
      <text x="215" y="105" fill="#d97706" fontSize="12" fontWeight="bold">Centre of Gravity</text>

      {/* Component Forces */}
      <path d="M 60,70 L 110,70" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrowhead-gray)" />
      <text x="40" y="65" fill="#64748b" fontSize="12">F1</text>
      
      <path d="M 60,130 L 110,130" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrowhead-gray)" />
      <text x="40" y="125" fill="#64748b" fontSize="12">F2</text>

      {/* Resultant Force */}
      <path d="M 285,100 L 355,100" stroke="#8b5cf6" strokeWidth="5" markerEnd="url(#arrowhead-purple)" />
      <text x="290" y="90" fill="#7c3aed" fontSize="14" fontWeight="bold">Resultant Force</text>

      <defs>
        <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
        </marker>
        <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
        </marker>
      </defs>
    </svg>
    <p className="text-sm text-slate-500 mt-2 text-center font-medium">Combining component forces into a single resultant force.</p>
  </div>
);

const TrussDiagram = () => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 h-64 w-full">
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Truss Triangle */}
      <polygon points="100,160 200,40 300,160" fill="none" stroke="#cbd5e1" strokeWidth="12" strokeLinejoin="round" />
      
      {/* Nodes (Pin joints) */}
      <circle cx="100" cy="160" r="8" fill="#475569" />
      <circle cx="200" cy="40" r="8" fill="#475569" />
      <circle cx="300" cy="160" r="8" fill="#475569" />

      {/* Strut (Compression) - Left angled member */}
      <path d="M 140,80 L 160,104" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead-red-small)" />
      <path d="M 160,104 L 140,80" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead-red-small)" />
      <text x="70" y="90" fill="#ef4444" fontSize="12" fontWeight="bold">Strut (Compression)</text>

      {/* Tie (Tension) - Bottom horizontal member */}
      <path d="M 180,160 L 150,160" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue-small)" />
      <path d="M 220,160 L 250,160" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue-small)" />
      <text x="175" y="185" fill="#3b82f6" fontSize="12" fontWeight="bold">Tie (Tension)</text>
      
      <defs>
        <marker id="arrowhead-red-small" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
        </marker>
        <marker id="arrowhead-blue-small" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
    <p className="text-sm text-slate-500 mt-2 text-center font-medium">Truss: Triangles provide stability. Ties resist tension, struts resist compression.</p>
  </div>
);


// --- Main Application Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState('lesson');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Activity size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Structural Mechanics</h1>
          </div>
          <nav className="flex space-x-2 bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('lesson')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'lesson' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Lesson
            </button>
            <button 
              onClick={() => setActiveTab('exercises')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'exercises' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Exercises
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeTab === 'lesson' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Overview Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <BookOpen className="text-blue-500 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Overview</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    This lesson introduces key concepts in structural mechanics, focusing on how forces act on structures, how engineers simplify force systems, and how structures are designed to remain stable.
                  </p>
                </div>
              </div>
            </section>

            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider border-b-2 border-blue-500 pb-2 inline-block">Key Vocabulary and Definitions</h3>

              {/* Concept A: Statically Determinate Structures */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="flex items-center space-x-2 mb-4 text-blue-600">
                      <Target size={20} />
                      <h4 className="text-lg font-bold">A. Statically Determinate Structures</h4>
                    </div>
                    <ul className="space-y-3 mb-6 text-slate-600">
                      <li><strong className="text-slate-900">Structural member:</strong> A part of a structure that carries load.</li>
                      <li><strong className="text-slate-900">Load:</strong> A force applied to a structure.</li>
                      <li><strong className="text-slate-900">Reaction:</strong> A force that acts in the opposite direction to the load.</li>
                      <li><strong className="text-slate-900">Equilibrium:</strong> A state where forces are balanced (no movement).</li>
                      <li><strong className="text-slate-900">Statically determinate structure:</strong> Designed to remain in equilibrium and not move.</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start space-x-3">
                      <Lightbulb className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-blue-900">
                        <strong>Explanation:</strong> When a load is applied, a reaction force of equal magnitude acts in the opposite direction, keeping the structure stable.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-slate-50 flex items-center justify-center">
                    <EquilibriumDiagram />
                  </div>
                </div>
              </section>

              {/* Concept B: Resultant Forces and Centre of Gravity */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 order-2 md:order-1 bg-slate-50">
                    <ResultantForceDiagram />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex items-center space-x-2 mb-4 text-purple-600">
                      <Activity size={20} />
                      <h4 className="text-lg font-bold">B. Resultant Forces & Centre of Gravity</h4>
                    </div>
                    <ul className="space-y-3 mb-6 text-slate-600">
                      <li><strong className="text-slate-900">Component forces:</strong> Individual forces acting on a structure.</li>
                      <li><strong className="text-slate-900">Resultant force:</strong> A single force representing all component forces combined.</li>
                      <li><strong className="text-slate-900">Magnitude & Direction:</strong> The size and orientation of a force.</li>
                      <li><strong className="text-slate-900">Gravity:</strong> A force acting vertically downward.</li>
                      <li><strong className="text-slate-900">Centre of gravity:</strong> The imaginary point where the total weight is considered to act.</li>
                    </ul>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex items-start space-x-3">
                      <Lightbulb className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-purple-900">
                        <strong>Important Notes:</strong> The resultant force combines all forces into one. The centre of gravity may be inside or outside the object depending on its shape.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Concept C: Frames and Trusses */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="flex items-center space-x-2 mb-4 text-emerald-600">
                      <Triangle size={20} />
                      <h4 className="text-lg font-bold">C. Frames and Trusses</h4>
                    </div>
                    <ul className="space-y-3 mb-6 text-slate-600">
                      <li><strong className="text-slate-900">Frame/Truss/Lattice:</strong> Structures made of connected members, often triangular units.</li>
                      <li><strong className="text-slate-900">Stiffen (brace):</strong> To make a structure stronger and more rigid.</li>
                      <li><strong className="text-slate-900">Pin joint:</strong> Allows movement (flexing).</li>
                      <li><strong className="text-slate-900">Rigid joint:</strong> Does not allow movement.</li>
                      <li><strong className="text-slate-900">Tie:</strong> A member that resists tension.</li>
                      <li><strong className="text-slate-900">Strut:</strong> A member that resists compression.</li>
                    </ul>
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex items-start space-x-3">
                      <Lightbulb className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-emerald-900">
                        <strong>Explanation:</strong> Triangles are used in structures because they are inherently stable and resist deformation better than other geometric shapes.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-slate-50 flex items-center justify-center">
                    <TrussDiagram />
                  </div>
                </div>
              </section>
            </div>

            {/* Example Sentences */}
            <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <span className="bg-blue-500 p-1.5 rounded-md"><BookOpen size={18} /></span>
                <span>Example Sentences (Engineering Context)</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "The beam remains in equilibrium because the reaction forces balance the load.",
                  "Engineers calculate the resultant force to simplify complex force systems.",
                  "The centre of gravity of the structure affects its stability.",
                  "The bridge uses a truss design to improve strength.",
                  "Cross-members are added to stiffen the frame.",
                  "The structure failed because the pin joints allowed too much movement."
                ].map((sentence, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <ArrowRight className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-slate-300">{sentence}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* EXERCISES SECTION */}
        {activeTab === 'exercises' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Practice Exercises</h2>
              <p className="text-slate-600 mb-8">Test your understanding of structural mechanics vocabulary and concepts.</p>

              <div className="space-y-12">
                {/* Exercise 1 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                    Exercise 1: Matching (Basic)
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <p className="mb-4 text-slate-700 font-medium">Match each term with its correct definition (Mentally connect them, then check below):</p>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <ul className="space-y-2 font-semibold text-slate-800">
                        <li>1. Reaction</li>
                        <li>2. Resultant force</li>
                        <li>3. Centre of gravity</li>
                        <li>4. Strut</li>
                        <li>5. Tie</li>
                      </ul>
                      <ul className="space-y-2 text-slate-600 list-disc pl-5">
                        <li>a. Member resisting compression</li>
                        <li>b. Opposing force to a load</li>
                        <li>c. Combined effect of multiple forces</li>
                        <li>d. Member resisting tension</li>
                        <li>e. Point where weight is considered to act</li>
                      </ul>
                    </div>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center text-blue-600 font-medium hover:text-blue-700 select-none">
                        <CheckCircle size={18} className="mr-2" />
                        Show Answers
                        <ChevronDown size={18} className="ml-1 transition group-open:rotate-180" />
                      </summary>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-slate-700">
                        1 - b (Reaction: Opposing force to a load)<br/>
                        2 - c (Resultant force: Combined effect of multiple forces)<br/>
                        3 - e (Centre of gravity: Point where weight is considered to act)<br/>
                        4 - a (Strut: Member resisting compression)<br/>
                        5 - d (Tie: Member resisting tension)
                      </div>
                    </details>
                  </div>
                </div>

                {/* Exercise 2 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                    Exercise 2: Fill in the Blanks (Intermediate)
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <ul className="space-y-4 mb-6 text-slate-700">
                      <li>1. When forces are balanced, the structure is in <strong>______</strong>.</li>
                      <li>2. A force equal and opposite to the load is called a <strong>______</strong>.</li>
                      <li>3. Engineers combine multiple forces into a <strong>______</strong> force.</li>
                      <li>4. A joint that allows movement is called a <strong>______</strong> joint.</li>
                      <li>5. A <strong>______</strong> is used to resist tensile forces in a structure.</li>
                    </ul>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center text-blue-600 font-medium hover:text-blue-700 select-none">
                        <CheckCircle size={18} className="mr-2" />
                        Show Answers
                        <ChevronDown size={18} className="ml-1 transition group-open:rotate-180" />
                      </summary>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-slate-700">
                        1. equilibrium <br/>
                        2. reaction <br/>
                        3. resultant <br/>
                        4. pin <br/>
                        5. tie
                      </div>
                    </details>
                  </div>
                </div>

                {/* Exercise 3 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                    Exercise 3: Contextual Usage (Advanced)
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <ul className="space-y-4 mb-6 text-slate-700">
                      <li>1. A roof structure uses triangular elements to improve strength. This is a <strong>______</strong>.</li>
                      <li>2. A vertical member shortens under load and resists compression. It is a <strong>______</strong>.</li>
                      <li>3. A structure remains stable because all forces cancel out. This state is called <strong>______</strong>.</li>
                      <li>4. Engineers simplify several forces into one equivalent force called the <strong>______</strong>.</li>
                      <li>5. A connection that prevents rotation and movement is a <strong>______</strong> joint.</li>
                    </ul>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center text-blue-600 font-medium hover:text-blue-700 select-none">
                        <CheckCircle size={18} className="mr-2" />
                        Show Answers
                        <ChevronDown size={18} className="ml-1 transition group-open:rotate-180" />
                      </summary>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-slate-700">
                        1. truss <br/>
                        2. strut <br/>
                        3. equilibrium <br/>
                        4. resultant force <br/>
                        5. rigid (or moment connection)
                      </div>
                    </details>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}