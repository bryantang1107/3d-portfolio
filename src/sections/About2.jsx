import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Center, OrbitControls } from "@react-three/drei";
import { myLife } from "../constants";
import Tech from "../components/About/Tech";
import Caffe from "../components/About/Caffe";
import Sport from "../components/About/Sport";
import HomeTown from "../components/About/HomeTown";
import { useMediaQuery } from "react-responsive";
const About2 = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myLife[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      if (direction === "previous")
        return prev === 0 ? myLife.length - 1 : prev - 1;
      if (direction === "next")
        return prev === myLife.length - 1 ? 0 : prev + 1;
    });
  };
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="c-space my-20" id="hobby">
      <p className="head-text">About Me</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          {currentProject.model === "Caffe" && (
            <Canvas>
              <Center>
                <Suspense fallback={CanvasLoader}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                  <OrbitControls
                    enableRotate
                    enableZoom
                    enableDamping
                    maxPolarAngle={currentProject.maxPolarAngle}
                    minPolarAngle={currentProject.minPolarAngle}
                  />
                  <group
                    scale={currentProject.scale}
                    position={currentProject.position}
                    rotation={currentProject.rotation}
                  >
                    <Caffe isMobile={isMobile} />
                  </group>
                </Suspense>
              </Center>
            </Canvas>
          )}
          {currentProject.model === "HomeTown" && (
            <Canvas>
              <Center>
                <Suspense fallback={CanvasLoader}>
                  <ambientLight intensity={3} />
                  <directionalLight position={[10, 10, 10]} intensity={5} />
                  <OrbitControls enableRotate enableZoom enableDamping />
                  <group
                    scale={currentProject.scale}
                    position={currentProject.position}
                    rotation={currentProject.rotation}
                  >
                    <HomeTown isMobile={isMobile} />
                  </group>
                </Suspense>
              </Center>
            </Canvas>
          )}
          {currentProject.model === "Tech" && (
            <Canvas>
              <Center>
                <Suspense fallback={CanvasLoader}>
                  <ambientLight intensity={3} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                  <OrbitControls
                    enableRotate
                    enableZoom
                    enableDamping
                    maxPolarAngle={currentProject.maxPolarAngle}
                    minPolarAngle={currentProject.minPolarAngle}
                  />
                  <group
                    scale={currentProject.scale}
                    position={currentProject.position}
                    rotation={currentProject.rotation}
                  >
                    <Tech isMobile={isMobile} />
                  </group>
                </Suspense>
              </Center>
            </Canvas>
          )}
          {currentProject.model === "Sport" && (
            <Canvas>
              <Center>
                <Suspense fallback={CanvasLoader}>
                  <ambientLight intensity={2} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                  <OrbitControls
                    enableRotate
                    enableZoom
                    enableDamping
                    maxPolarAngle={currentProject.maxPolarAngle}
                    minPolarAngle={currentProject.minPolarAngle}
                  />
                  <group
                    scale={currentProject.scale}
                    position={currentProject.position}
                    rotation={currentProject.rotation}
                  >
                    <Sport isMobile={isMobile} />
                  </group>
                </Suspense>
              </Center>
            </Canvas>
          )}
        </div>
      </div>
    </section>
  );
};

export default About2;
