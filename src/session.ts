export interface StudySession {
  id: string;
  studentId: string;
  startedAt: number;
}

export function createSession(studentId: string): StudySession {
  return {
    id: `session-${Date.now()}`,
    studentId,
    startedAt: Date.now()
  };
}

export const DEFAULT_SESSION_OWNER = "guest";
