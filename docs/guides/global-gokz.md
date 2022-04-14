---
title: GOKZ global whitelist guide
description: Guide for GOKZ on how to get your server globally whitelisted
---

## Requirements

- Server owners cannot be globally banned or have a previous global ban.
- Must not be a LAN or locally-hosted server. Regardless of whether it's open to the public.
- If the server is going to be password protected or SteamID/group whitelisted, then replay bot files must be accessible to the Global Team. The Global Team must be able to access the server (add them to the whitelist or share the password).
- You have read, understood and comply with the [Global Server Owner Code of Conduct](https://forum.gokz.org/p/server-rules).

## Before you begin

1. This guide assumes that you have a working GOKZ server.
2. This guide assumes that you have access to the server files.

::: warning
If you are asked to overwrite files at any point in the guide, accept the overwrites.
:::

::: warning
If you are having trouble with a step, try the **#support** channel in [our Discord server](https://discord.gg/csgokz).
<br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from `csgo/addons/sourcemod/logs/errors_********.log`.
:::

## 1. Install SteamWorks

1. Start by downloading [SteamWorks](http://users.alliedmods.net/~kyles/builds/SteamWorks).

2. Extract the files into your server's `csgo` directory.

3. You should now have SteamWorks installed and working.

::: info Confirm this step
Restart your server and type `sm exts list` in the server console.
<br>You should see the following line in the output: `SteamWorks Extension (1.2.3)`.
:::

## 2. Install GlobalAPI plugin

1. Start by downloading [GlobalAPI-SMPlugin](https://bitbucket.org/kztimerglobalteam/globalapi-smplugin/downloads).

2. Extract the files into your server's `csgo` directory.

3. You should now have GlobalAPI-SMPlugin installed and working.

::: info Confirm this step
Restart your server and type `sm plugins list` in the server console.
<br>You should see the following line in the output: `GlobalAPI (2.0.4)`.
:::

## 3. Verify installation

Once you have installed the above, type `!globalcheck` in chat.

You should see output being the following:

<span style="color: #36EE56">KZ</span> | Global Records Availability Check<br>
API Key <span style="color: #FF0B00">X</span> |
Plugins <span style="color: #36EE56">✓</span> |
Settings Enforcer <span style="color: #36EE56">✓</span> |
Map <span style="color: #36EE56">✓</span> |
You <span style="color: #FF0B00">X</span><br>
<span style="color: #BA83E9">Vanilla</span> <span style="color: #36EE56">✓</span> |
<span style="color: #BA83E9">SimpleKZ</span> <span style="color: #36EE56">✓</span> |
<span style="color: #BA83E9">KZTimer</span> <span style="color: #36EE56">✓</span>

## 4. Verify configuration of the server

Install the [KZ Server Advisor Plugin](https://bitbucket.org/kztimerglobalteam/kzserveradvisor).

Use the `sm_kzserveradvisor_gokz` command.

Check the log file made in `csgo/addons/sourcemod/logs/L********.log`.

The output must show **OKAY** or **PASS** for all tests.
Rectify any issues and run the command again.

## 5. Apply for an API key

1. Sign in to the [GlobalAPI portal](https://portal.global-api.com/dashboard/servers/owned).
2. After logging in, click "New Server".
3. Fill in your server's details and press "Apply".
4. Once you've applied, you will see the server listed.
5. Note the server's id, you will need it in the next steps.
6. Click on the arrow on the left of the server and copy your API key.
7. Paste the API key as is into `csgo/cfg/sourcemod/globalapi-key.cfg`.

## 6. Posting an application

1. Login to the [GOKZ forum](https://forum.gokz.org/login).
2. Start a discussion in the [Server Application](https://forum.gokz.org/t/ss-application) section.
3. Title the application as your server's name.
4. Replace the post content with your information.

The Global Team will then review your application and advise you further if necessary.
