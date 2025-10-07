// Categories data
export const categories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest electronic devices and gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=250&fit=crop&crop=center',
    subcategories: [
      { id: 11, name: 'Smartphones', slug: 'smartphones' },
      { id: 12, name: 'Laptops', slug: 'laptops' },
      { id: 13, name: 'Tablets', slug: 'tablets' },
      { id: 14, name: 'Cameras', slug: 'cameras' },
      { id: 15, name: 'Audio', slug: 'audio' }
    ]
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center',
    subcategories: [
      { id: 21, name: 'Men\'s Clothing', slug: 'mens-clothing' },
      { id: 22, name: 'Women\'s Clothing', slug: 'womens-clothing' },
      { id: 23, name: 'Shoes', slug: 'shoes' },
      { id: 24, name: 'Accessories', slug: 'accessories' },
      { id: 25, name: 'Bags', slug: 'bags' }
    ]
  },
  {
    id: 3,
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop&crop=center',
    subcategories: [
      { id: 31, name: 'Furniture', slug: 'furniture' },
      { id: 32, name: 'Decor', slug: 'decor' },
      { id: 33, name: 'Kitchen', slug: 'kitchen' },
      { id: 34, name: 'Garden', slug: 'garden' },
      { id: 35, name: 'Lighting', slug: 'lighting' }
    ]
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Sports equipment and outdoor gear',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
    subcategories: [
      { id: 41, name: 'Exercise & Fitness', slug: 'exercise-fitness' },
      { id: 42, name: 'Outdoor Recreation', slug: 'outdoor-recreation' },
      { id: 43, name: 'Team Sports', slug: 'team-sports' },
      { id: 44, name: 'Water Sports', slug: 'water-sports' },
      { id: 45, name: 'Winter Sports', slug: 'winter-sports' }
    ]
  },
  {
    id: 5,
    name: 'Books & Media',
    slug: 'books-media',
    description: 'Books, movies, music and more',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center',
    subcategories: [
      { id: 51, name: 'Books', slug: 'books' },
      { id: 52, name: 'Movies', slug: 'movies' },
      { id: 53, name: 'Music', slug: 'music' },
      { id: 54, name: 'Games', slug: 'games' },
      { id: 55, name: 'Magazines', slug: 'magazines' }
    ]
  }
];

// Brands data
export const brands = [
  { id: 1, name: 'Apple', slug: 'apple', logo: '/images/brands/apple.png' },
  { id: 2, name: 'Samsung', slug: 'samsung', logo: '/images/brands/samsung.png' },
  { id: 3, name: 'Nike', slug: 'nike', logo: '/images/brands/nike.png' },
  { id: 4, name: 'Adidas', slug: 'adidas', logo: '/images/brands/adidas.png' },
  { id: 5, name: 'Sony', slug: 'sony', logo: '/images/brands/sony.png' },
  { id: 6, name: 'Microsoft', slug: 'microsoft', logo: '/images/brands/microsoft.png' },
  { id: 7, name: 'Dell', slug: 'dell', logo: '/images/brands/dell.png' },
  { id: 8, name: 'HP', slug: 'hp', logo: '/images/brands/hp.png' },
  { id: 9, name: 'Canon', slug: 'canon', logo: '/images/brands/canon.png' },
  { id: 10, name: 'Nikon', slug: 'nikon', logo: '/images/brands/nikon.png' }
];

