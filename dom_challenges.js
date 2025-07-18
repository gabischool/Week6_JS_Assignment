// News articles data organized by category
export const newsData = {
  "Latest News": [
    {
      title: "GPT-5 Announcement: OpenAI Reveals Next-Generation AI Model",
      date: "March 14, 2024",
      excerpt:
        "OpenAI's latest language model demonstrates unprecedented reasoning capabilities and achieves human-level performance across various domains.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      tag: "Artificial Intelligence",
    },
      excerpt:
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
      tag: "Space Tech",
    },
    {
      title: "Apple Unveils Revolutionary Mixed Reality Device",
      date: "March 12, 2024",
      excerpt:
        "The tech giant's latest hardware release promises to transform how we interact with digital content through advanced spatial computing.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d",
      tag: "Hardware",
    },
  ],
  "Technology": [
    {
      title: "Revolutionary Quantum Computer Achieves New Milestone",
      date: "March 12, 2024",
      excerpt:
        "IBM's latest quantum processor demonstrates quantum advantage in real-world applications, marking a historic milestone in computing.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      tag: "Quantum Computing",
    },
    {
      title: "New Processor Architecture Promises 50% Better Efficiency",
      date: "March 11, 2024",
      excerpt:
        "TSMC and AMD collaborate on groundbreaking 2nm chip design, setting new standards for performance and energy efficiency.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea",
      tag: "Hardware",
    },
    {
      title: "Revolutionary Battery Technology Triples EV Range",
      date: "March 10, 2024",
      excerpt:
        "Breakthrough in solid-state battery technology promises to revolutionize electric vehicles with extended range and faster charging.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
      tag: "Energy Tech",
    },
  ],
  "AI & ML": [
    {
      title: "DeepMind's AlphaFold 3 Revolutionizes Drug Discovery",
      date: "March 10, 2024",
      excerpt:
        "Latest version of protein structure prediction AI leads to breakthrough discoveries in pharmaceutical research and disease treatment.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      tag: "Healthcare AI",
    },
    {
      title: "AI-Powered Drug Discovery Platform Shows Promise",
      date: "March 9, 2024",
      excerpt:
        "Machine learning platform identifies novel drug candidates for rare diseases, reducing development time by 60%.",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831",
      tag: "Healthcare AI",
    },
    {
      title: "AI System Masters Complex Strategy Game Go",
      date: "March 8, 2024",
      excerpt:
        "New reinforcement learning algorithm demonstrates unprecedented strategic thinking in ancient board game.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b",
      tag: "Game AI",
    },
  ],
  "Web Development": [
    {
      title: "Next.js 14 Released with Revolutionary Features",
      date: "March 8, 2024",
      excerpt:
        "Vercel introduces game-changing features including enhanced server components and automatic performance optimization.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      tag: "Frontend",
    },
    {
      title: "WebAssembly Reaches New Adoption Milestone",
      date: "March 7, 2024",
      excerpt:
        "Major browsers announce enhanced WebAssembly support, enabling near-native performance for web applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tag: "Web Technologies",
    },
    {
      title: "Chrome Introduces Revolutionary Dev Tools Features",
      date: "March 6, 2024",
      excerpt:
        "Google Chrome's latest update includes AI-powered debugging and advanced performance analysis tools.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      tag: "Developer Tools",
    },
  ],
  "Cyber Security": [
    {
      title: "Major Security Vulnerability Patched in Popular Framework",
      date: "March 6, 2024",
      excerpt:
        "Critical zero-day vulnerability in Spring Framework patched, affecting millions of Java applications worldwide.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      tag: "Security",
    },
    {
      title: "New Encryption Standard Proposed for IoT Devices",
      date: "March 5, 2024",
      excerpt:
        "NIST announces quantum-resistant encryption standard specifically designed for resource-constrained IoT devices.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tag: "IoT Security",
    },
    {
      title: "Advanced Persistent Threat Group Targeting Tech Firms",
      date: "March 4, 2024",
      excerpt:
        "Cybersecurity firms uncover sophisticated attack campaign targeting technology companies worldwide.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tag: "Cyber Threats",
    },
  ],
};

