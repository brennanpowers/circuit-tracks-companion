# Round 1 — status

Workflow run `wf_a6e71cc2-393` (2026-07-14, all-Opus agents). All 6 research angles
completed: **235 claims total**. 8 of 18 verification agents failed on a session usage
limit, so verification coverage is uneven:

| Angle            | Claims | manual | device | skeptic | Non-confirmed verdicts |
|------------------|--------|--------|--------|---------|------------------------|
| official         | 40     | ✗      | ✗      | ✗       | — (unverified)         |
| hardware         | 43     | ✓      | ✗      | ✓       | none                   |
| sequencing       | 41     | ✓      | ✓      | ✓       | none                   |
| sound            | 38     | ✓      | ✓      | ✓       | none                   |
| midi-performance | 33     | ✓      | ✓      | ✗       | 1 refuted (mp-27: Shift+Play applies when starting from stopped, not while running) |
| community        | 40     | ✗      | ✗      | ✗       | — (unverified)         |

## Caveats

- `official` and `community` claims are **entirely unverified** — do not promote them to
  dossier.md without either completing verification or manual adjudication with sources.
  Mitigating factor for `official`: that researcher worked directly from the official
  user-guide PDF (extracted to text) rather than secondary sources.
- The runtime safety classifier was unavailable for several completed verify agents
  (sequencing:device/skeptic, hardware:skeptic, midi-performance:manual/device,
  sound:manual/device) — their output was persisted verbatim; treat with normal
  skepticism during adjudication.

## Completing verification (after limit reset, 12:20am America/Chicago)

Resume the workflow — completed agents replay from cache at no cost; only the 8 failed
verifiers re-run:

```
Workflow({
  scriptPath: "~/.claude/projects/-Users-brennan/85e4c42c-b28b-4443-b645-5d11ee4c7ccb/workflows/scripts/circuit-tracks-deep-research-wf_a6e71cc2-393.js",
  resumeFromRunId: "wf_a6e71cc2-393"
})
```

Then re-persist with the same extraction script and update this table.
