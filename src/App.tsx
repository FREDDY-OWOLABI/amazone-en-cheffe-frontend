import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import GuinnessRecord from "./pages/GuinnessRecord";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Team from "./pages/Team";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

// Admin Pages
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import NewsAdmin from "./pages/admin/NewsAdmin";
import TeamAdmin from "./pages/admin/TeamAdmin";
import NeedsAdmin from "./pages/admin/NeedsAdmin";
import DonationsAdmin from "./pages/admin/DonationsAdmin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/guinness-record" element={<GuinnessRecord />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/support" element={<Support />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin"
              element={
               /* <ProtectedRoute>*/
                  <Dashboard />
                /*</ProtectedRoute>*/
              }
            />
            <Route
              path="/admin/news"
              element={
               /* <ProtectedRoute>*/
                  <NewsAdmin />
                /*</ProtectedRoute>*/
              }
            />
            <Route
              path="/admin/team"
              element={
               /* <ProtectedRoute>*/
                  <TeamAdmin />
                /*</ProtectedRoute>*/
              }
            />
            <Route
              path="/admin/needs"
              element={
              /*  <ProtectedRoute>*/
                  <NeedsAdmin />
                /*</ProtectedRoute>*/
              }
            />
            <Route
              path="/admin/donations"
              element={
                /*<ProtectedRoute>*/
                  <DonationsAdmin />
                /*</ProtectedRoute>*/
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
