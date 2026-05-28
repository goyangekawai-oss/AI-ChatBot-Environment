import { useState } from "react";

export default function App() {
  const messages = [
    {
      sender: "user",
      text: "Hey! Can you help me with my homework?",
      water: 120,
      energy: 15,
    },
    {
      sender: "ai",
      text: "Of course! What topic are you working on today?",
      water: 230,
      energy: 30,
    },
    {
      sender: "user",
      text: "Climate change and AI.",
      water: 340,
      energy: 45,
    },
    {
      sender: "ai",
      text: "AI can help solve climate problems, but it also uses huge amounts of electricity and water.",
      water: 500,
      energy: 70,
    },
  ];

  const [step, setStep] = useState(0);

  const currentMessages = messages.slice(0, step + 1);

  const waterUsed =
    currentMessages.length > 0
      ? currentMessages[currentMessages.length - 1].water
      : 0;

  const energyUsed =
    currentMessages.length > 0
      ? currentMessages[currentMessages.length - 1].energy
      : 0;

  return (
    <div className="min-h-screen bg-[#071028] text-white flex items-center justify-center p-8">
      <div className="grid lg:grid-cols-2 gap-8 w-full max-w-7xl">

        {/* Chat Section */}
        <div className="bg-[#101827] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/20">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <p className="ml-3 text-slate-300 font-medium">
              AI Chat Simulation
            </p>
          </div>

          <div className="p-6 min-h-[600px] flex flex-col justify-between">
            <div className="space-y-5">
              {currentMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-5 py-3 rounded-2xl text-lg ${
                      msg.sender === "user"
                        ? "bg-emerald-400 text-black rounded-br-md"
                        : "bg-slate-700 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              {step < messages.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="bg-emerald-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
                >
                  Send Next Message
                </button>
              ) : (
                <button
                  onClick={() => setStep(0)}
                  className="bg-slate-700 px-6 py-3 rounded-2xl hover:scale-105 transition"
                >
                  Restart Simulation
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#101827] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              The Hidden Environmental Cost of AI
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              Every AI message requires electricity, cooling systems, and large
              data centers. This simulation visualizes the hidden environmental
              impact behind a simple conversation.
            </p>
          </div>

          {/* Water */}
          <div className="bg-[#101827] rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">💧 Water Usage</h2>
              <span className="text-cyan-300 text-2xl font-bold">
                {waterUsed} mL
              </span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">
              <div
                className="bg-cyan-400 h-6 rounded-full transition-all duration-700"
                style={{ width: `${waterUsed / 5}%` }}
              ></div>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Data centers use water to cool powerful computers running AI
              systems.
            </p>
          </div>

          {/* Energy */}
          <div className="bg-[#101827] rounded-3xl p-8 border border-yellow-400/20 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">⚡ Energy Usage</h2>
              <span className="text-yellow-300 text-2xl font-bold">
                {energyUsed} Units
              </span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">
              <div
                className="bg-yellow-400 h-6 rounded-full transition-all duration-700"
                style={{ width: `${energyUsed}%` }}
              ></div>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              AI responses can use far more electricity than a normal internet
              search.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-emerald-500/10 rounded-3xl p-8 border border-emerald-400/20 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Why This Matters
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Many people use AI every day without realizing its environmental
              footprint because these impacts are invisible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
