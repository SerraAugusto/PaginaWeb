// import React, { useState } from "react";
// import "./Switch.css";
// import { theme, toggleTheme, isDarkTheme } from "./ThemeSetter";
// import { useTheme } from "styled-components";

// interface Props {
//  theme:'string';
//  isDarktheme: 'string';
//  toggleTheme:'string';
//  isToggled:'boolean';

// }

// function ThemeSwitcherButton({theme, isDarkTheme, toggleTheme, isToggled  }: Props) {
//   const [isToggled, setIsToggled] = useState(false);
//   const { theme, isDarkTheme, toggleTheme } = useTheme();
//   const onToggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <label className="toggle-switch">
//       <input type="checkbox" checked={isToggled} onChange={onToggle} />
//       <span className="switch" />
//     </label>
//   );
// }
// export default ThemeSwitcherButton;