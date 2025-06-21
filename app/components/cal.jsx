// /* First make sure that you have installed the package */

// /* If you are using yarn */
// // yarn add @calcom/embed-react

// /* If you are using npm */
// // npm install @calcom/embed-react
// 'use client'
// import { getCalApi } from "@calcom/embed-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useEffect } from "react";
// export default function CalEm() {
//     const message = `Hi, I visited kinzix.com\nI want to know more.`;
//     const url = `https://wa.me/919471532682?text=${encodeURIComponent(message)}`;

//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({ "namespace": "30min" });
//             cal("floatingButton", { "buttonText": "Book A Meet", "calLink": "kinzix/30min", "config": { "layout": "month_view" } });
//             cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
//         })();
//     }, [])

//     return (
//         <a href={url} target="_blank" rel="noopener noreferrer" >
//             <button className='fixed bottom-25 right-10  z-50 bg-[#25d366] text-black w-[182.28px] h-[64px] font-semibold text-[15px] p-[17px] flex items-center justify-center rounded-full hover:scale-105 transition-all cursor-pointer shadow-lg'>
//                 <FaWhatsapp size={35} color="white" />
//             </button>
//         </a >
//     )
// };

/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calx() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="30min"
        calLink="kinzix/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view" }}


    />;
};
