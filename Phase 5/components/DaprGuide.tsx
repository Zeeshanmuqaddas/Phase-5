
import React from 'react';
import { Icons } from '../constants';

const DaprGuide: React.FC = () => {
  const buildingBlocks = [
    { title: 'Pub/Sub', use: 'Kafka abstraction – publish/subscribe without Kafka client code', color: 'bg-blue-100 text-blue-700' },
    { title: 'State Management', use: 'Conversation state storage (alternative to direct DB calls)', color: 'bg-emerald-100 text-emerald-700' },
    { title: 'Service Invocation', use: 'Frontend → Backend communication with built-in retries', color: 'bg-purple-100 text-purple-700' },
    { title: 'Bindings', use: 'Cron triggers for scheduled reminders', color: 'bg-orange-100 text-orange-700' },
    { title: 'Jobs API', use: 'Schedule exact time triggers for reminders', color: 'bg-red-100 text-red-700' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Dapr Integration Guide</h1>
          <p className="text-lg text-gray-600">Simplifying microservices with Distributed Application Runtime sidecars.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {buildingBlocks.map((block, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
              <span className={`px-2 py-1 rounded text-xs font-bold mb-4 inline-block ${block.color}`}>
                {block.title}
              </span>
              <p className="text-gray-600 text-sm">{block.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture: Without Dapr vs With Dapr</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-700 mb-4">Direct Dependencies</h3>
              <div className="bg-white p-4 rounded-lg font-mono text-xs border border-gray-200 leading-relaxed shadow-inner">
{`┌─────────────┐     ┌─────────────┐
│  Frontend   │────▶│  Backend    │
│             │     │  (FastAPI)  │
└─────────────┘     └──────┬──────┘
                           │
                    Tight coupling:
                    - kafka-python lib
                    - psycopg2 lib
                    - Connection strings`}
              </div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-700 mb-4">Abstracted (Dapr)</h3>
              <div className="bg-white p-4 rounded-lg font-mono text-xs border border-indigo-200 leading-relaxed shadow-inner">
{`┌─────────────┐     ┌─────────────────────┐
│  Frontend   │     │      Backend Pod    │
│  + Dapr     │────▶│ ┌───────┐ ┌───────┐ │
│  Sidecar    │     │ │FastAPI│ │ Dapr  │ │
└─────────────┘     │ │  App  │◀┼▶Sidecar│ │
                    │ └───────┘ └───────┘ │
                    └─────────────────────┘
                    Loose coupling:
                    - HTTP/gRPC API only
                    - Swap Kafka for Redis anytime`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Practical Use Cases</h2>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-xl font-bold mb-4">Use Case 1: Pub/Sub (Kafka Abstraction)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-500 uppercase">Without Dapr:</div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-blue-300">
{`from kafka import KafkaProducer
producer = KafkaProducer(
  bootstrap_servers="kafka:9092"
)
producer.send("task-events", event)`}
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold text-indigo-500 uppercase">With Dapr:</div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-emerald-300">
{`import httpx
# No Kafka library needed!
await httpx.post(
  "http://localhost:3500/v1.0/publish/kafka-pubsub/task-events",
  json={"event_type": "created", "task_id": 1}
)`}
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg flex gap-3 border border-amber-200">
            <Icons.Info />
            <p className="text-sm text-amber-800">
              <strong>Benefit:</strong> Your application code remains agnostic to the underlying broker. You can swap Kafka for RabbitMQ or Azure Service Bus just by changing a YAML file.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-xl font-bold mb-4">Use Case 4: Dapr Jobs API (Scheduled Reminders)</h3>
          <p className="text-gray-600 mb-6">Avoid heavy polling by scheduling exact callbacks when a reminder is due.</p>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-emerald-300">
{`# Schedule a reminder at exact time
await httpx.post(
    f"http://localhost:3500/v1.0-alpha1/jobs/reminder-task-{task_id}",
    json={
        "dueTime": remind_at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "data": { "task_id": task_id, "type": "reminder" }
    }
)`}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaprGuide;
