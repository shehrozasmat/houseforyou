import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-5 bg-white position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 
              className="display-5 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2.5rem', fontWeight: 700}}
            >
              Nasza misja
            </h2>
            <p 
              className="mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', lineHeight: '1.6'}}
            >
              House-4-You Sp. z o.o. dąży do budowania domów i budynków usługowych w całej Polsce. 
              Podstawowym celem realizowanych domów jest wysoka jakość, którą firma chce zrealizować 
              poprzez nowoczesne technologie murowane.
            </p>
            <p 
              className="mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', lineHeight: '1.6'}}
            >
              Ponadto celem jest budowanie domów energooszczędnych z zastosowaniem bardzo dobrych 
              materiałów izolacyjnych, jak wysokiej jakości styropianu oraz wełna mineralna. Każdy zastosowany 
              materiał na budowie musi być ekologiczny i energooszczędny. Budowane domy mogą mieć 
              zastosowane nowoczesne urządzenia takie jak: pompy ciepła powietrzne lub gruntowe, nowoczesne 
              piece gazowe, fotowoltaika, rekuperacja, klimatyzacja, „inteligentny dom" Dążymy do stosowania 
              nowoczesnych rozwiązań dachowych. Dachówki ceramiczne, blacho-dachówki oraz bardzo dobre 
              rozwiązania - stropodachy. Poza tym ciepłe, trzyskrzyłowe okna aluminiowe (AL), PCV i drewniane. Z 
              rozwiązań ściennych House-4-You zamierza promować cegły silikatowe oraz ceramiczne. W domu 
              podstawowym, proponowanym ogrzewaniem jest ogrzewanie podłogowe, w całym domu.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
          </div>
          <div className="col-lg-6">
            {/* This space is for the image on the right side */}
          </div>
        </div>
      </div>
    </section>
  );
};