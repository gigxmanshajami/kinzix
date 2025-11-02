import { urlFor } from "@/lib/imageUrl";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function FollowingPointerDemo({ img, info }) {
    console.log(info);
    return (
        <a href={info.pr_url} target='_blank' rel="noopener noreferrer">
            <div className="mx-auto lg:w-80 2xl:w-full w-full">
                <FollowerPointerCard
                    title={
                        <TitleComponent 
                            title={info.founder.name} 
                            avatar={urlFor(info.founder.photo)} 
                        />
                    }
                >
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:border-[#FE332F]/50 hover:shadow-2xl hover:shadow-[#FE332F]/20">
                        {/* Image Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-black/40">
                            <img
                                src={img}
                                alt={info.name}
                                className="w-full h-[200px] object-cover object-top transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                            />
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FE332F] transition-colors duration-300">
                                {info.name}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                                {info.description}
                            </p>

                            {/* CTA Button */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FE332F] to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#FE332F]/30 transition-all duration-300 group-hover:shadow-[#FE332F]/50 group-hover:scale-105">
                                    View Project
                                    <svg 
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FE332F]/10 blur-3xl"></div>
                        </div>
                    </div>
                </FollowerPointerCard>
            </div>
        </a>
    );
}

const TitleComponent = ({ title, avatar }) => (
    <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
        <img
            src={avatar}
            height="24"
            width="24"
            alt={title}
            className="rounded-full border-2 border-[#FE332F]"
        />
        <p className="text-sm font-semibold text-white">{title}</p>
    </div>
);