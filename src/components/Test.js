import {useSpring, animated} from 'react-spring';

function Test() {
  const AnimatedDonut = animated(Donut);
  const props = useSpring({ value: 100, from: { value: 0} });
  return <AnimatedDonut percent={props.value} />
}