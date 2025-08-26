import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Search, ShoppingBag } from 'lucide-react-native';
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'expo-router';

export function SearchHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCartStore();
  const router = useRouter();
  const totalItems = getTotalItems();

  const handleCartPress = () => {
    router.push('/(tabs)/cart');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandText}>GlowCart ✨</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#9E9E9E" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search beauty products..."
              placeholderTextColor="#BDBDBD"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          
          <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
            <ShoppingBag size={24} color="#E91E63" />
            {totalItems > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{totalItems}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  welcomeContainer: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: '#757575',
  },
  brandText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#E91E63',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
    marginLeft: 8,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF5722',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});