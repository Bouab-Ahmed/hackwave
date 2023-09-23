import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            <Feed />
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}

export default App;
