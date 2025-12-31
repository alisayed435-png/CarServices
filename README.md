# Grid Auto - Mobile Vehicle Services Website Demo

A clean, mobile-first 1-page website demo for **Grid Auto**, a London-based mobile vehicle services business offering auto locksmith, diagnostics, and battery support.

## 📁 File Structure

```
Key/
├── demo/
│   ├── index.html      # Main website page
│   ├── styles.css      # All styling
│   ├── script.js       # Minimal JavaScript
│   └── assets/         # SVG icons (inline in HTML)
├── copy.md             # All text content (easy editing)
└── README.md           # This file
```

---

## 🚀 How to Run Locally

**Option 1: Simply open the file**
1. Navigate to the `demo` folder
2. Double-click `index.html` to open in your browser

**Option 2: Using a local server (recommended)**
```bash
# Using Python 3
cd demo
python -m http.server 8000
# Open http://localhost:8000

# Using Node.js (npx)
cd demo
npx serve
```

**Option 3: VS Code Live Server**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## 📞 Where to Change Contact Details

All contact information needs to be updated in `demo/index.html`:

| Find this | Replace with |
|-----------|-------------|
| `+447XXXXXXXXX` | Your phone (no spaces, no +) e.g. `447712345678` |
| `+44 7XXX XXX XXX` | Display number e.g. `+44 7712 345 678` |
| `hello@gridauto.co.uk` | Your actual email |

**Locations in the HTML to update:**
- Header (top bar) - Call and WhatsApp buttons
- Hero section - Call and WhatsApp buttons  
- Final CTA section - Call and WhatsApp buttons
- Mobile sticky bar - Call and WhatsApp buttons
- Footer - All contact details

**Quick find/replace:** Use your editor's find/replace feature:
- Find: `447XXXXXXXXX` → Replace with your number
- Find: `+44 7XXX XXX XXX` → Replace with your display number
- Find: `hello@gridauto.co.uk` → Replace with your email

---

## 🌐 How to Deploy (Static Hosting)

This is a pure static website (HTML + CSS + JS). Deploy to any static host:

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `demo` folder onto the Netlify dashboard
3. Done! You'll get a URL like `random-name.netlify.app`

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Create new project → Upload the `demo` folder
3. Deploy

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload the contents of `demo` folder
3. Go to Settings → Pages → Select "main" branch
4. Your site will be at `username.github.io/repo-name`

---

## 🏗️ How to Rebuild on WordPress

### Option A: Using Elementor (Recommended)

**Requirements:** WordPress + Elementor Free or Pro

1. **Install WordPress** on your hosting
2. **Install Elementor** plugin (Starter Templates or Hello theme works well)
3. **Create a new page** called "Home"

**Build the sections:**

| Section | Elementor Widgets |
|---------|------------------|
| **Header** | Use theme header or Elementor Header widget. Add Heading + 2 Button widgets |
| **Hero** | Section with Heading, Text Editor, Icon List, 2 Button widgets |
| **Services** | 3-column layout with Icon Box or Image Box widgets |
| **How It Works** | 3-column layout with Counter + Heading + Text widgets |
| **Areas & Hours** | 2-column layout with Icon + Text Editor widgets |
| **FAQ** | Accordion widget |
| **Testimonials** | 3-column layout with Testimonial widgets |
| **CTA Band** | Section with dark background, Heading + 2 Buttons |
| **Footer** | Use theme footer or custom footer with Text + Social Icons |

**Button links:**
- Call button: `tel:+447712345678`
- WhatsApp: `https://wa.me/447712345678?text=Hi%20Grid%20Auto`

### Option B: Using Gutenberg (Block Editor)

1. Use a block-friendly theme (Astra, Neve, or Kadence free)
2. Create a new page → Edit with blocks
3. Use these blocks:
   - **Cover** block for hero
   - **Columns** block for services and steps
   - **Group** block for sections with backgrounds
   - **Buttons** block for CTAs
   - **Details** block for FAQ (WP 6.3+)
4. Install "Stackable" or "Spectra" plugin for more design options

---

## 🎨 How to Rebuild on Wix

1. **Sign up** at [wix.com](https://wix.com)
2. **Choose** a blank template or "Services" category template
3. **Add sections** using the Wix Editor:

| Section | Wix Elements |
|---------|-------------|
| **Header** | Add Header → Strip with Logo + 2 Buttons |
| **Hero** | Strip with Text + Icon List + Buttons |
| **Services** | 3-column strip with Repeater or List/Grid |
| **How It Works** | Strip with 3 vertical layouts (number + title + text) |
| **Areas & Hours** | 2-column strip with Text + Icons |
| **FAQ** | Wix FAQ element (built-in) |
| **Testimonials** | Testimonials strip element |
| **CTA Band** | Strip with dark background + Buttons |
| **Footer** | Footer element with contact info |

**For buttons:**
- Click button → Link → Phone → Enter number
- For WhatsApp: Link → Web Address → `https://wa.me/447712345678`

**Mobile version:**
- Wix automatically creates mobile version
- Check Mobile Editor to adjust spacing
- Add sticky mobile CTA using Mobile Actions Bar

---

## 🎬 Client Demo Script

Here's what to show your client when presenting the demo:

1. **Open the website** in a browser — notice the clean, professional design
2. **Scroll down** slowly — show smooth scrolling through all sections
3. **Click "Call Now"** button — shows it triggers a phone call
4. **Click "WhatsApp"** button — opens WhatsApp with a pre-filled message
5. **Click an FAQ question** — shows the accordion expanding
6. **Resize the browser window** to mobile size — show responsive design
7. **On mobile view** — show the sticky bottom CTA bar always visible
8. **Scroll to footer** — show contact details and disclaimer

**Key talking points:**
- "All sections are in one scrollable page — easy for customers"
- "Click-to-call and WhatsApp buttons work on mobile devices"
- "No complex booking system — customers contact you directly"
- "Fast loading — no heavy images or frameworks"
- "Easy to recreate on WordPress or Wix when you're ready for production"

---

## ✅ Features Included

- [x] Mobile-first responsive design
- [x] Click-to-call functionality
- [x] Click-to-WhatsApp with pre-filled message
- [x] Sticky header
- [x] Mobile sticky CTA bar
- [x] Smooth scroll navigation
- [x] Accessible (semantic HTML, focus states, good contrast)
- [x] SEO meta tags and Open Graph tags
- [x] Fast loading (no external dependencies)
- [x] Print styles included

---

## 📝 License

This demo was created for Grid Auto. All rights reserved.
