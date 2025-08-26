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

npm install
Start the Metro server:

npx react-native start
Run the app on Android:


npx react-native run-android
Run the app on iOS (Mac only):

npx react-native run-ios
🎥 Demo Video
👉[ Demo Video Link](https://drive.google.com/file/d/1TB7eWrluDUXXqd_7cZIiWLN3jBxmif6X/view?usp=drivesdk)

📸 Screenshots
(Add your screenshots here after running the app)

Onboarding Screen
![WhatsApp Image 2025-08-26 at 18 39 45_9b514011](https://github.com/user-attachments/assets/13218e1a-2aa0-4539-8f2a-1847d7301e3a)

Login & Register Screens
![WhatsApp Image 2025-08-26 at 18 39 46_e71ac6f1](https://github.com/user-attachments/assets/5e95c229-8ee4-4875-a875-9796f2e8af6b)

Home Screen (Product List)
![WhatsApp Image 2025-08-26 at 18 40 01_9b3bb9d7](https://github.com/user-attachments/assets/53758f12-4699-4240-8ac7-b92c1d9c9dcb)

Product Details Screen
![WhatsApp Image 2025-08-26 at 18 40 02_6a2df576](https://github.com/user-attachments/assets/c8e2f9d7-ae88-492d-980c-ca33de259cb6)

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
