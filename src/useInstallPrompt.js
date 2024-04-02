import { useEffect, useState } from "react";


let installPrompt = null;

const installPromptRef = {
    current: null,
    onChange: (value) => { }
}

window.addEventListener("beforeinstallprompt", async (event) => {
    // if (psApp) {
    event.preventDefault();
    installPrompt = event;
    installPromptRef.current = installPrompt
    installPromptRef.onChange(installPrompt)
    console.log('installPrompt', installPrompt)
    // Update UI as appropriate
    // }
});

const isInstalled = async (event) => {
    const relatedApps = await navigator.getInstalledRelatedApps();

    // Search for a specific installed platform-specific app
    const psApp = relatedApps.find((app) => app.id === "5c01-46-138-66-98-ttr");
    console.log('psApp', psApp)
    return psApp
}

window.addEventListener("appinstalled", () => {
    installPrompt = null;
});

export const useInstallPrompt = () => {
    const [prompt, setPromrt] = useState(null)
    // useEffect(() => {
    //     isInstalled()
    // }, [])

    installPromptRef.onChange = setPromrt

    const getInstall = async () => {
        if (!installPromptRef.current) {
            return;
        }
        try {

            const result = await installPromptRef.current.prompt();
            console.log(`Install prompt was: ${result.outcome}`);
            if ('accepted') {
                installPromptRef.current = null;
                installPromptRef.onChange(null)
            }
        } catch (error) {
            console.log('An error get Install ', error);
        }
    }

    return [prompt, getInstall]
}
