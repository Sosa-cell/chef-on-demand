import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600 font-serif">Chef On Demand</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#menu" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
                <Link href="#about" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="#contact" className="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/order" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">Order Now</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-secondary-900 sm:text-5xl md:text-6xl font-serif">
                  <span className="block xl:inline">Gourmet dining</span>{' '}
                  <span className="block text-primary-600 xl:inline">delivered fresh</span>
                </h1>
                <p className="mt-3 text-base text-secondary-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience restaurant-quality meals prepared by professional chefs and delivered to your doorstep. Fresh ingredients, bold flavors, minimal effort.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/order"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      Order Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#menu"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-secondary-500 sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary-900 sm:text-4xl font-serif">
              Quality you can taste
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-2xl">🍳</span>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-secondary-900">
                    Professional Chefs
                  </dt>
                  <dd className="mt-2 text-base text-secondary-600">
                    Our experienced chefs create each dish with passion and expertise, ensuring restaurant-quality meals every time.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-2xl">🥬</span>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-secondary-900">
                    Fresh Ingredients
                  </dt>
                  <dd className="mt-2 text-base text-secondary-600">
                    We source the finest, freshest ingredients from local farms and trusted suppliers for maximum flavor and nutrition.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-2xl">🚚</span>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-secondary-900">
                    Fast Delivery
                  </dt>
                  <dd className="mt-2 text-base text-secondary-600">
                    Quick, reliable delivery ensures your meals arrive hot and fresh, exactly when you want them.
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-center text-sm text-secondary-400">
              © 2024 Chef On Demand. All rights reserved.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-secondary-300 font-serif">
              Chef On Demand
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}