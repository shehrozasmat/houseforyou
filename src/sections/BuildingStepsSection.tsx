import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const BuildingStepsSection: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 
              className="display-5 fw-bold" 
              style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '48px', lineHeight: '66px', color: '#0A332D'}}
            >
              Budowa domu krok po kroku
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <div 
              className="rounded gallery-image-hover" 
              style={{
                backgroundImage: `url('${getImagePath('/building-steps-hero.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px'
              }}
            ></div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-center mb-4">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}
                  >
                    DZIAŁKA
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <svg width="20" height="20" fill="#4CAF50" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mb-4">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}
                  >
                    PROJEKT
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <svg width="20" height="20" fill="#4CAF50" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mb-4">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}
                  >
                    BUDOWA
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <svg width="20" height="20" fill="#4CAF50" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}
                  >
                    DETALE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ps-3">
              <p 
                className="mb-4" 
                style={{fontFamily: 'Manrope', fontWeight: 700, fontSize: '18px', lineHeight: '32px', color: '#0A332D'}}
              >
                <strong>Proces budowy jest złożony.</strong> Łatwiej wykonać go z zaufanym partnerem. Warto 
                ponieść ten trud, bo nagroda za wysiłek jest duża. Posiadanie wpływu na każdy 
                aspekt budowy domu jest bezcenne. Zaczynając od wyboru działki, projektu samej 
                budowy Inwestor ma wpływ na każdy aspekt. Nie dostanie się tego kupując gotową 
                nieruchomość.
              </p>

              <div className="d-flex align-items-center mb-4">
                <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                <span 
                  className="fw-bold" 
                  style={{fontFamily: 'Manrope', fontWeight: 700, fontSize: '16px', lineHeight: '24px', color: '#6C8581'}}
                >
                  więcej
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <button 
                  className="btn d-flex align-items-center interactive-link" 
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#0A332D',
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 0'
                  }}
                >
                  Poznaj korzyści
                  <svg width="16" height="16" fill="#4CAF50" viewBox="0 0 24 24" className="ms-2">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-3">
                <button 
                  className="btn d-flex align-items-center interactive-link" 
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#0A332D',
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 0'
                  }}
                >
                  Przeglądaj projekty
                  <svg width="16" height="16" fill="#4CAF50" viewBox="0 0 24 24" className="ms-2">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};