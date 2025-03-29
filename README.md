# 🚀 EmployWise - React User Management App  

This project is a **React application** that uses the [Reqres API](https://reqres.in/) to manage users.  
It enables users to **log in, browse a paginated user list, edit and delete users,** and use authentication with session persistence.  

---

## 📌 Features  

✅ **Authentication:** Users can log in using predefined credentials.  
✅ **User List:** Displays a paginated list of users fetched from the Reqres API.  
✅ **Edit Users:** Modify user details with real-time updates.  
✅ **Delete Users:** Remove users from the list with a confirmation prompt.  
✅ **Pagination:** Navigate through users seamlessly.  
✅ **Session Management:** Token is stored in local storage for persistence.  
✅ **Error Handling:** Displays user-friendly error messages.  
✅ **Fully Responsive:** Works on desktop & mobile.  

---

## 🚀 Live Demo  
🔗 **Deployed on Netlify:** [Click Here -> ] (https://67e7a44c2593f700084e6bbe--graceful-unicorn-ce12e7.netlify.app/)

---

## 🛠 Tech Stack  

- **Frontend:** React.js, React Router, Axios  
- **Styling:** CSS (Responsive & Modern UI)  
- **API:** [Reqres.in](https://reqres.in/) (Mock REST API)  

---

## 🏗 Installation & Setup  

### **Step 1: Clone the Repository**  

git clone https://github.com/AnuragDeepSinha/employwise-assignment.git
cd employwise-assignment

### **Step 2: Run the App Locally**  

npm start

The app will run at http://localhost:3000

## 🔗 API Endpoints Used  

| Function     | Method | Endpoint                |  
|-------------|--------|-------------------------|  
| Login       | POST   | /api/login              |  
| Fetch Users | GET    | /api/users?page=1      |  
| Edit User   | PUT    | /api/users/{id}         |  
| Delete User | DELETE | /api/users/{id}         |  


## 🚀 Deploying to Netlify

### **Step 1: Build the Project** 

npm run build

## Step 2: Deploy to Netlify
  1. Go to Netlify

  2. Click New Site from Git

  3. Select your repository

  4. Set Build Command: npm run build

  5. Set Publish Directory: /build

  6. Click Deploy 🎉


## 👨‍💻 Project Structure

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
│   │── index.css  
│── package.json  
│── package-lock.json 


## 💡 Suggestions & Contributions
Have any suggestions or feedback? Feel free to open an issue or contribute to the project! 🚀











