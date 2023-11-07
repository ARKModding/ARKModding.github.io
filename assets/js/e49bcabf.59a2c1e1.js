"use strict";(self.webpackChunkark_modding_github_io=self.webpackChunkark_modding_github_io||[]).push([[905],{3578:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=o(3860),r=o(8538);const i={},s="Testing a Mod",d={id:"cooking-testing/testing",title:"Testing a Mod",description:"Before you can test, you must get a valid Mod ID. Either by using an already published",source:"@site/docs/cooking-testing/testing.md",sourceDirName:"cooking-testing",slug:"/cooking-testing/testing",permalink:"/cooking-testing/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/ARKModding/site/tree/main/docs/cooking-testing/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dedicated Server Setup",permalink:"/cooking-testing/server-setup"},next:{title:"Contributing to the ARK Modding Documentation",permalink:"/contribute/"}},l={},a=[{value:"Locally Cooked Mod",id:"locally-cooked-mod",level:2},{value:"Client Setup",id:"client-setup",level:3},{value:"Server Setup",id:"server-setup",level:3},{value:"CurseForge Cooked Mod",id:"curseforge-cooked-mod",level:2},{value:"Client Setup",id:"client-setup-1",level:3},{value:"Server Setup",id:"server-setup-1",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"testing-a-mod",children:"Testing a Mod"}),"\n",(0,n.jsxs)(t.admonition,{title:"Valid Mod ID Required",type:"info",children:[(0,n.jsx)(t.p,{children:"Before you can test, you must get a valid Mod ID. Either by using an already published\r\nMod that you are subscribed to (preferably one that doesn't update often), or by\r\nuploading your Mod to CurseForge at least once, and using the ID from there."}),(0,n.jsxs)(t.p,{children:["It is\r\nnot uncommon for Modders to use the\r\n",(0,n.jsx)(t.a,{href:"https://curseforge.com/ark-survival-ascended/mods/identity-helper",children:"Identity Helper"}),"\r\nMod, and its ID (",(0,n.jsx)(t.code,{children:"929134"}),"), to test with as it shouldn't update."]})]}),"\n",(0,n.jsxs)(t.admonition,{title:"Mod Version",type:"info",children:[(0,n.jsx)(t.p,{children:"The Mod folder installed by the client and server has the following format:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"modid_buildversion\n"})}),(0,n.jsx)(t.p,{children:"The Mod build version can be seen on the URL for the client or server zip on CurseForge."})]}),"\n",(0,n.jsx)(t.h2,{id:"locally-cooked-mod",children:"Locally Cooked Mod"}),"\n",(0,n.jsx)(t.h3,{id:"client-setup",children:"Client Setup"}),"\n",(0,n.jsxs)(t.p,{children:["Subscribe to the Mod ID that will be used for testing via the game client and let it\r\ninstall the mod. Once the Mod has been installed, open the game clients files in\r\nFile Explorer (usually\r\n",(0,n.jsx)(t.code,{children:"C:\\Program Files (x86)\\Steam\\steamapps\\common\\ARK Survival Ascended"}),") and navigate to\r\n",(0,n.jsx)(t.code,{children:"ShooterGame\\Binaries\\Win64\\ShooterGame\\Mods\\83374"}),". Locate the folder with the Mod ID,\r\nopen it and delete the contents from within it. Extract the Mod client files from the\r\nzip (",(0,n.jsx)(t.code,{children:"MyMod-Windows.zip"}),") here."]}),"\n",(0,n.jsx)(t.h3,{id:"server-setup",children:"Server Setup"}),"\n",(0,n.jsx)(t.admonition,{title:"Install a Server",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you do not have a server setup already, follow the\r\n",(0,n.jsx)(t.a,{href:"/cooking-testing/server-setup",children:"Dedicated Server Setup"})," guide."]})}),"\n",(0,n.jsxs)(t.p,{children:["Ensure the Mod is installed by the server by using ",(0,n.jsx)(t.code,{children:"-mods=<ModId>"})," launch option using\r\nthe Mod ID. You only have to ensure the server is on the latest version of the Mod\r\nbefore copying your files in. If this is a Mod ID for a Mod which rarely updates, you\r\nshould only have to start the server to install the Mod once before replacing its files."]}),"\n",(0,n.jsxs)(t.p,{children:["With the server in a state that it will not overwrite your locally cooked files on start,\r\nopen the location ",(0,n.jsx)(t.code,{children:"ShooterGame\\Binaries\\Win64\\ShooterGame\\Mods\\83374"})," and open the Mod ID\r\ndirectory. Clear the contents from within it, and extract the contents of the locally\r\ncooked server files from the server zip (",(0,n.jsx)(t.code,{children:"MyMod-WindowsServer.zip"}),"). Start the server."]}),"\n",(0,n.jsx)(t.h2,{id:"curseforge-cooked-mod",children:"CurseForge Cooked Mod"}),"\n",(0,n.jsx)(t.admonition,{title:"Non-Uploader Testers",type:"info",children:(0,n.jsxs)(t.p,{children:["If you have other testers, add them as members on the Project Management dashboard, set\r\ntheir role to Tester, and ensure ",(0,n.jsx)(t.code,{children:"Cross-Platform Tester"})," permission is checked. They\r\nwill then be able to install the Mod when they join the server or via their game client."]})}),"\n",(0,n.jsx)(t.h3,{id:"client-setup-1",children:"Client Setup"}),"\n",(0,n.jsxs)(t.p,{children:["If you are the owner/uploaded of the Mod, you will see the Mod in the game client under\r\n",(0,n.jsx)(t.code,{children:"My Mods"})," and can install it there. Load up a single player game with the Mod, or setup\r\na server following the steps provided bellow."]}),"\n",(0,n.jsx)(t.h3,{id:"server-setup-1",children:"Server Setup"}),"\n",(0,n.jsx)(t.admonition,{title:"Install a Server",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you do not have a server setup already, follow the\r\n",(0,n.jsx)(t.a,{href:"/cooking-testing/server-setup",children:"Dedicated Server Setup"})," guide."]})}),"\n",(0,n.jsxs)(t.p,{children:["Install the Mod by launching the server with ",(0,n.jsx)(t.code,{children:"-mods=<ModId>-dev"})," launch option using the\r\nMod ID. This will install the latest cooked build for the Mod."]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8538:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>s});var n=o(1733);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);