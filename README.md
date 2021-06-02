<p align="center"><img src="https://svgshare.com/i/Xjn.svg" width="400"></p>

## Larean

A **La**ravel & **Re**act Dashboard built by Hass**an**.

## Installation

-   Clone the project

```bash
git clone https://github.com/hassanaitnacer/larean.git
```

-   Change directory to project root

```bash
cd larean
```

-   Install or update composer dependencies

```bash
composer update
```

-   Copy .env.example file and rename it to .env

```bash
composer run-script post-root-package-install
```

-   Generate application key

```bash
composer run-script post-create-project-cmd
```

-   Install npm dependencies

```bash
npm install
```

-   Serve Laravel

```bash
php artisan serve
```

-   Run dev and keep watching

```bash
npm run watch
```

-   Build on production

```bash
npm run production
```

## License

Larean is an open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
