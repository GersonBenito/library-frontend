import { Outlet } from "react-router-dom"
import { NavBar } from "../components/navbar/NavBar"
import { ContainerLayout } from "../styles/layout"

export const Layout = () => {
  return (
    <ContainerLayout>
      <NavBar />
      <div className="components">
        <Outlet />
      </div>
    </ContainerLayout>
  )
}
