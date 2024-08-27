import Link from "next/link"

export default function MainHeader() {
    return (
        <header className="max-w-full w-full mx-auto rounded-none p-4 md:p-8 shadow-input bg-neutral-400 mb-8">
            <div className="flex flex-col md:flex-row justify-evenly space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <h1 className="font-bold text-4xl text-neutral-800">
                    Welcome to Stones!
                </h1>
                <div>
                    <Link href="/about-us"><button
                        className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium pl-4 pr-4 hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                        type="submit"
                    >
                        About Us
                    </button>
                    </Link>
                </div>
                <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Simple
                </button>
            </div>
        </header>
    )
};
