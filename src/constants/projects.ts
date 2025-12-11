import { IProject } from "../interfaces/IProject";

export const projects: IProject[] = [
  {
    title: "InCustoms",
    description:
      "InCustoms is a web app that uses AI-powered document processing to automate data extraction and accelerate data entry — a company-owned product of PT Indotama Teknologi Inovasi (PT INTI).",
    thumbnail: "/images/project/incustoms.png",
    stack: [
      "Angular",
      "Spring Boot",
      "Java",
      "Typescript",
      "Tailwind",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Github Action",
      "Grafana",
      "Prometheus",
      "Terraform",
      "OpenTelemetry",
      "Ray Framework",
    ],
    demo: "https://incustoms.id",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "InMeterai",
    description:
      "InMeterai is a customizable e-stamping platform that enabling users to apply digital stamps and define reusable document layouts — a company-owned product of PT Indotama Teknologi Inovasi (PT INTI).",
    thumbnail: "/images/project/inmeterai.png",
    stack: [
      "React",
      "Spring Boot",
      "Java",
      "Typescript",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "Github Action",
    ],
    demo: "https://inmeterai.id",
  },

  {
    title: "MetaReads",
    description:
      "Metareads is an innovative web application for reading books online, built on advanced Web3 technology, ICP (Internet Computer Protocol), Internet Identity, and Artificial Intelligence.  With powerful AI integration, users can summarize paragraphs, making it easier to grasp key ideas and enhance their reading experience.",
    thumbnail: "/images/project/metareads.png",
    stack: [
      "ICP Web3",
      "React",
      "TypeScript",
      "Rust",
      "Python",
      "JavaScript",
      "CSS",
      "Docker",
      "3rd Place Winner, Hackathon 8.0",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/Shirloin/MetaReads",
      },
    ],
    overview: [
      "Metareads is an innovative web application for reading books online, built on advanced Web3 technology, ICP (Internet Computer Protocol), Internet Identity, and Artificial Intelligence. Designed for accessibility, Metareads allows users to read seamlessly across smartphones, laptops, computers, and other devices.",
      "With powerful AI integration, users can summarize paragraphs, making it easier to grasp key ideas and enhance their reading experience. The platform combines cutting-edge blockchain technology with modern web development to create a decentralized, secure, and user-friendly reading experience.",
    ],
    details: [
      {
        thumbnails: ["/images/project/metareads/dashboard.png"],
        title: "1. Dashboard Screen (Guest)",
        description: "• Book Discovery: Browse featured books and latest releases\n• Popular Books: View the most popular books on the platform\n• Latest Releases: Explore newly added books\n• Guest Access: Limited functionality for non-authenticated users",
      },
      {
        thumbnails: ["/images/project/metareads/store-page.png"],
        title: "2. Store Screen (Guest)",
        description: "• Book Catalog: Browse all available books in the store\n• Book Search: Search for books by title, author, or genre\n• Book Filtering: Filter books by genre, author, or subscription tier\n• Book Preview: View book details before reading",
      },
      {
        thumbnails: ["/images/project/metareads/user-subscription-page.png"],
        title: "3. Subscription Screen (Guest)",
        description: "• Subscription Plans: View available subscription tiers (Free, Standard, Premium)\n• Plan Comparison: Compare features and benefits of each plan\n• Pricing Information: See monthly and yearly pricing options\n• Plan Selection: Choose a subscription plan that fits your needs",
      },
      {
        thumbnails: ["/images/project/metareads/book-detail-page.png"],
        title: "4. Book Detail Screen (Guest)",
        description: "• Book Information: View detailed book information including title, description, author, and genre\n• Book Cover: See the book cover image\n• Subscription Requirement: View required subscription tier for the book\n• Limited Actions: Guest users have limited interaction options",
      },
      {
        thumbnails: ["/images/project/metareads/guest-read-page.png"],
        title: "5. Read Page (Guest)",
        description: "• Book Reading: Read books directly on the website\n• Reading Interface: Clean reading interface with page navigation\n• Limited Access: Guest users have restricted reading capabilities\n• Authentication Prompt: Encourages users to log in for full access",
      },
      {
        thumbnails: ["/images/project/metareads/login-page.png"],
        title: "6. Login Screen",
        description: "• Internet Identity Authentication: Secure login using ICP Internet Identity\n• Seamless Login: Quick and secure authentication process\n• Web3 Integration: Leverages blockchain technology for authentication\n• User Registration: New users can register after login",
      },
      {
        thumbnails: ["/images/project/metareads/register-page.png"],
        title: "7. Register Screen",
        description: "• Username Registration: Create a unique username for your account\n• Account Setup: Complete your account registration after Internet Identity login\n• Profile Creation: Set up your user profile\n• Account Activation: Activate your MetaReads account",
      },
      {
        thumbnails: ["/images/project/metareads/library-page.png"],
        title: "8. Library Screen",
        description: "• Library Management: View and manage your personal library collections\n• Custom Libraries: Create and organize custom library collections\n• Library Search: Search for books within your libraries\n• Library Customization: Personalize your library organization",
      },
      {
        thumbnails: ["/images/project/metareads/add-new-library.png"],
        title: "9. Add New Library Screen",
        description: "• Create Library: Create a new custom library collection\n• Library Naming: Give your library a custom name\n• Library Organization: Organize books into different collections\n• Library Management: Full control over library creation and customization",
      },
      {
        thumbnails: ["/images/project/metareads/remove-library.png"],
        title: "10. Remove Library Screen",
        description: "• Library Deletion: Remove libraries you no longer need\n• Library Management: Manage and organize your library collections\n• Book Preservation: Books remain available even after library removal\n• Library Cleanup: Keep your library organized",
      },
      {
        thumbnails: ["/images/project/metareads/user-book-detail.png"],
        title: "11. Book Detail (User) Screen",
        description: "• Book Information: View comprehensive book details including title, description, author, and genre\n• Add to Library: Add books to your custom library collections\n• Reading Options: Start reading or add to read list\n• Reading Statistics: Track total reading time for the book\n• Book Reviews: Leave reviews for books you've read",
      },
      {
        thumbnails: ["/images/project/metareads/add-to-library.png"],
        title: "12. Add To Library Screen",
        description: "• Library Selection: Choose which library to add the book to\n• Multiple Libraries: Add books to multiple library collections\n• Library Organization: Organize books across different collections\n• Quick Access: Easy book organization and management",
      },
      {
        thumbnails: ["/images/project/metareads/library-page-with-book.png"],
        title: "13. Library Page (With Inserted Book)",
        description: "• Library View: View your library with all inserted books\n• Book Organization: See books organized in your custom libraries\n• Reading History: Access reading history including last page accessed\n• Library Navigation: Navigate through your organized book collections",
      },
      {
        thumbnails: ["/images/project/metareads/free-user-read-page.png"],
        title: "14. Read Page (Free User)",
        description: "• Subscription Upgrade Prompt: Prompt to upgrade subscription tier for full access\n• Limited Reading: Free users have restricted access to certain books\n• Subscription Information: View subscription requirements for books\n• Upgrade Path: Easy navigation to subscription page",
      },
      {
        thumbnails: ["/images/project/metareads/user-subscription-page.png"],
        title: "15. Subscription (User) Screen",
        description: "• Subscription Plans: Choose between Free, Standard, and Premium tiers\n• Monthly/Yearly Plans: Select monthly or yearly subscription frequency\n• Plan Benefits: View benefits and features of each subscription tier\n• Subscription Management: Manage your current subscription\n• Plan Upgrade: Upgrade to access more books and features",
      },
      {
        thumbnails: ["/images/project/metareads/ai-premium-read-page.png"],
        title: "16. Read Page (Premium with AI)",
        description: "• Full Book Access: Read books with Standard and Premium subscriptions\n• AI Summarizer: Access AI-powered summarization feature\n• Text Selection: Select text to summarize using AI\n• Reading History: Automatic saving of reading progress and total reading time\n• Page Navigation: Navigate through book pages seamlessly",
      },
      {
        thumbnails: ["/images/project/metareads/summarizer-page.png"],
        title: "17. Summarizer Screen",
        description: "• AI-Powered Summarization: Instantly summarize selected text or entire books\n• Text Selection: Select specific paragraphs to summarize\n• Summarization Button: Appears when text is selected\n• Key Ideas: Extract key ideas and enhance reading comprehension\n• AI Integration: Powered by integrated artificial intelligence",
      },
      {
        thumbnails: ["/images/project/metareads/admin-genre-page.png"],
        title: "18. Genre Page (Admin)",
        description: "• Genre Management: Create, read, update, and delete book genres\n• Genre CRUD: Full control over genre data\n• Genre List: View all available genres\n• Genre Administration: Manage genre information for the platform",
      },
      {
        thumbnails: ["/images/project/metareads/admin-author-page.png"],
        title: "19. Author Page (Admin)",
        description: "• Author Management: Create, read, update, and delete author information\n• Author CRUD: Full control over author data\n• Author List: View all registered authors\n• Author Administration: Manage author information for books",
      },
      {
        thumbnails: ["/images/project/metareads/admin-book-management-page.png"],
        title: "20. Book Management (Admin)",
        description: "• Book Management: Create, read, update, and delete book data\n• Book CRUD: Full control over all distributed books\n• Subscription Tier Assignment: Assign subscription tiers to books\n• Book Administration: Manage all books available on the platform\n• Genre and Author Assignment: Link books to genres and authors",
      },
    ]
  },
  {
    title: "Easy Buy",
    description:
      "Easy Buy is an e-commerce site that supports buying and selling products. It features product search, chat, and a shopping cart functionality.",
    thumbnail: "/images/project/easybuy.png",
    stack: [
      "React",
      "Mongoose",
      "MongoDB",
      "NodeJs",
      "Socket IO",
      "Tailwind",
      "Docker",
      "CI/CD",
      "Github Action",
    ],
    code: [
      {
        name: "Frontend Code",
        github: "https://github.com/shirloin/frontend-easy-buy/",
      },
      {
        name: "Backend Code",
        github: "https://github.com/shirloin/backend-easy-buy/",
      },
    ],
    demo: "https://easy-buy.shirloin.my.id/",
    details: [
      {
        thumbnails: ["/images/project/easy-buy/home-page.png"],
        title: "1. Home Page",
        description: "• Latest Products Display: Browse the most recent products added to the platform\n• Product Grid Layout: Responsive grid displaying product cards with images, prices, and ratings\n• Quick Navigation: Easy access to search and product details",
      },
      {
        thumbnails: ["/images/project/easy-buy/product-detail-page.png", "/images/project/easy-buy/product-detail-page-with-review.png", "/images/project/easy-buy/product-detail-page-with-related-product.png"],
        title: "2. Product Detail Page",
        description: "• Product Images: Multiple product images with variant selection\n• Product Information: Detailed product description, price, and specifications\n• Product Variants: Selection of different product variants (size, color, etc.)\n• Shop Information: Display seller shop details and ratings\n• User Reviews: View customer reviews and ratings for the product\n• Related Products: Suggestions for similar products in the same category\n• Add to Cart: Quick add to cart functionality",
      },
      {
        thumbnails: ["/images/project/easy-buy/cart-page.png"],
        title: "3. Shopping Cart Page",
        description: "• Cart Management: View and manage all items in the shopping cart\n• Quantity Control: Increase or decrease product quantities\n• Item Removal: Remove items from cart\n• Price Calculation: Automatic total price calculation\n• Checkout Preparation: Review items before proceeding to shipment",
      },
      {
        thumbnails: ["/images/project/easy-buy/shipment-page.png", "/images/project/easy-buy/shipment-page-with-address-list.png", "/images/project/easy-buy/shipment-page-with-address-selected.png"],
        title: "4. Shipment Page",
        description: "• Address Selection: Choose or add shipping addresses\n• Order Summary: Review selected items and quantities\n• Shipping Details: Configure shipping information\n• Order Placement: Complete the purchase process",
      },
      {
        thumbnails: ["/images/project/easy-buy/chat-page.png"],
        title: "5. Customer Chat Page",
        description: "• Chat Rooms: List of all active chat conversations\n• Real-Time Messaging: Socket.io-powered instant messaging\n• Seller Communication: Chat with sellers about products or orders\n• Message History: View previous conversation history\n• Chat Interface: Clean, modern chat UI with message bubbles",
      },
      {
        thumbnails: ["/images/project/easy-buy/login-page.png"],
        title: "6. Login Page",
        description: "• User Authentication: Secure login with email/username and password\n• Form Validation: Input validation and error handling",
      },
      {
        thumbnails: ["/images/project/easy-buy/register-page.png"],
        title: "7. Registration Page",
        description: "• User Registration: Create new user accounts\n• Form Validation: Comprehensive input validation\n• Account Creation: Set up user profile during registration",
      },
      {
        thumbnails: ["/images/project/easy-buy/profile-biodata-page.png", "/images/project/easy-buy/profile-address-list-page.png", "/images/project/easy-buy/profile-order-history-list-page.png"],
        title: "8. Profile Page",
        description: "• Biodata Section: View and edit user profile information\n• Address Management:\n  - View saved addresses\n  - Add new shipping addresses\n  - Edit existing addresses\n  - Delete addresses\n• Order History: View all past and current orders\n• Order Tracking: Track order status and details",
      },
      {
        thumbnails: ["/images/project/easy-buy/waiting-to-review-page.png", "/images/project/easy-buy/product-review-page.png", "/images/project/easy-buy/my-review-page.png"],
        title: "9. Review Page",
        description: "• Waiting to Review: List of completed orders awaiting review\n• My Reviews: View all submitted product reviews\n• Review Submission: Submit reviews with ratings and comments\n• Review Management: Edit or update existing reviews",
      },
      {
        thumbnails: ["/images/project/easy-buy/create-shop-page.png"],
        title: "10. Create Shop Page",
        description: "• Shop Registration: Create a new seller shop\n• Shop Information: Set up shop details and description",
      },
      {
        thumbnails: ["/images/project/easy-buy/seller-all-product-page.png"],
        title: "11. Seller Product Management Page",
        description: "• Product List: View all products in the seller's shop\n• Product Search: Search and filter products\n• Product Actions: Edit, delete, or manage product status\n• Product Statistics: View product performance metrics",
      },
      {
        thumbnails: ["/images/project/easy-buy/seller-add-product-1-page.png", "/images/project/easy-buy/seller-add-product-2-page.png"],
        title: "12. Add Product Page",
        description: "• Product Information Form:\n  - Product name and description\n  - Category selection\n  - Price and stock management\n• Product Variants: Create and manage product variants (size, color, etc.)\n• Product Images: Upload multiple product images\n• Product Details: Configure detailed product specifications",
      },
      {
        thumbnails: ["/images/project/easy-buy/seller-order-page.png"],
        title: "13. Seller Order Management Page",
        description: "• Order List: View all orders received\n• Order Status: Track and update order status\n• Order Details: View detailed order information\n• Customer Information: Access customer details for each order",
      },
      {
        thumbnails: ["/images/project/easy-buy/seller-chat-page.png"],
        title: "14. Seller Chat Page",
        description: "• Customer Conversations: List of all customer chat conversations\n• Real-Time Messaging: Respond to customer inquiries instantly\n• Order-Related Chats: Manage chats related to specific orders",
      },
    ],
    overview: [
      "Easy Buy is a comprehensive e-commerce solution that connects buyers and sellers in a user-friendly marketplace. The platform enables customers to browse products, manage their shopping cart, place orders, track shipments, communicate with sellers via real-time chat, and leave product reviews. Sellers can create shops, manage their product catalog, handle orders, and communicate with customers.",
      "Key highlights: \n• User-Friendly Interface: Clean, modern design built with Tailwind CSS and DaisyUI.\n• Real-Time Communication: Socket.io-powered chat system for instant messaging.\n• Product Management: Comprehensive product catalog with variants, images, and categories.\n• Order Management: Complete order lifecycle from cart to shipment.\n• Review System: Customer feedback and rating system.\n• Responsive Design: Works seamlessly on desktop and mobile devices.",
    ],
  },
  {
    title: "Job Fit CV",
    description:
      "Job Fit CV is a web application for student in Binus University to create a nice portofolio and find a suitable job for their enrichment career.",
    thumbnail: "/images/project/job-fit-cv.png",
    stack: [
      "NextJS",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Github Action",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/job-fit-cv/",
      },
    ],
    demo: "https://job-fit-cv.shirloin.my.id/",
  },
  {
    title: "CodeXchange",
    description:
      "CodeXchange is a web application for developers, designed as a platform to share and debug code collaboratively. It provides an interactive space where developers can post their code snippets, problems, or projects they are working on, inviting others to review, debug, and suggest improvements",
    thumbnail: "/images/project/codexchange.png",
    stack: ["Laravel", "MySQL", "Tailwind"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/codexchange/",
      },
    ],
    demo: "https://codexchange.shirloin.my.id/",
  },
  {
    title: "Aora",
    description:
      "Aora is a mobile application that allow users to share videos",
    thumbnail: "/images/project/aora.png",
    stack: ["React Native", "Nativewind", "Appwrite"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/aora/",
      },
    ],
  },
  {
    title: "CinemaX231",
    description:
      "Cinemax231 is a mobile app for booking cinema tickets, with features for users to order tickets and admins to manage movie listings.",
    thumbnail: "/images/project/cinemax231.png",
    stack: ["Android", "Kotlin", "Firebase"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/cinemax231",
      },
    ],
    demo: "https://play.google.com/store/apps/details?id=edu.bluejack_231.cinemax231",
  },
  {
    title: "Farebook",
    description:
      "Farebook is a web clone of Facebook, designed to replicate its core features and functionalities for social networking, allowing users to connect, share, and interact with friends and communities online.",
    thumbnail: "/images/project/farebook.png",
    stack: [
      "React",
      "Typescript",
      "GO",
      "GraphQL API",
      "PostgreSQL",
      "Firebase",
    ],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/farebook",
      },
    ],
  },
  {
    title: "Monster Funter",
    description:
      "Monster Funter  is an RPG where players explore mazes and battle monsters. The main challenge is defeating the legendary Glavenus, a powerful creature threatening villagers. Players use their characters' skills to ensure the safety of the community.",
    thumbnail: "/images/project/monsterfunter.png",
    stack: ["Unity", "C#"],
    code: [
      {
        name: "Code",
        github: "https://github.com/shirloin/monster-funter",
      },
    ],
  },
];

