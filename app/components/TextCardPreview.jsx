"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview({ text, textRev }) {
    return (
        <div className="items-center justify-center flex">
            <TextRevealCard text={text} revealText={textRev} />
            {/* <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    This is a text reveal card. Hover over the card to reveal the hidden
                    text.
                </TextRevealCardDescription> */}
        </div>
    );
}
