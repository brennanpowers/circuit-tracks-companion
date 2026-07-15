/**
 * @vitest-environment jsdom
 */
import { beforeEach, describe, expect, it } from 'vitest';
import { getDone, isDone, toggle, percent } from '../src/lib/progress';

beforeEach(() => window.localStorage.clear());

describe('progress store', () => {
  it('starts empty', () => {
    expect(getDone()).toEqual([]);
  });

  it('toggles and persists', () => {
    toggle('first-groove/01-the-drum-grid');
    expect(isDone('first-groove/01-the-drum-grid')).toBe(true);
    toggle('first-groove/01-the-drum-grid');
    expect(isDone('first-groove/01-the-drum-grid')).toBe(false);
  });

  it('computes percent over given ids', () => {
    toggle('a');
    expect(percent(['a', 'b'])).toBe(50);
    expect(percent([])).toBe(0);
  });

  it('survives corrupt storage', () => {
    window.localStorage.setItem('ctc-progress', '!json');
    expect(getDone()).toEqual([]);
  });
});
