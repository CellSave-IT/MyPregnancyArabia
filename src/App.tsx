import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateLayout from './components/layouts/PrivateLayout'
import PublicLayout from './components/layouts/PublicLayout'
import { adminPublicRoutes, privateRoutes, publicRoutes } from './routes'
import AdminPublicLayout from './components/layouts/AdminPublicLayout'
import NotFound from './pages/front/notFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {publicRoutes?.map((item, i) => <Route {...item} key={i} />)}
        </Route>

        <Route path="/admin" element={<PrivateLayout />}>
          {privateRoutes?.map((item, i) => <Route {...item} key={i} />)}
        </Route>
        <Route path="/admin" element={<AdminPublicLayout />}>
          {adminPublicRoutes?.map((item, i) => <Route {...item} key={i} />)}
        </Route>
        <Route path="*" element={<PublicLayout></PublicLayout>}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
