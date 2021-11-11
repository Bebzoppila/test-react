function Main({modalIsOpen,modalOpen}) {
  return (
    <section className={modalIsOpen ? "main main--modal" : "main"}>
      <div className="main__inner">
        <button onClick={() => modalOpen()} className="btn btn-white">Налоговый вычет</button>
      </div>
    </section>
  );
}
export default Main;
