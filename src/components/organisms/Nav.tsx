import Links from "@/components/molecules/Links";

interface NavProps {
  children?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <nav className="flex w-full h-[125px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-xl mb-4">Bito</h1>
        <Links />
      </div>
    </nav>
  );
};

export default Nav;
