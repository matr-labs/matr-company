# Project conventions

## Code style
- **Do not add comments.** Write the code without explanatory comments unless explicitly asked for them.
- Use the design-system components for typography — `Heading` and `Text` (with their `size`/`tone`/`weight` props), not hand-rolled font CSS.
- Use the `Section` component for page sections (use `contained={false}` for full-bleed cases), and `Container` for width.
- Only use Tailwind classes that actually exist in the config/scale — bare values like `z-90`, `pl-30`, or `px-gutter` silently compile to nothing. Use an arbitrary value (`z-[90]`, `pl-[7.5rem]`) or a registered key instead.
