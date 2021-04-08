if (window.performance) {
    console.info("window.performance work's fine on this browser");
}

if (performance.navigation.type === 1) {
    console.info( "This page is reloaded");
}