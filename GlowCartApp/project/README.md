# GlowCart - Beauty E-commerce App 💄✨

A modern React Native beauty e-commerce application built with Expo, featuring product browsing, cart management, and user authentication.

## Features

### 🛍️ Core Functionality
- **Product Catalog**: Browse curated beauty and cosmetics products
- **Product Details**: Detailed product pages with images, descriptions, and reviews
- **Shopping Cart**: Add, remove, and manage products with quantity controls
- **User Authentication**: Mock login/register system with form validation
- **Profile Management**: User profile with comprehensive settings menu

### 🎨 User Experience
- **Onboarding Flow**: Beautiful gradient-based introduction screens
- **Tab Navigation**: Intuitive bottom tab navigation for main sections
- **Pull-to-Refresh**: Refresh product listings with native gesture
- **Infinite Scroll**: Load more products automatically as you scroll
- **Responsive Design**: Optimized for various screen sizes

### 🔧 Technical Features
- **API Integration**: Fetches real product data from DummyJSON API
- **State Management**: Zustand for cart and authentication state
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Comprehensive error states and user feedback
- **Loading States**: Smooth loading indicators throughout the app

## Tech Stack

- **Framework**: Expo (React Native)
- **Navigation**: Expo Router with Tab and Stack navigation
- **State Management**: Zustand
- **UI Components**: Custom components with Lucide React Native icons
- **Styling**: React Native StyleSheet with consistent design system
- **API**: DummyJSON REST API for product data
- **TypeScript**: Full type safety implementation

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g @expo/cli`
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd glowcart-app
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Run on Device/Simulator**:
   - For iOS: Press `i` in the terminal or use Expo Go app
   - For Android: Press `a` in the terminal or use Expo Go app
   - For Web: Press `w` in the terminal

## Run Commands

### Development
```bash
npm run dev          # Start Expo development server
```

### Building
```bash
npm run build:web    # Build for web deployment
```

### Linting
```bash
npm run lint         # Run ESLint checks
```

## Environment Notes

- **Platform**: Built with Expo managed workflow
- **API**: Uses DummyJSON public API (no API key required)
- **Authentication**: Mock system for demo purposes
- **Data Persistence**: In-memory state (resets on app restart)

## Project Structure

```
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home/Product listing
│   │   ├── favorites.tsx  # Favorites screen
│   │   ├── cart.tsx       # Shopping cart
│   │   └── profile.tsx    # User profile
│   ├── onboarding.tsx     # App introduction
│   ├── login.tsx          # Login screen
│   ├── register.tsx       # Registration screen
│   └── product-details.tsx # Product detail view
├── components/            # Reusable UI components
│   ├── ProductCard.tsx    # Product grid item
│   ├── SearchHeader.tsx   # Search and navigation header
│   └── CartItem.tsx       # Cart item component
├── stores/               # State management
│   ├── authStore.ts      # Authentication state
│   └── cartStore.ts      # Shopping cart state
├── services/             # API and external services
│   └── api.ts            # Product API service
└── types/                # TypeScript definitions
    └── Product.ts        # Product type definitions
```

## Screenshots

*[Placeholder for app screenshots]*
- Home screen with product grid
- Product details with cart functionality  
- Shopping cart with quantity controls
- Profile screen with settings menu
- Onboarding flow with beautiful gradients

## Development Time

**Estimated Development Time**: *[Placeholder - approximately 8-12 hours]*

This includes:
- Navigation setup and routing (1-2 hours)
- UI component development (3-4 hours)
- API integration and data handling (2-3 hours)
- State management implementation (1-2 hours)
- Authentication flow (1-2 hours)
- Testing and polish (1 hour)

## Assumptions Made

1. **Mock Authentication**: Real authentication would require backend integration
2. **Product Filtering**: DummyJSON products filtered by beauty-related keywords
3. **Data Persistence**: Cart and auth state reset on app restart
4. **API Reliability**: Assumes DummyJSON API availability and structure
5. **Image Loading**: Product images loaded from external URLs
6. **Review System**: Mock reviews generated for demonstration

## Known Issues

1. **Data Persistence**: Cart items and login state don't persist between app sessions
2. **Search Functionality**: Search UI present but filtering not implemented
3. **Favorites**: Favorites screen UI complete but functionality pending
4. **Offline Support**: No offline caching implemented
5. **Image Loading**: No image loading error handling or fallbacks

## Roadmap

### Short Term
- [ ] Implement search and filtering functionality
- [ ] Add favorites/wishlist functionality
- [ ] Implement data persistence with AsyncStorage
- [ ] Add image loading states and error handling

### Medium Term
- [ ] Integrate real authentication system
- [ ] Add product reviews and ratings system
- [ ] Implement push notifications
- [ ] Add product categories and filtering

### Long Term
- [ ] Payment integration (Stripe/PayPal)
- [ ] Order tracking and history
- [ ] Social sharing features
- [ ] AR try-on functionality

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**GlowCart** - Where beauty meets technology 💋