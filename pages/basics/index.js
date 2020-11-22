const Basics = ({ res }) => {
  return (
    <div className="flex-1 d-flex">
      <div className="flex-1">coucou</div>
    </div>
  );
};

Basics.getInitialProps = async () => {
  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  const res = await sleep();

  return {
    props: {
      res,
    },
  };
};

export default Basics;
