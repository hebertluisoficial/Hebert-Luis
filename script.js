function scroll() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".containerPai",
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1,
    },
  });

  tl.to(".secao1", {
    maskSize: "80vw",
    duration: 2,
  });

  tl.to(
    ".logoBg",
    {
      opacity: 0,
      scale: 0.7,
      translateY: "-80px",
      duration: 1,
    },
    "-=1.8",
  );

  tl.to(
    ".hebertBg",
    {
      filter: "blur(5px)",
      translateY: "100px",
      duration: 1,
    },
    "-=1.8",
  );

  tl.to(
    ".rollButton",
    {
      translateY: "-98px",
      duration: 1,
    },
    "-=1.8",
  );

  tl.to(
    ".secaoBranca",
    {
      backgroundColor: "white",
      duration: 1,
    },
    "-=1",
  );

  tl.to(".secao2 img", {
    opacity: 1,
    duration: 0.5,
  });

  tl.to(
    ".textoAnimado h3",
    {
      translateX: "-150%",
      opacity: 0.1,
      duration: 5,
    },
    "-=2.5",
  );

  tl.to(
    ".secao3",
    {
      maskSize: "300vw",
      duration: 2,
    },
    "-=1",
  );
}

const tl_pre = gsap.timeline({
    onComplete(){
        scroll();
        gsap.to("#preloader", {
            duration: .5,
            opacity: 0,
            display: "none",
        }, "+=0.85");
    },
});

tl_pre.to("#preloader path", {
    duration: 2,
    strokeDashoffset: 0,
    ease: "power1.inOut",
});

tl_pre.to("#preloader path", {
    duration: 1,
    fill: "rgb(15, 17, 28)",
    strokeDashoffset: 0
}, "-=1");