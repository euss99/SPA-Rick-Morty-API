const path = require("path"); // Nos permite acceder a donde estámos dentro de las carpetas, ya sea en local o en la nube.
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Permite trabajar con los archivos HTML

/* Objeto donde vive la configuración de Webpack */
module.exports = {
    // Punto de entrada:
    entry: "./src/index.js", 
    // Punto final, donde se va a enviar el archivo ya estructurado y compilado listo para producción:
    output: {
        path: path.resolve(__dirname, "dist"), // Carpeta donde se exportará el proyecto.
        filename: "main.js", // Nombre del archivo final listo para producción.
    },
    // Donde se trabajan las extensiones del proyecto:
    resolve: {
        extensions: [".js"],
    },
    // Modulo necesarias para trabajar:
    module: {
        // Reglas
        rules: [
            /* Estructura de Babel */
            {
                test: /\.m?js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/, //Excluimos la carpeta de node modules
                use: {
                    loader: "babel-loader", //Utilizar un loader como configuración establecida.
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            }
        ]
    },
    // Plugins que se van a utilizar:
    plugins: [
        new HtmlWebpackPlugin(
            {
            inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
            template: "./public/index.html", //Dirección donde se encuentra el template principal
            filename: "./index.html", //El nombre que tendrá el archivo final en la carpeta dist
            }
        ),
    ],
}