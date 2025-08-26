import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/components/CartItem';
import { ShoppingBag } from 'lucide-react-native';

export default function CartScreen() {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();

  const handleCheckout = () => {
    // Mock checkout process
    clearCart();
    alert('Order placed successfully! 🎉');
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <CartItem item={item} />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <ShoppingBag size={64} color="#E91E63" />
      <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
      <Text style={styles.emptyText}>
        Add some beautiful products to your cart to get started
      </Text>
    </View>
  );

  const renderFooter = () => {
    if (items.length === 0) return null;
    
    return (
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total ({getTotalItems()} items)</Text>
          <Text style={styles.totalPrice}>${getTotalPrice().toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        {items.length > 0 && (
          <TouchableOpacity onPress={clearCart}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => `${item.id}`}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        contentContainerStyle={items.length === 0 ? styles.emptyContent : styles.content}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212121',
  },
  clearButton: {
    color: '#E91E63',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 16,
  },
  emptyContent: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#424242',
    marginTop: 24,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#9E9E9E',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    marginTop: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#424242',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E91E63',
  },
  checkoutButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});