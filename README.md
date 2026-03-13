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

## Component Hierarchy

### Layout Components (Top Level)

```
MainLayout
├── Header
│   ├── Logo
│   ├── Search Bar (Desktop)
│   ├── Dark Mode Toggle
│   ├── Sign In Button
│   ├── BurgerButton (Mobile)
│   └── Mobile Navigation Menu
│       └── Nav Items
├── Navbar (Desktop)
│   └── Category Links
├── main (Content Area)
│   ├── ArticleList / ArticleCard
│   └── Sidebar
│       ├── AdSlot
│       ├── Trending Articles
│       ├── AdSlot
│       └── Newsletter
└── Footer
    ├── Links
    └── SocialLinks
        ├── SocialIcon (Twitter)
        ├── SocialIcon (Instagram)
        ├── SocialIcon (Threads)
        ├── SocialIcon (TikTok)
        └── SocialIcon (Facebook)
```

---

## Data Flow

### Homepage Example

```
HomePage (Client Component)
    │
    ├─► useState(articles)
    ├─► useState(isLoading)
    │
    └─► useEffect()
        │
        ├─► fetch('/api/articles')
        │
        └─► setArticles() / setIsLoading()
                │
                ├──────────────────────────────┐
                │                              │
            MainLayout                         │
            └── Grid Layout                    │
                ├── ArticleList               │
                │   └── ArticleCard × 6       │
                │       (isLoading prop)      │
                │       Shows SkeletonCard    │
                │       when isLoading=true   │
                │                              │
                └── Sidebar                   │
                    └── (isLoading prop)      │
                        Shows SkeletonCard    │
                        when loading
```

---

## Responsive Layout Flow

### Desktop (≥1024px)

```
┌────────────────────────────────────────────┐
│              Header (Sticky)               │
├────────────────────────────────────────────┤
│              Navbar (Desktop)              │
├────────────────┬──────────────────────────┤
│                │                          │
│  Main Content  │      Sidebar             │
│  (col-span-2)  │                          │
│                │  ├── AdSlot              │
│  ├── Featured  │  ├── Trending            │
│  │ Article     │  ├── AdSlot              │
│  │             │  └── Newsletter          │
│  ├── Article   │                          │
│  │ Grid (3)    │                          │
│  │             │                          │
│  └── Related   │                          │
│     Articles   │                          │
│                │                          │
├────────────────┴──────────────────────────┤
│              Footer                       │
└────────────────────────────────────────────┘
```

### Tablet (768px - 1024px)

```
┌────────────────────────────────┐
│       Header (Sticky)          │
├────────────────────────────────┤
│      Navbar (Visible)          │
├────────────┬───────────────────┤
│            │                   │
│   Main     │   Sidebar         │
│  Content   │   (2 col)         │
│ (2 col)    │                   │
│            │   ├── AdSlot      │
│            │   ├── Trending    │
│            │   └── NewsL.      │
│            │                   │
├────────────┴───────────────────┤
│         Footer                 │
└────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────────┐
│ Header (Sticky)         │
├─────────────────────────┤
│ BurgerButton ≡          │
│ (shows menu on click)   │
├─ Mobile Menu (0 or max) │
│ ├ Home                  │
│ ├ Bisnis                │
│ ├ Politik               │
│ ├ Teknologi             │
│ ├ Hiburan               │
│ └ Trending              │
├─────────────────────────┤
│ Mobile Search           │
├─────────────────────────┤
│                         │
│   Main Content          │
│   (Full Width)          │
│   (1 col)               │
│                         │
│   ArticleList (1 col)   │
│                         │
├─────────────────────────┤
│    Sidebar (Stacked)    │
│                         │
│    ├── AdSlot           │
│    ├── Trending         │
│    ├── AdSlot           │
│    └── Newsletter       │
│                         │
├─────────────────────────┤
│       Footer            │
│   (Collapsed Style)     │
└─────────────────────────┘
```

---

## Mobile Navigation State Machine

```
Initial State
    │
    └─► isOpen = false
        ├─ BurgerButton: ≡ (closed icon)
        ├─ Menu: max-h-0 (hidden)
        └─ aria-expanded: false

        │
        ├─ User clicks BurgerButton
        │
        ▼

isOpen = true
    ├─ BurgerButton: ✕ (open icon)
    ├─ Menu: max-h-64 (visible, slide-down 300ms)
    └─ aria-expanded: true

    │
    ├─ User clicks menu item
    │
    ▼

isOpen = false
    └─ Returns to initial state
```

---

## Image Loading Flow

```
┌──────────────────┐
│  ArticleImage    │
│  Component       │
└────────┬─────────┘
         │
         ├─► priority = false?
         │   └─► loading="lazy"
         │   └─► decoding="async"
         │
         ├─► Show SkeletonImage
         │   └─► Gradient pulse animation
         │
         ├─► <img src={url} ... />
         │   onLoad={() => setIsLoaded(true)}
         │   onError={() => setError(true)}
         │
         ▼
    Image Loaded?
         │
    ┌────┴─────┐
    │          │
   YES        NO
    │          │
    ▼          ▼
Fade-In    Show Error
(300ms)    Message
    │          │
    └────┬─────┘
         │
         ▼
    Remove Skeleton
    Display Image
```

---

## State Management Pattern

```
Component Level:
┌─────────────────────────────┐
│ HomePage                    │
│ └─ useState(articles)       │
│ └─ useState(isLoading)      │
│ └─ useEffect(fetch)         │
│ └─ useDarkMode()            │
└─────────────────────────────┘

Component Props Flow:
  articles
  └─► ArticleList
      └─► ArticleCard × N
          └─► ArticleImage

  isLoading
  └─► ArticleList
      └─ Shows SkeletonCard if true
      └─► ArticleCard
          └─ loading prop

  isDark
  └─► All Components (CSS variables)
```

---

## CSS Architecture

```
Global Styles (globals.css)
├── CSS Variables (Design Tokens)
│   ├── Colors (--bg, --foreground, etc.)
│   ├── Shadows
│   └── Border Radius
├── Reset & Base Styles
└── Tailwind Configuration

Component Styles (Tailwind Classes)
├── Layout Components
│   └─ Responsive classes (md:, lg:)
├── Article Components
│   └─ Grid/Flex layouts
├── UI Primitives
│   └─ Variant classes
└── Skeleton Components
    └─ Animation classes

Dark Mode (CSS .dark class)
├── On <html> element
├── Toggle via useDarkMode()
├── Save to localStorage
└── Respect system preference
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
