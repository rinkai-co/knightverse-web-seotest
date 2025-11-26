import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 right-0 left-0 z-50 flex w-full flex-col items-center justify-center border-b border-neutral-200 bg-white font-sans">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <div className="mb-2 flex w-full items-center justify-between border-b border-neutral-200/80 px-8 pt-4 pb-2">
            <Link href="/" className="flex items-center">
              <Image
                className="dark:invert"
                src="/logo.svg"
                alt="Next.js logo"
                width={127}
                height={24}
                priority
              />
            </Link>
            <div className="flex items-center">
              <Link href="/about" className="button-nav-blank">
                ติดต่อสอบถาม
              </Link>
              <Link href="/about" className="button-nav-blank">
                <Globe className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-2 px-4 pb-2">
            <Link href="/about" className="button-nav-blank gap-2">
              ปรึกษาเรื่องวีซ่า <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="button-nav-blank gap-2">
              กฎหมาย <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="button-nav-blank gap-2">
              สมรสกับชาวต่างชาติ <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="button-nav-blank gap-2">
              บริการเพิ่มเติม <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="button-nav-blank gap-2">
              Thai Visa <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="button-nav-blank">
              Thailand Priviledge
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
