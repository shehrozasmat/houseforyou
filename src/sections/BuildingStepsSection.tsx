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
              style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '3rem', lineHeight: '1.2', color: '#0A332D'}}
            >
              Budowa domu krok po kroku
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left side - Large house image */}
          <div className="col-lg-6">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/building-steps-hero.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px',
                borderRadius: '12px'
              }}
            ></div>
          </div>

          {/* Center - Step boxes */}
          <div className="col-lg-2">
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', minWidth: '120px', borderRadius: '8px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 600, fontSize: '14px', color: '#0A332D'}}
                  >
                    DZIAŁKA
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-2">
                  <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              
              <div className="d-flex flex-column align-items-center mb-3">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', minWidth: '120px', borderRadius: '8px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 600, fontSize: '14px', color: '#0A332D'}}
                  >
                    PROJEKT
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-2">
                  <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              
              <div className="d-flex flex-column align-items-center mb-3">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', minWidth: '120px', borderRadius: '8px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 600, fontSize: '14px', color: '#0A332D'}}
                  >
                    BUDOWA
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center my-2">
                  <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z"/>
                  </svg>
                </div>
              </div>
              
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="border border-2 rounded px-4 py-3 text-center step-box" 
                  style={{borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', minWidth: '120px', borderRadius: '8px'}}
                >
                  <span 
                    className="fw-bold" 
                    style={{fontFamily: 'Manrope', fontWeight: 600, fontSize: '14px', color: '#0A332D'}}
                  >
                    DETALE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-lg-4">
            <div className="ps-3">
              <p 
                className="mb-4" 
                style={{fontFamily: 'Manrope', fontWeight: 400, fontSize: '1rem', lineHeight: '1.6', color: '#0A332D'}}
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
                  style={{fontFamily: 'Manrope', fontWeight: 600, fontSize: '14px', color: '#6C8581'}}
                >
                  więcej
                </span>
              </div>

              <div className="d-flex flex-column gap-3">
                <button 
                  className="btn d-flex align-items-center justify-content-between interactive-link text-start" 
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: '#0A332D',
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 0'
                  }}
                >
                  <span>Poznaj korzyści</span>
                  <svg width="16" height="16" fill="#FFA74E" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
                
                <button 
                  className="btn d-flex align-items-center justify-content-between interactive-link text-start" 
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: '#0A332D',
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 0'
                  }}
                >
                  <span>Przeglądaj projekty</span>
                  <svg width="16" height="16" fill="#FFA74E" viewBox="0 0 24 24">
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