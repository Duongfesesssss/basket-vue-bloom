import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { CartItemData } from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const { addToCart, cartItemCount } = useCart();

  const products: Omit<CartItemData, 'quantity'>[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      price: 29990000,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
      description: '256GB, Titan Tự Nhiên - Công nghệ camera tiên tiến'
    },
    {
      id: '2',
      name: 'MacBook Air M3',
      price: 27990000,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      description: '13 inch, 8GB RAM, 256GB SSD - Hiệu suất vượt trội'
    },
    {
      id: '3',
      name: 'AirPods Pro',
      price: 6490000,
      image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop',
      description: 'Thế hệ thứ 2 với USB-C - Chống ồn chủ động'
    },
    {
      id: '4',
      name: 'Apple Watch Series 9',
      price: 9990000,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
      description: '45mm, GPS + Cellular - Theo dõi sức khỏe toàn diện'
    },
    {
      id: '5',
      name: 'iPad Pro 12.9',
      price: 24990000,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      description: 'M2 Chip, 128GB, WiFi - Màn hình Liquid Retina XDR'
    },
    {
      id: '6',
      name: 'Samsung Galaxy S24 Ultra',
      price: 31990000,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
      description: '256GB, Titanium Gray - Camera 200MP, S Pen tích hợp'
    },
    {
      id: '7',
      name: 'Sony WH-1000XM5',
      price: 8990000,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
      description: 'Tai nghe chống ồn cao cấp - 30 giờ pin'
    },
    {
      id: '8',
      name: 'Nintendo Switch OLED',
      price: 8490000,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      description: 'Màn hình OLED 7 inch - 64GB bộ nhớ trong'
    }
  ];

  const handleAddToCart = (product: Omit<CartItemData, 'quantity'>) => {
    addToCart(product);
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${product.name} đã được thêm vào giỏ hàng`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={cartItemCount} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            TechStore
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Công nghệ hàng đầu, giá cả tuyệt vời
          </p>
          <p className="text-lg opacity-90">
            Khám phá bộ sưu tập sản phẩm công nghệ mới nhất
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-gray-600">
            Những sản phẩm công nghệ mới nhất và được yêu thích nhất
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
