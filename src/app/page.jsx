import {
    IconBrandFacebook,
    IconBrandGithubFilled,
    IconBrandMeta,
    IconMapPinFilled,
    IconMoonFilled,
    IconSearch,
    IconTemperatureCelsius,
} from "@tabler/icons-react";

export default function Home() {
    return (
        <main className="flex h-dvh items-center justify-between bg-white">
            {/* card time home */}
            <div className="h-full p-10 w-2/6">
                <div className="bg-gradient-to-t from-white via-blue-100 to-blue-300 rounded-2xl h-full shadow-[0px_0px_25px_0px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-center pt-10 h-96">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png"
                            className="h-56 my-20"
                        />
                    </div>
                    <div className="font-thin">
                        <div className=" py-20 text-center my-4">
                            <div className="text-9xl ">20°C</div>
                            <div className="text-4xl ">Nublado</div>
                        </div>
                        <div className=" py-5 text-center">
                            <div className="text-2xl">jueves • 4 de junio</div>
                            <div className="text-2xl flex justify-center">
                                <IconMapPinFilled
                                    width={22}
                                    height={22}
                                    className="mr-2 mt-1"
                                />
                                la paz
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end card time home */}

            <div className="h-full w-4/6">
                <div className=" flex h-1/6 justify-between">
                    {/* button input search*/}
                    <div className="mt-14 flex w-full justify-center">
                        <label class="block ml-10 w-96">
                            <input
                                type="search"
                                name="search"
                                class=" px-5 py-2 bg-sky-50 shadow-sm placeholder-slate-400 focus:outline-none   block w-full rounded-[20px] sm:text-lg focus:ring-1"
                                placeholder="Buscar..."
                            />
                        </label>
                        <button
                            className="w-11 h-11 rounded-full bg-white flex justify-center items-center ml-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] hover:bg-sky-700  hover:text-white text-sky-600"
                            title="Buscar"
                        >
                            <IconSearch width={22} height={22} />
                        </button>
                    </div>
                    {/* end button input search*/}

                    {/* button three right */}
                    <div className="mt-5 flex">
                        <button
                            className="w-12 h-12 rounded-full bg-sky-700 flex justify-center items-center shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)]
                        hover:bg-sky-100  hover:text-sky-600 text-white"
                            title="Mi ubicacion Actual"
                        >
                            <IconMapPinFilled width={25} height={25} />
                        </button>
                        <button
                            className="w-12 h-12 rounded-full bg-sky-700 flex justify-center items-center ml-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] hover:bg-sky-100  hover:text-sky-600 text-white"
                            title="Modo Oscuro/Claro"
                        >
                            <IconMoonFilled width={25} height={25} />
                        </button>
                        <button
                            className="w-12 h-12 rounded-full bg-sky-700 flex justify-center items-center ml-5 mr-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] hover:bg-sky-100  hover:text-sky-600 text-white"
                            title="Celsius/Fahrenheit"
                        >
                            <IconTemperatureCelsius width={25} height={25} />
                        </button>
                    </div>
                    {/* end button three right */}
                </div>
                <div className="h-2/6 font-normal">
                    <div className="text-3xl">Lo mas destacado de hoy</div>
                    <div className="flex justify-evenly mx-10 mt-5">
                        <div className="bg-red-200 w-1/3 m-5 p-5">
                            Lorem ipsum dolor sit amet amet euismod gubergren
                            sed eos dolor sit nonummy dolore diam nonumy
                            suscipit sed. Dolore elit diam eum eu takimata lorem
                            delenit adipiscing illum et. Erat duis lorem ipsum
                            tempor at molestie et justo labore nonummy aliquyam
                            ad et.
                        </div>
                        <div className="bg-red-200 w-1/3 m-5 p-5">
                            Lorem ipsum dolor sit amet amet euismod gubergren
                            sed eos dolor sit nonummy dolore diam nonumy
                            suscipit sed. Dolore elit diam eum eu takimata lorem
                            delenit adipiscing illum et. Erat duis lorem ipsum
                            tempor at molestie et justo labore nonummy aliquyam
                            ad et.
                        </div>
                        <div className="bg-red-200 w-1/3 m-5 p-5">
                            Lorem ipsum dolor sit amet amet euismod gubergren
                            sed eos dolor sit nonummy dolore diam nonumy
                            suscipit sed. Dolore elit diam eum eu takimata lorem
                            delenit adipiscing illum et. Erat duis lorem ipsum
                            tempor at molestie et justo labore nonummy aliquyam
                            ad et.
                        </div>
                    </div>
                </div>
                <div className="h-2/6">
                    <div className="text-3xl">Pronostico del Tiempo</div>
                    <div className="flex justify-evenly mx-10 mt-5">
                        <div className="bg-red-200 w-1/5 m-5 p-5">
                            Lorem ipsum dolor sit amet amet eufgdfgdfgdfg. Dt.
                        </div>
                        <div className="bg-red-200 w-1/5 m-5 p-5">
                            Lorem ipsum dolor sit amet amet eufgdfgdfgdfg. Dt.
                        </div>
                        <div className="bg-red-200 w-1/5 m-5 p-5">
                            Lorem ipsum dolor sit amet amet eufgdfgdfgdfg. Dt.
                        </div>
                        <div className="bg-red-200 w-1/5 m-5 p-5">
                            Lorem ipsum dolor sit amet amet eufgdfgdfgdfg. Dt.
                        </div>
                        <div className="bg-red-200 w-1/5 m-5 p-5">
                            Lorem ipsum dolor sit amet amet eufgdfgdfgdfg. Dt.
                        </div>
                    </div>
                </div>
                <div className="flex h-1/6 justify-between items-end pb-10">
                    <div className=" m-5 text-xl w-full text-center">
                        © 2024 Open Source | Made by ❤️ Eddy Moya
                    </div>
                    <div className=" m-5 flex pr-10 text-2xl">
                        <IconBrandMeta width={35} height={35} className="mr-3"/>
                        <IconBrandGithubFilled width={35} height={35} />
                    </div>
                </div>
            </div>
        </main>
    );
}
