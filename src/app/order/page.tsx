import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 font-serif mb-4">
            Order Your Favorite Meals
          </h1>
          <p className="text-xl text-secondary-600">
            Browse our menu and place your order for fresh, chef-prepared meals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Menu</h2>
              
              {/* Menu Categories */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {['All', 'Appetizers', 'Mains', 'Desserts', 'Beverages'].map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Menu Items */}
              <div className="space-y-4">
                {[
                  {
                    name: 'Grilled Salmon with Herbs',
                    description: 'Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce',
                    price: '$24.99',
                    time: '25 min'
                  },
                  {
                    name: 'Truffle Mushroom Risotto',
                    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
                    price: '$19.99',
                    time: '30 min'
                  },
                  {
                    name: 'Mediterranean Chicken Bowl',
                    description: 'Grilled chicken with quinoa, olives, feta, and tzatziki',
                    price: '$16.99',
                    time: '20 min'
                  }
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900">{item.name}</h3>
                        <p className="text-secondary-600 mt-1">{item.description}</p>
                        <div className="flex items-center mt-2 text-sm text-secondary-500">
                          <span>🕒 {item.time}</span>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-lg font-bold text-primary-600">{item.price}</p>
                        <button className="mt-2 bg-primary-600 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-700 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-secondary-900 mb-4">Your Order</h2>
              
              <div className="text-center py-8 text-secondary-500">
                <span className="text-4xl">🛒</span>
                <p className="mt-2">Your cart is empty</p>
                <p className="text-sm">Add items from the menu to get started</p>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary-600">Subtotal:</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary-600">Delivery:</span>
                  <span className="font-semibold">$3.99</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary-600">$3.99</span>
                </div>
              </div>

              <button 
                disabled 
                className="w-full mt-4 bg-secondary-300 text-secondary-500 py-3 rounded-md font-medium cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}