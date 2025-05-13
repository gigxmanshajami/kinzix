import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { urlFor } from "@/lib/imageUrl";
export default function Project({ data }) {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            {data[0].majorProjectShowcase.containerHeading} <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                {data[0].majorProjectShowcase.containerHeadingsm}
                            </span>
                        </h1>
                    </>
                }
            >
                <img
                    src={`${urlFor(data[0].majorProjectShowcase.projects[0].image.asset._ref)}`}
                    alt={`${data[0].majorProjectShowcase.projects[0].alt}`}
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
