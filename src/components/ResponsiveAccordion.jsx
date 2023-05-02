import React, { useState } from "react";

function ResponsiveAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className={`arrow ${isOpen ? "up" : ""}`}></div>
      </div>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "About the product",
      content: "eustoma",
    },
    {
      id: 2,
      title: "Delivery",
      content:
        "Siz xidmətin ən yaxşısına layiqsiniz , bunun üçün risksiz çatdırılma modulundan istifadə edirik. Məhsul çatdırılarkən ( nəğd və ya qeyri nəğd ödəmə fərqi olmadan ) istəyinizə uyğun olmayan hal olarsa dərhal geri qaytarılır və daha yüksək qiymətli yeni məhsulla əvəz edilir. Çatdırılma özəl Olee Premium avtomobili ilə sürətli icra olunur. Xüsusi xidmət almış əməkdaşlarımız daima daha yaxşısı üçün fasiləsiz çalışır. Çatdırılma Bakı şəhəri mərkəzi üçün PULSUZ , Sumqayıt  , Xırdalan və Bakı kəndlərinə isə əraziyə uyğun qiymətləndirilir. Əvvəlcədən seçilmiş vaxta və tarixə görə sürətli çatdırılma əldə edə bilərsiniz",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(id === openAccordion ? null : id);
  };

  return (
    <div className="app">
      {accordionData.map((accordion) => (
        <ResponsiveAccordion
          key={accordion.id}
          title={accordion.title}
          content={accordion.content}
          isOpen={accordion.id === openAccordion}
          toggleAccordion={() => toggleAccordion(accordion.id)}
        />
      ))}
    </div>
  );
}

export default App;
