import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RootLayout } from "@/components/RootLayout.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import {AllGames} from "@/pages/AllGames.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
              <Routes>
                  {/* Unauthorized */}
                  {/*<Route element={<RootLayout />}>*/}
                  {/*    <Route path={"/"} element={<div className="w-full h-screen bg-blue-600"/>} />*/}
                  {/*</Route>*/}
                  {/* Authorized */}
                  <Route element={<RootLayout />}>
                      <Route path={"/"} element={<AllGames/>} />
                  </Route>
              </Routes>
      </BrowserRouter>
  </StrictMode>,
)
