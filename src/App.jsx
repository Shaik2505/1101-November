import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Stories from "./pages/Stories";
import Media from "./pages/Media";
import Analytics from "./pages/Analytics";

// import ProfileView from "./pages/ProfileView";
// import ProfileEdit from "./pages/ProfileEdit";
// import ProfileSettings from "./pages/ProfileSettings";
// import ProfileAchievements from "./pages/ProfileAchievements";
// import ProfileFeedback from "./pages/ProfileFeedback";
// import NotificationsAlerts from "./pages/NotificationsAlerts";
// import NotificationsFeedback from "./pages/NotificationsFeedback";
// import HelpFAQs from "./pages/HelpFAQs";
// import HelpTutorials from "./pages/HelpTutorials";
// import HelpSupport from "./pages/HelpSupport";
import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import HomeDashboard from "./components/Home/HomeDashboard";
import HomeRecent from "./components/Home/HomeRecent";
import HomeRecommended from "./components/Home/HomeRecommended";
import StoriesCreate from "./components/Stories/StoriesCreate";
import StoriesMyStories from "./components/Stories/StoriesMyStories";
import StoriesCollaborations from "./components/Stories/StoriesCollaborations";
import MediaUpload from "./components/Media/MediaUpload";
import MediaMyMedia from "./components/Media/MediaMyMedia";
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
    <div>
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
          <Route path="home-recent" element={<HomeRecent />} />
          <Route path="home-recommended" element={<HomeRecommended />} />
          <Route path="stories-create" element={<StoriesCreate />} />
          <Route path="stories-stories" element={<StoriesMyStories />} />
          <Route path="stories-collaborations" element={<StoriesCollaborations />} />
          <Route path="media-upload" element={<MediaUpload />} />
          <Route path="media-media" element={<MediaMyMedia />} />
          <Route path="story-performance" element={<AnalyticsStoryPerformance />} />
          <Route path="reader-engagement" element={<AnalyticsReaderEngagement />} />
          <Route path="trends" element={<AnalyticsTrends />} />
          <Route path="profile-view" element={<ProfileView />} />
          <Route path="help-faqs" element={<HelpFAQs />} />
           {/*<Route path="profile/achievements" element={<ProfileAchievements />} />
          <Route path="profile/feedback" element={<ProfileFeedback />} />
          <Route path="notifications/alerts" element={<NotificationsAlerts />} />
          <Route path="notifications/feedback" element={<NotificationsFeedback />} />
          <Route path="help/tutorials" element={<HelpTutorials />} />
          <Route path="help/support" element={<HelpSupport />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
