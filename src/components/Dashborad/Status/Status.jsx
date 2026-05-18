import CardStatus from "../../CardStatus/CardStatus";

export default function Status() {
  const cards = [
    { icon: "fa-building", counter: "10,000+", title: "Users" },
    { icon: "fa-building", counter: "320+", title: "Projects" },
    { icon: "fa-building", counter: "50+", title: "Developers" },
    { icon: "fa-building", counter: "120", title: "Projects" },
  ];
  return (
    <>
      <section className="py-4">
        <div className="container p-5">
          <div className="row">
            <CardStatus data={cards} />
          </div>
        </div>
      </section>
    </>
  );
}
