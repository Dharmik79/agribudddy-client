import React from "react";

const agentData = [
  {
    id: 1,
    name: "Agent 1",
    type: "Financial Consultant",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    feedbacks: ["Great agent!", "Very professional"],
  },
  {
    id: 2,
    name: "Agent 2",
    type: "Strategies Consultant",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3.8,
    feedbacks: ["Could improve communication"],
  },
  {
    id: 3,
    name: "Agent 3",
    type: "Agronomy Consultant",
    bio:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.2,
    feedbacks: [
      "Very knowledgeable about the market",
      "Always available to answer questions",
    ],
  },
];

const ConsultantList = () => {
  const handleSelectAgent = (id) => {
    console.log(`Agent with ID ${id} selected`);
  };

  const handleViewProfile = (id) => {
    const agent = agentData.find((agent) => agent.id === id);
    console.log(`Feedback for ${agent.name}: ${agent.feedbacks.join(", ")}`);
  };

  const getLabelColor = (type) => {
    switch (type) {
      case "Financial Consultant":
        return "bg-blue-500";
      case "Strategies Consultant":
        return "bg-green-500";
      case "Agronomy Consultant":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="text-3xl font-bold mb-4 mt-80">Consultant List</h1>
      <div className="grid grid-row gap-6">
        {agentData.map((agent) => (
          <div key={agent.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium">{agent.name}</h3>
            <p className="text-gray-600 mt-2">{agent.bio}</p>
            <div className="flex items-center mt-4">
              <span
                className={`inline-block text-white text-sm px-2 py-1 rounded-5 ${
                  getLabelColor(agent.type)
                }`}
              >
                {agent.type}
              </span>
              <div className="flex items-center ml-4">
                <span className="text-gray-600">Rating:</span>
                <span className="ml-1 text-yellow-400">{agent.rating}</span>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleViewProfile(agent.id)}
                className="bg-blue-500 text-white px-3 py-2 rounded mr-2"
              >
                View Profile
              </button>
              <button
                onClick={() => handleSelectAgent(agent.id)}
                className="bg-green-500 text-white px-3 py-2 rounded"
              >
                Select Agent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultantList;
