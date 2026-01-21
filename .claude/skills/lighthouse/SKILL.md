---
name: lighthouse
description: Run Lighthouse performance audits on web pages. Use when asked to check performance, accessibility, SEO, best practices, or audit a website.
---

# Lighthouse Audits

Run Google Lighthouse to audit web page performance, accessibility, SEO, and best practices.

## Commands

**Audit a URL (opens HTML report in browser):**
```bash
npx lighthouse <url> --view
```

**Audit with JSON output for analysis:**
```bash
npx lighthouse <url> --output=json --output-path=./lighthouse-report.json
```

**Audit specific categories only:**
```bash
npx lighthouse <url> --only-categories=performance,accessibility
```

**Mobile vs Desktop:**
```bash
# Mobile (default)
npx lighthouse <url> --view

# Desktop
npx lighthouse <url> --preset=desktop --view
```

## Score Interpretation

- **90-100**: Excellent (green)
- **50-89**: Needs improvement (orange)
- **0-49**: Poor (red)

## Key Metrics

**Performance:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)
- Speed Index

**Categories:**
- Performance
- Accessibility
- Best Practices
- SEO
- PWA (Progressive Web App)

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Large images | Use WebP/AVIF, add width/height attributes |
| Render-blocking resources | Defer non-critical JS/CSS |
| Missing alt text | Add descriptive alt attributes |
| Poor contrast | Increase color contrast ratio |
| No meta description | Add meta description tag |

## Workflow

1. Run audit on the target URL
2. Review scores and failed audits
3. Prioritize fixes by impact (performance first)
4. Re-run to verify improvements
