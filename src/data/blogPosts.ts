export const blogPosts = [
  {
    id: 1,
    type: "article", // Can be 'article', 'gallery', or 'download'
    title: "10 Essential Steps to Validate Your Startup Idea",
    author: "Arjun Mehta",
    date: "2024-09-15",
    excerpt: "Learn the systematic approach to testing your business idea before investing significant time and resources.",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://res.cloudinary.com/demo/image/upload/blog-validation.jpg",
    tags: ["Startup", "Validation"],
  },
  {
    id: 2,
    type: "gallery",
    title: "E-Summit 2024 Highlights",
    author: "Tech Team",
    date: "2024-10-05",
    excerpt: "A visual journey through the biggest entrepreneurship summit of the year.",
    image: "https://res.cloudinary.com/demo/image/upload/summit-main.jpg", // Main cover
    gallery: [
      "https://res.cloudinary.com/demo/image/upload/summit-1.jpg",
      "https://res.cloudinary.com/demo/image/upload/summit-2.jpg",
      "https://res.cloudinary.com/demo/image/upload/summit-3.jpg",
    ],
    tags: ["Events", "E-Summit"],
  },
  {
    id: 3,
    type: "download",
    title: "Startup Funding Guide 2024",
    author: "E-Cell UVCE",
    date: "2024-08-20",
    excerpt: "Comprehensive guide covering angel investment, VC funding, and government schemes.",
    link: "/downloads/funding-guide.pdf",
    image: "https://res.cloudinary.com/demo/image/upload/funding-cover.jpg",
    tags: ["Resources", "Funding"],
  }
];