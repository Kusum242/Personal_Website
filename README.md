# Kamala Kafle — Professional Portfolio Website

Welcome to the official, premium portfolio repository for **Kamala Kafle** (Kusum). 

This project is built using a **Tech-Luxe / Cyber-Organic** aesthetic, combining clean modular layout components, Tailwind CSS styling, custom immersive CSS glows, and high-performance vanilla JavaScript. All academic credentials, skills, and projects have been 1:1 synchronized with Kamala's professional resume.

---

## 🚀 How to Run the Project Locally

Since the project uses a modular design with external CSS and JS files, it is best served through a local development server. Choose any of the simple methods below to launch it instantly:

### Method 1: Python HTTP Server (Built-in & Recommended)
If you have Python installed, run this simple command in your terminal:
```bash
python3 -m http.server 8000
```
Then, open your web browser and navigate to:
👉 **[http://localhost:8000/](http://localhost:8000/)**

### Method 2: Node.js (npx serve)
If you have Node.js/npm installed, run:
```bash
npx serve
```
Then, open your web browser and navigate to the address shown in your terminal (usually `http://localhost:3000` or `http://localhost:5000`).

### Method 3: VS Code Live Server Extension
If you are using Visual Studio Code:
1. Search for and install the **Live Server** extension (by Ritwick Dey).
2. Open the workspace folder in VS Code.
3. Click the **Go Live** button at the bottom-right corner of the status bar.
4. It will automatically launch the browser and serve the project.

---

## 📂 Project Structure

```bash
Kusum_Website/
├── index.html         # Elegant entry redirect container with loading states
├── home.html          # Core Hero landing page & featured projects
├── about.html         # Madhyabindu MMC details, coursework, timelines, and skills
├── project.html       # Exhaustive project portfolios (FireHalt, Quiz, EduStream)
├── contact.html       # Secure transmission simulation and network presence handles
├── style.css          # Central stylesheet (ambient blobs, custom spotlight glows, transitions)
├── main.js            # Unified script logic (drawer toggle, cursor glow spotlights, smooth scrolls)
├── Profile.jpg        # Kamala's case-sensitive avatar picture
├── Resume.pdf         # Kamala's case-sensitive CV download document
└── README.md          # This documentation guide
```

---

## 🛠️ Modifying Content & Syncing

When you want to update your portfolio next time, follow these quick patterns:

### 1. Modifying Your Profile Photo or Resume PDF
- **Profile Image**: Replace `Profile.jpg` in the root folder with your new image. Ensure it is named exactly `Profile.jpg` (with a capital `P`).
- **Resume Document**: Replace `Resume.pdf` in the root folder with your new PDF. Ensure it is named exactly `Resume.pdf` (with a capital `R`).

### 2. Customizing Interactive Cards (Spotlight Effect)
All cards and project blocks contain the classes `hover-card` and `article`. 
- Our scripting in `main.js` automatically listens to mouse movements on elements with these classes, tracking the cursor position.
- This creates a **spotlight glow effect** using the CSS variables `--mouse-x` and `--mouse-y` defined in `style.css`.
- If you add new card elements, simply give them the class `hover-card` (and class `bg-surface-elevated` for background compatibility) to enable spotlight reflections automatically!

### 3. Adding/Updating Skills
To customize your technical matrix in `about.html`:
- Open `about.html` and look for the `<section id="tech-stack">` block.
- Add or edit skill tags using this consistent capsule template:
  ```html
  <span class="bg-surface-container-highest px-3 py-1 rounded text-body-md text-on-surface">Your Skill</span>
  ```

### 4. Modular Separation of Concerns
- **Logic**: Do not add inline `<script>` tags to the HTML. Keep your event listeners and DOM actions consolidated inside `main.js`.
- **Styles**: Keep custom decorative styles in `style.css`. Leverage Tailwind CSS classes inside the HTML pages for standard layout grids, padding, and colors.
