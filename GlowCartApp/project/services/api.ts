import { Product } from '@/types/Product';

const API_BASE_URL = 'https://dummyjson.com';

// Beauty/cosmetics related keywords to filter products
const BEAUTY_KEYWORDS = [
  'beauty', 'makeup', 'cosmetic', 'lipstick', 'foundation', 'mascara',
  'eyeshadow', 'blush', 'concealer', 'powder', 'cream', 'serum',
  'lotion', 'moisturizer', 'cleanser', 'toner', 'perfume', 'fragrance',
  'nail', 'polish', 'skin', 'face', 'eye', 'lip', 'glow'
];

const filterBeautyProducts = (products: any[]): Product[] => {
  return products
    .filter(product => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const category = product.category.toLowerCase();
      
      return BEAUTY_KEYWORDS.some(keyword => 
        title.includes(keyword) || 
        description.includes(keyword) || 
        category.includes(keyword) ||
        category.includes('beauty') ||
        category.includes('skin') ||
        category.includes('fragrance')
      );
    })
    .map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      images: product.images || [product.thumbnail],
      rating: product.rating || 4.0 + Math.random(),
      category: product.category,
      brand: product.brand || 'Premium Beauty',
      stock: product.stock || Math.floor(Math.random() * 50) + 10,
    }));
};

export class ProductService {
  static async getProducts(skip = 0, limit = 20): Promise<Product[]> {
    try {
      // Fetch more products to have enough after filtering
      const response = await fetch(`${API_BASE_URL}/products?skip=${skip}&limit=${limit * 3}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      let beautyProducts = filterBeautyProducts(data.products);
      
      // If we don't have enough beauty products, fetch all products and filter
      if (beautyProducts.length < limit && skip === 0) {
        const allResponse = await fetch(`${API_BASE_URL}/products?limit=100`);
        const allData = await allResponse.json();
        beautyProducts = filterBeautyProducts(allData.products);
      }
      
      // Return the requested slice
      return beautyProducts.slice(0, limit);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  
  static async getProduct(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      const product = await response.json();
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        images: product.images || [product.thumbnail],
        rating: product.rating || 4.0 + Math.random(),
        category: product.category,
        brand: product.brand || 'Premium Beauty',
        stock: product.stock || Math.floor(Math.random() * 50) + 10,
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
}