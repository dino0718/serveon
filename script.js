document.addEventListener("DOMContentLoaded", () => {
    // 標題和副標題的動畫
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    
    // 按鈕動畫，但不阻止點擊
    gsap.from(".button", { 
        scale: 0.8, 
        duration: 1, 
        delay: 0.6,
        clearProps: "all"
    });

    // 區段動畫
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

    // 圖片分裂特效
    document.querySelectorAll(".image-content img").forEach(img => {
        let splitTL = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        splitTL.set(img, { opacity: 1 })
            .fromTo(img, { x: "-50%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" })
            .fromTo(img, { x: "50%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" }, "-=1.2");
    });
});
