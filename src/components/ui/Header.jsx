import React, { useState } from 'react';
import Icon from '../AppIcon';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
    localStorage.setItem('preferred-language', languageCode);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const currentLanguage = languages?.find(lang => lang?.code === selectedLanguage);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon 
                name="Calculator" 
                size={20} 
                color="var(--color-primary-foreground)" 
                strokeWidth={2}
              />
            </div>
            <h1 className="text-xl font-heading-semibold text-foreground">
              {selectedLanguage === 'es' ? 'Calculadora de Series Numericas' : 'Numerical Series Calculator'}
            </h1>
          </div>

          {}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={selectedLanguage === 'es' ? 'Seleccionar idioma' : 'Select language'}
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="text-sm">{currentLanguage?.flag}</span>
              <span className="text-sm font-body text-foreground">
                {currentLanguage?.label}
              </span>
              <Icon 
                name={isLanguageDropdownOpen ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                color="var(--color-muted-foreground)"
                strokeWidth={2}
              />
            </button>

            {}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-popover border border-border rounded-lg shadow-subtle z-200 animate-fade-in">
                <div className="py-2" role="listbox">
                  {languages?.map((language) => (
                    <button
                      key={language?.code}
                      onClick={() => handleLanguageChange(language?.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left text-sm hover:bg-muted transition-colors duration-200 focus:outline-none focus:bg-muted ${
                        selectedLanguage === language?.code 
                          ? 'bg-accent/10 text-accent font-body-medium' :'text-popover-foreground font-body'
                      }`}
                      role="option"
                      aria-selected={selectedLanguage === language?.code}
                    >
                      <span>{language?.flag}</span>
                      <span>{language?.label}</span>
                      {selectedLanguage === language?.code && (
                        <Icon 
                          name="Check" 
                          size={14} 
                          color="var(--color-accent)"
                          strokeWidth={2}
                          className="ml-auto"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-50" 
          onClick={() => setIsLanguageDropdownOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;