import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import Modal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const customStyle = {
  overlay: {
    background: "rgb(0, 0, 0, 0)",
  },
};

Modal.setAppElement("#root");

export function Header() {
  const [statusModal, setStatusModal] = useState(false);

  function Close() {
    setStatusModal(!statusModal);
  }

  return (
    <div className="div_header">
      <div className="div_logo-form">
        <div className="div_logo">
          <img src="/" alt="logo" />
        </div>
        <div>
          <form className="form_header">
            <input className="input_header" type="search" placeholder="Buscar por produtos" />
            <button className="button_header-search">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="div_header-cart">
          <MdAddShoppingCart size={35}/>
        </div>
      </div>
      <div className="div_menu">
        <ul className="ul_header">
          <li className="li_header">
            <button
              onClick={() => {
                Close();
              }}
            >
              Categorias
            </button>
          </li>
          <li className="li_header">
            <button>Vender</button>
          </li>
          <li className="li_header">
            <button>Fale conosco</button>
          </li>
        </ul>
      </div>
      <Modal
        className="modal_header"
        isOpen={statusModal}
        onRequestClose={Close}
        contentLabol="menu_modal"
        style={customStyle}
      >
          <button className="button_modal-header"
            onClick={() => {
              Close();
            }}
          >
            <IoIosCloseCircle />
          </button>
        <ul className="ul_modal-header">        
          <li className='li_modal-header'>Tecnologia</li>
          <li className='li_modal-header'>Casa e móveis</li>
          <li className='li_modal-header'>Eletrodomésticos</li>
          <li className='li_modal-header'>Esporte</li>
          <li className='li_modal-header'>Beleza</li>
          <li className='li_modal-header'>Ferramentas</li>
          <li className='li_modal-header'>Construção</li>
          <li className='li_modal-header'>Moda</li>
          <li className='li_modal-header'>Brinquedos</li>
          <li className='li_modal-header'>Diversos</li>
        </ul>
      </Modal>
    </div>
  );
}
