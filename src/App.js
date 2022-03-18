import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import './App.css';

const HomeView = lazy(() =>
  import('./pages/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);

export default function App() {
  return (
    <Container title="Hello world!">
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Routes>
          <Route path="" element={<HomeView />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
