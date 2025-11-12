import ColorBends from './ColorBends';
  
export default function HeroSection() {
  return (
<ColorBends
   colors={["#FF0000", "#FF0000", "#FF0000"]}
  rotation={0}
  autoRotate={0}
  speed={0.2}
  scale={0.8}
  frequency={1}
  warpStrength={1}
  mouseInfluence={0.8}
  parallax={0.6}
  noise={0.08}
  transparent
/>
);
}