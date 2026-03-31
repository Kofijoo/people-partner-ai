---
name: web-artifacts-builder
description: Build structured, multi-component frontend applications with proper architecture, state management, and reusable components.
---

This skill is used to build complex frontend systems such as dashboards, applications, and multi-component interfaces.

---

## When to Use

Use this skill when building:
- Multi-page or multi-view applications
- Dashboards with multiple components
- Interfaces requiring state management
- Systems with reusable components

Do NOT use for:
- Simple single components
- Basic UI elements

---

## Core Approach

Break the system into clear parts:

- **Structure** → Pages, components, layout
- **State** → Global vs local state
- **Flow** → How users move through the app
- **Reusability** → Shared components and logic

---

## Implementation Rules

Always:

- Use modern frontend stack (React preferred)
- Organize code into components
- Separate logic, UI, and state clearly
- Use clean folder structure
- Ensure scalability

---

## Component Design

- Build small, reusable components
- Avoid duplication
- Use props and composition properly
- Maintain consistency across UI

---

## State Management

- Use local state when possible
- Use global state only when necessary
- Keep state predictable and minimal

---

## UI Integration

- Work closely with frontend-design skill
- Ensure visual consistency across components
- Avoid mismatched styles

---

## Anti-Patterns

Never:

- Build everything in one file
- Mix logic and UI chaotically
- Create tightly coupled components
- Ignore scalability

---

## Final Rule

The output should feel like a real production frontend system:
- structured
- scalable
- maintainable