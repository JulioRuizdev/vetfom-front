import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-20 md:mt-25 flex flex-col md:flex-row items-center">
        <img
            src='../img/vetfom.jpg'
            alt='logo vetfom'
            className="max-w-xs"
        />    
        <div>
            <Outlet />
        </div>
        
    </main>
  )
}
