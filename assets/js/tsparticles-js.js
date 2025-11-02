
  fpsLimit: 120,
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
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
	  
      particles: {
	      links: {
	       enable: true,
	           },
        color: {
          value: "#ffffff",
        },
        move: {
        attract:{
            enable: false,
            rotate: {x: 800, y:800},
          },
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 22,
          animation: {startValue: "min", enable: true, minimumValue:1, speed:2, destroy:"max", sync:true}
        },
      },
      detectRetina: true,
      emitters:{
      direction:"none",
      rate:{quanity: 3, delay: 0.3,},  
      },
      size:{width:0,height:0,},
      position:{x:50,y:50},