---
title: Useful plugins
description: Useful plugins for KZ server owners
---

<script setup>
import Plugin from "../../components/Plugin.vue";
</script>

# Introduction

:::danger
All these plugins are third-party and are without warranty from us.
:::

::: warning
If you are having trouble with a plugin, try the **#support** channel in [our Discord server](https://discord.gg/csgokz).
<br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from `csgo/addons/sourcemod/logs/errors_********.log`.
:::

## HUD

<Plugin
  name="MovementHUD"
  author="Sikari"
  download="https://bitbucket.org/Sikarii/movementhud"
  description="A versatile SourceMod plugin providing customizable displays for player movement"
/>

<Plugin
  name="GOKZ Scoreboard Timer"
  author="Ruto"
  download="https://github.com/DevRuto/GOKZ-Scoreboard-Timer"
  description="Shows time in kills, checkpoints in assists, and teleports in deaths column in the scoreboard"
  :categories="['In KZTimer']"
/>

## Statistics

<Plugin
  name="Distbug"
  author="GameChaos"
  download="https://bitbucket.org/GameChaos/distbug"
  description="Gives you more details on your jumpstats as well as stats on failed jumps"
  :categories="['In GOKZ']"
/>

<Plugin
  name="GlobalPB"
  author="Szwagi"
  download="https://github.com/szwagi/globalpb"
  description="Lets players see their global personal best"
  :categories="['In GOKZ']"
/>

<Plugin
  name="More Stats"
  author="Szwagi, zer0.k"
  download="https://github.com/zer0k-z/more-stats"
  description="Displays statistics about your bhops"
/>

## Miscellaneous

<Plugin
  name="MapCrashFixer"
  author="Bot Benson"
  download="https://forums.alliedmods.net/showthread.php?t=310542"
  description="Mostly fixes the issue where players experience their game crashing on map changes"
  :categories="['Recommended']"
/>

<Plugin
  name="Console Cleaner"
  author="e54385991"
  download="https://github.com/e54385991/console-cleaner"
  description="Gets rid of Datatable warnings spammed in the console"
  :categories="['In GOKZ']"
/>

<Plugin
  name="GOKZ Discord"
  author="zer0k-z"
  download="https://github.com/zer0k-z/gokz-discord"
  description="Posts GOKZ server records to a Discord channel using webhooks"
  :categories="['GOKZ only']"
/>

<Plugin
  name="Longjump Room Teleporter"
  author="Evan"
  download="https://github.com/EvanIMK/KZ-LJ-Teleport"
  description="Allows your players to teleport directly to the longjump room"
/>

<Plugin
  name="Zone Stopwatch"
  author="GameChaos"
  download="https://bitbucket.org/GameChaos/zone-stopwatch"
  description="Lets players create zones to check how fast different routes are"
/>

<Plugin
  name="GCMeasure"
  author="GameChaos"
  download="https://bitbucket.org/GameChaos/gcmeasure"
  description="Enables players to measure distances between gaps as well as height differences"
  :categories="['In GOKZ']"
/>

<Plugin
  name="Player Model Changer"
  author="GameChaos"
  download="https://bitbucket.org/GameChaos/player-model-changer"
  description="Allows you to use different player models"
/>

<Plugin
  name="Ruto Recorder"
  author="Ruto"
  download="https://github.com/DevRuto/KZTimerRecorder"
  description="Allows you to save GOKZ server record replays on your KZTimer server"
  :categories="['In GOKZ']"
/>

<Plugin
  name="CSGO Particle Auto Precacher"
  author="Copypaste Slim, zer0k_z"
  download="https://bitbucket.org/zer0k_z/csgo-particle-auto-precacher"
  description="Allows players to see custom particles on certain maps like bkz_apricity_v2 and others"
  :categories="['In KZTimer']"
/>

<Plugin
  name="KZTierMapchooser"
  author="Kidev"
  download="https://forum.gokz.org/d/657-plugin-kztiermapchooser-map-tiers-displayed-in-votemap"
  description="A mapchooser that displays tiers next to maps in map votes"
/>
