const Colors = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Colors</h1>
      <p>
        TODO: colors are not a page by itself, it should be a section for each
        utility using it (border, background, text)
      </p>

      <p>
        A set of colors is predefined. You can use them with text, backgrounds
        and borders.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Text</h3>

        <p>The last one is transparent. Double-click on it to reveal it.</p>

        <div className="d-flex fw-wrap">
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-primary">
            primary
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-secondary">
            secondary
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-success">
            success
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-info">info</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-warning">
            warning
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-danger">danger</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-white">
            white
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-lighter">
            lighter
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-light">
            light
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-gray">gray</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-dark">dark</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-black">black</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-transparent">
            transparent
          </p>
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;p className="text-primary"&gt;</div>
            <div>&lt;p className="text-secondary"&gt;</div>
            <div>&lt;p className="text-success"&gt;</div>
            <div>&lt;p className="text-info"&gt;</div>
            <div>&lt;p className="text-warning"&gt;</div>
            <div>&lt;p className="text-danger"&gt;</div>
            <div>&lt;p className="text-white"&gt;</div>
            <div>&lt;p className="text-lighter"&gt;</div>
            <div>&lt;p className="text-light"&gt;</div>
            <div>&lt;p className="text-gray"&gt;</div>
            <div>&lt;p className="text-dark"&gt;</div>
            <div>&lt;p className="text-black"&gt;</div>
            <div>&lt;p className="text-transparent"&gt;</div>
          </code>
        </div>
      </section>

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

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Border</h3>

        <div className="d-flex fw-wrap">
          <div className="m-2 p-2 font-weight-bolder border border-primary">
            <p>primary</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-secondary">
            <p>secondary</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-success">
            <p>success</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-info">
            <p>info</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-warning">
            <p>warning</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-danger">
            <p>danger</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-white">
            <p>white</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-lighter">
            <p>lighter</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-light">
            <p>light</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-gray">
            <p>gray</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-dark">
            <p>dark</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-black">
            <p>black</p>
          </div>
          <div className="m-2 p-2 font-weight-bolder border border-transparent">
            <p>transparent</p>
          </div>
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border border-primary"&gt;</div>
            <div>&lt;div className="border border-secondary"&gt;</div>
            <div>&lt;div className="border border-success"&gt;</div>
            <div>&lt;div className="border border-info"&gt;</div>
            <div>&lt;div className="border border-warning"&gt;</div>
            <div>&lt;div className="border border-danger"&gt;</div>
            <div>&lt;div className="border border-white"&gt;</div>
            <div>&lt;div className="border border-lighter"&gt;</div>
            <div>&lt;div className="border border-light"&gt;</div>
            <div>&lt;div className="border border-gray"&gt;</div>
            <div>&lt;div className="border border-dark"&gt;</div>
            <div>&lt;div className="border border-black"&gt;</div>
            <div>&lt;div className="border border-transparent"&gt;</div>
          </code>
        </div>
      </section>
    </div>
  );
};

export default Colors;
