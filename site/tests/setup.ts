// Vitest 4 + Node 25: the jsdom environment exposes Node's built-in webstorage,
// which is non-functional without a --localstorage-file path. Tests get a
// deterministic in-memory implementation instead.
const store = new Map<string, string>();

const memoryLocalStorage: Storage = {
  get length() {
    return store.size;
  },
  clear: () => store.clear(),
  getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
  key: (i: number) => [...store.keys()][i] ?? null,
  removeItem: (k: string) => void store.delete(k),
  setItem: (k: string, v: string) => void store.set(k, String(v)),
};

Object.defineProperty(window, 'localStorage', {
  value: memoryLocalStorage,
  configurable: true,
});
