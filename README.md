This is a repo for an [Nx issue](https://github.com/nrwl/nx/issues/17302).

```shell

# Running serve (local dev) will use both .env and apps/api/.env files
nx serve 

# Running build will not include .env file into the bundle
nx build
node dist/apps/api/main.js
```

When running the built API app, it will not use the `apps/api/.env` file since it is not in the include path. You should not rely on source `.env` files when running a production build. Instead, set the environment variables manually or using a keyvault.

```shell
FOO='custom value' node dist/apps/api/main.js
```
