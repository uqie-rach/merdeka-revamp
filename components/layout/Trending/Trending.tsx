'use client';

import { TrendingUp, Check, CheckCircle } from "lucide-react";

export const TRENDING = [
    { label: 'idul adha', href: '/', checked: false },
    { label: 'piala dunia', href: '#', checked: true },
    { label: 'covid-19', href: '#', checked: true },
    { label: 'vidi', href: '#', checked: true },
    { label: 'byd seal', href: '#', checked: false },
    { label: 'raja ampat', href: '#', checked: false },
    { label: 'haji 2026', href: '#', checked: false },
    { label: 'indonesia vs china', href: '#', checked: true },
    { label: 'indonesia open', href: '#', checked: false },
];

const Trending = () => {

    const items = [...TRENDING, ...TRENDING]; // duplicate for seamless loop

    return (
        <section className="mt-2 px-4 sm:px-6 lg:px-8">
            <div className="bg-primary max-w-7xl mx-auto rounded-md">
                <div className="relative bg-purple-100 dark:bg-[#0a0a0a] rounded-md border-2 border-primary/80 w-full h-13.5 flex items-center py-1 px-3 overflow-hidden">

                    {/* Title */}
                    <span className="flex gap-2 items-center text-primary mr-4 shrink-0">
                        <TrendingUp className="size-5 md:h-6" />
                        <p className="hidden md:block text-sm font-bold">Trending</p>
                    </span>

                    {/* Slider container */}
                    <div className="relative flex-1 overflow-hidden">

                        {/* moving track */}
                        <div className="flex gap-3 animate-trending whitespace-nowrap">
                            {items.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-1 px-4 py-1 text-xs md:text-sm dark:text-gray-300 rounded-full bg-primary/10 dark:bg-purple-900/40 shrink-0"
                                >
                                    {item.label}

                                    {item.checked && (
                                        <CheckCircle size={14} className="text-green-600" />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* left blur */}
                        <div className="absolute left-0 top-0 h-full w-12 bg-linear-to-r from-purple-100 dark:from-[#0a0a0a] to-transparent pointer-events-none" />

                        {/* right blur */}
                        <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-r from-purple-100 dark:from-[#0a0a0a] to-transparent pointer-events-none" />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Trending;