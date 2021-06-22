import { createServer, Model } from 'miragejs';

export default () => {
  createServer({
    models: {
      users: Model,
    },

    routes() {
      this.get('/api/users', () => ({
        users: [
          { id: 1, text: 'Walk the dog' },
          { id: 2, text: 'Take out the trash' },
          { id: 3, text: 'Work out' },
        ],
      }));
    },
  });
};
