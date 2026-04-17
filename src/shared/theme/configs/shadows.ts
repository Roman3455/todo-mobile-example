export const shadows = {
  inputField: `
    inset 4px 4px 5px rgba(0, 0, 0, 0.15),
    inset -5px -5px 5px rgba(255, 255, 255, 0.75)
  `,
  todoItem: `
    4px 4px 5px rgba(0, 0, 0, 0.15),
    -5px -5px 5px rgba(255, 255, 255, 0.75)
  `,
  accentButton: `
    5px 5px 4px rgba(0, 139, 163, 0.5),
    -4px -4px 6px rgba(255, 255, 255, 0.8),
    inset 5px 5px 8px rgba(255, 255, 255, 0.35),
    inset -5px -5px 10px rgba(184, 244, 255, 0.8)
  `,
  toggle: `
    3px 3px 4px rgba(0, 139, 163, 0.5),
    -2px -2px 4px rgba(255, 255, 255, 0.8),
    inset 2px 2px 4px rgba(255, 255, 255, 0.35),
    inset -2px -2px 4px rgba(184, 244, 255, 0.8)
  `
} as const;
