import { IconMapPinFilled } from "@tabler/icons-react";
import React from "react";

function home() {
    return (
        <>
            <div className="p-10 flex gap-10 h-dvh ">
                {/* car weather */}
                <div className="bg-gradient-to-t from-white via-[#ebf5ff] to-[#86c0f9] p-5 text-black w-[650px] font-thin grid grid-rows-6 place-content-evenly place-items-center rounded-[30px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg"
                        alt=""
                        className="w-8/12 row-span-3 "
                    />
                    <div className="flex flex-col items-center row-span-2">
                        <div className="text-[150px]">20°C</div>
                        <div className="text-5xl">Soleado</div>
                    </div>
                    <div className="flex flex-col items-center text-2xl row-span-1">
                        <div className="">jueves • 5 de junio</div>
                        <div className="flex">
                            <IconMapPinFilled width={20} />
                            la paz
                        </div>
                    </div>
                </div>
                {/* end car weather */}

                <div className="bg-sky-400 w-full">two</div>
            </div>
        </>
    );
}

export default home;
