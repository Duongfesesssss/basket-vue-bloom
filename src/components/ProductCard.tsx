
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { CartItemData } from '@/components/CartItem';

interface ProductCardProps {
  product: Omit<CartItemData, 'quantity'>;
  onAddToCart: (product: Omit<CartItemData, 'quantity'>) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        <p className="text-2xl font-bold text-blue-600">
          {product.price.toLocaleString('vi-VN')}đ
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Thêm vào giỏ hàng
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
