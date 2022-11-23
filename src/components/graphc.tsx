import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Call } from '../pages/content/mainScreen';

interface GraphcPrpos {
  data: Call[];
}
export function Graphc({ data }: GraphcPrpos) {
  const newData = data.map(call => {
    return {
      accepted: call.status === 'Concluded' ? 1 : 2,
      inProgress: call.status === 'In progress' ? 1 : 2,
      waiting: call.status === 'Waiting' ? 1 : 2,
      rejected: call.status === 'Rejected' ? 1 : 2,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={newData}>
        <Line
          type="monotone"
          dataKey="waiting"
          stroke="#7975cf"
          strokeWidth={2}
        />

        <Line
          type="monotone"
          dataKey="accepted"
          stroke="#db765d"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="inProgress"
          stroke="#52a05c"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="rejected"
          stroke="#f0ac3e"
          strokeWidth={2}
        />

        <Tooltip />

        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
