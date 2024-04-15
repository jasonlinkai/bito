interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex w-full h-[80px] items-center justify-center bg-black border-t pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit">
      <a
        className="flex place-items-center gap-2 p-8"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By Jacky
      </a>
    </footer>
  );
};

export default Footer;
