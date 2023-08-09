export type Event = {
  id: number;
  name: string;
  description: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  time: {
    minute: string;
    hour: string;
  };
  attendance: number;
  members_only: boolean;
};
