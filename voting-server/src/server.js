import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8000);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    console.log('hi');
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store));

  });

  // io.on('action', (action) => {
  // })

}
