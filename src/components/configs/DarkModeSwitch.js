import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export { ThemeSwitch };
