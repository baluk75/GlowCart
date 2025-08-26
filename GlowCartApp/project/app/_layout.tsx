import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useSegments } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useAuthStore } from '@/stores/authStore';

function RootLayoutContent() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(tabs)';
    const inPublicGroup = ['onboarding', 'login', 'register'].includes(segments[0]);

    if (!isAuthenticated && inAuthGroup) {
      router.replace('/onboarding');
    } else if (isAuthenticated && inPublicGroup) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="product-details" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <RootLayoutContent />
      <StatusBar style="auto" />
    </>
  );
}