# Best Practices Guide - Crop Doctor React Application

## Code Organization

### Project Structure
```
src/
├── App.jsx              # Main component
├── App.css              # Main styles
├── main.jsx             # Entry point
├── index.css            # Global styles
├── constants.js         # Application constants
├── utils.js             # Utility functions
├── analytics.js         # Analytics integration
├── galleryStorage.js    # Gallery storage logic
├── supabaseClient.js    # Supabase configuration
└── assets/              # Static assets
```

## Performance Optimization

### 1. Memory Management
- **Object URLs**: Always revoke object URLs created with `URL.createObjectURL()` when done
  ```javascript
  const url = URL.createObjectURL(blob)
  // ... use url
  URL.revokeObjectURL(url)
  ```

- **Cleanup in useEffect**: Always return cleanup function to prevent memory leaks
  ```javascript
  useEffect(() => {
    const handler = () => {}
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  ```

### 2. Image Optimization
- Scale images to appropriate dimensions before processing
- Use compression (0.9 quality for JPEG)
- Process images asynchronously
- Clean up canvas elements after use

### 3. DOM Performance
- Use `aria-live="polite"` instead of frequent DOM updates
- Batch DOM updates when possible
- Avoid unnecessary re-renders with proper dependency arrays

### 4. Canvas Operations
- Use `{ willReadFrequently: true }` when reading pixel data frequently
- Release canvas context after operations
- Consider WebGL backend for TensorFlow operations

### 5. Fetch Optimization
- Add request timeout: `AbortSignal.timeout(5000)`
- Use `cache: 'no-store'` for device stream updates
- Implement retry logic for failed requests

## Error Handling

### Best Practices
1. **Always handle promise rejections**
   ```javascript
   try {
     const result = await operation()
   } catch (error) {
     console.error('Operation failed:', error)
     // Show user-friendly error message
   }
   ```

2. **Validate input before processing**
   ```javascript
   if (!file || !file.type) {
     return { error: 'Invalid file' }
   }
   ```

3. **Provide meaningful error messages**
   - Console: Technical details for developers
   - UI: User-friendly messages for end users

4. **Log errors appropriately**
   - Development: Detailed error objects
   - Production: Sanitized error information

## State Management

### Best Practices
1. **Use state for UI-related data only**
   - Form inputs, selections, visibility toggles
   - Device connections, loading states

2. **Use refs for persistent values**
   - Camera streams, model references
   - Object URLs tracking
   - Scan progress flags

3. **Lift state up when needed**
   - Share data between components
   - Keep single source of truth

## Component Patterns

### Controlled Components
```javascript
const [value, setValue] = useState('')
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

### Effect Dependencies
```javascript
useEffect(() => {
  // This runs once on mount
}, [])

useEffect(() => {
  // This runs when `deviceCameraActive` changes
}, [deviceCameraActive])
```

## Security Best Practices

### 1. Environment Variables
- Use `import.meta.env` for Vite projects
- Never commit secrets to git
- Validate config values at runtime

### 2. API Calls
- Validate all API responses
- Handle CORS properly
- Use HTTPS in production

### 3. Data Validation
- Validate image MIME types
- Check file sizes
- Sanitize user input

## Accessibility

### Key Areas
1. **Keyboard Navigation**: All controls must work with keyboard
2. **Screen Readers**: Use semantic HTML and ARIA attributes
3. **Focus Management**: Visible focus indicators on all interactive elements
4. **Color Contrast**: Maintain WCAG AA standards (4.5:1)
5. **Alternative Text**: Descriptive alt text for all images

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed guidelines.

## Testing

### Recommended Testing Approach
1. **Manual Testing**
   - Keyboard navigation
   - Screen reader compatibility
   - Mobile responsiveness
   - Device camera integration

2. **Automated Testing**
   - Unit tests for utilities
   - Integration tests for data flows
   - Accessibility audits

3. **Browser Testing**
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (desktop and iOS)

## Dependencies

### Key Libraries
- **React 19.2.8**: UI framework with concurrent features
- **Supabase 2.112.4**: Backend and authentication
- **TensorFlow.js 4.22.0**: ML models
- **@tensorflow-models/mobilenet**: Plant classification
- **@tensorflow-models/blazeface**: Face detection

### Development Tools
- **Vite**: Fast build tool and dev server
- **React Plugin**: JSX transformation
- **oxlint**: Fast ESLint alternative

## CSS Considerations

### Modern Features
- **CSS Grid**: Layout container
- **Flexbox**: Navigation and component layouts
- **CSS Variables**: Theme colors and spacing
- **Backdrop Filter**: Glass-morphism effect with vendor prefix

### Browser Support
```css
/* Always include vendor prefix for backdrop-filter */
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
```

## Environment Setup

### Required Configuration
```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### Local Development
```bash
npm install
npm run dev
npm run lint
npm run build
```

## Common Patterns

### Abort Controller for Race Conditions
```javascript
let cancelled = false

promise.then(() => {
  if (!cancelled) {
    setState(value)
  }
})

return () => {
  cancelled = true
}
```

### Ref Cleanup
```javascript
useEffect(() => {
  return () => {
    refs.forEach(ref => {
      if (ref.current) {
        // Cleanup
        ref.current = null
      }
    })
  }
}, [])
```

### Event Handler Cleanup
```javascript
useEffect(() => {
  const handler = (event) => {}
  element.addEventListener('event', handler)
  return () => element.removeEventListener('event', handler)
}, [])
```

## Debugging Tips

1. **Check console for logs**
   - 🔍 Information logs
   - ✅ Success indicators
   - ⚠️ Warnings
   - ❌ Errors

2. **Use React DevTools**
   - Check component state
   - Trace rerenders
   - Profile performance

3. **Network inspection**
   - Monitor API calls
   - Check image fetching
   - Verify CORS headers

4. **Performance profiling**
   - Use Chrome DevTools Performance tab
   - Identify slow operations
   - Optimize bottlenecks

## Deployment

### Vite Build
```bash
npm run build  # Creates optimized dist/ folder
npm run preview  # Test production build locally
```

### Hosting
- GitHub Pages (configured in package.json)
- Vercel
- Netlify
- Any static hosting service

## Future Improvements

1. **Component Extraction**
   - Extract camera component
   - Extract gallery component
   - Extract diagnosis panel

2. **Custom Hooks**
   - useCamera() for camera management
   - useGallery() for gallery operations
   - useImageProcessing() for ML operations

3. **Performance**
   - Code splitting by route
   - Lazy loading models
   - Image optimization

4. **Testing**
   - Unit tests for utilities
   - Integration tests
   - E2E tests with Playwright

5. **Monitoring**
   - Error tracking (Sentry)
   - Analytics (already integrated)
   - Performance monitoring
