export default function Alert({type="error",message}){return message?<div className={`alert ${type}`}>{message}</div>:null}
