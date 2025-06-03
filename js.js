// 1. Clear previous content
newsContainer.innerHTML = "";

// 2. Create container elements
const mafaturedArticle = document.createElement("div");
featuredArticle.classList.add("featured-article");

const item = articles[0];

// 3. Create article element
const articleElement = document.createElement("article");
articleElement.classList.add("news-card", "featured");

// 4. Create and setup image
const image = document.createElement("img");
image.src = item.image;
image.alt = item.title;

// 5. Create content container
const content = document.createElement("div");
content.classList.add("news-content");

// 6. Create featured label
const Label = document.createElement("span");
Label.classList.add("featured-label");
Label.textContent = "Featured";

// 7. Create title
const title = document.createElement("h2");
title.classList.add("news-title");
title.textContent = item.title;
// 8. Create date
const data = document.createElement("div");
data.classList.add("news-date");
data.textContent = item.date;

// 9. Create excerpt
const excerpt = document.createElement("p");
excerpt.classList.add("news-excerpt");
excerpt.textContent = item.excerpt;

// 10. Create tag
const tag = document.createElement("span");
tag.classList.add("news-tag");
tag.textContent = item.tag;

// 11. Assemble the elements

content.appendChild(Label);
content.appendChild(title);
content.appendChild(data);
content.appendChild(excerpt);
content.appendChild(tag);

articleElement.appendChild(image);
articleElement.appendChild(content);

featuredArticle.appendChild(articleElement);

newsContainer.appendChild(featuredArticle);
