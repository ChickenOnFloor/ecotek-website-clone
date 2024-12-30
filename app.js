gsap.registerPlugin(ScrollTrigger);

gsap.from('.main', {
    y: 100,
    opacity: 0,
    duration:1,
    stagger: .5
})

gsap.to(".gallery *", {
    opacity: 0,
})

gsap.to(".roof *",{
    opacity: 0
})

gsap.from(".gallery *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .1,
})

gsap.from(".roof *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".roof",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .1,
})

gsap.from(".ecotek *", {
    duration: .1,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".ecotek",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .1,
})

gsap.from(".test *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".test",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .05,
})

gsap.from(".blog *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".blog",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .05,
})

gsap.from(".misc *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".misc",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .1,
})

gsap.from(".f-con2 div", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".footer",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .05,
})

gsap.from(".certificate *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".certificate",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    stagger: .05,
})