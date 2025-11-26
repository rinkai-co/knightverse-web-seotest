import TabContainer from "./TabContainer/TabContainer";

export default function Banner() {
  return (
    <div className="relative mb-8 font-sans">
      {/* Banner Container */}
      <div className="relative bg-amber-600 py-12 text-white">
        {/* Background Image Wrapper */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/g4e.webp")',
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-32 pb-6">
          <h1 className="mb-2 text-xl font-medium text-white/80">
            VFS Global for Individuals
          </h1>
          <h2 className="text-5xl font-semibold text-white">
            ปรึกษาวีซ่าเชงเก้น
          </h2>
        </div>
      </div>

      {/* Tab Container */}
      <TabContainer />
    </div>
  );
}
