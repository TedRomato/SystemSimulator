import Sketch from "react-p5";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { StreamingPlugin, RealTimeScale } from "chartjs-plugin-streaming";
import getSimulationDefaultContent from "../../Helpers/getSimulationDefaultValues";

Chart.register(StreamingPlugin, RealTimeScale);

const SIMULATION_NAME = "Hover Drone";

function HoverDrone(props) {
  const { children } = props;

  let x = 100;
  let y = 100;
  let velocity = 15;
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(40);
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    y += velocity;
    if (y > 500 || y < 0) velocity = -velocity;
  };

  const data = {
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  };

  const options = {
    datasets: {
      line: {
        pointRadius: 0,
      },
    },
    animation: false,
    plugins: {
      streaming: {
        frameRate: 5, 
      },
    },
    scales: {
      x: {
        type: "realtime",
        realtime: {
          delay: 100,
          refresh: 150,
          duration: 5000,
          frameRate: 3,
          onRefresh: (chart) => {
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push({
                x: Date.now(),
                y: 500 - y,
              });
            });
          },
        },
      },
    },
  };

  const left = <Line data={data} options={options} />;

  return children({
    center: <Sketch setup={setup} draw={draw} />,
    left,
    ...getSimulationDefaultContent({ name: SIMULATION_NAME, ...props }),
  });
}

const droneObject = {
  component: HoverDrone,
  id: "hover-drone",
  name: SIMULATION_NAME,
};

export default droneObject;
