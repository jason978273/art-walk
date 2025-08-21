# West Vancouver Public Art Walk

A Next.js web application showcasing curated walking routes through West Vancouver's public art installations. The app provides interactive maps, downloadable resources, and detailed information about three distinct art walks in the community.

## 🎨 Features

- **Interactive Art Walks**: Three curated routes (Ambleside, Hollyburn, Dundarave) with detailed information
- **Interactive Maps**: Embedded maps with touch-optimized navigation
- **Downloadable Maps**: Offline map downloads for each walk
- **Responsive Design**: Mobile-first design that works across all devices
- **Sponsor Integration**: Highlighted local sponsors and community partners
- **Social Media Integration**: Connected to West Vancouver Community Arts Council social channels

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme variables
- **Icons**: Lucide React + Simple Icons for social media
- **Images**: Next.js Image optimization
- **Fonts**: Century Gothic (titles) + Avenir (body text)

## 📱 Walks Featured

### Ambleside Walk
- **Duration**: 30 min walking / 45 min recommended
- **Distance**: 2.0 km
- **Difficulty**: Easy
- **Highlights**: Ocean views, Lions Gate Bridge, Waterfront Promenade

### Hollyburn Walk  
- **Duration**: 30 min walking / 45 min recommended
- **Distance**: 2.2 km
- **Difficulty**: Moderate
- **Highlights**: Community center, Urban art, Shopping district

### Dundarave Walk
- **Duration**: 10 min walking / 20 min recommended  
- **Distance**: 0.9 km
- **Difficulty**: Easy
- **Highlights**: Dundarave Beach, Coastal scenery

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with footer
│   ├── page.tsx             # Homepage with hero and carousel
│   └── walk/
│       ├── page.tsx         # Walk selection redirect
│       ├── ambleside/
│       ├── dundarave/
│       └── hollyburn/
├── components/
│   ├── Carousel.tsx         # Walk cards carousel (mobile responsive)
│   ├── ContentCard.tsx      # Walk details and highlights
│   ├── Download.tsx         # Downloadable map component
│   ├── Footer.tsx           # Partners, sponsors, contact info
│   ├── Hero.tsx             # Homepage hero with PAW logo
│   ├── Map.tsx              # Interactive map iframe wrapper
│   ├── WalkCard.tsx         # Individual walk preview cards
│   ├── WalkHeader.tsx       # Navigation header for walk pages
│   └── WalkPage.tsx         # Main walk page layout
└── data/
    └── walks.ts             # Walk data and TypeScript types
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2eaf9e` (Teal)
- **Secondary**: `#00A1BA` (Blue)
- **Background**: `#ffffff` (White)
- **Text**: `#171717` (Near Black)

### Typography
- **Headings**: Century Gothic (with fallbacks)
- **Body**: Avenir (with fallbacks)

### Theme Classes
```css
.theme-text-primary    /* Primary teal color */
.theme-text-secondary  /* Secondary teal color */
.theme-bg-primary     /* Primary background */
.theme-bg-secondary   /* Secondary background */
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd art-walk
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📁 Key Dependencies

```json
{
  "next": "14.x",
  "react": "18.x", 
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "lucide-react": "^0.x",
  "@icons-pack/react-simple-icons": "^9.x"
}
```

## 🎯 Data Structure

### Walk Type
```typescript
type Walk = {
  id: string
  title: string
  description: string
  image: string
  href: string
  map: string
  interactiveMap?: string
  walkingTime?: string
  recommendedTime?: string
  distance?: string
  difficulty?: string
  highlights?: string[]
  clickableHighlights?: ClickableHighlight[]
  photoCredit?: string
  introText?: string
}
```

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** 
- **Any Node.js hosting platform**

### Environment Setup
No environment variables required for basic functionality.

## 🤝 Contributing

### Adding New Walks
1. Add walk data to `src/data/walks.ts`
2. Create new page in `src/app/walk/[walk-name]/page.tsx`
3. Add map images to `public/maps/`
4. Add walk images to `public/images/`

### Updating Sponsors
Modify the sponsor arrays in `src/components/Footer.tsx`

## 📄 License

This project is created for the West Vancouver Community Arts Council. All rights reserved.

## 🏛️ Acknowledgments

- **Partners**: District of West Vancouver
- **Sponsors**: Ambleside and Dundarave Business Improvement Association  
- **Funders**: West Vancouver Foundation, Government of Canada, Metro Vancouver
- **Photo Credits**: Various photographers as noted on individual images

## 📞 Contact

**West Vancouver Community Arts Council**
- Email: westvanartscouncil@shaw.ca
- Website: [westvanartscouncil.ca](https://westvanartscouncil.ca)
- Social: [@wvartscouncil](https://www.instagram.com/wvartscouncil)

---

*We acknowledge that the lands on which we gather are the traditional ancestral and unceded territories of the Sḵwx̱wú7mesh (Squamish) Nation.*
