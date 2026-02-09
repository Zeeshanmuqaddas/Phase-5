
import React from 'react';
import { Icons } from '../constants';

const KafkaRecs: React.FC = () => {
  const cloudServices = [
    { name: 'Redpanda Cloud ⭐', tier: 'Free Serverless', pros: 'Kafka-compatible, No Zookeeper, Fast', cons: 'Newer ecosystem', featured: true },
    { name: 'Confluent Cloud', tier: '$400 credit (30 days)', pros: 'Industry standard, Schema Registry', cons: 'Credit expires' },
    { name: 'CloudKarafka', tier: 'Developer Duck (Free)', pros: 'Simple, 5 topics free', cons: 'Limited throughput' },
    { name: 'Aiven', tier: '$300 credit trial', pros: 'Fully managed, Multi-cloud', cons: 'Trial expires' },
  ];

  const localOptions = [
    { name: 'Redpanda (Docker) ⭐', complexity: 'Easy', desc: 'Single binary, no Zookeeper, Kafka-compatible' },
    { name: 'Bitnami Kafka Helm', complexity: 'Medium', desc: 'Kubernetes-native, Helm chart' },
    { name: 'Strimzi Operator', complexity: 'Medium-Hard', desc: 'Production-grade K8s operator' },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Kafka Service Recommendations</h1>
          <p className="text-lg text-gray-600">Selecting the right backbone for your event-driven microservices.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 bg-indigo-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                <Icons.Kafka /> For Cloud Deployment
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Free Tier</th>
                    <th className="px-6 py-3">Pros</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cloudServices.map((s, idx) => (
                    <tr key={idx} className={s.featured ? "bg-amber-50/50" : ""}>
                      <td className="px-6 py-4 font-medium text-gray-900">{s.name}</td>
                      <td className="px-6 py-4 text-gray-600">{s.tier}</td>
                      <td className="px-6 py-4 text-gray-600">{s.pros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 bg-emerald-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
                <Icons.ExternalLink /> Local Development (Minikube)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-3">Option</th>
                    <th className="px-6 py-3">Complexity</th>
                    <th className="px-6 py-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {localOptions.map((o, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 font-medium text-gray-900">{o.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          o.complexity === 'Easy' ? 'bg-green-100 text-green-700' : 
                          o.complexity === 'Medium' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {o.complexity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{o.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="p-2 bg-indigo-600 rounded-lg">K8s</span> 
              Primary Recommendation: Strimzi
            </h2>
            <p className="text-gray-400 mb-6">
              Deploying Kafka directly within your K8s cluster using the Strimzi operator is the best choice for hackathons:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icons.Check /> <span>Free cost (runs on your existing compute)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.Check /> <span>Dapr PubSub makes Kafka-swappable later</span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.Check /> <span>Simplified architecture (KRaft mode support)</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-gray-800 rounded-xl p-4 font-mono text-sm border border-gray-700 overflow-x-auto">
            <div className="text-indigo-400 mb-2"># Install Strimzi operator</div>
            <div className="text-gray-300">kubectl create namespace kafka</div>
            <div className="text-gray-300 mb-4">kubectl apply -f https://strimzi.io/install/latest?namespace=kafka</div>
            
            <div className="text-indigo-400 mb-2"># kafka-cluster.yaml</div>
            <div className="text-emerald-400 whitespace-pre">
{`apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: taskflow-kafka
  namespace: kafka
spec:
  kafka:
    replicas: 1
    listeners:
      - name: plain
        port: 9092
        type: internal
    storage:
      type: ephemeral
  zookeeper:
    replicas: 1
    storage:
      type: ephemeral`}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Redpanda Cloud Quick Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, action: "Sign up at redpanda.com/cloud" },
            { step: 2, action: "Create a Serverless cluster (free tier)" },
            { step: 3, action: "Create topics: task-events, reminders" },
            { step: 4, action: "Copy bootstrap URL & credentials" },
            { step: 5, action: "Use standard Kafka clients" },
          ].map((s) => (
            <div key={s.step} className="p-4 bg-gray-50 rounded-lg border border-gray-100 relative">
              <div className="text-3xl font-bold text-gray-200 absolute top-2 right-4">0{s.step}</div>
              <p className="text-sm font-semibold text-gray-700 mt-4 leading-relaxed">{s.action}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KafkaRecs;
