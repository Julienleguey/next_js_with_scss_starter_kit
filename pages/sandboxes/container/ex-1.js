import { useEffect } from "react";

const Container1 = () => {
  useEffect(() => {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#header").style.display = "none";
    document.querySelector("#footer").style.display = "none";
  }, []);

  return (
    <div>
      <div className="container bg-primary h-10 mb-3">default</div>
      <div className="container-sm bg-primary h-10 mb-3">sm</div>
      <div className="container-md bg-primary h-10 mb-3">md</div>
      <div className="container-lg bg-primary h-10 mb-3">lg</div>
      <div className="container-xl bg-primary h-10 mb-3">xl</div>
      <div className="container-tiny bg-primary h-10 mb-3">tiny</div>
    </div>
  );
};

export default Container1;
