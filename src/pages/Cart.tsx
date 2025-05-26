
import React, { useState } from 'react';
import CartItem, { CartItemData } from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import ProductDetail from '@/components/ProductDetail';
import Navbar from '@/components/Navbar';
import { Package, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem, cartItemCount } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<CartItemData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
    toast({
      title: "Đã cập nhật giỏ hàng",
      description: "Số lượng sản phẩm đã được thay đổi.",
    });
  };

  const handleRemoveItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    removeItem(id);
    toast({
      title: "Đã xóa sản phẩm",
      description: `${item?.name} đã được xóa khỏi giỏ hàng.`,
      variant: "destructive",
    });
  };

  const handleShowDetail = (item: CartItemData) => {
    setSelectedProduct(item);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={cartItemCount} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={handleBackToHome}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tiếp tục mua sắm
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Giỏ hàng của bạn</h1>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {cartItemCount} sản phẩm
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Package className="mx-auto h-24 w-24 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Button onClick={handleBackToHome}>
              Bắt đầu mua sắm
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                  onShowDetail={handleShowDetail}
                />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                itemCount={cartItemCount}
              />
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Cart;
