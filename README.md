# Getting Started with Create React App

## Inicializar el proyecto

Para usar el proyecto es necesario contar con node js version 14 o sumerios
instalar las dependencias usando npm install
    Que se instala? Se usaron componentes de MaterialUI para el diseño de los componentes @material-ui/...

iniciar el proyecto usando npm start


## Casos de uso

La plataforma se divide en 4 secciones
    1/ Cuando se refresca la pagina, mientras el servicio responde, se renderiza un Alert con el estado del servcio, si este falla se imprime el error
    2/ Cuando este responde se renderizan las Card
        a/ Imagen estatica para el evento
        b/ Nombre del Evento
        c/ Las markets disponibles para el Evento
        d/ Los botones de seleccionde la apuesta para el usuario
    3/ AppBar con el nombre del proyecto y el icono de usuario desde donde podra acceder a la lista de apuestas si estan disponibles
    4/ Modal para ver la lista de apuestas del usuario con la opcion de Quitar (-) la apuesta de las selecciones

## Decisiones de diseño

Se decide realizar presentar la solucion usando ReactJs, ya que es la plataforma en la que mas me desempeño actualmente
Se usan componentes de MaterialIU para colaborar con la maquetacion del proyecto y permitirme concentrarme en la logida de servicio del proyecto
a la vez que le da un aspecto mas agradable para la experiencia de usuario
Se utilizan hooks para facilitar el consumo del servicio y previo renderizado de los componentes y que el contenido sea dinamico
Se utiliza un archivo Constant para almacenar de forma local la experiencia del usuario, esto debido a que no se cuenta con
un API que permita la actualizacion en tiempo real de los datos que el usuario manipula en pantalla.


## Uso de la plataforma

Abrir el navegador en [http://localhost:3000] para iniciar la carga de la aplicacion web
una vez se muestren los eventos disponibles, seleccionar el evento por el que quiere apostar
puede cambiar su dedicion seleccionando la otra opcion en el mismo Evento y markets
puede seleccionar otro evento y otro markets
Puede dirigirse al icono de usuario y ver allí la lista de eventos por los que aposto
Al frente de cada evento podra ver la opcion de Quitar(-) para eliminar esta apuesta


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
