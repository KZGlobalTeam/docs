---
title: Install KZTimer
description: Installation guide for KZTimer
---

# Table of contents

>[[toc]]

## Before you begin

1. This guide assumes that you have a working CS:GO server.
2. This guide assumes that you have access to the server files.

::: warning
If you are asked to overwrite files at any point in the guide, accept the overwrites.
:::

::: warning
If you are having trouble with a step, try the **#support** channel in [our Discord server](https://discord.gg/csgokz).
<br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from `csgo/addons/sourcemod/logs/errors_********.log`.
:::

## 1. Installing Metamod:Source

1. Start by downloading [Metamod:Source](https://www.sourcemm.net/downloads.php?branch=stable).

2. Extract the files into your server's `csgo` directory.

3. You should now have Metamod:Source installed and working.

::: info Confirm this step
Restart your server and type `meta version` in the server console.
<br>You should see the following line in the output: `Loaded As: Valve Server Plugin`.
:::

## 2. Installing SourceMod

1. Start by downloading [SourceMod](https://sourcemod.net/downloads.php?branch=stable).

2. Extract the files into your server's `csgo` directory.

3. You should now have SourceMod installed and working.

::: info Confirm this step
Restart your server and type `sm version` in the server console.
<br>You should see the following line in the output: `SourceMod Version Information`.
:::

## 3. Installing DHooks

1. Start by downloading [DHooks](https://forums.alliedmods.net/showpost.php?p=2588686&postcount=589), the downloads can be found at the bottom of the post.

::: danger
Be sure to download the `sm110` version.
:::

2. Extract the files into your server's `csgo` directory.

3. You should now have DHooks installed and working.

::: info Confirm this step
Restart your server and type `sm exts list` in the server console.
<br>You should see the following line in the output: `DHooks (2.2.0-detours17)`.
:::

## 4. Installing MovementAPI

1. Start by downloading the latest release of [MovementAPI](https://github.com/danzayau/MovementAPI/releases).

2. Extract the files into your server's `csgo` directory.

3. You should now have MovementAPI installed and working.

::: info Confirm this step
Restart your server and type `sm plugins list` in the server console.
<br>You should see the following line in the output: `MovementAPI (2.2.0)`.
:::

## 5. Installing KZTimer

1. Start by downloading the latest **non-upgrade** release of [KZTimer](https://bitbucket.org/kztimerglobalteam/kztimerglobal/downloads/).

2. Once you have downloaded the files, extract the files into your server's `csgo` directory.

3. Open `csgo/addons/sourcemod/configs/databases.cfg` in a text editor and add the following lines:

```json
    "kztimer"
    {
        "driver"    "sqlite"
        "database"  "kztimer-sqlite"
    }
```

::: danger
Make sure to paste this BEFORE the last existing `}` character in the file.
:::

4. You should now have KZTimer installed and working.

::: info Confirm this step
Restart your server and type `sm plugins list` in the server console.
<br>You should see the following line in the output: `KZTimerGlobal (1.100)`.
:::

## 6. KZTimer is installed

You've finished installing KZTimer, the next steps are not required for a functional KZTimer server.

## 7. Useful plugins (optional)

Install other useful plugins from the [Useful plugins](/guides/useful-plugins/) guide.

## 8. Apply for Global Whitelist (optional)

Follow the [KZTimer global whitelist guide](/guides/global-kztimer) guide to get your server whitelisted.
