import React, { useState, useRef, useEffect } from 'react';

function Sidebar({ news, onSelect }) {
  const categories = [...new Set(news.map((item) => item.category))];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const getCategoryCount = (category) => {
    return category === 'All' ? news.length : news.filter((item) => item.category === category).length;
  };
  

  return (
    <div className={`xxlarge-4 medium-16 medium-offset-0 columns nav-sidebar-column `}>
      <nav className="nav-sidebar">
        <div className="nav-sidebar-scroll">
          <div className="dropdown nav-filter" ref={dropdownRef} style={{width:"100%"}}>
            <button className="filter-button nav-filter-active fade-in" onClick={toggleDropdown}>
              {selectedCategory} <span className="nav-filter-counter">({getCategoryCount(selectedCategory)})</span>
            </button>
            {isOpen && (
              <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                <ul>
                  <li onClick={() => handleCategorySelect("All")}>
                    All ({news.length})
                  </li>
                  {categories.map((category) => (
                    <li key={category} onClick={() => handleCategorySelect(category)}>
                      {category} ({getCategoryCount(category)})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="nav-sidebar-scroll-mobile">
            <ul className="nav-sidebar-list">
              {news
                .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
                .map((item) => (
                  <li key={item.id} className="nav-sidebar-item on" data-id={item.id}>
                    <button className="nav-sidebar-link" onClick={() => onSelect(item)}>
                      <span className="background"></span>
                      <time className="sidebar-date">{item.date}</time>
                      <div className="sidebar-category">{item.category}</div>
                      <h3>{item.title}</h3>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
