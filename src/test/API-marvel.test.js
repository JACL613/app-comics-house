import { accionGet } from "../services/API-marvel";

const sum = (x,y) => x + y
describe('CONECTION API', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
    test('obtener personajes', () => { 
        return accionGet().then((res) => {
            // console.log('respuesta',res)
            expect(res.data).toHaveProperty('code' , 200);
            expect(res.data).toHaveProperty('status', 'Ok');
          }).catch((err) => {
            // console.log('error',err);
            throw new Error(err)
          });
     })
});
