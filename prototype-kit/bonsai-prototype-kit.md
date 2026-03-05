# Bonsai Prototype Kit — Design System Reference

Use this document as context when generating Bonsai UI prototypes. It contains the exact HTML patterns, CSS classes, and design tokens used in the Bonsai application. All prototypes should reference `styles/application.css` (the compiled CSS bundle included in this kit).

---

## Quick Rules

1. **Always use semantic CSS variables** — `var(--text-default)`, `var(--bg-content)`, `var(--color-primary)` — never raw hex values
2. **Use utility classes for spacing/layout** — `.pa20`, `.mt10`, `.flex`, `.align-center` — avoid inline styles
3. **Use `.btn` classes for buttons**, `.form-field` for inputs, `.form-label` for labels
4. **Page content goes inside** `<main class="wrapper-full-width app-page">` in the layout template
5. **Sidebar active state**: add `active` class to `.sidenav-features-item`
6. **No Tailwind** — this project uses custom SCSS utility classes
7. **Font**: Geist (sans-serif), loaded via CSS. Body is 14px, weight 400.
8. **Primary color**: `#22ad01` (green). **Danger**: `#f45757` (red).

---

## A. Design Tokens

### Colors

| Variable | Light Value | Purpose |
|----------|-------------|---------|
| `--color-primary` | `#22ad01` | Brand green, buttons, links, active states |
| `--color-danger` | `#f45757` | Errors, delete actions, warnings |
| `--bg-content` | `#ffffff` | Main content background |
| `--bg-grey-f8` | `#f8f8f8` | Subtle section backgrounds |
| `--bg-grey-f5` | `#f5f5f5` | Slightly darker backgrounds, avatars |
| `--bg-grey-fa` | `#fafafa` | Very subtle backgrounds |
| `--bg-hover-subtle` | `#fcfcfc` | Hover states |
| `--text-default` | `#121212` | Primary text |
| `--text-muted` | `#616161` | Secondary text, descriptions |
| `--text-muted-alt` | `#878787` | Tertiary text, placeholders |
| `--text-lighter` | `#96a6a2` | Lightest text, hints |
| `--border-content` | `#ececec` | Standard borders |
| `--border-content-alt` | `#d7d9d5` | Darker borders |
| `--border-field` | `#ccd0d2` | Input borders |

### Shadows

| Variable | Value |
|----------|-------|
| `--box-shadow-small` | `0 1px 4px color-mix(in srgb, #121212 5%, transparent)` |
| `--box-shadow-medium` | `0 4px 14px color-mix(in srgb, #121212 12%, transparent)` |
| `--box-shadow-large` | `0 10px 30px color-mix(in srgb, #121212 10%, transparent)` |

### Typography

- **Font family**: `'Geist', 'Helvetica Neue', 'Helvetica', arial, sans-serif`
- **Base size**: 14px
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)
- **Headings**: h1=30-34px, h2=26-30px, h3=18-22px (all weight 600)

### Border Radius

| Size | Value | Usage |
|------|-------|-------|
| Small | `4px` | Small buttons, tags, inputs |
| Standard | `6px` | Buttons, inputs, dropdowns, modals |
| Medium | `8px` | Cards, avatars |
| Large | `12px` | Panels |

### Layout Dimensions

| Variable | Value |
|----------|-------|
| `--navigation-height` | `60px` |
| `--sidebar-width` | `275px` |
| `--sidebar-width-collapsed` | `60px` |

---

## B. Component Catalog

### Buttons

**Base class**: `.btn` (40px height, 14px font, 6px radius, weight 500)

**Variants:**
```html
<!-- Primary (green fill, white text) -->
<button class="btn btn-primary">Save</button>

<!-- Default (white bg, border, subtle shadow) -->
<button class="btn btn-default">Cancel</button>

<!-- Ghost (transparent, muted text, grey on hover) -->
<button class="btn btn-ghost">Skip</button>

<!-- Danger (red fill, white text) -->
<button class="btn btn-danger">Delete</button>

<!-- Outline variants -->
<button class="btn btn-outline-primary">Outline Green</button>
<button class="btn btn-outline-danger">Outline Red</button>
<button class="btn btn-outline-secondary">Outline Grey</button>
```

**Sizes:**
```html
<button class="btn btn-primary btn-xs">Extra Small (24px)</button>
<button class="btn btn-primary btn-sm">Small (30px)</button>
<button class="btn btn-primary btn-smd">Small-Medium (36px)</button>
<button class="btn btn-primary">Default (40px)</button>
<button class="btn btn-primary btn-md">Medium (46px)</button>
<button class="btn btn-primary btn-lg">Large (50px)</button>
```

**With icon:**
```html
<button class="btn btn-primary btn-smd">
  <span class="btn-icon-with-text">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
  </span>
  Add Item
</button>
```

**Button group:**
```html
<div class="btn-group">
  <button class="btn btn-default btn-smd btn-icon">List</button>
  <button class="btn btn-default btn-smd btn-icon">Grid</button>
</div>
```

**Loading state:**
```html
<button class="btn btn-primary btn-loading" disabled>
  Saving...
  <div class="btn-loading-wrap">
    <div class="btn-loading-circles">
      <div class="btn-loading-circle"></div>
      <div class="btn-loading-circle"></div>
      <div class="btn-loading-circle"></div>
      <div class="btn-loading-circle"></div>
    </div>
  </div>
</button>
```

**Add link button:**
```html
<a class="btn-add-link">
  <svg class="btn-add-link-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
  Add New Item
</a>
```

---

### Form Elements

**Standard input:**
```html
<div class="form-group">
  <label class="form-label" for="name">Field Label</label>
  <input type="text" class="form-field" id="name" placeholder="Enter value" />
</div>
```

**Input sizes:**
```html
<input type="text" class="form-field input-sm" />   <!-- 30px -->
<input type="text" class="form-field input-smd" />  <!-- 36px -->
<input type="text" class="form-field" />             <!-- 40px (default) -->
<input type="text" class="form-field input-md" />    <!-- 46px -->
<input type="text" class="form-field input-lg" />    <!-- 50px -->
```

**With error:**
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-field with-error" />
  <div class="form-field-error">Please enter a valid email</div>
</div>
```

**With helper text:**
```html
<div class="form-group">
  <label class="form-label">Company Name</label>
  <div class="form-sublabel">This will appear on invoices</div>
  <input type="text" class="form-field" />
</div>
```

**With icon:**
```html
<div class="form-group">
  <label class="form-label">Search</label>
  <div class="relative">
    <svg class="form-field-icon icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input type="text" class="form-field with-icon" placeholder="Search..." />
  </div>
</div>
```

**With prepend text:**
```html
<div class="form-group">
  <label class="form-label">Website</label>
  <div class="form-field-prepend-wrapper">
    <span class="form-field-prepend-text">https://</span>
    <input type="text" class="form-field" placeholder="example.com" />
  </div>
</div>
```

**Textarea:**
```html
<div class="form-group">
  <label class="form-label">Notes</label>
  <textarea class="form-field textarea-md" placeholder="Enter notes..."></textarea>
</div>
<!-- Sizes: textarea-smd (60px), textarea-md (100px), textarea-mlg (160px), textarea-lg (200px) -->
```

**Select (dropdown style):**
```html
<div class="form-group">
  <label class="form-label">Status</label>
  <div class="form-select select-wide">
    <div class="dropdown-label">
      <span class="dropdown-label-text">Active</span>
      <span class="dropdown-caret"><i class="ion-chevron-down"></i></span>
    </div>
  </div>
</div>
```

**Checkbox:**
```html
<label class="checkbox-label checkbox-sm">
  <input type="checkbox" class="checkbox-input" />
  <span class="checkbox-toggle">
    <span class="checkbox-selected">
      <svg class="checkbox-selected-icon" width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
    <span class="checkbox-unselected"></span>
  </span>
  <span class="checkbox-toggle-copy">Enable notifications</span>
</label>
```

**Radio button:**
```html
<label class="radio-label input-sm">
  <input type="radio" name="plan" value="basic" />
  <span class="radio-fill">
    <span class="radio-fill-in"></span>
  </span>
  <span class="radio-label-copy">Basic Plan</span>
</label>
<label class="radio-label input-sm">
  <input type="radio" name="plan" value="pro" />
  <span class="radio-fill">
    <span class="radio-fill-in"></span>
  </span>
  <span class="radio-label-copy">Pro Plan</span>
</label>
```

**Form error banner:**
```html
<div class="form-error-banner showing">Please fix the errors below.</div>
```

**Read-only field:**
```html
<div class="form-group">
  <label class="form-label">Account ID</label>
  <div class="form-field-view-only">ACC-12345</div>
</div>
```

---

### Tags / Badges

**Standard tag (colored pill):**
```html
<div class="category-tag">
  <div class="category-tag-label overflow-ellipsis">Design</div>
  <div class="category-tag-bg" style="background-color: #FF6B6B;"></div>
</div>
```
The background div creates a tinted overlay at 12% opacity behind the label.

**Tag sizes:**
```html
<div class="category-tag tag-xs">...</div>     <!-- 20px height -->
<div class="category-tag">...</div>             <!-- 28px (default) -->
<div class="category-tag tag-lg">...</div>      <!-- larger padding -->
<div class="category-tag tag-list-item">...</div> <!-- 24px, for lists -->
```

**Multiple tags inline:**
```html
<div class="flex gap-5 flex-wrap">
  <div class="category-tag tag-xs">
    <div class="category-tag-label overflow-ellipsis">Design</div>
    <div class="category-tag-bg" style="background-color: #FF6B6B;"></div>
  </div>
  <div class="category-tag tag-xs">
    <div class="category-tag-label overflow-ellipsis">Marketing</div>
    <div class="category-tag-bg" style="background-color: #4ECDC4;"></div>
  </div>
  <div class="category-tag tag-xs">
    <div class="category-tag-label overflow-ellipsis">Enterprise</div>
    <div class="category-tag-bg" style="background-color: #5DB6F8;"></div>
  </div>
</div>
```

**Tag with icon (icon variant):**

Tags can include an SVG icon before the label using `.category-tag-icon` on the SVG. Add `.ml2` for a 2px left margin. Icon `fill` should match `--color-primary` (i.e. `#22AD01`).

```html
<div class="category-tag overflow-ellipsis tag-xs">
  <svg class="category-tag-icon ml2" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <!-- icon path here, fill="#22AD01" -->
  </svg>
  <div class="category-tag-label overflow-ellipsis">Label</div>
  <div class="category-tag-bg" style="background-color: var(--color-primary);"></div>
</div>
```

**Important — play icon sizing:** The `.category-tag-icon--play-icon` modifier class has **no rule in application.css**. Always add a local CSS override when using the play icon inside a tag, otherwise it renders too large:
```css
.category-tag-icon--play-icon { width: 10px; height: auto; }
```

**Meeting asset chips (Recording / Summary / Transcript):**

Standard pattern used in meetings lists and activity feeds. Colors: Recording → `var(--color-primary)`, Summary → `var(--color-accent-blue)`, Transcript → `var(--color-accent-purple)`.

