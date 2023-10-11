import "./LoginForm.css"

const LoginForm = () => {
  return (
    <div>
      <div>Kullanıcı Adı:</div>
      <input type="email"></input>

      <div>Şifre:</div>
      <input type="password"></input>
      <div>
        <button className="LoginButton">Giriş</button>
      </div>
    </div>
  );
};
export default LoginForm;
