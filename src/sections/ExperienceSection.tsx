import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-5" style={{background: 'linear-gradient(91.65deg, rgba(206, 214, 213, 0.1) 29.41%, rgba(255, 255, 255, 0.5) 80.68%)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 
              className="display-4 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D'}}
            >
              30 lat doświadczeń
            </h2>
            <p 
              className="lead fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
            >
              Od ponad 30 lat zajmujemy się budową domów, zdobywając cenne doświadczenie w realizacji inwestycji. 
              Jednym z najtrudniejszych okresów był rok 2007, kiedy krach na światowych giełdach spowodował gwałtowny wzrost cen materiałów budowlanych. 
              Wobec konieczności utrzymania stałych cen dla Inwestorów, zmuszeni byliśmy do intensywnych negocjacji z dostawcami. 
              Choć wyzwania trwały do 2008 roku, kiedy wysokie koszty zahamowały popyt i wywołały kryzys w branży, 
              pozytywnym aspektem było ustabilizowanie cen materiałów i robocizny.
            </p>
            <div className="d-flex align-items-center justify-content-center mb-5">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
            <Button 
              variant="outlined"
              size="large"
              style={{
                borderColor: '#FFA74E',
                color: '#0A332D'
              }}
            >
              Zobacz dowody na naszą rzetelność
            </Button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row g-1">
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 57.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 58.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 59.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 60.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 61.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
          <div className="col-2">
            <div 
              className="rounded" 
              style={{
                backgroundImage: `url('${getImagePath('/Rectangle 62.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};