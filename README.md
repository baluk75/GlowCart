# GlowCart
Minimal Cosmetic E-commerce App built with React Native CLI
# GlowCart

Minimal Cosmetic E-commerce App built with **React Native CLI**.  
This app replicates a cosmetic e-commerce flow with onboarding, authentication, product listing, product details, and profile management.

---

## 📱 Features
- Onboarding screen with tagline and Get Started button
- Login & Register screens (mock authentication UI)
- Home screen with products fetched from [DummyJSON Products API](https://dummyjson.com/products)
- Product list with search bar & filter icon (UI only)
- Product details with image, title, description, price, reviews, and highlights
- Profile screen with mock user info and sections (Address, Orders, Settings, Logout)
- Reusable components: **ProductCard, Header, CustomButton**
- Navigation handled with **React Navigation**
- API integration with **Axios**
- State management using **Context API**
- Styled with **React Native StyleSheet**

---

## 🛠️ Tech Stack
- **React Native CLI**
- **React Navigation**
- **Axios**
- **Context API** (state management)
- **FlatList** for rendering product lists

---

## 📂 Folder Structure
GlowCart/
├── src/
│ ├── components/ # Reusable components (Button, ProductCard, etc.)
│ ├── navigation/ # Navigation setup
│ ├── screens/ # All app screens (Onboarding, Login, Register, Home, ProductDetails, Profile)
│ ├── context/ # Context API for state management
│ ├── assets/ # Images, icons
│ └── utils/ # Helpers, constants
├── App.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/baluk75/GlowCart.git
   cd GlowCart
Install dependencies:

bash
Copy
Edit
npm install
Start the Metro server:

bash
Copy
Edit
npx react-native start
Run the app on Android:

bash
Copy
Edit
npx react-native run-android
Run the app on iOS (Mac only):

bash
Copy
Edit
npx react-native run-ios
🎥 Demo Video
👉 Demo Video Link

📸 Screenshots
(Add your screenshots here after running the app)

Onboarding Screen

Login & Register Screens

Home Screen (Product List)

Product Details Screen

Profile Screen

⏳ Time Taken
Project setup & dependencies: 1 hour

UI implementation (all screens): 3-4 hours

API integration & state management: 2 hours

Testing & debugging: 1 hour
Total: ~7-8 hours

✅ Known Issues / Assumptions
Social login buttons are UI only (no backend integration).

API filters & search functionality are partially mocked.

Reviews are static (mocked).

Designed primarily for Android (may need adjustments for iOS UI).

👨‍💻 Author
Balu K
GlowCart – Minimal Cosmetic E-commerce App with React Native CLI
