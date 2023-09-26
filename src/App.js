import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import DashboardHome from "./pages/Dashboard/DashboardHomeComponent/DashboardHome";
import PublicHomePage from "./pages/PublicPages/PublicHomePage";
import TestTakenListComponent from "./pages/Dashboard/TestTakenListComponent/TestTakenListComponent";
import TestListComponent from "./pages/Dashboard/TestTakenListComponent/TestListComponent";
import HomeDashboardComponent from "./pages/Dashboard/DashboardHomeComponent/HomeDashboardComponent";
import TestUploadComponent from "./pages/Dashboard/TestUploadComponent/TestUploadComponent";
import UserManagerComponent from "./pages/Dashboard/UserManagerComponent/UserManagerComponent";
import WebsiteCMS from "./pages/Dashboard/WebsiteCMS";
import ReportComponent from "./pages/Dashboard/ReportComponent/ReportComponent";
import ReviewComponent from "./pages/Dashboard/ReviewComponent/ReviewComponent";
import SupportComponent from "./pages/Dashboard/SupportComponent/SupportComponent";
import BlogComponent from "./pages/Dashboard/BlogComponent/BlogComponent";
import FaqComponent from "./pages/Dashboard/FaqComponent/FaqComponent";
import TestUploadEditComponent from "./pages/Dashboard/TestUploadComponent/TestUploadEditComponent";
import PublicAboutPage from "./pages/PublicPages/PublicAboutPage";
import PublicContactPage from "./pages/PublicPages/PublicContactPage";
import PublicIQPage from "./pages/PublicPages/PublicIQPage";
import PublicIQStartPage from "./pages/PublicPages/PublicIQStartPage";
import PublicProgressComponent from "./pages/PublicPages/PublicProgressComponent";
import PublicFinishComponent from "./pages/PublicPages/PublicFinishComponent";
import PublicUserInfoPage from "./pages/PublicPages/PublicUserInfoPage";
import StartIqRoute from "./routes/StartIqRoute";
import PublicBlogPage from "./pages/PublicPages/PublicBlogPage";
import PublicBlogDetailsPage from "./pages/PublicPages/PublicBlogDetailsPage";
import PublicReviewPage from "./pages/PublicPages/PublicReviewPage";
import PrivacyPolicy from "./pages/PublicPages/PrivacyTerms/PrivacyPolicy";
import Terms from "./pages/PublicPages/PrivacyTerms/Terms";
import BlogList from "./pages/Dashboard/BlogList/BlogList";
import BlogEdit from "./pages/Dashboard/BlogComponent/BlogEdit";
import DownloadCerificate from "./pages/PublicPages/IQComponent/DownloadCerificate";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicHomePage />} exact />
          <Route path="/blog" element={<PublicBlogPage />} />
          <Route path="/privacy" element={< PrivacyPolicy />} />
          <Route path="/terms" element={< Terms />} />
          <Route path="/blog-details" element={<PublicBlogDetailsPage />} />
          <Route path="/about-iq" element={<PublicAboutPage />} />
          <Route path="/contact-us" element={<PublicContactPage />} />
          <Route path="/review" element={<PublicReviewPage />} />
          <Route path="/user-information" element={<PublicUserInfoPage />} />
          <Route path="/iq-test" element={<PublicIQPage />} />
          <Route path="/download-cerificate" element={<DownloadCerificate />} />
          <Route
            path="/start-iq"
            element={
              <StartIqRoute>
                <PublicIQStartPage />
              </StartIqRoute>
            }
          />
          <Route
            path="/finish-iq"
            element={
              <StartIqRoute>
                <PublicFinishComponent />
              </StartIqRoute>
            }
          />
          <Route
            path="/progress-test"
            element={
              <StartIqRoute>
                <PublicProgressComponent />
              </StartIqRoute>
            }
          />

          {/* privet routes */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardHome />
              </PrivateRoute>
            }
          >
            {/* dashboard nested route */}

            <Route
              path="/dashboard/"
              element={<HomeDashboardComponent />}
            ></Route>
            <Route
              path="/dashboard/test-taken-list"
              element={<TestTakenListComponent />}
            ></Route>
            <Route
              path="/dashboard/test-list"
              element={<TestListComponent />}
            ></Route>
            <Route
              path="/dashboard/upload-system"
              element={<TestUploadComponent />}
            ></Route>
            <Route
              path="/dashboard/upload-edit-system/:id"
              element={
                <PrivateRoute>
                  <TestUploadEditComponent />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/user-manager"
              element={<UserManagerComponent />}
            ></Route>
            <Route
              path="/dashboard/website-CMS"
              element={<WebsiteCMS />}
            ></Route>
            <Route
              path="/dashboard/reports"
              element={<ReportComponent />}
            ></Route>
            <Route
              path="/dashboard/reviews"
              element={<ReviewComponent />}
            ></Route>
            <Route
              path="/dashboard/supports"
              element={<SupportComponent />}
            ></Route>
            <Route path="/dashboard/blogs" element={<BlogComponent />}></Route>
            
            <Route
              path="/dashboard/blog-list"
              element={<BlogList />}
            ></Route>
              <Route
              path="/dashboard/blog-edit/:id"
              element={<BlogEdit />}
            ></Route>
            <Route path="/dashboard/faq" element={<FaqComponent />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