```html
<div class="flex align-center gap-5">

  <!-- Recording -->
  <div class="category-tag overflow-ellipsis tag-xs">
    <svg class="category-tag-icon category-tag-icon--play-icon ml2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20415 0.297574C2.01735 -0.176537 2.82772 0.0161719 3.31254 0.192105C3.78086 0.36205 4.32422 0.659725 4.84282 0.939175L9.23247 3.30441C9.80345 3.61209 10.3895 3.92419 10.8125 4.23898C11.2107 4.53529 11.8164 5.08927 11.8995 5.98605L11.9092 6.16964V6.22238C11.8984 7.22806 11.2372 7.83796 10.8125 8.15402C10.3896 8.4687 9.80326 8.78004 9.23247 9.08761L4.84282 11.4528C4.32425 11.7323 3.78084 12.03 3.31254 12.1999C2.82769 12.3759 2.01741 12.5687 1.20415 12.0944C1.18974 12.086 1.17529 12.0777 1.16118 12.0691C0.357852 11.5781 0.143517 10.7727 0.0684043 10.2624C-0.00411026 9.76957 4.49002e-05 9.15025 4.49002e-05 8.56125V3.83078C4.49002e-05 3.24168 -0.00414424 2.62249 0.0684043 2.12961C0.143529 1.61929 0.357901 0.813909 1.16118 0.322964L1.20415 0.297574ZM1.55962 8.56125C1.55962 9.84325 1.55995 10.4845 1.97465 10.738C1.97952 10.741 1.98438 10.7439 1.9893 10.7468C2.30422 10.9304 2.70091 10.806 3.35551 10.4753L4.10258 10.0798L8.49223 7.71457C9.64934 7.09105 10.2639 6.75956 10.3409 6.29953L10.3497 6.20578C10.3497 6.19968 10.3497 6.19331 10.3497 6.18722C10.3455 5.80383 9.99658 5.52096 9.3018 5.12277L8.49223 4.67746L4.10258 2.31222C2.974 1.70407 2.40916 1.40039 1.9893 1.64523C1.98439 1.6481 1.97951 1.65105 1.97465 1.65402C1.55995 1.90748 1.55962 2.54877 1.55962 3.83078V8.56125Z" fill="#22AD01"></path></svg>
    <div class="category-tag-label overflow-ellipsis">Recording</div>
    <div class="category-tag-bg" style="background-color: var(--color-primary);"></div>
  </div>

  <!-- Summary -->
  <div class="category-tag overflow-ellipsis tag-xs">
    <svg class="category-tag-icon ml2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.46446 7.82701C3.62065 7.93843 3.80776 7.99824 3.99962 7.99806C4.19148 7.99788 4.37848 7.93772 4.53446 7.82601C4.69038 7.70946 4.80889 7.54994 4.87546 7.36701L5.22246 6.30001C5.30569 6.04862 5.4465 5.82016 5.63366 5.63283C5.82082 5.44549 6.04915 5.30447 6.30046 5.22101L7.38646 4.86801C7.56858 4.80268 7.72557 4.68178 7.83524 4.52237C7.94491 4.36297 8.00172 4.17314 7.99763 3.9797C7.99354 3.78625 7.92876 3.59899 7.81245 3.44436C7.69614 3.28974 7.53418 3.17558 7.34946 3.11801L6.28046 2.77201C6.02889 2.68891 5.80023 2.54816 5.61271 2.36099C5.4252 2.17383 5.28403 1.94542 5.20046 1.69401L4.84746 0.610008C4.7834 0.431001 4.66545 0.276238 4.50983 0.167003C4.35422 0.0577692 4.16858 -0.000570284 3.97846 8.33508e-06C3.78561 -0.000812336 3.59738 0.0589884 3.44037 0.17096C3.28336 0.282932 3.1655 0.441414 3.10346 0.624008L2.74746 1.71401C2.66386 1.95797 2.52617 2.17986 2.34468 2.36308C2.16319 2.5463 1.94262 2.6861 1.69946 2.77201L0.615459 3.12301C0.434367 3.187 0.277749 3.3059 0.167432 3.46313C0.0571155 3.62035 -0.00140521 3.80808 2.56258e-05 4.00014C0.00145646 4.1922 0.0627675 4.37904 0.175415 4.5346C0.288062 4.69017 0.446433 4.80672 0.628459 4.86801L1.69546 5.21501C1.94737 5.29917 2.17622 5.44086 2.36386 5.62885C2.55149 5.81683 2.69276 6.04594 2.77646 6.29801L3.12846 7.37801C3.19146 7.55801 3.30946 7.71501 3.46546 7.82601M2.00646 4.26001L1.15146 3.99501L2.01546 3.71401C2.41004 3.57806 2.76774 3.35249 3.06046 3.05501C3.35246 2.75501 3.57246 2.39501 3.70446 1.99901L3.96946 1.14001L4.24946 2.00201C4.38207 2.40214 4.60653 2.76566 4.90485 3.06347C5.20318 3.36128 5.5671 3.5851 5.96746 3.71701L6.84746 3.98601L5.98746 4.26601C5.58677 4.39822 5.22265 4.6225 4.9243 4.92085C4.62595 5.2192 4.40167 5.58332 4.26946 5.98401L4.00446 6.84101L3.72546 5.98201C3.59355 5.58066 3.3693 5.21587 3.07074 4.91696C2.77219 4.61806 2.40765 4.39238 2.00646 4.26001ZM8.53346 11.848C8.66926 11.9446 8.83183 11.9963 8.99846 11.996C9.16638 11.9943 9.32962 11.9405 9.4656 11.8419C9.60157 11.7434 9.70357 11.6051 9.75746 11.446L10.0055 10.684C10.0585 10.526 10.1485 10.381 10.2655 10.263C10.3825 10.145 10.5275 10.056 10.6855 10.004L11.4575 9.75201C11.6171 9.69726 11.7554 9.5934 11.8525 9.45531C11.9495 9.31721 12.0004 9.15194 11.9979 8.98316C11.9953 8.81438 11.9395 8.65073 11.8383 8.51563C11.7371 8.38053 11.5957 8.28091 11.4345 8.23101L10.6705 7.98201C10.5125 7.92909 10.3689 7.84036 10.251 7.72274C10.133 7.60512 10.0438 7.46181 9.99046 7.30401L9.73846 6.53001C9.68424 6.37105 9.58138 6.23319 9.44444 6.13596C9.3075 6.03873 9.14343 5.98707 8.97549 5.98829C8.80755 5.9895 8.64425 6.04354 8.50874 6.14275C8.37322 6.24195 8.27237 6.38129 8.22046 6.54101L7.97346 7.30301C7.92252 7.45966 7.83609 7.60244 7.72092 7.72021C7.60575 7.83799 7.46494 7.92758 7.30946 7.98201L6.53346 8.23501C6.416 8.27585 6.30967 8.34351 6.22293 8.43262C6.13618 8.52173 6.07141 8.62984 6.03375 8.74836C5.99608 8.86688 5.98657 8.99255 6.00596 9.11539C6.02535 9.23823 6.07312 9.35485 6.14546 9.45601C6.24446 9.59601 6.38446 9.70101 6.54546 9.75601L7.30846 10.003C7.46695 10.0564 7.61087 10.1459 7.72887 10.2644C7.84688 10.383 7.93574 10.5273 7.98846 10.686L8.24146 11.46C8.29624 11.6165 8.39828 11.7521 8.53346 11.848ZM7.61946 9.05501L7.44146 8.99601L7.62546 8.93201C7.92872 8.82703 8.20372 8.65362 8.42916 8.42523C8.65461 8.19684 8.82442 7.9196 8.92546 7.61501L8.98346 7.43701L9.04346 7.61801C9.14556 7.92449 9.31764 8.20298 9.54606 8.43141C9.77449 8.65983 10.053 8.83191 10.3595 8.93401L10.5545 8.99701L10.3745 9.05601C10.0673 9.15847 9.78822 9.33126 9.55957 9.5606C9.33093 9.78993 9.15899 10.0695 9.05746 10.377L8.99846 10.558L8.94046 10.377C8.83946 10.0686 8.66737 9.78827 8.43808 9.55863C8.20878 9.32899 7.92871 9.15647 7.62046 9.05501" fill="#22AD01"></path></svg>
    <div class="category-tag-label overflow-ellipsis">Summary</div>
    <div class="category-tag-bg" style="background-color: var(--color-accent-blue);"></div>
  </div>

  <!-- Transcript -->
  <div class="category-tag overflow-ellipsis tag-xs">
    <svg class="category-tag-icon ml2" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4697 0H2.96973C2.24039 0 1.54094 0.289792 1.02514 0.8055C0.509435 1.32121 0.219727 2.02067 0.219727 2.75V12.5C0.219727 13.2294 0.509435 13.9289 1.02514 14.4446C1.54094 14.9603 2.24039 15.25 2.96973 15.25H6.82473L9.04723 17.25C9.36802 17.5368 9.78323 17.6953 10.2135 17.6953C10.6437 17.6953 11.0589 17.5368 11.3797 17.25L13.6022 15.25H17.4697C18.1991 15.25 18.8985 14.9603 19.4143 14.4446C19.93 13.9289 20.2197 13.2294 20.2197 12.5V2.75C20.2197 2.02067 19.93 1.32121 19.4143 0.8055C18.8985 0.289792 18.1991 0 17.4697 0ZM18.2197 12.5C18.2197 12.699 18.1407 12.8897 18.0001 13.0304C17.8594 13.171 17.6686 13.25 17.4697 13.25H13.2197C12.974 13.2485 12.7365 13.3376 12.5522 13.5L10.2197 15.5925L7.87975 13.5C7.6955 13.3376 7.45787 13.2485 7.21227 13.25H2.96977C2.77087 13.25 2.58012 13.171 2.43941 13.0304C2.29879 12.8897 2.21977 12.699 2.21977 12.5V2.75C2.21977 2.55111 2.29879 2.36035 2.43941 2.21973C2.58012 2.07902 2.77087 2 2.96977 2H17.4698C17.6687 2 17.8594 2.07902 18.0001 2.21973C18.1407 2.36035 18.2198 2.5511 18.2198 2.75L18.2197 12.5Z" fill="#22AD01"></path><path d="M7.58008 7.78516C7.58008 8.68261 6.85254 9.41016 5.95508 9.41016C5.05762 9.41016 4.33008 8.68261 4.33008 7.78516C4.33008 6.8877 5.05762 6.16016 5.95508 6.16016C6.85254 6.16016 7.58008 6.8877 7.58008 7.78516Z" fill="#22AD01"></path><path d="M12.0947 7.78516C12.0947 8.68261 11.3672 9.41016 10.4697 9.41016C9.57227 9.41016 8.84473 8.68261 8.84473 7.78516C8.84473 6.8877 9.57227 6.16016 10.4697 6.16016C11.3672 6.16016 12.0947 6.8877 12.0947 7.78516Z" fill="#22AD01"></path><path d="M16.6094 7.78516C16.6094 8.68261 15.8818 9.41016 14.9844 9.41016C14.0869 9.41016 13.3594 8.68261 13.3594 7.78516C13.3594 6.8877 14.0869 6.16016 14.9844 6.16016C15.8818 6.16016 16.6094 6.8877 16.6094 7.78516Z" fill="#22AD01"></path></svg>
    <div class="category-tag-label overflow-ellipsis">Transcript</div>
    <div class="category-tag-bg" style="background-color: var(--color-accent-purple);"></div>
  </div>

</div>
```

Accent color variables for chip backgrounds:
- `--color-primary` (`#22ad01`) — green (Recording, primary tags)
- `--color-accent-blue` (`#5db6f8`) — blue (Summary, info)
- `--color-accent-purple` (`#520eb0`) — purple (Transcript)

---

### Tables / Grids

**Spreadsheet-style grid (primary list pattern):**
```html
<div class="list-grid-wrapper">
  <div class="list-grid">
    <!-- Column Headers -->
    <div class="list-grid-col-headers">
      <div class="list-grid-col-header list-grid-col-header-title" style="width: 300px;">
        <div class="list-grid-col-header-label">Name</div>
      </div>
      <div class="list-grid-col-header" style="width: 200px;">
        <div class="list-grid-col-header-label">Email</div>
      </div>
      <div class="list-grid-col-header" style="width: 150px;">
        <div class="list-grid-col-header-label">Status</div>
      </div>
      <div class="list-grid-col-header" style="width: 150px;">
        <div class="list-grid-col-header-label">Tags</div>
      </div>
    </div>

    <!-- Row Items -->
    <div class="list-grid-items">
      <div class="list-grid-item">
        <div class="list-grid-item-cell list-grid-item-title" style="width: 300px;">
          <div class="avatar-img avatar-xs mr10" style="background-color: var(--bg-grey-f5); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--text-muted);">AC</div>
          <span class="list-item-title">Acme Corporation</span>
        </div>
        <div class="list-grid-item-cell" style="width: 200px;">alice@acme.com</div>
        <div class="list-grid-item-cell" style="width: 150px;">
          <div class="list-item-status active"></div> Active
        </div>
        <div class="list-grid-item-cell" style="width: 150px;">
          <div class="category-tag tag-xs">
            <div class="category-tag-label overflow-ellipsis">Enterprise</div>
            <div class="category-tag-bg" style="background-color: #5DB6F8;"></div>
          </div>
        </div>
      </div>

      <div class="list-grid-item">
        <div class="list-grid-item-cell list-grid-item-title" style="width: 300px;">
          <div class="avatar-img avatar-xs mr10" style="background-color: var(--bg-grey-f5); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--text-muted);">SC</div>
          <span class="list-item-title">Startup Co</span>
        </div>
        <div class="list-grid-item-cell" style="width: 200px;">bob@startup.co</div>
        <div class="list-grid-item-cell" style="width: 150px;">
          <div class="list-item-status active"></div> Active
        </div>
        <div class="list-grid-item-cell" style="width: 150px;">
          <div class="category-tag tag-xs">
            <div class="category-tag-label overflow-ellipsis">Startup</div>
            <div class="category-tag-bg" style="background-color: #95E1D3;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Classic list (simpler pattern):**
```html
<div class="table-list-container">
  <div class="table-list">
    <div class="list-item">
      <a class="list-item-in with-status">
        <div class="list-item-status active"></div>
        <div class="list-item-title">Item Name</div>
        <div class="list-item-subtitle">Secondary info</div>
      </a>
    </div>
  </div>
</div>
```

**Status indicators** (12px colored circle):
- `.list-item-status.active` — green
- `.list-item-status.archived` — grey
- `.list-item-status.pending` — yellow
- `.list-item-status.overdue` — red
- `.list-item-status.completed` — green
- `.list-item-status.drafted` — light grey

---

### Page Headers & Tabs

**Page header with tabs:**
```html
<div class="page-header with-nav">
  <div class="wrapper-full-width">
    <h1 class="page-title">Companies</h1>
    <div class="page-subheader" style="color: var(--text-muted);">Manage your companies and contacts</div>
  </div>
  <div class="page-header-nav">
    <a class="page-header-nav-item active">All</a>
    <a class="page-header-nav-item">Active</a>
    <a class="page-header-nav-item">Archived</a>
  </div>
</div>
```
Active tab: primary-colored 2px bottom border.

**Subnavigation tabs (contact/company detail pages):**
```html
<div class="subnavigation">
  <div class="subnavigation-items pl40">
    <a href="#" class="subnavigation-item active">Overview</a>
    <a href="#" class="subnavigation-item">Meetings</a>
    <a href="#" class="subnavigation-item">Activity</a>
  </div>
</div>
```
Key style from production: `.subnavigation-items { display: flex; align-items: center; gap: 20px; padding: 0 30px; }`. The `.pl40` utility overrides left padding to 40px. Always add `gap: 20px` locally in prototypes — it is not included in the kit's application.css copy.

**Section title style** (the "Activity", "Notes", "Meetings", etc. heading inside each tab panel):

**Every tab panel — including list-grid tabs like Meetings — must include a `tab-section-title-row` at the top.** Omitting it produces an inconsistent look where some tabs have a title and others don't.

The production app uses `.dashboard-chart-title.subheader-title` for these headings. There is no standalone `.subheader-title` rule in `application.css` — all styling comes from `.dashboard-chart-title`:
- `font-size: 16px`
- `font-weight: 500` ← **not 600**; semibold looks wrong here
- `color: var(--text-default)`

In prototypes use a local `.tab-section-title` class with those exact values:
```css
.tab-section-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-default);
}
```

**Tab section title row with "+" add button (contact/company detail pages):**

The correct pattern for an add button in a tab section header is `dashboard-chart-option-add-icon` — a 30×30 grey rounded button that displays a small green "+" SVG. This is not a `.btn` — it is an `<a>` tag styled by `application.css`.

```html
<!-- CSS (add locally) -->
<style>
  .tab-section-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .add-btn-wrap { position: relative; }
  .add-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 30px;   /* aligns dropdown right border with button right border */
    z-index: 50;
    display: none;
  }
  .add-dropdown.open { display: block; }
</style>

<!-- HTML -->
<div class="tab-section-title-row">
  <span class="tab-section-title">Activity</span>
  <div class="add-btn-wrap">
    <div class="dashboard-chart-options showing-xs" style="position: relative;">
      <a class="dashboard-chart-option-add-icon" onclick="toggleAddMenu()" title="Add" style="cursor:pointer;">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4062 8.83333H11.6667V2.09375C11.6667 1.21354 10.9219 0.5 10 0.5C9.07812 0.5 8.33333 1.21354 8.33333 2.09375V8.83333H1.59375C0.713542 8.83333 0 9.57812 0 10.5C0 11.4219 0.713542 12.1667 1.59375 12.1667H8.33333V18.9062C8.33333 19.7865 9.07812 20.5 10 20.5C10.9219 20.5 11.6667 19.7865 11.6667 18.9062V12.1667H18.4062C19.2865 12.1667 20 11.4219 20 10.5C20 9.57812 19.2865 8.83333 18.4062 8.83333Z" fill="#22AD01"/>
        </svg>
      </a>
      <div class="add-dropdown" id="add-activity-menu">
        <div class="field-popup-menu popup-menu-160" style="position: relative; box-shadow: var(--box-shadow-medium);">
          <a class="field-popup-menu-list-item" onclick="handleAddNote()">Add Note</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Key rules:**
- The `dashboard-chart-options` wrapper must have `position: relative` (inline style) so the dropdown is anchored to it
- The `.add-dropdown` uses `right: 30px` — this is what makes the dropdown's right border align with the button's right border. `right: 0` overshoots because the button is only 30px wide; `right: 30px` corrects for this
- Dropdown items use plain text only — **no icons** inside `field-popup-menu-list-item`

**JS toggle:**
```js
function toggleAddMenu() {
  document.getElementById('add-activity-menu').classList.toggle('open');
}
function closeAddMenu() {
  document.getElementById('add-activity-menu').classList.remove('open');
}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.add-btn-wrap')) closeAddMenu();
});
```

**Section title with action (generic page sections):**
```html
<div class="page-section-title-container">
  <h3 class="page-section-title">Team Members</h3>
  <div class="page-section-title-actions">
    <button class="btn btn-primary btn-smd">Add Member</button>
  </div>
</div>
```

---

### Modals

```html
<div class="modal fade" id="modal-example" style="display: block; background: rgba(0,0,0,0.5);">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close">&times;</button>
      </div>
      <div class="modal-body pa20-xs pa40-sm">
        <div class="modal-content-header">Create New Company</div>
        <div class="modal-content-subheader">Add a company to your CRM</div>

        <div class="form-group mt20">
          <label class="form-label">Company Name</label>
          <input type="text" class="form-field" placeholder="e.g. Acme Corp" />
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-field" placeholder="contact@company.com" />
        </div>

        <div class="form-group">
          <label class="form-label">Tags</label>
          <div class="flex gap-5">
            <div class="category-tag tag-xs">
              <div class="category-tag-label">Enterprise</div>
              <div class="category-tag-bg" style="background-color: #5DB6F8;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a class="modal-footer-alt-link">Cancel</a>
        <button class="btn btn-primary btn-md">Create Company</button>
      </div>
    </div>
  </div>
</div>
```

**Warning notice inside modal:**
```html
<div class="modal-warning-notice with-icon with-border">
  <svg class="modal-warning-notice-icon" width="16" height="16" viewBox="0 0 16 16" fill="var(--color-danger)"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4.5" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="11" r="0.75" fill="currentColor"/></svg>
  This action cannot be undone.
</div>
```

---

### Search & Filters

**Search input:**
```html
<div class="list-search-wrapper">
  <label class="list-search-input-icon-label">
    <svg class="list-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  </label>
  <input class="form-field list-search-input" placeholder="Search companies..." />
</div>
```

**Split search with filter button:**
```html
<div class="list-split-search-wrapper">
  <div class="list-split-search-input-wrapper">
    <svg class="list-search-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <input class="form-field list-split-search-input" placeholder="Search..." />
  </div>
  <button class="btn btn-default btn-smd search-split-filters-btn">
    Filters
  </button>
</div>
```

