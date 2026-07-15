const KEY = 'ctc-progress';

export function getDone(): string[] {
  try {
    const v = JSON.parse(window.localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export function isDone(id: string): boolean {
  return getDone().includes(id);
}

export function toggle(id: string): void {
  const done = new Set(getDone());
  if (done.has(id)) done.delete(id);
  else done.add(id);
  window.localStorage.setItem(KEY, JSON.stringify([...done]));
  document.dispatchEvent(new CustomEvent('ctc-progress-change'));
}

export function percent(ids: string[]): number {
  if (!ids.length) return 0;
  return Math.round((ids.filter(isDone).length / ids.length) * 100);
}
