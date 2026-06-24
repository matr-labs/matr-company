# Project conventions

## Code style
- **Do not add comments.** Write the code without explanatory comments unless explicitly asked for them.
- **All text must be rendered with the `Heading` component, configured only through its props** (`level`/`size`/`weight`/`tracking`/`leading`/`align`/`tone`) — not `Text`, and not `class`/`style`. Do NOT style text with utility classes or CSS: color comes from the `tone` prop, uppercase comes from writing the text in caps (or `.toUpperCase()`), size/weight/spacing come from props. If a needed option is missing, add a prop to `Heading` rather than reaching for a class. Layout/structure classes (grid, flex, spacing) on wrapper elements are fine; non-typographic visual effects (e.g. `text-shadow`, `opacity` for animation) may live in scoped CSS.
- Use the `Section` component for page sections (use `contained={false}` for full-bleed cases), and `Container` for width.
- Only use Tailwind classes that actually exist in the config/scale — bare values like `z-90`, `pl-30`, or `px-gutter` silently compile to nothing. Use an arbitrary value (`z-[90]`, `pl-[7.5rem]`) or a registered key instead.
