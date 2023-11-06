"use strict";(self.webpackChunkark_modding_github_io=self.webpackChunkark_modding_github_io||[]).push([[7868],{550:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(3860),t=n(8538);const r={},c="Locally Cooking a Mod",s={id:"cooking-testing/local-cooking",title:"Locally Cooking a Mod",description:"Cooking in ADK",source:"@site/docs/cooking-testing/local-cooking.md",sourceDirName:"cooking-testing",slug:"/cooking-testing/local-cooking",permalink:"/cooking-testing/local-cooking",draft:!1,unlisted:!1,editUrl:"https://github.com/ARKModding/site/tree/main/docs/cooking-testing/local-cooking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurseForge Cooking",permalink:"/cooking-testing/curse-forge-cooking"},next:{title:"Persistent PIE",permalink:"/cooking-testing/persistent-pie"}},d={},l=[{value:"Cooking in ADK",id:"cooking-in-adk",level:2},{value:"Cooking outside ADK",id:"cooking-outside-adk",level:2},{value:"Interactive Shell",id:"interactive-shell",level:3},{value:"Headless (unattended)",id:"headless-unattended",level:3}];function a(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"locally-cooking-a-mod",children:"Locally Cooking a Mod"}),"\n",(0,i.jsx)(o.h2,{id:"cooking-in-adk",children:"Cooking in ADK"}),"\n",(0,i.jsx)(o.p,{children:"To cook a Mod locally, click the cooker icon on the top bar (same as Play in PIE)."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Cooker Icon",src:n(595).Z+"",width:"44",height:"38"})}),"\n",(0,i.jsx)(o.p,{children:"This will open the Cooker Dialog window."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Cooker Dialog",src:n(5125).Z+"",width:"767",height:"743"})}),"\n",(0,i.jsx)(o.p,{children:"(1) Select a Mod to cook and (2/3) determine if you will be testing this on a dedicated\r\nserver. If so, make sure Windows Server is checked. Windows Client will cook all files,\r\nwhile Windows Server will only cook files required for dedicated server. (4) Set the\r\nnumber of cook processes to the amount of RAM you have available divided by five."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"(Total RAM - Used Ram) / 5 = # Cook Processes\n"})}),"\n",(0,i.jsx)(o.p,{children:"(5) Start the cook and (7) monitor the cooker output. If, for any reason, you need to\r\n(6) cancel the cook, do so by clicking the Cancel button."}),"\n",(0,i.jsxs)(o.p,{children:["When the cook finishes, it should open a File Explorer window to the packaged ",(0,i.jsx)(o.code,{children:".zip"}),"\r\nfiles. If not, check the log output for any errors. If there are no errors, check\r\n",(0,i.jsx)(o.code,{children:"ARKDevkit\\ModTools\\Output\\<ModDirName>"})," to see if the files were updated. If so, the cook\r\nsucceeded. With the cooked zips, you may proceed to testing with locally cooked files."]}),"\n",(0,i.jsx)(o.h2,{id:"cooking-outside-adk",children:"Cooking outside ADK"}),"\n",(0,i.jsx)(o.h3,{id:"interactive-shell",children:"Interactive Shell"}),"\n",(0,i.jsxs)(o.p,{children:["There is a script located at ",(0,i.jsx)(o.code,{children:"ARKDevKit\\ModTools\\Scripts\\CookMod.bat"}),", you can run this\r\nto get an interactive shell that mimics the cooker in ADK."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"===============================\r\n====== Mod Cook Settings ======\r\n===============================\r\n\r\nCook Platforms:\r\n\r\n[1] Windows Client [Enabled]\r\n[2] Windows Server [Enabled]\r\n\r\nMod Information:\r\n\r\n[3] Mod Name [None]\r\n[4] # of Cook Workers [3]\r\n\r\n[5] Start Cook\r\n[6] Exit\r\n\r\n[ERROR]: A valid mod directory has not been entered\r\n\r\nSelection:\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Use the selections, primarily providing a Mod Directory Name, then select ",(0,i.jsx)(o.code,{children:"[5] Start Cook"}),".\r\nAgain, the cooker will place the files in ",(0,i.jsx)(o.code,{children:"ARKDevKit\\ModTools\\Output\\<ModDirName>"})]}),"\n",(0,i.jsx)(o.h3,{id:"headless-unattended",children:"Headless (unattended)"}),"\n",(0,i.jsxs)(o.p,{children:["Use the following command, filling in the properties appropriately, assuming you have ADK\r\ninstalled at ",(0,i.jsx)(o.code,{children:"C:\\ARKDevKit"})]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'C:\\ARKDevKit\\Engine\\Build\\BatchFiles\\RunUAT.bat BuildPlatformUGC -Windows -WindowsServer -Mod=ModDirName -NoCompile -OutputDirectory="C:\\ARKDevkit\\ModTools\\Output\\ModDirName\\\\" -AdditionalCookerOptions="-CookProcessCount=3"\n'})}),"\n",(0,i.jsxs)(o.p,{children:["Take note of the arguments and their options, filling in the values appropriately. For\r\nexample, if the Mod directory name was ",(0,i.jsx)(o.code,{children:"MyMod"}),", replace ",(0,i.jsx)(o.code,{children:"ModDirName"})," with ",(0,i.jsx)(o.code,{children:"MyMod"})," in\r\nboth places (",(0,i.jsx)(o.code,{children:"-Mod"}),", ",(0,i.jsx)(o.code,{children:"-OutputDirectory"}),")."]}),"\n",(0,i.jsxs)(o.p,{children:["Again, the cooker will place the files in ",(0,i.jsx)(o.code,{children:"C:\\ARKDevKit\\ModTools\\Output\\<ModDirName>"})]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5125:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/cook-dialog-1826857d6656dcc8cefd9a67ff515fab.png"},595:(e,o,n)=>{n.d(o,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAIAAAAwfe4wAAABZklEQVR4Xu2SvYqDQBCA8zAnhIg2KYQ0AcHYCZIgptJK9A1EH8BGsBCuSJFA6tTRyvhoN9yycIzRdS4cl2K/atb5+xhcfLwBC/zhP5ASHCnBkRIcmsTtdgvDkMVBEMDzaYoKTaIsy8vloqoqxJZltW3r+/4wRYUmATiOUxRFlmWwb71eJ0lSVRV8RCncNglZAtA0re/7OI7ZM8/z+/3+NDWT30jsdrvH4+G6LsSKotR1fT6fh6n50CTYwaMo2m63cPM0TeEMnuetVqufKdwmgibRNA1sZTHcHC4P9x+mqNAkrtcr/IYsPhwOIGGa5jBFhSah6/rxeNxsNuxp2/Z+v18ul8MUCbFE8QJ41ghiif4F8KwRxBKf3+DxIlgXnjWCWIKBl4jA/ZNICY6U4MyV6LoO7xkHinH/JHMlTqcTXjUOFOP+SeZKGIYBo4X3gAIog2LcP8lciT9FSnCkBEdKcKQE5y0kvgDg00hC9wJ/+AAAAABJRU5ErkJggg=="},8538:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>c});var i=n(1733);const t={},r=i.createContext(t);function c(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);