import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Star } from 'lucide-react-native';
import { Product } from '@/types/Product';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 48 = 16 padding * 2 + 16 gap

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        
        <Text style={styles.brand} numberOfLines={1}>
          {product.brand || 'Premium Beauty'}
        </Text>
        
        <View style={styles.ratingContainer}>
          <Star size={12} color="#FFD700" />
          <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
        </View>
        
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    width: '100%',
    height: CARD_WIDTH,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
    lineHeight: 18,
  },
  brand: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: '#424242',
    marginLeft: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E91E63',
  },
});