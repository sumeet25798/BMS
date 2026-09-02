import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import OEM from '@/components/OEM';
import Technology from '@/components/Technology';
import About from '@/components/About';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <OEM />
        <Technology />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
