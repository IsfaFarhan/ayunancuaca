import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const Pagi = () => {
  const { RiveComponent } = useRive({
    src: "Hujan.riv",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Fit, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};
