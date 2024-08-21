"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[576],{1576:(C,h,a)=>{a.r(h),a.d(h,{default:()=>n});var d=a(6814),p=a(846),t=a(5879);let b=(()=>{class o{static#t=this.\u0275fac=function(u){return new(u||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-maindashboard"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(u,m){1&u&&t._UZ(0,"router-outlet")},dependencies:[d.ez,p.lC]})}return o})();var e=a(8733),v=a(4414),i=a(5123),s=a(7444),c=a(4114);const n=[{path:"",component:b,children:[{path:"",component:(()=>{class o{constructor(r,u,m){this.employeeService=r,this.taskService=u,this.projectService=m,this.employees=0,this.tasks=0,this.projects=0,this.loading=!0,this.fullName=""}ngOnInit(){this.getEmployeesCount(),this.getTasksCount(),this.getProjectsCount(),this.loadUserProfile()}loadUserProfile(){const r=localStorage.getItem("userHr");if(r){const u=JSON.parse(r);this.fullName=u.fullName}}getEmployeesCount(){this.loading=!0,this.employeeService.GetEmployeesList().subscribe({next:r=>{r&&r.data&&(this.employees=r.data.length),this.loading=!1},error:r=>{this.loading=!1,console.error("There was an error!",r)}})}getTasksCount(){this.loading=!0,this.taskService.TaskLists().subscribe({next:r=>{r&&r.data&&(this.tasks=r.data.length),this.loading=!1},error:r=>{this.loading=!1,console.error("There was an error!",r)}})}getProjectsCount(){this.loading=!0,this.projectService.projectLists().subscribe({next:r=>{r&&r.data&&(this.projects=r.data.length,console.log(r.data)),this.loading=!1},error:r=>{this.loading=!1,console.error("There was an error!",r)}})}static#t=this.\u0275fac=function(u){return new(u||o)(t.Y36(i.M),t.Y36(s.M),t.Y36(c.m))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],standalone:!0,features:[t.jDz],decls:86,vars:16,consts:[[1,"dashboard"],[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-4"],[1,"col-12"],[1,"fw-bold","fs-2"],[1,"fs-1"],[1,"row"],[1,"col-12","navs"],[1,"container-fluid"],[1,"row","mb-4"],[1,"col-xl-3","col-lg-4","col-sm-6","mb-3","counter"],[1,"h-100","card"],[1,"row","py-3","px-4","align-items-center"],[1,"col-lg-9","col-md-10","col-9"],[1,"col-lg-3","col-md-2","col-3"],[1,"fa-solid","fa-people-group","fs-3"],[1,"row","justify-content-center"],[1,"col-6","text-center"],[1,"mb-0"],[1,"text-reset","text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-address-book","fs-3"],[1,"fa-solid","fa-arrow-down-wide-short","fs-3"],[1,"fa-solid","fa-diagram-project","fs-3"],[1,"col-12","text-center"],[1,"display-5","fw-bold","text-center","mb-5"],[1,"text-center","py-3"],["href","https://hr-eliters.elhossiny.net/ar/login","target","_blank",1,"btn","btn-primary","bg-linear","c-white","px-5","b-d-radius"]],template:function(u,m){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._UZ(5,"app-breadcrumb"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a: \u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643"),t.qZA()(),t.TgZ(8,"div",3)(9,"h2",5),t._uU(10),t.qZA()()(),t.TgZ(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"h2"),t._uU(20),t.qZA(),t.TgZ(21,"h5"),t._uU(22,"\u0639\u062f\u062f \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646"),t.qZA()(),t.TgZ(23,"div",14),t._UZ(24,"i",15),t.qZA()(),t.TgZ(25,"div",16)(26,"div",17)(27,"p",18)(28,"a",19),t.ALo(29,"localize"),t._uU(30,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f"),t.qZA()()()()()(),t.TgZ(31,"div",10)(32,"div",11)(33,"div",12)(34,"div",13)(35,"h2"),t._uU(36,"4"),t.qZA(),t.TgZ(37,"h5"),t._uU(38,"\u0639\u062f\u062f \u0627\u0644\u0639\u0645\u0644\u0627\u0621"),t.qZA()(),t.TgZ(39,"div",14),t._UZ(40,"i",20),t.qZA()(),t.TgZ(41,"div",16)(42,"div",17)(43,"p",18)(44,"a",19),t.ALo(45,"localize"),t._uU(46,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f"),t.qZA()()()()()(),t.TgZ(47,"div",10)(48,"div",11)(49,"div",12)(50,"div",13)(51,"h2"),t._uU(52),t.qZA(),t.TgZ(53,"h5"),t._uU(54,"\u0639\u062f\u062f \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621"),t.qZA()(),t.TgZ(55,"div",14),t._UZ(56,"i",21),t.qZA()(),t.TgZ(57,"div",16)(58,"div",17)(59,"p",18)(60,"a",19),t.ALo(61,"localize"),t._uU(62,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f"),t.qZA()()()()()(),t.TgZ(63,"div",10)(64,"div",11)(65,"div",12)(66,"div",13)(67,"h2"),t._uU(68),t.qZA(),t.TgZ(69,"h5"),t._uU(70,"\u0639\u062f\u062f \u0627\u0644\u0642\u0636\u0627\u064a\u0627"),t.qZA()(),t.TgZ(71,"div",14),t._UZ(72,"i",22),t.qZA()(),t.TgZ(73,"div",16)(74,"div",17)(75,"p",18)(76,"a",19),t.ALo(77,"localize"),t._uU(78,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f"),t.qZA()()()()()()()()()(),t.TgZ(79,"div",6)(80,"div",23)(81,"h5",24),t._uU(82," \u062e\u062f\u0645\u0629 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 "),t.qZA(),t.TgZ(83,"div",25)(84,"a",26),t._uU(85,"\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()()()()()()),2&u&&(t.xp6(10),t.hij("\u0645\u0631\u062d\u0628\u0627\u064b \u064a\u0627 ",m.fullName,"!"),t.xp6(10),t.Oqu(m.employees),t.xp6(8),t.Q6J("routerLink",t.lcZ(29,8,"/dashboard/employees")),t.xp6(16),t.Q6J("routerLink",t.lcZ(45,10,"/dashboard/clients")),t.xp6(8),t.Oqu(m.tasks),t.xp6(8),t.Q6J("routerLink",t.lcZ(61,12,"/dashboard/tasks")),t.xp6(8),t.Oqu(m.projects),t.xp6(8),t.Q6J("routerLink",t.lcZ(77,14,"/dashboard/tasks")))},dependencies:[d.ez,e.fQ,e.lO,p.Bz,p.rH,v.L],styles:[".card[_ngcontent-%COMP%]{border-radius:20px!important;padding-bottom:6px}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-radius:20px!important}"]})}return o})()}]}]},4114:(C,h,a)=>{a.d(h,{m:()=>b});var d=a(9862),p=a(553),t=a(5879);let b=(()=>{class e{constructor(i){this.http=i,this.projectsUrl=`${p.N.url}project`}projectLists(i){let s=new d.LE;return i&&Object.keys(i).forEach(c=>{s=s.append(c,i[c])}),this.http.get(this.projectsUrl,{params:s})}addProject(i,s){let c=new d.LE;s&&Object.keys(s).forEach(n=>{c=c.append(n,s[n])});const g=new FormData;return Object.keys(i).forEach(n=>{g.append(n,i[n])}),this.http.post(this.projectsUrl,g,{params:c})}getProjectById(i){return this.http.get(`${this.projectsUrl}/${i}`)}updateProject(i,s,c){let g=new d.LE;c&&Object.keys(c).forEach(o=>{g=g.append(o,c[o])});const n=new FormData;return Object.keys(s).forEach(o=>{n.append(o,s[o])}),this.http.post(`${this.projectsUrl}/${i}`,n,{params:g})}deleteProject(i){return this.http.delete(`${this.projectsUrl}/${i}`)}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(d.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},4414:(C,h,a)=>{a.d(h,{L:()=>g});var d=a(6814),p=a(846),t=a(8733),b=a(2181),e=a(5879);function v(n,o){1&n&&(e.TgZ(0,"li",6),e._uU(1,"/"),e.qZA())}function i(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"li",4)(2,"a",5),e.ALo(3,"localize"),e._uU(4),e.qZA()(),e.YNc(5,v,2,0,"li",3),e.BQk()),2&n){const l=o.$implicit,r=o.index,u=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink",e.lcZ(3,3,l.url)),e.xp6(2),e.Oqu(l.label),e.xp6(1),e.Q6J("ngIf",r<u.segments.length-1)}}function s(n,o){1&n&&(e.TgZ(0,"li",6),e._uU(1,"/"),e.qZA())}function c(n,o){if(1&n&&(e.ynx(0),e.YNc(1,i,6,5,"ng-container",2),e.YNc(2,s,2,0,"li",3),e.BQk()),2&n){const l=o.$implicit,r=o.index,u=e.oxw();e.xp6(1),e.Q6J("ngForOf",l.segments),e.xp6(1),e.Q6J("ngIf",r<u.breadcrumbs.length-1)}}let g=(()=>{class n{constructor(l,r){this.router=l,this.activatedRoute=r,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,b.h)(l=>l instanceof p.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(l,r="",u=[]){let m=[],f=l;for(;f.firstChild;){f=f.firstChild;const O=f.snapshot.url.map(Z=>Z.path).join("/");""!==O&&(r+=`/${O}`);const _=f.snapshot.data.breadcrumbs;if(_&&_!=m&&Array.isArray(_)&&""!==O){m=_;const Z=_.map(x=>({label:x.label,url:x.url||r}));u.push({segments:Z})}}return u}ngOnDestroy(){}static#t=this.\u0275fac=function(r){return new(r||n)(e.Y36(p.F0),e.Y36(p.gz))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-breadcrumb"]],standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(r,u){1&r&&(e.TgZ(0,"nav",0)(1,"ol",1),e.YNc(2,c,3,2,"ng-container",2),e.qZA()()),2&r&&(e.xp6(2),e.Q6J("ngForOf",u.breadcrumbs))},dependencies:[d.ez,d.sg,d.O5,p.Bz,p.rH,t.fQ,t.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return n})()}}]);