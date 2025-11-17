
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  // Shortcode to render an item block (image + title + description)
  // Usage in Liquid templates / markdown: {% item "/path/to/img.png", "Title", "Short description" %}
  eleventyConfig.addShortcode("item", function(src, title, desc) {
    return `<div class="item">
      <img src="${src}" alt="${title}" class="item-img" />
      <div class="item-body"><h2>${title}</h2><p>${desc}</p></div>
    </div>`;
  });
};