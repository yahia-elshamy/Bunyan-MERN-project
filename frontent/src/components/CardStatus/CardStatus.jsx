import Styles from "./CardStatus.module.css";

export default function CardStatus({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className="col-12 col-md-3" key={index}>
          <div
            className={`${Styles.cardStatus} d-flex flex-row align-items-center gap-5`}
          >
            <div className="icon fs-1">
              <i className={`fa-regular ${item.icon}`}></i>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <span className="counter fs-4 fw-bold">{item.counter}</span>
              <span className="title fs-6 fw-bold">{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
