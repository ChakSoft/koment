# koment

Open-Source and Self-Hosted comment system written in NodeJS

## Prerequisies

* NodeJS 6.x+
* MySQL 5.7+ (not tested on 7.x)

## Installation

Get the project by cloning the git repository or get the master tarball.

```shell
$ git clone git@github.com:ChakSoft/koment.git
```

Then install dependencies :

```shell
$ cd koment
$ npm install
```

## Configuration

Copy the dist configuration file and replace values with your own.

```shell
$ cp config/config.dist.yml config/config.yml
```

## Running

We recommend to use [PM2](http://pm2.keymetrics.io/) to manage your NodeJS processes.

You can create a running JSON for PM2 :

```json
{
    "name": "Koment",
    "script": "index.js",
    "env": {
        "NODE_ENV": "production"
    }
}
```

You can read the [documentation about Process File](http://pm2.keymetrics.io/docs/usage/application-declaration/) to improve your process parameters.

Feel free to leave comments, issues, stars and fork the project to make it evolve !

## License

This software is under GPL-3.0 License. See [LICENSE file](/LICENSE) for further information.
