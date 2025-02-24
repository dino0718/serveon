document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from(".button", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6 });

    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // 🎬 分裂特效：圖片從中間展開再合併
    document.querySelectorAll(".image-content img").forEach(img => {
        let splitTL = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        splitTL.set(img, { opacity: 1 }) // 先顯示圖片
            .fromTo(img, { x: "-50%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" })
            .fromTo(img, { x: "50%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" }, "-=1.2");
    });
});
