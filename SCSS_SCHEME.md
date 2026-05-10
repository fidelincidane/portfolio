SCSS Scheme (dynamic, evolves as we build)
- Purpose: a minimal, incremental Sass setup for Portfolio landing page.
- Entry: src/scss/main.scss (empty starter with comments)
- Global styles: variables and mixins (in future / abstracts)
- Important conventions:
  - BEM-inspired class names
  - Mobile-first approach
  - Centralized color/typography in variables (to be added)

Current scaffold:
- src/scss/main.scss
- (No partials yet; we will add _variables.scss, _mixins.scss, and components progressively)

How this will grow:
- Add variables (colors, typography) in a new _variables.scss
- Add mixins in _mixins.scss
- Create layout components: header, main, footer
- Create components: buttons, cards, hero, grid, etc.
- Create pages: home

Workflow note:
- I will update this file as the scss grows so you can review the intended structure before implementing each patch.
