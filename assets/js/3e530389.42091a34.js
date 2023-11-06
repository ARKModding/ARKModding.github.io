"use strict";(self.webpackChunkark_modding_github_io=self.webpackChunkark_modding_github_io||[]).push([[300],{5715:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=o(3860),n=o(8538);const s={},r="CurseForge Cooking",d={id:"cooking-testing/curse-forge-cooking",title:"CurseForge Cooking",description:"Before continuing within ADK, visit CurseForge",source:"@site/docs/cooking-testing/curse-forge-cooking.md",sourceDirName:"cooking-testing",slug:"/cooking-testing/curse-forge-cooking",permalink:"/docs/cooking-testing/curse-forge-cooking",draft:!1,unlisted:!1,editUrl:"https://github.com/ARKModding/site/tree/main/docs/cooking-testing/curse-forge-cooking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cooking and Testing",permalink:"/docs/category/cooking-and-testing"},next:{title:"Locally Cooking a Mod",permalink:"/docs/cooking-testing/local-cooking"}},a={},c=[{value:"Registering ADK with CurseForge",id:"registering-adk-with-curseforge",level:2},{value:"Cooking with CurseForge",id:"cooking-with-curseforge",level:2},{value:"Upload Mod to CurseForge",id:"upload-mod-to-curseforge",level:3},{value:"Monitoring and Troubleshooting CurseForge Builds",id:"monitoring-and-troubleshooting-curseforge-builds",level:3},{value:"Publishing",id:"publishing",level:3}];function u(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"curseforge-cooking",children:"CurseForge Cooking"}),"\n",(0,t.jsx)(i.admonition,{title:"Login to CurseForge",type:"danger",children:(0,t.jsxs)(i.p,{children:["Before continuing within ADK, visit ",(0,t.jsx)(i.a,{href:"https://www.curseforge.com/login",children:"CurseForge"}),"\r\nand login with Twitch, Discord, or Gmail. Failing to do so may require you to\r\ncontact CurseForge support to reset/consolidate your accounts."]})}),"\n",(0,t.jsx)(i.h2,{id:"registering-adk-with-curseforge",children:"Registering ADK with CurseForge"}),"\n",(0,t.jsxs)(i.p,{children:["In the application menus, find ",(0,t.jsx)(i.code,{children:"UGC"})," and select ",(0,t.jsx)(i.code,{children:"Share Mod"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"UGC Share Mod",src:o(4381).Z+"",width:"167",height:"146"})}),"\n",(0,t.jsx)(i.p,{children:"This will pop a dialog which will request your email address."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"CurseForge ADK Registration",src:o(9149).Z+"",width:"669",height:"594"})}),"\n",(0,t.jsx)(i.p,{children:"Enter your email address and click continue. Check your email and open the link\r\nprovided in the email within the same browser you are logged into CurseForge\r\nwith. This will link ADK with your logged in CurseForge account."}),"\n",(0,t.jsx)(i.admonition,{title:"Reset ADK Registration",type:"info",children:(0,t.jsxs)(i.p,{children:["If, for some reason, you ever need to reset your ADK registration with CurseForge,\r\nbackup and delete the file located at\r\n",(0,t.jsx)(i.code,{children:"ARKDevKit\\Projects\\ShooterGame\\Modes\\.eternal\\83374\\user_info.json"})]})}),"\n",(0,t.jsx)(i.h2,{id:"cooking-with-curseforge",children:"Cooking with CurseForge"}),"\n",(0,t.jsx)(i.h3,{id:"upload-mod-to-curseforge",children:"Upload Mod to CurseForge"}),"\n",(0,t.jsxs)(i.p,{children:["Once you have registered, the ",(0,t.jsx)(i.code,{children:"Share Mod"})," UGC menu will then present you with\r\nthe CurseForge Uploader."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"CurseForge Uploader - First Share",src:o(8591).Z+"",width:"525",height:"1209"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Select the Platform for which the mod is intended to be used (at the time\r\nof this writing, PC Only is the only available Platform)."}),"\n",(0,t.jsx)(i.li,{children:"Select which Mod folder to upload."}),"\n",(0,t.jsxs)(i.li,{children:["Give the Mod a user-friendly name. This name is transformed to kebab casing and used\r\nfor the page slug. For example ",(0,t.jsx)(i.code,{children:"My Awesome Mod"})," would be transformed to ",(0,t.jsx)(i.code,{children:"my-awesome-mod"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Provide an image of 400px by 400px or larger, while maintaining a 1:1 ratio (square)."}),"\n",(0,t.jsx)(i.li,{children:"Select the Mod's primary category (you can select secondaries on CurseForge's Website)"}),"\n",(0,t.jsx)(i.li,{children:"Provide a short description for CurseForge and in-game."}),"\n",(0,t.jsx)(i.li,{children:"Provide a detailed description for CurseForge and in-game."}),"\n",(0,t.jsx)(i.li,{children:"If you ever see this screen and this is an already uploaded mod, select this option\r\nto the link of the existing mod."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["When you are satisfied with your entries, click the ",(0,t.jsx)(i.code,{children:"Continue"})," button to upload the mod."]}),"\n",(0,t.jsx)(i.admonition,{title:"Bad Image",type:"warning",children:(0,t.jsx)(i.p,{children:"If it fails to upload and provides a 4xx error, you may have provided an invalid image.\r\nCheck your image and try again."})}),"\n",(0,t.jsx)(i.p,{children:"When the mod uploads, you should see a success dialog, as well as an Editor success\r\ndialog"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"CurseForge Upload Success",src:o(5266).Z+"",width:"463",height:"270"}),"\r\n",(0,t.jsx)(i.img,{alt:"ADK Upload Success",src:o(547).Z+"",width:"298",height:"156"})]}),"\n",(0,t.jsxs)(i.p,{children:["Most importantly, is the Editor dialog success message. Upon success, click the\r\n",(0,t.jsx)(i.code,{children:"Go To Project"})," button to open the Mod management page on CurseForge."]}),"\n",(0,t.jsx)(i.h3,{id:"monitoring-and-troubleshooting-curseforge-builds",children:"Monitoring and Troubleshooting CurseForge Builds"}),"\n",(0,t.jsxs)(i.p,{children:["Once you are on the Mod management page, navigate to the ",(0,t.jsx)(i.code,{children:"Files"})," tab, and monitor\r\nthe uploaded file's cook status."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"CurseForge Mod Cooking",src:o(377).Z+"",width:"644",height:"85"})}),"\n",(0,t.jsxs)(i.p,{children:["Once the Mod has cooked successfully, you will be presented with a ",(0,t.jsx)(i.code,{children:"Ready For Review"}),"\r\nstatus. Before publishing, you may want to ",(0,t.jsx)(i.a,{href:"./testing",children:"test the Mod"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"publishing",children:"Publishing"}),"\n",(0,t.jsxs)(i.p,{children:["To publish the build, click the orange button with the file up-arrow icon that has\r\n",(0,t.jsx)(i.code,{children:"Publish Build"})," tooltip."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"CurseForge Publish Build",src:o(8258).Z+"",width:"659",height:"81"})}),"\n",(0,t.jsxs)(i.p,{children:["With a build published, you can now publish the project. Click the ",(0,t.jsx)(i.code,{children:"Publish Project"}),"\r\nbutton at the top of the page, next to ",(0,t.jsx)(i.code,{children:"Manage Project"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! You have now published a Mod!"})]})}function g(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},547:(e,i,o)=>{o.d(i,{Z:()=>t});const t="data:image/png;base64,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"},377:(e,i,o)=>{o.d(i,{Z:()=>t});const t="data:image/png;base64,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"},8591:(e,i,o)=>{o.d(i,{Z:()=>t});const t=o.p+"assets/images/curse-forge-first-share-0997595788e5e5c118828596932387ee.png"},8258:(e,i,o)=>{o.d(i,{Z:()=>t});const t="data:image/png;base64,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"},5266:(e,i,o)=>{o.d(i,{Z:()=>t});const t=o.p+"assets/images/curse-forge-upload-success-aa3588855f713455e10c0e49bf752bc2.png"},9149:(e,i,o)=>{o.d(i,{Z:()=>t});const t=o.p+"assets/images/register-curse-forge-0556e55c5ec4462152912cac8602f501.png"},4381:(e,i,o)=>{o.d(i,{Z:()=>t});const t="data:image/png;base64,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"},8538:(e,i,o)=>{o.d(i,{Z:()=>d,a:()=>r});var t=o(1733);const n={},s=t.createContext(n);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);