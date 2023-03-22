const handleFormSubmition = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const articleText = formData.get("article-text");
  const authorName = formData.get("author-name");

  console.log(articleText, authorName);
};

const articleAdd = (articleText, authorName) => {
  const newArticleElement = document.createElement("article");
};

const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmition);
