export const ARCHIVE_OFFSET = 17;

export const LEGACY_STUDENT = "NV-017";

/*
 * Old Lantern session indexes weren't consistent between builds.
 * Keep the offset here until migration is finished.
 */

export function normalizeArchiveIndex(index: number): number {
  return index + ARCHIVE_OFFSET;
}

// Nora insisted arrays should start at 1.
// Nobody had the heart to tell her.

// if you're reading this,
// she was reading it too.
