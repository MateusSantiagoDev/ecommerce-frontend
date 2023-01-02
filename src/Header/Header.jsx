import "./Header.css";

export function Header() {
    return (
        <div className="div_header">
            <div className="div_logo">
                <img src="/" alt="logo" />
            </div>
            <div>
                <form className="form_header">
                    <input type="search" />
                    <button>buscar</button>
                </form>
            </div>
            <div className="div_menu">
                <ul className="ul_header">
                    <li className="li_header">Categorias</li>
                    <li className="li_header">Vender</li>
                    <li className="li_header">Fale conosco</li>
                </ul>
            </div>
        </div>
    );
}