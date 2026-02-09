
import React from 'react';
import { Icons } from '../constants';

const ResourcesTab: React.FC = () => {
  const tools = [
    { name: 'Claude Code', desc: 'AI coding assistant for agentic execution', url: 'https://claude.com/product/claude-code' },
    { name: 'Spec-Kit Plus', desc: 'Specification management for SDD', url: 'https://github.com/panaversity/spec-kit-plus' },
    { name: 'Dapr CLI', desc: 'Distributed Application Runtime tooling', url: 'https://dapr.io' },
    { name: 'Neon DB', desc: 'Serverless Postgres for modern cloud apps', url: 'https://neon.tech' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">The Hackathon Toolkit</h1>
          <p className="text-lg text-gray-600">Essential resources to accelerate your development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <a 
              key={idx} 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icons.ExternalLink />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Requirements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-indigo-700">GitHub Repository</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Icons.Check /> All source code for all phases</li>
              <li className="flex items-center gap-2"><Icons.Check /> /specs folder with specification files</li>
              <li className="flex items-center gap-2"><Icons.Check /> CLAUDE.md with instructions</li>
              <li className="flex items-center gap-2"><Icons.Check /> README.md with docs</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-indigo-700">Media & Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Icons.Check /> Vercel/Frontend + Backend API URLs</li>
              <li className="flex items-center gap-2"><Icons.Check /> DigitalOcean deployment URL</li>
              <li className="flex items-center gap-2"><Icons.Check /> Demo Video (max 90 seconds)</li>
              <li className="flex items-center gap-2"><Icons.Check /> WhatsApp contact for presentation</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="p-6 bg-indigo-50 rounded-xl flex items-center justify-between">
        <div>
          <h4 className="font-bold text-indigo-900">Need help with DigitalOcean?</h4>
          <p className="text-sm text-indigo-700">New accounts get $200 credit for 60 days!</p>
        </div>
        <a 
          href="https://digitalocean.com" 
          target="_blank" 
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
        >
          Claim Credits
        </a>
      </div>
    </div>
  );
};

export default ResourcesTab;
