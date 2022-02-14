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

  fetchEvent: (slug: string) => void;
  fetchActiveEvent: () => void;
};

const useEventStore = create<EventStore>((set: SetState<EventStore>) => ({
  date: null,
  event: null,

  fetchActiveEvent: async () => {
    const url = 'https://impakt-blog.herokuapp.com/api/events?filters[isActive][$eq]=true';
    const event = await (await fetch(url)).json();
    const data = event?.data[0].attributes;
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

  fetchEvent: async (slug: string) => {
    const url = slug
      ? `https://impakt-blog.herokuapp.com/api/events?filters[slug][$eq]=${slug}`
      : `https://impakt-blog.herokuapp.com/api/events/?filters[id][$eq]=1`;
    const event = await (await fetch(url)).json();
    const data = event?.data[0].attributes;
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
