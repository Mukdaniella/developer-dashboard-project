**Developer Dashboard**
**Description**
The Developer Dashboard is a responsive web application built with React and Tailwind CSS that displays real-time developer and environment data.
It helps developers track useful information such as GitHub profile statistics and current weather conditions, all within a clean and modern dashboard interface.

The project focuses on API data fetching, state management, props usage, and Light/Dark mode implementation to enhance user experience.

**Features**

GitHub Profile Card with live user data
Weather Card showing real-time weather updates
Light/Dark mode toggle with persistent theme handling
Responsive layout for mobile, tablet, and desktop
Loading indicators and graceful error handling

 **Dashboard Components**

The application is built using reusable and modular components:

Navbar
Displays dashboard title
Contains Light/Dark mode toggle

GitHubCard
Fetches and displays GitHub user data
Shows avatar, repositories, followers, and following count

WeatherCard
Fetches real-time weather data
Displays temperature, weather condition, wind speed, and live current time

**APIs Used**

GitHub API
https://api.github.com/users/Mukdaniella

Weather API
https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}
Used to fetch current temperature, weather conditions, and wind speed.

**Technologies Used**

React
Tailwind CSS
Fetch API
JavaScript
GitHub for version control

**Screenshoot**
<img width="1248" height="545" alt="Screenshot " src="https://github.com/user-attachments/assets/58d3008b-4e52-4235-a537-409b8d4c4182" />

**Deployed Link**
https://developer-dashboard-project-2l9o.vercel.app/

**Setup Instructions**

Clone the Repository
git clone https://github.com/Mukdaniella/developer-dashboard-project.git

Navigate to the Project Folder
cd developer-dashboard-project

Install Dependencies
npm install

Run the Project Locally
npm run dev

The application will run at:
http://localhost:3000

**Folder Structure**
src/
│── components/
│   ├── Navbar.jsx
│   ├── GitHubCard.jsx
│   ├── WeatherCard.jsx
│
│── context/
│    ├── themecontext.jsx
│
│── hooks/
│    ├── usefetchgithub.jsx
│    ├── usefetchweather.jsx
││
│── App.jsx
│── main.jsx
│── index.css

