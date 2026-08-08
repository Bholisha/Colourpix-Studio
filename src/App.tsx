import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { FilmReel } from './components/home/FilmReel';
import { About } from './components/home/About';
import { FullAboutPage } from './components/about/FullAboutPage';
import { StudioGallery } from './components/home/StudioGallery';
import { FullStudioPage } from './components/studio/FullStudioPage';
import { WhoWeServe } from './components/home/WhoWeServe';
import { Services } from './components/home/Services';
import { HomePackages } from './components/home/HomePackages';
import { AllPackagesPage } from './components/packages/AllPackagesPage';
import { GearGrid } from './components/home/GearGrid';
import { Portfolio } from './components/home/Portfolio';
import { LocationFAQ } from './components/home/LocationFAQ';
import { Footer } from './components/common/Footer';
import { BookingModal } from './components/common/BookingModal';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'all-packages' | 'full-about' | 'full-studio'>('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const handleOpenBooking = (pkg?: any) => {
    setSelectedPackage(pkg || null);
    setIsModalOpen(true);
  };

  // Dedicated View Switcher with Smooth Mount Timing
  const navigateToView = (view: 'home' | 'all-packages' | 'full-about' | 'full-studio') => {
    setCurrentPage(view);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };
  

  const handleSectionNavigation = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-obsidian text-slate-100 overflow-x-hidden m-0 p-0 font-sans">
      
      {/* Global Navbar */}
      <Navbar 
        onBookClick={() => handleOpenBooking()} 
        onNavigateSection={handleSectionNavigation}
      />

      {/* VIEW 1: HOME PAGE */}
      {currentPage === 'home' && (
        <>
          <Hero 
            onBookClick={() => handleOpenBooking()} 
            onSeeStudioClick={() => navigateToView('full-studio')}
          />
          <FilmReel />

          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* About Section Redirect */}
            <About onReadFullStory={() => navigateToView('full-about')} />

            <Services onBookClick={() => handleOpenBooking()} />

            <StudioGallery onExploreAllSets={() => navigateToView('full-studio')} />

            <WhoWeServe onBookClick={() => handleOpenBooking()} />

            <GearGrid />

            <HomePackages 
              onViewMore={() => navigateToView('all-packages')}
              onBookClick={(pkg) => handleOpenBooking(pkg)}
            />

            <Portfolio />

            <LocationFAQ />

          </div>

          <Footer />
        </>
      )}

      {/* VIEW 2: FULL STUDIO PAGE */}
      {currentPage === 'full-studio' && (
        <>
          <FullStudioPage 
            onBackToHome={() => navigateToView('home')}
            onBookSet={(setName) => handleOpenBooking({ name: setName })}
          />
          <Footer />
        </>
      )}

      {/* VIEW 3: ALL PACKAGES PAGE */}
      {currentPage === 'all-packages' && (
        <>
          <AllPackagesPage 
            onBackToHome={() => navigateToView('home')}
            onBookClick={(pkg) => handleOpenBooking(pkg)}
          />
          <Footer />
        </>
      )}

      {/* VIEW 4: FULL ABOUT PAGE */}
      {currentPage === 'full-about' && (
        <>
          <FullAboutPage 
            onBackToHome={() => navigateToView('home')}
            onBookClick={() => handleOpenBooking()}
          />
          <Footer />
        </>
      )}

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />

    </div>
  );
};

export default App;