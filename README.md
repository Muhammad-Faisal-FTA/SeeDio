Video Feed App

A modern YouTube-like video browsing application built with React, Material UI, and React Router, integrated with the YouTube Data API.
Search, play, and explore videos with a responsive design that works across desktop and mobile.

🚀 Features

🔍 Search videos & channels in real-time

🎥 Video playback with React Player

📺 Channel details with video lists

📂 Sidebar navigation with categories

📱 Responsive design (desktop & mobile)

⏳ Global loader with beautiful animation

⚡ Fast UI powered by Material UI & Tailwind CSS

🛠️ Tech Stack

Frontend: React (Vite / CRA), JSX

UI Components: Material UI (MUI), Tailwind CSS

Routing: React Router DOM v6

API: YouTube Data API v3

Video Player: React Player
```
📂 Folder Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── SideBar.jsx
 │    ├── VideoCard.jsx
 │    ├── ChannelCard.jsx
 │    ├── VideoDetails.jsx
 │    ├── SearchFeed.jsx
 │    ├── Feed.jsx
 │    ├── Loader.jsx
 │    └── index.js
 ├── Utils/
 │    ├── constants.js
 │    └── fetchFromAPI.js
 ├── App.jsx
 ├── index.jsx
 └── index.css

 ```

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/video-feed-app.git
cd video-feed-app


Install dependencies

npm install


Add your YouTube API Key
Create a .env file in the root and add:

VITE_YOUTUBE_API_KEY=your_api_key_here


Run the app

npm run dev


Visit 👉 http://localhost:5173

📸 Screenshots
🏠 Home Feed

🔍 Search Results

📺 Video Player

🚧 Roadmap

 Add dark/light theme toggle 🌙

 Infinite scroll for feed 🔄

 User authentication 👤

 Playlist & favorites support ❤️

🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

📜 License

This project is licensed under the MIT License.