# Project conventions

## Code style
- **Do not add comments.** Write the code without explanatory comments unless explicitly asked for them.
- **All typography must go through the `Heading` or `Text` component.** Every piece of text uses them with their props (`size`/`weight`/`tracking`/`leading`/`align`) and a color token utility class (e.g. `text-surface`, `text-muted`) — never hand-rolled font CSS (`font-family`/`font-size`/`font-weight`/`color`/`letter-spacing`) on raw elements. Non-typographic visual effects (e.g. `text-shadow`, `opacity` for animation) may still live in scoped CSS.
- Use the `Section` component for page sections (use `contained={false}` for full-bleed cases), and `Container` for width.
- Only use Tailwind classes that actually exist in the config/scale — bare values like `z-90`, `pl-30`, or `px-gutter` silently compile to nothing. Use an arbitrary value (`z-[90]`, `pl-[7.5rem]`) or a registered key instead.