**Filter chips (applied filters):**
```html
<div class="filter-chips mt10">
  <div class="filter-chip">
    <span class="filter-chip-text">
      <span class="filter-chip-text-label">Status:</span> Active
    </span>
    <a class="filter-chip-remove">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>
    </a>
  </div>
  <div class="filter-chip">
    <span class="filter-chip-text">
      <span class="filter-chip-text-label">Tag:</span> Enterprise
    </span>
    <a class="filter-chip-remove">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>
    </a>
  </div>
</div>
```

**Page filter dropdown:**
```html
<div class="page-filters">
  <a class="btn page-filters-toggle">
    All Statuses
    <span class="page-filters-toggle-caret"><i class="ion-chevron-down"></i></span>
  </a>
</div>
```

---

### Dropdowns / Popup Menus

```html
<div class="field-popup-menu popup-menu-200" style="position: absolute; top: 40px; right: 0;">
  <div class="field-popup-menu-list-section">Actions</div>
  <a class="field-popup-menu-list-item">Edit</a>
  <a class="field-popup-menu-list-item">Duplicate</a>
  <div class="field-popup-menu-list-divider"></div>
  <a class="field-popup-menu-list-item" style="color: var(--color-danger);">Delete</a>
</div>
```
Width presets: `.popup-menu-120`, `.popup-menu-160`, `.popup-menu-200`, `.popup-menu-280`, `.popup-menu-400` (default 300px)

**Dropdown alignment rule:** `right: 0` aligns the dropdown's right border with the right border of its positioned ancestor. When the trigger is a small button (e.g. 30px `dashboard-chart-option-add-icon`), use `right: 30px` instead — this shifts the dropdown left so its right border lines up with the visible right edge of the button. As a rule of thumb, set `right` equal to the trigger button's width when you want the right edges aligned.

**Dots menu trigger — two distinct patterns:**

There are two separate "three-dots" button patterns. Use the correct one based on context.

**1. Header / toolbar action button** (section headers, toolbar rows — has border and background):
```html
<a class="btn btn-default btn-smd btn-dropdown-dots">
  <svg class="top-action-btn-dots" width="16" height="4" viewBox="0 0 16 4" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.07086 4.00001C0.925013 4.00001 0 3.10843 0 2.00021C0 0.896154 0.925013 0.000411987 2.07086 0.000411987C3.22088 0.000411987 4.14589 0.896154 4.14589 2.00021C4.14589 3.10843 3.22088 4.00001 2.07086 4.00001V4.00001Z" fill="#0f1010"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 3.99959C6.85417 3.99959 5.92499 3.10802 5.92499 1.9998C5.92499 0.895742 6.85417 0 8.00002 0C9.14587 0 10.0709 0.895742 10.0709 1.9998C10.0709 3.10802 9.14587 3.99959 8.00002 3.99959V3.99959Z" fill="#0f1010"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9249 3.99959C12.7791 3.99959 11.8499 3.10802 11.8499 1.9998C11.8499 0.895742 12.7749 0 13.9249 0C15.0708 0 16 0.895742 16 1.9998C16 3.10802 15.075 3.99959 13.9249 3.99959V3.99959Z" fill="#0f1010"></path>
  </svg>
</a>
```
Uses `.btn-default` + `.btn-smd` + `.btn-dropdown-dots`. The SVG is **horizontal** (16×4). The `btn-dropdown-dots` class sets `width: 40px; padding: 0 10px; justify-content: center; display: flex; align-items: center`.

**2. List row action button** (per-row dots in `list-grid` tables — no border, no background, icon only):
```html
<div class="list-item-dd-toggle list-item-dots">
  <a class="list-item-dd-toggle-link">
    <svg class="list-item-dd-toggle-dots" width="16" height="4" viewBox="0 0 16 4" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.07086 4.00001C0.925013 4.00001 0 3.10843 0 2.00021C0 0.896154 0.925013 0.000411987 2.07086 0.000411987C3.22088 0.000411987 4.14589 0.896154 4.14589 2.00021C4.14589 3.10843 3.22088 4.00001 2.07086 4.00001V4.00001Z" fill="#0f1010"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 3.99959C6.85417 3.99959 5.92499 3.10802 5.92499 1.9998C5.92499 0.895742 6.85417 0 8.00002 0C9.14587 0 10.0709 0.895742 10.0709 1.9998C10.0709 3.10802 9.14587 3.99959 8.00002 3.99959V3.99959Z" fill="#0f1010"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9249 3.99959C12.7791 3.99959 11.8499 3.10802 11.8499 1.9998C11.8499 0.895742 12.7749 0 13.9249 0C15.0708 0 16 0.895742 16 1.9998C16 3.10802 15.075 3.99959 13.9249 3.99959V3.99959Z" fill="#0f1010"></path>
    </svg>
  </a>
</div>
```
Wrapped inside the last cell of a `list-grid-item`: `<div class="list-grid-item-cell list-grid-item-dropdown" style="width:40px;min-width:40px;position:sticky;right:0;z-index:4;justify-content:flex-end;padding-right:8px;flex:1;">`.

Both use the same **horizontal** (16×4) dots SVG — not vertical.

---

### Alerts / Notices

**Section notice:**
```html
<!-- Info (default) -->
<div class="section-notice">
  <div>This is an informational message.</div>
</div>

<!-- Warning -->
<div class="section-notice section-notice--warning">
  <div>Please review before continuing.</div>
</div>

<!-- Error -->
<div class="section-notice section-notice--error">
  <div>Something went wrong. Please try again.</div>
</div>

<!-- Success -->
<div class="section-notice section-notice--success">
  <div>Changes saved successfully!</div>
</div>

<!-- With header -->
<div class="section-notice section-notice--warning">
  <div>
    <div class="section-notice-header">Important</div>
    This action will affect all team members.
  </div>
</div>

<!-- Small -->
<div class="section-notice notice-sm">Compact notice message.</div>
```

**Notice banner (with left colored border):**
```html
<div class="notice-banner success-notice">
  <div class="notice-banner-header">Success</div>
  <p>Your changes have been saved.</p>
</div>

<div class="notice-banner danger-notice">
  <div class="notice-banner-header">Error</div>
  <p>Could not save changes.</p>
</div>

<div class="notice-banner information-notice">
  <div class="notice-banner-header">Note</div>
  <p>This feature is in beta.</p>
</div>
```

---

### Empty States

**Table empty:**
```html
<div class="table-list-empty">
  <div class="table-list-empty-in">
    No companies found. Try adjusting your filters.
  </div>
</div>
```

**Section empty (with icon):**
```html
<div class="empty-state-section">
  <div class="empty-state-text">
    <h3 class="empty-state-header">No contacts yet</h3>
    <div class="empty-state-copy">
      <a class="text-underline cursor-pointer">Add your first contact</a> to get started.
    </div>
  </div>
</div>
```

**Page section empty:**
```html
<div class="page-section-empty-copy">
  No items yet. Get started by creating your first project.
</div>
```

---

### Avatars

There are two distinct avatar classes depending on the subject type:

---

#### Circle avatar — people / users (`user-avatar`)

Use `user-avatar` + a size class. It is an **empty div** — all rendering is via `background-image`. The class in `application.css` handles `border-radius: 50%`, `background-size: cover`, and `background-position: center`.

**With a photo:**
```html
<div class="user-avatar avatar-xs" style="background-image: url('https://randomuser.me/api/portraits/men/32.jpg');"></div>
```

**With initials (no photo) — use `ui-avatars.com`:**
```html
<div class="user-avatar avatar-xs" style="background-image: url('https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png');"></div>
```

- `name=MF` — initials (2 letters, URL-encoded spaces work too: `name=Tom+Bradley`)
- `background=4c525a` — Bonsai grey, matches the app's default user avatar colour
- `color=ffffff` — white text
- `size=250` — render at 250px for crisp display at any CSS size
- `format=png` — required for correct rendering

> **Do NOT** put text inside the div or use flexbox centering on it. The `background-image` approach is how the production app works.

---

#### Square avatar — companies / logos (`avatar-img`)

`avatar-img` is for company logos and other square (non-circle) avatars.

**With image:**
```html
<div class="avatar-img avatar-sm" style="background-image: url('https://placehold.co/32x32');"></div>
```

**Placeholder (no logo):**
```html
<div class="avatar-img avatar-xs" style="background-color: var(--bg-grey-f5); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--text-muted);">AC</div>
```

---

#### Sizes (shared between both classes)

| Class | Size |
|-------|------|
| `.avatar-xxs` | 20px |
| `.avatar-xs` | 26px |
| `.avatar-30` | 30px |
| `.avatar-sm` | 32px |
| `.avatar-smd` | 40px |
| `.avatar-md` | 45px |
| `.avatar-mlg` | 60px |
| `.avatar-lg` | 84px |

---

### Tooltips / Popovers

Popovers use `.field-popup-menu` class with absolute positioning. See Dropdowns section above for the HTML pattern.

---

## C. Layout Patterns

### Dashboard page (full-width list)
```html
<main class="wrapper-full-width app-page">
  <div class="page-header with-nav">
    <div class="wrapper-full-width">
      <h1 class="page-title">Companies</h1>
    </div>
    <div class="page-header-nav">
      <a class="page-header-nav-item active">All</a>
      <a class="page-header-nav-item">Active</a>
    </div>
  </div>
  <div class="wrapper-full-width mt20">
    <!-- search + filters -->
    <!-- list-grid table -->
  </div>
</main>
```

### Detail page (centered content)
```html
<main class="wrapper-md app-page">
  <h1 class="page-title mb20">Company Details</h1>
  <!-- detail sections -->
</main>
```

### Settings page (narrow centered)
```html
<main class="wrapper-sm app-page">
  <h1 class="page-title mb20">Settings</h1>
  <!-- form groups -->
</main>
```

### Wrapper classes

| Class | Max Width |
|-------|-----------|
| `.wrapper-full-width` | None (just padding) |
| `.wrapper-xl` | 1480px |
| `.wrapper-lg` | 1360px |
| `.wrapper-md` | 1100px |
| `.wrapper-sm` | 800px |
| `.wrapper-xs` | 600px |

---

## D. Utility Classes

### Spacing
Pattern: `.{p|m}{a|t|r|b|l}{value}` where value is `0|2|5|7|10|15|20|25|30|40|50|60|80`

Responsive: append `-sm` (768px+), `-md` (992px+), `-lg` (1200px+)

Examples: `.pa20` (padding all 20px), `.mt10` (margin top 10px), `.mb15` (margin bottom 15px), `.ml5` (margin left 5px), `.mr10` (margin right 10px), `.pa20-xs.pa40-sm` (20px padding on mobile, 40px on 768px+)

### Flexbox
```
.flex              display: flex
.inline-flex       display: inline-flex
.flex-column       flex-direction: column
.flex-wrap         flex-wrap: wrap
.flex-1            flex: 1
.flex-grow         flex-grow: 1
.flex-shrink-0     flex-shrink: 0
.align-center      align-items: center
.align-start       align-items: flex-start
.justify-center    justify-content: center
.justify-end       justify-content: flex-end
.space-between     justify-content: space-between
.gap-5             gap: 5px
.gap-7             gap: 7px
.gap-10            gap: 10px
.gap-20            gap: 20px
```

### Text
```
.text-center       text-align: center
.text-right        text-align: right
.text-bold         font-weight: 600
.text-medium       font-weight: 500
.text-normal       font-weight: 400
.text-sm           font-size: 12px
.text-upcase       text-transform: uppercase
.text-underline    text-decoration: underline
.overflow-ellipsis max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap
.text-nowrap       white-space: nowrap
```

### Text Colors
```
.text-primary      var(--color-primary) — green
.text-danger       var(--color-danger) — red
.text-black        var(--text-default)
.text-muted        var(--text-muted-alt) — grey
.text-placeholder  var(--text-lighter)
```

### Display & Positioning
```
.block             display: block
.inline-block      display: inline-block
.relative          position: relative
.absolute          position: absolute
.sticky            position: sticky
.w100              width: 100%
.w50               width: 50%
.cursor-pointer    cursor: pointer
.border-none       border: none
.rounded-6         border-radius: 6px
```

### Background
```
.bg-grey-f8        background-color: var(--bg-grey-f8)
```

---

## E. Common SVG Icons

Use inline SVGs. Here are commonly needed icons:

**Plus:**
```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
```

**Search:**
```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
```

**Close / X:**
```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/></svg>
```

**Chevron Down:**
```html
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
```

**Dots (vertical menu):**
```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg>
```

**Dots (horizontal menu — used in `btn-dropdown-dots` and `list-item-dd-toggle-link`):**
```html
<svg width="16" height="4" viewBox="0 0 16 4" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.07086 4.00001C0.925013 4.00001 0 3.10843 0 2.00021C0 0.896154 0.925013 0.000411987 2.07086 0.000411987C3.22088 0.000411987 4.14589 0.896154 4.14589 2.00021C4.14589 3.10843 3.22088 4.00001 2.07086 4.00001V4.00001Z" fill="#0f1010"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 3.99959C6.85417 3.99959 5.92499 3.10802 5.92499 1.9998C5.92499 0.895742 6.85417 0 8.00002 0C9.14587 0 10.0709 0.895742 10.0709 1.9998C10.0709 3.10802 9.14587 3.99959 8.00002 3.99959V3.99959Z" fill="#0f1010"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9249 3.99959C12.7791 3.99959 11.8499 3.10802 11.8499 1.9998C11.8499 0.895742 12.7749 0 13.9249 0C15.0708 0 16 0.895742 16 1.9998C16 3.10802 15.075 3.99959 13.9249 3.99959V3.99959Z" fill="#0f1010"></path></svg>
```

**Checkmark:**
```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 7l3.5 3.5L12 3"/></svg>
```

**Arrow Right:**
```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
```

**Edit (pencil):**
```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 1.5l3 3L4 13H1v-3L9.5 1.5z"/></svg>
```

**Trash:**
```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1.5 3.5h11M4.5 3.5V2a1 1 0 011-1h3a1 1 0 011 1v1.5M11 3.5l-.5 8.5a1 1 0 01-1 1h-5a1 1 0 01-1-1L3 3.5"/></svg>
```

---

## F. Additional Components

### Breadcrumbs

Rendered inside `<nav id="navigation">`. Note: the codebase spells it `breadcumb`.

**Standard breadcrumb:**
```html
<div class="navigation-breadcumb">
  <a href="/companies" class="navigation-breadcumb-item navigation-breadcumb-item--link">
    <span class="overflow-ellipsis">Companies</span>
  </a>
  <div class="navigation-breadcumb-separator">/</div>
  <div class="navigation-breadcumb-item">
    <span class="overflow-ellipsis">Acme Corporation</span>
  </div>
</div>
```

**Dashboard title (single item, no parent):**
```html
<div class="navigation-breadcumb">
  <div class="navigation-breadcumb-item navigation-breadcumb-item--dashboard-title">
    <span class="overflow-ellipsis">Companies</span>
  </div>
</div>
```

**With dropdown:**
```html
<div class="navigation-breadcumb">
  <div class="navigation-breadcumb-item navigation-breadcumb-item--dropdown">
    <div class="relative navigation-breadcumb-dropdown">
      <div class="overflow-ellipsis pr20">Active Option</div>
      <svg class="navigation-breadcumb-dropdown-toggle-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
    </div>
  </div>
</div>
```

Key styles: 14px, font-weight 500, items hidden below 1200px except last child. Separator is `/` in `var(--border-content-alt)`.

---

### Board / Kanban View

Uses `@atlaskit/pragmatic-drag-and-drop` for drag-and-drop.

