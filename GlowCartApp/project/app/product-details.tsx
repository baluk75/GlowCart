import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Star, Plus, Minus, ShoppingBag } from 'lucide-react-native';
import { Product } from '@/types/Product';
import { ProductService } from '@/services/api';
import { useCartStore } from '@/stores/cartStore';

export default function ProductDetailsScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const productData = await ProductService.getProduct(parseInt(productId));
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
      Alert.alert('Error', 'Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      Alert.alert('Added to Cart', `${product.title} has been added to your cart`);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color="#212121" />
          </TouchableOpacity>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E91E63" />
        </View>
      </SafeAreaView>
    );
  }

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color="#212121" />
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#212121" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productBrand}>{product.brand || 'Premium Brand'}</Text>
          
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            <Text style={styles.ratingCount}>({Math.floor(Math.random() * 500) + 100} reviews)</Text>
          </View>

          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>

          {/* Highlights */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Highlights</Text>
            <View style={styles.highlightsList}>
              <Text style={styles.highlight}>• Dimensions: {Math.floor(Math.random() * 10) + 5}cm x {Math.floor(Math.random() * 10) + 5}cm</Text>
              <Text style={styles.highlight}>• Warranty: 12 months manufacturer warranty</Text>
              <Text style={styles.highlight}>• Shipping: Free shipping on orders over $50</Text>
              <Text style={styles.highlight}>• Cruelty-free and ethically sourced</Text>
            </View>
          </View>

          {/* Mock Reviews */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Customer Reviews</Text>
            <View style={styles.review}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>Sarah M.</Text>
                <View style={styles.reviewRating}>
                  <Star size={14} color="#FFD700" />
                  <Text style={styles.reviewRatingText}>5.0</Text>
                </View>
              </View>
              <Text style={styles.reviewText}>
                Amazing product! Highly recommend for anyone looking for quality cosmetics.
              </Text>
            </View>
            
            <View style={styles.review}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>Jessica L.</Text>
                <View style={styles.reviewRating}>
                  <Star size={14} color="#FFD700" />
                  <Text style={styles.reviewRatingText}>4.8</Text>
                </View>
              </View>
              <Text style={styles.reviewText}>
                Great value for money. Fast delivery and excellent packaging.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Minus size={16} color="#424242" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Plus size={16} color="#424242" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <ShoppingBag size={20} color="#FFFFFF" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
  },
  headerRight: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#757575',
  },
  imageContainer: {
    backgroundColor: '#F8F8F8',
    aspectRatio: 1,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 4,
  },
  productBrand: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
    marginLeft: 4,
  },
  ratingCount: {
    fontSize: 14,
    color: '#9E9E9E',
    marginLeft: 8,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
  },
  highlightsList: {
    paddingLeft: 8,
  },
  highlight: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
    marginBottom: 4,
  },
  review: {
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewRatingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#424242',
    marginLeft: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#424242',
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginRight: 16,
  },
  quantityButton: {
    padding: 12,
    backgroundColor: 'transparent',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    minWidth: 40,
    textAlign: 'center',
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 12,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});