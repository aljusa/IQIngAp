import React, { useState } from 'react';
import { 
  Sandwich, 
  ChefHat, 
  Utensils, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  MessageCircle, 
  BookOpen, 
  Edit3, 
  Lightbulb,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

const L1S2App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    { id: 0, title: "1. Core Idea", icon: <Lightbulb size={18} /> },
    { id: 1, title: "2. Some", icon: <CheckCircle2 size={18} /> },
    { id: 2, title: "3. Any", icon: <HelpCircle size={18} /> },
    { id: 3, title: "4. Count/Uncount", icon: <Utensils size={18} /> },
    { id: 4, title: "5. Context", icon: <MessageCircle size={18} /> },
    { id: 5, title: "6. Practice", icon: <Edit3 size={18} /> },
    { id: 6, title: "7. Reflection", icon: <BookOpen size={18} /> },
    { id: 7, title: "8. Solutions", icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-orange-500 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sandwich size={32} />
            <div>
              <h1 className="text-xl font-bold">LESSON 1 – DELICIOUS SANDWICHES</h1>
              <p className="text-sm text-orange-100">Section 2: Some / Any</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar scroll-smooth">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 font-medium ${
                activeTab === section.id
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-orange-100 border border-orange-100'
              }`}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Render */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 min-h-[500px] border border-orange-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <ChefHat size={150} className="text-orange-500" />
          </div>
          
          {activeTab === 0 && <CoreIdeaSection />}
          {activeTab === 1 && <SomeSection />}
          {activeTab === 2 && <AnySection />}
          {activeTab === 3 && <CountableSection />}
          {activeTab === 4 && <ContextSection />}
          {activeTab === 5 && <PracticeSection />}
          {activeTab === 6 && <ReflectionSection />}
          {activeTab === 7 && <SolutionsSection />}
        </div>
      </main>
    </div>
  );
};

// --- SECTION COMPONENTS ---

const CoreIdeaSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
      <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
        1️⃣ Core Idea (Idea Clave)
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
        <p className="text-lg">
          Cuando hablamos de <strong>cantidad no específica</strong> (no decimos exactamente cuánto), usamos <span className="font-bold text-blue-700 bg-blue-200 px-2 rounded">SOME</span> y <span className="font-bold text-red-600 bg-red-100 px-2 rounded">ANY</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm text-center hover:border-orange-300 transition-colors">
          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-600">🍔</div>
          <h3 className="font-bold text-slate-700">Comida</h3>
          <p className="text-sm text-slate-500">Hablamos de ingredientes</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm text-center hover:border-orange-300 transition-colors">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">❓</div>
          <h3 className="font-bold text-slate-700">Preguntas</h3>
          <p className="text-sm text-slate-500">Hacemos preguntas generales</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm text-center hover:border-orange-300 transition-colors">
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">🤝</div>
          <h3 className="font-bold text-slate-700">Ofertas</h3>
          <p className="text-sm text-slate-500">Ofrecemos o pedimos algo</p>
        </div>
      </div>
    </div>
  );
};

const SomeSection = () => {
  const [isPolite, setIsPolite] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
        2️⃣ Some (Principalmente afirmativas)
      </h2>

      <div className="bg-green-50 p-4 rounded-lg">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>Decimos que <strong>hay algo</strong>.</li>
          <li>Ofrecemos o pedimos de forma <strong>amable</strong>.</li>
        </ul>
      </div>

      {/* Interactive Simulator */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4 text-center">Simulador de Situación</h3>
        
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={() => setIsPolite(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${!isPolite ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'}`}
          >
            Afirmación Normal
          </button>
          <button 
            onClick={() => setIsPolite(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isPolite ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}`}
          >
            Oferta Educada (Pregunta)
          </button>
        </div>

        <div className="text-center p-6 bg-slate-50 rounded-lg text-xl transition-all">
          {isPolite ? (
            <div className="space-y-2">
              <span className="text-blue-600 font-bold">Would you like <u>some</u> bread?</span>
              <p className="text-sm text-slate-500 mt-2">💡 Usamos SOME en preguntas cuando esperamos un "Sí" o somos educados.</p>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-green-600 font-bold">There is <u>some</u> cheese in the fridge.</span>
              <p className="text-sm text-slate-500 mt-2">💡 Usamos SOME para confirmar existencia.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AnySection = () => {
  const [sentenceType, setSentenceType] = useState('negative');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2">
        3️⃣ Any (Preguntas y Negativas)
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
          <h3 className="font-bold text-red-700">Usamos ANY cuando:</h3>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Hacemos preguntas generales.</li>
            <li>Decimos que <strong>NO</strong> hay algo.</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
           <h3 className="font-bold text-amber-800">📌 Error Común</h3>
           <div className="mt-2 text-sm">
             <p className="text-red-500 line-through">❌ There isn’t <strong>some</strong> cheese.</p>
             <p className="text-green-600 font-bold">✅ There isn’t <strong>any</strong> cheese.</p>
           </div>
        </div>
      </div>

      {/* Interactive Toggle */}
      <div className="mt-6 bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
        <h3 className="text-center font-bold mb-4">Transforma la oración</h3>
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="font-bold text-slate-400">Pregunta</span>
          <div 
            className={`w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${sentenceType === 'negative' ? 'bg-red-500 justify-end' : 'bg-blue-500 justify-start'}`}
            onClick={() => setSentenceType(sentenceType === 'negative' ? 'question' : 'negative')}
          >
            <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
          </div>
          <span className="font-bold text-slate-400">Negativo</span>
        </div>

        <div className="text-center text-2xl font-medium min-h-[80px] flex items-center justify-center">
          {sentenceType === 'question' ? (
             <span className="animate-in zoom-in">Are there <span className="text-blue-600 font-bold border-b-2 border-blue-600">any</span> tomatoes? 🍅</span>
          ) : (
             <span className="animate-in zoom-in">There isn't <span className="text-red-600 font-bold border-b-2 border-red-600">any</span> ham left. 🥩</span>
          )}
        </div>
      </div>
    </div>
  );
};

const CountableSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-purple-600">
        4️⃣ Some / Any con Countable & Uncountable
      </h2>
      
      <p className="text-slate-600 bg-purple-50 p-4 rounded-lg">
        👉 La diferencia <strong>no es el sustantivo</strong>, sino el tipo de frase (afirmativa, pregunta, negativa). Ambos tipos de sustantivos usan both.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-100 text-purple-900">
              <th className="p-4">Type of Noun</th>
              <th className="p-4 bg-green-100 text-green-800">Some (+)</th>
              <th className="p-4 bg-red-100 text-red-800">Any (?, -)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold flex items-center gap-2">
                <span className="bg-slate-200 rounded p-1 text-xs">🥚</span> Countable (plural)
              </td>
              <td className="p-4 text-green-700 font-medium">some eggs</td>
              <td className="p-4 text-red-700 font-medium">any eggs</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-bold flex items-center gap-2">
                <span className="bg-yellow-200 rounded p-1 text-xs">🧀</span> Uncountable
              </td>
              <td className="p-4 text-green-700 font-medium">some cheese</td>
              <td className="p-4 text-red-700 font-medium">any cheese</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-slate-500 italic">Pasa el mouse sobre la tabla para resaltar las filas.</p>
      </div>
    </div>
  );
};

const ContextSection = () => {
  const examples = [
    { text: "I need some bread to make sandwiches.", type: "Affirmative", item: "🍞" },
    { text: "Are there any eggs in the fridge?", type: "Question", item: "🥚" },
    { text: "We don’t have any cheese, so let’s buy some.", type: "Mixed", item: "🧀" },
    { text: "Would you like some tomato in your sandwich?", type: "Polite Offer", item: "🍅" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-orange-600">5️⃣ Examples in Context</h2>
      <p className="text-slate-600 mb-4">Situaciones reales haciendo un sándwich.</p>

      <div className="grid gap-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="bg-orange-100 text-2xl w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              {ex.item}
            </div>
            <div>
              <p className="text-lg font-medium text-slate-800">{ex.text}</p>
              <span className="text-xs uppercase font-bold tracking-wider text-orange-400 mt-1 inline-block">
                {ex.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PracticeSection = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '' });
  const [showResults, setShowResults] = useState(false);

  const handleChange = (q, val) => {
    setAnswers({ ...answers, [q]: val });
    setShowResults(false); // Reset validation if they change answer
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  // Helper to render input status
  const getStatus = (q, correct) => {
    if (!showResults) return 'border-slate-300';
    return answers[q].toLowerCase().trim() === correct 
      ? 'border-green-500 bg-green-50 text-green-700' 
      : 'border-red-500 bg-red-50 text-red-700';
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        6️⃣ Guided Practice <Edit3 />
      </h2>

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">✏️ Exercise 1 – Choose SOME or ANY</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span>1. There is</span>
            <select 
              className={`border rounded px-2 py-1 ${getStatus('q1', 'some')}`}
              onChange={(e) => handleChange('q1', e.target.value)}
              value={answers.q1}
            >
              <option value="">...</option>
              <option value="some">some</option>
              <option value="any">any</option>
            </select>
            <span>bread on the table.</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span>2. Are there</span>
            <select 
              className={`border rounded px-2 py-1 ${getStatus('q2', 'any')}`}
              onChange={(e) => handleChange('q2', e.target.value)}
              value={answers.q2}
            >
              <option value="">...</option>
              <option value="some">some</option>
              <option value="any">any</option>
            </select>
            <span>tomatoes?</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span>3. We don't have</span>
            <select 
              className={`border rounded px-2 py-1 ${getStatus('q3', 'any')}`}
              onChange={(e) => handleChange('q3', e.target.value)}
              value={answers.q3}
            >
              <option value="">...</option>
              <option value="some">some</option>
              <option value="any">any</option>
            </select>
            <span>ham.</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span>4. I need</span>
            <select 
              className={`border rounded px-2 py-1 ${getStatus('q4', 'some')}`}
              onChange={(e) => handleChange('q4', e.target.value)}
              value={answers.q4}
            >
              <option value="">...</option>
              <option value="some">some</option>
              <option value="any">any</option>
            </select>
            <span>cheese for my sandwich.</span>
          </div>
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 text-slate-700 border-b pb-2">✏️ Exercise 2 – Complete the dialogue</h3>
        <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
          <p>
            <span className="font-bold text-orange-600">A:</span> Is there 
            <input 
              type="text" 
              className={`mx-2 w-20 border rounded px-1 ${getStatus('q5', 'any')}`}
              placeholder="..."
              value={answers.q5}
              onChange={(e) => handleChange('q5', e.target.value)}
            />
            cheese?
          </p>
          <p>
            <span className="font-bold text-blue-600">B:</span> No, there isn’t 
            <input 
              type="text" 
              className={`mx-2 w-20 border rounded px-1 ${getStatus('q6', 'any')}`}
              placeholder="..."
              value={answers.q6}
              onChange={(e) => handleChange('q6', e.target.value)}
            />.
          </p>
          <p>
            <span className="font-bold text-orange-600">A:</span> Ok. Are there 
            <input 
              type="text" 
              className={`mx-2 w-20 border rounded px-1 ${getStatus('q7', 'any')}`}
              placeholder="..."
              value={answers.q7}
              onChange={(e) => handleChange('q7', e.target.value)}
            />
            eggs?
          </p>
          <p>
            <span className="font-bold text-blue-600">B:</span> Yes, there are 
            <input 
              type="text" 
              className={`mx-2 w-20 border rounded px-1 ${getStatus('q8', 'some')}`}
              placeholder="..."
              value={answers.q8}
              onChange={(e) => handleChange('q8', e.target.value)}
            />
             eggs in the fridge.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={checkAnswers}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          {showResults ? <RefreshCw size={20} /> : <CheckCircle2 size={20} />}
          {showResults ? 'Update Check' : 'Check Answers'}
        </button>
      </div>
    </div>
  );
};

const ReflectionSection = () => {
  const [text, setText] = useState('');
  const [checks, setChecks] = useState({ some: false, anyQ: false, anyNeg: false });

  const handleCheck = (key) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-indigo-600">7️⃣ Reflection (Pensar y Producir)</h2>
      
      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
        <h3 className="font-bold mb-2">🧠 Task:</h3>
        <p>You are at home and want to make a sandwich. Write 4-5 lines.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
           <textarea 
            className="w-full h-48 p-4 border-2 border-slate-200 rounded-xl focus:border-indigo-400 focus:ring-0 resize-none shadow-sm"
            placeholder="Write your text here... Example: I am hungry. I have some bread..."
            value={text}
            onChange={(e) => setText(e.target.value)}
           ></textarea>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-700 mb-3 border-b pb-2">Checklist Criteria:</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded transition">
              <input 
                type="checkbox" 
                checked={checks.some} 
                onChange={() => handleCheck('some')}
                className="w-5 h-5 accent-indigo-600 rounded"
              />
              <span>One affirmative sentence with <strong>some</strong></span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded transition">
              <input 
                type="checkbox" 
                checked={checks.anyQ} 
                onChange={() => handleCheck('anyQ')}
                className="w-5 h-5 accent-indigo-600 rounded"
              />
              <span>One question with <strong>any</strong></span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded transition">
              <input 
                type="checkbox" 
                checked={checks.anyNeg} 
                onChange={() => handleCheck('anyNeg')}
                className="w-5 h-5 accent-indigo-600 rounded"
              />
              <span>One negative sentence with <strong>any</strong></span>
            </label>
          </div>
          
          <div className="mt-4 pt-4 border-t text-sm text-slate-500">
            Characters typed: {text.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-slate-800">8️⃣ Solutions & Explanations</h2>
      
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-xl border-l-8 border-green-500 shadow-md">
          <h3 className="font-bold text-lg mb-3">✅ Exercise 1 Solutions</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-slate-100 pb-1">
              <span>1. <strong>some</strong> bread</span>
              <span className="text-sm text-slate-500 italic">(affirmative)</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-1">
              <span>2. <strong>any</strong> tomatoes</span>
              <span className="text-sm text-slate-500 italic">(question)</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-1">
              <span>3. <strong>any</strong> ham</span>
              <span className="text-sm text-slate-500 italic">(negative)</span>
            </li>
            <li className="flex justify-between">
              <span>4. <strong>some</strong> cheese</span>
              <span className="text-sm text-slate-500 italic">(affirmative)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-8 border-blue-500 shadow-md">
          <h3 className="font-bold text-lg mb-3">✅ Exercise 2 Solutions</h3>
          <div className="space-y-2 bg-slate-50 p-4 rounded font-medium">
             <p>A: Is there <span className="text-green-600 font-bold">any</span> cheese?</p>
             <p>B: No, there isn’t <span className="text-red-600 font-bold">any</span>.</p>
             <p>A: Ok. Are there <span className="text-green-600 font-bold">any</span> eggs?</p>
             <p>B: Yes, there are <span className="text-blue-600 font-bold">some</span> eggs in the fridge.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">📘 End of Section 2</h3>
        <p className="opacity-80">Cuando quieras, seguimos con Section 3, donde unimos How much / How many + some / any en situaciones reales.</p>
      </div>
    </div>
  );
};

export default L1S2App;