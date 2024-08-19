import NavigationBar from "./components/navigation/NavigationBar";
import NavigationRoutes from "./components/navigation/NavigationRoutes";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <main className="flex-grow-1">
        <NavigationRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
