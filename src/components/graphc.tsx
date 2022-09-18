import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 10,
    pv: 24,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 13,
    pv: 13,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 20,
    pv: 9,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 20,
    pv: 39,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 20,
    pv: 48,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 15,
    pv: 38,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 30,
    pv: 43,
    amt: 2100,
  },
];

export function Graphc() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        <Tooltip />
        <Legend />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
