import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'expo-router';
import { ProductCard } from '@/components/ProductCard';
import { SearchHeader } from '@/components/SearchHeader';
import { Product } from '@/types/Product';
import { ProductService } from '@/services/api';

export default function HomeScreen() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (reset = false) => {
    try {
      const currentSkip = reset ? 0 : skip;
      const newProducts = await ProductService.getProducts(currentSkip);
      
      if (reset) {
        setProducts(newProducts);
        setSkip(20);
      } else {
        setProducts(prev => [...prev, ...newProducts]);
        setSkip(prev => prev + 20);
      }
      
      if (newProducts.length < 20) {
        setHasMore(false);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to load products. Please try again.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setHasMore(true);
    fetchProducts(true);
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setLoading(true);
      fetchProducts();
    }
  };

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/product-details',
      params: { productId: product.id.toString() }
    });
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={() => handleProductPress(item)} />
  );

  const renderFooter = () => {
    if (!loading || refreshing) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#E91E63" />
      </View>
    );
  };

  const renderEmpty = () => {
    if (loading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No products found</Text>
        <Text style={styles.emptySubtext}>Pull down to refresh</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader />
      
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#E91E63']}
            />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  row: {
    justifyContent: 'space-between',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9E9E9E',
    textAlign: 'center',
  },
  errorContainer: {
    padding: 16,
    backgroundColor: '#FFEBEE',
    margin: 16,
    borderRadius: 8,
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
    fontSize: 14,
  },
});