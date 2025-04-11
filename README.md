# DAVISELab Frontend

This is the official frontend for the [DAVISE Lab](https://www.nitdelhi.ac.in) website at **NIT Delhi**, built using **Next.js**, **Tailwind CSS**, and **shadcn/ui**. It serves as a modern, responsive, and dynamic interface to showcase lab research, infrastructure, internship opportunities, and contact details.

---

## ✨ Features

- 🏠 Beautiful and responsive homepage  
- 🔬 Dynamic research highlights and project listings  
- 🏛️ Infrastructure showcase with images  
- 🎓 Internship application form with form validation  
- ✉️ Contact form integrated with backend  
- 🌙 Light/Dark theme support with toggle  
- 🧩 Component-based architecture using shadcn/ui  
- 🎨 Clean and consistent Tailwind CSS design system  

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **shadcn/ui** (Radix + Tailwind UI)
- **Framer Motion** (animations)
- **Lucide Icons**
- **React Hook Form + Zod** (form validation)
- **Axios** (API integration)

---

## 📁 Project Structure

daviselab-frontend/ ├── app/ │ ├── (pages like about, research, internships, contact) │ └── layout.js / page.js ├── components/ │ ├── ui/ │ ├── Navbar.js │ ├── Footer.js │ └── sections/ (Hero, AboutPreview, etc.) ├── public/ ├── styles/ ├── utils/ └── tailwind.config.mjs

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/daviselab-frontend.git
cd daviselab-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to see the result.

🔧 Environment Variables (Optional)
If connecting to the backend, create a .env.local file and add:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:5001
🔗 Pages
/ — Homepage

/about — About the lab

/research — Research highlights

/internships — Apply for internships

/infrastructure — Lab facilities

/contact — Contact form

📦 Deployment
You can deploy this app easily using:

Vercel (recommended for Next.js)

Netlify

GitHub Pages (via static export)

🧠 About DAVISE Lab
DAVISE (Data Analysis, Vision and Intelligent Systems Engineering) Lab at NIT Delhi focuses on research in AI, ML, Computer Vision, and Intelligent Systems.

🤝 Contributing
Feel free to open issues or submit pull requests to improve the site. Contributions are always welcome!

📄 License
Licensed under the MIT License.

🧩 Related Repositories
DAVISELab Backend — Node.js + Express backend
