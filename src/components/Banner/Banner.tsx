import styles from './styles.module.css'

export default function Banner() {
  return (
    <section className={`${styles.banner} relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50`}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className={`${styles['content-wrapper']} flex-1 text-center lg:text-left`}>
            <div className={styles['badge-wrapper']}>
              <span className={`${styles.badge} inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                ✨ Experience Authentic Flavors
              </span>
            </div>
            
            <h1 className={`${styles['banner-heading']} ${styles['restaurant-heading']} text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight`}>
              Discover the Taste of{' '}
              <span className={styles['gradient-text']}>Excellence</span>
            </h1>
            
            <p className={`${styles.tagline} text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0`}>
              From farm to table, we bring you the finest ingredients crafted into unforgettable dishes. Join us for an extraordinary dining experience.
            </p>
            
            <div className={`${styles['cta-buttons']} flex flex-col sm:flex-row gap-4 justify-center lg:justify-start`}>
              <a 
                href="#menu" 
                className={`${styles['btn-primary']} bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <span>Explore Menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className={`${styles['btn-secondary']} border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Reserve Table</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`${styles['trust-indicators']} flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start`}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-rose-400 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★★★★★</span>
                <span className="text-sm text-gray-600 font-medium ml-1">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`${styles['image-wrapper']} flex-1 relative`}>
            <div className={styles['image-container']}>
              {/* Main Image - Using placeholder with food theme */}
              <div className={`${styles['main-image']} relative rounded-2xl overflow-hidden shadow-2xl`}>
                <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 flex items-center justify-center">
                  {/* SVG Illustration of food */}
                  <svg className="w-3/4 h-3/4 text-amber-600 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                  </svg>
                </div>
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-amber-600 font-bold text-sm">🔥 Chef's Special</span>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className={`${styles['float-card']} ${styles['float-card-1']} absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4 hidden md:block`}>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    🍽️
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Today's Special</p>
                    <p className="text-sm font-bold text-gray-900">Signature Dish</p>
                  </div>
                </div>
              </div>

              <div className={`${styles['float-card']} ${styles['float-card-2']} absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 hidden md:block`}>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fresh</p>
                    <p className="text-sm font-bold text-gray-900">100% Organic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blob shapes */}
            <div className={`${styles.blob} ${styles['blob-1']}`}></div>
            <div className={`${styles.blob} ${styles['blob-2']}`}></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className={styles['bg-pattern']}></div>
    </section>
  )
}
