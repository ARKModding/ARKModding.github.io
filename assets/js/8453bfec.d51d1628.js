"use strict";(self.webpackChunkark_modding_github_io=self.webpackChunkark_modding_github_io||[]).push([[527],{8413:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=i(3860),r=i(8538);const o={},s="Dedicated Server Setup",d={id:"cooking-testing/server-setup",title:"Dedicated Server Setup",description:"At the time of this writing, there is only support for Windows.",source:"@site/docs/cooking-testing/server-setup.md",sourceDirName:"cooking-testing",slug:"/cooking-testing/server-setup",permalink:"/docs/cooking-testing/server-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/ARKModding/site/tree/main/docs/cooking-testing/server-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Persistent PIE",permalink:"/docs/cooking-testing/persistent-pie"},next:{title:"Testing a Mod",permalink:"/docs/cooking-testing/testing"}},a={},c=[{value:"Directory Setup",id:"directory-setup",level:2},{value:"Install SteamCMD",id:"install-steamcmd",level:2},{value:"Install Dedicated Server",id:"install-dedicated-server",level:2},{value:"Dedicated Server Setup",id:"dedicated-server-setup-1",level:2},{value:"RunServer.bat",id:"runserverbat",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dedicated-server-setup",children:"Dedicated Server Setup"}),"\n",(0,n.jsx)(t.admonition,{title:"Windows Only",type:"info",children:(0,n.jsx)(t.p,{children:"At the time of this writing, there is only support for Windows."})}),"\n",(0,n.jsx)(t.admonition,{title:"Required Resources",type:"warning",children:(0,n.jsx)(t.p,{children:"At the time of this writing, a Dedicated Server instance requires at least\n10GB of free RAM to run without crashing. Monitor RAM usage when running\nthe server if the machine is close to these limits."})}),"\n",(0,n.jsx)(t.h2,{id:"directory-setup",children:"Directory Setup"}),"\n",(0,n.jsx)(t.p,{children:"You will need two directories to setup a Dedicated Server"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"a directory for SteamCMD"}),"\n",(0,n.jsx)(t.li,{children:"a directory for the Dedicated Server (cannot be the same as the Steam CMD directory)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"install-steamcmd",children:"Install SteamCMD"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip",children:"Download SteamCMD for Windows"}),"\nand extract it to a directory (E.g. ",(0,n.jsx)(t.code,{children:"C:\\steamcmd"}),"). Double click ",(0,n.jsx)(t.code,{children:"steamcmd.exe"})," to\ninstall it into the same directory. When it finishes, close the window."]}),"\n",(0,n.jsx)(t.h2,{id:"install-dedicated-server",children:"Install Dedicated Server"}),"\n",(0,n.jsxs)(t.p,{children:["Located the directory you intend to install the Dedicated Server to. While holding shift,\nright-click the directory and select ",(0,n.jsx)(t.code,{children:"Copy as path"})," and paste it somewhere for now.\nNow locate the SteamCMD directory. From within the SteamCMD directory, create a new text\nfile and name it ",(0,n.jsx)(t.code,{children:"UpdateServer.bat"})," (make sure you are not hiding file extensions).\nRight-click and edit this file. Inside the file insert the following while replacing\n",(0,n.jsx)(t.code,{children:"<my-dir>"})," with the path you pasted from the Dedicated Server directory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-batch",metastring:'title="UpdateServer.bat"',children:'.\\steamcmd.exe +force_install_dir "<my-dir>" +login anonymous +app_update 2430930 validate +quit\nexit\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Let this process complete, as it will take some time. Once it has completed, the server\nhas been installed. You can run this ",(0,n.jsx)(t.code,{children:".bat"})," file anytime to update the server as well."]}),"\n",(0,n.jsx)(t.h2,{id:"dedicated-server-setup-1",children:"Dedicated Server Setup"}),"\n",(0,n.jsx)(t.h3,{id:"runserverbat",children:"RunServer.bat"}),"\n",(0,n.jsxs)(t.p,{children:["From within the directory of the Dedicated Server (where the ",(0,n.jsx)(t.code,{children:"Engine"})," and ",(0,n.jsx)(t.code,{children:"ShooterGame"}),"\ndirectories are), create another new text file with the name ",(0,n.jsx)(t.code,{children:"RunServer.bat"}),".\nRight-click and edit this file. Copy the following to the file contents:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-batch",metastring:'title="RunServer.Bat"',children:"set mods=<my-mod-id>,<other-mod-id>\nstart ShooterGame\\Binaries\\Win64\\ArkAscendedServer.exe TheIsland_WP?listen?Port=7777 -game -server -log -ServerAdminPassword=oppass1 -NoBattlEye -mods=%mods%\nexit\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Take note of the ",(0,n.jsx)(t.code,{children:"set mods"})," part at the top of the file. This is where the mod IDs\nfor the server will be defined. Insert a comma separated list of mod IDs. If you\nare testing an unpublished build (",(0,n.jsx)(t.a,{href:"/docs/cooking-testing/local-cooking",children:"locally cooked"})," or\n",(0,n.jsx)(t.a,{href:"/docs/cooking-testing/curse-forge-cooking",children:"CurseForge cooked"}),"), append ",(0,n.jsx)(t.code,{children:"-dev"})," to the ID (E.g.\n",(0,n.jsx)(t.code,{children:"12345-dev"}),"). If you are using a ",(0,n.jsx)(t.a,{href:"/docs/cooking-testing/local-cooking",children:"locally cooked"})," Mod,\n",(0,n.jsx)(t.a,{href:"/docs/cooking-testing/testing#server-setup",children:"copy the Mod to the Dedicated Server"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8538:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>s});var n=i(1733);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);