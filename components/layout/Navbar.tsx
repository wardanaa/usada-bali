"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { JSX } from "react/jsx-dev-runtime";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tentang", label: "Tentang Usada Bali" },
    { href: "/identifikasi", label: "Identifikasi Tanaman" },
];

export function Navbar(): JSX.Element {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-green-500">
                        <span className="text-xs font-semibold text-green-600">U</span>
                    </div>
                    <span className="text-lg font-semibold tracking-wide">Usada</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 text-sm md:flex">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative pb-1 transition ${active ? "text-green-600" : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                {link.label}
                                {active && (
                                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-green-500" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="inline-flex flex-col gap-1 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                >
                    <span className="h-0.5 w-6 bg-slate-800" />
                    <span className="h-0.5 w-6 bg-slate-800" />
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav
                    id="mobile-nav"
                    className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 text-sm md:hidden">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`rounded-lg px-3 py-2 ${active
                                            ? "bg-green-50 text-green-700"
                                            : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
}
