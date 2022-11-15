import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import UploadPage from "../pages/UploadPage"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Video from "../pages/Video";
import VideosPage from "../pages/VideosPage";

export const routesConfig = [
  {
    id: 1,
    path: "/*",
    element: <ErrorPage />
  },
  {
    id: 2,
    path: "/",
    element: <HomePage />
  },
  {
    id: 3,
    path: "/upload",
    element: <UploadPage />
  },
  {
    id: 4,
    path: "/login",
    element: <LoginPage />
  },
  {
    id: 5,
    path: "/signup",
    element: <SignupPage />
  },
  {
    id: 6,
    path: "/videos",
    element: <VideosPage />
  },
  {
    id: 7,
    path: "/video",
    element: <Video />
  },

]