function Drawer () {
    return (

        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
</h2>


        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
              
              <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} 
              className="cartItemImg"></div>
              
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>59 999 тг.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
              
              <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} 
              className="cartItemImg"></div>
              
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>59 999 тг.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
              
              <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} 
              className="cartItemImg"></div>
              
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>59 999 тг.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          

         
          </div>

          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>101 025 тг.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>5012 тг.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
          
      </div>
      </div>
    );
}

export default Drawer;