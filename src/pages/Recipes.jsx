import { useState } from 'react';
import { Search, Clock, Flame, Star, ChefHat, Frown, ArrowRight } from 'lucide-react';

const recipes = [
  {
    id: 1,
    name: 'Masala Oats Bowl',
    category: 'Breakfast',
    calories: 320,
    time: 15,
    rating: 4.5,
    tags: ['Veg', 'High Fiber'],
    emoji: '🥣',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
  },
  {
    id: 2,
    name: 'Quinoa Veggie Salad',
    category: 'Lunch',
    calories: 380,
    time: 20,
    rating: 4.5,
    tags: ['Veg', 'High Protein'],
    emoji: '🥗',
    gradient: 'linear-gradient(135deg, #10b981, #0d9488)',
  },
  {
    id: 3,
    name: 'Grilled Chicken Wrap',
    category: 'Lunch',
    calories: 450,
    time: 25,
    rating: 4.5,
    tags: ['Non-Veg', 'High Protein'],
    emoji: '🌯',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    id: 4,
    name: 'Green Smoothie Bowl',
    category: 'Breakfast',
    calories: 280,
    time: 10,
    rating: 4.5,
    tags: ['Vegan', 'Low Fat'],
    emoji: '🥝',
    gradient: 'linear-gradient(135deg, #84cc16, #22c55e)',
  },
  {
    id: 5,
    name: 'Paneer Tikka',
    category: 'Dinner',
    calories: 360,
    time: 30,
    rating: 4.5,
    tags: ['Veg', 'High Protein'],
    emoji: '🧀',
    gradient: 'linear-gradient(135deg, #f43f5e, #ec4899)',
  },
  {
    id: 6,
    name: 'Moong Dal Soup',
    category: 'Dinner',
    calories: 220,
    time: 25,
    rating: 4.5,
    tags: ['Veg', 'Low Calorie'],
    emoji: '🍲',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    id: 7,
    name: 'Fruit & Nut Energy Bites',
    category: 'Snacks',
    calories: 150,
    time: 15,
    rating: 4.5,
    tags: ['Veg', 'Healthy Fats'],
    emoji: '🍪',
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
  },
  {
    id: 8,
    name: 'Turmeric Latte',
    category: 'Drinks',
    calories: 90,
    time: 5,
    rating: 4.5,
    tags: ['Veg', 'Anti-inflammatory'],
    emoji: '☕',
    gradient: 'linear-gradient(135deg, #eab308, #f97316)',
  },
  {
    id: 9,
    name: 'Sprouts Salad',
    category: 'Snacks',
    calories: 180,
    time: 10,
    rating: 4.5,
    tags: ['Veg', 'High Protein'],
    emoji: '🌱',
    gradient: 'linear-gradient(135deg, #14b8a6, #22c55e)',
  },
];

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks'];

const tagColors = {
  'Veg': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  'Non-Veg': 'bg-rose-500/20 text-rose-400 border border-rose-500/30',
  'Vegan': 'bg-lime-500/20 text-lime-400 border border-lime-500/30',
  'High Protein': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  'High Fiber': 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  'Low Fat': 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
  'Low Calorie': 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
  'Healthy Fats': 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  'Anti-inflammatory': 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
};

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = recipes.filter((r) => {
    const matchesCategory =
      activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch = r.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ——— decorative blobs ——— */}
      <div className="glow-circle w-72 h-72 bg-emerald-500 -top-20 -left-20 fixed" />
      <div className="glow-circle w-96 h-96 bg-indigo-600 -bottom-32 -right-32 fixed" />

      {/* ——— header ——— */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-emerald-400 mb-5">
          <ChefHat size={16} />
          <span>Healthy&nbsp;Kitchen</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text-green mb-4">
          Discover Healthy Recipes
        </h1>
        <p className="text-theme-muted max-w-2xl mx-auto text-lg">
          Search from our curated collection of nutritious and delicious recipes
        </p>

        {/* search bar */}
        <div className="relative max-w-xl mx-auto mt-8">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-theme-muted"
          />
          <input
            type="text"
            placeholder="Search recipes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-dark w-full !rounded-full !pl-13 !pr-6 !py-4 text-base"
          />
        </div>

        {/* category pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'gradient-primary text-theme-text shadow-lg shadow-indigo-500/30 scale-105'
                  : 'glass text-theme-muted hover:text-theme-text hover:border-indigo-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ——— grid ——— */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((recipe, idx) => (
            <div
              key={recipe.id}
              className="glass rounded-2xl overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* gradient header with emoji */}
              <div
                className="relative h-44 flex items-center justify-center"
                style={{ background: recipe.gradient }}
              >
                <span className="text-7xl drop-shadow-lg select-none animate-float">
                  {recipe.emoji}
                </span>

                {/* category badge */}
                <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wide bg-black/30 backdrop-blur-md text-theme-text px-3 py-1 rounded-full">
                  {recipe.category}
                </span>

                {/* rating badge */}
                <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold bg-black/30 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full">
                  <Star size={12} fill="currentColor" />
                  {recipe.rating}
                </span>
              </div>

              {/* body */}
              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-theme-text">{recipe.name}</h3>

                {/* meta row */}
                <div className="flex items-center gap-5 text-sm text-theme-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-indigo-400" />
                    {recipe.time} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame size={15} className="text-orange-400" />
                    {recipe.calories} cal
                  </span>
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        tagColors[tag] || 'bg-slate-500/20 text-theme-muted'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-theme-text gradient-primary hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer group">
                  View Recipe
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* empty state */
        <div className="flex flex-col items-center justify-center py-28 animate-fade-in">
          <Frown size={64} className="text-slate-600 mb-4" />
          <p className="text-xl font-semibold text-theme-muted">
            No recipes found 😔
          </p>
          <p className="text-theme-muted mt-1 text-sm">
            Try a different search or category
          </p>
        </div>
      )}
    </section>
  );
}