// Products data
export const products = [
  // Electronics - Smartphones
  {
    id: 1,
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    description: 'The most advanced iPhone yet with titanium design and A17 Pro chip.',
    longDescription: 'The iPhone 15 Pro features a stunning titanium design, the powerful A17 Pro chip for lightning-fast performance, and an advanced camera system with 3x telephoto lens. Experience Action Button, USB-C connectivity, and up to 29 hours of video playback.',
    price: 999.99,
    originalPrice: 1099.99,
    categoryId: 1,
    subcategoryId: 11,
    brandId: 1,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop&crop=center'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center',
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    isFeatured: true,
    onSale: true,
    discountPercentage: 9,
    tags: ['smartphone', 'apple', 'ios', 'flagship'],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB',
      'Camera': 'Triple 48MP system',
      'Battery': 'Up to 29 hours video',
      'Operating System': 'iOS 17'
    },
    features: [
      'Titanium design',
      'Action Button',
      'USB-C connectivity',
      'A17 Pro chip',
      'Professional camera system',
      '5G capable'
    ],
    shippingInfo: {
      weight: '0.42 lbs',
      dimensions: '5.77 x 2.78 x 0.32 inches',
      freeShipping: true,
      estimatedDelivery: '2-3 business days'
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    description: 'Premium Android smartphone with S Pen and 200MP camera.',
    longDescription: 'The Galaxy S24 Ultra delivers exceptional performance with the Snapdragon 8 Gen 3 processor, built-in S Pen for productivity, and a revolutionary 200MP camera system with advanced AI features.',
    price: 1199.99,
    categoryId: 1,
    subcategoryId: 11,
    brandId: 2,
    images: [
      '/images/products/galaxy-s24-ultra-1.jpg',
      '/images/products/galaxy-s24-ultra-2.jpg',
      '/images/products/galaxy-s24-ultra-3.jpg'
    ],
    thumbnail: '/images/products/galaxy-s24-ultra-thumb.jpg',
    inStock: true,
    stockQuantity: 18,
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    isFeatured: true,
    tags: ['smartphone', 'samsung', 'android', 's-pen'],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '200MP + 50MP + 12MP + 10MP',
      'Battery': '5000mAh',
      'Operating System': 'Android 14'
    }
  },
  
  // Electronics - Laptops
  {
    id: 3,
    name: 'MacBook Pro 16-inch M3 Pro',
    slug: 'macbook-pro-16-m3-pro',
    description: 'Powerful laptop with M3 Pro chip for professional workflows.',
    longDescription: 'The 16-inch MacBook Pro with M3 Pro chip delivers exceptional performance for demanding workflows. Features a stunning Liquid Retina XDR display, advanced camera and audio, and all-day battery life.',
    price: 2499.99,
    categoryId: 1,
    subcategoryId: 12,
    brandId: 1,
    images: [
      '/images/products/macbook-pro-16-1.jpg',
      '/images/products/macbook-pro-16-2.jpg',
      '/images/products/macbook-pro-16-3.jpg'
    ],
    thumbnail: '/images/products/macbook-pro-16-thumb.jpg',
    inStock: true,
    stockQuantity: 12,
    rating: 4.9,
    reviewCount: 67,
    isFeatured: true,
    tags: ['laptop', 'macbook', 'apple', 'professional'],
    specifications: {
      'Chip': 'Apple M3 Pro',
      'Display': '16.2-inch Liquid Retina XDR',
      'Memory': '18GB unified memory',
      'Storage': '512GB SSD',
      'Battery': 'Up to 22 hours',
      'Operating System': 'macOS Sonoma'
    }
  },
  
  {
    id: 4,
    name: 'Dell XPS 13 Plus',
    slug: 'dell-xps-13-plus',
    description: 'Ultra-thin laptop with stunning InfinityEdge display.',
    longDescription: 'The Dell XPS 13 Plus features a beautiful 13.4-inch InfinityEdge display, 12th Gen Intel processors, and a sleek design perfect for productivity and creativity.',
    price: 1299.99,
    originalPrice: 1499.99,
    categoryId: 1,
    subcategoryId: 12,
    brandId: 7,
    images: [
      '/images/products/dell-xps-13-1.jpg',
      '/images/products/dell-xps-13-2.jpg'
    ],
    thumbnail: '/images/products/dell-xps-13-thumb.jpg',
    inStock: true,
    stockQuantity: 8,
    rating: 4.6,
    reviewCount: 43,
    onSale: true,
    discountPercentage: 13,
    tags: ['laptop', 'dell', 'ultrabook', 'windows'],
    specifications: {
      'Processor': 'Intel Core i7-1280P',
      'Display': '13.4-inch FHD+',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB PCIe SSD',
      'Graphics': 'Intel Iris Xe',
      'Operating System': 'Windows 11'
    }
  },

  // Fashion - Men's Clothing
  {
    id: 5,
    name: 'Nike Air Max 270',
    slug: 'nike-air-max-270',
    description: 'Comfortable running shoes with Max Air cushioning.',
    longDescription: 'The Nike Air Max 270 delivers unrivaled comfort with the largest Max Air unit ever used in a Nike heel. Perfect for everyday wear with breathable mesh upper and durable rubber outsole.',
    price: 150.00,
    categoryId: 2,
    subcategoryId: 23,
    brandId: 3,
    images: [
      '/images/products/nike-air-max-270-1.jpg',
      '/images/products/nike-air-max-270-2.jpg',
      '/images/products/nike-air-max-270-3.jpg'
    ],
    thumbnail: '/images/products/nike-air-max-270-thumb.jpg',
    inStock: true,
    stockQuantity: 45,
    rating: 4.5,
    reviewCount: 234,
    isFeatured: true,
    tags: ['shoes', 'nike', 'running', 'air-max'],
    specifications: {
      'Upper Material': 'Mesh and synthetic',
      'Sole Material': 'Rubber',
      'Closure': 'Lace-up',
      'Heel Height': '1.5 inches',
      'Weight': '12 oz (Size 9)'
    },
    variants: [
      { size: '7', color: 'Black/White', sku: 'NKE-AM270-BW-7' },
      { size: '8', color: 'Black/White', sku: 'NKE-AM270-BW-8' },
      { size: '9', color: 'Black/White', sku: 'NKE-AM270-BW-9' },
      { size: '10', color: 'Black/White', sku: 'NKE-AM270-BW-10' },
      { size: '11', color: 'Black/White', sku: 'NKE-AM270-BW-11' }
    ]
  },

  {
    id: 6,
    name: 'Adidas Ultraboost 22',
    slug: 'adidas-ultraboost-22',
    description: 'High-performance running shoes with Boost technology.',
    longDescription: 'Experience incredible energy return with the Adidas Ultraboost 22. Features responsive Boost midsole, Primeknit upper for adaptive fit, and Continental rubber outsole for superior traction.',
    price: 190.00,
    categoryId: 2,
    subcategoryId: 23,
    brandId: 4,
    images: [
      '/images/products/adidas-ultraboost-22-1.jpg',
      '/images/products/adidas-ultraboost-22-2.jpg'
    ],
    thumbnail: '/images/products/adidas-ultraboost-22-thumb.jpg',
    inStock: true,
    stockQuantity: 32,
    rating: 4.7,
    reviewCount: 189,
    isNew: true,
    tags: ['shoes', 'adidas', 'running', 'boost'],
    specifications: {
      'Upper Material': 'Primeknit',
      'Midsole': 'Boost',
      'Outsole': 'Continental Rubber',
      'Drop': '10mm',
      'Weight': '11.2 oz (Size 9)'
    }
  },

  // Home & Garden
  {
    id: 7,
    name: 'Modern Dining Table Set',
    slug: 'modern-dining-table-set',
    description: 'Elegant 6-seater dining table with contemporary design.',
    longDescription: 'Transform your dining room with this modern dining table set. Features solid wood construction, sleek lines, and comfortable upholstered chairs. Perfect for family meals and entertaining guests.',
    price: 899.99,
    originalPrice: 1199.99,
    categoryId: 3,
    subcategoryId: 31,
    images: [
      '/images/products/dining-table-set-1.jpg',
      '/images/products/dining-table-set-2.jpg',
      '/images/products/dining-table-set-3.jpg'
    ],
    thumbnail: '/images/products/dining-table-set-thumb.jpg',
    inStock: true,
    stockQuantity: 6,
    rating: 4.4,
    reviewCount: 56,
    onSale: true,
    discountPercentage: 25,
    tags: ['furniture', 'dining', 'table', 'set'],
    specifications: {
      'Material': 'Solid Oak Wood',
      'Seating Capacity': '6 people',
      'Table Dimensions': '72" L x 36" W x 30" H',
      'Chair Dimensions': '18" W x 20" D x 32" H',
      'Assembly Required': 'Yes'
    }
  },

  // Sports & Outdoors
  {
    id: 8,
    name: 'Professional Yoga Mat',
    slug: 'professional-yoga-mat',
    description: 'Premium non-slip yoga mat for all practice levels.',
    longDescription: 'Elevate your yoga practice with this professional-grade yoga mat. Features superior grip, cushioning, and durability. Made from eco-friendly materials and includes carrying strap.',
    price: 49.99,
    categoryId: 4,
    subcategoryId: 41,
    images: [
      '/images/products/yoga-mat-1.jpg',
      '/images/products/yoga-mat-2.jpg'
    ],
    thumbnail: '/images/products/yoga-mat-thumb.jpg',
    inStock: true,
    stockQuantity: 78,
    rating: 4.6,
    reviewCount: 312,
    isFeatured: true,
    tags: ['yoga', 'fitness', 'mat', 'exercise'],
    specifications: {
      'Material': 'Natural Rubber',
      'Thickness': '6mm',
      'Dimensions': '72" L x 24" W',
      'Weight': '2.5 lbs',
      'Non-toxic': 'Yes'
    }
  },

  // Books & Media
  {
    id: 9,
    name: 'The Psychology of Money',
    slug: 'psychology-of-money-book',
    description: 'Bestselling book about wealth, greed, and happiness.',
    longDescription: 'Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life\'s most important topics.',
    price: 16.99,
    categoryId: 5,
    subcategoryId: 51,
    images: [
      '/images/products/psychology-money-book-1.jpg'
    ],
    thumbnail: '/images/products/psychology-money-book-thumb.jpg',
    inStock: true,
    stockQuantity: 156,
    rating: 4.8,
    reviewCount: 1243,
    isFeatured: true,
    tags: ['book', 'finance', 'psychology', 'bestseller'],
    specifications: {
      'Author': 'Morgan Housel',
      'Format': 'Paperback',
      'Pages': '256',
      'Publisher': 'Harriman House',
      'Language': 'English',
      'ISBN-13': '978-0857197689'
    }
  },

  // More Electronics
  {
    id: 10,
    name: 'Sony WH-1000XM5 Headphones',
    slug: 'sony-wh-1000xm5-headphones',
    description: 'Industry-leading noise canceling wireless headphones.',
    longDescription: 'Experience exceptional sound quality with Sony\'s flagship noise-canceling headphones. Features advanced processor V1, 30-hour battery life, and crystal-clear hands-free calling.',
    price: 399.99,
    categoryId: 1,
    subcategoryId: 15,
    brandId: 5,
    images: [
      '/images/products/sony-headphones-1.jpg',
      '/images/products/sony-headphones-2.jpg',
      '/images/products/sony-headphones-3.jpg'
    ],
    thumbnail: '/images/products/sony-headphones-thumb.jpg',
    inStock: true,
    stockQuantity: 23,
    rating: 4.9,
    reviewCount: 567,
    isFeatured: true,
    isNew: true,
    tags: ['headphones', 'sony', 'wireless', 'noise-canceling'],
    specifications: {
      'Driver Unit': '30mm',
      'Frequency Response': '4Hz-40kHz',
      'Battery Life': '30 hours',
      'Charging': 'USB-C',
      'Weight': '8.8 oz',
      'Bluetooth': '5.2'
    }
  }
];

