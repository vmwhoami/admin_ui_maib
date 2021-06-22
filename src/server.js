import { createServer, Model } from 'miragejs';

export default () => {
  createServer({
    models: {
      user: Model,
    },

    seeds(server) {
      const phone = num => `+373 69${Math.floor(Math.random() * 10)}2${num + Math.floor(Math.random() * 100)}${num + 4}`;
      const idnpGen = () => {
        let str = '';
        for (let i = 0; i <= 13; i += 1) {
          str += Math.floor(Math.random() * 10);
        }
        return str;
      };
      for (let i = 0; i <= 10; i += 1) {
        server.create('user', {
          numele: `User${i}`,
          prenumele: 'Melnic',
          idnp: idnpGen(),
          phone: phone(i),
          lastTransaction: new Date(),
        });
      }
    },

    routes() {
      this.get('/api/users', schema => schema.users.all());

      this.post('/api/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.users.create(attrs);
      });
    },
  });
};
