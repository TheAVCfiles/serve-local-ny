# NY National Guard Recruitment Platform

A modern, responsive web application for New York National Guard recruitment built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## 🎯 Features

- **Professional Landing Page** - Clean, military-inspired design with hero section and lead capture
- **Lead Management System** - Capture prospect information with form validation and database storage
- **Admin Dashboard** - Secure admin interface for managing leads with authentication
- **Recruiter Attribution** - Dynamic recruiter pages with personalized lead tracking
- **Career Exploration** - Comprehensive military career information and role descriptions
- **Mobile Responsive** - Optimized experience across all devices
- **Professional Design** - Military heritage color scheme with navy blues and gold accents

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or later
- PostgreSQL database (local or cloud)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheAVCfiles/serve-local-ny.git
   cd serve-local-ny
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database URL and other configurations:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/serve_local_ny"
   ADMIN_PASSCODE="your-secure-passcode"
   DEFAULT_RECRUITER_SLUG="sgt-brandon"
   NEXT_PUBLIC_SITE_ORIGIN="http://localhost:3000"
   ```

4. **Start local database (using Docker)**
   ```bash
   docker-compose up -d postgres
   ```

5. **Set up database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Admin authentication
│   │   ├── leads/         # Lead management
│   │   └── recruiters/    # Recruiter data
│   ├── admin/             # Admin dashboard
│   ├── explore/           # Career exploration
│   ├── s/[slug]/          # Dynamic recruiter pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── AdminDashboard.tsx
│   ├── Header.tsx
│   ├── LeadForm.tsx
│   └── RoleCard.tsx
└── lib/
    └── prisma.ts         # Database client

prisma/
├── schema.prisma         # Database schema
└── seed.ts              # Database seeding

.devcontainer/
└── postStart.sh         # Dev container setup
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `ADMIN_PASSCODE` | Admin dashboard access code | `"change-me"` |
| `DEFAULT_RECRUITER_SLUG` | Default recruiter identifier | `"sgt-brandon"` |
| `NEXT_PUBLIC_SITE_ORIGIN` | Site URL for production | `"http://localhost:3000"` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `"1"` |

### Database Schema

- **Recruiters**: Store recruiter information and profiles
- **Leads**: Capture prospect information with recruiter attribution
- **Lead Status**: Track lead progression through recruitment pipeline

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Next.js configuration

2. **Set up database**
   - Use [Neon](https://neon.tech), [Supabase](https://supabase.com), or another PostgreSQL provider
   - Update the `DATABASE_URL` environment variable in Vercel

3. **Configure environment variables**
   ```
   DATABASE_URL=your-production-database-url
   ADMIN_PASSCODE=your-secure-production-passcode
   DEFAULT_RECRUITER_SLUG=sgt-brandon
   NEXT_PUBLIC_SITE_ORIGIN=https://your-domain.vercel.app
   NEXT_TELEMETRY_DISABLED=1
   ```

4. **Deploy database schema**
   ```bash
   npx prisma db push
   npm run db:seed
   ```

5. **Deploy**
   - Vercel will automatically build and deploy your application
   - Your site will be live at `https://your-app.vercel.app`

## 🔐 Admin Access

1. Navigate to `/admin`
2. Enter the admin passcode (default: `change-me`)
3. View and manage leads, export data, and track performance

**Important**: Change the default admin passcode in production!

## 📊 Features Detail

### Lead Capture Form
- Form validation with error handling
- Interest selection for military career fields
- Recruiter attribution for tracking referrals
- Email confirmation and status updates

### Admin Dashboard
- Real-time lead statistics and metrics
- Advanced filtering and search capabilities
- CSV export functionality
- Lead status management
- Recruiter performance tracking

### Recruiter Pages
- Dynamic `/s/[recruiter-slug]` pages
- Personalized lead forms with attribution
- Recruiter bio and contact information
- Performance metrics and success stories

## 🛠 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:seed      # Seed database with sample data
npm run db:studio    # Open Prisma Studio
npm run db:generate  # Generate Prisma client
```

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Validation**: Zod
- **Deployment**: Vercel-optimized

## 🎨 Design System

### Colors
- **Navy**: Primary brand color for headers and CTAs
- **Gold**: Accent color for highlights and secondary actions
- **Gray**: Neutral tones for text and backgrounds

### Typography
- **Display**: Montserrat for headings
- **Body**: Inter for body text and UI elements

### Components
- Consistent spacing and sizing
- Accessible focus states and ARIA labels
- Mobile-first responsive design
- Professional military aesthetic

## 📞 Support

For technical support or questions about the recruitment platform:
- Create an issue in this repository
- Contact the development team
- Review the documentation

## 📄 License

This project is proprietary software developed for the New York National Guard recruitment program.

---

**Built with ❤️ for NY National Guard recruitment**