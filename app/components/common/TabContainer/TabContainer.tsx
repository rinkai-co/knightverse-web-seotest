import { Plane } from "lucide-react";
import Link from "next/link";

export default function TabContainer() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="-mt-12 rounded-md bg-white p-4 shadow-lg">
        {/* Form Content */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="relative col-span-2">
              <input
                className="w-full rounded-sm border-2 border-blue-700/50 p-4 pr-12 text-lg font-medium"
                placeholder="ค้นหาประเทศที่จะไป"
              />
              <Plane
                className="absolute top-1/2 right-4 -translate-y-1/2 text-blue-700/50"
                fill="#1447e6"
              />
            </div>
            <div className="flex w-full gap-2">
              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-sm border-2 border-blue-700 bg-blue-700 p-4 text-lg font-medium text-white"
              >
                วีซ่า
              </Link>
              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-sm border-2 border-blue-700 bg-blue-700 p-4 text-lg font-medium text-white"
              >
                วีซ่า
              </Link>
            </div>
            <Link
              href="/"
              className="rounded-full border-2 border-blue-700/50 p-4"
            >
              <Plane className="text-blue-700/50" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
