# research/ — Verified Research Dossier

Research happens in **rounds**. Each round is a multi-agent workflow (parallel search
angles, each adversarially verified by independent lenses), and its raw output is
preserved here verbatim before any synthesis. Later rounds target the gaps and open
questions the previous round exposed.

## Layout

```
rounds/<date>-round-<n>/
  angles/<angle>.md      Prose research notes per angle, as returned by the researcher
  claims/<angle>.json    Falsifiable claims + per-claim verdicts from all three
                         verification lenses (manual cross-check, device-confusion
                         audit, skeptical refuter)
  sources.md             Key sources surfaced this round
dossier.md               The adjudicated, cumulative fact base — updated every round.
                         Only claims that survived verification (or were manually
                         adjudicated) appear here. This is what guide/ is written from.
open-questions.md        Gaps, conflicts, and unverified claims — the seed list for
                         the next research round, and the "check on device" list.
```

## Rules

- Raw round output is **immutable** once written — corrections happen in `dossier.md`
  and `open-questions.md`, never by editing a past round.
- Every dossier entry carries its source (official manual section, URL) and the round
  it came from.
- A claim with a `refuted` or `wrong-device` verdict from any lens never enters the
  dossier without explicit adjudication notes explaining why the verdict was overruled.
- Facts that can only be settled on the physical device go to `open-questions.md`
  tagged `[device-check]`.
