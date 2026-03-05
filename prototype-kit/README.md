# Bonsai Prototype Kit

Generate UI prototypes that look exactly like Bonsai using Claude or any AI tool.

## What's Inside

| File | Purpose |
|------|---------|
| `bonsai-prototype-kit.md` | Design system reference — component catalog, tokens, utility classes, rules |
| `layout.html` | Base HTML template with sidebar + top bar + content area |
| `styles/application.css` | Full compiled CSS bundle from the Bonsai SCSS (2.1MB) |
| `fonts/` | Geist, Proxima Nova, FF Meta Serif, ionicons font files |

## How to Use with Claude

### Option 1: Claude Projects (recommended)
1. Create a new Claude project
2. Add `bonsai-prototype-kit.md` as **project knowledge**
3. Start chatting: "Build me a contacts page with a table showing name, email, company, and tags"
4. Claude generates HTML using real Bonsai CSS classes
5. Preview the HTML with the CSS bundle (see below)

### Option 2: Paste as context
1. Copy the contents of `bonsai-prototype-kit.md`
2. Paste it at the start of your Claude conversation
3. Ask Claude to build your prototype

### Option 3: Claude Code
1. Reference `bonsai-prototype-kit.md` and `layout.html` when asking Claude Code to create prototypes
2. Claude Code can directly create HTML files in `prototype-kit/` that reference `styles/application.css`

## How to Preview Prototypes

### Quick preview (just open in browser)
1. Duplicate `layout.html` as your prototype file (e.g., `companies-page.html`)
2. Replace the content inside `<main>` with your prototype HTML
3. Open the file in your browser — it will look like Bonsai

### With live reload
```bash
# Using any static file server:
cd prototype-kit
npx serve .
# Then open http://localhost:3000/layout.html
```

## How to Update the CSS Bundle

If the Bonsai styles change and you need to recompile:

```bash
cd /path/to/Bonsai
sass -I app/assets/stylesheets -I app/assets/fonts -I vendor/assets/stylesheets -I node_modules/bootstrap-sass/assets/stylesheets -I node_modules --quiet-deps --no-source-map --style=expanded app/assets/stylesheets/application.scss:prototype-kit/styles/application.css
```

Then update font paths:
```bash
sed -i '' 's|url("Geist-|url("../fonts/Geist-|g; s|url("ProximaNova-|url("../fonts/ProximaNova-|g; s|url("ff-meta-serif-|url("../fonts/ff-meta-serif-|g; s|url("AngeliquemadouceColombe|url("../fonts/AngeliquemadouceColombe|g; s|url("ionicons|url("../fonts/ionicons|g; s|url("paymentfont|url("../fonts/paymentfont|g' prototype-kit/styles/application.css
```
