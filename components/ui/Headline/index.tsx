import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const Headline = () => {
    return (
        <Link
            className="block w-full h-fit bg-blue-50 dark:bg-gray-900 overflow-x-scroll rounded-md mb-4"
            style={{
                scrollbarWidth: 'none'
            }}
            href='#'
        >
            <div className="w-250 md:w-full p-3 h-full flex justify-between items-center">
                {/* Headline */}
                <header className="flex gap-1 items-center">
                    <div className="h-5 w-1 rounded-full bg-primary my-auto mr-2"></div>
                    <h5 className='text-xs uppercase text-primary font-bold'>
                        headline hari ini:
                    </h5>
                    {/* max 100 characters */}
                    <p className='text-xs'>Gelombang Baru COVID-19 di Indonesia, Bagaimana Langkah Penanganannya?</p>
                </header>

                {/* Control */}
                <span
                    className='px-4 py-1.5 rounded-full shadow-sm bg-white dark:bg-gray-800 text-xs flex items-center gap-1 text-primary font-medium'
                >
                    Selengkapnya <ChevronRight size={16} />
                </span>

                {/* right blur */}
                <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white dark:from-purple-950 to-transparent pointer-events-none" />

            </div>
        </Link>
    )
}

export default Headline