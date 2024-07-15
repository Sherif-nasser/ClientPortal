"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[934],{3934:(b,c,o)=>{o.r(c),o.d(c,{InternalManagmentSystemComponent:()=>m});var s=o(6814),i=o(846),u=o(8733),e=o(5879);let d=(()=>{class n{constructor(){this.fullName="",this.email=""}ngOnInit(){this.loadUserProfile()}loadUserProfile(){const a=localStorage.getItem("userHr");if(a){const t=JSON.parse(a);this.fullName=t.fullName,this.email=t.email}}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-header"]],standalone:!0,features:[e.jDz],decls:7,vars:0,consts:[[1,"navbar","fixed-top","flex-md-nowrap","p-0","d-md-none"],["href","index.html",1,"navbar-brand","col-md-3","col-lg-2","me-0","px-3","fs-6","text-white"],["src","./assets/images/Logo.png","alt","",1,"img-fluid"],[1,"navbar-nav","flex-row"],[1,"nav-item","text-nowrap"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#sidebarMenu","aria-controls","sidebarMenu","aria-expanded","false","aria-label","Toggle navigation",1,"nav-link","px-3","text-white"],[1,"fa-solid","fa-bars"]],template:function(t,l){1&t&&(e.TgZ(0,"header",0)(1,"a",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"ul",3)(4,"li",4)(5,"button",5),e._UZ(6,"i",6),e.qZA()()()())},dependencies:[s.ez,u.fQ,i.Bz],styles:["header[_ngcontent-%COMP%]{background-color:#e2e2e2cc}.navbar-brand[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem}.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding:.75rem 1rem}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main-color)}"]})}return n})(),g=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-footer"]],standalone:!0,features:[e.jDz],decls:0,vars:0,template:function(t,l){},dependencies:[s.ez]})}return n})();const r=function(){return{exact:!0}};let p=(()=>{class n{constructor(a,t){this.router=a,this.localize=t,this.fullName=""}ngOnInit(){this.loadUserProfile()}loadUserProfile(){const a=localStorage.getItem("userHr");if(a){const t=JSON.parse(a);this.fullName=t.fullName}}onLogout(a){a.preventDefault(),localStorage.removeItem("tokenHr"),console.log("out");const t=this.localize.translateRoute("/login");this.router.navigate([t])}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(i.F0),e.Y36(u.An))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-side-nav"]],standalone:!0,features:[e.jDz],decls:73,vars:35,consts:[[1,"sidebar","col-md-3","col-xl-2","p-0"],["tabindex","-1","id","sidebarMenu","aria-labelledby","sidebarMenuLabel",1,"offcanvas-md","offcanvas-end","h-100"],[1,"offcanvas-header"],["type","button","data-bs-dismiss","offcanvas","data-bs-target","#sidebarMenu","aria-label","Close",1,"btn","ms-auto"],[1,"fa-solid","fa-x"],[1,"offcanvas-body","h-100","d-flex","flex-column","p-0","overflow-y-scroll"],[1,"navbar-brand","px-2","fs-6","text-white","d-none","d-md-inline","text-center",3,"routerLink"],["src","./assets/images/Logo.png","alt","",1,"img-fluid"],[1,"nav","flex-column","mb-auto"],[1,"nav-item"],["aria-current","page","routerLinkActive","active",1,"nav-link","d-flex","align-items-center","gap-2",3,"routerLink","routerLinkActiveOptions"],[1,"fa-solid","fa-gauge-high"],[1,"border","border-1","my-1"],["data-bs-toggle","collapse","data-bs-target","#client-management","aria-expanded","false",1,"nav-link","d-flex","align-items-center","gap-2","btn-toggle","collapsed"],[1,"fa-solid","fa-users-line"],["id","client-management",1,"collapse"],["routerLinkActive","active",1,"nav-link","d-flex","align-items-center","gap-2",3,"routerLink","routerLinkActiveOptions"],[1,"fa-solid","fa-people-group"],[1,"btn-toggle-nav","ps-4","list-unstyled","fw-normal","pb-1","small"],["data-bs-toggle","collapse","data-bs-target","#employees","aria-expanded","false",1,"nav-link","d-flex","align-items-center","gap-2","btn-toggle","d-inline-flex","align-items-center","rounded","border-0","collapsed"],[1,"fa-solid","fa-users"],["id","employees",1,"collapse"],[1,"fa-solid","fa-diagram-project"],[1,"fa-solid","fa-arrow-down-wide-short"],[1,"nav","p-3"],[1,"nav-item","mb-3"],["id","profile",1,"collapse"],[1,"btn-toggle-nav","ps-lg-1","ps-md-3","ps-5","list-unstyled","fw-normal","pb-1","small"],[1,"nav-link","d-flex","align-items-center","gap-2",3,"routerLink"],[1,"fa-solid","fa-user"],[1,"fa-regular","fa-bell"],["type","button",1,"nav-link","d-flex","align-items-center","gap-2","text-danger",3,"click"],[1,"fa-solid","fa-arrow-right-from-bracket"],["data-bs-toggle","collapse","data-bs-target","#profile","aria-expanded","false",1,"nav-link","d-flex","btn-toggle-top","align-items-center","gap-2","align-items-center","rounded","border-0","collapsed","p-0"],["src","../../../../../assets/images/FaceMale.png","alt","","width","32","height","32",1,"rounded-circle","me-2"],[1,"nav-item","mx-auto","py-3"],[1,"btn-container"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e.qZA()(),e.TgZ(5,"div",5)(6,"a",6),e.ALo(7,"localize"),e._UZ(8,"img",7),e.qZA(),e.TgZ(9,"ul",8)(10,"li",9)(11,"a",10),e.ALo(12,"localize"),e._UZ(13,"i",11),e._uU(14," \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 "),e.qZA()(),e._UZ(15,"hr",12),e.TgZ(16,"li",9)(17,"a",13),e._UZ(18,"i",14),e._uU(19," \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 "),e.qZA(),e.TgZ(20,"div",15)(21,"li")(22,"a",16),e.ALo(23,"localize"),e._UZ(24,"i",17),e._uU(25," \u0627\u0644\u0639\u0645\u0644\u0627\u0621 "),e.qZA()(),e.TgZ(26,"ul",18)(27,"li",9)(28,"a",19),e._UZ(29,"i",20),e._uU(30," \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646 "),e.qZA(),e.TgZ(31,"div",21)(32,"ul",18)(33,"li")(34,"a",16),e.ALo(35,"localize"),e._UZ(36,"i",17),e._uU(37," \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646 "),e.qZA()()()()(),e.TgZ(38,"li")(39,"a",16),e.ALo(40,"localize"),e._UZ(41,"i",22),e._uU(42," \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),e.qZA()(),e.TgZ(43,"li")(44,"a",16),e.ALo(45,"localize"),e._UZ(46,"i",23),e._uU(47," \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA()()()()(),e._UZ(48,"hr",12),e.qZA(),e.TgZ(49,"ul",24)(50,"li",25)(51,"div",26)(52,"ul",27)(53,"li")(54,"a",28),e.ALo(55,"localize"),e._UZ(56,"i",29),e._uU(57," \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a "),e.qZA()(),e.TgZ(58,"li")(59,"a",28),e.ALo(60,"localize"),e._UZ(61,"i",30),e._uU(62,"\u0627\u0644\u0623\u0634\u0639\u0627\u0631\u0627\u062a"),e.qZA()(),e.TgZ(63,"li")(64,"button",31),e.NdJ("click",function(f){return l.onLogout(f)}),e._UZ(65,"i",32),e._uU(66," \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c "),e.qZA()()()(),e.TgZ(67,"a",33),e._UZ(68,"img",34),e.TgZ(69,"strong"),e._uU(70),e.qZA()()(),e.TgZ(71,"li",35),e._UZ(72,"div",36),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("routerLink",e.lcZ(7,14,"/dashboard/view")),e.xp6(5),e.Q6J("routerLink",e.lcZ(12,16,"/dashboard/view"))("routerLinkActiveOptions",e.DdM(30,r)),e.xp6(11),e.Q6J("routerLink",e.lcZ(23,18,"/dashboard/clients"))("routerLinkActiveOptions",e.DdM(31,r)),e.xp6(12),e.Q6J("routerLink",e.lcZ(35,20,"/dashboard/employees"))("routerLinkActiveOptions",e.DdM(32,r)),e.xp6(5),e.Q6J("routerLink",e.lcZ(40,22,"/dashboard/projects"))("routerLinkActiveOptions",e.DdM(33,r)),e.xp6(5),e.Q6J("routerLink",e.lcZ(45,24,"/dashboard/tasks"))("routerLinkActiveOptions",e.DdM(34,r)),e.xp6(10),e.Q6J("routerLink",e.lcZ(55,26,"/dashboard/profile")),e.xp6(5),e.Q6J("routerLink",e.lcZ(60,28,"/dashboard/notifications")),e.xp6(11),e.Oqu(l.fullName))},dependencies:[s.ez,u.fQ,u.lO,i.Bz,i.rH,i.Od],styles:['@media (min-width: 768px){.sidebar[_ngcontent-%COMP%]   .offcanvas-lg[_ngcontent-%COMP%]{position:sticky;top:48px}.navbar-search[_ngcontent-%COMP%]{display:block}}.sidebar[_ngcontent-%COMP%]{position:fixed;height:100vh;right:0}@media (max-width: 768px){.sidebar[_ngcontent-%COMP%]{position:static;height:auto}}.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500}.sidebar-heading[_ngcontent-%COMP%]{font-size:.75rem}.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{font-size:16px}.btn-toggle[_ngcontent-%COMP%]{font-weight:600}.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus{cursor:pointer}.btn-toggle[_ngcontent-%COMP%]:after{font-family:FontAwesome;width:1.25em;line-height:0;content:"\\f078";font-size:14px;transition:transform .35s ease;transform-origin:.5em 50%}.btn-toggle-top[_ngcontent-%COMP%]:after{font-family:FontAwesome;width:1.25em;line-height:0;content:"\\f077";font-size:14px;transition:transform .35s ease;transform-origin:.5em 50%}.btn-toggle[aria-expanded=true][_ngcontent-%COMP%]:after, .btn-toggle-top[aria-expanded=true][_ngcontent-%COMP%]:after{transform:rotate(-180deg) translate(-25%)}.btn-toggle-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.1875rem .5rem;margin-top:.125rem;margin-left:1.25rem}.sidebar[_ngcontent-%COMP%]{background:linear-gradient(95deg,rgba(226,226,226,.15) 0%,rgba(214,214,214,.35) 57%,rgba(144,144,154,.55) 100%)}.offcanvas-header[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]:active{border:none}.btn-toggle[_ngcontent-%COMP%]{color:var(--bs-emphasis-color);background-color:transparent}']})}return n})(),m=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-internal-managment-system"]],standalone:!0,features:[e.jDz],decls:7,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-9","ms-sm-auto","col-xl-10","px-lg-4","px-2","pt-md-0","pt-4"]],template:function(t,l){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1),e._UZ(3,"app-side-nav"),e.TgZ(4,"main",2),e._UZ(5,"router-outlet"),e.qZA()()(),e._UZ(6,"app-footer"))},dependencies:[s.ez,i.lC,d,g,p],styles:[".outlet-container[_ngcontent-%COMP%]{background:none!important}"]})}return n})()}}]);