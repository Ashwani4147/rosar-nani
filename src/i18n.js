import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        comingsoon: "Coming Soon",
        backToHome: "Back to Home",
        // General
        welcome: "Welcome to Rosar Nani",
        welcomeFoodService: "Welcome to Food Service",
        welcomeSalonService: "Welcome to Salon Service",
        welcomeCosmeticsService: "Welcome to Cosmetics Service",
        Home: "Home",
        Categories: "Categories",
        about: "About Us",
        servicesLabel1: "Our Services",
        quality: "Best Quality Guaranteed",
        qualitysrv: "Quality You Can Trust",
        testimonials: "What Our Customers Say",
        contact: "Contact Us",
        footer: "© 2025 Rosar Nani. All rights reserved.",
        services: [
          { name: "Food Service", href: "/food", type: "page" },
          { name: "Salon Service", href: "/salon", type: "page" },
          { name: "Cosmetics Service", href: "home", type: "section" },
        ],

        serviceFood: "Food Service",
        serviceSalon: "Salon Service",
        serviceCosmetics: "Cosmetics Service",

        //Hero or Image session
        hero: {
          landtitle: "Where Style Meets Beauty",
          landsubtitle: "Customized for You",

          foodtitle: "Delicious Flavors, Crafted Just For You",
          foodsubtitle:
            "Experience a curated menu full of taste, health, and freshness.",

          salontitle: "Beauty That Speaks to Your Soul",
          salonsubtitle:
            "Experience luxury beauty services with expert stylists, premium products, and personalized care.",

          cosmeticstitle: "Where Luxury Meets Beauty",
          cosmeticssubtitle:
            "Discover premium cosmetics crafted with luxury ingredients, innovative formulas, and timeless elegance.",

          eyelashtitle: "Lash Perfection that Captivates",
          eyelashsubtitle:
            "Elevate your gaze with luxurious lash extensions. Expert application, stunning volume, and natural-looking beauty that lasts.",

          button: "Explore ",
        },

        // Main Heading Section
        mainHeadingFood: {
          heading: "Food that Speaks to Your Soul",
          description:
            "From savory bites to sweet treats, every dish is thoughtfully prepared with fresh ingredients and a passion for flavor. Dive into a menu designed to delight your senses.",
        },
        mainHeadingBeauty: {
          heading: "Elevate Your Natural Beauty",
          description:
            "From precision cuts to rejuvenating treatments, every service is crafted with expertise and passion. Discover a full range of beauty services designed to enhance your confidence and style.",
        },
        mainHeadingCosmetics: {
          heading: "Unleash Your Inner Radiance",
          description:
            "From vibrant lipsticks to flawless foundations, every product is formulated with precision and care. Explore our curated collection of premium cosmetics designed to enhance your natural beauty and boost your confidence.",
        },
        mainHeadingNail: {
          heading: "Nails that Express Your Style",
          description:
            "From classic manicures to creative nail art, every service is expertly crafted with premium products and attention to detail. Discover treatments designed to pamper and perfect your nails.",
        },

        mainHeadingEyeLash: {
          heading: "Lashes that Define Your Beauty",
          description:
            "From natural volume to dramatic length, every lash extension is meticulously applied with precision and care. Discover treatments designed to enhance your natural beauty and frame your eyes perfectly.",
        },

        // Categories Section

        // Food Categories
        categoriesSectionTitle: "Our Delicious Categories",

        categories: [
          {
            title: "Gourmet Entrees",
            description:
              "Expertly crafted main dishes that showcase premium ingredients and culinary artistry.",
          },
          {
            title: "Fresh Pasta",
            description:
              "Handmade pasta dishes with authentic flavors and traditional cooking techniques.",
          },
          {
            title: "Artisan Desserts",
            description:
              "Decadent pastries and sweets made with the finest ingredients and attention to detail.",
          },
          {
            title: "Healthy Bowls",
            description:
              "Nutritious and colorful bowls packed with fresh vegetables, grains, and superfoods.",
          },
        ],

        // Salon Categories
        servicesSectionTitle: "Our Signature Services",
        services: [
          {
            title: "Hair Styling",
            description:
              "Expert cuts, coloring, and styling services with the latest techniques and premium products.",
          },
          {
            title: "Spa Treatments",
            description:
              "Relaxing facials, rejuvenating masks, and therapeutic treatments for radiant skin.",
          },
          {
            title: "Nail Services",
            description:
              "Professional manicures, pedicures, and nail art with attention to detail and hygiene.",
          },
          {
            title: "Beauty Makeup",
            description:
              "Professional makeup services for special events, photoshoots, and everyday glamour.",
          },
        ],
        // Cosmetics Categories
        collectionsSectionTitle: "Our Signature Collections",
        collections: [
          {
            title: "Lip Collection",
            description:
              "Luxurious lipsticks, glosses, and balms in stunning shades that complement every skin tone.",
          },
          {
            title: "Skincare Essentials",
            description:
              "Nourishing serums, moisturizers, and treatments for healthy, glowing skin at any age.",
          },
          {
            title: "Eye Makeup",
            description:
              "Captivating eyeshadows, mascaras, and liners to create mesmerizing looks that last all day.",
          },
          {
            title: "Fragrance",
            description:
              "Exquisite perfumes and eau de toilettes with sophisticated scents for every occasion.",
          },
        ],

        // Nails Categories
        NailSectionTitle: "Our Signature Collections",
        Nail: [
          {
            title: "Classic Manicure",
            description:
              "Timeless elegance with expert nail shaping, cuticle care, and your choice of polish for a polished finish.",
          },
          {
            title: "Nail Art Design",
            description:
              "Express your creativity with custom nail art featuring intricate designs, patterns, and artistic details.",
          },
          {
            title: "Gel & Acrylic",
            description:
              "Long-lasting beauty with premium gel or acrylic enhancements for stunning, durable nails.",
          },
          {
            title: "Spa Pedicure",
            description:
              "Luxurious foot care experience with exfoliation, massage, and flawless polish application.",
          },
        ],

        //EyeLash Categories
        EyelashSectionTitle: "Our Signature Services",
        Eyelash: [
          {
            title: "Classic Lashes",
            description:
              "Natural elegance with individual lash extensions applied one-to-one for a timeless, sophisticated look.",
          },
          {
            title: "Volume Lashes",
            description:
              "Dramatic fullness with multiple ultra-fine extensions creating a lush, glamorous look that turns heads.",
          },
          {
            title: "Hybrid Lashes",
            description:
              "Perfect balance combining classic and volume techniques for customized texture and natural-looking depth.",
          },
          {
            title: "Lash Lift & Tint",
            description:
              "Enhanced natural lashes with lifting treatment and tinting for defined, curled lashes without extensions.",
          },
        ],

        // About Section
        aboutTitle: "About Rosar Nani",
        aboutText:
          "Rosar Nani is a platform/shop which provides you food delicacies and soothing salon experience along with cosmetic products specially customised for you. We believe in creating personalized experiences that nourish both your body and soul, offering the perfect blend of culinary delights and wellness treatments tailored to your unique preferences.",

        aboutTitle1: "Our Unique Experience",
        aboutText1:
          "At Rosar Nani, every visit is a delightful escape. Handpicked culinary treats and rejuvenating wellness moments crafted just for you, leaving you refreshed and inspired.",

        // Contact Section
        contactTitle: "Get in Touch",
        contactText:
          "Ready to experience personalized food and wellness? Contact us to start your journey",
        contactFormTitle: "Send Us a Message",
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "Message",
        messagePlaceholder:
          "Tell us about your preferences and how we can help you...",
        sendButton: "Send Message",
        contactInfoTitle: "Contact Information",
        contactInfoText:
          "We'd love to hear from you! Reach out to us through any of the following channels, and we'll get back to you as soon as possible.",
        locationTitle: "Location",
        locationText:
          "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230",
        phoneTitle: "Phone",
        phoneText: "‪+66 6-3240-1934‬",
        emailTitle: "Email",
        emailText: "contact@rosarnani.com",
        businessHoursTitle: "Business Hours",
        businessHoursMonFri: "Monday - Friday: 9:00 AM - 8:00 PM",
        businessHoursSat: "Saturday: 10:00 AM - 6:00 PM",
        businessHoursSun: "Sunday: 11:00 AM - 5:00 PM",

        // QualityPromise Section
        qualityTitle: "Our Quality Promise",
        qualityText:
          "We are committed to delivering exceptional experiences through our core values",
        qualityCheckTitle: "Quality Checks",
        qualityCheckDesc:
          "Every product and service undergoes rigorous quality assurance to ensure excellence",
        customizedTitle: "Customized",
        customizedDesc:
          "Tailored experiences and products designed specifically for your unique needs and preferences",
        customerSatisfactionTitle: "Customer Satisfaction",
        customerSatisfactionDesc:
          "Your happiness is our priority - we go above and beyond to exceed expectations",

        // Testimonials Section
        testimonialsTitle: "What Our Customers Say",
        testimonialsText:
          "Hear from our satisfied customers about their personalized experiences",
        testimonialsList: [
          {
            name: "Sarah Johnson",
            rating: 5,
            text: "Rosar Nani exceeded all my expectations! The food was absolutely divine, and the spa treatment left me feeling completely rejuvenated. The personalized approach made all the difference.",
            service: "Food & Spa Experience",
          },
          {
            name: "Michael Chen",
            rating: 5,
            text: "The customized skincare products are amazing! They really took the time to understand my skin type and created products that work perfectly for me. Highly recommend!",
            service: "Customized Products",
          },
          {
            name: "Emily Rodriguez",
            rating: 5,
            text: "What a unique concept! Being able to enjoy gourmet food and then pamper myself with salon treatments all in one place is incredible. The quality is top-notch.",
            service: "Complete Experience",
          },
          {
            name: "David Thompson",
            rating: 5,
            text: "The attention to detail is remarkable. Every aspect of my visit was tailored to my preferences. The staff truly cares about customer satisfaction.",
            service: "Personalized Service",
          },
          {
            name: "Rohan B.",
            service: "Complete Experience",
            rating: 5,
            text: "I loved the personalized food delicacies and relaxing wellness treatments. Everything felt tailored just for me.",
          },
          {
            name: "Ashwani K.",
            service: "Complete Experience",
            rating: 5,
            text: "Rosar Nani provides a perfect combination of delicious food and soothing treatments.",
          },
        ],

        //Feature section
         "eyelashfeatures": {
    "list": [
      {
        "title": "Expert Artists",
        "description": "Certified professionals with years of experience"
      },
      {
        "title": "Premium Products",
        "description": "High-quality lashes and safe adhesives"
      },
      {
        "title": "Lasting Results",
        "description": "Beautiful lashes that last 4-6 weeks"
      },
      {
        "title": "Safe & Gentle",
        "description": "Hypoallergenic products for sensitive eyes"
      }
    ]
  },

        // Quality Section
        cosmeticsquality: {
          heading: "Quality You Can Trust",
          description:
            "Our commitment to cosmetic excellence means every product meets the highest standards of quality, safety, and performance. We use premium ingredients and cutting-edge formulations to deliver exceptional results.",
          features: [
            {
              title: "Cruelty-Free",
              description: "Never tested on animals, always ethical",
            },
            {
              title: "Premium Ingredients",
              description: "Only the finest natural and synthetic components",
            },
            {
              title: "Expert Formulation",
              description: "Developed by leading cosmetic scientists",
            },
            {
              title: "Long-Lasting",
              description: "Formulas designed for all-day wear",
            },
          ],
          badge: "Premium Brand",
        },
        foodquality: {
          heading: "Quality You Can Trust",
          description:
            "Our commitment to excellence means every dish meets the highest standards of quality, freshness, and flavor. We maintain rigorous quality checks throughout our preparation process.",
          features: [
            {
              title: "Safety First",
              description: "Strict hygiene and safety protocols",
            },
            {
              title: "Fresh Daily",
              description: "Ingredients sourced fresh every day",
            },
            {
              title: "Made to Order",
              description: "Prepared fresh when you order",
            },
            {
              title: "Premium Quality",
              description: "Only the finest ingredients used",
            },
          ],
          badge: "5-Star Quality",
        },
        qualitySalon: {
          heading: "Excellence You Can Trust",
          description:
            "Our commitment to beauty excellence means every service meets the highest standards of quality, hygiene, and customer satisfaction. We maintain professional standards throughout every treatment.",
          features: [
            {
              title: "Hygiene First",
              description: "Strict sanitation and safety protocols",
            },
            {
              title: "Premium Products",
              description: "Only top-quality beauty brands used",
            },
            {
              title: "Expert Stylists",
              description: "Certified professionals with years of experience",
            },
            {
              title: "Personalized Service",
              description: "Tailored treatments for every client",
            },
          ],
          badge: "5-Star Salon",
        },

        //nail quality
        nailquality: {
          heading: "Excellence in Every Detail",
          description:
            "Our commitment to excellence means every nail service meets the highest standards of quality, cleanliness, and artistry. We maintain rigorous safety protocols and use only premium products.",
          badge: "5-Star Service",
          features: [
            {
              title: "Sanitized Tools",
              description: "Strict sterilization and hygiene protocols",
            },
            {
              title: "Premium Products",
              description: "Top-quality polishes and treatments",
            },
            {
              title: "Expert Technicians",
              description: "Skilled professionals with years of experience",
            },
            {
              title: "Healthy Nails",
              description: "Gentle care that promotes nail health",
            },
          ],
        },

        //EyeLash quality
        "lashquality": {
  "heading": "Excellence in Every Lash",
  "description": "We ensure every lash extension service meets the highest standards of safety, precision, and beauty.",
  "badge": "5-Star Service",

  "features": [
    {
      "title": "Sanitized Tools",
      "description": "Strict hygiene and sterilization protocols."
    },
    {
      "title": "Premium Lashes",
      "description": "High-quality extensions and adhesive."
    },
    {
      "title": "Expert Technicians",
      "description": "Certified lash artists with years of experience."
    },
    {
      "title": "Healthy Lash Care",
      "description": "Techniques that protect natural lash health."
    }
  ]
},

        // Cosmetic Call to Action
        cosmetic: {
          cta: {
            title: "Elevate Your Beauty Routine",
            description:
              "Join thousands of beauty enthusiasts who trust us for luxurious, high-quality cosmetics made to inspire confidence.",
            button: "Visit Now",
          },
        },

        // Food Call to Action
        food: {
          cta: {
            title: "Ready to Experience Amazing Flavors?",
            description:
              "Join thousands of satisfied customers who have made Rosar Nani their go-to destination for exceptional food experiences.",
            button: "Visit Now",
          },
        },

        // Salon Call to Action
        salon: {
          cta: {
            title: "Ready to Transform Your Look?",
            description:
              "Join thousands of satisfied clients who have made Rosar Nani their trusted destination for beauty and wellness services.",
            button: "Visit Now",
          },
        },

        // Nail Call to Action
        nailcta: {
          title: "Ready to Pamper Your Nails?",
          description:
            "Join thousands of satisfied clients who have made Rosar Nani their go-to destination for beautiful, expertly crafted nails.",
          button: "Book Appointment",
        },

        // EyeLash Call to Action
        "lashcta": {
  "title": "Ready to Transform Your Lashes?",
  "description": "Join thousands of satisfied clients who trust Rosar Nani for beautifully crafted lash extensions and premium eyelash treatments.",
  "button": "Book Appointment"
},

        // Footer Section
        footerBrand: "Rosar Nani",
        footerDescription:
          "Your personalized destination for food delicacies, salon treatments, and customized products.",
        footerDescriptionfoodsrv:
          "Bringing you exceptional food experiences with quality, passion,and care.",
        footerDescriptionsalonsrv:
          "Bringing you exceptional beauty experiences with quality, passion, and care.",
        footerDescriptioncosmeticssrv:
          "Bringing you exceptional beauty products with quality, innovation, and timeless elegance.",
        footerQuickLinksTitle: "Quick Links",
        footerQuickLinks: [
          { name: "Home", href: "#home" },
          { name: "Food", href: "/food" },
          { name: "Salon", href: "/salon" },
          { name: "Products", href: "/cosmetics" },
          { name: "Contact", href: "#contact" },
        ],
        footerQuickLinksfoodsrv: [
          { name: "Home", href: "/" },
          // { name: "Services", href: "/services" },
          // { name: "Categories", href: "#categories" },
          // { name: "Quality", href: "#quality" },
          // { name: "Contact", href: "#footer" },
          { name: "Food", href: "/food" },
          { name: "Salon", href: "/salon" },
          { name: "Products", href: "/cosmetics" },
          { name: "Contact", href: "#contact" },
        ],
        footerContactTitle: "Contact Info",
        footerContact: {
          location:
            "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230t",
          phone: "‪+66 6-3240-1934‬",
          email: "contact@rosarnani.com",
        },

        //Footer Policies

        // footerPoliciesTitle: "Legal",
        // footerPolicies: [
        //   { name: "Privacy Policy", href: "#" },
        //   { name: "Terms of Service", href: "#" },
        //   { name: "Refund Policy", href: "#" },
        // ],

        footerPoliciesTitle: "Legal",
        footerPolicies: {
          privacy: {
            name: "Privacy Policy",
            href: "#",
            description: "Learn how we handle your personal data with care.",
          },
          terms: {
            name: "Terms of Service",
            href: "#",
            description:
              "Read the terms and conditions for using our services.",
          },
          refund: {
            name: "Refund Policy",
            href: "#",
            description:
              "Understand our refund process and eligibility criteria.",
          },
        },

        //         "footerPolicies": {
        //   "privacy": { "name": "Privacy Policy", "href": "#", "description": "..." },
        //   "terms": { "name": "Terms of Service", "href": "#", "description": "..." },
        //   "refund": { "name": "Refund Policy", "href": "#", "description": "..." }
        // },

        footerCopyright:
          "© 2025 Rosar Nani. All rights reserved. Designed with care for your personalized experience.",

        // Services Section
        servicesTitle: "Our Services",
        servicesText:
          "Experience our unique blend of culinary excellence, wellness treatments, and personalized products",
        servicesList: [
          {
            title: "Nail Glam",
            description:
              "Long-lasting gel nails with premium Thai designs, flawless shine, and expert detailing for a perfect, elegant look.",
            image: "/homeNail.png",
            //     image:
            // "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/nail",
          },
          {
            title: "Salon Treatments",
            description:
              "Indulge in rejuvenating spa and salon services designed to refresh your mind, body, and spirit with personalized care.",
            image:
              "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWxvbiUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc1NzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/salon",
          },
          {
            title: "Customized Products",
            description:
              "Discover premium cosmetic and wellness products specially formulated to match your skin type and personal preferences.",
            image:
              "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3NTczMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/cosmetics",
          },
        ],
      },
      // Footer Policies
      footerPolicies: {
        privacy: {
          name: "Privacy Policy",
          href: "#",
          description: "Learn how we handle your personal data with care.",
        },
        terms: {
          name: "Terms of Service",
          href: "#",
          description: "Read the terms and conditions for using our services.",
        },
        refund: {
          name: "Refund Policy",
          href: "#",
          description:
            "Understand our refund process and eligibility criteria.",
        },
      },
    },
    th: {
      translation: {
        comingsoon: "เร็ว ๆ นี้",
        backToHome: "กลับไปหน้าหลัก",

        // General
        welcome: "ยินดีต้อนรับสู่ Rosar Nani",
        welcomeFoodService: "ยินดีต้อนรับสู่บริการอาหาร",
        welcomeSalonService: "ยินดีต้อนรับสู่บริการซาลอน",
        welcomeCosmeticsService: "ยินดีต้อนรับสู่บริการด้านเครื่องสำอาง",
        Home: "บ้าน",
        Categories: "หมวดหมู่",
        about: "เกี่ยวกับเรา",
        servicesLabel1: "บริการของเรา",
        quality: "รับประกันคุณภาพดีที่สุด",
        qualitysrv: "คุณภาพที่คุณวางใจได้",
        testimonials: "สิ่งที่ลูกค้าของเราพูด",
        contact: "ติดต่อเรา",
        footer: "© 2025 Rosar Nani. สงวนลิขสิทธิ์",

        serviceFood: "บริการอาหาร",
        serviceSalon: "บริการซาลอน",
        serviceCosmetics: "บริการด้านเครื่องสำอาง",

        //Hero or Image session
        hero: {
          landtitle: "สถานที่ที่สไตล์ผสานกับความงามอย่างลงตัว",
          landsubtitle: "ปรับแต่งสำหรับคุณ",

          foodtitle: "รสชาติแสนอร่อยที่รังสรรค์มาเพื่อคุณโดยเฉพาะ",
          foodsubtitle:
            "สัมผัสกับเมนูที่คัดสรรมาอย่างดีเต็มไปด้วยรสชาติ สุขภาพ และความสดใหม่",

          salontitle: "ความงามที่พูดกับจิตวิญญาณของคุณ",
          salonsubtitle:
            "สัมผัสประสบการณ์บริการความงามระดับหรูหราด้วยสไตลิสต์ผู้เชี่ยวชาญ ผลิตภัณฑ์ระดับพรีเมียม และการดูแลแบบเฉพาะบุคคล",

          cosmeticstitle: "เมื่อความหรูหราผสานกับความงาม",
          cosmeticssubtitle:
            "ค้นพบผลิตภัณฑ์เครื่องสำอางระดับพรีเมียมที่ผลิตจากส่วนผสมสุดหรู สูตรที่สร้างสรรค์ และความสง่างามเหนือกาลเวลา",

          eyelashtitle: "ขนตาสวยเป๊ะที่สะกดทุกสายตา",
          eyelashsubtitle:
            "ยกระดับความงามของดวงตาด้วยงานต่อขนตาสุดหรู ประณีตทุกเส้น สวยฟู ดูเป็นธรรมชาติและติดทนนาน",

          button: "สำรวจเมนู",
        },

        // Main Heading Section
        mainHeadingFood: {
          heading: "อาหารที่สื่อสารกับจิตวิญญาณของคุณ",
          description:
            "ตั้งแต่ของว่างแสนอร่อยไปจนถึงของหวาน ทุกจานล้วนปรุงอย่างพิถีพิถันด้วยวัตถุดิบสดใหม่และรสชาติที่เปี่ยมล้น ดื่มด่ำไปกับเมนูที่ออกแบบมาเพื่อมอบความสุขให้กับทุกประสาทสัมผัสของคุณ",
        },
        mainHeadingBeauty: {
          heading: "ยกระดับความงามตามธรรมชาติของคุณ",
          description:
            "ตั้งแต่การตัดผมอย่างแม่นยำไปจนถึงทรีตเมนต์ฟื้นฟูผิว ทุกบริการล้วนรังสรรค์ขึ้นด้วยความเชี่ยวชาญและความมุ่งมั่น ค้นพบบริการความงามครบวงจรที่ออกแบบมาเพื่อเสริมความมั่นใจและสไตล์ของคุณ",
        },
        mainHeadingCosmetics: {
          heading: "ปลดปล่อยความเปล่งประกายภายในตัวคุณ",
          description:
            "ตั้งแต่ลิปสติกสีสันสดใสไปจนถึงรองพื้นที่สวยไร้ที่ติ ผลิตภัณฑ์ทุกชิ้นล้วนผ่านการคิดค้นสูตรอย่างพิถีพิถันและพิถีพิถัน สำรวจคอลเลกชันเครื่องสำอางระดับพรีเมียมที่เราคัดสรรมาเพื่อเสริมความงามตามธรรมชาติและเพิ่มความมั่นใจให้กับคุณ",
        },
        mainHeadingNail: {
          heading: "เล็บที่บ่งบอกสไตล์ของคุณ",
          description:
            "ตั้งแต่การทำเล็บแบบคลาสสิกไปจนถึงงานศิลปะบนเล็บสุดสร้างสรรค์ ทุกบริการถูกรังสรรค์อย่างพิถีพิถันด้วยผลิตภัณฑ์คุณภาพระดับพรีเมียมและความใส่ใจในทุกรายละเอียด ค้นพบการดูแลมือและเล็บที่ออกแบบมาเพื่อปรนนิบัติและเพิ่มความงามให้กับเล็บของคุณ",
        },
        mainHeadingEyeLash: {
          heading: "ขนตาสวยงามที่ช่วยเสริมความงามในแบบของคุณ",
          description:
            "ตั้งแต่ลุคธรรมชาติไปจนถึงความยาวที่โดดเด่น ทุกเส้นขนตาต่อถูกทำอย่างประณีต ใส่ใจทุกรายละเอียด มอบความสวยที่เสริมเสน่ห์และกรอบดวงตาของคุณอย่างสมบูรณ์แบบ",
        },

        // Categories Section

        // Food Categories
        categoriesSectionTitle: "หมวดหมู่อร่อยของเรา",

        categories: [
          {
            title: "อาหารจานหลักรสเลิศ",
            description:
              "อาหารจานหลักที่รังสรรค์อย่างพิถีพิถันด้วยวัตถุดิบชั้นเลิศและศิลปะการทำอาหาร",
          },
          {
            title: "พาสต้าสด",
            description:
              "เมนูพาสต้าทำมือที่มีรสชาติต้นตำรับและเทคนิคการปรุงอาหารแบบดั้งเดิม",
          },
          {
            title: "ของหวานช่างฝีมือ",
            description:
              "ขนมอบและขนมหวานรสเลิศที่ทำด้วยส่วนผสมชั้นเลิศและใส่ใจในรายละเอียด",
          },
          {
            title: "ชามเพื่อสุขภาพ",
            description:
              "ชามหลากสีสันที่เต็มไปด้วยผักสด ธัญพืช และซูเปอร์ฟู้ดที่อุดมไปด้วยคุณค่าทางโภชนาการ",
          },
        ],

        // Salon Categories
        servicesSectionTitle: "บริการอันเป็นเอกลักษณ์ของเรา",
        services: [
          {
            title: "จัดแต่งทรงผม",
            description:
              "บริการตัดผม ทำสี และจัดแต่งทรงผมโดยผู้เชี่ยวชาญด้วยเทคนิคล่าสุดและผลิตภัณฑ์ระดับพรีเมียม",
          },
          {
            title: "ทรีทเมนท์สปา",
            description:
              "ทรีตเมนต์บำรุงผิวหน้าเพื่อการผ่อนคลาย มาส์กฟื้นฟู และการบำบัดเพื่อผิวเปล่งปลั่ง",
          },
          {
            title: "บริการทำเล็บ",
            description:
              "บริการทำเล็บมือ เล็บเท้า และศิลปะบนเล็บแบบมืออาชีพ ใส่ใจในรายละเอียดและสุขอนามัย",
          },
          {
            title: "แต่งหน้าสวย",
            description:
              "บริการแต่งหน้ามืออาชีพ สำหรับงานพิเศษ การถ่ายภาพ และความสวยหวานในชีวิตประจำวัน",
          },
        ],
        // Cosmetics Categories
        collectionsSectionTitle: "คอลเลกชันลายเซ็นของเรา",
        collections: [
          {
            title: "ลิปคอลเลคชั่น",
            description:
              "ลิปสติก ลิปกลอส และบาล์มสุดหรูในเฉดสีอันสวยงามที่เข้ากันได้กับทุกโทนสีผิว",
          },
          {
            title: "สิ่งจำเป็นในการดูแลผิว",
            description:
              "เซรั่มบำรุงผิว มอยส์เจอร์ไรเซอร์ และทรีตเมนต์เพื่อผิวสุขภาพดีและเปล่งปลั่งในทุกวัย",
          },
          {
            title: "แต่งตา",
            description:
              "อายแชโดว์ มาสคาร่า และอายไลเนอร์อันน่าหลงใหล สร้างสรรค์ลุคอันน่าหลงใหลที่ติดทนนานตลอดวัน",
          },
          {
            title: "กลิ่นหอม",
            description:
              "น้ำหอมและโอ เดอ ทอยเล็ตต์อันเลิศหรูที่มีกลิ่นหอมอันแสนซับซ้อนสำหรับทุกโอกาส",
          },
        ],

        //nail categories
        NailSectionTitle: "คอลเลกชันซิกเนเจอร์ของเรา",
        Nail: [
          {
            title: "คลาสสิกแมนนิคิวร์",
            description:
              "ความงามเหนือกาลเวลาด้วยการตัดแต่งทรงเล็บอย่างประณีต ดูแลจมูกเล็บ และเลือกสีทาเล็บตามสไตล์ของคุณ",
          },
          {
            title: "ออกแบบเล็บอาร์ต",
            description:
              "แสดงความเป็นตัวคุณด้วยงานศิลปะบนเล็บ พร้อมลวดลายและดีไซน์สุดประณีตไม่เหมือนใคร",
          },
          {
            title: "เจลและอะคริลิก",
            description:
              "ความงามที่คงทนด้วยเจลหรืออะคริลิกคุณภาพพรีเมียม เพื่อเล็บที่ดูโดดเด่นและติดทนนาน",
          },
          {
            title: "สปาเพดิคิวร์",
            description:
              "ประสบการณ์ดูแลเท้าสุดหรู พร้อมสครับ ขัดเท้า นวดผ่อนคลาย และการทาสีเล็บอย่างสมบูรณ์แบบ",
          },
        ],

        //EyeLash categories
        EyelashSectionTitle: "บริการต่อขนตายอดนิยมของเรา",
        Eyelash: [
          {
            title: "ขนตาคลาสสิก",
            description:
              "ลุคสวยแบบธรรมชาติ ด้วยการต่อขนตาทีละเส้นอย่างประณีต ให้ความรู้สึกเรียบหรู ดูดีทุกมุม",
          },
          {
            title: "ขนตาวอลุ่ม",
            description:
              "ขนตาฟู หนา ดูโดดเด่นด้วยขนตาหลายเส้นที่บางพิเศษ มอบลุคที่หรูหราและสะกดทุกสายตา",
          },
          {
            title: "ขนตาไฮบริด",
            description:
              "ความลงตัวระหว่างคลาสสิกและวอลุ่ม เพิ่มมิติและเท็กซ์เจอร์ที่ดูเป็นธรรมชาติ",
          },
          {
            title: "ลิฟต์ขนตา & ทินท์",
            description:
              "ยกโคนขนตาให้โค้งงอน พร้อมย้อมสีเพื่อให้ขนตาดูคมชัด โดยไม่ต้องต่อขนตา",
          },
        ],

        // About Section
        aboutTitle: "เกี่ยวกับ Rosar Nani",
        aboutText:
          "Rosar Nani เป็นแพลตฟอร์ม/ร้านค้าที่ให้คุณได้ลิ้มรสอาหารสุดพิเศษและประสบการณ์สปาที่ผ่อนคลายพร้อมผลิตภัณฑ์เครื่องสำอางที่ออกแบบเฉพาะสำหรับคุณ เราเชื่อในการสร้างประสบการณ์ส่วนตัวที่บำรุงทั้งร่างกายและจิตวิญญาณ ให้ผสมผสานระหว่างอาหารอร่อยและการบำบัดสุขภาพที่ปรับให้เหมาะกับความชอบของคุณ",

        aboutTitle1: "ประสบการณ์อันเป็นเอกลักษณ์ของเรา",
        aboutText1:
          "ที่โรซาร์ นานี ทุกการมาเยือนคือการพักผ่อนอันแสนสุข ลิ้มรสอาหารรสเลิศที่คัดสรรมาอย่างดีและช่วงเวลาแห่งการฟื้นฟูสุขภาพที่รังสรรค์ขึ้นเพื่อคุณโดยเฉพาะ มอบความสดชื่นและแรงบันดาลใจให้คุณ",

        // Contact Section
        contactTitle: "ติดต่อเรา",
        contactText:
          "พร้อมที่จะสัมผัสประสบการณ์อาหารและสุขภาพแบบส่วนตัวหรือยัง? ติดต่อเราเพื่อเริ่มต้นการเดินทางของคุณ",
        contactFormTitle: "ส่งข้อความถึงเรา",
        nameLabel: "ชื่อ",
        namePlaceholder: "ชื่อเต็มของคุณ",
        emailLabel: "อีเมล",
        emailPlaceholder: "your.email@example.com",
        messageLabel: "ข้อความ",
        messagePlaceholder:
          "บอกเราเกี่ยวกับความต้องการของคุณและเราสามารถช่วยคุณได้อย่างไร...",
        sendButton: "ส่งข้อความ",
        contactInfoTitle: "ข้อมูลการติดต่อ",
        contactInfoText:
          "เรายินดีที่จะรับฟังคุณ! ติดต่อเราผ่านช่องทางใดก็ได้ด้านล่าง และเราจะตอบกลับคุณโดยเร็วที่สุด",
        locationTitle: "สถานที่",
        locationText:
          "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230",
        phoneTitle: "โทรศัพท์",
        phoneText: "‪+66 6-3240-1934‬",
        emailTitle: "อีเมล",
        emailText: "contact@rosarnani.com",
        businessHoursTitle: "เวลาทำการ",
        businessHoursMonFri: "จันทร์ - ศุกร์: 9:00 น. - 20:00 น.",
        businessHoursSat: "เสาร์: 10:00 น. - 18:00 น.",
        businessHoursSun: "อาทิตย์: 11:00 น. - 17:00 น.",

        //Quality Promise Section

        qualityTitle: "คำมั่นสัญญาด้านคุณภาพของเรา",
        qualityText:
          "เรามุ่งมั่นที่จะมอบประสบการณ์ที่ยอดเยี่ยมผ่านค่านิยมหลักของเรา",
        qualityCheckTitle: "การตรวจสอบคุณภาพ",
        qualityCheckDesc:
          "ทุกผลิตภัณฑ์และบริการผ่านการประกันคุณภาพอย่างเข้มงวดเพื่อความเป็นเลิศ",
        customizedTitle: "ปรับตามความต้องการ",
        customizedDesc:
          "ประสบการณ์และผลิตภัณฑ์ที่ออกแบบเฉพาะสำหรับความต้องการและความชอบของคุณ",
        customerSatisfactionTitle: "ความพึงพอใจของลูกค้า",
        customerSatisfactionDesc:
          "ความสุขของคุณคือความสำคัญของเรา – เราทุ่มเทเพื่อเกินความคาดหวัง",

        //Testimonials Section
        testimonialsTitle: "สิ่งที่ลูกค้าของเราพูด",
        testimonialsText:
          "ฟังความเห็นจากลูกค้าที่พึงพอใจเกี่ยวกับประสบการณ์ส่วนบุคคลของพวกเขา",
        testimonialsList: [
          {
            name: "ซาร่าห์ จอห์นสัน",
            rating: 5,
            text: "Rosar Nani เกินความคาดหมายของฉัน! อาหารอร่อยมาก และการบำบัดสปาทำให้ฉันรู้สึกสดชื่น การให้บริการแบบส่วนตัวทำให้ทุกอย่างแตกต่าง",
            service: "ประสบการณ์อาหารและสปา",
          },
          {
            name: "ไมเคิล เฉิน",
            rating: 5,
            text: "ผลิตภัณฑ์ดูแลผิวแบบกำหนดเองยอดเยี่ยม! พวกเขาใช้เวลาเข้าใจสภาพผิวของฉันและสร้างผลิตภัณฑ์ที่เหมาะสมกับฉันอย่างสมบูรณ์ แนะนำอย่างยิ่ง!",
            service: "ผลิตภัณฑ์ปรับแต่งเฉพาะ",
          },
          {
            name: "เอมิลี่ โรดริเกซ",
            rating: 5,
            text: "แนวคิดที่ไม่เหมือนใคร! ได้เพลิดเพลินกับอาหารชั้นเลิศและสปาในที่เดียวกัน คุณภาพยอดเยี่ยม",
            service: "ประสบการณ์ครบวงจร",
          },
          {
            name: "เดวิด ธอมป์สัน",
            rating: 5,
            text: "ความใส่ใจในรายละเอียดยอดเยี่ยม ทุกสิ่งในระหว่างการเยี่ยมชมถูกปรับให้เหมาะกับความต้องการของฉัน ทีมงานใส่ใจความพึงพอใจของลูกค้าอย่างแท้จริง",
            service: "บริการส่วนบุคคล",
          },
          {
            // rohan
            name: "โรฮาน บี.",
            rating: 5,
            text: "ฉันชอบอาหารที่พิถีพิถันและทรีตเมนต์เพื่อสุขภาพที่ผ่อนคลาย ทุกอย่างดูลงตัวสำหรับฉันโดยเฉพาะ",
            service: "ประสบการณ์ที่สมบูรณ์",
          },
          {
            // ashwani
            name: "อัชวานี เค.",
            rating: 5,
            text: "โรซาร์ นานี มอบการผสมผสานที่ลงตัวระหว่างอาหารรสเลิศและการบำบัดที่ผ่อนคลาย",
            service: "ประสบการณ์ที่สมบูรณ์",
          },
        ],

        //Feature section 
          "eyelashfeatures": {
    "list": [
      {
        "title": "ช่างผู้เชี่ยวชาญ",
        "description": "ช่างต่อขนตาที่ผ่านการรับรองและมีประสบการณ์หลายปี"
      },
      {
        "title": "ผลิตภัณฑ์พรีเมียม",
        "description": "ขนตาและกาวคุณภาพสูง ปลอดภัยต่อดวงตา"
      },
      {
        "title": "ติดทนนาน",
        "description": "ขนตาสวยคงทนยาวนาน 4–6 สัปดาห์"
      },
      {
        "title": "ปลอดภัยและอ่อนโยน",
        "description": "ผลิตภัณฑ์ hypoallergenic เหมาะสำหรับดวงตาแพ้ง่าย"
      }
    ]
  },

        // Quality Sections
        cosmeticsquality: {
          heading: "คุณภาพที่คุณวางใจได้",
          description:
            "ความมุ่งมั่นของเราต่อความเป็นเลิศด้านเครื่องสำอางหมายความว่าผลิตภัณฑ์ทุกชิ้นต้องผ่านมาตรฐานสูงสุดด้านคุณภาพ ความปลอดภัย และประสิทธิภาพ เราใช้ส่วนผสมพรีเมียมและสูตรล้ำสมัยเพื่อมอบผลลัพธ์ที่ยอดเยี่ยม",
          features: [
            {
              title: "ปราศจากการทดสอบกับสัตว์",
              description: "ไม่เคยทดสอบกับสัตว์ เสมอด้วยจริยธรรม",
            },
            {
              title: "ส่วนผสมพรีเมียม",
              description: "ใช้ส่วนผสมธรรมชาติและสังเคราะห์ที่ดีที่สุด",
            },
            {
              title: "การพัฒนาจากผู้เชี่ยวชาญ",
              description: "พัฒนาจากนักวิทยาศาสตร์เครื่องสำอางชั้นนำ",
            },
            {
              title: "ใช้งานยาวนาน",
              description: "สูตรที่ออกแบบมาเพื่อการใช้งานตลอดวัน",
            },
          ],
          badge: "แบรนด์พรีเมียม",
        },

        foodquality: {
          heading: "คุณภาพที่คุณวางใจได้",
          description:
            "ความมุ่งมั่นของเราต่อความเป็นเลิศหมายความว่าอาหารทุกจานต้องผ่านมาตรฐานสูงสุดด้านคุณภาพ ความสดใหม่ และรสชาติ เรามีการตรวจสอบคุณภาพอย่างเข้มงวดตลอดกระบวนการเตรียมการ",
          features: [
            {
              title: "ความปลอดภัยมาก่อน",
              description: "มาตรการสุขอนามัยและความปลอดภัยที่เข้มงวด",
            },
            {
              title: "สดใหม่ทุกวัน",
              description: "วัตถุดิบที่คัดสรรสดใหม่ทุกวัน",
            },
            {
              title: "ทำตามออร์เดอร์",
              description: "เตรียมสดใหม่เมื่อคุณสั่ง",
            },
            {
              title: "คุณภาพพรีเมียม",
              description: "ใช้วัตถุดิบที่ดีที่สุดเท่านั้น",
            },
          ],
          badge: "คุณภาพระดับ 5 ดาว",
        },

        qualitySalon: {
          heading: "ความเป็นเลิศที่คุณวางใจได้",
          description:
            "ความมุ่งมั่นของเราต่อความเป็นเลิศด้านความงามหมายความว่าบริการทุกอย่างต้องผ่านมาตรฐานสูงสุดด้านคุณภาพ สุขอนามัย และความพึงพอใจของลูกค้า เรารักษามาตรฐานวิชาชีพตลอดการรักษาทุกครั้ง",
          features: [
            {
              title: "สุขอนามัยมาก่อน",
              description: "มาตรการสุขอนามัยและความปลอดภัยที่เข้มงวด",
            },
            {
              title: "ผลิตภัณฑ์พรีเมียม",
              description: "ใช้แบรนด์ความงามคุณภาพสูงเท่านั้น",
            },
            {
              title: "ช่างผู้เชี่ยวชาญ",
              description: "มืออาชีพที่ผ่านการรับรองและมีประสบการณ์หลายปี",
            },
            {
              title: "บริการที่ปรับให้เหมาะสม",
              description: "การรักษาที่ปรับให้เหมาะสมกับลูกค้าแต่ละคน",
            },
          ],
          badge: "ซาลอนระดับ 5 ดาว",
        },

        //nail quality
        nailquality: {
          heading: "ความเป็นเลิศในทุกรายละเอียด",
          description:
            "เรามุ่งมั่นในมาตรฐานสูงสุดด้านคุณภาพ ความสะอาด และความพิถีพิถันในการทำเล็บ พร้อมดูแลความปลอดภัยและใช้เฉพาะผลิตภัณฑ์ระดับพรีเมียม",
          badge: "บริการระดับ 5 ดาว",
          features: [
            {
              title: "อุปกรณ์ปลอดเชื้อ",
              description: "การฆ่าเชื้อและสุขอนามัยที่เข้มงวด",
            },
            {
              title: "ผลิตภัณฑ์พรีเมียม",
              description: "ใช้ยาทาเล็บและทรีตเมนต์คุณภาพสูงเท่านั้น",
            },
            {
              title: "ช่างทำเล็บมืออาชีพ",
              description: "ทีมงานที่มีประสบการณ์หลายปี",
            },
            {
              title: "เล็บสุขภาพดี",
              description: "การดูแลอย่างอ่อนโยนเพื่อส่งเสริมสุขภาพเล็บ",
            },
          ],
        },
        
        "lashquality": {
  "heading": "ความสมบูรณ์แบบในทุกเส้นขนตา",
  "description": "เราพิถีพิถันในทุกขั้นตอน เพื่อให้บริการต่อขนตามีความปลอดภัย ประณีต และสวยงามที่สุด โดยใช้ผลิตภัณฑ์พรีเมียมและมาตรฐานการดูแลระดับสูง",
  "badge": "บริการ 5 ดาว",

  "features": [
    {
      "title": "อุปกรณ์ผ่านการฆ่าเชื้อ",
      "description": "ปฏิบัติตามขั้นตอนการทำความสะอาดและสุขอนามัยอย่างเข้มงวด"
    },
    {
      "title": "ขนตาพรีเมียม",
      "description": "ใช้ขนตาและกาวคุณภาพสูงเท่านั้น"
    },
    {
      "title": "ช่างมืออาชีพ",
      "description": "ช่างต่อขนตาที่มีใบรับรองและประสบการณ์หลายปี"
    },
    {
      "title": "ดูแลขนตาธรรมชาติ",
      "description": "เทคนิคที่ช่วยปกป้องและไม่ทำร้ายขนตาจริง"
    }
  ]
},


        // Cosmetic Call to Action
        cosmetic: {
          cta: {
            title: "ยกระดับกิจวัตรความงามของคุณ",
            description:
              "เข้าร่วมกับผู้ที่รักความงามนับพันที่ไว้วางใจเราในด้านเครื่องสำอางหรูหรา คุณภาพสูง ที่สร้างแรงบันดาลใจและความมั่นใจ",
            button: "เยี่ยมชมเลย",
          },
        },
        // Food Call to Action
        food: {
          cta: {
            title: "พร้อมที่จะสัมผัสรสชาติอันยอดเยี่ยมหรือยัง?",
            description:
              "เข้าร่วมกับลูกค้านับพันที่ไว้วางใจ Rosar Nani ให้เป็นจุดหมายปลายทางสำหรับประสบการณ์อาหารที่ยอดเยี่ยม",
            button: "เยี่ยมชมเลย",
          },
        },

        //nail Call to Action
        nailcta: {
          title: "พร้อมเปลี่ยนลุคเล็บของคุณหรือยัง?",
          description:
            "เข้าร่วมกับลูกค้านับพันที่ไว้วางใจ Rosar Nani ให้ดูแลและสร้างสรรค์เล็บสวยงามอย่างมืออาชีพ",
          button: "จองคิวทำเล็บ",
        },
        salon: {
          cta: {
            title: "พร้อมที่จะเปลี่ยนลุคของคุณแล้วหรือยัง?",
            description:
              "เข้าร่วมกับลูกค้านับพันที่ไว้วางใจ Rosar Nani ให้เป็นจุดหมายปลายทางสำหรับบริการด้านความงามและสุขภาพ",
            button: "เยี่ยมชมตอนนี้",
          },
        },

        //eyelash Call to Action
        "lashcta": {
  "title": "พร้อมเปลี่ยนลุคขนตาของคุณหรือยัง?",
  "description": "ร่วมเป็นหนึ่งในลูกค้ามากมายที่ไว้วางใจ Rosar Nani เพื่อขนตาที่สวยงาม ประณีต และทำอย่างมืออาชีพ",
  "button": "จองคิวตอนนี้"
},

        // Footer Section
        footerBrand: "Rosar Nani",
        footerDescription:
          "จุดหมายส่วนตัวของคุณสำหรับอาหารรสเลิศ การบริการสปา และผลิตภัณฑ์ที่ปรับแต่งเฉพาะคุณ",
        footerDescriptionfoodsrv:
          "มอบประสบการณ์การรับประทานอาหารสุดพิเศษด้วยคุณภาพ ความหลงใหล และความใส่ใจ",
        footerQuickLinksTitle: "ลิงก์ด่วน",
        footerQuickLinks: [
          { name: "หน้าหลัก", href: "#home" },
          { name: "เมนู", href: "#menu" },
          { name: "สปา", href: "#salon" },
          { name: "ผลิตภัณฑ์", href: "#products" },
          { name: "ติดต่อ", href: "#contact" },
        ],
        footerQuickLinksfoodsrv: [
          { name: "บ้าน", href: "/" },
          // { name: "Services", href: "/services" },
          // { name: "Categories", href: "#categories" },
          // { name: "Quality", href: "#quality" },
          // { name: "Contact", href: "#footer" },
          { name: "อาหาร", href: "/food" },
          { name: "ร้านเสริมสวย", href: "/salon" },
          { name: "สินค้า", href: "/cosmetics" },
          { name: "ติดต่อ", href: "#contact" },
        ],
        footerContactTitle: "ข้อมูลติดต่อ",
        footerContact: {
          location:
            "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230",
          phone: "‪+66 6-3240-1934‬",
          email: "contact@rosarnani.com",
        },
        // footerPoliciesTitle: "กฎหมาย",
        // footerPolicies: [
        //   { name: "นโยบายความเป็นส่วนตัว", href: "#" },
        //   { name: "ข้อกำหนดการให้บริการ", href: "#" },
        //   { name: "นโยบายการคืนเงิน", href: "#" },
        // ],

        //Footer Policies
        footerPoliciesTitle: "กฎหมาย",
        footerPolicies: {
          privacy: {
            name: "นโยบายความเป็นส่วนตัว",
            href: "#",
            description:
              "เรียนรู้วิธีที่เราดูแลข้อมูลส่วนบุคคลของคุณด้วยความเอาใจใส่",
          },
          terms: {
            name: "ข้อกำหนดการให้บริการ",
            href: "#",
            description: "อ่านข้อกำหนดและเงื่อนไขสำหรับการใช้บริการของเรา",
          },
          refund: {
            name: "นโยบายการคืนเงิน",
            href: "#",
            description: "เข้าใจกระบวนการคืนเงินและเกณฑ์ความเหมาะสมของเรา",
          },
        },

        footerCopyright:
          "© 2025 Rosar Nani สงวนลิขสิทธิ์ ออกแบบด้วยความเอาใจใส่สำหรับประสบการณ์ส่วนตัวของคุณ",

        //Services Section

        servicesTitle: "บริการของเรา",
        servicesText:
          "สัมผัสประสบการณ์ผสมผสานระหว่างความอร่อยด้านอาหาร การบำบัดสุขภาพ และผลิตภัณฑ์ส่วนบุคคล",
        servicesList: [
          {
            title: "เล็บสวยแกลม",
            description:
              "เจลเล็บติดทนนาน พร้อมดีไซน์พรีเมียมสไตล์ไทย เงางามไร้ที่ติ และงานละเอียดประณีต เพื่อความสวยหรูอย่างสมบูรณ์แบบ",
            image: "/homeNail.png",
            // image:
            //   "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/nail ",
          },
          {
            title: "บริการสปาและซาลอน",
            description:
              "ผ่อนคลายด้วยบริการสปาและซาลอนที่ออกแบบมาเพื่อเติมเต็มร่างกาย จิตใจ และจิตวิญญาณของคุณ",
            image:
              "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWxvbiUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc1NzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/salon",
          },
          {
            title: "ผลิตภัณฑ์ปรับแต่งเฉพาะ",
            description:
              "ค้นพบผลิตภัณฑ์เครื่องสำอางและสุขภาพระดับพรีเมียมที่ออกแบบเฉพาะสำหรับสภาพผิวและความชอบส่วนตัวของคุณ",
            image:
              "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3NTczMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/cosmetics",
          },
        ],
      },
    },
  },
  // lng: "en",
  // fallbackLng: "en",
  // interpolation: { escapeValue: false },

  lng: "th", // ✅ Set default language to Thai
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const changeLanguage = (lng) => i18n.changeLanguage(lng);

export default i18n;
