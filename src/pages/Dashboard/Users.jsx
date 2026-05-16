import { Outlet } from "react-router-dom"

export default function Users() {
    return(<>
        <section>
            <Outlet />
        </section>
    </>)
}