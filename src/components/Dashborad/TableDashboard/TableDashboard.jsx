import { Link } from "react-router-dom";

export default function TableDashboard({ data }) {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="header d-flex justify-content-between">
          <h3>{data.title}</h3>
          <Link to="add" className="btn btn-primary">
            Add {data.btnLabel}
          </Link>
        </div>
        <div className="tableCon">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">1</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.handle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
