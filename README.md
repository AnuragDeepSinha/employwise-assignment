🚀 EmployWise - React User Management App
This project is a React application that uses the Reqres API to manage users. It enables users to log in, browse a paginated user list, edit and delete users, and use authentication with session persistence.

📌 Features
✅ Authentication: Users can log in using predefined credentials.
✅ User List: Displays a paginated list of users fetched from the Reqres API.
✅ Edit Users: Modify user details with real-time updates.
✅ Delete Users: Remove users from the list with a confirmation prompt.
✅ Pagination: Navigate through users seamlessly.
✅ Session Management: Token is stored in local storage for persistence.
✅ Error Handling: Displays user-friendly error messages.
✅ Fully Responsive: Works on desktop & mobile.

🚀 Live Demo
🔗 Deployed on Netlify: https://67e7a44c2593f700084e6bbe--graceful-unicorn-ce12e7.netlify.app/

🛠 Tech Stack
Frontend: React.js, React Router, Axios

Styling: CSS (Responsive & Modern UI)

API: Reqres.in (Mock REST API)

🏗 Installation & Setup
Step 1: Clone the Repository

git clone https://github.com/your-username/employwise.git
cd employwise-assignment

Step 2: Install Dependencies

npm install

Step 3: Run the App Locally

npm start

The app will run at http://localhost:3000

🔗 API Endpoints Used
Function	Method	Endpoint
Login	POST	/api/login
Fetch Users	GET	/api/users?page=1
Edit User	PUT	/api/users/{id}
Delete User	DELETE	/api/users/{id}

🚀 Deploying to Netlify
Step 1: Build the Project
npm run build

Step 2: Deploy to Netlify
Go to Netlify

Click New Site from Git

Select your repository

Set build command: npm run build

Publish directory: /build

Click Deploy 🎉

👨‍💻 Project Structure
employwise-assignment
│── public/
│── src/
│   │── components/
│   │   │── Login.js
│   │   │── UsersList.js
│   │   │── EditUser.js
│   │── pages/
│   │   │── Home.js
│   │   │── NotFound.js
│   │── services/
│   │   │── api.js
│   │── App.js
│   │── index.js
│── package.json
│── .gitignore
│── README.md


💡 Have any suggestions or feedback? Feel free to open an issue or improve the project!






