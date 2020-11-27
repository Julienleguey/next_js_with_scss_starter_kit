import { useEffect } from "react";

const Border1 = () => {
  useEffect(() => {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#header").style.display = "none";
    document.querySelector("#footer").style.display = "none";
  }, []);

  return (
    <div className="d-flex f-col f-xl-row p-2 p-xl-5 border">
      <div className="h-5 w-5 d-flex jc-center ai-center bg-gray mr-3 mr-xl-5 my-1 my-xl-2">
        <p>1</p>
      </div>
      <div className="h-5 w-5 d-flex jc-center ai-center bg-gray mr-3 mr-xl-5 my-1 my-xl-2">
        <p>2</p>
      </div>
    </div>
  );
};

export default Border1;
