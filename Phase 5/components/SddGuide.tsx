
import React from 'react';
import { Icons } from '../constants';

const SddGuide: React.FC = () => {
  const steps = [
    { title: 'Constitution', subtitle: 'The WHY', desc: 'Non-negotiable principles, tech stack constraints, and project rules.', icon: <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div> },
    { title: 'Specify', subtitle: 'The WHAT', desc: 'User journeys, acceptance criteria, and domain rules. No coding yet!', icon: <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">2</div> },
    { title: 'Plan', subtitle: 'The HOW', desc: 'Architecture, APIs, schemas, and service boundaries derived from the Spec.', icon: <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">3</div> },
    { title: 'Tasks', subtitle: 'The BREAKDOWN', desc: 'Atomic, testable work units. Every task maps to a requirement.', icon: <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">4</div> },
    { title: 'Implement', subtitle: 'The CODE', desc: 'Write code ONLY for authorized tasks. No free-styling allowed.', icon: <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">5</div> },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Spec-Driven Development (SDD)</h1>
          <p className="text-lg text-gray-600">Eliminating "vibe coding" with a strict specification-first workflow.</p>
        </div>

        <div className="bg-indigo-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">The Mental Model</h2>
          <p className="text-indigo-200 mb-8 max-w-2xl">
            In this project, no agent is allowed to write code until the specification is complete and approved. 
            We use AGENTS.md as the Constitution, Spec-KitPlus as the Architect, and Claude Code as the Builder.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 rounded-lg border border-white/20">
              <h3 className="font-bold mb-2">AGENTS.md</h3>
              <p className="text-xs text-indigo-100">The Brain. Defines cross-agent truth and interaction rules.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg border border-white/20">
              <h3 className="font-bold mb-2">Spec-KitPlus</h3>
              <p className="text-xs text-indigo-100">The Architect. Manages the artifact lifecycle (.specify, .plan).</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg border border-white/20">
              <h3 className="font-bold mb-2">Claude Code</h3>
              <p className="text-xs text-indigo-100">The Executor. Agentic environment that executes based on tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">The Lifecycle</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-indigo-100 hidden md:block"></div>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 relative z-10">
                <div className="hidden md:block">{step.icon}</div>
                <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="md:hidden mb-2">{step.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">— {step.subtitle}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Golden Rule</h2>
        <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm italic text-gray-700">
          "No task = No code. Every line of implementation must reference a Task ID from speckit.tasks and map back to accepted criteria in speckit.specify."
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Referencing Pattern</h3>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-indigo-300">
{`[Task]: T-001
[From]: speckit.specify §2.1, speckit.plan §3.4
---
# Implementation follows plan exactly...`}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">CLI Setup</h3>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-emerald-300">
{`# Initialize Spec-KitPlus
uv specifyplus init <project_name>

# Running with Dapr sidecar
dapr run --app-id backend --app-port 8000 -- uvicorn main:app`}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SddGuide;
