import { useOutletContext } from "react-router-dom";

export default function FormDashboard() {

  const formData = [
    {idLabel: "firstname", title: "First Name", placeholder: "John"},
    {idLabel: "lastname", title: "Last Name", placeholder: "Doe"},
    {idLabel: "username", title: "Username", placeholder: "@JohnDoe123"}
  ]

  const setHasDraft = useOutletContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setHasDraft(false);
  }

  const handleChange = (e) => {
    const form = e.target.closest("form");
    const inputs = form.querySelectorAll("input");
    const anyFilled = [...inputs].some((i) => i.value.trim() !== "");
    setHasDraft(anyFilled);
  };

  return (
    <>
      <form className="container-fluid p-3" onSubmit={handleSubmit} onChange={handleChange}>
        {formData.map((item, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={item.idLabel} className="form-label">{item.title}</label>
            <input type="text" className="form-control" id={item.idLabel} placeholder={item.placeholder} />
          </div>
        ))}
        
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
