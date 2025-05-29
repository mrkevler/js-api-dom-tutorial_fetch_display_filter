# JS API DOM Tutorial - Fetch, Display and Filter 🚀

**Repository:** [github.com/mrkevler/js-api-dom-tutorial_fetch_display_filter](https://github.com/mrkevler/js-api-dom-tutorial_fetch_display_filter)

**Demo** 🌐 [mrkevler.github.io/html-css-sample-site](https://mrkevler.github.io/html-css-sample-site/)



![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) ![API](https://img.shields.io/badge/API-REST-FF6C37) ![DOM](https://img.shields.io/badge/DOM-Manipulation-149EF1)  
![GitHub](https://img.shields.io/badge/GitHub-mrkevler-green) ![License](https://img.shields.io/badge/License-MIT-blue)  
![Repo Size](https://img.shields.io/github/repo-size/mrkevler/js-api-dom-tutorial_fetch_display_filter) ![Last Commit](https://img.shields.io/github/last-commit/mrkevler/js-api-dom-tutorial_fetch_display_filter)  
[![Buy Me a Coffee](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-yellow)](https://buymeacoffee.com/mrkevler)


## 🔍 Table of Contents
1. [Project Overview](#-project-overview)
2. [Concept](#-concept)
3. [Key Features](#-key-features)
4. [Learning Resources](#-learning-resources)
5. [Technologies Used](#-technologies-used)
6. [Code Showcase](#-code-showcase)
7. [Project Structure](#-project-structure)
8. [HowTo Use](#-usage)



## 🚀 Project Overview <a name="-project-overview"></a>

This is a tutorial project demonstrating modern JavaScript API handling with DOM manipulation.  
Built with JavaScript to fetch, display and filter recipe data from a REST API 📊

Perfect for learning core web development concepts through practical implementation 🎓  

Enjoy coding! ✌️
mrKevler
[mrKevler](https://github.com/mrkevler)




---

## ✨ Concept <a name="-concept"></a>

This tutorial demonstrates three core web development skills:
1. **Fetching data** from a REST API (DummyJSON Recipes API)
2. **Processing responses** with modern JavaScript methods
3. **Dynamic DOM manipulation** to display and filter content

Key learning objectives:
- Async/await vs Promise.then() patterns
- Array methods (map, filter, some, join)
- Component-based DOM generation
- Case-insensitive filtering
- Error handling

---

## 🌟 Key Features <a name="-key-features"></a>

Pure JavaScript implementation (no frameworks)
Responsive design ready
Comprehensive error handling
Case-insensitive filtering
Component-based architecture
Detailed code comments

---

## 📚 Learning Resources <a name="-learning-resources"></a>

For deeper understanding:
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Array Methods](https://javascript.info/array-methods)
- [DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

---

## 🛠️ Technologies Used <a name="-technologies-used"></a>

| Technology | Implementation |
|------------|----------------|
| **JavaScript** | ES6+ features, Async/Await |
| **Web APIs** | Fetch API, DOM API |
| **Data Processing** | Array methods (map, filter, some, join) |
| **Error Handling** | try/catch and .catch() |
| **Semantic HTML** | Proper sectioning and ARIA friendly |

---

## 💻 Code Showcase <a name="-code-showcase"></a>

### Core Methods and Why They're Used

```javascript
// 1. Fetch API with error handling
fetch("https://dummyjson.com/recipes")
  .then(response => response.json())
  .catch(error => console.error("Fetch failed:", error));

// 2. Data transformation with .map()
const updatedArray = recipesArray.map(item => ({
  id: item.id,
  name: item.name,
  // ...
}));

// 3. Advanced filtering (.filter() + .some())
const noOliveOil = updatedArray.filter(recipe => 
  !recipe.ingredients.some(ingredient =>
    ingredient.toLowerCase().includes("olive oil")
  )
);

// 4. DOM generation with template literals
container.innerHTML = recipes.map(recipe => `
  <div class="recipe" data-id="${recipe.id}">
    <h3>${recipe.name}</h3>
    <!-- ... -->
  </div>
`).join("");
```
---

## 🏗️ Project Structure <a name="-project-structure"></a>

```Project structure
js-api-dom-tutorial_fetch_display_filter/
├── index.html
├── readme.md
├── Exercise_Recipe_Page_Development.pdf
└── assets/
    ├── css/
    │   └── style.css
    └── script/
        ├── all-recipes.js
        └── single-recipe.js
```
---

## 🚀 HowTo Use <a name="-usage"></a>

1. Clone the repo:

```
git clone https://github.com/mrkevler/js-api-dom-tutorial_fetch_display_filter.git
```
2. Open index.html in any browser

3. See three interactive sections:
 - All recipes
 - High-rated easy recipes (rating > 4.6)
 - No-olive-oil recipes



---

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FF8000?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://www.buymeacoffee.com/mrkevler)

Crafted with ♥ by [mrKevler](https://github.com/mrkevler)
