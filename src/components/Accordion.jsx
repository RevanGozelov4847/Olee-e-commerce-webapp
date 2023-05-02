import React, { useState } from "react";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerr">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About the product
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Delivery
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>eustoma</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
            Siz xidmətin ən yaxşısına layiqsiniz , bunun üçün risksiz çatdırılma
            modulundan istifadə edirik. <br /> Məhsul çatdırılarkən ( nəğd və ya
            qeyri nəğd ödəmə fərqi olmadan ) istəyinizə uyğun olmayan hal olarsa
            dərhal geri qaytarılır və daha yüksək qiymətli yeni məhsulla əvəz
            edilir. <br />
            <br /> Çatdırılma özəl Olee Premium avtomobili ilə sürətli icra
            olunur.
            <br />
            <br /> Xüsusi xidmət almış əməkdaşlarımız daima daha yaxşısı üçün
            fasiləsiz çalışır.
            <br />
            <br /> Çatdırılma Bakı şəhəri mərkəzi üçün PULSUZ , Sumqayıt ,
            Xırdalan və Bakı kəndlərinə isə əraziyə uyğun qiymətləndirilir.{" "}
            <br />
            <br />
            Əvvəlcədən seçilmiş vaxta və tarixə görə sürətli çatdırılma əldə edə
            bilərsiniz
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
