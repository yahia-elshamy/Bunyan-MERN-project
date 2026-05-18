import { Outlet } from "react-router-dom"

export default function Users({setHasDraft}) {
    return(<>
        <section>
            <Outlet context={setHasDraft} />
        </section>
    </>)
}