```html
<div class="board" id="deal-board">
  <div class="board-groups">

    <!-- Column -->
    <div class="board-group board-group--deals">
      <!-- Column Header -->
      <div class="deal-board-group-header">
        <div class="deal-board-group-status">
          <div class="deal-board-group-status-dot" style="background-color: #5DB6F8;"></div>
          <div class="deal-board-group-status-text">
            <div class="deal-board-group-status-text-in overflow-ellipsis">Qualified</div>
            <div class="section-counter-label flex-shrink-0">5</div>
          </div>
          <div class="deal-board-group-totals">
            <span class="deal-board-group-weighted-total">
              <span class="overflow-ellipsis">$10,000</span>
              <span class="deal-board-group-weighted-total-label overflow-ellipsis">Weighted</span>
            </span>
            <span class="deal-board-group-total-separator flex-shrink-0">&bull;</span>
            <span class="deal-board-group-raw-total overflow-ellipsis">$20,000 Total</span>
          </div>
        </div>
        <button class="deal-board-group-add-deal">+</button>
      </div>

      <!-- Cards -->
      <div class="board-group-cards pr40 pt20">
        <div class="deal-card-outer">
          <div class="deal-card-inner">
            <div class="board-group-cards-item">
              <div class="board-group-cards-item-name task-board-card-title">Website Redesign</div>
              <div class="task-board-card-fields">
                <!-- field chips -->
              </div>
              <div class="task-board-card-footer">
                <div class="board-group-cards-item-description task-board-card-due-date">Jan 15</div>
              </div>
            </div>
          </div>
        </div>

        <div class="deal-card-outer">
          <div class="deal-card-inner">
            <div class="board-group-cards-item">
              <div class="board-group-cards-item-name task-board-card-title">Mobile App MVP</div>
              <div class="task-board-card-footer">
                <div class="board-group-cards-item-description task-board-card-due-date">Feb 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Another column -->
    <div class="board-group board-group--deals">
      <div class="deal-board-group-header">
        <div class="deal-board-group-status">
          <div class="deal-board-group-status-dot" style="background-color: #22ad01;"></div>
          <div class="deal-board-group-status-text">
            <div class="deal-board-group-status-text-in overflow-ellipsis">Won</div>
            <div class="section-counter-label flex-shrink-0">3</div>
          </div>
        </div>
      </div>
      <div class="board-group-cards pr40 pt20">
        <!-- cards here -->
      </div>
    </div>

  </div>
</div>
```

Key styles: `board` is `display: flex; overflow-x: auto`. Columns are `width: 340px`. Cards have `border: 1px solid var(--border-content); border-radius: 8px; padding: 20px; background: var(--bg-content)`.

---

### Drawer / Slide-out Panel

```html
<div class="drawer-wrapper showing" style="display: block;">
  <div class="drawer-section">
    <div class="drawer-title-field">Deal Details</div>

    <div class="form-group mt20">
      <label class="form-label">Deal Name</label>
      <input type="text" class="form-field" value="Website Redesign" />
    </div>

    <div class="form-group">
      <label class="form-label">Value</label>
      <input type="text" class="form-field" value="$15,000" />
    </div>
  </div>

  <!-- Optional side panel (visible on desktop) -->
  <div class="drawer-side-panel">
    <div class="drawer-side-panel-content">
      <div class="drawer-side-field-item">
        <div class="drawer-side-label">Status</div>
        <div class="drawer-side-field-link">Qualified</div>
      </div>
      <div class="drawer-side-field-item">
        <div class="drawer-side-label">Owner</div>
        <div class="drawer-side-field-link">John Doe</div>
      </div>
      <div class="drawer-side-field-item">
        <div class="drawer-side-label">Close Date</div>
        <div class="drawer-side-field-link">Jan 15, 2026</div>
      </div>
    </div>
  </div>
</div>
```

Key styles: `position: fixed; right: 0; top: 0; width: 100%; max-width: var(--drawer-width)` (910px). Side panel: `width: 275px; background: var(--bg-content-alt)`.

Width variants: `.width-720`, `.width-500`, `.width-400`.

---

### Toggle Switch

**On/Off toggle:**
```html
<!-- Active (on) -->
<a role="button" class="form-switch-field active">
  <div class="form-switch active">
    <div class="form-switch-indicator"></div>
  </div>
  <span class="form-switch-label">Enable feature</span>
</a>

<!-- Inactive (off) -->
<a role="button" class="form-switch-field">
  <div class="form-switch">
    <div class="form-switch-indicator"></div>
  </div>
  <span class="form-switch-label">Enable feature</span>
</a>
```

Small variant: add `.form-switch--20` class (30x20px instead of 40x26px).

**Segmented control (switch toggle):**
```html
<div class="switch-toggle switch-primary full-width">
  <div role="button" class="switch-toggle-option text-center active">Monthly</div>
  <div role="button" class="switch-toggle-option text-center">Weekly</div>
</div>
```

3-option: same pattern, add 3 options (each gets `width: 33%` automatically).

---

### Pagination

```html
<div class="pagination-wrapper">
  <ul class="pagination">
    <li class="pagination-prev disabled">
      <a class="pagination-link">Previous</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-link">1</a>
    </li>
    <li class="pagination-item active">
      <a class="pagination-link">2</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-link">3</a>
    </li>
    <li class="break">...</li>
    <li class="pagination-item">
      <a class="pagination-link">10</a>
    </li>
    <li class="pagination-next">
      <a class="pagination-link">Next</a>
    </li>
  </ul>
</div>
```

Key styles: inline-block, `background: var(--bg-grey-fc)`, `border-radius: 6px`. Active: `color: var(--text-default)`. Disabled: `color: var(--text-lightest); cursor: not-allowed`.

---

### Loading Spinners

**Bounce spinner (default, 5 dots):**
```html
<div class="content-spinner">
  <div class="content-spinner-bounce1"></div>
  <div class="content-spinner-bounce2"></div>
  <div class="content-spinner-bounce3"></div>
  <div class="content-spinner-bounce4"></div>
  <div class="content-spinner-bounce5"></div>
</div>
```
Small variant: `.content-spinner.spinner-sm`

**Inline spinner (3 tiny dots):**
```html
<div class="content-spinner-inline">
  <div class="content-spinner-inline-bounce1"></div>
  <div class="content-spinner-inline-bounce2"></div>
  <div class="content-spinner-inline-bounce3"></div>
</div>
```

**Circular spinner (Material Design style):**
```html
<div class="preloader-wrapper active spinner-sm">
  <div class="spinner-layer spinner-primary-only">
    <div class="circle-clipper left"><div class="circle"></div></div>
    <div class="gap-patch"><div class="circle"></div></div>
    <div class="circle-clipper right"><div class="circle"></div></div>
  </div>
</div>
```
Sizes: default (48px), `.spinner-xs` (29px), `.spinner-sm` (36px), `.spinner-lg` (100px).

---

### Card Layout

```html
<div class="list-cards">
  <div class="list-card-item">
    <a href="#" class="list-card-item-bg-link"></a>
    <div class="list-card-item-content">
      <div class="list-card-item-status status-field-label status-field-xs">Draft</div>
      <div class="list-card-item-top">
        <div class="list-card-item-number list-card-item-number--with-status">INV-001</div>
        <div class="list-card-item-title">Website Redesign Invoice</div>
      </div>
      <div class="list-card-item-bottom">
        <div class="list-card-item-meta">$5,000</div>
        <div class="list-card-item-meta">Updated Jan 15</div>
      </div>
    </div>
  </div>

  <div class="list-card-item">
    <a href="#" class="list-card-item-bg-link"></a>
    <div class="list-card-item-content">
      <div class="list-card-item-status status-field-label status-field-xs">Sent</div>
      <div class="list-card-item-top">
        <div class="list-card-item-number list-card-item-number--with-status">INV-002</div>
        <div class="list-card-item-title">Monthly Retainer</div>
      </div>
      <div class="list-card-item-bottom">
        <div class="list-card-item-meta">$3,000</div>
        <div class="list-card-item-meta">Sent Jan 10</div>
      </div>
    </div>
  </div>
</div>
```

Key styles: `border: 1px solid var(--border-content); border-radius: 6px; padding: 20px`. Small: `.list-card-item--sm` (15px padding).

---

### Grouped List

```html
<div class="grouped-list">
  <!-- Expanded group -->
  <div class="grouped-list-header">
    <h3 class="grouped-list-header-title capitalize">January 2026</h3>
    <div class="grouped-list-header-toggle">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
    </div>
  </div>
  <div class="grouped-list-rows">
    <div class="list-item">
      <a class="list-item-in">
        <div class="list-item-title">Item One</div>
        <div class="list-item-subtitle">Description</div>
      </a>
    </div>
    <div class="list-item">
      <a class="list-item-in">
        <div class="list-item-title">Item Two</div>
        <div class="list-item-subtitle">Description</div>
      </a>
    </div>
  </div>

  <!-- Collapsed group -->
  <div class="grouped-list-header header-collapsed">
    <h3 class="grouped-list-header-title capitalize">December 2025</h3>
    <div class="grouped-list-header-toggle">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" style="transform: rotate(-90deg);"><path d="M2 4l4 4 4-4"/></svg>
    </div>
  </div>
</div>
```

Key styles: header `background: var(--bg-grey-fa); border-radius: 6px; padding: 10px 15px`. Title: `font-weight: 600; font-size: 14px; color: var(--text-muted)`.

---

### Progress Bar

**Standard (file upload style):**
```html
<div class="form-attachment-uploader-progress-bar" style="display: block;">
  <div class="form-attachment-uploader-progress-bar-in" style="width: 65%;"></div>
</div>
```
Track: `height: 5px; background: var(--bg-grey-f1); border-radius: 6px`. Fill: yellow `var(--color-accent-yellow)`.

**Thin inline progress:**
```html
<div class="navigation-doc-count-progress" style="width: 150px;">
  <div class="navigation-doc-fields-count-progress-bar" style="width: 60%;"></div>
</div>
```
Track: `height: 4px; border-radius: 4px; background: var(--bg-grey-e)`. Fill: `var(--black)`.

---

### Section Tabs (inline/segmented)

Different from page-header-nav tabs. These are segmented, equal-width tabs with a background.

```html
<div class="section-tabs">
  <a class="section-tab active">Content</a>
  <a class="section-tab">Settings</a>
  <a class="section-tab">Preview</a>
</div>
```

In-modal variant: `.section-tabs.in-modal` (adds border-radius to top corners).

Key styles: background `var(--bg-grey-fc)`, bottom border. Active tab: `background: var(--bg-content); color: var(--text-default)`. Height: 50px. Font: 16px, weight 500.

---

### Activity Feed — Spacing architecture

The vertical line and the content spacing are **decoupled** into two separate values so they can be tuned independently:

```css
.activity-item {
  display: flex;
  gap: 12px;
  padding-bottom: 6px;      /* gap between line-end and next avatar */
}
.activity-item-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 36px;
}
.activity-item-line {
  width: 1px;
  flex: 1;
  background: var(--border-content);
  margin-top: 6px;           /* gap between avatar-bottom and line-start */
}
.activity-item-body {
  flex: 1;
  min-width: 0;
  padding-bottom: 20px;     /* spacing between content and next event's meta */
}
```

**Why this works:** `padding-bottom` on `.activity-item` = `margin-top` on `.activity-item-line` = 6px, giving equal gaps above and below every avatar. The line extends naturally through the body's `padding-bottom`, so the 20px content gap is independent of the connector gap.

---

### Activity Feed — Event patterns

All events (notes, meetings, deals, proposals, contracts) use a **person avatar** (`user-avatar avatar-xs`) on the left — never an icon badge. The avatar represents the Bonsai user who performed the action.

**Meeting completed:**
```html
<div class="activity-item">
  <div class="activity-item-left">
    <div class="user-avatar avatar-xs" style="background-image: url('...');"></div>
    <div class="activity-item-line"></div>
  </div>
  <div class="activity-item-body">
    <div class="activity-meta"><strong>Chris Taylor</strong> completed a meeting with Michael Fawler &middot; Jan 20, 9:00 AM</div>
    <div class="meeting-card">
      <div class="meeting-card-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#22AD01" stroke-width="1.5"><rect x="1" y="3" width="10" height="10" rx="1.5"/><path d="M11 7l4-2v6l-4-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="meeting-card-title">Strategic Planning Offsite</div>
    </div>
  </div>
</div>
```

**Deal assigned** — doc-card uses the Bonsai maze SVG (`fill="#22AD01"`):
```html
<div class="activity-meta"><strong>Tom Bradley</strong> assigned deal <strong>Market Entry Strategy</strong> ($15,000) to Michael Fawler &middot; Jan 21, 11:13 AM</div>
<div class="doc-card">
  <div class="doc-card-icon">
    <svg width="18" height="15" viewBox="0 0 23 19" fill="none"><!-- Bonsai maze path fill="#22AD01" --></svg>
  </div>
  <div class="doc-card-title">Market Entry Strategy</div>
</div>
```

**Proposal sent** — doc-card uses the proposal/send SVG. The word "proposal" is underlined (link style):
```html
<div class="activity-meta"><strong>Tom Bradley</strong> sent the <a>proposal</a> to michael.fawler@techstart.co &middot; Jan 24, 5:30 PM</div>
<div class="doc-card">
  <div class="doc-card-icon">
    <svg width="16" height="16" viewBox="0 0 23 23" fill="none"><!-- proposal send icon path fill="#22AD01" --></svg>
  </div>
  <div class="doc-card-title">Market Entry Strategy – Enterprise Segment</div>
</div>
```

**Contract signed** — no doc-card, just the meta line. The word "contract" is underlined:
```html
<div class="activity-meta"><strong>Michael Fawler</strong> signed the <a>contract</a> &middot; Jan 15, 1:20 PM</div>
```

**Links inside `.activity-meta`** (proposal, contract, etc.) — add this CSS rule so any `<a>` inside a meta line is automatically underlined:
```css
.activity-meta a { text-decoration: underline; cursor: pointer; color: inherit; }
```

---

### Activity Feed — Doc card component

Used for deal and proposal events. Fits its content (not full-width):

```css
.doc-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border-content);
  border-radius: 6px;
  padding: 7px 12px;
  margin-top: 8px;
  background: var(--bg-content);
  cursor: pointer;
}
.doc-card:hover { background: var(--bg-grey-fa); }
.doc-card-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.doc-card-title { font-size: 13px; font-weight: 500; color: var(--text-default); }
```

- **Deal card icon**: Bonsai maze SVG `width="18" height="15"` `fill="#22AD01"`
- **Proposal card icon**: proposal/send SVG `width="16" height="16"` `fill="#22AD01"`

---

### Activity Feed — Meeting card component

The meeting card follows the **same CSS rules as `doc-card`** exactly — same padding, spacing, border-radius, display, and hover. It is **not** a wider expanded card.

**Critical rules:**
- Icon has **no background box** — bare SVG with `stroke="#22AD01"`, centered in a plain flex wrapper
- Show **only the meeting title** — no date, no duration, no participants, no action chips
- `display: inline-flex` (fits content, not full-width)

```css
.meeting-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border-content);
  border-radius: 6px;
  padding: 7px 12px;
  margin-top: 8px;
  background: var(--bg-content);
  cursor: pointer;
}
.meeting-card:hover { background: var(--bg-grey-fa); }
.meeting-card-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.meeting-card-title { font-size: 13px; font-weight: 500; color: var(--text-default); }
```

- **Meeting icon**: video camera SVG `width="16" height="16"`, `fill="none"`, `stroke="#22AD01"` `stroke-width="1.5"`: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#22AD01" stroke-width="1.5"><rect x="1" y="3" width="10" height="10" rx="1.5"/><path d="M11 7l4-2v6l-4-2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

**Do NOT add** to the activity feed meeting card: dates, duration, attendee avatar stacks, or Recording/Summary/Transcript chips. Those belong only in the dedicated Meetings tab list view.

---

### Notes Tab — "Add Note" toggle

The "Add Note" row at the top of the Notes tab is an `<a>` tag (not a button) using `.contact-note-toggle`. It is a full-width flex row with a light grey background and a small icon box on the left.

