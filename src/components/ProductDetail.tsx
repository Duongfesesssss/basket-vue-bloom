
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Truck, Award } from 'lucide-react';
import { CartItemData } from './CartItem';

interface ProductDetailProps {
  product: CartItemData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail = ({ product, isOpen, onClose }: ProductDetailProps) => {
  if (!product) return null;

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Bảo hành chính hãng 12 tháng" },
    { icon: <Truck className="h-5 w-5" />, text: "Miễn phí giao hàng toàn quốc" },
    { icon: <Award className="h-5 w-5" />, text: "Sản phẩm chính hãng 100%" },
  ];

  const specifications = {
    "iPhone 15 Pro Max": [
      { label: "Màn hình", value: "6.7 inch Super Retina XDR" },
      { label: "Chip", value: "A17 Pro Bionic" },
      { label: "Camera", value: "Camera chính 48MP, Ultra Wide 12MP" },
      { label: "Pin", value: "Lên đến 29 giờ phát video" },
      { label: "Bộ nhớ", value: "256GB" },
    ],
    "MacBook Air M3": [
      { label: "Màn hình", value: "13.6 inch Liquid Retina" },
      { label: "Chip", value: "Apple M3 8-core CPU" },
      { label: "RAM", value: "8GB Unified Memory" },
      { label: "Ổ cứng", value: "256GB SSD" },
      { label: "Pin", value: "Lên đến 18 giờ" },
    ],
    "AirPods Pro": [
      { label: "Driver", value: "Driver tùy chỉnh" },
      { label: "Chip", value: "H2" },
      { label: "Chống ồn", value: "Active Noise Cancellation" },
      { label: "Pin", value: "Lên đến 6 giờ (có ANC)" },
      { label: "Kết nối", value: "USB-C" },
    ],
    "Apple Watch Series 9": [
      { label: "Màn hình", value: "45mm Always-On Retina" },
      { label: "Chip", value: "S9 SiP" },
      { label: "Kết nối", value: "GPS + Cellular" },
      { label: "Pin", value: "Lên đến 18 giờ" },
      { label: "Tính năng", value: "Double Tap, Siri on-device" },
    ],
  };

  const currentSpecs = specifications[product.name as keyof typeof specifications] || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Product Image */}
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg border"
            />
            
            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="text-green-600">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Price and Rating */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(4.8/5 - 127 đánh giá)</span>
              </div>
              
              <div className="text-3xl font-bold text-blue-600">
                {product.price.toLocaleString('vi-VN')}đ
              </div>
              
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Còn hàng
              </Badge>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description} - Sản phẩm chính hãng mới 100%, 
                nguyên seal, đầy đủ phụ kiện từ nhà sản xuất. 
                Được bảo hành chính hãng và hỗ trợ kỹ thuật trọn đời.
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Thông số kỹ thuật</h3>
              <div className="space-y-2">
                {currentSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{spec.label}:</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Mua ngay
              </Button>
              <Button variant="outline" className="w-full py-3">
                Thêm vào danh sách yêu thích
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
