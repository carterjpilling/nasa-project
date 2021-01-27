import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import routes from './routes'

function App() {
  return (
    <div >
      <NavBar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
