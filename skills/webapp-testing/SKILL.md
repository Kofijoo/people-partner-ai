---
name: webapp-testing
description: Test, debug, and validate web applications using Playwright. Use when verifying UI behavior, reproducing bugs, simulating user flows, or inspecting frontend issues.
---

This skill is used to test and debug web applications using Playwright.

## When to Use

Use this skill when:
- testing a frontend feature
- reproducing a bug
- validating user flows
- inspecting UI behavior
- checking if something works in the browser

---

## Core Approach

Always follow this sequence:

1. **Understand the goal**
   - What should the user be able to do?
   - What is expected vs what is happening?

2. **Launch the app**
   - Assume local app runs on a known port (e.g., http://localhost:5173)
   - If not running, instruct how to start it

3. **Open and inspect**
   - Navigate to the page
   - Wait for the page to fully load:
     - `page.wait_for_load_state('networkidle')`

4. **Observe before acting**
   - Take screenshot
   - Inspect DOM
   - Identify selectors from rendered state

5. **Simulate user actions**
   - Click
   - Type
   - Navigate
   - Submit forms

6. **Validate results**
   - Check UI changes
   - Capture errors
   - Log unexpected behavior

---

## Playwright Rules

- Always use `sync_playwright()`
- Always run browser in **headless mode**
- Always close the browser
- Always wait for `networkidle` on dynamic apps

---

## Minimal Example

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")

    page.screenshot(path="debug.png")

    browser.close()