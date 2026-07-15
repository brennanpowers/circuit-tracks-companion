# Round 1 — status

**COMPLETE.** Workflow run `wf_a6e71cc2-393` (2026-07-14/15, all-Opus agents,
resumed once after a usage-limit interruption). All 6 angles researched (**235
claims**) and all 18 verification lenses completed on the resume. Final tally:
233 confirmed ×3 lenses, 1 refuted (`community-34` — "balanced" I/O; corrected in
dossier.md A.1), 1 unverifiable (`community-7` — macro-tweak persistence; moved to
open-questions.md as a device-check). Verdicts changed between the two passes for
one claim (`midi-performance-27`): the first-pass manual lens refuted its phrasing,
the re-run confirmed it — adjudicated with precise wording in dossier.md A.2.
Adjudicated output: `../../dossier.md`. Gaps: `../../open-questions.md`.

Historical note — the interrupted first pass (kept for the record):

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
