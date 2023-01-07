import "./Sell.css";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

export function Sell() {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  function handlePassword() {
    setshowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="div_sell">
      <div className="div_button-voltar">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar
        </button>
      </div>
      <div className="div_sell-forms">
        <div className="div_cadastro">
          <form className="form_cadastro" autoComplete="off">
            <h3>Faça seu cadastro</h3>
            <div>
              <span>Nome: </span>
              <input type="text" name="nome" className="input_nome" required />
            </div>
            <div>
              <span>Sobrenome: </span>
              <input
                type="text"
                name="sobrenome"
                className="input_sobrenome"
                required
              />
            </div>
            <div>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                className="input_email"
                required
              />
            </div>
            <div>
              <span>Empresa: </span>
              <input type="text" name="empresa" className="input_empresa" />
            </div>
            <div>
              <span>Produtos: </span>
              <br />
              <textarea
                type="text"
                rows="3"
                cols="33"
                name="produtos"
                className="input_produtos"
                required
              />
            </div>
            <div>
              <span>Password: </span>
              <input
                type="password"
                name="password"
                className="input_password"
                required
              />
            </div>
            <div>
              <span>Confirm Password: </span>
              <input
                type="password"
                name="confirmpassword"
                className="input_confirmpassword"
                required
              />
            </div>
            <div className="div_button-form">
              <button>Enviar</button>
            </div>
          </form>
        </div>
        <div className="div_login">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h3>Fazer login</h3>
            <div>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                className="email-login"
                required
              />
            </div>
            <div>
              <span>Password: </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="password-login"
                required
              />
              <button onClick={handlePassword}>
                {showPassword ? (
                  <BsEyeSlashFill size={10} />
                ) : (
                  <BsEyeFill size={10} />
                )}
              </button>
            </div>
            <div className="div_button-login">
              <button type="submit" onClick={handleSubmit}>
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
