import { useEffect, useState } from "react";


let installPrompt = null;

window.addEventListener("beforeinstallprompt", async (event) => {
    const relatedApps = await navigator.getInstalledRelatedApps();

    // Search for a specific installed platform-specific app
    const psApp = relatedApps.find((app) => app.id === "5c01-46-138-66-98-ttr");
    console.log('psApp', psApp)
    // if (psApp) {
    event.preventDefault();
    installPrompt = event;
    // Update UI as appropriate
    // }
});

window.addEventListener("appinstalled", () => {
    installPrompt = null;
});

export const useInstallPrompt = () => {


    const getInstall = async () => {
        if (!installPrompt) {
            return;
        }
        try {

            const result = await installPrompt.prompt();
            console.log(`Install prompt was: ${result.outcome}`);
            installPrompt = null;
        } catch (error) {
            console.log('An error get Install ', error);
        }
    }

    return [installPrompt, getInstall]
}