**HTML:**
```html
<a class="contact-note-toggle">
  <div class="contact-note-toggle-icon">
    <svg class="" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4062 8.83333H11.6667V2.09375C11.6667 1.21354 10.9219 0.5 10 0.5C9.07812 0.5 8.33333 1.21354 8.33333 2.09375V8.83333H1.59375C0.713542 8.83333 0 9.57812 0 10.5C0 11.4219 0.713542 12.1667 1.59375 12.1667H8.33333V18.9062C8.33333 19.7865 9.07812 20.5 10 20.5C10.9219 20.5 11.6667 19.7865 11.6667 18.9062V12.1667H18.4062C19.2865 12.1667 20 11.4219 20 10.5C20 9.57812 19.2865 8.83333 18.4062 8.83333V8.83333Z" fill="currentColor"></path>
    </svg>
  </div>
  Add Note
</a>
```

**CSS:**
```css
.contact-note-toggle {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  background: var(--bg-grey-fa);
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}
.contact-note-toggle, .contact-note-toggle:focus, .contact-note-toggle:visited {
  color: var(--text-default);
}
.contact-note-toggle:hover, .contact-note-toggle:active {
  color: var(--text-default);
  background: var(--bg-grey-f8);
}
.contact-note-toggle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding: 4px;
  background: var(--bg-grey-f1);
  border-radius: 5px;
}
```

**Critical rules:**
- SVG `fill="currentColor"` — **never hardcode `#22AD01`**. The icon is dark grey (inherits `var(--text-default)`), not green.
- Hover darkens the background from `var(--bg-grey-fa)` → `var(--bg-grey-f8)`. Lock `color: var(--text-default)` on both `:hover` and `:active` — `application.css` has an `a:hover` rule that turns link color green, which overrides the default.
- This is an `<a>` tag, not a `<button>`. Do not use `.btn` classes.

---

### Meetings Tab (Contact Detail)

The Meetings tab uses a **`list-grid`** layout (column headers + scrollable rows) instead of a feed. Several rules differ from the Activity/Notes tabs.

**Always include the section title row** — even list-grid tabs need it:
```html
<div class="tab-section-title-row">
  <span class="tab-section-title">Meetings</span>
</div>
```

