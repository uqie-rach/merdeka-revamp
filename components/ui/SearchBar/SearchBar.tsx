
const SearchBar = () => {
    return (
        <div
            className="w-full md:w-[528px] h-[48px] p-1 rounded-full"
            style={{
                background:
                    "linear-gradient(90deg, #F5EEFC 0%, #E5CCFF 50%, #F5EEFC 100%)",
            }}
        >
            <div className="flex items-center gap-1 justify-center w-full h-full rounded-full bg-white dark:bg-[#0a0a0a] p-1">
                <img
                    src={'/icons/star.svg'}
                    width={18}
                    height={18}
                    className='ml-2'
                />
                <input
                    type="search"
                    placeholder="Program Makan Bergizi Gratis..."
                    className="w-full h-full text-sm placeholder:text-xs outline-none"
                />
                <button
                    className='rounded-full w-[72px] h-[32px] flex items-center justify-center gap-1 text-[10px] md:text-xs font-medium text-white'
                    style={{
                        background:
                            "linear-gradient(to left, #8318F5 0%, #0E09FF 100%)"
                    }}
                >
                    <img
                        src={'/icons/smart-search.svg'}
                        width={12}
                        height={12}
                    />
                    <span
                        className='hidden lg:block'
                    >
                        Cari
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar