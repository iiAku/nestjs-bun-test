## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Note: This is a testing running Nest.js with Bun

## Setup

<pre><span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[?]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> neofetch
<b>            -```````````</b>                  <span style="color:#12488B"><b>iiaku</b></span>@<span style="color:#12488B"><b>iiaku-desktop</b></span> 
<b>          `-+/------------.`</b>              ------------------- 
<b>       .---:mNo---------------.</b>           <span style="color:#12488B"><b>OS</b></span>: Solus x86_64 
<b>     .-----yMMMy:---------------.</b>         <span style="color:#12488B"><b>Host</b></span>: MS-7C96 1.0 
<b>   `------oMMMMMm/----------------`</b>       <span style="color:#12488B"><b>Kernel</b></span>: 6.3.4-237.current 
<b>  .------/MMMMMMMN+----------------.</b>      <span style="color:#12488B"><b>Uptime</b></span>: 1 day, 14 hours, 46 mins 
<b> .------/NMMMMMMMMm-+/--------------.</b>     <span style="color:#12488B"><b>Packages</b></span>: 893 (eopkg), 29 (flatpak) 
<b>`------/NMMMMMMMMMN-:mh/-------------`</b>    <span style="color:#12488B"><b>Shell</b></span>: zsh 5.9 
<b>.-----/NMMMMMMMMMMM:-+MMd//oso/:-----.</b>    <span style="color:#12488B"><b>Resolution</b></span>: 5120x1440 
<b>-----/NMMMMMMMMMMMM+--mMMMh::smMmyo:--</b>    <span style="color:#12488B"><b>DE</b></span>: GNOME 43.5 
<b>----+NMMMMMMMMMMMMMo--yMMMMNo-:yMMMMd/.</b>   <span style="color:#12488B"><b>WM</b></span>: Mutter 
<b>.--oMMMMMMMMMMMMMMMy--yMMMMMMh:-yMMMy-`</b>   <span style="color:#12488B"><b>WM Theme</b></span>: Materia-dark 
<b>`-sMMMMMMMMMMMMMMMMh--dMMMMMMMd:/Ny+y.</b>    <span style="color:#12488B"><b>Theme</b></span>: Adwaita [GTK2/3] 
<b>`-/+osyhhdmmNNMMMMMm-/MMMMMMMmh+/ohm+</b>     <span style="color:#12488B"><b>Icons</b></span>: Papirus [GTK2/3] 
<b>  .------------:://+-/++++++</b><span style="color:#12488B"><b>oshddys:</b></span>      <span style="color:#12488B"><b>Terminal</b></span>: gnome-terminal 
<span style="color:#12488B"><b>   -hhhhyyyyyyyyyyyhhhhddddhysssso-</b></span>       <span style="color:#12488B"><b>CPU</b></span>: AMD Ryzen 7 3700X (16) @ 3.600GHz 
<span style="color:#12488B"><b>    `:ossssssyysssssssssssssssso:`</b></span>        <span style="color:#12488B"><b>GPU</b></span>: AMD ATI Radeon RX 6800/6800 XT / 6900 XT 
<span style="color:#12488B"><b>      `:+ssssssssssssssssssss+-</b></span>           <span style="color:#12488B"><b>Memory</b></span>: 17489MiB / 32029MiB 
<span style="color:#12488B"><b>         `-/+ssssssssssso+/-`</b></span>
<span style="color:#12488B"><b>              `.-----..`</b></span>                  <span style="background-color:#171421"><span style="color:#171421">   </span></span><span style="background-color:#C01C28"><span style="color:#C01C28">   </span></span><span style="background-color:#26A269"><span style="color:#26A269">   </span></span><span style="background-color:#A2734C"><span style="color:#A2734C">   </span></span><span style="background-color:#12488B"><span style="color:#12488B">   </span></span><span style="background-color:#A347BA"><span style="color:#A347BA">   </span></span><span style="background-color:#2AA1B3"><span style="color:#2AA1B3">   </span></span><span style="background-color:#D0CFCC"><span style="color:#D0CFCC">   </span></span>
                                          <span style="background-color:#5E5C64"><span style="color:#5E5C64">   </span></span><span style="background-color:#F66151"><span style="color:#F66151">   </span></span><span style="background-color:#33DA7A"><span style="color:#33DA7A">   </span></span><span style="background-color:#E9AD0C"><span style="color:#E9AD0C">   </span></span><span style="background-color:#2A7BDE"><span style="color:#2A7BDE">   </span></span><span style="background-color:#C061CB"><span style="color:#C061CB">   </span></span><span style="background-color:#33C7DE"><span style="color:#33C7DE">   </span></span><span style="background-color:#FFFFFF"><span style="color:#FFFFFF">   </span></span>



<span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[+]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> node -v
v20.2.0

<span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[+]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> bun -v
0.6.7

<span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[+]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> nest -v
9.5.0
</pre>

Created project with

```bash
$ nest new nestjs-bun-test
```

Then installed packages with:

```bash
$ bun install
```

Built project with

```bash
$ bun build
```

This will basically run `nest build` so will build as usual

Ran project with

```bash
$ bun start:prod
```

This won't work

<pre><span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[?]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> bun start:prod
<span style="color:#6D2F7C">$</span> <span style="color:#AAAAAA"><b>bun dist/main.js</b></span>
<span style="color:#26A269">[Nest] 139970  - </span>06/03/2023, 2:55:00 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestFactory] </span><span style="color:#26A269">Starting Nest application...</span>
<span style="color:#26A269">[Nest] 139970  - </span>06/03/2023, 2:55:00 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[InstanceLoader] </span><span style="color:#26A269">AppModule dependencies initialized</span><span style="color:#A2734C"> +9ms</span>
<span style="color:#26A269">[Nest] 139970  - </span>06/03/2023, 2:55:00 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RoutesResolver] </span><span style="color:#26A269">AppController {/}:</span><span style="color:#A2734C"> +5ms</span>
<span style="color:#26A269">[Nest] 139970  - </span>06/03/2023, 2:55:00 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RouterExplorer] </span><span style="color:#26A269">Mapped {/, GET} route</span><span style="color:#A2734C"> +1ms</span>
<span style="color:#26A269">[Nest] 139970  - </span>06/03/2023, 2:55:00 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestApplication] </span><span style="color:#26A269">Nest application successfully started</span><span style="color:#A2734C"> +2ms</span>
<span style="color:#C01C28">error</span><span style="color:#AAAAAA">: script </span><b>&quot;start:prod&quot;</b> exited with code 11 (SIGSEGV)
</pre>

```bash
$ bun run dist/main.js
```

This won't work as well

<pre><span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[?]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#C01C28"><b>❯</b></span> bun run dist/main.js 
<span style="color:#26A269">[Nest] 142771  - </span>06/03/2023, 3:06:51 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestFactory] </span><span style="color:#26A269">Starting Nest application...</span>
<span style="color:#26A269">[Nest] 142771  - </span>06/03/2023, 3:06:51 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[InstanceLoader] </span><span style="color:#26A269">AppModule dependencies initialized</span><span style="color:#A2734C"> +8ms</span>
<span style="color:#26A269">[Nest] 142771  - </span>06/03/2023, 3:06:51 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RoutesResolver] </span><span style="color:#26A269">AppController {/}:</span><span style="color:#A2734C"> +6ms</span>
<span style="color:#26A269">[Nest] 142771  - </span>06/03/2023, 3:06:51 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RouterExplorer] </span><span style="color:#26A269">Mapped {/, GET} route</span><span style="color:#A2734C"> +1ms</span>
<span style="color:#26A269">[Nest] 142771  - </span>06/03/2023, 3:06:51 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestApplication] </span><span style="color:#26A269">Nest application successfully started</span><span style="color:#A2734C"> +2ms</span>
[1]    142771 segmentation fault (core dumped)  bun run dist/main.js</pre>

Also passing bun as binary to nest cli won't work

<pre><span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[?]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#26A269"><b>❯</b></span> bun start
<span style="color:#6D2F7C">$</span> <span style="color:#AAAAAA"><b>nest start nestjs-bun-test --exec \&quot;bun\&quot;</b></span>
<span style="color:#C01C28">error</span><span style="color:#AAAAAA">: script not found &quot;</span><b>/home/iiaku/dev/nestjs-bun-test/dist/main</b>&quot;
<span style="color:#C01C28">error</span><span style="color:#AAAAAA">: script </span><b>&quot;start&quot;</b> exited with code 1 (SIGHUP)
</pre>

However running:

```bash
$ bun run src/main.ts
```

You can also watch changes to "mimic" the start:dev script since that one won't work as well when binding bun's binary

```bash
$ bun --watch run src/main.ts
```

Seems to work, at least starting the server, however the route being called won't work and raise some error. I tried to return something very simple (a string) see `/src/app.controller.ts` and it did work. The error was raised, because it seems running src/main.ts does not seems to attach class's service properly as you can see `appService` is `undefined` when exposing this.

<pre><span style="color:#2AA1B3"><b>nestjs-bun-test</b></span> on <span style="color:#A347BA"><b> main</b></span> <span style="color:#C01C28"><b>[?]</b></span> via <span style="color:#C01C28"><b>🍞 v0.6.7 </b></span>via <span style="color:#26A269"><b> v20.2.0 </b></span>
<span style="color:#C01C28"><b>❯</b></span> bun run src/main.ts
<span style="color:#26A269">[Nest] 140824  - </span>06/03/2023, 2:58:47 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestFactory] </span><span style="color:#26A269">Starting Nest application...</span>
<span style="color:#26A269">[Nest] 140824  - </span>06/03/2023, 2:58:47 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[InstanceLoader] </span><span style="color:#26A269">AppModule dependencies initialized</span><span style="color:#A2734C"> +9ms</span>
<span style="color:#26A269">[Nest] 140824  - </span>06/03/2023, 2:58:47 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RoutesResolver] </span><span style="color:#26A269">AppController {/}:</span><span style="color:#A2734C"> +5ms</span>
<span style="color:#26A269">[Nest] 140824  - </span>06/03/2023, 2:58:47 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[RouterExplorer] </span><span style="color:#26A269">Mapped {/, GET} route</span><span style="color:#A2734C"> +2ms</span>
<span style="color:#26A269">[Nest] 140824  - </span>06/03/2023, 2:58:47 PM <span style="color:#26A269">    LOG</span> <span style="color:#A2734C">[NestApplication] </span><span style="color:#26A269">Nest application successfully started</span><span style="color:#A2734C"> +1ms</span>
{
  returning: <span style="color:#26A269">&quot;hello world&quot;</span><span style="color:#AAAAAA">,</span>
  thisValue: {
    appService: undefined,
    getHello: <span style="color:#2AA1B3">[Function:</span> <span style="color:#2AA1B3">getHello]</span>
  }
}
</pre>
