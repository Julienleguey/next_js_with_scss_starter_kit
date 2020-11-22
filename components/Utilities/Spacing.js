const Spacing = () => {
  const sandbox = () => (
    <div className="d-flex f-col f-xl-row p-2 p-xl-5 border">
      <div className="h-5 w-5 d-flex jc-center ai-center bg-gray mr-3 mr-xl-5 my-1 my-xl-2">
        <p>1</p>
      </div>
      <div className="h-5 w-5 d-flex jc-center ai-center bg-gray mr-3 mr-xl-5 my-1 my-xl-2">
        <p>2</p>
      </div>
    </div>
  );

  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Spacing</h1>
      <p>
        Quickly set margin and padding, chose a position and use the
        breakpoints.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Flex Direction</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">{sandbox()}</div>
        </div>
      </section>
    </div>
  );
};

export default Spacing;
