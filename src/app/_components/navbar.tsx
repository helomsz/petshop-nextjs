"use client"

import Link from "next/link"
import { PawPrint, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <nav
                className="relative flex items-center justify-between h-16 px-6 md:px-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-black/5 border border-black/5 "
            >
                <div className="flex items-center gap-2">
                    <PawPrint className="w-5 h-5 text-black" />
                    <span className="font-semibold text-lg tracking-tight">
                        Petshop Dev
                    </span>
                </div>
                <ul className="hidden md:flex gap-13 text-base font-medium">
                    <li><Link href="#hero" className="hover:text-green-500 transition">Início</Link></li>
                    <li><Link href="#about" className="hover:text-green-500 transition">Sobre</Link></li>
                    <li><Link href="#services" className="hover:text-green-500 transition">Serviços</Link></li>
                    <li><Link href="#testimonials" className="hover:text-green-500 transition">Depoimentos</Link></li>
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-full hover:bg-black/5 transition"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
                {open && (
                    <div
                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-black/5 p-6 flex flex-col gap-4 md:hidden"
                    >
                        <Link onClick={() => setOpen(false)} href="#hero" className="hover:text-green-500 transition">
                            Início
                        </Link>
                        <Link onClick={() => setOpen(false)} href="#about" className="hover:text-green-500 transition">
                            Sobre
                        </Link>
                        <Link onClick={() => setOpen(false)} href="#services" className="hover:text-green-500 transition">
                            Serviços
                        </Link>
                        <Link onClick={() => setOpen(false)} href="#testimonials" className="hover:text-green-500 transition">
                            Depoimentos
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
