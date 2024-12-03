import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Stories from "./pages/Stories";
import Media from "./pages/Media";
import Analytics from "./pages/Analytics";


import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import HomeDashboard from "./components/Home/HomeDashboard";
import StoriesCreate from "./components/Stories/StoriesCreate";
import StoriesMyStories from "./components/Stories/StoriesMyStories";
import StoriesCollaborations from "./components/Stories/StoriesCollaborations";
import AnalyticsStoryPerformance from "./components/Analytics/AnalyticsStoryPerformance";
import AnalyticsReaderEngagement from "./components/Analytics/AnalyticsReaderEngagement";
import AnalyticsTrends from "./components/Analytics/AnalyticsTrends";
import ProfileView from "./components/Profile/ProfileView";
import HelpFAQs from "./components/Help/HelpFAQs";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/body"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="media" element={<Media />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<UserProfile />} />

          {/* Nested Routes for Dropdown Links */}
          <Route path="home-dashboard" element={<HomeDashboard />} />
          <Route path="stories-create" element={<StoriesCreate />} />
          <Route path="stories-stories" element={<StoriesMyStories />} />
          <Route
            path="stories-collaborations"
            element={<StoriesCollaborations />}
          />
          <Route
            path="story-performance"
            element={<AnalyticsStoryPerformance />}
          />
          <Route
            path="reader-engagement"
            element={<AnalyticsReaderEngagement />}
          />
          <Route path="trends" element={<AnalyticsTrends />} />
          <Route path="profile-view" element={<ProfileView />} />
          <Route path="help-faqs" element={<HelpFAQs />} />
    
        </Route>
      </Routes>
    </div>
  );
};

export default App;
