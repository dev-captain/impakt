import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import create, { SetState } from 'zustand';

dayjs.extend(utc);
dayjs.extend(timezone);

type Event = {
  title: string;
  slug: string;
  isActive: boolean;
  startDate: string;
  utcOffset: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

type EventStore = {
  date: Date | null;
  event: Event | null;

  fetchEvent: () => void;
};

const useEventStore = create<EventStore>((set: SetState<EventStore>) => ({
  date: null,
  event: null,

  fetchEvent: async () => {
    const event = await (await fetch('https://impakt-blog.herokuapp.com/api/events/1')).json();
    const data = event?.data.attributes;
    const startDate = data?.startDate;
    const utcOffset = data?.utcOffset;

    const dateString = startDate
      ? `${startDate} GMT${utcOffset}`
      : dayjs().add(1, 'seconds').toDate();
    const date = dayjs(dateString)
      .utcOffset(utcOffset ? Number(utcOffset) : 8)
      .toDate();

    set((state) => ({ ...state, date, event: data }));
  },
}));

export default useEventStore;
