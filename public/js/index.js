const handleFormSubmition = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formEntries = Object.fromEntries(formData);

  const res = await fetch("/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formEntries),
  });
  console.log(res);
  if (res.status === 201) {
    articleAdd(articleTitle, articleText, authorName);
  } else if (res.status === 200) {
    console.log("Article seen but not heard");
  } else {
    console.log(`Something went wrong ${res.statusCode}`);
  }
};

const articleAdd = (articleTitle, articleText, authorName) => {
  const newestArticle = document.querySelector("#articles");
  const newSection = document.createElement("section");
  const newArticle = document.createElement("article");
  const newArticleTitle = document.createElement("h1");
  const newArticleText = document.createElement("p");
  document.createTextNode(newArticleText).appendChild(newArticleText);

  console.log(newestArticle);
  console.log(newArticleText);
};

const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmition);
