async function loadNavbar() {
        const response = await fetch("/components/navbar.html");
        const html = await response.text();
        document.getElementById("navbar-placeholder").innerHTML = html;

        // Get current page file name
        const currentPage = window.location.pathname.split("/").pop();

        // Find the matching link in the navbar
        const navLinks = document.querySelectorAll("#navmenu a");

        navLinks.forEach(link => {
                if (link.getAttribute("href") === `/${currentPage}`) {
                        link.classList.add("active");
                } else if (link.getAttribute("href") === '/portfolio.html' && (currentPage.includes("urd") || currentPage.includes("intern") || currentPage.includes("grad") || currentPage.includes("coop"))){
                        link.classList.add("active");
                } else if (link.getAttribute("href") === '/teaching.html' && (currentPage.includes("sec") || currentPage.includes("aic") || currentPage.includes("cmkl"))){
                        link.classList.add("active");
                } else if (link.getAttribute("href") === '/blog.html' && currentPage.includes("blog")){
                        link.classList.add("active");
                }
        });
}

async function loadFooter() {
        const response = await fetch("/components/footer.html");
        const html = await response.text();
        document.getElementById("footer-placeholder").innerHTML = html;
}

loadNavbar();
loadFooter();

