export default function CourceMenu() {
  const menuItems = [
    "Home",
    "Courses",
    "About",
    "Contact",
    "Blog",
    "Pricing",
    "FAQ",
    "Testimonials",
    "Support",
    "Gallery",
    "Resources",
    "Careers",
  ];

  return (
    <>
      {/* Main Menu */}
      <div className="menu-wrapper bg-light shadow-sm py-2 px-3 mb-3">
        <div className="menu-container d-flex overflow-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="menu-link text-dark fw-semibold px-3 py-2 text-nowrap"
              style={{ minWidth: "max-content" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>


      {/* Inline styles */}
      <style jsx="true">{`
        .menu-container::-webkit-scrollbar {
          height: 6px;
        }
        .menu-container::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 3px;
        }
        .menu-link:hover {
          background-color: black;
          color: white !important;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
