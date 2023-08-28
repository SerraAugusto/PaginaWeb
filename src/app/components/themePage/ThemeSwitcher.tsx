"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styled from "styled-components";
import {  BsFillMoonFill, BsFillSunFill } from "react-icons/Bs";

const ThemeButton = styled.button`
border-style: none;
width: 30px;
height: 24px;

border-radius: 40%;

`


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <ThemeButton
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
     <BsFillMoonFill></BsFillMoonFill> 
    </ThemeButton>
  );
};