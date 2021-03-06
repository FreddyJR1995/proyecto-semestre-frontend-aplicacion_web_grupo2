/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  ARTICLES: '/articulos',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  PROFILE: '/perfil',
  HOME_TEACHER: '/profesor',
  HOME_STUDENT:'/estudiante',
  FIRSTPAGESTUDENT: '/bienvenida-estudiante',
  TESTSSTUDENT:'/cursos/:id',
  TESTSTEACHER:'/curso/:id',
  CREATETEST:'/nueva-prueba'
};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/privada',
  ARTICLE_ID: '/articulo/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;