**Toolbar structure** — uses `padding: 0 0 14px 0` (no top padding, no left/right padding). `contact-main-content` already provides the left/right offset. The top padding must be zero so the vertical gap between the "Meetings" title and the search bar matches the gap in the Activity/Notes tabs (which rely solely on `tab-section-title-row`'s `margin-bottom: 20px`). Do **not** add `border-bottom` — it creates an unwanted horizontal rule between the search bar and the column headers:
```html
<div style="display:flex;align-items:center;justify-content:space-between;padding:0 0 14px 0;">
  <div style="position:relative;display:flex;align-items:center;">
    <!-- search input -->
  </div>
  <a class="btn btn-default btn-smd btn-dropdown-dots"><!-- horizontal dots SVG --></a>
</div>
```

**Search input states** — `application.css` form fields need local overrides to match the three-state border behaviour. Scope these to the tab to avoid affecting other inputs:
```css
#tab-meetings .form-field {
  border-color: #e0e3e7;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
#tab-meetings .form-field:hover {
  border-color: #c5cad1;
}
#tab-meetings .form-field:focus {
  border-color: #22AD01;
  box-shadow: 0 0 0 2.5px rgba(34,173,1,0.12);
}
```

**Column headers — remove top border.** The `list-grid-col-header` class in `application.css` renders a top border by default. Override locally with:
```css
#tab-meetings .list-grid-col-header {
  padding-top: 9px; padding-bottom: 9px; align-items: center; height: auto; border-top: none;
}
```

**First column padding** — set `padding-left: 0` on both the column header cell and every row title cell. The content-area padding already provides the 40px left offset; no additional offset is needed inside the grid.

**Assets column** — use `width: 320px; min-width: 320px` (not 250px). Never use `flex-wrap: wrap` on the chips container — all chips must stay on one row. If content overflows, the horizontal scroll wrapper handles it.

**Horizontal scroll architecture:**
```html
<!-- Outer tab panel: suppress overflow leaking to parent -->
<div id="tab-meetings" class="tab-panel" style="padding:0;overflow:hidden;">
  <!-- Title and toolbar here (padding-left/right from contact-main-content) -->

  <!-- Grid scroll wrapper -->
  <div style="overflow-x:auto;">
    <div class="list-grid" style="min-width:900px;">
      <!-- column headers + rows -->
    </div>
  </div>
</div>
```

**Row action button** — use `list-item-dd-toggle list-item-dots` (no border, no background) inside the sticky right cell:
```html
<div class="list-grid-col" style="width:50px;min-width:50px;position:sticky;right:0;z-index:4;display:flex;justify-content:flex-end;align-items:center;">
  <div class="list-item-dd-toggle list-item-dots">
    <a class="list-item-dd-toggle-link"><!-- horizontal dots SVG --></a>
  </div>
</div>
```

---

## F2. Sidebar Collapse / Expand

The sidebar supports a collapsible mode (275px → 60px) that hides text labels and replaces the search input with an icon-only nav item. This is fully wired in `layout.html` — copy the pattern below for any prototype that needs it.

### How it works

| What changes | Expanded | Collapsed |
|---|---|---|
| `#outer-wrapper` class | `with-sidebar with-sidebar-expanded` | `with-sidebar` (remove `with-sidebar-expanded`) |
| `.sidenav-container` class | — | `sidenav-container--collapsed` |
| `application.css` automatically | Labels visible, full-width search | Labels hidden, icons centered, search input hidden |

`application.css` already has transitions on `#outer-wrapper` padding-left and `#navigation` left (both 150ms). Add `transition: width 150ms ease` on `.sidenav-container` locally to complete the animation.

### Toggle button

The collapse button lives inside `.sidenav-company-switcher-collapse-toggle` (already in the sidenav header). It is invisible by default and revealed only on sidenav hover:

```css
/* Hidden at rest, visible when sidenav is hovered */
.sidenav-company-switcher-collapse-toggle {
  opacity: 0;
  transition: opacity 150ms ease;
  position: relative;
}
.sidenav-container:hover .sidenav-company-switcher-collapse-toggle {
  opacity: 1;
}

/* Tooltip — reads from data-tooltip attribute */
.sidenav-company-switcher-collapse-toggle::after {
  content: attr(data-tooltip);
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  background: #1a1a1a;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 5px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 100ms ease;
  z-index: 9999;
}
.sidenav-company-switcher-collapse-toggle:hover::after { opacity: 1; }
```

```html
<!-- In .sidenav-company-section, replace the bare div with: -->
<div id="sidebar-toggle" class="sidenav-company-switcher-collapse-toggle"
     data-tooltip="Hide sidebar" onclick="toggleSidebar()">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5">
    <rect x="2" y="2" width="12" height="12" rx="2"/>
    <path d="M6 2v12"/>
  </svg>
</div>
```

### JS toggle

```javascript
function toggleSidebar() {
  const container = document.querySelector('.sidenav-container');
  const outer = document.getElementById('outer-wrapper');
  const btn = document.getElementById('sidebar-toggle');
  const isCollapsed = container.classList.toggle('sidenav-container--collapsed');
  if (isCollapsed) {
    outer.classList.remove('with-sidebar-expanded');
    btn.setAttribute('data-tooltip', 'Show sidebar');
  } else {
    outer.classList.add('with-sidebar-expanded');
    btn.setAttribute('data-tooltip', 'Hide sidebar');
  }
}
```

### Collapsed search — icon-only nav item

When collapsed, the search input hides and an icon-only `sidenav-features-item` appears in its place:

```css
.sidenav-container--collapsed .sidenav-top-section-search-input { display: none; }
.sidenav-search-collapsed-item { display: none; }
.sidenav-container--collapsed .sidenav-search-collapsed-item { display: flex; }

/* Production positioning for the search icon */
.sidenav-features-item-icon.search { top: 9.5px; left: 11.5px; width: 12px; }
/* Override the global stroke rule — search icon uses a filled green path */
.sidenav-features-item-icon.search path { fill: #22AD01 !important; stroke: none !important; }
```

```html
<!-- Inside .sidenav-top-section-search, after the form-field div: -->
<a class="sidenav-features-item sidenav-search-collapsed-item" href="#">
  <div class="sidenav-features-item-bg"></div>
  <svg class="sidenav-features-item-icon search" width="20" height="21"
       viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.657 18.3393L15.5348 14.217C15.5052 14.1875 15.4716 14.165 15.4393 14.1392C17.8307 10.8098 17.5388 6.14868 14.5457 3.15562C12.8819 1.49182 10.7013 0.660156 8.52071 0.660156C6.3401 0.660156 4.1595 1.49182 2.4957 3.15562C-0.8319 6.48322 -0.8319 11.878 2.4957 15.2056C4.1595 16.8694 6.3401 17.7011 8.52071 17.7011C10.4071 17.7011 12.2916 17.0756 13.8434 15.8307C13.8555 15.8442 13.865 15.8597 13.8781 15.8729L18.0003 19.9951C18.2289 20.2247 18.5288 20.339 18.8287 20.339C19.1285 20.339 19.4284 20.2247 19.657 19.996C20.1143 19.5383 20.1143 18.7966 19.657 18.3393ZM8.52069 15.3589C6.87045 15.3589 5.31912 14.716 4.15198 13.5494C1.7432 11.1406 1.7432 7.22123 4.15198 4.81245C5.31868 3.64575 6.87047 3.00298 8.52069 3.00298C10.1709 3.00298 11.7222 3.64584 12.8894 4.81245C15.2982 7.22123 15.2982 11.1406 12.8894 13.5494C11.7222 14.716 10.1709 15.3589 8.52069 15.3589Z"
          fill="#22AD01" shape-rendering="auto"></path>
  </svg>
</a>
```

### Avatar fix (`sidenav-company-menu-avatar`)

`avatar-img.avatar-xs` adds `padding-top: 6px` which fights the flex-centering on the avatar and makes the logo appear distorted when collapsed. Override in every prototype:

```css
.sidenav-company-menu-avatar {
  flex-shrink: 0;
  padding-top: 0 !important;
}
```

---

## G. Known CSS Traps

### `top-header-section.company` — double spacing bug

The class `.top-header-section.company` in `application.css` hardcodes **both** `padding-bottom: 40px` and `margin-bottom: 40px`. These create ~80px of blank space between the subnavigation bar and the content area below.

**The `mb0` utility class does NOT fix this.** `.top-header-section.company` has specificity (0,2,0) which beats `.mb0` at (0,1,0). The only reliable override is an **inline style**, which always wins:

```html
<div class="top-header-section company mb0 contact-header-with-nav"
     style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
```

### Content area padding after subnavigation tabs

After zeroing the header's `padding-bottom` and `margin-bottom`, the content area needs its own top padding to breathe. The production app wraps content in `<div class="pt40 pb40">`. Match this exactly in prototypes — and critically, the **left padding must match the subnav's `pl40`** so the section title aligns with the tab labels:

```css
.contact-main-content {
  padding: 40px 30px 40px 40px;
}
```

- `padding-top: 40px` — matches `pt40` from real app
- `padding-bottom: 40px` — matches `pb40` from real app
- `padding-right: 30px` — standard content right margin
- `padding-left: 40px` — **must match `pl40` on `.subnavigation-items`** so the "Activity" title and the "Activity" tab sit on the same column

**Summary of the correct contact page spacing chain:**
1. `top-header-section` → `padding-bottom: 0; margin-bottom: 0` (inline style required)
2. `contact-main-content` → `padding: 40px 30px 40px 40px`
3. `tab-section-title-row` → `margin-bottom: 20px` (default, keep as-is)
4. First content item starts immediately below the title row

---

### Properties Sidebar (`page-properties-*`)

Production HTML pattern for the right-hand contact/company properties panel. Use `page-properties-section` directly inside your sidebar wrapper — `page-properties-sidebar` is the React root in the app and not needed in prototypes.

```html
<div class="page-properties-section">
  <!-- Header row: title toggle + add-field link -->
  <div class="page-properties-section-title page-properties-section-title--open">
    <div class="page-properties-section-title-toggle">
      Properties
      <svg class="page-properties-section-title-toggle-icon page-properties-section-title-toggle-icon--open"
           width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.5 6.65414L15.1113 0.120685C15.2745 -0.0434329 15.544 -0.0395254 15.711 0.1285L16.8723 1.29686C17.0393 1.46489 17.0431 1.73842 16.8799 1.90254L8.80742 9.8818C8.72392 9.96776 8.61006 10.0068 8.5 9.99902C8.38614 10.0029 8.27608 9.96385 8.19258 9.8818L0.120062 1.90254C-0.0431343 1.73842 -0.039339 1.46489 0.127652 1.29686L1.289 0.1285C1.45599 -0.0395254 1.72546 -0.0434329 1.88865 0.120685L8.5 6.65414Z"
              fill="#22AD01"/>
      </svg>
    </div>
    <a class="dashboard-chart-option-add-icon" href="/settings/custom_fields">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.4062 8.83333H11.6667V2.09375C11.6667 1.21354 10.9219 0.5 10 0.5C9.07812 0.5 8.33333 1.21354 8.33333 2.09375V8.83333H1.59375C0.713542 8.83333 0 9.57812 0 10.5C0 11.4219 0.713542 12.1667 1.59375 12.1667H8.33333V18.9062C8.33333 19.7865 9.07812 20.5 10 20.5C10.9219 20.5 11.6667 19.7865 11.6667 18.9062V12.1667H18.4062C19.2865 12.1667 20 11.4219 20 10.5C20 9.57812 19.2865 8.83333 18.4062 8.83333Z"
              fill="#22AD01"/>
      </svg>
    </a>
  </div>

  <!-- Fields -->
  <div>
    <div class="page-properties-section-item">
      <div class="page-properties-section-item-label">Job Title</div>
      <div class="page-properties-section-item-editable">
        <div class="ghost-input-wrapper">
          <input class="input-sm w100 ghost-form-control" name="job_title" placeholder="Add Job Title" type="text" value="">
        </div>
      </div>
    </div>
    <div class="page-properties-section-item">
      <div class="page-properties-section-item-label">Email</div>
      <div class="page-properties-section-item-editable">
        <div class="ghost-input-wrapper">
          <input class="input-sm w100 ghost-form-control" name="email" placeholder="Add Email" type="text" value="">
        </div>
      </div>
    </div>
    <div class="page-properties-section-item">
      <div class="page-properties-section-item-label">Phone Number</div>
      <div class="page-properties-section-item-editable">
        <div class="ghost-input-wrapper">
          <input class="input-sm w100 ghost-form-control" name="phone_number" placeholder="Add Phone Number" type="text" value="">
        </div>
      </div>
    </div>
  </div>
</div>
```

**Key classes:**

| Class | Role |
|-------|------|
| `page-properties-section` | Section wrapper — `padding: 16px 20px; border-bottom: 1px solid var(--border-content)` |
| `page-properties-section-title` | Header row — `display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px` |
| `page-properties-section-title--open` | Modifier: chevron points down (open state) |
| `page-properties-section-title-toggle` | Left side — label + chevron SVG, `display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600` |
| `page-properties-section-title-toggle-icon` | The green filled chevron SVG (17×10) |
| `dashboard-chart-option-add-icon` | Right side — green `+` icon link to `/settings/custom_fields`; fades from 50% to 100% opacity on hover |
| `page-properties-section-item` | Field row — `display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px` |
| `page-properties-section-item-label` | Label column — `flex-shrink: 0; width: 90px; font-size: 12px; color: var(--text-muted)` |
| `page-properties-section-item-editable` | Value column — `flex: 1; min-width: 0` |
| `ghost-input-wrapper` | Full-width wrapper for the ghost input |
| `ghost-form-control` | Ghost input: transparent bg + border at rest, reveals `var(--bg-grey-f5)` fill and `var(--border-content)` border on hover/focus |

**Note:** `page-properties-*` and `ghost-*` classes are not in the kit's application.css snapshot. Add local CSS rules in every prototype that uses this pattern (see the local style block in `contact-activity-tab/index.html` for a complete reference implementation).

---

### Notes Tab — Feed item structure

Note items use **the same left-column layout as the activity feed** — avatar on the left, body on the right. There is no pencil icon, no vertical connector line, and no `border-left` on the note text. Do not add a `.note-item-left` with an edit icon; use `.activity-item-left` instead.

**HTML:**
```html
<div class="note-item">
  <div class="activity-item-left">
    <div class="user-avatar avatar-xs" style="background-image: url('https://ui-avatars.com/api/?name=LD&size=250&background=4c525a&color=ffffff&format=png');"></div>
  </div>
  <div class="note-item-body">
    <div class="note-meta" style="margin-bottom: 4px;">
      <strong>Lucas Did</strong> · <span style="color: var(--text-muted-alt);">Today 8:15 AM</span>
    </div>
    <div class="note-text">Note content goes here.</div>
  </div>
  <div class="note-actions">
    <button class="note-menu-btn" onclick="toggleNoteMenu(this)">···</button>
    <div class="note-dropdown">
      <div class="field-popup-menu popup-menu-120" style="position:relative; box-shadow: var(--box-shadow-medium);">
        <a class="field-popup-menu-list-item" onclick="editNote(this)">Edit</a>
        <a class="field-popup-menu-list-item field-popup-menu-list-item--danger" onclick="deleteNote(this)">Delete</a>
      </div>
    </div>
  </div>
</div>
```

**Key differences from old pattern:**
- No `.note-item-left` with a pencil SVG and `.note-item-line`
- No `border-left` or `padding-left` on `.note-text`
- Meta format: `Name · Timestamp` (middle-dot separator, not "added a note" phrasing)
- Third flex column `.note-actions` carries the `···` menu (see next section)

**Required CSS (local):**
```css
.note-item {
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
}
.note-item-body { flex: 1; }
.note-meta { font-size: 13px; color: var(--text-muted); }
.note-meta strong { color: var(--text-default); font-weight: 600; }
.note-text { font-size: 14px; color: var(--text-default); line-height: 1.6; }
```

---

### Note / Feed item — Hover `···` action menu

Feed-level items that have actions (notes in both the Notes tab and the Activity feed) get a `···` button on the right that reveals on hover. This is a **third dots-menu pattern** distinct from the toolbar `btn-dropdown-dots` and the list-grid `list-item-dd-toggle`.

**HTML (same for notes in Notes tab and note items in Activity feed):**
```html
<div class="note-actions">
  <button class="note-menu-btn" onclick="toggleNoteMenu(this)">···</button>
  <div class="note-dropdown">
    <div class="field-popup-menu popup-menu-120" style="position:relative; box-shadow: var(--box-shadow-medium);">
      <a class="field-popup-menu-list-item" onclick="editNote(this)">Edit</a>
      <a class="field-popup-menu-list-item field-popup-menu-list-item--danger" onclick="deleteNote(this)">Delete</a>
    </div>
  </div>
</div>
```

Place `.note-actions` as the **third flex child** inside `.note-item` or `.activity-item` (after the left column and the body).

**CSS:**
```css
.note-actions {
  flex-shrink: 0;
  position: relative;
  align-self: flex-start;
  padding-top: 2px;
}
.note-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-lighter);
  font-size: 16px;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 4px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.12s, background 0.12s;
}
/* Reveal on row hover */
.note-item:hover .note-menu-btn,
.activity-item:hover .note-menu-btn { opacity: 1; }
.note-menu-btn:hover { background: var(--bg-grey-f5); color: var(--text-muted); }

.note-dropdown {
  position: absolute;
  top: calc(100% + 2px);
  right: 0;
  z-index: 100;
  display: none;
}
.note-dropdown.open { display: block; }
```

**JS (minimal):**
```js
function toggleNoteMenu(btn) {
  const dropdown = btn.nextElementSibling;
  const isOpen = dropdown.classList.contains('open');
  closeAllNoteMenus();
  if (!isOpen) dropdown.classList.add('open');
  event.stopPropagation();
}
function closeAllNoteMenus() {
  document.querySelectorAll('.note-dropdown').forEach(d => d.classList.remove('open'));
}
document.addEventListener('click', closeAllNoteMenus);
```

**Rules:**
- The button uses `···` (three middle-dots `·`) as text, **not** the vertical 3-dot SVG. This keeps it visually distinct from list-grid row dots and header toolbar dots.
- `opacity: 0` at rest, revealed only on row hover — avoids visual noise on dense feeds.
- The dropdown uses the standard `field-popup-menu` with `position: relative` (not `absolute`) on the inner menu, since the parent `.note-dropdown` is already `position: absolute`.

---

### Notes Tab — "Add Note" toggle with inline composer

The toggle button hides itself when clicked and shows an inline note composer in its place. Wrap both in a container `div`.

**HTML structure:**
```html
<div id="note-add-area" style="margin-bottom: 30px;">
  <!-- The toggle button -->
  <a class="contact-note-toggle" id="note-add-toggle" onclick="showNoteComposer()">
    <div class="contact-note-toggle-icon">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4062 8.83333H11.6667V2.09375C11.6667 1.21354 10.9219 0.5 10 0.5C9.07812 0.5 8.33333 1.21354 8.33333 2.09375V8.83333H1.59375C0.713542 8.83333 0 9.57812 0 10.5C0 11.4219 0.713542 12.1667 1.59375 12.1667H8.33333V18.9062C8.33333 19.7865 9.07812 20.5 10 20.5C10.9219 20.5 11.6667 19.7865 11.6667 18.9062V12.1667H18.4062C19.2865 12.1667 20 11.4219 20 10.5C20 9.57812 19.2865 8.83333 18.4062 8.83333Z" fill="currentColor"/>
      </svg>
    </div>
    Add Note
  </a>
  <!-- Composer slot (hidden until toggle is clicked) -->
  <div id="note-composer" style="display:none;"></div>
</div>
```

Clicking the toggle calls `showNoteComposer()`, which hides the `<a>` and injects the composer HTML into `#note-composer`. Cancel restores the toggle.

---

### Inline Note Composer

Used both for **adding a new note** (injected into `#note-composer`) and for **editing an existing note** (injected inline inside the note item body, replacing the note text).

**HTML:**
```html
<div class="note-edit-area">
  <div class="note-composer-toolbar">
    <button class="note-composer-toolbar-btn" title="Bold"><strong>B</strong></button>
    <button class="note-composer-toolbar-btn" title="Italic"><em>i</em></button>
    <button class="note-composer-toolbar-btn" title="Underline"><u>U</u></button>
    <button class="note-composer-toolbar-btn" title="Strikethrough"><s>S</s></button>
    <button class="note-composer-toolbar-btn" title="Font size" style="font-size:12px;">A<sub style="font-size:9px;">i</sub></button>
    <div class="note-composer-toolbar-sep"></div>
    <button class="note-composer-toolbar-btn" title="Link">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    </button>
    <button class="note-composer-toolbar-btn" title="Ordered list">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4M4 10H6M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
    </button>
    <button class="note-composer-toolbar-btn" title="Bullet list">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/></svg>
    </button>
    <div class="note-composer-toolbar-sep"></div>
    <button class="note-composer-toolbar-btn" title="Image">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    </button>
    <button class="note-composer-toolbar-btn" title="Attachment">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
    </button>
    <button class="note-composer-toolbar-btn" title="More">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
    </button>
  </div>
  <div class="note-composer-body" contenteditable="true" data-placeholder="Write a note..."></div>
  <div class="note-composer-actions">
    <button class="btn btn-default btn-smd" onclick="cancelNoteEdit(this)" data-mode="add">Cancel</button>
    <button class="btn btn-primary btn-smd">Save Changes</button>
  </div>
</div>
```

Set `data-mode="add"` for new notes and `data-mode="edit"` for editing an existing note — the Cancel handler uses this to know whether to restore the toggle or restore the note view.

**CSS:**
```css
.note-composer-toolbar {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 6px 10px;
  border: 1px solid var(--border-content);
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: var(--bg-grey-fa);
}
.note-composer-toolbar-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: background 0.12s;
  line-height: 1;
}
.note-composer-toolbar-btn:hover { background: var(--bg-grey-f1); }
.note-composer-toolbar-sep { width: 1px; height: 16px; background: var(--border-content); margin: 0 4px; }
.note-composer-body {
  border: 1px solid var(--border-content);
  border-radius: 0 0 6px 6px;
  background: var(--bg-content);
  min-height: 90px;
  padding: 12px 14px;
  font-size: 14px;
  color: var(--text-default);
  line-height: 1.6;
  outline: none;
}
.note-composer-body:focus { border-color: var(--border-content-alt); }
.note-composer-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}
```

**Toolbar icon order:** B · i · U · S · Aᵢ | link · ordered-list · bullet-list | image · attachment · more (···)

---

### Destroy Confirmation Modal

Used before permanently deleting records (notes, contacts, etc.). A small centered modal with a dark overlay, centred text, and a full-width danger button. No header/footer chrome — content only.

**HTML:**
```html
<div id="delete-note-modal" class="modal-overlay hidden">
  <div class="modal-wrap">
    <div class="modal-dialog modal-dialog-destroy">
      <div class="destroy-modal-title">Delete Note</div>
      <div class="destroy-modal-desc">Confirm that you would like to permanently delete this note.</div>
      <button class="btn-danger-full" onclick="confirmDeleteNote()">Delete</button>
    </div>
    <button class="modal-close-btn" onclick="closeDeleteModal()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l12 12M13 1L1 13"/></svg>
    </button>
  </div>
</div>
```

The close `×` button sits **outside** `.modal-dialog`, as a sibling in `.modal-wrap`. This places it visually to the top-right of the card.

**CSS:**
```css
/* Reuse .modal-overlay (fixed inset, rgba(0,0,0,0.45), flex center) */
/* .modal-wrap: position relative, display flex, align-items flex-start, gap 10px */

.modal-dialog-destroy {
  width: 340px;
  padding: 32px 28px 28px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.22);
}
.destroy-modal-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-default);
  margin-bottom: 12px;
}
.destroy-modal-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 24px;
}
.btn-danger-full {
  background: #eb5757;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: background 0.12s;
}
.btn-danger-full:hover { background: #d94f4f; }
```

**JS pattern:**
```js
let _itemToDelete = null;

function deleteNote(link) {
  closeAllNoteMenus();
  _itemToDelete = link.closest('.note-item, .activity-item');
  document.getElementById('delete-note-modal').classList.remove('hidden');
}
function confirmDeleteNote() {
  if (_itemToDelete) { _itemToDelete.remove(); _itemToDelete = null; }
  closeDeleteModal();
}
function closeDeleteModal() {
  document.getElementById('delete-note-modal').classList.add('hidden');
}
```

**Rules:**
- The danger button color is `#eb5757` (slightly more vibrant than `var(--color-danger)` `#f45757`) — match what the design uses.
- Keep the modal small (340px) for single-record destructive confirmations. Use the wider standard modal (600px) for forms or multi-step confirmations.
- Always include the close `×` button outside `.modal-dialog` in `.modal-wrap` — this is the established Bonsai modal pattern.

---

### Modal Overlay — Scrollable (Large Modals)

For modals that contain long forms or tabs, switch to a top-anchored scrollable overlay so the modal doesn't get clipped on short viewports.

**CSS override (add after `.modal-overlay` default rules):**
```css
.modal-overlay {
  align-items: flex-start;
  justify-content: center;
  padding-top: 8vh;
  padding-bottom: 8vh;
  overflow-y: auto;
}
.modal-dialog {
  max-height: 80vh;
  overflow-y: auto;
}
```

This keeps the modal from touching the top of the viewport, gives scroll to the dialog when content overflows, and allows dimissing it by clicking the backdrop area above/below.

---

### Email Feed Items (Activity-Feed Style) — Activity Tab Only

> **Note:** The **Emails tab** now uses an inbox-style list (see Section H — Inbox-Style Email List). The pattern below applies only when email items appear inline in the **Activity tab timeline**.

Email items in the Activity tab use the **same `activity-item` layout as the activity feed** — avatar left, vertical connector line, body right. The body contains a meta line with a "View Email" link right-aligned, and a single-line truncated preview.

**HTML:**
```html
<div class="activity-item email-activity-item">
  <div class="activity-item-left">
    <div class="user-avatar avatar-xs" style="background-image: url('...');"></div>
    <div class="activity-item-line"></div>
  </div>
  <div class="activity-item-body">
    <div class="activity-meta" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
      <span><strong>Tom Bradley</strong> sent an email to Michael Fawler: "RE: Brand refresh timeline" · Jan 22, 3:15 PM</span>
      <a class="email-view-link-meta" onclick="openEmailPanel(0)">View Email</a>
    </div>
    <div class="email-preview-text">"Hi both, I've pushed the mood board review to Thursday..."</div>
  </div>
</div>
```

**CSS (local):**
```css
/* View Email link — always green, never underlined in any state */
.email-view-link-meta,
.email-view-link-meta:hover,
.email-view-link-meta:visited,
.email-view-link-meta:active {
  font-size: 12px; color: var(--color-primary) !important;
  font-weight: 500; cursor: pointer;
  flex-shrink: 0; margin-left: auto;
  padding-left: 16px; text-decoration: none !important;
}

/* Preview text: single line, ellipsis at end of row */
.email-preview-text {
  font-size: 13px; color: var(--text-muted); line-height: 1.55; margin-top: 5px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

/* activity-item-body must have overflow:hidden for ellipsis to work in flex */
.activity-item-body { flex: 1; min-width: 0; overflow: hidden; }
```

**Rules:**
- `!important` is required on the link color/decoration because `application.css`'s global `a:hover` rule has higher specificity and overrides without it.
- `activity-item-body` needs `overflow: hidden` + `min-width: 0` for text-overflow ellipsis to work inside a flex container.
- Do **not** add "Show More" links — truncate with ellipsis instead.

---

### Section Secondary Action Button

A compact secondary button used alongside the `···` three-dot menu in section headers (e.g. "New Email"). Same visual weight as the `···` button — uses the content border color, no fill, `var(--text-default)` text.

**HTML:**
```html
<button class="section-action-btn" onclick="doSomething()">
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><!-- icon --></svg>
  New Email
</button>
```

**CSS:**
```css
.section-action-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 6px; padding: 0 12px; height: 32px; line-height: 1;
  border: 1px solid var(--border-content);
  border-radius: 6px; background: none;
  font-size: 13px; font-weight: 500; color: var(--text-default);
  cursor: pointer; white-space: nowrap;
  transition: background 0.12s;
}
.section-action-btn:hover { background: var(--bg-grey-f8); }
.section-action-btn svg { display: block; flex-shrink: 0; }
```

Position it 10px to the left of the `···` button using `gap: 10px` on the header flex row.

---

## H. Slide-In Detail Panel

Used for emails, meetings, and any record that opens a full-height side drawer without leaving the page.

### Structure

The email detail panel uses a **Gmail-style thread view**: a list of collapsible `.edp-thread-msg` items, with older messages collapsed and the latest expanded. There is no standalone sender bar — the sender name, recipients, date, and Reply/Reply All/Forward actions all live inside the expanded thread message.

**Compose area**: An **Intercom-style tabbed compose box** sits permanently at the bottom of the panel (outside the scrollable area). It has two tabs — **Reply** (default, white background) and **Note** (warm `#fffcf0` tint). Clicking Reply or Reply All in the thread header focuses the Reply tab. Internal notes submitted via the Note tab render inline below the thread messages in `#edp-comments-display`. The AI generate overlay appears between the scrollable area and the tabbed compose box.

```html
<div id="email-detail-panel" class="detail-panel">

  <!-- Top bar: icon + label + close -->
  <div class="edp-top-bar">
    <div class="edp-top-bar-icon"><!-- envelope svg --></div>
    <div class="edp-top-bar-label">View email</div>
    <button class="edp-close-btn" onclick="closeEmailPanel()">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1" y1="1" x2="10" y2="10"/><line x1="10" y1="1" x2="1" y2="10"/></svg>
    </button>
  </div>

  <!-- Subject bar (view mode only) -->
  <div class="edp-subject-bar">
    <div class="edp-subject" id="edp-subject"></div>
    <button class="edp-share-btn" onclick="toggleSharePopover(event)">
      <!-- share icon --> Share
    </button>
    <!-- Share popover anchored here -->
  </div>

  <!-- Scrollable body -->
  <div class="edp-body">

    <!-- VIEW MODE: thread messages + inline notes display -->
    <div class="edp-view-mode" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;">

      <!-- Thread messages (populated by JS via renderEmailThread) -->
      <div id="edp-body" class="edp-thread-list"></div>

      <!-- Internal notes display (injected by renderEmailComments, no toggle) -->
      <div id="edp-comments-display" class="edp-comments-display"></div>
    </div>

    <!-- COMPOSE MODE: new email (full-panel, hides view mode + tabbed compose) -->
    <div class="edp-compose-mode">
      <div style="padding:0 24px;flex-shrink:0;">
        <div class="edp-compose-field-row">
          <span class="edp-compose-field-label">To</span>
          <input class="edp-compose-input" id="edp-compose-to" placeholder="Add a recipient...">
        </div>
        <div class="edp-compose-field-row">
          <span class="edp-compose-field-label">Subject</span>
          <input class="edp-compose-input" id="edp-compose-subject" placeholder="Subject">
        </div>
      </div>
      <div class="edp-compose-body-area" style="padding:16px 24px 8px;">
        <div class="edp-compose-body-text" id="edp-compose-body"
             contenteditable="true"
             data-placeholder="Start typing your email, or create a template"></div>
      </div>
    </div>

  </div>

  <!-- AI generating overlay (between scroll area and tabbed compose) -->
  <div id="edp-ai-overlay" class="edp-ai-overlay">
    <div class="edp-ai-spinner"></div>
    <span>Generating follow-up email with AI...</span>
    <a class="edp-ai-cancel-link" onclick="cancelAI()">Cancel</a>
  </div>

  <!-- Tabbed compose area (always visible in view mode) -->
  <div class="edp-tabbed-compose" id="edp-tabbed-compose">
    <!-- Tab headers -->
    <div class="edp-tc-tabs">
      <button class="edp-tc-tab edp-tc-tab--active" id="edp-tc-tab-reply" onclick="switchComposeTab('reply')">Reply</button>
      <button class="edp-tc-tab" id="edp-tc-tab-note" onclick="switchComposeTab('note')">Note</button>
      <button class="edp-tc-help" title="Learn more">?</button>
    </div>

    <!-- Reply panel (default, white) -->
    <div id="edp-tc-panel-reply" class="edp-tc-panel edp-tc-panel--active">
      <div class="edp-tc-compose" id="edp-reply-compose"
           contenteditable="true"
           data-placeholder="Reply to this email..."></div>
      <div class="edp-tc-toolbar">
        <div class="edp-rt-left">
          <!-- Icons: fill="currentColor" — grey at rest, darker on hover -->
          <button class="edp-rt-btn" data-tooltip="Attach file"><!-- svg --></button>
          <button class="edp-rt-btn" data-tooltip="Insert variable"><!-- svg --></button>
          <button class="edp-rt-btn" data-tooltip="Email signature"><!-- svg --></button>
          <button class="edp-rt-btn" data-tooltip="Email templates"><!-- svg --></button>
        </div>
        <div class="edp-rt-right">
          <button class="edp-rt-btn edp-rt-discard" data-tooltip="Discard draft" onclick="clearReply()"><!-- trash svg --></button>
          <button class="edp-rt-ai-btn" onclick="generateWithAI()">
            <!-- sparkle svg fill="white" -->
            <span class="edp-rt-ai-tooltip">Generate a follow-up email with AI</span>
          </button>
          <button class="edp-rt-send"><!-- send svg --> Send email</button>
        </div>
      </div>
    </div>

    <!-- Note panel (warm tint) -->
    <div id="edp-tc-panel-note" class="edp-tc-panel edp-tc-panel--note">
      <div class="edp-tc-compose" id="edp-note-compose"
           contenteditable="true"
           data-placeholder="Add an internal note (@mention a teammate)..."></div>
      <div class="edp-tc-toolbar">
        <div class="edp-rt-left">
          <button class="edp-rt-btn" data-tooltip="Bold" style="font-weight:700;font-size:13px;">B</button>
          <button class="edp-rt-btn" data-tooltip="Italic" style="font-style:italic;font-size:13px;">i</button>
          <button class="edp-rt-btn" data-tooltip="Mention teammate" style="font-size:13px;font-weight:500;">@</button>
        </div>
        <div class="edp-rt-right">
          <button class="edp-tc-note-send" onclick="submitNoteFromTab()">Add note</button>
        </div>
      </div>
    </div>
  </div>

</div>
```

### CSS

```css
/* Panel shell */
.detail-panel {
  position: fixed; top: 0; right: 0;
  width: 680px; height: 100%;
  background: var(--bg-content);
  border-left: 1px solid var(--border-content);
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9999;
}
.detail-panel.open {
  transform: translateX(0);
  box-shadow: -4px 0 32px rgba(0,0,0,0.12);
}

/* Top bar */
.edp-top-bar {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; border-bottom: 1px solid var(--border-content);
  flex-shrink: 0;
}
.edp-top-bar-icon { color: var(--text-muted); display: flex; align-items: center; }
.edp-top-bar-label { flex: 1; font-size: 14px; font-weight: 500; }
.edp-close-btn {
  width: 28px; height: 28px; border-radius: 5px;
  background: none; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); transition: background 0.12s;
}
.edp-close-btn:hover { background: var(--bg-grey-f5); }

/* Subject bar */
.edp-subject-bar {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 20px; border-bottom: 1px solid var(--border-content);
  flex-shrink: 0; position: relative;
}
.edp-subject { flex: 1; font-size: 16px; font-weight: 600; }
.edp-share-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: 500;
  background: none; border: 1px solid var(--border-content);
  color: var(--text-muted); cursor: pointer; flex-shrink: 0;
  transition: background 0.12s;
}
.edp-share-btn:hover { background: var(--bg-grey-f8); }

/* Scrollable body */
.edp-body {
  flex: 1; overflow: hidden;
  display: flex; flex-direction: column;
}
/* View mode — NO padding (thread messages carry their own padding) */
.edp-body > .edp-view-mode { padding: 0; }

/* Thread list */
.edp-thread-list { flex-shrink: 0; }
.edp-thread-msg { border-bottom: 1px solid var(--border-content); }
.edp-thread-msg:last-child { border-bottom: none; }
.edp-thread-msg-header {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 14px 24px; cursor: pointer; transition: background 0.1s;
}
.edp-thread-msg-header:hover { background: var(--bg-grey-fa); }
.edp-thread-msg-meta { flex: 1; min-width: 0; }
.edp-thread-msg-sender { font-size: 13px; font-weight: 600; color: var(--text-default); }
/* Shown for collapsed messages (snippet) */
.edp-thread-msg-snip { font-size: 12px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* Shown for expanded last message (recipients) */
.edp-thread-msg-to { font-size: 12px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.edp-thread-msg-date { font-size: 12px; color: var(--text-muted); flex-shrink: 0; white-space: nowrap; }
.edp-thread-msg-actions { display: flex; gap: 2px; align-items: center; flex-shrink: 0; opacity: 0; transition: opacity 0.12s; }
.edp-thread-msg-header:hover .edp-thread-msg-actions { opacity: 1; }
.edp-thread-msg-body { font-size: 14px; line-height: 1.7; padding: 0 24px 20px; }
.edp-thread-msg-body p { margin: 0 0 14px; }
.edp-thread-msg-body p:last-child { margin-bottom: 0; }
/* Collapse/expand toggle */
.edp-thread-msg.collapsed .edp-thread-msg-body { display: none; }
.edp-thread-msg.collapsed .edp-thread-msg-snip { display: block; }
.edp-thread-msg:not(.collapsed) .edp-thread-msg-snip { display: none; }

/* Tabbed compose area — always visible in view mode, hidden in compose mode */
.edp-tabbed-compose { flex-shrink: 0; border-top: 1px solid var(--border-content); background: var(--bg-content); }
.email-detail-panel.compose-mode .edp-tabbed-compose { display: none; }

/* Tab headers */
.edp-tc-tabs { display: flex; align-items: center; padding: 0 16px; border-bottom: 1px solid var(--border-content); }
.edp-tc-tab {
  background: none; border: none; border-bottom: 2px solid transparent;
  padding: 9px 10px; font-size: 13px; font-weight: 500;
  color: var(--text-muted); cursor: pointer; margin-bottom: -1px; line-height: 1;
  transition: color 0.12s;
}
.edp-tc-tab:hover { color: var(--text-default); }
.edp-tc-tab--active { color: var(--text-default); border-bottom-color: #22AD01; }
.edp-tc-help {
  margin-left: auto; width: 22px; height: 22px; border-radius: 50%;
  border: none; background: none; display: flex; align-items: center; justify-content: center;
  color: var(--text-lighter); cursor: pointer; font-size: 12px; font-weight: 600;
}
.edp-tc-help:hover { color: var(--text-muted); background: var(--bg-grey-f5); }

/* Tab panels */
.edp-tc-panel { padding: 12px 16px 0; display: none; }
.edp-tc-panel--active { display: block; }
.edp-tc-panel--note { background: #fffcf0; }

/* Compose area (contenteditable) */
.edp-tc-compose {
  min-height: 72px; max-height: 150px; overflow-y: auto;
  font-size: 14px; color: var(--text-default); line-height: 1.65; outline: none;
}
.edp-tc-compose:empty::before {
  content: attr(data-placeholder); color: var(--text-lighter); pointer-events: none;
}
.edp-tc-panel--note .edp-tc-compose { background: #fffcf0; }

/* Toolbar row inside each panel */
.edp-tc-toolbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 0 10px;
}

/* Note "Add note" button (neutral grey, not green) */
.edp-tc-note-send {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 0 14px; height: 32px;
  background: var(--bg-grey-f1); color: var(--text-default);
  border: none; border-radius: 6px; font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background 0.12s; white-space: nowrap;
}
.edp-tc-note-send:hover { background: #e8e8e8; }

/* Notes display — injected below thread list, no collapsible toggle */
.edp-comments-display { border-top: 1px solid var(--border-content); padding: 14px 24px 4px; }
.edp-comments-display:empty { display: none; }

/* Comment items (used in edp-comments-display) */
.edp-comment-item { display: flex; gap: 10px; margin-bottom: 14px; }
.edp-comment-bubble {
  flex: 1; background: var(--bg-grey-f5); border-radius: 8px; padding: 8px 12px;
}
.edp-comment-author { font-size: 12px; font-weight: 600; margin-bottom: 2px; }
.edp-comment-text { font-size: 13px; line-height: 1.5; }
.edp-comment-time { font-size: 11px; color: var(--text-lighter); margin-top: 3px; }

/* AI generating overlay */
.edp-ai-overlay {
  display: none; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(34,173,1,0.06); border-top: 1px solid rgba(34,173,1,0.18);
  font-size: 13px; color: #22AD01; flex-shrink: 0;
}
.edp-ai-overlay.visible { display: flex; }
.edp-ai-spinner {
  width: 14px; height: 14px; border: 2px solid rgba(34,173,1,0.25);
  border-top-color: #22AD01; border-radius: 50%;
  animation: edp-spin 0.7s linear infinite; flex-shrink: 0;
}
@keyframes edp-spin { to { transform: rotate(360deg); } }
.edp-ai-cancel-link { margin-left: auto; cursor: pointer; text-decoration: underline; color: #22AD01; }

/* Compose mode: view-only elements hidden, compose elements shown */
.email-detail-panel.compose-mode .edp-view-mode { display: none !important; }
.email-detail-panel .edp-compose-mode { display: none; }
.email-detail-panel.compose-mode .edp-compose-mode {
  display: flex; flex-direction: column; flex: 1; min-height: 0;
}
.email-detail-panel.compose-mode .edp-subject-bar { display: none; }

/* Compose fields */
.edp-compose-field-row {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 0; border-bottom: 1px solid var(--border-content); flex-shrink: 0;
}
.edp-compose-field-label {
  font-size: 13px; color: var(--text-muted); font-weight: 500;
  flex-shrink: 0; width: 50px;
}
.edp-compose-input {
  flex: 1; border: none; outline: none;
  font-size: 14px; color: var(--text-default);
  background: transparent; font-family: inherit;
}
.edp-compose-input::placeholder { color: var(--text-lighter); }
.edp-compose-body-area {
  flex: 1; overflow-y: auto;
  display: flex; flex-direction: column;
}
.edp-compose-body-text {
  flex: 1; min-height: 120px;
  font-size: 14px; color: var(--text-default); line-height: 1.65; outline: none;
}
.edp-compose-body-text:empty::before {
  content: attr(data-placeholder); color: var(--text-lighter); pointer-events: none;
}

/* Toolbar layout (shared by Reply and Note panels) */
.edp-rt-left { display: flex; align-items: center; gap: 2px; }
.edp-rt-right { display: flex; align-items: center; gap: 8px; }
.edp-rt-btn {
  width: 30px; height: 30px; border-radius: 5px;
  background: none; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); transition: background 0.12s;
  position: relative;
}
.edp-rt-btn:hover { background: var(--bg-grey-f5); color: var(--text-default); }

/* Toolbar button tooltips — appear ABOVE the button */
.edp-rt-btn[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%);
  background: #1a1a1a; color: #fff;
  padding: 4px 8px; border-radius: 5px;
  font-size: 12px; font-weight: 500; white-space: nowrap;
  pointer-events: none; opacity: 0; transition: opacity 0.12s; z-index: 10;
}
.edp-rt-btn[data-tooltip]:hover::after { opacity: 1; }

/* Discard button */
.edp-rt-discard:hover { color: #eb5757; background: #fff0f0; }

/* Send button — Bonsai Green (NOT blue) */
.edp-rt-send {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 0 14px; height: 32px;
  background: #22AD01; color: white; border: none; border-radius: 6px;
  font-size: 13px; font-weight: 500; cursor: pointer;
  transition: background 0.12s;
}
.edp-rt-send:hover { background: #1c9701; }

/* AI compose button */
.edp-rt-ai-btn {
  display: inline-flex; align-items: center; gap: 5px; position: relative;
  padding: 0 12px; height: 32px; background: #22AD01; color: white;
  border: none; border-radius: 6px; font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background 0.12s; white-space: nowrap;
}
.edp-rt-ai-btn:hover { background: #1c9701; }
/* Tooltip appears ABOVE the AI button */
.edp-rt-ai-btn .edp-rt-ai-tooltip {
  position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
  background: #1a1a1a; color: #fff; padding: 4px 8px; border-radius: 5px;
  font-size: 12px; font-weight: 500; white-space: nowrap;
  pointer-events: none; opacity: 0; transition: opacity 0.15s; z-index: 20;
}
.edp-rt-ai-btn:hover .edp-rt-ai-tooltip { opacity: 1; }
```

### Gmail-Style Thread View (JS)

The thread list is rendered dynamically. All messages except the last are collapsed (show snippet). The last is expanded (shows recipients + body + Reply/Reply All/Forward actions).

```js
// Store Attio icon SVGs as variables for reuse in innerHTML strings
var SVG_REPLY = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none">...(Attio reply path, fill="currentColor")...</svg>';
var SVG_REPLY_ALL = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none">...(Attio reply-all path, fill="currentColor")...</svg>';
var SVG_FORWARD = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none">...(Attio forward path, fill="currentColor")...</svg>';

function renderEmailThread(idx) {
  var d = emailData[idx];
  var html = '';
  for (var i = 0; i < d.threads.length; i++) {
    var msg = d.threads[i];
    var isLast = (i === d.threads.length - 1);
    var collapsed = !isLast;
    html += '<div class="edp-thread-msg' + (collapsed ? ' collapsed' : '') + '" onclick="toggleThreadMsg(this)">';
    html += '<div class="edp-thread-msg-header">';
    html += '<div class="user-avatar avatar-xs" style="background-image:url(\'' + msg.senderAvatar + '\');flex-shrink:0;"></div>';
    html += '<div class="edp-thread-msg-meta">';
    html += '<div class="edp-thread-msg-sender">' + msg.senderName + '</div>';
    if (collapsed) {
      // Collapsed: show snippet
      html += '<div class="edp-thread-msg-snip">' + msg.snip + '</div>';
    } else {
      // Expanded last message: show recipients
      html += '<div class="edp-thread-msg-to">to ' + msg.to + '</div>';
    }
    html += '</div>';
    html += '<span class="edp-thread-msg-date">' + msg.date + '</span>';
    html += '<div class="edp-thread-msg-actions">';
    if (!collapsed) {
      // Reply / Reply All / Forward only on expanded last message
      html += '<button class="edp-action-btn" data-tooltip="Reply" onclick="event.stopPropagation();openReply()">' + SVG_REPLY + '</button>';
      html += '<button class="edp-action-btn" data-tooltip="Reply all" onclick="event.stopPropagation();openReply()">' + SVG_REPLY_ALL + '</button>';
      html += '<button class="edp-action-btn" data-tooltip="Forward" onclick="event.stopPropagation();">' + SVG_FORWARD + '</button>';
    }
    html += '</div>';
    html += '</div>'; // end header
    html += '<div class="edp-thread-msg-body">' + msg.body + '</div>';
    html += '</div>'; // end thread-msg
  }
  document.getElementById('edp-body').innerHTML = html;
}

function toggleThreadMsg(el) {
  el.classList.toggle('collapsed');
}
```

**Key rules:**
- No standalone sender bar — sender name, recipients (`to ...`), date, and action buttons all live inside the expanded thread message
- `renderEmailThread` is called from `openEmailPanel`, which only needs to set `edp-subject` — not sender-bar DOM elements
- Call `switchComposeTab('reply')` inside `openEmailPanel` to reset to the Reply tab when opening a new email

### Notes Display (JS)

Internal notes are rendered by `renderEmailComments` directly into `#edp-comments-display` below the thread list — no collapsible toggle. New notes are added via the Note tab with `submitNoteFromTab`.

```js
function renderEmailComments(idx) {
  var comments = emailData[idx].comments || [];
  var displayEl = document.getElementById('edp-comments-display');
  var html = '';
  for (var i = 0; i < comments.length; i++) {
    var c = comments[i];
    html += '<div class="edp-comment-item">';
    html += '<div class="user-avatar avatar-xs" style="background-image:url(\'' + c.avatar + '\');flex-shrink:0;margin-top:2px;"></div>';
    html += '<div class="edp-comment-bubble">';
    html += '<div class="edp-comment-author">' + c.author + '</div>';
    html += '<div class="edp-comment-text">' + c.text + '</div>';
    html += '<div class="edp-comment-time">' + c.time + '</div>';
    html += '</div></div>';
  }
  displayEl.innerHTML = html;
}

function submitNoteFromTab() {
  var compose = document.getElementById('edp-note-compose');
  var text = compose ? compose.innerText.trim() : '';
  if (!text) return;
  emailData[currentEmailIdx].comments.push({
    author: 'You',
    avatar: 'YOUR_AVATAR_URL',
    text: text,
    time: 'Just now'
  });
  compose.innerHTML = '';
  renderEmailComments(currentEmailIdx);
  // Scroll thread area to reveal new note
  var viewMode = document.querySelector('.edp-view-mode');
  if (viewMode) viewMode.scrollTop = viewMode.scrollHeight;
}
```

### Tabbed Compose — Tab Switching (JS)

```js
function switchComposeTab(tab) {
  var replyTab = document.getElementById('edp-tc-tab-reply');
  var noteTab  = document.getElementById('edp-tc-tab-note');
  var replyPanel = document.getElementById('edp-tc-panel-reply');
  var notePanel  = document.getElementById('edp-tc-panel-note');
  var wrap = document.getElementById('edp-tabbed-compose');
  if (tab === 'reply') {
    replyTab.classList.add('edp-tc-tab--active');
    noteTab.classList.remove('edp-tc-tab--active');
    replyPanel.classList.add('edp-tc-panel--active');
    notePanel.classList.remove('edp-tc-panel--active');
    wrap.style.background = '';
    document.getElementById('edp-reply-compose').focus();
  } else {
    noteTab.classList.add('edp-tc-tab--active');
    replyTab.classList.remove('edp-tc-tab--active');
    notePanel.classList.add('edp-tc-panel--active');
    replyPanel.classList.remove('edp-tc-panel--active');
    wrap.style.background = '#fffcf0';
    document.getElementById('edp-note-compose').focus();
  }
}

// Reply / Reply All buttons in thread header call this — just focuses the tab
function openReply() {
  switchComposeTab('reply');
  document.getElementById('edp-reply-compose').focus();
}

function clearReply() {
  var el = document.getElementById('edp-reply-compose');
  if (el) el.innerHTML = '';
}
```

### AI Compose (JS)

```js
var aiTimer = null;

function generateWithAI() {
  switchComposeTab('reply'); // ensure Reply tab is active
  document.getElementById('edp-ai-overlay').classList.add('visible');
  aiTimer = setTimeout(function() {
    document.getElementById('edp-ai-overlay').classList.remove('visible');
    // inject AI-generated draft into reply compose
    document.getElementById('edp-reply-compose').innerText = 'Your AI-drafted reply here...';
    document.getElementById('edp-reply-compose').focus();
  }, 1800);
}

function cancelAI() {
  if (aiTimer) { clearTimeout(aiTimer); aiTimer = null; }
  document.getElementById('edp-ai-overlay').classList.remove('visible');
}
```

### Inbox-Style Email List (Tab View)

The Emails tab uses an inbox-style list — NOT a timeline/activity-feed. Each row is a `.email-thread-row`.

```html
<!-- Tab header: same structure as Meetings tab -->
<div class="tab-section-title-row">
  <span class="tab-section-title">Emails</span>
</div>
<div style="display:flex;align-items:center;justify-content:space-between;padding:0 0 14px 0;">
  <div style="display:flex;align-items:center;gap:8px;">
    <!-- Search -->
    <div style="position:relative;display:flex;align-items:center;">
      <svg style="position:absolute;left:9px;color:var(--text-lighter);pointer-events:none;" width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5.5" cy="5.5" r="4"/><path d="M9.5 9.5l2 2" stroke-linecap="round"/></svg>
      <input type="text" class="form-field input-smd" placeholder="Search emails..." style="padding-left:30px;width:220px;">
    </div>
    <button class="btn btn-default btn-smd">
      <!-- filter icon --> Filters
    </button>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <button class="email-compose-btn" onclick="openComposePanel()">
      <!-- envelope icon --> New Email
    </button>
    <div class="email-dots-wrap">
      <a class="btn btn-default btn-smd btn-dropdown-dots" onclick="toggleEmailDotsMenu(event)">
        <!-- 3-dot svg -->
      </a>
      <!-- dropdown menu -->
    </div>
  </div>
</div>

<!-- Inbox list -->
<div class="email-inbox-list">
  <div class="email-thread-row email-thread-unread" onclick="openEmailPanel(0)">
    <div class="email-thread-dot-col">
      <div class="email-thread-unread-dot"></div>
    </div>
    <div class="email-thread-avatar-col">
      <div class="user-avatar avatar-xs" style="background-image:url('...');"></div>
    </div>
    <div class="email-thread-content">
      <div class="email-thread-top">
        <span class="email-thread-subject">RE: Brand refresh timeline</span>
        <span class="email-thread-count">3</span>
        <span class="email-thread-date">Jan 22</span>
      </div>
      <div class="email-thread-participants">Tom Bradley, Michael Fawler, Jessica Moore</div>
      <div class="email-thread-preview">I've pushed the mood board review to Thursday...</div>
    </div>
  </div>
  <!-- more rows... -->
</div>
```

```css
/* Inbox row */
.email-thread-row {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 8px; border-bottom: 1px solid var(--border-content);
  cursor: pointer; border-radius: 6px; margin: 0 -8px; transition: background 0.1s;
}
.email-thread-row:hover { background: var(--bg-grey-fa); }
.email-thread-unread-dot { width: 8px; height: 8px; border-radius: 50%; background: #1a73e8; flex-shrink: 0; }
.email-thread-dot-col { width: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; padding-top: 4px; }
.email-thread-avatar-col { flex-shrink: 0; }
.email-thread-content { flex: 1; min-width: 0; }
.email-thread-top { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
.email-thread-subject { font-size: 13px; font-weight: 500; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.email-thread-unread .email-thread-subject { font-weight: 700; }
.email-thread-count {
  font-size: 11px; color: var(--text-muted);
  background: var(--bg-grey-f5); border-radius: 8px; padding: 1px 5px; flex-shrink: 0;
}
.email-thread-date { font-size: 12px; color: var(--text-muted); flex-shrink: 0; white-space: nowrap; }
.email-thread-participants { font-size: 12px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-bottom: 1px; }
.email-thread-preview { font-size: 12px; color: var(--text-lighter); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```

### View / Compose Mode Toggle

Toggle between view and compose mode by adding/removing the `compose-mode` class on the panel element. Update the top bar label in JS.

```js
function openComposePanel() {
  var panel = document.getElementById('my-detail-panel');
  panel.classList.add('compose-mode', 'open');
  document.querySelector('.edp-top-bar-label').textContent = 'Compose Email';
  // Note: edp-tabbed-compose is hidden automatically via CSS when compose-mode is active
  panelJustOpened = true; // prevent click-outside from closing immediately
}

function openViewPanel(idx) {
  var panel = document.getElementById('my-detail-panel');
  panel.classList.remove('compose-mode');
  document.querySelector('.edp-top-bar-label').textContent = 'View email';
  // populate fields from data...
  panel.classList.add('open');
  panelJustOpened = true;
}

function closePanel() {
  var panel = document.getElementById('my-detail-panel');
  panel.classList.remove('open', 'compose-mode');
  document.querySelector('.edp-top-bar-label').textContent = 'View email';
}
```

### Click-Outside to Close — `justOpened` Flag

When a button outside the panel opens it, the `document` click listener fires on the **same event** and immediately closes the panel. Use a `panelJustOpened` flag to skip the close for that one tick.

```js
var panelJustOpened = false;

// In your open function:
panel.classList.add('open');
panelJustOpened = true;

// In your global click listener:
document.addEventListener('click', function(e) {
  if (panelJustOpened) {
    panelJustOpened = false;
    return; // skip close check for this one event
  }
  var panel = document.getElementById('my-detail-panel');
  if (panel && panel.classList.contains('open') && !e.target.closest('#my-detail-panel')) {
    closePanel();
  }
});
```

### Share Popover (Inside Panel)

The Share button inside `.edp-subject-bar` opens an access popover anchored to the subject bar. Use the same `email-access-popover` class as the Manage Access popover — the position, width, padding, and shadow are identical. The popover title is set dynamically to the current email subject.

```html
<!-- Inside .edp-subject-bar -->
<div class="email-access-popover" id="edp-share-popover" style="display:none; z-index:200;">
  <div class="email-access-popover-title" id="edp-share-title">Email Access</div>
  <div class="email-access-workspace-row">
    <div class="workspace-avatar">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><polygon points="8,2 14,14 2,14"/></svg>
    </div>
    <span class="workspace-name">Workspace Access</span>
    <div class="access-select" onclick="toggleShareAccessLevel()">
      <span id="edp-share-access-label">Access</span>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l3 3 3-3"/></svg>
    </div>
  </div>
  <div class="email-access-popover-description" id="edp-share-description">Bodies and attachments of this email are visible to all workspace members.</div>
  <div class="email-access-search-row">
    <div class="form-group" style="flex:1;margin:0;">
      <input type="text" class="form-field input-sm" placeholder="Search and add users" />
    </div>
    <button class="btn btn-primary btn-smd">Grant access</button>
  </div>
  <div class="email-access-user-row">
    <div class="user-avatar avatar-xs" style="background-image: url('...');"></div>
    <span class="email-access-user-name">Tom Bradley <span style="color:var(--text-muted);font-weight:400;">(You)</span></span>
    <span class="email-access-user-status">Access</span>
  </div>
</div>
```

```js
var sharePopoverOpen = false;

function toggleSharePopover(e) {
  e.stopPropagation();
  sharePopoverOpen = !sharePopoverOpen;
  document.getElementById('edp-share-popover').style.display = sharePopoverOpen ? 'block' : 'none';
  if (sharePopoverOpen) {
    var d = emailData[currentEmailIdx];
    document.getElementById('edp-share-title').textContent = '"' + d.subject + '"';
  }
}

// In global click listener — close when clicking outside subject bar:
if (sharePopoverOpen && !e.target.closest('.edp-subject-bar')) {
  sharePopoverOpen = false;
  document.getElementById('edp-share-popover').style.display = 'none';
}
```

### Mid-Panel Action Button Tooltips (Appear Below)

For action buttons in the middle of the panel (Reply, Reply All, Forward), tooltips appear **below** the button to avoid being clipped by the top bar.

```css
.edp-action-btn { position: relative; }
.edp-action-btn::after {
  content: attr(data-tooltip);
  position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%);
  background: #1a1a1a; color: #fff;
  padding: 4px 8px; border-radius: 5px;
  font-size: 12px; font-weight: 500; white-space: nowrap;
  pointer-events: none; opacity: 0; transition: opacity 0.12s;
}
.edp-action-btn:hover::after { opacity: 1; }
```

```html
<button class="edp-action-btn" data-tooltip="Reply" onclick="openReply()"><!-- svg --></button>
<button class="edp-action-btn" data-tooltip="Reply all" onclick="openReply()"><!-- svg --></button>
<button class="edp-action-btn" data-tooltip="Forward"><!-- svg --></button>
```

---

## I. Additional Known CSS Traps

### `application.css` global `a:hover` overrides link colors

The global `a:hover` rule in `application.css` turns all hovered links green (`var(--color-primary)`) and may add underlines. If you need a link to stay a specific color on hover (e.g. a "View Email" link that must remain green regardless of state, or a toggle `<a>` that must stay dark grey), you **must** use `!important` on all state selectors:

```css
.my-link,
.my-link:hover,
.my-link:visited,
.my-link:active {
  color: var(--color-primary) !important;
  text-decoration: none !important;
}
```

The same applies to `<a>` tags used as toggle buttons (e.g. "Add Note") — lock `color: var(--text-default)` and `background` explicitly with `!important` or they'll turn green on hover.

### Text truncation in flex children requires `overflow: hidden` on the parent

Adding `text-overflow: ellipsis; white-space: nowrap; overflow: hidden` to a child element is not enough if the parent is a flex item. The flex item needs `min-width: 0` (flex items default to `min-width: auto`, which prevents shrinking) **and** the flex item must have `overflow: hidden`:

```css
/* Parent flex item */
.activity-item-body { flex: 1; min-width: 0; overflow: hidden; }

/* Child text element */
.email-preview-text {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
```

### `tab-section-title-row` — don't override `margin-bottom`

The `.tab-section-title-row` class has `margin-bottom: 20px` by default. This is the correct gap between the section title ("Emails", "Meetings", etc.) and the toolbar row below it. **Do not set `style="margin-bottom:0;"`** — it collapses the gap and makes the title row feel cramped. All tab section headers should use the same `20px` rhythm.

### First toolbar button tooltip clips on the left edge

When the leftmost `.edp-rt-btn` sits near the left edge of the panel, the default tooltip positioning (`left: 50%; transform: translateX(-50%)`) causes the tooltip to overflow off-screen to the left. Fix with:

```css
.edp-rt-left .edp-rt-btn:first-child[data-tooltip]::after {
  left: 0;
  transform: none;
}
```

### Toolbar icon colors — use `currentColor`, not hardcoded green

Composer toolbar buttons (Attach File, Insert Variable, Signature, Templates) should render in **grey** (`var(--text-muted)`) and darken on hover, matching the style of the `+` add button. Use `fill="currentColor"` on their SVGs — the existing `.edp-rt-btn` and `.edp-rt-btn:hover` CSS rules handle the colour transition automatically. Never set `fill="#22AD01"` on these icons.

Only the AI button and Send button use hardcoded green (`#22AD01`) because they are action initiators, not neutral format/attach tools.
