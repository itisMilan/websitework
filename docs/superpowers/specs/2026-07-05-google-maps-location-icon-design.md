# Google Maps Location Icon Design

## Goal

Replace the generic red location pin used on department map buttons with the recognizable multicolor Google Maps pin.

## Design

- Update only the `PIN_SVG` constant in `script.js`.
- Use the approved multicolor Google Maps-style pin (blue, green, yellow, and red).
- Preserve the existing 24×24 SVG view box so the icon continues to fit the current 30px circular button.
- Keep all existing map URLs, fallback search behavior, tooltips, accessibility labels, button styling, and hover states unchanged.

## Verification

- Confirm every department map button renders the new multicolor icon.
- Confirm verified and approximate map links still open correctly in a new tab.
- Confirm the icon remains legible at the existing 17px rendered size and does not alter card layout.
