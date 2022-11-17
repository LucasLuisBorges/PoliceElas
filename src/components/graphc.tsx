import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    atendidas: 10,
    rejeitadas: 24,
    amt: 2400,
  },
  {
    name: 'Page B',
    atendidas: 13,
    rejeitadas: 13,
    amt: 2210,
  },
  {
    name: 'Page C',
    atendidas: 20,
    rejeitadas: 9,
    amt: 2290,
  },
  {
    name: 'Page D',
    atendidas: 20,
    rejeitadas: 39,
    amt: 2000,
  },
  {
    name: 'Page E',
    atendidas: 20,
    rejeitadas: 48,
    amt: 2181,
  },
  {
    name: 'Page F',
    atendidas: 15,
    rejeitadas: 38,
    amt: 2500,
  },
  {
    name: 'Page G',
    atendidas: 30,
    rejeitadas: 43,
    amt: 2100,
  },
];

export function Graphc() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="atendidas"
          stroke="#7975cf"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="rejeitadas"
          stroke="#db765d"
          strokeWidth={2}
        />
        <Tooltip />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
