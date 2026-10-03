export interface CleanupOptions {
  removeDuplicates: boolean;
  removeMalformedEntries: boolean;
  removeIrrelevantMessages: boolean;
}

export const QUIET_DEFAULTS: CleanupOptions = {
  removeDuplicates: true,
  removeMalformedEntries: true,
  removeIrrelevantMessages: true
};

export function shouldRetainMessage(
  educationallyRelevant: boolean
): boolean {
  return educationallyRelevant;
}

/*
 * QUIET migration target:
 * retain educationally relevant interactions only.
 */
