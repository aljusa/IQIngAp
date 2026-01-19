import React, { useState } from 'react';
import { BookOpen, HelpCircle, Utensils, PenTool, Check, X, Sandwich, Egg, Milk, Wheat, Info, ChevronRight, RefreshCw } from 'lucide-react';

const L1S1App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "1. Core Idea", icon: <Info size={18} /> },
    { id: 1, title: "2. Countable vs Uncountable", icon: <Utensils size={18} /> },
    { id: 2, title: "3. Grammar Rules", icon: <BookOpen size={18} /> },
    { id: 3, title: "4. Sandwich Builder", icon: <Sandwich size={18} /> },
    { id: 4, title: "5. Practice", icon: <HelpCircle size={18} /> },
    { id: 5, title: "6. Reflection", icon: <PenTool size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-slate-800">
      <header className="bg-orange-600 text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Sandwich size={32} />
            LESSON 1: DELICIOUS SANDWICHES
          </h1>
          <p className="mt-2 text-orange-100">Section 1: How much? / How many? – A little / A few</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 mt-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b-2 border-orange-200 pb-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-colors whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'bg-white text-orange-600 hover:bg-orange-100'}`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[500px]">
          {activeTab === 0 && <CoreIdea />}
          {activeTab === 1 && <CountableGame />}
          {activeTab === 2 && <GrammarRules />}
          {activeTab === 3 && <SandwichContextBuilder />}
          {activeTab === 4 && <PracticeQuiz />}
          {activeTab === 5 && <Reflection />}
        </div>
      </main>
      
      <footer className="text-center text-slate-500 p-6 text-sm">
        Delicious Sandwiches Lesson • Interactive Learning
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const CoreIdea = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-bold text-orange-700">The Core Idea (La Idea Clave)</h2>
    <p className="text-lg text-slate-600">
      En inglés, no todas las cosas se cuentan igual. Esto determina qué palabras usamos para preguntar por cantidades.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl text-center transform transition hover:scale-105">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🧮</div>
        <h3 className="text-xl font-bold text-blue-700 mb-2">Countable Nouns</h3>
        <p className="text-sm text-blue-600 mb-4">Se pueden contar (1, 2, 3...)</p>
        <ul className="text-left bg-white p-4 rounded-lg shadow-sm space-y-2">
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> One Sandwich</li>
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Two Tomatoes</li>
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Three Eggs</li>
        </ul>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl text-center transform transition hover:scale-105">
        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🧃</div>
        <h3 className="text-xl font-bold text-purple-700 mb-2">Uncountable Nouns</h3>
        <p className="text-sm text-purple-600 mb-4">Sustancias, líquidos (No se cuentan por unidad)</p>
        <ul className="text-left bg-white p-4 rounded-lg shadow-sm space-y-2">
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Bread (not 'breads')</li>
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Cheese (not 'cheeses')</li>
          <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Water</li>
        </ul>
      </div>
    </div>
  </div>
);

const CountableGame = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Tomato', type: 'countable', icon: '🍅' },
    { id: 2, name: 'Water', type: 'uncountable', icon: '💧' },
    { id: 3, name: 'Cheese', type: 'uncountable', icon: '🧀' },
    { id: 4, name: 'Egg', type: 'countable', icon: '🥚' },
    { id: 5, name: 'Bread', type: 'uncountable', icon: '🍞' },
    { id: 6, name: 'Sandwich', type: 'countable', icon: '🥪' },
    { id: 7, name: 'Ham', type: 'uncountable', icon: '🍖' },
  ]);

  const [message, setMessage] = useState("Click on an item to categorize it!");
  const [lastAction, setLastAction] = useState(null); // 'correct' or 'wrong'

  const handleSort = (item, selectedType) => {
    if (item.type === selectedType) {
      setMessage(`Correct! ${item.name} is ${selectedType}.`);
      setLastAction('correct');
      setItems(items.filter(i => i.id !== item.id));
    } else {
      setMessage(`Oops! ${item.name} is actually ${item.type}. Try again.`);
      setLastAction('wrong');
    }
  };

  const resetGame = () => {
    setItems([
      { id: 1, name: 'Tomato', type: 'countable', icon: '🍅' },
      { id: 2, name: 'Water', type: 'uncountable', icon: '💧' },
      { id: 3, name: 'Cheese', type: 'uncountable', icon: '🧀' },
      { id: 4, name: 'Egg', type: 'countable', icon: '🥚' },
      { id: 5, name: 'Bread', type: 'uncountable', icon: '🍞' },
      { id: 6, name: 'Sandwich', type: 'countable', icon: '🥪' },
      { id: 7, name: 'Ham', type: 'uncountable', icon: '🍖' },
    ]);
    setMessage("Let's start sorting!");
    setLastAction(null);
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Mini-Game: Sort the Food</h2>
      <p className="mb-6 text-slate-600">Click the buttons below each item to sort them into the correct fridge!</p>

      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {items.map(item => (
            <div key={item.id} className="bg-white border rounded-lg p-4 shadow-md flex flex-col items-center animate-pop-in">
              <span className="text-4xl mb-2">{item.icon}</span>
              <span className="font-bold mb-3">{item.name}</span>
              <div className="flex flex-col w-full gap-2">
                <button 
                  onClick={() => handleSort(item, 'countable')}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs py-1 px-2 rounded"
                >
                  Countable (1,2,3)
                </button>
                <button 
                  onClick={() => handleSort(item, 'uncountable')}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs py-1 px-2 rounded"
                >
                  Uncountable (Mass)
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 bg-green-50 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Great job! All sorted.</h3>
          <button onClick={resetGame} className="flex items-center gap-2 mx-auto bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            <RefreshCw size={18}/> Play Again
          </button>
        </div>
      )}

      <div className={`p-4 rounded-lg font-bold transition-colors ${lastAction === 'correct' ? 'bg-green-100 text-green-800' : lastAction === 'wrong' ? 'bg-red-100 text-red-800' : 'bg-gray-100'}`}>
        {message}
      </div>
    </div>
  );
};

const GrammarRules = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-orange-700 mb-6">The Rules: How Much & How Many</h2>
      
      {/* Rule 1 */}
      <div className="grid md:grid-cols-2 gap-0 border rounded-xl overflow-hidden shadow-sm">
        <div className="bg-blue-600 text-white p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">HOW MANY?</h3>
          <p className="opacity-90">Use with Countable Nouns</p>
          <div className="mt-4 bg-blue-700 p-3 rounded text-sm">
            Example: How many <b>sandwiches</b> do you want?
          </div>
        </div>
        <div className="bg-purple-600 text-white p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">HOW MUCH?</h3>
          <p className="opacity-90">Use with Uncountable Nouns</p>
          <div className="mt-4 bg-purple-700 p-3 rounded text-sm">
            Example: How much <b>cheese</b> do you want?
          </div>
        </div>
      </div>

      {/* Rule 2 */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-700 mb-4">Small Quantities: A Few vs. A Little</h3>
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            
            <div className="text-center w-full">
              <div className="text-lg font-bold text-blue-700 mb-2">A FEW</div>
              <div className="h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-blue-500 w-[30%]"></div>
              </div>
              <p className="text-sm text-slate-600">For Countable Nouns</p>
              <p className="italic text-slate-500 mt-1">"I have a few eggs."</p>
            </div>

            <div className="hidden md:block h-24 w-px bg-orange-200"></div>

            <div className="text-center w-full">
              <div className="text-lg font-bold text-purple-700 mb-2">A LITTLE</div>
              <div className="h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-purple-500 w-[30%]"></div>
              </div>
              <p className="text-sm text-slate-600">For Uncountable Nouns</p>
              <p className="italic text-slate-500 mt-1">"I have a little bread."</p>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <h4 className="font-bold text-red-700 flex items-center gap-2">
          <Info size={18}/> Common Mistake
        </h4>
        <p className="text-red-800 mt-1">
          ❌ How many cheese? <br/>
          ✅ <span className="font-bold">How much</span> cheese?
        </p>
      </div>
    </div>
  );
};

const SandwichContextBuilder = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (name, type, icon) => {
    setIngredients([...ingredients, { name, type, icon, id: Date.now() }]);
  };

  const reset = () => setIngredients([]);

  // Calculate descriptive sentences based on current ingredients
  const getSentence = () => {
    if (ingredients.length === 0) return "Your plate is empty.";
    
    const countables = ingredients.filter(i => i.type === 'countable');
    const uncountables = ingredients.filter(i => i.type === 'uncountable');
    
    let parts = [];
    if (countables.length > 0) {
      parts.push(`I have ${countables.length > 3 ? 'many' : 'a few'} ${countables[0].name.toLowerCase()}s`);
    }
    if (uncountables.length > 0) {
      parts.push(`I have ${uncountables.length > 3 ? 'a lot of' : 'a little'} ${uncountables[0].name.toLowerCase()}`);
    }

    return parts.join(' and ') + '.';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sandwich Builder: Context</h2>
      <p className="mb-6 text-slate-600">Add ingredients to see how the sentences change!</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Add Ingredients:</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => addIngredient('Tomato', 'countable', '🍅')} className="p-3 border rounded hover:bg-red-50 flex items-center gap-2">
              🍅 Add Tomato
            </button>
            <button onClick={() => addIngredient('Egg', 'countable', '🥚')} className="p-3 border rounded hover:bg-yellow-50 flex items-center gap-2">
              🥚 Add Egg
            </button>
            <button onClick={() => addIngredient('Cheese', 'uncountable', '🧀')} className="p-3 border rounded hover:bg-yellow-100 flex items-center gap-2">
              🧀 Add Cheese
            </button>
            <button onClick={() => addIngredient('Ham', 'uncountable', '🍖')} className="p-3 border rounded hover:bg-pink-50 flex items-center gap-2">
              🍖 Add Ham
            </button>
          </div>
          <button onClick={reset} className="text-red-500 text-sm underline mt-2">Clear Plate</button>
        </div>

        {/* Visualization */}
        <div className="bg-orange-100 p-6 rounded-xl relative min-h-[200px] flex flex-col items-center justify-center border-2 border-orange-300 border-dashed">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
             {ingredients.map(ing => (
               <span key={ing.id} className="text-3xl animate-bounce-short">{ing.icon}</span>
             ))}
             {ingredients.length === 0 && <span className="text-slate-400 italic">Plate is empty...</span>}
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg w-full text-center">
            <p className="font-bold text-slate-800 text-lg">
              "{getSentence()}"
            </p>
            <p className="text-xs text-slate-500 mt-2">
              (Logic: Countable = "A few", Uncountable = "A little")
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PracticeQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, type: 'hm', q: "_____ cheese is there?", options: ["How much", "How many"], correct: "How much" },
    { id: 2, type: 'hm', q: "_____ sandwiches do you want?", options: ["How much", "How many"], correct: "How many" },
    { id: 3, type: 'hm', q: "_____ ham do we need?", options: ["How much", "How many"], correct: "How much" },
    { id: 4, type: 'hm', q: "_____ tomatoes are on the table?", options: ["How much", "How many"], correct: "How many" },
    { id: 5, type: 'lf', q: "I want _____ cheese in my sandwich.", options: ["a little", "a few"], correct: "a little" },
    { id: 6, type: 'lf', q: "There are _____ eggs in the fridge.", options: ["a little", "a few"], correct: "a few" },
    { id: 7, type: 'lf', q: "We need _____ bread.", options: ["a little", "a few"], correct: "a little" },
    { id: 8, type: 'lf', q: "She eats _____ sandwiches for lunch.", options: ["a little", "a few"], correct: "a few" },
  ];

  const handleSelect = (qid, val) => {
    setAnswers({ ...answers, [qid]: val });
    setShowResults(false); // Reset feedback if they change answer
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Exercise 1 & 2: Guided Practice</h2>
      
      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-slate-50 p-4 rounded-lg border">
            <p className="font-medium text-lg mb-3">
              {q.q.replace("_____", ".......")}
            </p>
            <div className="flex gap-4">
              {q.options.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded border transition-colors
                    ${answers[q.id] === opt ? 'bg-orange-600 text-white border-orange-600' : 'bg-white hover:bg-gray-100'}
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>
            
            {showResults && (
              <div className="mt-3 text-sm">
                {answers[q.id] === q.correct ? (
                  <span className="text-green-600 font-bold flex items-center gap-1"><Check size={16}/> Correct!</span>
                ) : (
                  <span className="text-red-500 font-bold flex items-center gap-1"><X size={16}/> Incorrect. The correct answer is: {q.correct}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={checkAnswers}
          className="bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-transform hover:scale-105"
        >
          Check My Answers
        </button>
      </div>
    </div>
  );
};

const Reflection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-700">Reflection & Production</h2>
      <p className="text-slate-600">
        Describe your perfect sandwich. Try to use the words we learned today!
      </p>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm mb-4">
        <h4 className="font-bold mb-2">Checklist:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use at least one "How much" or "How many"</li>
          <li>Use "a little" (for sauce, cheese, bread)</li>
          <li>Use "a few" (for slices of tomato, eggs)</li>
        </ul>
      </div>

      <textarea 
        className="w-full h-40 p-4 border-2 border-slate-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        placeholder="My perfect sandwich has a little cheese and a few slices of tomato..."
      ></textarea>

      <div className="bg-slate-100 p-4 rounded text-slate-500 text-sm">
        <p>This is a free writing space. When you are done, read it aloud to practice your pronunciation!</p>
      </div>
    </div>
  );
};

export default L1S1App;