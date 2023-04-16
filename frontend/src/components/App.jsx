import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Layout from '@/components/Layout/Layout'
import Chat from '@/pages/Chat'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Page404 from '@/pages/404'
import { AuthRoute, PrivateRoute } from '@/components/common/RouteGuards'
import { login } from '@/redux/slices/authSlice'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const authData = localStorage.getItem('authData')
    if (authData) {
      const data = JSON.parse(authData)
      dispatch(login(data.username))
    }
  }, [])
  return (
    <Layout>
      <Routes>
        <Route
          path="login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  )
}

export default App
