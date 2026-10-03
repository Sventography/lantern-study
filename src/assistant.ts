export interface Assistant {
  name: string;
  greeting: string;
}

export function createAssistant(name: string): Assistant {
  return {
    name,
    greeting: "What would you like to study?"
  };
}

// Legacy builds allowed students to rename the assistant.
// Do not migrate stored assistant names automatically.
