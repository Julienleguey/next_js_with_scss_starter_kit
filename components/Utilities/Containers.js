const Containers = () => {
  return (
    <div className="p-3 pl-5 flex-1">
      <h1 className="mb-3">Containers</h1>
      <p>
        Several containers are set to help you to display the content on the
        page while taking care of padding and breakpoints.
      </p>
      <p>Containers are automatically centered.</p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Available Containers</h3>

        <div>
          <div className="container bg-primary h-10 mb-3">default</div>
          <div className="container-sm bg-primary h-10 mb-3">sm</div>
          <div className="container-md bg-primary h-10 mb-3">md</div>
          <div className="container-lg bg-primary h-10 mb-3">lg</div>
          <div className="container-xl bg-primary h-10 mb-3">xl</div>
          <div className="container-tiny bg-primary h-10 mb-3">tiny</div>
        </div>

        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="container"&gt;</div>
            <div>&lt;div className="container-sm"&gt;</div>
            <div>&lt;div className="container-md"&gt;</div>
            <div>&lt;div className="container-lg"&gt;</div>
            <div>&lt;div className="container-xl"&gt;</div>
            <div>&lt;div className="container-tiny"&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4 maxw-100 d-flex f-col overflow-x">
        <h3 className="mb-3">Breakpoints & max-width</h3>
        {/*<div className="d-flex">*/}
        <div className="d-flex overflow-x">
          <table className="border">
            <tr className="border-bottom">
              <th className="border-right"></th>
              <th className="border-right">0 - 575px</th>
              <th className="border-right">576 - 767px</th>
              <th className="border-right">768 - 991px</th>
              <th className="border-right">992 - 1199px</th>
              <th className="border-right">1200 - &infin;</th>
            </tr>
            <tr className="border-bottom">
              <th className="border-right">default</th>
              <td className="border-right">100%</td>
              <td className="border-right">500px</td>
              <td className="border-right">680px</td>
              <td className="border-right">920px</td>
              <td className="border-right">1100px</td>
            </tr>
            <tr className="border-bottom">
              <th className="border-right">sm</th>
              <td className="border-right">100%</td>
              <td className="border-right">500px</td>
              <td className="border-right">680px</td>
              <td className="border-right">920px</td>
              <td className="border-right">1100px</td>
            </tr>
            <tr className="border-bottom">
              <th className="border-right">md</th>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td className="border-right">680px</td>
              <td className="border-right">920px</td>
              <td className="border-right">1100px</td>
            </tr>
            <tr className="border-bottom">
              <th className="border-right">lg</th>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td className="border-right">920px</td>
              <td className="border-right">1100px</td>
            </tr>
            <tr>
              <th className="border-right">xl</th>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td className="border-right">100%</td>
              <td>1100px</td>
            </tr>
          </table>
        </div>
        {/*</div>*/}
      </section>

      <p>
        .container-tiny has a width of 100% and a limit of 20rem. Convenient for
        very small forms that you would like to center, like a login form.
      </p>
    </div>
  );
};

export default Containers;
