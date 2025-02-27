import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ROUTES } from "./config/constants/routes.constants"
import { AppLayout } from "./components/layouts/app-layout/AppLayout"
import { Home } from "./pages/Home"
import '@/config/i18n/i18n';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>

          <Route path={ROUTES.HOME} element={<Home />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default App
