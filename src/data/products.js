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
  { id: "outdoor-boots", label: "Trekking & Outdoor Boots" },
  { id: "sneakers", label: "Sneakers & Sports" },
  { id: "boys", label: "Boys Special Collection" },
  { id: "mens-formal", label: "Men's Formal & Loafers" },
  { id: "womens-heels", label: "Women's Heels & Partywear" },
  { id: "ethnic-jutti", label: "Ethnic & Festive Juttis" },
  { id: "casual", label: "Casual Canvas & Walkers" }
];

export const PRODUCTS = [
  {
    id: "ctr-trek-1",
    name: "CTR Trek High-Ankle Tactical Outdoor Boot",
    category: "outdoor-boots",
    price: 2199,
    originalPrice: 3499,
    discount: "37% OFF",
    rating: 4.9,
    reviewsCount: 148,
    image: "/assets/ctr_trek_black_side.jpg",
    images: [
      "/assets/ctr_trek_black_side.jpg",
      "/assets/ctr_trek_black_top.jpg"
    ],
    isFeatured: true,
    badge: "Tough Outdoor",
    description: "Heavy-duty matte black tactical boot built for trekking, bike touring, rough terrain, and winter outdoors. Features reinforced abrasion-resistant toe cap, speed lacing eyelets, and deep-groove anti-skid lug outsole.",
    highlights: [
      "Rugged all-weather ballistic nylon & synthetic upper",
      "High-ankle padded collar for superior ankle protection & twist resistance",
      "Dual-density shock-absorbing cleated sole for maximum mountain grip",
      "Quick-lace speed hooks with heavy-duty woven paracord laces"
    ],
    specifications: {
      "Upper Material": "Water-resistant Ballistic Nylon & Synthetic Leather",
      "Sole Material": "Dual-Tone Heavy-Duty Rubber Lug Cleat",
      "Closure": "High-Ankle Lace-Up with D-Ring Speed Hooks",
      "Insole": "Cushioned Ergonomic EVA Footbed",
      "Ideal For": "Trekking, Hiking, Bike Riding, Outdoor Work & Winter",
      "Weight": "Approx. 440g per shoe",
      "Origin": "Amar Shoe Stores, Amravati Exclusive"
    },
    colors: ["#111827", "#374151"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "CTR Trek High-Ankle Tactical Outdoor Boot | Amar Shoes Amravati",
    metaDescription: "Buy CTR Trek Tactical High-Ankle Outdoor Boots at Amar Shoes Amravati. Rugged grip cleated sole, water-resistant upper & heavy-duty ankle support.",
    keywords: ["tactical boots amravati", "trekking shoes amravati", "ctr trek boots", "high ankle outdoor shoes", "amar shoe stores"],
    altText: "CTR Trek Matte Black High-Ankle Tactical Outdoor Boot with heavy cleated lug sole"
  },
  {
    id: "ctr-rock-2",
    name: "CTR Rock Explorer Trail & Trekking Shoe",
    category: "outdoor-boots",
    price: 1899,
    originalPrice: 2899,
    discount: "34% OFF",
    rating: 4.9,
    reviewsCount: 112,
    image: "/assets/ctr_rock_green_side.jpg",
    images: [
      "/assets/ctr_rock_green_side.jpg",
      "/assets/ctr_rock_green_top.jpg"
    ],
    isFeatured: true,
    badge: "Trail Master",
    description: "Rugged army olive green trail runner and hiking sneaker with high-traction lugged mountain sole and high-visibility neon accents. Engineered for tough rocky terrain, daily morning walks, and active adventures.",
    highlights: [
      "Ultra-traction lugged rubber sole for rocky tracks & wet soil",
      "Ripstop breathable canvas mesh paneling with stitched overlays",
      "High-visibility neon lime green side ribbing & padded tongue",
      "Signature 'ROCK' reinforced heel counter for heel-lock stability"
    ],
    specifications: {
      "Upper Material": "Durable Ripstop Canvas Mesh & Synthetic Suede",
      "Sole Material": "Heavy Cleat Lugged Deep Tread Rubber",
      "Closure": "Reinforced Lace-Up with Steel Eyelets",
      "Insole": "High-Rebound Neon Comfort Cushion Insole",
      "Ideal For": "Trail Walking, Trekking, Daily Rough Outdoors & Sports",
      "Weight": "Approx. 390g per shoe",
      "Origin": "Amar Shoe Stores Collection"
    },
    colors: ["#3F4F38", "#1E293B", "#84CC16"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "CTR Rock Explorer Trail Hiking Shoe in Olive Green | Amar Shoes",
    metaDescription: "Shop CTR Rock Explorer army olive trail hiking shoe at Amar Shoes Amravati. Deep lug sole for mountain trails and rocky paths. Best price guaranteed.",
    keywords: ["ctr rock shoes", "trail hiking shoes amravati", "army green trekking shoe", "lug sole outdoor sneakers", "amar shoes"],
    altText: "CTR Rock Explorer Army Olive Green Trail Hiking Shoe with neon lime accents and chunky lug sole"
  },
  {
    id: "ctr-safari-3",
    name: "CTR Desert Safari Chunky Lug Trekker",
    category: "outdoor-boots",
    price: 1999,
    originalPrice: 3199,
    discount: "37% OFF",
    rating: 4.8,
    reviewsCount: 94,
    image: "/assets/ctr_safari_tan_side.jpg",
    images: [
      "/assets/ctr_safari_tan_side.jpg",
      "/assets/ctr_safari_tan_top.jpg"
    ],
    isFeatured: true,
    badge: "Trending Safari",
    description: "Statement chunky desert safari sneaker in camel tan with high-profile white cleated tread sole. Combines retro streetwear aesthetics with rugged all-terrain durability.",
    highlights: [
      "Chunky off-white lugged sole with superior arch support",
      "Rich camel tan matte finish with breathable cordura mesh windows",
      "Brass D-ring lace loops for swift, secure lace lockdown",
      "Thick padded collar prevents heel chafing during long walks"
    ],
    specifications: {
      "Upper Material": "Premium Nubuck-Finish Synthetic & Breathable Mesh",
      "Sole Material": "Chunky High-Profile Textured Lug Rubber",
      "Closure": "D-Ring Lace-Up",
      "Insole": "Padded Shock-Absorbing Memory Foam",
      "Ideal For": "Desert Safari, Casual Streetwear, Outdoor Treks & College",
      "Weight": "Approx. 410g per shoe",
      "Origin": "Amar Shoe Stores, Amravati"
    },
    colors: ["#C19A6B", "#8B5A2B", "#F5F5DC"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "CTR Desert Safari Chunky Lug Trekker Shoes | Amar Shoes Amravati",
    metaDescription: "Step into bold street style with CTR Desert Safari chunky camel tan trekker shoes at Amar Shoe Stores, Amravati. Heavy grip lug sole & memory foam comfort.",
    keywords: ["camel tan chunky shoes", "desert safari shoes", "ctr safari trekker", "chunky sneakers amravati", "amar shoe stores"],
    altText: "CTR Desert Safari Camel Tan Chunky Lug Sole Trekker Sneaker"
  },
  {
    id: "ctr-urban-4",
    name: "CTR Urban Rugged Khaki Trail Sneaker",
    category: "outdoor-boots",
    price: 1849,
    originalPrice: 2799,
    discount: "34% OFF",
    rating: 4.8,
    reviewsCount: 88,
    image: "/assets/ctr_urban_khaki_side.jpg",
    images: [
      "/assets/ctr_urban_khaki_side.jpg",
      "/assets/ctr_urban_khaki_top.jpg"
    ],
    isFeatured: false,
    badge: "Everyday Tough",
    description: "Earthy khaki-brown rugged everyday sneaker engineered for men who need one shoe for both rough outdoor daily use and smart casual weekend outings.",
    highlights: [
      "Earth khaki-brown colorway that resists dust and stains",
      "Reinforced double-stitched overlays for extended lifespan",
      "Shock-cushioned chunky outsole with traction blocks",
      "Comfort padded collar with signature CTR embossed badge"
    ],
    specifications: {
      "Upper Material": "Durable Matte Synthetic Leather & Micro-Knit",
      "Sole Material": "Impact-Dampening Rugged Cleat Sole",
      "Closure": "Dual-Tone Lace-Up with Metal Eyelets",
      "Insole": "Ergonomic Arch Support Footbed",
      "Ideal For": "Daily Commute, Outdoor Rough Use, Casual Travel",
      "Weight": "Approx. 400g per shoe",
      "Origin": "Amar Shoe Stores Amravati"
    },
    colors: ["#826C51", "#5C4033"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "CTR Urban Rugged Khaki Trail Sneaker | Amar Shoes Amravati",
    metaDescription: "Buy CTR Urban Rugged Khaki Trail Sneakers at Amar Shoe Stores Amravati. Heavy-duty all-terrain sole, dust-resistant finish & cushioned support.",
    keywords: ["khaki casual shoes", "rough use shoes amravati", "ctr trail sneaker", "mens outdoor shoes amravati"],
    altText: "CTR Urban Rugged Khaki Trail Sneaker with chunky shock-absorbing sole"
  },
  {
    id: "slimfit-nitro-5",
    name: "Slim-Fit Memory Foam Nitro Athletic Runner",
    category: "sneakers",
    price: 1699,
    originalPrice: 2599,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 162,
    image: "/assets/slimfit_nitro_teal_side.jpg",
    images: [
      "/assets/slimfit_nitro_teal_side.jpg",
      "/assets/slimfit_nitro_teal_top.jpg"
    ],
    isFeatured: true,
    badge: "Memory Foam",
    description: "High-performance running and sports sneaker featuring high-density Memory Foam insole ('Pehno Shaan Se'). Designed with aerodynamic teal, charcoal & rust orange color blocking for explosive cushion and all-day energy return.",
    highlights: [
      "Instant-comfort Memory Foam insole molds to foot curvature",
      "Breathable engineered honeycomb mesh upper keeps feet sweat-free",
      "Lateral TPU support cage ('N' insignia) for cornering stability",
      "Ultra-responsive featherlight EVA midsole absorbs pavement shock"
    ],
    specifications: {
      "Upper Material": "Engineered Breathable Jacquard Mesh & TPU Overlays",
      "Sole Material": "Ultralight Flex-Groove Responsive EVA Midsole",
      "Insole": "Original Slim-Fit Memory Foam Cushioned Footbed",
      "Closure": "Dynamic Lace-Up for Snug Fit",
      "Ideal For": "Running, Gym Workouts, Morning Walks & Casual Sports",
      "Weight": "Approx. 280g per shoe (Featherlight)",
      "Origin": "Slim-Fit Sports Official Collection at Amar Shoes"
    },
    colors: ["#1F3A44", "#EA580C", "#94A3B8"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "Slim-Fit Memory Foam Running Shoes Teal & Orange | Amar Shoes Amravati",
    metaDescription: "Order original Slim-Fit Memory Foam sports running shoes at Amar Shoe Stores Amravati. Ultra-light, breathable mesh & high rebound comfort footbed.",
    keywords: ["slim-fit running shoes", "memory foam sports shoes amravati", "athletic shoes amravati", "lightweight gym sneakers"],
    altText: "Slim-Fit Memory Foam Nitro Athletic Runner Shoe in Teal, Charcoal and Rust Orange"
  },
  {
    id: "slimfit-cloud-6",
    name: "Slim-Fit CloudStride Ultra-Cushion Sneaker",
    category: "sneakers",
    price: 1649,
    originalPrice: 2499,
    discount: "34% OFF",
    rating: 4.8,
    reviewsCount: 135,
    image: "/assets/slimfit_cloud_white_side.jpg",
    images: [
      "/assets/slimfit_cloud_white_side.jpg",
      "/assets/slimfit_cloud_white_top.jpg"
    ],
    isFeatured: true,
    badge: "Best for Walking",
    description: "Crisp white, slate grey, and navy lifestyle sneaker packed with cloud-like Memory Foam cushioning. Perfectly matches track pants, chinos, and distressed denim for casual college and daily wear.",
    highlights: [
      "CloudStride multi-density Memory Foam with vibrant orange insole",
      "Micro-ventilated mesh front keeps feet cool in hot weather",
      "Ergonomic heel counter with olive stabilization tab",
      "Slip-resistant segmented outsole for smooth heel-to-toe transitions"
    ],
    specifications: {
      "Upper Material": "Technical Micro-Mesh with Synthetic Leather Saddle",
      "Sole Material": "Flexible Cushion Phylon & Anti-Slip Rubber Pods",
      "Insole": "Orthopedic High-Density Memory Foam",
      "Closure": "Low-Profile Athletic Lace-Up",
      "Ideal For": "Daily Walking, Travel, College, Office Casual & Gym",
      "Weight": "Approx. 290g per shoe",
      "Origin": "Amar Shoe Stores, Amravati"
    },
    colors: ["#FFFFFF", "#1E3A8A", "#64748B"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "Slim-Fit CloudStride White & Navy Memory Foam Shoes | Amar Shoes",
    metaDescription: "Shop Slim-Fit CloudStride White & Navy sneakers with orthopedic Memory Foam at Amar Shoes Amravati. Lightweight, stylish, and ultra-comfortable.",
    keywords: ["white casual sneakers amravati", "slim-fit memory foam shoes", "walking shoes for men amravati", "amar shoes chitra chowk"],
    altText: "Slim-Fit CloudStride White and Navy Ultra-Cushion Memory Foam Sneaker"
  },
  {
    id: "ctr-skate-7",
    name: "CTR Retro Street Skate Canvas Sneaker",
    category: "casual",
    price: 1399,
    originalPrice: 2199,
    discount: "36% OFF",
    rating: 4.8,
    reviewsCount: 97,
    image: "/assets/ctr_skate_canvas_side.jpg",
    images: [
      "/assets/ctr_skate_canvas_side.jpg",
      "/assets/ctr_skate_canvas_top.jpg"
    ],
    isFeatured: false,
    badge: "Classic Street",
    description: "Timeless vintage skate sneaker crafted with heavyweight military olive green canvas and a clean vulcanized white sole. Features contrast white eyelets, white CTR wave side stripe, and cushioned heel collar.",
    highlights: [
      "100% durable heavy-duty washed cotton canvas upper",
      "Vulcanized non-marking rubber flat sole with waffle grip",
      "Padded inner foam collar prevents chafing and ankle fatigue",
      "Versatile street aesthetic pairs effortlessly with jeans, cargo, and shorts"
    ],
    specifications: {
      "Upper Material": "Heavyweight Breathable Cotton Canvas",
      "Sole Material": "Vulcanized Non-Marking White Rubber",
      "Closure": "Classic 4-Eyelet Lace-Up with Flat Woven Laces",
      "Insole": "Cushioned Comfort Footbed",
      "Ideal For": "Everyday Casual Wear, College, Skateboarding, Weekend Hangouts",
      "Weight": "Approx. 340g per shoe",
      "Origin": "Amar Shoe Stores, Chitra Chowk Amravati"
    },
    colors: ["#4A5D3E", "#FFFFFF"],
    availableSizes: [6, 7, 8, 9, 10],
    seoTitle: "CTR Retro Olive Green Skate Canvas Sneaker | Amar Shoes Amravati",
    metaDescription: "Get CTR Retro Street Olive Green Canvas Sneakers with vulcanized white sole at Amar Shoes Amravati. Classic street look & all-day comfort.",
    keywords: ["olive green canvas shoes", "skate sneakers amravati", "ctr canvas shoes", "mens casual sneakers amravati"],
    altText: "CTR Retro Street Olive Green Canvas Sneaker with Vulcanized White Sole"
  },
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
    isFeatured: false,
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
    isFeatured: false,
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
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kulkarni",
    role: "Regular Customer, Amravati",
    comment: "Amar Shoe Stores at Chitra Chowk is my go-to shop! Bought CTR trek boots and leather Oxfords — top quality and super comfortable!",
    rating: 5
  },
  {
    id: 2,
    name: "Pooja Deshmukh",
    role: "Amravati",
    comment: "The Slim-Fit memory foam sneakers & designer heels here are stunning! Exactly as shown on the site, and fast local service near Hindustan International.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Fitness Enthusiast",
    comment: "Best sports and trail shoes range in Amravati. The CTR lug sole grip and Slim-Fit cushioned soles are amazing. Great customer service!",
    rating: 5
  }
];
