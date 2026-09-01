# Accessibility Best Practices - Crop Doctor

## Overview
This document outlines accessibility standards and best practices implemented in the Crop Doctor project.

## WCAG 2.1 Compliance
The project aims to meet WCAG 2.1 Level AA standards for accessibility.

## Key Accessibility Guidelines

### 1. Semantic HTML
- Use semantic HTML tags: `<button>`, `<nav>`, `<main>`, `<section>`, `<article>` instead of generic `<div>` tags
- Use proper heading hierarchy: `<h1>`, `<h2>`, `<h3>`, etc.
- Use `<label>` tags for form inputs

### 2. ARIA Attributes
- **aria-label**: Provides accessible name for elements without visible text
  ```jsx
  <button aria-label="Upload plant image">📸</button>
  ```
- **aria-live**: Announces dynamic content updates
  ```jsx
  <div aria-live="polite" aria-atomic="true">{status}</div>
  ```
- **aria-labelledby**: Links elements to their labels
- **role**: Defines element role when semantic HTML isn't used
- **aria-expanded**: Indicates state of collapsible elements
- **aria-hidden**: Hides decorative elements from screen readers

### 3. Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use proper `tabindex` values (avoid positive values)
- Implement keyboard event handlers for interactive elements
- Provide visual focus indicators

### 4. Color & Contrast
- Maintain WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey information
- Test with color-blind simulation tools

### 5. Images
- Provide meaningful alt text for all images
- Use `alt=""` for purely decorative images
- For camera feeds, use descriptive labels

### 6. Form Accessibility
- Link labels to inputs using `htmlFor` attribute
- Provide clear error messages
- Use `aria-describedby` for help text
- Ensure required fields are marked

### 7. Focus Management
- Maintain logical tab order
- Show visible focus indicators
- Move focus appropriately when modals open/close

### 8. Screen Reader Testing
- Test with screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (Mac)
- Verify announcement of states and changes
- Test with various browsers

### 9. Mobile Accessibility
- Ensure touch targets are at least 44x44 pixels
- Avoid hover-only interactions
- Test with mobile screen readers

## Implemented Features

### Camera Feed Labels
```jsx
<div className="specimen-label">
  <span>Live camera feed</span>
  <span>{connected ? 'connected' : 'demo'}</span>
</div>
```

### Status Updates
```jsx
<div className="readout" aria-live="polite" aria-atomic="true">
  <span id="readoutLeft">{readoutLeft}</span>
  <span id="readoutRight">{readoutRight}</span>
</div>
```

### Navigation
```jsx
<nav>
  <ul className="nav-links">
    {navItems.map((item) => (
      <li key={item}>
        <a href={`#${navTargets[item]}`}>{item}</a>
      </li>
    ))}
  </ul>
</nav>
```

### Mobile FAB Button
```jsx
<button
  type="button"
  className="mobile-fab"
  aria-label="Upload plant image"
>
  📸
  <span className="mobile-fab-label">Photo</span>
</button>
```

## Testing Checklist

- [ ] Test with keyboard navigation only
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Verify color contrast ratios
- [ ] Check alt text for all images
- [ ] Test mobile accessibility
- [ ] Verify focus indicators are visible
- [ ] Test with browser accessibility inspector
- [ ] Check for proper heading hierarchy
- [ ] Verify form labels and error messages
- [ ] Test dynamic content announcements

## Tools & Resources

### Testing Tools
- axe DevTools (Chrome extension)
- WAVE Web Accessibility Evaluation Tool
- Lighthouse (Chrome DevTools)
- Screen readers: NVDA (free), JAWS, VoiceOver

### Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)

## Common Issues & Solutions

### Issue: Images without alt text
**Solution**: Add descriptive alt text to all `<img>` elements

### Issue: Color-only indicators
**Solution**: Use icons, text, or patterns in addition to color

### Issue: Non-keyboard accessible buttons
**Solution**: Use `<button>` elements and add keyboard event handlers

### Issue: Missing focus indicators
**Solution**: Add CSS focus styles: `button:focus { outline: 2px solid #color; }`

### Issue: Dynamic content not announced
**Solution**: Use `aria-live="polite"` or `aria-live="assertive"` regions

## Continuous Improvement
Regular accessibility audits should be conducted using automated tools and manual testing with assistive technologies.
