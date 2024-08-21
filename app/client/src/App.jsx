import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import CreateArticle from "./pages/CreateArticle";
import Article from "./pages/Article";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";
import MoodContext from "./context/MoodContext";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const loggedInUser = useState(null);
  const mood = useState("default");

  return (
    <div className="App">
      <div className="circle"></div>
      <BrowserRouter>
        <AuthContext.Provider value={loggedInUser}>
          <MoodContext.Provider value={mood}>
            <QueryClientProvider client={queryClient}>
              <Header></Header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/login" element={<Login />} />
                <Route path="/articles/:id" element={<Article />} />
                <Route
                  path="/create-article"
                  element={
                    <ProtectedRoute>
                      <CreateArticle />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </QueryClientProvider>
          </MoodContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
