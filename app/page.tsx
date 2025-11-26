import Image from "next/image";
import Banner from "./components/common/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mx-auto flex min-h-screen max-w-7xl items-start px-8 font-sans">
        <section className="flex w-full flex-col items-start justify-center">
          <div className="text-start">
            <h1 className="text-4xl font-bold">บริการวีซ่าต่างประเทศ</h1>
            <p className="text-lg text-gray-600">
              Your trusted partner for visa assistance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
