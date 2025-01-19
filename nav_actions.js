// Add click handlers to navigation links, DO NOT CHANGE ANYTHING IN THIS FILE
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.nav-links a').forEach(l => {
        l.classList.remove('active');
      });
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Show articles for selected category
      displayArticles(link.dataset.category);
    });
  });
  