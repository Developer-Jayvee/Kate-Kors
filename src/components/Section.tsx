import type { ReactNode } from "react";

interface SectionInterface {
    children : ReactNode;
    sectionID: string;
}
export default function Section( { children , sectionID}: SectionInterface){
    return <>
        <section id={sectionID} className="scroll-mt-19">
            {children}
        </section>
    </>
}