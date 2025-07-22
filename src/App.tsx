import { getImagePath } from './utils/imagePath';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100" style={{zIndex: 1050}}>
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold fs-4" href="#" style={{fontFamily: 'Manrope'}}>
            House-4-You
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Strona główna</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">O nas</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Realizacje</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Opinie</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase fw-semibold" href="#">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative vh-100 d-flex align-items-center" 
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33, 26, 26, 0.84), rgba(33, 26, 26, 0.84)), url('${getImagePath('/houseforyou/Header background.png')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h1 className="display-2 fw-bold mb-4 hero-title" style={{fontFamily: 'Manrope', fontSize: '4rem'}}>
                Budujemy Twoje marzenia
              </h1>
              <p className="lead mb-5 hero-subtitle" style={{fontFamily: 'Manrope', fontSize: '1.125rem', fontWeight: 500}}>
                Ponad 30 lat doświadczenia w budowie domów jednorodzinnych. Kompleksowa realizacja od projektu do wykończenia.
              </p>
              <button className="btn btn-outline-warning btn-lg px-5 py-3 hero-button pulse-button" 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  borderColor: '#FFA74E',
                  color: '#FFA74E',
                  minWidth: '320px'
                }}>
                Zobacz zrealizowane domy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{fontFamily: 'Manrope', color: '#082924'}}>
                Dlaczego warto nam zaufać?
              </h2>
              <p className="fs-4 fw-semibold mb-4" style={{fontFamily: 'Manrope', color: '#6C8581'}}>
                Stoją za nami lata doświadczeń
              </p>
              <p className="lead fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#082924', fontSize: '1.125rem'}}>
                Misją House-4-You jest kompleksowe budowanie wysokiej jakości domów jednorodzinnych, 
                dopasowanych do indywidualnych potrzeb naszych klientów, w całej Polsce.
              </p>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100 p-4 fade-in">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-3" style={{fontFamily: 'Manrope', color: '#082924'}}>
                    Dlaczego warto nam zaufać?
                  </h5>
                  <p className="card-text fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#103D36'}}>
                    Stoją za nami lata doświadczeń
                  </p>
                  <div className="p-3 rounded fw-bold" style={{backgroundColor: '#FFA74E', color: '#0A332D', fontFamily: 'Manrope'}}>
                    Metraż domu 200-250m2
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100 p-4 fade-in">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-3" style={{fontFamily: 'Manrope', color: '#082924'}}>
                    Dlaczego warto nam zaufać?
                  </h5>
                  <p className="card-text fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#103D36'}}>
                    Stoją za nami lata doświadczeń
                  </p>
                  <div className="p-3 rounded fw-bold" style={{backgroundColor: '#CED6D5', color: '#020A09', fontFamily: 'Manrope'}}>
                    telefon: 606 730 239
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-outline-warning btn-lg px-5 py-3" 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  borderColor: '#FFA74E',
                  color: '#0A332D'
                }}>
                Zobacz dowody na naszą rzetelność
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#103D36'}}>
                Budowa domu, krok po kroku
              </h2>
              <p className="lead fw-bold" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                Posiadając ponad 30 lat doświadczenia w budowie domów jednorodzinnych oraz budynków biurowych, 
                zrealizowaliśmy ponad 2500 projektów. Każdy obiekt to unikalna historia, a nasza praca opiera się 
                na wieloletniej wiedzy i rzetelnym podejściu do inwestycji.
              </p>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-3 mb-4">
              <div className="text-center p-4 rounded shadow-sm fade-in" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
                <div className="display-3 fw-bold mb-2 stat-number" style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  background: 'linear-gradient(180deg, #0D3831 0%, #115C50 31.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  150+
                </div>
                <p className="small fw-medium mb-0" style={{fontFamily: 'Manrope', color: '#6B7280'}}>
                  wybudowanych domów
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="text-center p-4 rounded shadow-sm fade-in" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
                <div className="display-3 fw-bold mb-2 stat-number" style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  background: 'linear-gradient(180deg, #0D3831 0%, #115C50 31.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  30
                </div>
                <p className="small fw-medium mb-0" style={{fontFamily: 'Manrope', color: '#6B7280'}}>
                  lat doświadczenia w branży
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="text-center p-4 rounded shadow-sm fade-in" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
                <div className="display-3 fw-bold mb-2 stat-number" style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  background: 'linear-gradient(180deg, #0D3831 0%, #115C50 31.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  10
                </div>
                <p className="small fw-medium mb-0" style={{fontFamily: 'Manrope', color: '#6B7280'}}>
                  lat gwarancji
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="text-center p-4 rounded shadow-sm fade-in" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
                <div className="display-3 fw-bold mb-2 stat-number" style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  background: 'linear-gradient(180deg, #0D3831 0%, #115C50 31.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  30+
                </div>
                <p className="small fw-medium mb-0" style={{fontFamily: 'Manrope', color: '#6B7280'}}>
                  pracowników
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{background: 'linear-gradient(180deg, rgba(157, 173, 171, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)'}}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D'}}>
                Zbuduj z nami swój dom
              </h2>
              <p className="lead fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                Firma House-4-You oferuje kompleksowe usługi budowlane, od dokumentów, pozwoleń, fundamentu, 
                przez stan surowy, deweloperski, prace pod klucz, zagospodarowanie terenu i ogród. Dbamy o każdy detal budowy. 
                Jakość potwierdzamy 10-cio letnią gwarancją. Z nami Twoje marzenie o budowie domu stanie się rzeczywistością.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
              </div>
              <button className="btn btn-outline-warning btn-lg px-4 py-3" 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  borderColor: '#FFA74E',
                  color: '#0A332D'
                }}>
                Przeglądaj projekty
              </button>
            </div>
            <div className="col-lg-6">
              <div className="rounded gallery-image-hover" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/promo banner desktop.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 p-4 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}>
                    Kompleksowość
                  </h5>
                  <p className="card-text" style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}>
                    Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 p-4 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}>
                    Doświadczenie
                  </h5>
                  <p className="card-text" style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}>
                    Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 p-4 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}>
                    Gwarancja 10 lat
                  </h5>
                  <p className="card-text" style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}>
                    Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Steps Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold" style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '48px', lineHeight: '66px', color: '#0A332D'}}>
                Budowa domu krok po kroku
              </h2>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Left - Large House Image */}
            <div className="col-lg-5">
              <div className="rounded gallery-image-hover" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Zrzut ekranu 2025-03-13 o 13.57.05.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px'
              }}></div>
            </div>

            {/* Center - Steps with connecting arrows */}
            <div className="col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="border border-2 rounded px-4 py-3 text-center step-box" style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}>
                    <span className="fw-bold" style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}>DZIAŁKA</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h12z"/>
                    </svg>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="border border-2 rounded px-4 py-3 text-center step-box" style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}>
                    <span className="fw-bold" style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}>PROJEKT</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h12z"/>
                    </svg>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="border border-2 rounded px-4 py-3 text-center step-box" style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}>
                    <span className="fw-bold" style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}>BUDOWA</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <svg width="20" height="20" fill="#FFA74E" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h12z"/>
                    </svg>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div className="border border-2 rounded px-4 py-3 text-center step-box" style={{borderColor: '#0A332D', backgroundColor: '#FFFFFF', minWidth: '120px'}}>
                    <span className="fw-bold" style={{fontFamily: 'Manrope', fontWeight: 800, fontSize: '14px', color: '#0A332D'}}>DETALE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content with text and buttons */}
            <div className="col-lg-4">
              <div className="ps-3">
                <p className="mb-4" style={{fontFamily: 'Manrope', fontWeight: 700, fontSize: '18px', lineHeight: '32px', color: '#0A332D'}}>
                  <strong>Proces budowy jest złożony.</strong> Łatwiej wykonać go z zaufanym partnerem. Warto 
                  ponieść ten trud, bo nagroda za wysiłek jest duża. Posiadanie wpływu na każdy 
                  aspekt budowy domu jest bezcenne. Zaczynając od wyboru działki, projektu samej 
                  budowy Inwestor ma wpływ na każdy aspekt. Nie dostanie się tego kupując gotową 
                  nieruchomość.
                </p>

                <div className="d-flex align-items-center mb-4">
                  <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                  <span className="fw-bold" style={{fontFamily: 'Manrope', fontWeight: 700, fontSize: '16px', lineHeight: '24px', color: '#6C8581'}}>więcej</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <button className="btn d-flex align-items-center interactive-link" 
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#0A332D',
                      background: 'transparent',
                      border: 'none',
                      padding: '8px 0'
                    }}>
                    Poznaj korzyści
                    <svg width="16" height="16" fill="#FFA74E" viewBox="0 0 24 24" className="ms-2">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-3">
                  <button className="btn d-flex align-items-center interactive-link" 
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#0A332D',
                      background: 'transparent',
                      border: 'none',
                      padding: '8px 0'
                    }}>
                    Przeglądaj projekty
                    <svg width="16" height="16" fill="#FFA74E" viewBox="0 0 24 24" className="ms-2">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{background: 'linear-gradient(121.01deg, rgba(249, 246, 241, 0.5) 26.39%, #FFFFFF 57.32%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#103D36'}}>
                Co mówią nasi klienci
              </h2>
              <p className="lead fw-bold" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                Opinie zadowolonych właścicieli domów wybudowanych przez House-4-You
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="text-center testimonial-card">
                <div className="rounded-circle mx-auto mb-3 gallery-image-hover" style={{
                  backgroundImage: `url('${getImagePath('/houseforyou/Zbyszek.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}></div>
                <h5 className="fw-bold mb-2" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Anna</h5>
                <p style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                  Chcę wyrazić swoje podziękowania za profesjonalne wykonanie naszego domu. Wszystko zostało zrealizowane zgodnie z planem.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center testimonial-card">
                <div className="rounded-circle mx-auto mb-3 gallery-image-hover" style={{
                  backgroundImage: `url('${getImagePath('/houseforyou/Zbyszek.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}></div>
                <h5 className="fw-bold mb-2" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Zbyszek</h5>
                <p style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                  Doskonała obsługa na każdym etapie budowy. Polecam House-4-You wszystkim, którzy planują budowę domu.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center testimonial-card">
                <div className="rounded-circle mx-auto mb-3 gallery-image-hover" style={{
                  backgroundImage: `url('${getImagePath('/houseforyou/michal (1) 1.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}></div>
                <h5 className="fw-bold mb-2" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Robert</h5>
                <p style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                  Bardzo zadowoleni z efektu końcowego. Dom został wybudowany terminowo i w wysokiej jakości.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center gap-2">
                <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#E5E5E5'}}></div>
                <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#FFA74E'}}></div>
                <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#E5E5E5'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D'}}>
                Na przestrzeni 30 lat zmieniły się trendy, jednak to, co pozostało niezmienne, 
                to jakość wybudowanych przez nas domów
              </h2>
              <p className="lead fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                Firma budowlana House-4-You to dobre rozwiązanie dla Twojej inwestycji budowy domu. 
                Z nami zrealizujesz marzenie o własnym domu lub funkcjonalnym biurze od A do Z.
              </p>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
                <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
              </div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
                Przeglądaj projekty
              </span>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <div className="rounded gallery-image-hover" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/strzeniówka51 1.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}></div>
              <div className="mt-3">
                <p className="fw-semibold mb-0" style={{fontFamily: 'Manrope', color: '#000000'}}>
                  Warszawa<br/>
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="rounded gallery-image-hover" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/thumb2 1.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}></div>
              <div className="mt-3">
                <p className="fw-semibold mb-0" style={{fontFamily: 'Manrope', color: '#000000'}}>
                  Warszawa<br/>
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="rounded gallery-image-hover" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/ursus 1.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}></div>
              <div className="mt-3">
                <p className="fw-semibold mb-0" style={{fontFamily: 'Manrope', color: '#000000'}}>
                  Warszawa<br/>
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-outline-warning btn-lg px-5 py-3" 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  borderColor: '#FFA74E',
                  color: '#0A332D'
                }}>
                Zobacz dowody na naszą rzetelność
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Years Experience Section */}
      <section className="py-5" style={{background: 'linear-gradient(91.65deg, rgba(206, 214, 213, 0.1) 29.41%, rgba(255, 255, 255, 0.5) 80.68%)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-4 fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D'}}>
                30 lat doświadczeń
              </h2>
              <p className="lead fw-bold mb-4" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}>
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
              <button className="btn btn-outline-warning btn-lg px-5 py-3" 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  borderColor: '#FFA74E',
                  color: '#0A332D'
                }}>
                Zobacz dowody na naszą rzetelność
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row g-1">
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 57.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 58.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 59.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 60.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 61.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
            <div className="col-2">
              <div className="rounded" style={{
                backgroundImage: `url('${getImagePath('/houseforyou/Rectangle 62.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="position-relative py-5" 
        style={{
          backgroundImage: `url('${getImagePath('/houseforyou/image contact form.png')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: '#0A332D', opacity: 0.8}}></div>

        <div className="position-relative container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-5">
                <h2 className="h3 mb-3" style={{fontFamily: 'Manrope', color: '#FFA74E', fontWeight: 400}}>
                  Nie przekonaliśmy Cię?
                </h2>
                <h3 className="h3 fw-bold" style={{fontFamily: 'Manrope', color: '#FFA74E'}}>
                  Napisz i umów się na rozmowę
                </h3>
              </div>

              <button className="btn btn-lg px-5 py-3" 
                style={{
                  background: 'linear-gradient(90deg, rgba(13, 56, 49, 0.95) 0%, rgba(38, 116, 102, 0) 100%), rgba(15, 66, 58, 0.9)',
                  border: '2px solid #244641',
                  color: '#FFA74E',
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  minWidth: '392px'
                }}>
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5" style={{backgroundColor: '#FFFBF8'}}>
        <div className="container text-center">
          <div className="mb-5">
            <h3 className="fw-bold mb-0" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem'}}>
              House-4-You
            </h3>
          </div>

          <nav className="mb-4">
            <div className="row justify-content-center">
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Strona główna</a></div>
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>O nas</a></div>
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Realizacje</a></div>
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Opinie</a></div>
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Blog</a></div>
              <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Kontakt</a></div>
            </div>
          </nav>

          <div className="pt-4 border-top">
            <p className="mb-0" style={{fontFamily: 'Manrope', color: '#6B7280', fontSize: '0.875rem'}}>
              © 2024 House-4-You. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
