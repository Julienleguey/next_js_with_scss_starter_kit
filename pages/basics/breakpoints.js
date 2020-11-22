import Breakpoints from "../../components/Basics/Breakpoints";

const BreakpointsPage = ({ res }) => {
  return <Breakpoints />;
};

BreakpointsPage.getInitialProps = async () => {
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

export default BreakpointsPage;
