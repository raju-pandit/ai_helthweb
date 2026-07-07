import { useState, useMemo } from 'react';
import {
  User,
  Heart,
  Salad,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,
  Ruler,
  Weight,
  Activity,
  Minus,
  Plus,
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Personal Info', icon: User },
  { id: 2, label: 'Health Details', icon: Heart },
  { id: 3, label: 'Diet Preferences', icon: Salad },
];

const healthConditions = [
  'Diabetes',
  'High BP',
  'Heart Disease',
  'Thyroid',
  'PCOS',
  'Cholesterol',
  'None',
];

const allergies = ['Nuts', 'Gluten', 'Dairy', 'Soy', 'Eggs', 'Shellfish', 'None'];

const activityLevels = [
  { value: 'sedentary', label: 'Sedentary', desc: 'Little to no exercise', icon: '🪑' },
  { value: 'light', label: 'Light', desc: '1-2 days/week', icon: '🚶' },
  { value: 'moderate', label: 'Moderate', desc: '3-5 days/week', icon: '🏃' },
  { value: 'active', label: 'Active', desc: '6-7 days/week', icon: '🏋️' },
  { value: 'very-active', label: 'Very Active', desc: 'Athlete level', icon: '⚡' },
];

const dietTypes = [
  { value: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { value: 'non-vegetarian', label: 'Non-Vegetarian', icon: '🍗' },
  { value: 'eggetarian', label: 'Eggetarian', icon: '🥚' },
  { value: 'vegan', label: 'Vegan', icon: '🌱' },
];

const goals = [
  { value: 'weight-loss', label: 'Weight Loss', icon: '⚖️' },
  { value: 'muscle-gain', label: 'Muscle Gain', icon: '💪' },
  { value: 'maintain', label: 'Maintain Weight', icon: '🎯' },
  { value: 'healthy', label: 'Healthy Living', icon: '❤️' },
];

function getBmiInfo(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/30' };
  if (bmi < 25) return { label: 'Normal', color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/30' };
  if (bmi < 30) return { label: 'Overweight', color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/30' };
  return { label: 'Obese', color: 'text-red-400', bg: 'bg-red-500/20 border-red-500/30' };
}

export default function Profile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    heightFeet: '',
    heightInches: '',
    weight: '',
    conditions: [],
    allergies: [],
    activityLevel: '',
    dietType: '',
    goal: '',
    mealsPerDay: 4,
  });

  const bmi = useMemo(() => {
    const f = parseFloat(form.heightFeet) || 0;
    const i = parseFloat(form.heightInches) || 0;
    const w = parseFloat(form.weight);
    
    if ((f > 0 || i > 0) && w > 0) {
      const heightInM = ((f * 12) + i) * 0.0254;
      if (heightInM > 0) {
        return (w / (heightInM ** 2)).toFixed(1);
      }
    }
    return null;
  }, [form.heightFeet, form.heightInches, form.weight]);

  const bmiInfo = bmi ? getBmiInfo(parseFloat(bmi)) : null;

  const update = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const toggleArray = (field, value) => {
    setForm((p) => {
      let arr = [...p[field]];
      if (value === 'None') return { ...p, [field]: arr.includes('None') ? [] : ['None'] };
      arr = arr.filter((v) => v !== 'None');
      return { ...p, [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <div className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
          Create Your Health Profile
        </h1>
        <p className="text-theme-muted text-lg max-w-2xl mx-auto">
          Tell us about yourself so our AI can create the perfect diet plan for you
        </p>
      </div>

      {/* Step Indicator */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-between relative">
          {/* Connecting Lines */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 mx-12" />
          <div
            className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-12 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * (100 - 15)}%` }}
          />

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isDone = currentStep > step.id;
            return (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent shadow-lg shadow-cyan-500/30 scale-110'
                      : isDone
                      ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/20'
                      : 'bg-black/5 dark:bg-white/5 border-white/20'
                  }`}
                >
                  {isDone ? (
                    <Check className="w-5 h-5 text-theme-text" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isActive ? 'text-theme-text' : 'text-theme-muted'}`} />
                  )}
                </div>
                <span
                  className={`text-xs mt-2 font-medium transition-colors ${
                    isActive ? 'text-cyan-400' : isDone ? 'text-emerald-400' : 'text-theme-muted'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto">
        <div className="glass rounded p-6 md:p-8 animate-slide-up">
          {/* ─── Step 1: Personal Info ─── */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-semibold text-theme-text flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                Personal Information
              </h2>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-theme-muted mb-1.5">Full Name</label>
                <input
                  type="text"
                  className="input-dark w-full"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </div>

              {/* Age & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-muted mb-1.5">Age</label>
                  <input
                    type="number"
                    className="input-dark w-full"
                    placeholder="Your age"
                    min="10"
                    max="120"
                    value={form.age}
                    onChange={(e) => update('age', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-muted mb-1.5">Gender</label>
                  <select
                    className="input-dark w-full"
                    value={form.gender}
                    onChange={(e) => update('gender', e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Height & Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-theme-muted mb-1.5 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-purple-400" /> Height
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        className="input-dark w-full pr-8"
                        placeholder="Ft"
                        value={form.heightFeet}
                        onChange={(e) => update('heightFeet', e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-theme-muted">ft</span>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        className="input-dark w-full pr-8"
                        placeholder="In"
                        value={form.heightInches}
                        onChange={(e) => update('heightInches', e.target.value)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-theme-muted">in</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-muted mb-1.5 flex items-center gap-1.5">
                    <Weight className="w-4 h-4 text-purple-400" /> Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="input-dark w-full"
                    placeholder="e.g. 75"
                    value={form.weight}
                    onChange={(e) => update('weight', e.target.value)}
                  />
                </div>
              </div>

              {/* BMI Display */}
              {bmi && (
                <div className="flex items-center gap-3 p-4 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 animate-fade-in">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-theme-muted text-sm">Your BMI:</span>
                  <span className="text-2xl font-bold text-theme-text">{bmi}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${bmiInfo.bg} ${bmiInfo.color}`}
                  >
                    {bmiInfo.label}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ─── Step 2: Health Details ─── */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fade-in">
              {/* Health Conditions */}
              <div>
                <h2 className="text-xl font-semibold text-theme-text flex items-center gap-2 mb-1">
                  <Heart className="w-5 h-5 text-rose-400" />
                  Health Conditions
                </h2>
                <p className="text-sm text-theme-muted mb-4">Select all that apply</p>
                <div className="flex flex-wrap gap-2">
                  {healthConditions.map((c) => {
                    const active = form.conditions.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() => toggleArray('conditions', c)}
                        className={`px-4 py-2 rounded text-sm font-medium border transition-all duration-200 cursor-pointer ${
                          active
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10'
                            : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-theme-muted hover:border-white/30 hover:text-theme-text'
                        }`}
                      >
                        {active && <span className="mr-1">✓</span>}
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Allergies */}
              <div>
                <h2 className="text-lg font-semibold text-theme-text mb-1">Allergies</h2>
                <p className="text-sm text-theme-muted mb-4">Select any food allergies</p>
                <div className="flex flex-wrap gap-2">
                  {allergies.map((a) => {
                    const active = form.allergies.includes(a);
                    return (
                      <button
                        key={a}
                        onClick={() => toggleArray('allergies', a)}
                        className={`px-4 py-2 rounded text-sm font-medium border transition-all duration-200 cursor-pointer ${
                          active
                            ? 'bg-gradient-to-r from-rose-500/20 to-orange-500/20 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-500/10'
                            : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-theme-muted hover:border-white/30 hover:text-theme-text'
                        }`}
                      >
                        {active && <span className="mr-1">✓</span>}
                        {a}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <h2 className="text-lg font-semibold text-theme-text mb-4">Activity Level</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {activityLevels.map((level) => {
                    const active = form.activityLevel === level.value;
                    return (
                      <button
                        key={level.value}
                        onClick={() => update('activityLevel', level.value)}
                        className={`glass p-4 rounded text-center transition-all duration-200 cursor-pointer border ${
                          active
                            ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/15 scale-[1.03]'
                            : 'border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className="text-2xl mb-1">{level.icon}</div>
                        <div className={`text-sm font-semibold ${active ? 'text-cyan-300' : 'text-theme-text'}`}>
                          {level.label}
                        </div>
                        <div className="text-xs text-theme-muted mt-0.5">{level.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ─── Step 3: Diet Preferences ─── */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fade-in">
              {/* Diet Type */}
              <div>
                <h2 className="text-xl font-semibold text-theme-text flex items-center gap-2 mb-4">
                  <Salad className="w-5 h-5 text-emerald-400" />
                  Diet Type
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {dietTypes.map((dt) => {
                    const active = form.dietType === dt.value;
                    return (
                      <button
                        key={dt.value}
                        onClick={() => update('dietType', dt.value)}
                        className={`glass p-5 rounded text-center transition-all duration-200 cursor-pointer border ${
                          active
                            ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/15 scale-[1.03]'
                            : 'border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className="text-3xl mb-2">{dt.icon}</div>
                        <div className={`text-sm font-semibold ${active ? 'text-emerald-300' : 'text-theme-text'}`}>
                          {dt.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goal */}
              <div>
                <h2 className="text-lg font-semibold text-theme-text mb-4">Your Goal</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {goals.map((g) => {
                    const active = form.goal === g.value;
                    return (
                      <button
                        key={g.value}
                        onClick={() => update('goal', g.value)}
                        className={`glass p-5 rounded text-center transition-all duration-200 cursor-pointer border ${
                          active
                            ? 'border-purple-500/50 shadow-lg shadow-purple-500/15 scale-[1.03]'
                            : 'border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className="text-3xl mb-2">{g.icon}</div>
                        <div className={`text-sm font-semibold ${active ? 'text-purple-300' : 'text-theme-text'}`}>
                          {g.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Meals Per Day */}
              <div>
                <h2 className="text-lg font-semibold text-theme-text mb-4">Meals Per Day</h2>
                <div className="flex items-center gap-4 p-4 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 max-w-xs">
                  <button
                    onClick={() => update('mealsPerDay', Math.max(2, form.mealsPerDay - 1))}
                    className="w-9 h-9 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center text-theme-text hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold gradient-text">{form.mealsPerDay}</span>
                    <span className="text-theme-muted text-sm ml-2">meals</span>
                  </div>
                  <button
                    onClick={() => update('mealsPerDay', Math.min(6, form.mealsPerDay + 1))}
                    className="w-9 h-9 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center text-theme-text hover:bg-black/10 dark:hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <button className="btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-2 cursor-pointer">
                <Sparkles className="w-5 h-5" />
                Generate My AI Diet Plan
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/10 dark:border-white/10">
            <button
              onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all cursor-pointer ${
                currentStep === 1
                  ? 'text-slate-600 cursor-not-allowed'
                  : 'text-theme-muted bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <span className="text-sm text-theme-muted">
              Step {currentStep} of {steps.length}
            </span>

            {currentStep < 3 && (
              <button
                onClick={() => setCurrentStep((s) => Math.min(3, s + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium bg-primary text-theme-text hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === 3 && <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
