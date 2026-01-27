export default function Header() {
  return (
    <header className="w-full">
      {/* Top blue strip */}
      <div className="h-[40px] bg-[#2F6BFF]" />

      {/* Main header */}
      <div
        className="bg-[#2F3A4A] px-4 flex items-center justify-between"
        style={{ height: "48px" }}
      >
        {/* Logo */}
        <div
          className="text-white font-semibold text-[14px]"
          style={{ lineHeight: "1.05" }}
        >
          The<br />
          Automator.
        </div>

        {/* Hamburger */}
        <div className="flex flex-col gap-[5px]">
          <span className="block w-[22px] h-[2.5px] bg-white rounded" />
          <span className="block w-[22px] h-[2.5px] bg-white rounded" />
          <span className="block w-[22px] h-[2.5px] bg-white rounded" />
        </div>
      </div>
    </header>
  );
}