import { Server } from 'socket.io';

class SocketService {
  private static _io: Server;

  constructor() {
    console.log('Init Socket Service...');
    SocketService._io = new Server();
  }

 
  public static initListeners() {
    const io = SocketService._io;
    console.log('Init Socket Listeners...');
    io.on('connect', (socket) => {
      console.log('New Socket Connected', socket.id);

      socket.on('event:message', async ({ message }: { message: string }) => {
        console.log('New message received', message);
      });
    });
  }

  public static get io(): Server {
    return this._io;
  }
}

export default SocketService;
