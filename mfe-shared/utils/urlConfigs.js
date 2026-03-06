const _env = (env) => {
    if (env && env.APP_ENV) return env.APP_ENV;
    return process.env.APP_ENV || "";
};

const _port = {
    get: (host) => {
        return {
            host: 3001,
            decide: 3002,
            checkout: 3003,
            blogs: 3004,
            mfeshared: 3000
        };
    }
};

const _publicPath = (host, env, argv) => {
    const curr = _env(env);
    const http = curr ? "https" : "http";

    let prodMigratedSites = ["dockers", "lee", "wrangler", "toysrus", "ea"];
    let prefix = "";

    // prod url
    if (curr == "prod") {
        if (prodMigratedSites.includes(argv.name)) {
            prefix = ".in";
            if (argv.name == "ea") {
                prefix = ".rubiconaceturtle.co.in";
            }
        } else {
            prefix = ".webshop-gcp.aceturtle.in";
        }
    }
    // for test url
    if (curr == "test") {
        prefix = ".wshop-test.aceturtle.in";
    }
    // for localhost url
    if (!curr) {
        prefix = `:${_port.get(host)[argv.name]}`;
    }

    let url;
    if (!curr) {
        url = http + "://" + (argv.localhost || "localhost") + prefix + "/";
    } else {
        url = http + "://www." + argv.name + prefix + "/" + (host === "host" ? "" : `${host}/`);
    }
    return url;
};

const _remote = (host, env, argv) => {
    const curr = _env(env);
    const http = curr ? "https" : "http";
    let prefix = "";
    let prodMigratedSites = ["dockers", "lee", "wrangler", "toysrus", "ea"];

    if (curr == "prod") {
        if (prodMigratedSites.includes(argv.name)) {
            prefix = ".in/" + host + "/remoteEntry.js";
            if (argv.name == "ea") {
                prefix = ".rubiconaceturtle.co.in/" + host + "/remoteEntry.js";
            }
        } else {
            prefix = ".webshop-gcp.aceturtle.in/" + host + "/remoteEntry.js";
        }
    }
    if (curr == "test") {
        prefix = ".wshop-test.aceturtle.in/" + host + "/remoteEntry.js";
    }
    if (!curr) {
        prefix = `:${_port.get(host)[argv.name]}/_next/static/chunks/remoteEntry.js`;
    }

    let url;
    if (curr) {
        url = host + "@" + http + "://www." + argv.name + prefix;
    } else {
        url = host + "@" + http + "://" + (argv.localhost || "localhost") + prefix;
    }

    return url;
};

const _domain = () => {
    if (typeof window === 'undefined') return 'wrangler'; // Default for SSR
    const host = window.location.hostname;
    if (!host || host === 'localhost') {
        return "wrangler"; // Default for local
    }
    var splitHost = host.split(".");
    var domainName = "wrangler";
    if (splitHost[0].includes("www")) {
        domainName = splitHost[1];
    } else {
        domainName = splitHost[0];
    }
    return domainName;
};

export { _env, _port, _publicPath, _remote, _domain };
