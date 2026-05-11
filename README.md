# Evergreen Tea House ☕

<div align="center">

![Tea House Logo](assets/tea-logo.svg)

![Project Preview](assets/preview.svg)

**A Modern, Multi-Page Website for a Cozy Tea House**

Featuring artisan teas, calming flavors, and warm moments with smooth animations and interactive elements.

</div>

---

## 🌿 Features

- **🏠 5 Complete Pages** – Home, Menu, About, Contact, and Gallery
- **📱 Responsive Design** – Beautiful UI that works across all devices
- **✨ Interactive Effects** – Smooth scrolling, hover states, and animations
- **🎨 Modern Styling** – Gradients, glassmorphism, and subtle shadows
- **🧭 Easy Navigation** – Clean menu and mobile-friendly layout
- **🛒 Shopping Cart** – Add teas to cart with localStorage persistence
- **💬 AI Chat Assistant** – Tea recommendations and customer support

## 🛠️ Tech Stack

- **HTML5** – Semantic markup for accessibility and structure
- **CSS3** – Responsive styling, transitions, and animations
- **JavaScript** – Page interactions and UI enhancements
- **LocalStorage** – Cart and data persistence

---

## 📄 Page Overview

### 🏠 **Home Page** (`index.html`)
Welcome page with hero section featuring:
- Eye-catching hero banner with gradient background
- Featured tea collection with cards
- Tea selection panel
- Newsletter subscription
- Quick access to menu and information

### 🍵 **Menu Page** (`menu.html`)
Comprehensive tea menu featuring:
- 6 premium tea varieties (Green Tea, Chamomile, Chai, Black, White, Oolong)
- Seasonal specials section
- Detailed descriptions and pricing
- Tea selection interface
- Direct ordering capability

### ℹ️ **About Page** (`about.html`)
Company story and values including:
- Brand journey and mission
- Core values (Quality, Community, Sustainability, Education)
- Team member profiles with roles
- Company history and vision

### 📞 **Contact Page** (`contact.html`)
Communication hub with:
- Store location and hours
- Phone and email contact
- Contact form for inquiries
- Interactive map placeholder
- Operating hours display

### 🖼️ **Gallery Page** (`gallery.html`)
Visual showcase featuring:
- 8 tea house moments and scenes
- Upcoming events section
- Monthly tea tastings
- Meditation and wellness events
- Workshop announcements

### ⚙️ **Admin Dashboard** (`admin.html`)
Full admin management system:
- Login authentication
- Dashboard with key metrics
- Tea management (add/edit/delete)
- Order tracking and management
- Analytics and sales reports
- Settings configuration

## 📁 Project Structure

```
unstop/
├── 📄 HTML Pages
│   ├── index.html           # 🏠 Home page with hero section
│   ├── menu.html            # 🍵 Tea menu with 6+ varieties
│   ├── about.html           # ℹ️  Brand story and team
│   ├── contact.html         # 📞 Contact & messaging
│   ├── gallery.html         # 🖼️  Visual showcase & events
│   └── admin.html           # ⚙️  Admin dashboard (login: admin/password123)
│
├── 🎨 Styling
│   ├── styles.css           # Global styling, animations, responsive design
│   └── admin.css            # Admin dashboard specific styles
│
├── ⚙️ JavaScript
│   ├── script.js            # Interactive features, cart, chat
│   └── admin.js             # Admin functionality and data management
│
├── 📦 Assets
│   ├── preview.svg          # Project preview/demo image
│   └── tea-logo.svg         # Tea house logo
│
└── 📝 Documentation
    └── README.md            # This file
```

## 🚀 Quick Start Guide

