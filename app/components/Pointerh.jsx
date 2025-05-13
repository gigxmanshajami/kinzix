import { PointerHighlight } from "../../components/ui/pointer-highlight";

export default function PointerH({ textdef, textanim }) {
    return (
        <div
            className="mx-auto max-w-[76%] md:text-[53px] py-20  text-center font-bold items-center justify-center flex flex-col ">{textdef}
            <PointerHighlight
                rectangleClassName="bg-neutral-200 text-center dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                pointerClassName="text-yellow-500">
                <span className="relative z-10 text-center">{textanim}</span>
            </PointerHighlight>
        </div>
    );
}
