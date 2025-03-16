import css from "./Loader.module.css";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#535bf2",
};

function Loader({ loading, color = "#535bf2" }) {
  return (
    <CircleLoader
      className={css.loader}
      color={color}
      loading={loading}
      cssOverride={override}
      size={48}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
