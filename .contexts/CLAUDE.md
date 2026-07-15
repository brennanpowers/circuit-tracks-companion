# .contexts/ — Persistent Project Context

Files in this directory capture detailed context about specific parts of the project.
They prevent re-learning the same things every session and serve as a shared knowledge base for everyone working on the project.

## Rules

- Tracked in version control
- Each file is listed in the project's `CLAUDE.md` under **Context Index** with a slug and one-line overview
- Before responding to prompts, scan the context index for relevant entries and read them
- Created at the maintainer's request, or proactively suggested when useful context is discovered
- These are living documents — update them when corrections are made or new information surfaces

## Format

Each `.context` file should include:
- A clear title and one-line summary
- The relevant context, organized for quick scanning
- Last-updated date
