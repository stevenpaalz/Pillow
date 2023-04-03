import React, { useState, useEffect } from "react";
import profileIcon from '../../assets/profile_icon.png';

function ProfileButton() {
  const [showMenu, setShowMenu] = useState(false);

  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    const profileDropDown = document.getElementById('profile-dropdown');
    profileDropDown.classList.remove('hidden');
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      const profileDropDown = document.getElementById('profile-dropdown');
      profileDropDown.classList.add('hidden');
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



  return (
    <>
      <button id="profile-button" onClick={openMenu}>
        <img src={profileIcon} alt="Profile Icon" />
      </button>
    </>
  );
}

export default ProfileButton;