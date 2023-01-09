let btnCopy = document.getElementById("btn-copy");

btnCopy?.addEventListener("click", async () => {
    let inputShortUrl = document.getElementById("input-short-url");

    inputShortUrl.select();
    inputShortUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");

    document.querySelector(".url-copied span").style.display = "flex";

    setTimeout(() => {
        document.querySelector(".url-copied span").style.display = "none";
    }, 2000);
})

