import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server' // For some reason this requires a seperate import??
 
export function proxy(request: NextRequest) {
    const url = request.nextUrl;

    
    if (url.pathname.endsWith("/windows")){
        return NextResponse.redirect(
            new URL('https://raw.githubusercontent.com/Static-Codes/BrowserAutomationMaster/stable/src/Installers/Windows/install.ps1', request.url)
        )
    }


    else if (url.pathname.endsWith("/macos")){
        return NextResponse.redirect(
            new URL('https://raw.githubusercontent.com/Static-Codes/BrowserAutomationMaster/refs/heads/stable/src/Installers/MacOS/install.sh', request.url)
        )
    }

    else if (url.pathname.endsWith("/macos-bundle")){
        return NextResponse.redirect(
            new URL('https://raw.githubusercontent.com/Static-Codes/BrowserAutomationMaster/refs/heads/macos-bundle/src/Installers/MacOS/install.sh', request.url)
        )
    }

    // else if (url.pathname.endsWith("/macos-silicon")){
    //     return NextResponse.redirect(
    //         new URL('https://raw.githubusercontent.com/Static-Codes/BrowserAutomationMaster/refs/heads/macos-silicon/src/Installers/MacOS/install.sh', request.url)
    //     )
    // }

    else if (url.pathname.endsWith("/linux")){
        return NextResponse.redirect(
            new URL('https://raw.githubusercontent.com/Static-Codes/BrowserAutomationMaster/refs/heads/stable/src/Installers/Linux/install.sh', request.url)
        )
    }
    
    else {
        if (url.pathname === "/"){
            return NextResponse.next(); 
        }
        return NextResponse.rewrite(new URL('/', request.url)); 
    }
}
