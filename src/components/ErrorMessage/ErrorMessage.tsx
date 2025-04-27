import css from "./ErrorMessage.module.css";

interface IMsg {
  msg: string;
}

function ErrorMessage({ msg }: IMsg) {
  return (
    <>
      <p className={css.errorMsg}>{msg}</p>
    </>
  );
}

export default ErrorMessage;