// Featured products (subset of products)
export const featuredProducts = products.filter(product => product.isFeatured);

// New arrivals (subset of products)
export const newArrivals = products.filter(product => product.isNew);

// Sale products (subset of products)
export const saleProducts = products.filter(product => product.onSale);

// Best sellers (mock data based on review count)
export const bestSellers = products
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 8);

// Product reviews (mock data)
export const reviews = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    userName: 'John Smith',
    userAvatar: '/images/avatars/user1.jpg',
    rating: 5,
    title: 'Amazing phone!',
    comment: 'The iPhone 15 Pro exceeded my expectations. The camera quality is outstanding and the performance is incredibly smooth.',
    date: '2024-01-15',
    verified: true,
    helpful: 12
  },
  {
    id: 2,
    productId: 1,
    userId: 2,
    userName: 'Sarah Johnson',
    userAvatar: '/images/avatars/user2.jpg',
    rating: 4,
    title: 'Great upgrade',
    comment: 'Upgraded from iPhone 13 and the difference is noticeable. Battery life is excellent.',
    date: '2024-01-10',
    verified: true,
    helpful: 8
  }
];

// Utility functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.categoryId === parseInt(categoryId));
};

export const getProductsBySubcategory = (subcategoryId) => {
  return products.filter(product => product.subcategoryId === parseInt(subcategoryId));
};

export const getProductsByBrand = (brandId) => {
  return products.filter(product => product.brandId === parseInt(brandId));
};

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getCategoryById = (id) => {
  return categories.find(category => category.id === parseInt(id));
};

export const getBrandById = (id) => {
  return brands.find(brand => brand.id === parseInt(id));
};

export const getProductReviews = (productId) => {
  return reviews.filter(review => review.productId === parseInt(productId));
};