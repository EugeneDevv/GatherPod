import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import {FavoritesContextProvider} from './store/favorites-context';
function App() {
  return (
    <FavoritesContextProvider >
    <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
      </Router>
      </FavoritesContextProvider>
  );
}

export default App;
