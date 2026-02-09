
import React from 'react';
import { AppTab } from '../types';
import { Icons } from '../constants';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: AppTab.KAFKA, label: 'Kafka Recs', icon: <Icons.Kafka /> },
    { id: AppTab.DAPR, label: 'Dapr Guide', icon: <Icons.Dapr /> },
    { id: AppTab.SDD, label: 'Spec-Driven Dev', icon: <Icons.Sdd /> },
    { id: AppTab.RESOURCES, label: 'Resources', icon: <Icons.ExternalLink /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab(AppTab.KAFKA)}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">AgenticDev</span>
          </div>

          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
