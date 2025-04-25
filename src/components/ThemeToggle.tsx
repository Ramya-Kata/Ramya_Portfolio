import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setDarkMode(true);
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed left-6 bottom-6 z-50 p-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 rounded-full shadow-md hover:scale-110 transition"
      title="Toggle Theme"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