### Option 1: Python HTTP Server (Recommended)
```bash
cd /home/kalaiyarasan/Projects/unstop
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Direct File Opening
Simply double-click `index.html` to open it in your default browser.

### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 🔐 Admin Panel Access

**Demo Credentials:**
- **Username:** `admin`
- **Password:** `password123`

**Admin Features:**
- View sales dashboard and analytics
- Manage tea inventory
- Track customer orders
- Update store settings

Navigate to `admin.html` after opening the site to access the dashboard.

---

## 💡 Key Features in Detail

### 🛒 **Shopping Cart**
- Add teas to cart with a single click
- Cart persists using browser localStorage
- View cart summary and proceed to checkout
- Remove items individually

### 💬 **AI Tea Assistant Chat**
- Get tea recommendations based on mood
- Ask about tea varieties and their benefits
- Learn about store hours and location
- Available on all pages

### ✨ **Smooth Animations**
- Page transitions with fade-in effects
- Hover animations on cards and buttons
- Scroll-triggered animations
- Floating elements and subtle micro-interactions

### 📱 **Fully Responsive**
- Mobile-optimized navigation
- Touch-friendly buttons and modals
- Adaptable layouts for all screen sizes
- Cross-browser compatibility

## 🍃 Tea Varieties Available

| Tea Name | Flavor Profile | Benefits | Price |
|----------|----------------|----------|-------|
| 🟢 Classic Green Tea | Fresh, grassy, clean | Boosts focus | $4.50 |
| 🌼 Chamomile Calm | Soft floral notes | Relaxation | $4.00 |
| 🧡 Spiced Chai | Warm spices, aromatic | Energy & comfort | $5.00 |
| ⬛ Black Tea | Bold, malty, caramel | Antioxidants | $4.50 |
| ⚪ White Tea | Delicate, fruity | High antioxidants | $5.50 |
| 🟤 Oolong Tea | Earthy, nutty | Digestion support | $5.00 |

### Seasonal Specials
- 🍂 **Autumn Harvest Blend** – Cinnamon & apple blend ($6.00)
- 🌸 **Jasmine Pearl** – Green tea with jasmine flowers ($7.00)

---

## ✨ What's Included

- ✅ Clean, modern UI with professional tea house branding
- ✅ Fully responsive design for mobile, tablet, and desktop
- ✅ Smooth scroll and hover animations throughout
- ✅ Multi-page navigation for complete website experience
- ✅ Gallery page with images and upcoming events
- ✅ Working shopping cart with localStorage
- ✅ AI-powered chat assistant for customer support
- ✅ Admin dashboard for business management
- ✅ Contact forms with validation
- ✅ Newsletter subscription system

---

## 📊 Page Statistics

- **Total Pages:** 7 (5 public + 1 admin + 1 assets)
- **Total Tea Items:** 8 (6 regular + 2 seasonal)
- **Animations:** 15+ smooth transitions
- **Responsive Breakpoints:** 3 (Mobile, Tablet, Desktop)
- **JavaScript Functions:** 30+ interactive handlers

## 📝 File Reference

### HTML Files
| File | Purpose | Key Sections |
|------|---------|--------------|
| `index.html` | Home page | Hero, featured teas, intro, newsletter |
| `menu.html` | Menu display | All teas, seasonal specials, cart panel |
| `about.html` | Brand story | Journey, values, team profiles |
| `contact.html` | Contact info | Address, hours, phone, email, contact form |
| `gallery.html` | Visual showcase | Tea house moments, upcoming events |
| `admin.html` | Admin panel | Dashboard, tea management, orders, analytics |

### CSS & JavaScript
| File | Purpose | Features |
|------|---------|----------|
| `styles.css` | Main styling | 1000+ lines, animations, responsive, dark mode ready |
| `admin.css` | Admin styles | Dashboard layout, tables, forms |
| `script.js` | Main interactivity | Cart, chat, animations, form handling |
| `admin.js` | Admin logic | Auth, CRUD operations, analytics |

---

## 🎨 Color Palette

- **Primary Green:** `#7a9d6f` (Tea accent)
- **Dark Green:** `#455a3f` (Headers)
- **Light Background:** `#f6f1e9` (Cream)
- **Text Color:** `#2e2a24` (Dark brown)
- **Muted:** `#6a5d4d` (Secondary text)

---

## 🌟 Design Highlights

✨ **Modern UI Elements:**
- Glassmorphism effect on cards
- Gradient backgrounds
- Smooth blur filters
- Shadow effects for depth
- Floating animations
- Responsive grid layouts

🎭 **Interactive Components:**
- Hover state animations
- Click feedback effects
- Modal popups
- Form validation
- Loading states
- Notification messages

---

## 💡 Future Enhancements

- 🔄 **Form Submission Handling** – Backend integration for contact forms
- ⭐ **Customer Testimonials** – Reviews and ratings section
- 📸 **Real Images** – Replace placeholders with actual tea house photos
- 🛍️ **Order System** – Full e-commerce functionality
- 📧 **Email Notifications** – Automated order confirmations
- 🌍 **Multi-language Support** – i18n implementation
- 💳 **Payment Gateway** – Stripe or similar integration
- 📍 **Store Locator** – Multiple location support
- 🔔 **Push Notifications** – Real-time order updates
- 📊 **Advanced Analytics** – Detailed business insights

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🤝 Contributing

Feel free to fork, modify, and enhance this project! Suggestions for improvements are always welcome.

---

## 📧 Contact & Support

- **Store Email:** hello@evergreenteahouse.com
- **Phone:** (555) 123-TEA
- **Location:** 123 Leaf Lane, Greenfield, CA 94123
- **Hours:** Daily 9am – 7pm

---

## 🎯 Project Status

✅ **Completed Features:**
- All 5 main pages fully functional
- Admin dashboard with full CRUD
- Shopping cart system
- Chat assistant
- Responsive design
- Smooth animations

🚀 **Ready for:**
- Portfolio showcase
- Client demos
- Further customization
- Production deployment

---

<div align="center">

### 🍵 **Enjoy exploring Evergreen Tea House!** ☕

**Sip slowly, savor warmth.**

Made with ❤️ for tea lovers everywhere

</div>
