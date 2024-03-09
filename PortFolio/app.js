function PageTransitions() {
    const sectBtns = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    sectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');
            const id = this.getAttribute('data-id');
            const section = document.getElementById(id);
            allSections.querySelector('.active').classList.remove('active');
            section.classList.add('active');
        });
    });

    allSections.addEventListener('click', (e) => {
        const id = e.target.closest('.control').getAttribute('data-id');
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active-btn');
            });
            e.target.closest('.control').classList.add('active-btn');

            const element = document.getElementById(id);
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            element.classList.add('active');
        }
    });

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

PageTransitions();
