//Instagram dark theme
document.addEventListener('DOMContentLoaded', () => {
    document.body.style = "background-color: #000000";
});

function main(){
    let url = new URL(window.location.href);
    if(!url.searchParams.get("theme")){
        url.searchParams.append("theme", "dark");
        window.location.replace(`${url.origin}${url.pathname}?${url.searchParams.toString()}`);
    }
}

(function() {
    'use strict';
    main();
})();