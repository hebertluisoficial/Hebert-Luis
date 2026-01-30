const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".containerPai",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 2
    }
});

tl.to(".secao1", {
    maskSize: "80vw",
    duration: 2
});

tl.to(".logoBg", {
    opacity: 0,
    scale: 0.7,
    translateY: "-80px",
    duration: 1
}, "-=1.8");

tl.to(".hebertBg", {
    filter: "blur(5px)",
    translateY: "100px",
    duration: 1
}, "-=1.8");

tl.to(".rollButton", {
    translateY: "-98px",
    duration: 1
}, "-=1.8");

tl.to(".secaoBranca", {
    backgroundColor: "white",
    duration: 1
}, "-=1");

tl.from(".secao2 img", {
    opacity: 0,
    filter: "blur(20px)",
    duration: .5
});

tl.to(".textoAnimado h3", {
    translateX: "-150%",
    opacity: .1,
    duration: 5
}, "-=2.5");

tl.to(".secao3", {
    maskSize: "300vw",
    duration: 2
}, "-=1");

