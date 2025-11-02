    const options = {
        background: {
        color: "white",
            },
    interactivity: {
        events: {
        onClick: {
        enable: true,
    mode: "push",
                    },
    onHover: {
        enable: true,
    mode: "repulse",
                    },
                },
    modes: {
        push: {
        quantity: 1,
                    },
    repulse: {
        distance: 80,
                    },
                },
            },
    particles: {
        links: {
        enable: true,
    opacity: 0.2,
    distance: 200
                },
    move: {
        enable: true,
                },
    opacity: {
        value: {min: 0.2, max: 0.7, }
                },
    size: {
        value: {min: 1, max: 2 }
                },
            }
        }
    tsParticles.load("tsparticles", options);