import { createServer, Model, Response } from "miragejs"

export function makeServer({ environment = "development" }= {}) {
  let server = createServer({
    environment,

    routes() {
        this.post('http://localhost:5173/register', () => {
          const random = Math.floor(Math.random() * 3);
          
          switch (random) {
            case 0:
                return new Response(201, {}, { message: 'User created' });    
            case 1:
                return new Response(404, {}, { error: 'Not found' });
            case 2:
                return new Response(500, {}, { error: 'Internal server error' });
          }
        })
      },
    })

  return server
}