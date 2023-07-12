import requests
from bs4 import BeautifulSoup

# Base URL of the website
base_url = "https://vast.gg/page/"

# Number of pages to scrape (in this case, the last 4 pages)
num_pages = 4

# Iterate over the desired pages
for page_num in range(num_pages, 0, -1):
    # Construct the URL for the current page
    url = base_url + str(page_num) + "/"

    # Make the GET request to the website
    response = requests.get(url)

    # Create the BeautifulSoup object
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all the elements with the class "article-wrapper"
    articles = soup.find_all(class_="article-wrapper")

    # Iterate over each article
    for article in articles:
        # Find the image element
        image_div = article.find(class_="featured-image")
        image_span = image_div.find("span")
        image_url = None

        # Check if the image has a "data-src" attribute
        if image_span.has_attr("data-src"):
            image_url = image_span["data-src"]
        else:
            # Check if the image has a "style" attribute
            if "style" in image_span.attrs:
                style = image_span["style"]
                url_start = style.index("url(") + 4
                url_end = style.index(")")
                image_url = style[url_start:url_end]

        # Get the title of the article
        title_element = article.select_one(".title.main-title.gradient-effect a")
        if title_element:
            title = title_element.get_text(strip=True)
            link = title_element["href"]
            print("Título:", title)
            print("Enlace:", link)
        else:
            print("No se encontró el título del artículo")

        # Get the date of the article
        time_element = article.select_one(".meta time")
        if time_element:
            date = time_element.get_text(strip=True)
            print("Fecha:", date)
        else:
            print("No se encontró la fecha del artículo")

        # Print the image URL
        if image_url:
            print("URL de la imagen:", image_url)
        else:
            print("No se encontró la URL de la imagen en el artículo")

        # Print the page number
        print("Número de página:", page_num)

        print("------------------------")
