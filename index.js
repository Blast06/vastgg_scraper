const axios = require('axios');
const cheerio = require('cheerio');

// URL of the website to scrape
const url = "https://vast.gg/";

// Make a GET request to the website
axios.get(url)
  .then(response => {
    // Create a Cheerio instance
    const $ = cheerio.load(response.data);

    // Find all elements with the class "article-wrapper"
    const articles = $('.article-wrapper');
    
    
    // Iterate over each article
    articles.each((index, article) => {
      // Find the image element
      const imageDiv = $(article).find('.featured-image');
      const imageSpan = imageDiv.find('span');

      // Check if the "style" attribute exists in the span
      if (imageSpan.attr('style')) {
        // Get the image URL from the "style" attribute of the span
        const style = imageSpan.attr('style');
        const urlStart = style.indexOf('url(') + 4;
        const urlEnd = style.indexOf(')');
        const imageUrl = style.substring(urlStart, urlEnd);

        // Print the image URL
        console.log('URL de la imagen:', imageUrl);
      } else {
        console.log("No se encontró el atributo 'style' en el span");
      }
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
