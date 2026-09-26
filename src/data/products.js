export const STORE_INFO = {
  name: "Amar Shoe Stores",
  tagline: "Step into Elegance, Comfort & Royalty",
  address: "Chitra Chowk Hotel, Hindustan International, Amravati, 444601, MH, IN",
  city: "Amravati",
  state: "Maharashtra",
  pincode: "444601",
  email: "rbasantwani999@gmail.com",
  phone: "+91 98230 12345",
  whatsappNumber: "919823012345",
  hours: "Mon - Sun: 10:00 AM - 9:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=Amar+Shoe+Stores+Chitra+Chowk+Amravati"
};

export const CATEGORIES = [
  { id: "all", label: "All Footwear" },
  { id: "boys", label: "Boys Special Collection" },
  { id: "sneakers", label: "Sneakers & Sports" },
  { id: "mens-formal", label: "Men's Formal & Loafers" },
  { id: "womens-heels", label: "Women's Heels & Partywear" },
  { id: "ethnic-jutti", label: "Ethnic & Festive Juttis" },
  { id: "kids", label: "Kids Collection" }
];

export const PRODUCTS = [
  {
    id: "boys-1",
    name: "Amar Boys Cyber Jump High-Top Sneaker",
    category: "boys",
    price: 1499,
    originalPrice: 2299,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 118,
    image: "/assets/boys_sneakers.jpg",
    isFeatured: true,
    badge: "Boys Top Seller",
    description: "Vibrant high-top sneakers designed for active boys. Durable rubber bumper toe, high ankle support, and anti-skid grip sole.",
    highlights: [
      "Heavy-duty grip sole for playground & outdoor sports",
      "High ankle support for injury prevention",
      "Breathable vibrant upper fabric",
      "Easily washable and extra durable"
    ],
    colors: ["#2563EB", "#F59E0B", "#000000"],
    availableSizes: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "boys-2",
    name: "Amar Boys Smart Black School & Formal Shoe",
    category: "boys",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 164,
    image: "/assets/boys_formal.jpg",
    isFeatured: true,
    badge: "School Special",
    description: "Premium black genuine leather school shoes for boys available in dual strap velcro & lace formats. All-day cushioned memory foam footbed.",
    highlights: [
      "Genuine polished water-resistant leather",
      "Quick velcro lock & lace options",
      "Non-marking long-lasting rubber outsole",
      "Approved by top Amravati schools"
    ],
    colors: ["#000000"],
    availableSizes: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "boys-3",
    name: "Boys Nitro Glide Athletic Sports Shoe",
    category: "boys",
    price: 1699,
    originalPrice: 2499,
    discount: "32% OFF",
    rating: 4.8,
    reviewsCount: 87,
    image: "/assets/sneaker_red.jpg",
    isFeatured: true,
    badge: "Sports Edition",
    description: "Lightweight mesh athletic running shoes for sports, cricket, and school PT sessions.",
    highlights: [
      "Ultra-light shock absorb air sole",
      "Sweat-resistant inner lining",
      "Vibrant red & royal blue design"
    ],
    colors: ["#E63946", "#2563EB"],
    availableSizes: [2, 3, 4, 5, 6]
  },
  {
    id: "boys-4",
    name: "Boys Royal Festival Velvet Mojari",
    category: "boys",
    price: 1199,
    originalPrice: 1799,
    discount: "33% OFF",
    rating: 5.0,
    reviewsCount: 73,
    image: "/assets/jutti_ethnic.jpg",
    isFeatured: false,
    badge: "Festive Jutti",
    description: "Handworked royal velvet ethnic Jutti crafted for boys' Diwali, wedding, and festive kurta pyjamas.",
    highlights: [
      "Soft bite-free leather sole padding",
      "Gold thread embroidery",
      "Perfect match for traditional kids wear"
    ],
    colors: ["#800020", "#D4AF37"],
    availableSizes: [1, 2, 3, 4, 5]
  },
  {
    id: "prod-1",
    name: "Amar Red Glide Nitro Runner",
    category: "sneakers",
    price: 2499,
    originalPrice: 3999,
    discount: "37% OFF",
    rating: 4.9,
    reviewsCount: 142,
    image: "/assets/sneaker_red.jpg",
    isFeatured: true,
    badge: "Bestseller",
    description: "Engineered for maximum cushion and high energy return. Features breathable mesh, ergonomic arc support, and non-slip rubber outsoles.",
    highlights: [
      "Ultra-lightweight responsive cushioning",
      "Breathable engineered mesh upper",
      "High-grip anti-skid rubber sole",
      "Ideal for running, gym, and daily street style"
    ],
    colors: ["#E63946", "#2563EB", "#1E293B"],
    availableSizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "prod-2",
    name: "Royal Heritage Leather Oxford",
    category: "mens-formal",
    price: 3299,
    originalPrice: 4999,
    discount: "34% OFF",
    rating: 4.9,
    reviewsCount: 98,
    image: "/assets/oxford_brown.jpg",
    isFeatured: true,
    badge: "Premium Leather",
    description: "Handcrafted from 100% full-grain Italian tan leather. Precision brogue detailing with cushioned insoles for supreme formal elegance.",
    highlights: [
      "100% Premium Full-Grain Genuine Leather",
      "Orthopedic memory foam cushion footbed",
      "Hand-burnished finish",
      "Perfect for weddings, corporate meetings & grand events"
    ],
    colors: ["#8B4513", "#000000", "#D2691E"],
    availableSizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "prod-3",
    name: "Aurelia Gold Stiletto Heel",
    category: "womens-heels",
    price: 2799,
    originalPrice: 4299,
    discount: "35% OFF",
    rating: 4.8,
    reviewsCount: 86,
    image: "/assets/womens_sandals.jpg",
    isFeatured: true,
    badge: "Trending",
    description: "Sophisticated strappy heel with polished metallic gold accents. Features anti-slip heel tips and padded footbed for all-night comfort.",
    highlights: [
      "Sleek multi-strap design with metallic buckles",
      "3.5-inch sturdy slender heel",
      "Soft padded comfort lining",
      "Complements party gowns, sarees & cocktail dresses"
    ],
    colors: ["#000000", "#F59E0B", "#E63946"],
    availableSizes: [4, 5, 6, 7, 8]
  },
  {
    id: "prod-4",
    name: "Regal Zardozi Velvet Jutti",
    category: "ethnic-jutti",
    price: 1899,
    originalPrice: 2999,
    discount: "36% OFF",
    rating: 5.0,
    reviewsCount: 115,
    image: "/assets/jutti_ethnic.jpg",
    isFeatured: true,
    badge: "Handcrafted Art",
    description: "Pure velvet royal Indian Jutti embroidered with rich gold thread & zardozi work. Double leather cushioned sole guarantees zero bite.",
    highlights: [
      "Handcrafted by master traditional artisans",
      "Bite-free soft double-leather padding",
      "Royal velvet with festive gold embroidery",
      "Ideal for weddings, festivals & ethnic wear"
    ],
    colors: ["#800020", "#2563EB", "#D4AF37"],
    availableSizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: "prod-5",
    name: "Amar Cobalt Velocity Sports",
    category: "sneakers",
    price: 2199,
    originalPrice: 3499,
    discount: "37% OFF",
    rating: 4.7,
    reviewsCount: 64,
    image: "/assets/hero.jpg",
    isFeatured: false,
    badge: "New Arrival",
    description: "Dynamic athletic sneaker featuring impact-absorption air soles and quick-dry upper lining.",
    highlights: [
      "Air-cushioned shock absorbing heel",
      "Flex-groove sole for high agility",
      "Modern contrast trim"
    ],
    colors: ["#2563EB", "#000000", "#E63946"],
    availableSizes: [6, 7, 8, 9, 10]
  },
  {
    id: "prod-6",
    name: "Classic Italian Monk Strap",
    category: "mens-formal",
    price: 3499,
    originalPrice: 5299,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 52,
    image: "/assets/oxford_brown.jpg",
    isFeatured: false,
    badge: "Luxury Edition",
    description: "Double buckle monk strap shoe in rich burnished leather with toe cap detail.",
    highlights: [
      "Dual brass buckle closure",
      "High durability Goodyear welt style construction",
      "Breathable leather lining"
    ],
    colors: ["#000000", "#8B4513"],
    availableSizes: [7, 8, 9, 10, 11]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kulkarni",
    role: "Regular Customer, Amravati",
    comment: "Amar Shoe Stores at Chitra Chowk is my go-to shop! Bought leather Oxfords for my wedding & school shoes for my son — super comfortable!",
    rating: 5
  },
  {
    id: 2,
    name: "Pooja Deshmukh",
    role: "Amravati",
    comment: "The boys sneakers & designer heels here are stunning! Exactly as shown on the site, and quick delivery near Hindustan International.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Fitness Enthusiast",
    comment: "Best sports and boys sneakers range in Amravati. The Nitro Runner cushioned soles are amazing. Great customer service!",
    rating: 5
  }
];
