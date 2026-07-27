import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, []);

  // Logout
  const handleLogout = () => {
  localStorage.removeItem("currentUser");
  navigate("/login", {
    state: {
      message: "✅ Logout Successful"
    }
  });
};

  return (
    <div className="profile-menu" ref={menuRef} >
      {/* Menu Icon */}
      <FaBars className="menu-icon" onClick={() => setOpen(!open)}/>
      {/* Dropdown */}
      {open && (
        <div className="profile-dropdown">
          <button onClick={() => { navigate("/profile"); setOpen(false); }}>👤 Profile Details</button>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;