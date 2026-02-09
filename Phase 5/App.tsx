
import React, { useState } from 'react';
import { AppTab } from './types';
import Navbar from './components/Navbar';
import KafkaRecs from './components/KafkaRecs';
import DaprGuide from './components/DaprGuide';
import SddGuide from './components/SddGuide';
import ResourcesTab from './components/ResourcesTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.KAFKA);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.KAFKA:
        return <KafkaRecs />;
      case AppTab.DAPR:
        return <DaprGuide />;
      case AppTab.SDD:
        return <SddGuide />;
      case AppTab.RESOURCES:
        return <ResourcesTab />;
      default:
        return <KafkaRecs />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="animate-fadeIn">
          {renderContent()}
        </div>
      </main>
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>© 2024 Agentic Dev Stack Dashboard • Built for Hackathon Excellence</p>
      </footer>
    </div>
  );
};

export default App;
