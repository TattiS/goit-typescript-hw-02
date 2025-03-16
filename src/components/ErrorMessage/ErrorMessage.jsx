import css from "./ErrorMessage.module.css";

function ErrorMessage({ msg }) {
  return (
    <>
      <p className={css.errorMsg}>{msg}</p>
    </>
  );
}

export default ErrorMessage;
