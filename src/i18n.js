import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // General
        welcome: "Welcome to Rosar Nani",
        about: "About Us",
        services: "Our Services",
        quality: "Best Quality Guaranteed",
        testimonials: "What Our Customers Say",
        contact: "Contact Us",
        footer: "© 2025 Rosar Nani. All rights reserved.",

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
        locationText: "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230",
        phoneTitle: "Phone",
        phoneText: "+1 (555) 123-4567",
        emailTitle: "Email",
        emailText: "hello@rosarnani.com",
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
          { name: "Services", href: "/services" },
          { name: "Categories", href: "#categories" },
          { name: "Quality", href: "#quality" },
          { name: "Contact", href: "#footer" },
        ],
        footerContactTitle: "Contact Info",
        footerContact: {
          location: "123 Wellness Street, Gourmet District",
          phone: "+1 (555) 123-4567",
          email: "hello@rosarnani.com",
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
            title: "Food Delicacies",
            description:
              "Savor exquisite culinary creations crafted with the finest ingredients, tailored to your taste preferences and dietary needs.",
            image:
              "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            link: "/food",
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
        // General
        welcome: "ยินดีต้อนรับสู่ Rosar Nani",
        about: "เกี่ยวกับเรา",
        services: "บริการของเรา",
        quality: "รับประกันคุณภาพดีที่สุด",
        testimonials: "สิ่งที่ลูกค้าของเราพูด",
        contact: "ติดต่อเรา",
        footer: "© 2025 Rosar Nani. สงวนลิขสิทธิ์",

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
        locationText: "234 Moo 5, Song Nuea Subdistrict, Namon District, Kalasin Province 46230",
        phoneTitle: "โทรศัพท์",
        phoneText: "+1 (555) 123-4567",
        emailTitle: "อีเมล",
        emailText: "hello@rosarnani.com",
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
        //Contact Section

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
        footerContactTitle: "ข้อมูลติดต่อ",
        footerContact: {
          location: "123 ถนนเวลเนส เขตกูร์เมต์",
          phone: "+1 (555) 123-4567",
          email: "hello@rosarnani.com",
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
            title: "อาหารอร่อยพิเศษ",
            description:
              "ลิ้มรสอาหารสุดพิเศษที่ปรุงด้วยวัตถุดิบชั้นเลิศ ปรับให้ตรงกับความชอบและความต้องการด้านโภชนาการของคุณ",
            image:
              "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link: "/food "
          },
          {
            title: "บริการสปาและซาลอน",
            description:
              "ผ่อนคลายด้วยบริการสปาและซาลอนที่ออกแบบมาเพื่อเติมเต็มร่างกาย จิตใจ และจิตวิญญาณของคุณ",
            image:
              "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWxvbiUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc1NzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link:"/salon"
          },
          {
            title: "ผลิตภัณฑ์ปรับแต่งเฉพาะ",
            description:
              "ค้นพบผลิตภัณฑ์เครื่องสำอางและสุขภาพระดับพรีเมียมที่ออกแบบเฉพาะสำหรับสภาพผิวและความชอบส่วนตัวของคุณ",
            image:
              "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3NTczMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              link:"/cosmetics"
          },
        ],
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const changeLanguage = (lng) => i18n.changeLanguage(lng);

export default i18n;
