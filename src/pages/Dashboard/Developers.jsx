import { Outlet } from "react-router-dom";

export default function Developers({setHasDraft}) {
    return(<>
        <section>
            <Outlet context={setHasDraft} />
        </section>
    </>)
}