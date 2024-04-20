import { UserButton } from "../userSheet/UserButton";
import Link from "next/link";
import { Moon, Sun, Settings, SunMoon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import { useTheme } from "next-themes";
export const TopBar = () => {
  const { setTheme } = useTheme();

  function contactUs() {
    window.open("mailto:"); //TODO: retrieve email
  }

  return (
    <header className="max-md:sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
      <nav className="flex flex-row w-full mx-10 max-md:mx-0 items-center">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          <span className=" text-2xl">Inscription Raid 2024</span>
        </Link>

        <div className="flex flex-row ml-auto">
          <UserButton />
          <div className="w-4"></div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                Paramètres
                <Settings className="h-6 w-6 ml-4" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Thème</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem onClick={() => setTheme("light")}>
                      Clair
                      <MenubarShortcut>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={() => setTheme("dark")}>
                      Sombre
                      <MenubarShortcut>
                        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={() => setTheme("system")}>
                      Système
                      <MenubarShortcut>
                        <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      </MenubarShortcut>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem onClick={contactUs}>Nous contacter</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </nav>
    </header>
  );
};
