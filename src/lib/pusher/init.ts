import Pusher from 'pusher-js';

const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY ?? '', {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
});

// pusher.connection.bind('error', (err: any) => {
//   console.log(err);
// });

const statsChannel = pusher.subscribe('stats');
export default statsChannel;
