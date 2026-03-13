# Architecture & Component Structure

## Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js App                         │
│              (React 19 + TypeScript)                    │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
    ┌────────┐      ┌──────────┐      ┌────────┐
    │ /page  │      │ /article │      │/compon.│
    │(Home)  │      │  /[id]   │      │(Showcase)
    │        │      │(Read)    │      │        │
    └────────┘      └──────────┘      └────────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                ┌─────────▼────────┐
                │   MainLayout     │
                │ (Header+Footer)  │
                └──────────────────┘
```

---
## Performance Optimization Structure

```
Code Splitting:
─────────────
✅ React.memo on:
   ├── ArticleCard
   ├── ArticleImage
   ├── SocialIcon
   └── AdSlot

Image Optimization:
─────────────────
✅ Lazy Loading
✅ Async Decoding
✅ Skeleton Placeholders
✅ Aspect Ratios Reserved

Bundle Size:
────────────
✅ Inline SVG icons (no library)
✅ Minimal dependencies
✅ Tree-shakeable exports
✅ CSS-based animations

Caching:
────────
✅ Ad lazy loading
✅ Theme localStorage
✅ Image browser cache
```

---

## Summary

The architecture is built on:
1. **Component-based** - Modular, reusable components
2. **Responsive** - Mobile-first design with Tailwind
3. **Performant** - Lazy loading, skeletons, memoization
4. **Accessible** - Semantic HTML, ARIA attributes
5. **Themeable** - CSS variables for dark/light mode

All components follow Single Responsibility Principle with clear separation of concerns.
