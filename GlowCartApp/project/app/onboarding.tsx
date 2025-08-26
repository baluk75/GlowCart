import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Sparkles, ShoppingBag } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Discover Beauty',
    subtitle: 'Find the perfect cosmetics and beauty products for your unique style',
    icon: <Sparkles size={80} color="#FFFFFF" />,
    gradient: ['#E91E63', '#F06292'],
  },
  {
    id: 2,
    title: 'Curated Collection',
    subtitle: 'Handpicked premium beauty brands and trending products just for you',
    icon: <Heart size={80} color="#FFFFFF" />,
    gradient: ['#F06292', '#F8BBD9'],
  },
  {
    id: 3,
    title: 'Shop with Confidence',
    subtitle: 'Secure checkout, fast delivery, and hassle-free returns',
    icon: <ShoppingBag size={80} color="#FFFFFF" />,
    gradient: ['#E91E63', '#AD1457'],
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/login');
    }
  };

  const handleSkip = () => {
    router.push('/login');
  };

  const current = onboardingData[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={current.gradient} style={styles.gradient}>
        {/* Skip Button */}
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            {current.icon}
          </View>
          
          <Text style={styles.title}>{current.title}</Text>
          <Text style={styles.subtitle}>{current.subtitle}</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Pagination Dots */}
          <View style={styles.pagination}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 26,
    opacity: 0.9,
  },
  bottomSection: {
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: '600',
  },
});