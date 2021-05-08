const Text = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Text</h1>
      <p>Change the text's color, font weight, line height, etc.</p>

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
    </div>
  );
};

export default Text;