// html structure
{
  /* <div class="featured-article">
    <article class="news-card featured">
      <img class="news-image" src="https://images.unsplash.com/photo-1677442136019-21780ecad995" alt="GPT-5 Announcement">
      <div class="news-content">
        <span class="featured-label">Featured Story</span>
        <h2 class="news-title">GPT-5 Announcement: OpenAI Reveals Next-Generation AI Model</h2>
        <div class="news-date">March 14, 2024</div>
        <p class="news-excerpt">OpenAI's latest language model demonstrates unprecedented reasoning capabilities and achieves human-level performance across various domains.</p>
        <span class="tag">Artificial Intelligence</span>
      </div>
    </article>
  </div> */
}

// YOUR TASK: Complete this function using the html structure in the htmlstructure.html file

export function displayArticles(category, featuredArticle = null) {
  const newsContainer = document.querySelector("#news-container");
  const articles = newsData[category];
  
  // Use the provided featured article or default to the first one
  const article = featuredArticle || articles[0];

  // 1. Clear previous content
  newsContainer.innerHTML = "";

  // 2. Create container for featured article
  const featuredDiv = document.createElement("div");
  featuredDiv.classList.add("featured-article");

  // 3. Create article element
  const articleElement = document.createElement("article");
  articleElement.classList.add("news-card", "featured");

  // 4. Create and setup image
  const image = document.createElement("img");
  image.classList.add("news-image");
  image.src = article.image;
  image.alt = article.title;

  // 5. Create content container
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("news-content");

  // 6. Create featured label
  const featuredLabel = document.createElement("span");
  featuredLabel.classList.add("featured-label");
  featuredLabel.textContent = "Featured Story";

  // 7. Create title
  const title = document.createElement("h2");
  title.classList.add("news-title");
  title.textContent = article.title;

  // 8. Create date
  const date = document.createElement("div");
  date.classList.add("news-date");
  date.textContent = article.date;

  // 9. Create excerpt
  const excerpt = document.createElement("p");
  excerpt.classList.add("news-excerpt");
  excerpt.textContent = (featuredArticle || articles[0]).excerpt;

  // 10. Create tag
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = (featuredArticle || articles[0]).tag;

  // 11. Assemble the elements
    featuredDiv.appendChild(articleElement);
  articleElement.appendChild(image);
  articleElement.appendChild(contentDiv);
  contentDiv.appendChild(featuredLabel);
  contentDiv.appendChild(title);
  contentDiv.appendChild(date);
  contentDiv.appendChild(excerpt);
  contentDiv.appendChild(tag);  


  // 12. Append the article container to the news container
  newsContainer.appendChild(featuredDiv);
  // 13. Create and append other articles
  articles.slice(1).forEach((article) => {  
    const otherArticle = document.createElement("article");
    otherArticle.classList.add("news-card");

    const otherImage = document.createElement("img");
    otherImage.classList.add("news-image");
    otherImage.src = article.image;
    otherImage.alt = article.title;

    const otherContentDiv = document.createElement("div");
    otherContentDiv.classList.add("news-content");

    const otherTitle = document.createElement("h2");
    otherTitle.classList.add("news-title");
    otherTitle.textContent = article.title;

    const otherDate = document.createElement("div");
    otherDate.classList.add("news-date");
    otherDate.textContent = article.date;

    const otherExcerpt = document.createElement("p");
    otherExcerpt.classList.add("news-excerpt");
    otherExcerpt.textContent = article.excerpt;

    const otherTag = document.createElement("span");
    otherTag.classList.add("tag");
    otherTag.textContent = article.tag;

    // Assemble the elements
    newsContainer.appendChild(otherArticle);
    otherArticle.appendChild(otherImage);
    otherArticle.appendChild(otherContentDiv);
    otherContentDiv.appendChild(otherTitle);
    otherContentDiv.appendChild(otherDate);
    otherContentDiv.appendChild(otherExcerpt);
    otherContentDiv.appendChild(otherTag);
  }
  );

// DO NOT CHANGE THIS
document.addEventListener("DOMContentLoaded", () => {
  const defaultCategory = "Latest News"; // Define the default category
  displayArticles(defaultCategory); // Display articles for the default category
  document
    .querySelector(`.nav-links a[data-category="${defaultCategory}"]`)
    .classList.add("active"); // Set active class
});
