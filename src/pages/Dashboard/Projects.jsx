import { Outlet } from "react-router-dom";

export default function Projects({setHasDraft}) {
    return(<>
        <section>
            <Outlet context={setHasDraft} />
        </section>
    </>)
}