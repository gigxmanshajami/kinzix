/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
'use client'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalEm() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("floatingButton", { "buttonText": "Book A Meet", "calLink": "kinzix/30min", "config": { "layout": "month_view" } });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
};
