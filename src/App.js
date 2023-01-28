import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
