const Backgrounds = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Backgrounds</h1>
      <p>Quickly set your background color.</p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Background</h3>

        <div className="d-flex fw-wrap">
          <div className="m-2 p-2 font-weight-bolder bg-primary">
            <p>primary</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-secondary">
            <p>secondary</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-success">
            <p>success</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-info">
            <p>info</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-warning">
            <p>warning</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-danger">
            <p>danger</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-white">
            <p>white</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-lighter">
            <p>lighter</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-light">
            <p>light</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-gray">
            <p>gray</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-dark">
            <p className="text-white">dark</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-black">
            <p className="text-white">black</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder bg-transparent">
            <p>transparent</p>
          </div>
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="bg-primary"&gt;</div>
            <div>&lt;div className="bg-secondary"&gt;</div>
            <div>&lt;div className="bg-success"&gt;</div>
            <div>&lt;div className="bg-info"&gt;</div>
            <div>&lt;div className="bg-warning"&gt;</div>
            <div>&lt;div className="bg-danger"&gt;</div>
            <div>&lt;div className="bg-white"&gt;</div>
            <div>&lt;div className="bg-lighter"&gt;</div>
            <div>&lt;div className="bg-light"&gt;</div>
            <div>&lt;div className="bg-gray"&gt;</div>
            <div>&lt;div className="bg-dark"&gt;</div>
            <div>&lt;div className="bg-black"&gt;</div>
            <div>&lt;div className="bg-transparent"&gt;</div>
          </code>
        </div>
      </section>
    </div>
  );
};

export default Backgrounds;
