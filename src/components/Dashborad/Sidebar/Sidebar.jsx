import { NavLink } from 'react-router-dom'
import Styles from './Sidebar.module.css'


export default function Sidebar() {
  const links = [
    {icon: "fa-chart-line", title: "STATUS", path: "/"},
    {icon: "fa-users", title: "USER MANAGEMENT", path: "/users"},
    {icon: "fa-building", title: "PROJECTS MANAGEMENT", path: "/projects"},
    {icon: "fa-building", title: "DEVELOPERS MANAGEMENT", path: "/developers"},
    {icon: "fa-globe", title: "WEBSITE CMS"},
    {icon: "fa-message", title: "LIVE CHAT"}
  ]
  
  return (<>
    <aside className={`min-vh-100 py-4 ${Styles.aside}`}>
        <div className={`${Styles.title} mb-3`}>DASHBOARD</div>
        <nav>
            
            {links.map((item, index)=>(
                <NavLink key={index} className={`${Styles.navItem} px-3 d-flex align-items-center gap-2`} to={item.path}>
                    <i className={`fa-solid ${item.icon} ${Styles.icon}`}></i>
                    <span className={Styles.linkTitle}>{item.title}</span>
                </NavLink>
            ))}
        </nav>
    </aside>
  </>)
}
