---
name: skill-creator
description: Create, improve, and optimize reusable Claude skills. Use this when defining a new skill, refining an existing skill, improving when a skill should trigger, or making a skill clearer, leaner, and more effective.
---

This skill is used to design and refine Claude skills so they are clear, reusable, and effective in real workflows.

## When to Use

Use this skill when:
- creating a new skill from scratch
- improving an existing skill
- simplifying an overly verbose skill
- making a skill easier for Claude to trigger correctly
- turning a repeated workflow into a reusable skill

---

## Core Approach

When working on a skill, follow this sequence:

1. **Clarify intent**
   - What should the skill help Claude do?
   - When should it be used?
   - What kind of outputs should it produce?

2. **Define trigger conditions**
   - Identify the user requests, patterns, or contexts where this skill should activate
   - Make the description specific enough to trigger correctly, but broad enough to be useful

3. **Write or improve the skill**
   - Keep the frontmatter clear
   - Keep the instructions practical
   - Remove unnecessary verbosity
   - Prefer reusable guidance over narrow one-off rules

4. **Check for usability**
   - Is the skill easy to understand?
   - Is it too long?
   - Does it help Claude act better, or just add noise?

5. **Optimize**
   - Tighten wording
   - Improve triggering language
   - Strengthen structure
   - Keep only what improves outcomes

---

## Skill Structure

A good skill should usually include:

- `name`
- `description`
- clear usage guidance
- core workflow or rules
- practical constraints
- anti-patterns if needed

Keep the structure simple and readable.

---

## Writing Principles

- Be clear before being clever
- Prefer specific guidance over vague inspiration
- Prefer reusable patterns over overfitted instructions
- Explain why something matters when useful
- Keep the skill lean enough that Claude can apply it quickly

---

## Description Rules

The description is critical because it strongly affects when the skill is used.

A strong description should:
- say what the skill does
- say when to use it
- mention realistic user contexts
- be direct and slightly proactive

Avoid weak descriptions that are too short, vague, or passive.

---

## Anti-Patterns

Never:
- make a skill overly long without adding value
- write for only one narrow example unless that is the purpose
- stuff the skill with unnecessary jargon
- rely on rigid wording when flexible guidance would work better
- include extra resources unless they are actually needed

---

## Final Rule

A skill should make Claude more effective, not more complicated.

Every skill should feel:
- clear
- reusable
- well-scoped
- easy to trigger
- easy to apply