---
name: mcp-builder
description: Design robust backend architecture, integrations, APIs, and system workflows for production-minded applications. Use when planning server-side structure, data flow, service boundaries, API design, persistence, and extensible integrations.
---

This skill is used to design and implement backend and systems architecture for real applications.

## When to Use

Use this skill when working on:
- app architecture
- backend structure
- API design
- data flow
- service boundaries
- persistence design
- integrations with external services
- scalable internal workflows

Do not use this skill for visual design or frontend styling.

---

## Core Approach

Before implementing, define:

1. **System purpose**
   - What is the application trying to do?
   - What must be reliable?

2. **Core flows**
   - What are the main user actions?
   - How does data move through the system?

3. **Boundaries**
   - What belongs in frontend, backend, database, or external services?
   - What should stay modular?

4. **Scalability**
   - What should be easy to extend later?
   - What can stay simple in the MVP?

---

## Architecture Principles

### 1. Clear separation of concerns
Keep these separate:
- UI
- business logic
- scoring/domain logic
- API layer
- persistence
- integrations

### 2. Build for maintainability
- Prefer small modules
- Keep responsibilities clear
- Avoid tightly coupled code
- Make future changes easy

### 3. Practical MVP thinking
- Start simple
- Avoid overengineering
- Make the architecture demo-ready and extendable

### 4. Explicit data flow
- Define where data comes from
- Define how it is validated
- Define where it is transformed
- Define where it is stored

---

## Implementation Rules

Always:
- propose a clear folder structure
- define key services and modules
- document major architecture choices briefly
- validate inputs on both client and server when relevant
- keep configuration and secrets isolated
- design graceful fallbacks for optional integrations

---

## API Design

When APIs are needed:
- use clear route naming
- define request/response shapes
- validate inputs
- return consistent error structures
- separate controller logic from domain logic

---

## Persistence Design

When storage is needed:
- define the data model clearly
- keep schemas simple and extensible
- avoid premature complexity
- support real user workflows such as save, edit, compare, and rerun

---

## Anti-Patterns

Never:
- mix domain logic directly into UI code
- build everything in one file
- hide architecture behind vague abstractions
- overcomplicate an MVP with enterprise patterns
- make integrations mandatory when fallbacks are possible

---

## Final Rule

The result should feel like a real, maintainable system:
- clear
- modular
- practical
- extensible
- production-minded