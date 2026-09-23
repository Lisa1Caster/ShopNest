import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Check, ArrowRight, Package, MapPin } from 'lucide-react';
import { businessConfig } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function ShopModal({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onClearCart,
}) {
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' | 'cart' | 'checkout' | 'success'
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    postcode: '',
  });
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderNumber = `SN-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrder({
      orderNumber,
      total: totalAmount.toFixed(2),
      items: [...cart],
      customer: { ...customerInfo },
    });
    onClearCart();
    setActiveTab('success');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[16px] shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#2563EB]" />
            <h3 className="text-lg font-semibold text-slate-900">
              {activeTab === 'browse' && 'Shop Curated Essentials'}
              {activeTab === 'cart' && 'Your Shopping Bag'}
              {activeTab === 'checkout' && 'Dispatch & Order Confirmation'}
              {activeTab === 'success' && 'Order Confirmed'}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {activeTab !== 'success' && (
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-[8px] text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab('browse')}
                  className={`px-2.5 py-1 rounded-[6px] transition-colors ${
                    activeTab === 'browse'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Catalog
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cart')}
                  className={`px-2.5 py-1 rounded-[6px] transition-colors flex items-center gap-1.5 ${
                    activeTab === 'cart'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Bag</span>
                  <span className="bg-[#2563EB] text-white text-[11px] px-1.5 py-0.2 rounded-full tabular-nums">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-[8px] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* TAB 1: BROWSE CATALOG */}
          {activeTab === 'browse' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Direct from our Yardley, Birmingham inventory
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businessConfig.catalogProducts.map((product) => {
                  const inCart = cart.find((i) => i.id === product.id);
                  return (
                    <div
                      key={product.id}
                      className="flex flex-col bg-[#FAFAF9] border border-slate-200/90 rounded-[12px] overflow-hidden p-4 justify-between"
                    >
                      <div className="aspect-[4/3] rounded-[8px] overflow-hidden bg-white mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#2563EB] uppercase tracking-wider">
                          {product.department}
                        </div>
                        <h4 className="text-base font-semibold text-slate-900 mt-0.5">
                          {product.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-base font-bold text-slate-900 tabular-nums">
                          {product.price}
                        </span>
                        <Button
                          variant={inCart ? 'secondary' : 'primary'}
                          size="small"
                          onClick={() => onAddToCart(product)}
                          className="text-xs font-semibold gap-1.5"
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added ({inCart.quantity})</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: SHOPPING BAG */}
          {activeTab === 'cart' && (
            <div>
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Your bag is empty
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 mb-6">
                    Browse our curated essentials to find what you need.
                  </p>
                  <Button variant="primary" onClick={() => setActiveTab('browse')}>
                    Explore Products
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="divide-y divide-slate-200">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="py-4 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-[8px] object-cover border border-slate-200"
                          />
                          <div>
                            <div className="text-sm font-semibold text-slate-900">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 tabular-nums">
                              £{item.numericPrice.toFixed(2)} each
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-slate-300 rounded-[6px] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 py-1 text-xs font-semibold tabular-nums text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-sm font-bold text-slate-900 tabular-nums w-16 text-right">
                            £{(item.numericPrice * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-2">
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Subtotal</span>
                      <span className="tabular-nums font-medium">
                        £{totalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>UK Tracked Dispatch</span>
                      <span className="text-emerald-700 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                      <span>Total</span>
                      <span className="tabular-nums">£{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CHECKOUT */}
          {activeTab === 'checkout' && (
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-[8px] text-xs text-blue-900 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  Dispatched directly from <strong>{businessConfig.cityArea}</strong>.
                  Free Royal Mail tracked 48h delivery.
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Thomas Moore"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-[6px] border border-slate-300 focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7123 456789"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-[6px] border border-slate-300 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. B26 1DX"
                    value={customerInfo.postcode}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, postcode: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-[6px] border border-slate-300 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street address & City"
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, address: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm rounded-[6px] border border-slate-300 focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="pt-3 border-t border-slate-200">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-900 mb-4">
                  <span>Order Total ({cart.length} items):</span>
                  <span className="text-base tabular-nums">
                    £{totalAmount.toFixed(2)}
                  </span>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full"
                >
                  Confirm & Place Order
                </Button>
              </div>
            </form>
          )}

          {/* TAB 4: CONFIRMATION STATE */}
          {activeTab === 'success' && confirmedOrder && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-950">
                Order {confirmedOrder.orderNumber} Confirmed
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, {confirmedOrder.customer.name || 'valued customer'}! Your order of{' '}
                <strong>£{confirmedOrder.total}</strong> is being prepared for dispatch from our
                Yardley, Birmingham hub.
              </p>
              <div className="p-4 bg-[#FAFAF9] border border-slate-200 rounded-[12px] max-w-md mx-auto text-left text-xs space-y-1 text-slate-600">
                <div>
                  <strong>Dispatch Location:</strong> {businessConfig.cityArea}
                </div>
                <div>
                  <strong>Support Line:</strong> {businessConfig.phoneDisplay}
                </div>
                <div>
                  <strong>Dispatch Status:</strong> Preparing parcel for same-day Royal Mail tracking
                </div>
              </div>
              <div className="pt-4">
                <Button
                  variant="primary"
                  onClick={() => {
                    setActiveTab('browse');
                    onClose();
                  }}
                >
                  Continue Browsing
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {activeTab === 'cart' && cart.length > 0 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <Button
              variant="outline"
              size="default"
              onClick={() => setActiveTab('browse')}
            >
              Continue Shopping
            </Button>
            <Button
              variant="primary"
              size="default"
              onClick={() => setActiveTab('checkout')}
              className="gap-2"
            >
              <span>Proceed to Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
