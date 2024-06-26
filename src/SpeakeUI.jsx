import React, { useState, useEffect } from "react";
import {
  Mic,
  Video,
  Radio,
  Users,
  TrendingUp,
  Settings,
  Search,
  FileText,
  Menu,
  X,
  Moon,
  Sun,
  Bell,
  Bookmark,
  LogOut,
  ThumbsUp,
  ThumbsDown,
  
} from "lucide-react";

const WaveBackground = () => (
  <div className="absolute inset-0 z-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="wave"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 25C 40 10, 60 40, 100 25C 140 10, 160 40, 200 25L200 0L0 0Z"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wave)" />
    </svg>
  </div>
);

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className={`flex items-center py-2 px-4 ${
      active
        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200"
        : "text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-800"
    }`}
  >
    <Icon className="mr-3 text-indigo-500" size={20} />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const VideoPost = ({ id }) => (
  <div className="bg-black rounded-lg shadow aspect-[9/16] relative overflow-hidden">
    <img
      src={`https://picsum.photos/400/720?random=${id}`}
      alt={`Video ${id}`}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
      <h3 className="font-bold">Breaking News {id}</h3>
      <p className="text-sm">Short description of the video content...</p>
    </div>
    <div className="absolute right-2 bottom-20 flex flex-col items-center space-y-4">
      <button className="p-2 bg-white rounded-full">
        <Users size={20} className="text-black" />
      </button>
      <span className="text-white text-sm">1.2k</span>
      <button className="p-2 bg-white rounded-full">
        <TrendingUp size={20} className="text-black" />
      </button>
      <span className="text-white text-sm">Share</span>
    </div>
  </div>
);

const PodcastItem = ({ id }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center space-x-4">
    <div className="w-16 h-16 bg-indigo-200 dark:bg-indigo-700 rounded-lg flex items-center justify-center">
      <Radio size={32} className="text-indigo-600 dark:text-indigo-300" />
    </div>
    <div className="flex-1">
      <h3 className="font-bold dark:text-white">Podcast Episode {id}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Host: John Doe • Duration: 45 min
      </p>
      <div className="mt-2 flex items-center space-x-2">
        <button className="p-1 bg-indigo-100 dark:bg-indigo-800 rounded-full">
          <Mic size={16} className="text-indigo-600 dark:text-indigo-300" />
        </button>
        <div className="h-1 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full">
          <div className="w-1/3 h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          15:00 / 45:00
        </span>
      </div>
    </div>
  </div>
);

const LongFormPost = ({ id }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">
      In-Depth Analysis {id}
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      This is the beginning of a long-form article. It delves deep into the
      subject matter...
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Users className="mr-1" size={16} />
        2.5k Reads
      </div>
      <button className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
        Read More
      </button>
    </div>
  </div>
);

const AssemblyProposal = ({ id }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h3 className="font-bold mb-2 dark:text-white">Governance Proposal {id}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      This proposal suggests changes to the platform's content moderation
      policy...
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-xs">
          Open for Voting
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          2 days left
        </span>
      </div>
      <button className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
        Cast Vote
      </button>
    </div>
  </div>
);

const NotificationPanel = ({ notifications, onClose }) => (
  <div className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg p-4 transform transition-transform duration-300 ease-in-out z-50">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold dark:text-white">Notifications</h2>
      <button onClick={onClose}>
        <X size={24} className="text-gray-500 dark:text-gray-400" />
      </button>
    </div>
    <div className="space-y-4">
      {notifications.map((notification, index) => (
        <div key={index} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-sm dark:text-white">{notification}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function SpeakeUI() {
  const [activeTab, setActiveTab] = useState("podium");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [error, setError] = useState(null);

  const notifications = [
    "New comment on your post",
    "Your video is trending!",
    "New governance proposal to vote on",
  ];

  useEffect(() => {
    console.log("SpeakeUI component mounted");
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (err) {
      console.error("Error in darkMode effect:", err);
      setError(err.message);
    }
  }, [darkMode]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-700">
        Error: {error}
      </div>
    );
  }

  console.log("Rendering SpeakeUI, activeTab:", activeTab);

  return (
    <div
      className={`flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden ${darkMode ? "dark" : ""}`}
    >
      <WaveBackground />

      {/* Sidebar */}
      <div
        className={`w-64 bg-white dark:bg-gray-800 shadow-lg z-20 transition-all duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 border-b px-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Speake
          </h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <nav className="mt-6">
          <NavItem
            icon={Mic}
            label="The Podium"
            active={activeTab === "podium"}
            onClick={() => setActiveTab("podium")}
          />
          <NavItem
            icon={Video}
            label="SpeakeWaves"
            active={activeTab === "speakewaves"}
            onClick={() => setActiveTab("speakewaves")}
          />
          <NavItem
            icon={Radio}
            label="Soundwaves"
            active={activeTab === "soundwaves"}
            onClick={() => setActiveTab("soundwaves")}
          />
          <NavItem
            icon={Users}
            label="The Assembly"
            active={activeTab === "assembly"}
            onClick={() => setActiveTab("assembly")}
          />
          <NavItem
            icon={TrendingUp}
            label="Trending"
            active={activeTab === "trending"}
            onClick={() => setActiveTab("trending")}
          />
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700 z-10">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="mr-4 lg:hidden"
            >
              <Menu size={24} className="text-gray-500 dark:text-gray-400" />
            </button>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                className="pl-10 pr-4 py-2 rounded-full border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Search Speake..."
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-500" />
              )}
            </button>
            <button
              onClick={() => setNotificationsOpen(true)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Bell size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "podium" && (
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <LongFormPost key={item} id={item} />
              ))}
            </div>
          )}
          {activeTab === "speakewaves" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <VideoPost key={item} id={item} />
              ))}
            </div>
          )}
          {activeTab === "soundwaves" && (
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <PodcastItem key={item} id={item} />
              ))}
            </div>
          )}
          {activeTab === "assembly" && (
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <AssemblyProposal key={item} id={item} />
              ))}
            </div>
          )}
          {activeTab === "trending" && (
            <div className="space-y-6">
              <LongFormPost id={1} />
              <VideoPost id={1} />
              <PodcastItem id={1} />
              <AssemblyProposal id={1} />
            </div>
          )}
        </main>
      </div>

      {/* Notifications Panel */}
      {notificationsOpen && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setNotificationsOpen(false)}
        />
      )}
    </div>
  );
}
