import React,{ useContext, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { amoungUs,spider,starry } from "../utils/particles";
import { ParticleContext } from "../ContextApi/ParticleContext";


const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const { particle } = useContext(ParticleContext)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(() => {
    switch (particle) {
      case "spider":
        return spider;
      case "starry":
        return starry;
      case "none":
        return { particles: { number: { value: 0 } } }; 
      default:
        return amoungUs;
    }
  }, [particle]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export  {ParticlesContainer}