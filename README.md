# 🎧 PodcastApp

**PodcastApp** is a responsive React-based application that displays a collection of podcasts fetched from a public API. Users can browse podcasts, search by title, filter by genre, most recent or alphabetically, and view detailed podcast information in a modal. The interface beginner-friendly.

---

## 🚀 Features

### ⚛️ React + Vite Setup

- Fast development experience using [Vite](https://vitejs.dev/).
- Clean modular structure with reusable components and utility functions.

### 🔍 Search

- Search podcasts by typing any part of the show title.
- Updates results dynamically as you type.
- Works seamlessly with filters, sorting, and pagination.

### 🧮 Sorting

- Sort podcasts by:
  - **Title A–Z**
  - **Title Z–A**
  - **Most Recent**

### 🗂️ Filtering

- Filter podcasts by genre (e.g., True Crime, Comedy, Business, etc.).
- Filters combine with search and sort.

### 📑 Pagination

- Results are paginated into manageable chunks.
- Navigate using numbered pagination.

### 🎴 Podcast Cards

- Displays a grid of podcast cards.
- Each card includes:
  - Cover image
  - Title
  - Number of seasons
  - Associated genres
  - Time since last update

### 🗃️ Modal View

- Click a podcast card to open a modal.
- Shows detailed information:
  - Cover image and description
  - Genre tags
  - Seasons and mock episode counts
  - Last updated date

### 🛜 API Integration

- Data fetched from: [https://podcast-api.netlify.app/](https://podcast-api.netlify.app/)
- Full podcast details enriched with genre names and season data.

---

## 📁 Project Structure

📦 PodcastApp/
├── 📄 index.html
├── 🎨 App.css
├── 📁 public/
│ └── 📁 assets/
│ ├── 🖼️ logo.png
│ ├── 🔍 search.png
│ ├️── 👤 user.png
│ └── 🌐 favicon.png
├── 📁src/
| ├── 📁 components/
│ │ ├── 🎧 PodcastCard.jsx
│ │ ├── ✨ Modal.jsx
│ │ ├── 🕸️Filters.jsx
│ │ └── 📄Pagination.jsx
│ ├── 📁 data/
│ │ └── 📊 genres.js
│ ├── 📁 utils/
│ │ ├── genreUtils.js
│ │ ├── filterUtils.jsx
│ │ └── ⏱️ time.js
│ ├── 📚 App.jsx
│ ├── 📜 main.jsx

---

## 🧪 Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **HTML & CSS**

---

## 🛠️ Installation

> 📦 Requirements:
>
> - Node.js
> - npm

1. **Clone the repository**

```
git clone https://github.com/P-ule-P/PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS04.git
cd PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS04
```

2.  **Install dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
The app should now be running at http://localhost:5173.
```

---

📋 How to Use

1. Launch the App

- Start the dev server and open in your browser.

2. Browse Podcasts

- A grid of podcast previews is displayed.

3. Search

- Type in the search bar to filter by title.

4. Filter by Genre

- Use the dropdown to select your preferred category.

5. Sort the Results

- Sort by title (A-Z or Z-A) or most recent.

6. Navigate with Pagination

- Use numbered buttons to flip through pages.

7. View Details in Modal

- Click any podcast card to see full details in a pop-up.

8. Close Modal

- Click outside or the close (❌) button.
