import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yeldy-teal font-montserrat mb-8">
            Gallery
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              This page is currently under construction. Please continue
              prompting to fill in this page content if you'd like to develop it
              further.
            </p>
            <div className="bg-gray-100 p-12 rounded-lg">
              <p className="text-gray-500">Content coming soon...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
