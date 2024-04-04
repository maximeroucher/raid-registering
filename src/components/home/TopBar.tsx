import { UserButton } from "../userSheet/UserButton";
import { ThemeButton } from "../ui/themeButton";
import Link from "next/link";
export const TopBar = () => {
  return (
    <header className="max-md:sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex flex-row w-full mx-10 max-md:mx-0 items-center">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          {/* <Package2 className="h-6 w-6" /> */}
          <span className=" text-2xl">Inscription Raid 2024</span>
        </Link>

        <div className="flex flex-row ml-auto">
          <UserButton />
          <div className="w-4"></div>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};
