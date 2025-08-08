# Custom Form Builder & Preview Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

---

## Overview

A **React-based dynamic form builder and preview application** that supports multiple question types including Categorize, Cloze, and Comprehension. Users can create fully customizable forms featuring images, multiple-choice questions, and categories, save them to a backend API, and preview or submit responses seamlessly.

This project is ideal for creating custom surveys, quizzes, assessments, or data collection forms with rich media support.

---

## Features

- **Form Creation:**
  - Dynamic addition of multiple question types
  - Support for images on questions and options
  - Categorize questions with draggable options into categories
  - Cloze (fill-in-the-blank) style questions
  - Comprehension passages with related questions
  - Responsive UI built with Tailwind CSS

- **Form Preview & Submission:**
  - Interactive preview mode with answer validation
  - Submit completed forms to backend REST API
  - Real-time validation with user-friendly error messages

- **File Uploads:**
  - Image upload support with Cloudinary integration
  - Fallback to default placeholders when images are missing

- **Backend:**
  - Node.js + Express REST API
  - MongoDB + Mongoose for data storage
  - Secure file uploads using Multer and Cloudinary
  - Environment-configured API keys and database connections

---

## Tech Stack

| Layer      | Technologies                               |
|------------|--------------------------------------------|
| Frontend   | React, React Router, Tailwind CSS, Axios  |
| Backend    | Node.js, Express, MongoDB (Mongoose)      |
| File Upload| Multer, Cloudinary                         |
| Utilities  | uuid (unique IDs), dotenv, cors            |

---

## Getting Started

### Prerequisites

- Node.js v16 or higher  
- MongoDB (local or MongoDB Atlas)  
- Cloudinary account (for image uploads; optional if local storage is configured)

---

### Frontend Setup

```bash
git clone https://github.com/yourusername/custom-form-builder.git
cd custom-form-builder/client
npm install
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env to configure environment variables
npm run dev      # Development with nodemon
# or
npm start        # Production mode
```

The backend server runs on [http://localhost:5000](http://localhost:5000)

---

## Environment Variables

Create `.env` file in the `backend/` folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## API Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|------------------------------------|
| GET    | `/`                | Health check / server status        |
| POST   | `/api/forms`       | Create a new form                   |
| GET    | `/api/forms`       | Retrieve list of all forms          |
| GET    | `/api/forms/:id`   | Get form details by ID              |
| POST   | `/api/responses`   | Submit form responses               |
| POST   | `/api/upload`      | Upload an image file (multipart)   |

---

## Usage

- Navigate to **Builder** page to create and customize new forms  
- Add questions, upload images, assign categories as needed  
- Use the fixed bottom **Save Form** button to persist form data  
- Visit **Forms** page using **All Quizzes** button to browse all saved forms  
- Click a form to open **Preview** and fill answers interactively  
- Submit your responses and get validation feedback instantly  

---

## Validation Rules (Frontend)

- Required questions must be answered completely:
  - **Categorize:** All options assigned to a category  
  - **Cloze:** All blanks filled with non-empty text  
  - **Comprehension:**  
    - MCQ: one option selected  
    - Short answer: non-empty text  

- On submission, only minimal answer data is sent (images and metadata stripped)

---

## Image Upload Flow

1. User uploads an image via the frontend `ImageUploader` component  
2. File is sent as `multipart/form-data` to `POST /api/upload`  
3. Backend uploads file to Cloudinary and returns a secure URL  
4. Frontend updates the question/option image URL accordingly  
5. Fallback image shown if upload fails or URL is missing  

---

## Security & Best Practices

- Enable CORS and restrict origins in production  
- Validate and sanitize all user input on backend  
- Restrict upload file types and sizes in Multer config  
- Secure environment secrets (Cloudinary keys, Mongo URI) outside source control  
- Consider rate-limiting for `/api/upload` and `/api/responses` endpoints  
- Regularly update dependencies and audit for vulnerabilities  

---

## Folder Structure (Frontend)

```
/client
  /src
    /components
      CategorizePreview.jsx
      CategorizeQuestion.jsx
      ClozePreview.jsx
      ClozeQuestion.jsx
      ComprehensionPreview.jsx
      ComprehensionQuestion.jsx
      ImageUploader.jsx
    /pages
      Builder.jsx
      Preview.jsx
      Forms.jsx
    App.jsx
    index.css
    main.jsx
    Navbar.jsx
```

---

## Project Structure (Backend)

```
backend/
├── config/
│   └── db.js              # MongoDB connection setup
├── middleware/
    └── upload.js          # Image Uploads using Multer and Cloudinary
├── models/
│   ├── Form.js            # Form schema and model
│   └── Response.js        # Response schema and model
├── routes/
│   ├── forms.js           # CRUD routes for forms
│   ├── responses.js       # Submit and retrieve responses
│   └── uploads.js         # Image upload route
├── server.js              # Entry point / Express setup
├── package.json
└── .env.example
```

---

## Scripts

| Command        | Description                  |
|----------------|------------------------------|
| `npm start`    | Start server (production)    |
| `npm run dev`  | Start server with nodemon    |
| `npm install`  | Install dependencies         |

---

## Contribution

Contributions, issues, and feature requests are welcome!  

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request  

Please follow the code style and write clear commit messages.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

Created by **Shivam Tanwar** – [shivamtanwar0801@gmail.com](mailto:shivamtanwar0801@gmail.com)  
Project Link: [https://form-builder-frontend-eta.vercel.app/](https://form-builder-frontend-eta.vercel.app/)

---
