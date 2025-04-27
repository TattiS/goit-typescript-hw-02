import css from "./ErrorMessage.module.css";

interface IMsg {
  msg: string;
}

const ErrorMessage: React.FC<IMsg> = ({ msg }) => {
  return (
    <>
      <p className={css.errorMsg}>{msg}</p>
    </>
  );
};

export default ErrorMessage;
