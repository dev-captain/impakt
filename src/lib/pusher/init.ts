import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY ?? '', {
  cluster: process.env.REACT_APP_PUSHER_CLUSTER,
});

// pusher.connection.bind('error', (err: any) => {
//   console.log(err);
// });

const statsChannel = pusher.subscribe('stats');
export default statsChannel;
