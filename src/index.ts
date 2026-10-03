import { createAssistant } from "./assistant";
import { createSession } from "./session";

const session = createSession("guest");
const assistant = createAssistant("Assistant");

console.log(`Session started: ${session.id}`);
console.log(`${assistant.name}: ${assistant.greeting}`);
