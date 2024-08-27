'use client';

import Link from "next/link";

import LabeledInput from "../../molecules/labeled-input/labeled-input";

export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-neutral-400">
            <p className="text-xl max-w-sm mb-2 text-center">
                Do you have an account?
            </p>
            <form className="my-4" onSubmit={handleSubmit}>
                <LabeledInput className="mb-4" inputId="email" placeholder="projectmayhem@fc.com" type="email">Email Address</LabeledInput>
                <LabeledInput className="mb-4" inputId="password" placeholder="••••••••" type="password">Password</LabeledInput>

                <button
                      className="bg-gradient-to-br relative from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                    type="submit"
                >
                    Log In &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-black to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <p className="text-sm max-w-sm mb-2 text-center">
                        Don&apos;t have an account?
                    </p>
                    <Link href="/register"><button
                        className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};