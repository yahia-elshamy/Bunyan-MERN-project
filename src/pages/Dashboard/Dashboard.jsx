import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import TableDashboard from "../../components/Dashborad/TableDashboard/TableDashboard";
import FormDashboard from "../../components/Dashborad/FormDashboard/FormDashboard";
import Developers from "./Developers";

function Dashboard() {
  const users= {
    title:"Users",
    btnLabel:"User",
    data:[
    {id:"1",firstName:"mohamed", lastName:"Hany", handle:"@Mo-hany"},
    { id: 201, firstName: "Ali", lastName: "Mansour", handle: "@ali-m" },
    { id: 202, firstName: "Sara", lastName: "Kamal", handle: "@sara-k" },
    { id: 203, firstName: "Hatem", lastName: "Fathy", handle: "@hatem-f" }
    ]
  }
    const projects= {
    title:"Projects",
    btnLabel:"Project",
    data:[
    { id: 101, firstName: "Palm", lastName: "Residence", handle: "@PalmRes" },
    { id: 102, firstName: "Sunset", lastName: "Villas", handle: "@SunVillas" },
    { id: 103, firstName: "Green", lastName: "Heights", handle: "@GrHeights" }
    ]
  }
      const developers= {
    title:"Developers",
    btnLabel:"Developer",
    data:[
    { id: 1, firstName: "Mohamed", lastName: "Hany", handle: "@Mo-hany" },
    { id: 2, firstName: "Ahmed", lastName: "Tarek", handle: "@Ah-tarek" },
    { id: 3, firstName: "Karim", lastName: "Adel", handle: "@Kr-adel" }
    ]
  }
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard data={users} />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/projects" element={<Projects />}>
              <Route index element={<TableDashboard data={projects}/>} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/developers" element={<Developers />}>
              <Route index element={<TableDashboard data={developers}/>} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
