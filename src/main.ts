import createApp from "./app";

async function bootstrap() {
    const app = await createApp();

    const port = process.env.PORT || 8080;

    app.listen(port, () => {
        console.log(` Server is running at http://localhost:${port}`);
    });
}

bootstrap();