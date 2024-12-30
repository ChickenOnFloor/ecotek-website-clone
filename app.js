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
        start: "top 30%",
        end: "bottom 10%",
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
        start: "top 30%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
    },
    stagger: .1,
})

gsap.from(".ecotek *", {
    duration: .5,
    opacity: 0,
    y:100,
    scrollTrigger: {
        trigger: ".ecotek",
        start: "top 30%",
        end: "bottom 10%",

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
        start: "top 30%",
        end: "bottom 10%",
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
        start: "top 30%",
        end: "bottom 10%",
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
        start: "top 80%",
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
        start: "top 90%",
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
        trigger: ".test",
        start: "bottom 60%",
        end: "bottom 10% ",
        markers: true,
        toggleActions: "play reverse play reverse",
    },
    stagger: .05,
})
