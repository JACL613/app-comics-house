import { accionGet, accionGetForFillter, accionGetNext } from "../services/API-marvel";

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
     test('obtener siguiente pagina', () => {
      return accionGetNext(2).then((res) => {
        expect(res.data).toHaveProperty('status' , 'Ok')
        expect(res.data.data).toHaveProperty('offset' , 20)

      }).catch((err) => {
        console.log(err);
        throw new Error(err)
      })
     })
     test('obtener personajes para filtrar', () => {
      return accionGetForFillter().then((res) => {
        // console.log(res.data)
        expect(res.data).toHaveProperty('status' , 'Ok')
        expect(res.data.data).toHaveProperty('limit' , 100)
      }
      ).catch((err) => {
        throw new Error(err)
      })
     })
});
