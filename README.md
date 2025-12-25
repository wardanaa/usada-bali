# Usada Bali - Plant Identification System

Usada Bali adalah sistem identifikasi tanaman herbal tradisional berbasis web yang memanfaatkan teknologi machine learning untuk mengenali jenis tanaman berdasarkan citra daun.

## 🚀 Fitur Utama

- **Identifikasi Tanaman Real-time**: Upload foto daun untuk mendapatkan hasil identifikasi langsung
- **Antarmuka Responsif**: Kompatibel dengan desktop dan perangkat mobile
- **Informasi Tanaman Lengkap**: Deskripsi detail dan confidence score untuk setiap hasil identifikasi
- **Validasi File Robust**: Validasi tipe file dan ukuran dengan pesan error yang user-friendly
- **Aksesibilitas WCAG**: Dukungan penuh untuk pembaca layar dan keyboard navigation

## 🛠️ Teknologi

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework dengan SSR/SSG
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/) - Strong typing untuk JavaScript
- **Testing**: [Jest 29](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Linting**: [ESLint 9](https://eslint.org/) - Code quality enforcement

## 📋 Persyaratan

- Node.js 18.17 atau lebih baru
- pnpm 8 atau lebih baru (atau npm/yarn sebagai alternatif)

## 🚀 Memulai

### 1. Clone Repository

```bash
git clone <repository-url>
cd usada-bali
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env.local
```

Sesuaikan konfigurasi di `.env.local` sesuai kebutuhan:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_TIMEOUT=30000

# File Upload Configuration
NEXT_PUBLIC_MAX_FILE_SIZE=8388608
NEXT_PUBLIC_ALLOWED_MIME_TYPES=image/jpeg,image/jpg,image/png

# Logging
NEXT_PUBLIC_LOG_LEVEL=info
```

### 4. Jalankan Development Server

```bash
pnpm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📦 Script Tersedia

- `pnpm run dev` - Jalankan development server
- `pnpm run build` - Build aplikasi untuk production
- `pnpm run start` - Jalankan production server
- `pnpm run lint` - Jalankan ESLint untuk code quality check
- `pnpm run lint:fix` - Otomatis fix ESLint issues
- `pnpm run type-check` - Jalankan TypeScript type checking
- `pnpm run test` - Jalankan test suite
- `pnpm run test:watch` - Jalankan test dalam watch mode

## 📂 Struktur Project

```
usada-bali/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout dengan provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── identifikasi/       # Identification page
├── components/             # React components
│   ├── identification/     # Plant identification components
│   ├── layout/             # Layout components (Navbar, Footer)
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility functions & services
│   ├── identify.ts         # Plant identification logic
│   ├── logger.ts           # Logging utility
│   ├── toast.ts            # Toast notification system
│   └── validation.ts       # File & input validation
├── __tests__/              # Test files
├── public/                 # Static assets
└── jest.config.js          # Jest configuration
```

## 🧪 Testing

### Menjalankan Tests

```bash
# Jalankan semua tests
pnpm run test

# Jalankan tests dalam watch mode
pnpm run test:watch

# Jalankan tests dengan coverage
pnpm run test -- --coverage
```

### Test Coverage

Tests mencakup:
- File validation (tipe, ukuran)
- Logger functionality
- Utility functions
- Component rendering (untuk component tests)

## 🔒 Security

Project ini mengimplementasikan security best practices:

- **Content Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **File Validation**: Validasi tipe MIME dan ukuran file
- **Input Sanitization**: Sanitasi nama file
- **HTTPS Recommended**: Gunakan HTTPS di production
- **Permissions Policy**: Batasi akses ke kamera, mikrofon, dan geolocation

## ♿ Accessibility

Project ini memenuhi WCAG 2.1 Level AA:

- Semantic HTML markup
- ARIA labels dan roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy Manual

```bash
pnpm run build
pnpm start
```

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
# Jalankan di port berbeda
pnpm run dev -- -p 3001
```

### Clear build cache
```bash
rm -rf .next
pnpm run build
```

### Reset dependencies
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. Lihat file `LICENSE` untuk informasi lebih lanjut.

## 📧 Contact

Untuk pertanyaan atau feedback, silakan hubungi melalui:
- Issues GitHub: [Link Issues](https://github.com/yourusername/usada-bali/issues)
- Email: contact@example.com

## 🙏 Acknowledgments

- Pemerintah Indonesia untuk dukungan dalam preservasi pengetahuan herbal tradisional
- Komunitas Next.js dan React
- Kontributor dan tester project ini
