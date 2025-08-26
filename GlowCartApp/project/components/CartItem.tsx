import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Trash2, Plus, Minus } from 'lucide-react-native';
import { useCartStore } from '@/stores/cartStore';

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  };
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.productInfo}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
          
          <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
            <Trash2 size={20} color="#D32F2F" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
              <Minus size={16} color="#424242" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
              <Plus size={16} color="#424242" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.subtotal}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  productInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    color: '#757575',
  },
  removeButton: {
    padding: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 6,
  },
  quantityButton: {
    padding: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    minWidth: 32,
    textAlign: 'center',
  },
  subtotal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E91E63',
  },
});