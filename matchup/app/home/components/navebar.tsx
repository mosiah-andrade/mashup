"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const mode = pathname.includes("/startup")
        ? "startup"
        : "investidor";

    const changeMode = (newMode: string) => {
        setOpen(false);

        if (newMode === "investidor") {
            router.push("/home/investidor");
        }

        if (newMode === "startup") {
            router.push("/home/startup");
        }
    };

    return (
        <div className="p-4 px-8 flex justify-between items-center border-b-2 border-gray-300">
            <h1>Logo</h1>

            <div className="flex gap-4 items-center">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className={`h-7 rounded-md text-sm font-bold px-2 flex items-center gap-2 ${
                            mode === "investidor"
                                ? "bg-[#D3E4FE] text-[#1D4ED8]"
                                : "bg-[#EADDFF] text-[#5A189A]"
                        }`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full ${
                                mode === "investidor"
                                    ? "bg-green-500"
                                    : "bg-blue-500"
                            }`}
                        />

                        {mode === "investidor"
                            ? "Modo Investidor"
                            : "Modo StartUp"}
                    </button>

                    {open && (
                        <div className="absolute top-8 left-0 w-40 bg-white border border-gray-200 rounded-md shadow-md p-1 z-10">
                            <button
                                type="button"
                                onClick={() => changeMode("investidor")}
                                className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full" />
                                Modo Investidor
                            </button>

                            <button
                                type="button"
                                onClick={() => changeMode("startup")}
                                className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                            >
                                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                Modo StartUp
                            </button>
                        </div>
                    )}
                </div>

                <button className="text-gray-500 hover:text-gray-700">
                    <IoMdNotificationsOutline className="w-6 h-6" />
                </button>

                <Image
                    src="/beatriz-ramos.png"
                    alt="User Avatar"
                    width={42}
                    height={42}
                    className="rounded-full border-2 border-blue-300"
                />
            </div>
        </div>
    );
}
