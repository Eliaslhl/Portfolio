import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ThreeDModelProps } from "../../types";

const ThreeDModel: React.FC<ThreeDModelProps> = ({ path }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Fond transparent
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            gltf.scene.scale.set(3, 3, 3);
            (
              child as THREE.Mesh<
                THREE.BufferGeometry,
                THREE.MeshStandardMaterial
              >
            ).material.transparent = true;
            (
              child as THREE.Mesh<
                THREE.BufferGeometry,
                THREE.MeshStandardMaterial
              >
            ).material.opacity = 0.5;
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      (error: unknown) => {
        console.error(error);
      },
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    camera.position.set(0, 20, 5);

    const animate = (): void => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = (): void => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [path]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeDModel;
