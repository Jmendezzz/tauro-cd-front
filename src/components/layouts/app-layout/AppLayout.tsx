import { NavBar } from "@/components/organisms/nav-bar/NavBar";
import { Outlet } from "react-router";
import './app-layout.scss'

export function AppLayout() {
  return (
    <main className="app-layout">
      <NavBar />
      <Outlet />
    </main>
  )
}   