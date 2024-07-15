"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[851],{2135:(O,P,l)=>{l.d(P,{u:()=>f});var r=l(5879);let f=(()=>{class t{transform(i,_){return i?_?(_=_.toLowerCase(),i.filter(n=>{const C=n.full_name?n.full_name.toLowerCase():"",A=n.first_name?n.first_name.toLowerCase():"",j=n.employee&&n.employee.first_name?n.employee.first_name.toLowerCase():"",c=n.employee&&n.employee.last_name?n.employee.last_name.toLowerCase():"",v=n.last_name?n.last_name.toLowerCase():"",d=n.title?n.title.toLowerCase():"",g=n.name?n.name.toLowerCase():"",s=n.user&&n.user.name?n.user.name.toLowerCase():"",Z=n.head?n.head.toLowerCase():"",h=n.description?n.description.toLowerCase():"";return C.includes(_)||v.includes(_)||g.includes(_)||s.includes(_)||Z.includes(_)||h.includes(_)||A.includes(_)||j.includes(_)||c.includes(_)||d.includes(_)})):i:[]}static#t=this.\u0275fac=function(_){return new(_||t)};static#e=this.\u0275pipe=r.Yjl({name:"filter",type:t,pure:!0,standalone:!0})}return t})()},5851:(O,P,l)=>{l.r(P),l.d(P,{default:()=>X});var r=l(6814),f=l(846),t=l(5879);let m=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-project"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(a,u){1&a&&t._UZ(0,"router-outlet")},dependencies:[r.ez,f.lC]})}return o})();var i=l(4414),_=l(8733),n=l(6223),C=l(2135),A=l(1818),j=l(8034),c=l(4114),v=l(7700);const d=function(o,p){return[o,p]};function g(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",27)(12,"a",28),t.ALo(13,"localize"),t._UZ(14,"i",29),t._uU(15," \u0639\u0631\u0636"),t.qZA(),t.TgZ(16,"a",30),t.ALo(17,"localize"),t._UZ(18,"i",31),t._uU(19," \u062a\u0639\u062f\u064a\u0644 "),t.qZA(),t.TgZ(20,"button",32),t.NdJ("click",function(){const b=t.CHM(e).$implicit,T=t.oxw();return t.KtG(T.deleteProject(b.id,b.name))}),t._UZ(21,"i",33),t._uU(22," \u062d\u0630\u0641 "),t.qZA()()()}if(2&o){const e=p.$implicit,a=p.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.project_status),t.xp6(2),t.Oqu(e.note),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Q6J("routerLink",t.WLB(11,d,t.lcZ(13,7,"/dashboard/projects/view-project"),e.id)),t.xp6(4),t.Q6J("routerLink",t.WLB(14,d,t.lcZ(17,9,"/dashboard/projects/add-project"),e.id))}}function s(o,p){1&o&&(t.TgZ(0,"tr")(1,"td",34),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let Z=(()=>{class o{constructor(e,a){this.projectService=e,this.dialog=a,this.projects=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.listAllProjects()}listAllProjects(e=1){this.projectService.projectLists().subscribe({next:a=>{this.projects=a.data,this.currentPage=a.pagination.current_page,this.totalPages=a.pagination.last_page,this.loading=!1},error:a=>{this.loading=!1,console.log(a)}})}deleteProject(e,a){this.dialog.open(j.$,{width:"500px",data:{title:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 ${a}\u061f`}}).afterClosed().subscribe(b=>{b&&this.projectService.deleteProject(e).subscribe({next:T=>{this.listAllProjects()},error:T=>{console.log("there was an error deleting currency:",T)}})})}onPageChange(e){}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(c.m),t.Y36(v.uw))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-projects-list"]],standalone:!0,features:[t.jDz],decls:54,vars:16,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-12"],[1,"row","list-row"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-3","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-6","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3",3,"ngModel","ngModelChange"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-md-8"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-4","text-center"],[1,"text-center","mb-0"],[1,"action"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","6",1,"text-center"]],template:function(a,u){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",4)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t.ALo(16,"localize"),t._UZ(17,"i",11),t._uU(18," \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062c\u062f\u064a\u062f "),t.qZA()(),t.TgZ(19,"div",12)(20,"input",13),t.NdJ("ngModelChange",function(T){return u.searchQuery=T}),t.qZA()(),t.TgZ(21,"div",14)(22,"button",15),t._UZ(23,"i",16),t._uU(24," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(25,"div",17)(26,"div",18)(27,"table",19)(28,"thead")(29,"tr")(30,"th"),t._uU(31,"\u062a\u0631\u0642\u064a\u0645"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"\u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"\u0645\u0644\u0627\u062d\u0638\u0629"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"\u0627\u062c\u0631\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(42,"tbody"),t.YNc(43,g,23,17,"tr",20),t.ALo(44,"filter"),t.YNc(45,s,3,0,"tr",21),t.ALo(46,"filter"),t.qZA()()()(),t.TgZ(47,"div",7)(48,"div",22)(49,"div",23)(50,"pagination",24),t.NdJ("pageChange",function(T){return u.onPageChange(T)}),t.qZA()(),t.TgZ(51,"div",25)(52,"p",26),t._uU(53),t.qZA()()()()()()()()),2&a&&(t.xp6(15),t.Q6J("routerLink",t.lcZ(16,8,"/dashboard/projects/add-project")),t.xp6(5),t.Q6J("ngModel",u.searchQuery),t.xp6(23),t.Q6J("ngForOf",t.xi3(44,10,u.projects,u.searchQuery)),t.xp6(2),t.Q6J("ngIf",0===t.xi3(46,13,u.projects,u.searchQuery).length&&!u.loading),t.xp6(5),t.Q6J("currentPage",u.currentPage)("totalPages",u.totalPages),t.xp6(3),t.AsE(" \u0635\u0641\u062d\u0629 \u0631\u0642\u0645 ",u.currentPage," \u0645\u0646 \u0623\u0635\u0644 ",u.totalPages," \u0635\u0641\u062d\u0629 "))},dependencies:[r.ez,r.sg,r.O5,i.L,f.Bz,f.rH,_.fQ,_.lO,n.u5,n.Fj,n.JJ,n.On,C.u,A.Q]})}return o})();var h=l(5123);function F(o,p){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639"),t.qZA())}function x(o,p){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u062a\u0639\u062f\u064a\u0644 \u0645\u0634\u0631\u0648\u0639"),t.qZA())}function U(o,p){1&o&&(t.TgZ(0,"div",36),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function M(o,p){if(1&o&&(t.TgZ(0,"div",36),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.projectsForm.controls.name.errors?null:e.projectsForm.controls.name.errors.serverError[0]," ")}}function I(o,p){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,U,2,0,"div",18),t.YNc(2,M,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.name.errors?null:e.projectsForm.controls.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.name.errors?null:e.projectsForm.controls.name.errors.serverError)}}function y(o,p){1&o&&(t.TgZ(0,"div",36),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function E(o,p){if(1&o&&(t.TgZ(0,"div",36),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.projectsForm.controls.project_status.errors?null:e.projectsForm.controls.project_status.errors.serverError[0]," ")}}function w(o,p){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,y,2,0,"div",18),t.YNc(2,E,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.project_status.errors?null:e.projectsForm.controls.project_status.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.project_status.errors?null:e.projectsForm.controls.project_status.errors.serverError)}}function L(o,p){1&o&&(t.TgZ(0,"div",36),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function N(o,p){if(1&o&&(t.TgZ(0,"div",36),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.projectsForm.controls.note.errors?null:e.projectsForm.controls.note.errors.serverError[0]," ")}}function D(o,p){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,L,2,0,"div",18),t.YNc(2,N,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.note.errors?null:e.projectsForm.controls.note.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.note.errors?null:e.projectsForm.controls.note.errors.serverError)}}function J(o,p){if(1&o&&(t.TgZ(0,"option",37),t._uU(1),t.qZA()),2&o){const e=p.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.user.name," ")}}function Q(o,p){1&o&&(t.TgZ(0,"div",36),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Y(o,p){if(1&o&&(t.TgZ(0,"div",36),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.projectsForm.controls.project_manager.errors?null:e.projectsForm.controls.project_manager.errors.serverError[0]," ")}}function k(o,p){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,Q,2,0,"div",18),t.YNc(2,Y,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.project_manager.errors?null:e.projectsForm.controls.project_manager.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.project_manager.errors?null:e.projectsForm.controls.project_manager.errors.serverError)}}function B(o,p){1&o&&(t.TgZ(0,"div",36),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function z(o,p){if(1&o&&(t.TgZ(0,"div",36),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.projectsForm.controls.date.errors?null:e.projectsForm.controls.date.errors.serverError[0]," ")}}function S(o,p){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,B,2,0,"div",18),t.YNc(2,z,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.date.errors?null:e.projectsForm.controls.date.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.projectsForm.controls.date.errors?null:e.projectsForm.controls.date.errors.serverError)}}function R(o,p){if(1&o&&(t.ynx(0),t.TgZ(1,"div",38)(2,"button",39),t._UZ(3,"i",40),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 "),t.qZA()(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.projectsForm.valid)}}function K(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",38)(1,"button",41),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.updateProject())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.projectsForm.valid)}}const W=function(o){return[o]};let q=(()=>{class o{constructor(e,a,u,b,T){this.activatedRoute=e,this.projectServices=a,this.localize=u,this.router=b,this.employeeService=T,this.employees=[],this.isEditMode=!1,this.projectId="",this.projectsForm=new n.cw({name:new n.NI("",n.kI.required),project_status:new n.NI("",n.kI.required),note:new n.NI("",n.kI.required),date:new n.NI("",n.kI.required),project_manager:new n.NI("",n.kI.required)})}ngOnInit(){this.employeeService.GetEmployeesList().subscribe({next:e=>{e&&e.data&&(this.employees=e.data.filter(a=>a.is_manager&&1==a.is_manager),console.log(this.employees))},error:e=>{console.log("Failed to add faq:",e)}}),this.activatedRoute.paramMap.subscribe(e=>{const a=e.get("id");a&&(this.isEditMode=!0,this.projectId=a,this.projectServices.getProjectById(a).subscribe(u=>{u&&u.data&&this.setFormValues(u.data)}))})}navigateToProjectsList(){const e=this.localize.translateRoute("/dashboard/projects");this.router.navigate([e])}onSubmit(){this.projectsForm.valid&&this.projectServices.addProject({name:this.projectsForm.controls.name.value||"",project_status:this.projectsForm.controls.project_status.value||"",note:this.projectsForm.controls.note.value||"",date:this.projectsForm.controls.date.value||"",project_manager:this.projectsForm.controls.project_manager.value||""}).subscribe({next:a=>{this.navigateToProjectsList()},error:a=>{console.log("Failed to add faq:",a)}})}setFormValues(e){this.projectsForm.controls.name.setValue(e.name),this.projectsForm.controls.project_status.setValue(e.project_status),this.projectsForm.controls.note.setValue(e.note),this.projectsForm.controls.date.setValue(e.date),this.projectsForm.controls.project_manager.setValue(e.project_manager.id)}updateProject(){this.projectsForm.valid&&this.projectServices.updateProject(this.projectId,{name:this.projectsForm.controls.name.value||"",project_status:this.projectsForm.controls.project_status.value||"",note:this.projectsForm.controls.note.value||"",date:this.projectsForm.controls.date.value||"",project_manager:this.projectsForm.controls.project_manager.value||"",_method:"PATCH"}).subscribe({next:a=>{this.navigateToProjectsList()},error:a=>{console.log("Failed to add faq:",a)}})}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(f.gz),t.Y36(c.m),t.Y36(_.An),t.Y36(f.F0),t.Y36(h.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-project"]],standalone:!0,features:[t.jDz],decls:60,vars:16,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","name","name","id","name",1,"form-control","form-control-lg"],["class","ms-error",4,"ngIf"],["for","project_status",1,"form-label"],["formControlName","project_status","name","project_status","id","project_status",1,"form-select","form-select-lg"],["value","pending"],["value","delivered"],["value","active"],["for","note",1,"form-label"],["formControlName","note","name","note","id","note","rows","1",1,"form-control","form-control-lg"],["for","project_manager",1,"form-label"],["formControlName","project_manager","name","project_manager","id","project_manager",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],["for","date",1,"form-label"],[1,"input-group","input-group-lg"],["for","date",1,"input-group-text"],[1,"fa-regular","fa-calendar"],["type","date","formControlName","date","name","date","id","date",1,"form-control","form-control-lg"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"ms-error"],[3,"value"],[1,"form-group","col-12","my-3"],[1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(a,u){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11),t.YNc(18,F,2,0,"h5",12),t.YNc(19,x,2,0,"h5",12),t.TgZ(20,"form",13),t.NdJ("ngSubmit",function(){return u.onSubmit()}),t.TgZ(21,"div",14)(22,"div",15)(23,"label",16),t._uU(24,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t._UZ(25,"input",17),t.YNc(26,I,3,2,"div",18),t.qZA(),t.TgZ(27,"div",15)(28,"label",19),t._uU(29,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(30,"select",20)(31,"option",21),t._uU(32,"Pending"),t.qZA(),t.TgZ(33,"option",22),t._uU(34,"Delivered"),t.qZA(),t.TgZ(35,"option",23),t._uU(36,"Active"),t.qZA()(),t.YNc(37,w,3,2,"div",18),t.qZA(),t.TgZ(38,"div",15)(39,"label",24),t._uU(40,"\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t.qZA(),t._UZ(41,"textarea",25),t.YNc(42,D,3,2,"div",18),t.qZA(),t.TgZ(43,"div",15)(44,"label",26),t._uU(45,"\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(46,"select",27),t.YNc(47,J,2,2,"option",28),t.qZA(),t.YNc(48,k,3,2,"div",18),t.qZA(),t.TgZ(49,"div",15)(50,"label",29),t._uU(51,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(52,"div",30)(53,"label",31),t._UZ(54,"i",32),t.qZA(),t._UZ(55,"input",33),t.qZA(),t.YNc(56,S,3,2,"div",18),t.qZA(),t.YNc(57,R,5,1,"ng-container",34),t.YNc(58,K,3,1,"ng-template",null,35,t.W1O),t.qZA()()()()()()()),2&a){const b=t.MAs(59);t.xp6(10),t.Q6J("routerLink",t.VKq(14,W,t.lcZ(11,12,"/dashboard/projects"))),t.xp6(8),t.Q6J("ngIf",!u.isEditMode),t.xp6(1),t.Q6J("ngIf",u.isEditMode),t.xp6(1),t.Q6J("formGroup",u.projectsForm),t.xp6(6),t.Q6J("ngIf",u.projectsForm.controls.name.invalid&&(u.projectsForm.controls.name.dirty||u.projectsForm.controls.name.touched)),t.xp6(11),t.Q6J("ngIf",u.projectsForm.controls.project_status.invalid&&(u.projectsForm.controls.project_status.dirty||u.projectsForm.controls.project_status.touched)),t.xp6(5),t.Q6J("ngIf",u.projectsForm.controls.note.invalid&&(u.projectsForm.controls.note.dirty||u.projectsForm.controls.note.touched)),t.xp6(5),t.Q6J("ngForOf",u.employees),t.xp6(1),t.Q6J("ngIf",u.projectsForm.controls.project_manager.invalid&&(u.projectsForm.controls.project_manager.dirty||u.projectsForm.controls.project_manager.touched)),t.xp6(8),t.Q6J("ngIf",u.projectsForm.controls.date.invalid&&(u.projectsForm.controls.date.dirty||u.projectsForm.controls.date.touched)),t.xp6(1),t.Q6J("ngIf",!u.isEditMode)("ngIfElse",b)}},dependencies:[r.ez,r.sg,r.O5,f.Bz,f.rH,_.fQ,_.lO,i.L,n.UX,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".ms-error[_ngcontent-%COMP%]{color:red;margin-top:5px}"]})}return o})();const V=function(o,p){return[o,p]};function $(o,p){if(1&o&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"label",15),t._uU(4,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t._UZ(5,"input",16),t.qZA(),t.TgZ(6,"div",14)(7,"label",15),t._uU(8,"\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t.qZA(),t._UZ(9,"input",16),t.qZA(),t.TgZ(10,"div",14)(11,"label",15),t._uU(12,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t._UZ(13,"input",16),t.qZA(),t.TgZ(14,"div",14)(15,"label",15),t._uU(16,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t._UZ(17,"input",16),t.qZA(),t.TgZ(18,"div",17)(19,"label",18),t._uU(20,"\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(21,"a",19),t.ALo(22,"localize"),t._uU(23),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(5),t.s9C("value",e.project.name),t.xp6(4),t.s9C("value",e.project.note),t.xp6(4),t.s9C("value",e.project.project_status),t.xp6(4),t.s9C("value",e.project.date),t.xp6(4),t.Q6J("routerLink",t.WLB(8,V,t.lcZ(22,6,"/dashboard/employees/view-employee"),e.manager.id)),t.xp6(2),t.Oqu(e.manager.user.name)}}function G(o,p){1&o&&(t.TgZ(0,"div",12)(1,"h4",20),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const H=function(o){return[o]},X=[{path:"",component:m,children:[{path:"",component:Z,data:{breadcrumbs:[{label:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",url:"/dashboard/projects"}]}},{path:":slug",component:q,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639",url:"/dashboard/projects/add-project"}]}},{path:"add-project/:id",component:q,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639",url:"/dashboard/projects/add-project"}]}},{path:"view-project/:id",component:(()=>{class o{constructor(e,a,u){this.activatedRoute=e,this.projectService=a,this.employeeServices=u,this.projectId="",this.managerId=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const a=e.get("id");a&&(this.projectId=a,this.projectService.getProjectById(a).subscribe(u=>{u&&u.data&&(this.project=u.data,this.managerId=u.data.project_manager.id,this.getManger())}))})}getManger(){this.employeeServices.GetEmployeeById(this.managerId).subscribe({next:e=>{e&&e.data&&(this.manager=e.data)}})}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(f.gz),t.Y36(c.m),t.Y36(h.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-project"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","readonly","",1,"form-control","form-control-lg",3,"value"],[1,"form-group","col-md-6","mb-3","action"],["for","name",1,"form-label","d-block"],[1,"btn","get",3,"routerLink"],[1,"text-center"]],template:function(a,u){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,$,24,11,"div",11),t.YNc(18,G,3,0,"div",11),t.qZA()()()()),2&a&&(t.xp6(10),t.Q6J("routerLink",t.VKq(5,H,t.lcZ(11,3,"/dashboard/projects"))),t.xp6(7),t.Q6J("ngIf",u.project),t.xp6(1),t.Q6J("ngIf",!u.project))},dependencies:[r.ez,r.O5,i.L,_.fQ,_.lO,f.Bz,f.rH]})}return o})(),data:{breadcrumbs:[{label:"\u0639\u0631\u0636 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0634\u0631\u0648\u0639",url:"/dashboard/projects/view-project"}]}}]}]},8034:(O,P,l)=>{l.d(P,{$:()=>_});var r=l(6814),f=l(7700),t=l(2296),m=l(5879),i=l(4286);let _=(()=>{class n{constructor(A,j,c){this.dialogRef=A,this.data=j,this._MessagesService=c}onConfirmClick(){this.dialogRef.close(!0)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(j){return new(j||n)(m.Y36(f.so),m.Y36(f.WI),m.Y36(i.K))};static#e=this.\u0275cmp=m.Xpm({type:n,selectors:[["app-confirm-dialog"]],standalone:!0,features:[m.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(j,c){1&j&&(m.TgZ(0,"div",0)(1,"h2",1),m._uU(2),m.qZA(),m.TgZ(3,"mat-dialog-content"),m._uU(4),m.qZA(),m.TgZ(5,"mat-dialog-actions",2)(6,"button",3),m.NdJ("click",function(){return c.onCancelClick()}),m._uU(7,"\u0627\u0644\u063a\u0627\u0621"),m.qZA(),m.TgZ(8,"button",4),m.NdJ("click",function(){return c.onConfirmClick()}),m._uU(9," \u062a\u0627\u0643\u064a\u062f "),m.qZA()()()),2&j&&(m.xp6(2),m.Oqu(c.data.title),m.xp6(2),m.Oqu(c.data.message))},dependencies:[r.ez,f.Is,f.uh,f.xY,f.H8,t.ot,t.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return n})()},4414:(O,P,l)=>{l.d(P,{L:()=>j});var r=l(6814),f=l(846),t=l(8733),m=l(2181),i=l(5879);function _(c,v){1&c&&(i.TgZ(0,"li",6),i._uU(1,"/"),i.qZA())}function n(c,v){if(1&c&&(i.ynx(0),i.TgZ(1,"li",4)(2,"a",5),i.ALo(3,"localize"),i._uU(4),i.qZA()(),i.YNc(5,_,2,0,"li",3),i.BQk()),2&c){const d=v.$implicit,g=v.index,s=i.oxw().$implicit;i.xp6(2),i.Q6J("routerLink",i.lcZ(3,3,d.url)),i.xp6(2),i.Oqu(d.label),i.xp6(1),i.Q6J("ngIf",g<s.segments.length-1)}}function C(c,v){1&c&&(i.TgZ(0,"li",6),i._uU(1,"/"),i.qZA())}function A(c,v){if(1&c&&(i.ynx(0),i.YNc(1,n,6,5,"ng-container",2),i.YNc(2,C,2,0,"li",3),i.BQk()),2&c){const d=v.$implicit,g=v.index,s=i.oxw();i.xp6(1),i.Q6J("ngForOf",d.segments),i.xp6(1),i.Q6J("ngIf",g<s.breadcrumbs.length-1)}}let j=(()=>{class c{constructor(d,g){this.router=d,this.activatedRoute=g,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,m.h)(d=>d instanceof f.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(d,g="",s=[]){let Z=[],h=d;for(;h.firstChild;){h=h.firstChild;const F=h.snapshot.url.map(U=>U.path).join("/");""!==F&&(g+=`/${F}`);const x=h.snapshot.data.breadcrumbs;if(x&&x!=Z&&Array.isArray(x)&&""!==F){Z=x;const U=x.map(M=>({label:M.label,url:M.url||g}));s.push({segments:U})}}return s}ngOnDestroy(){}static#t=this.\u0275fac=function(g){return new(g||c)(i.Y36(f.F0),i.Y36(f.gz))};static#e=this.\u0275cmp=i.Xpm({type:c,selectors:[["app-breadcrumb"]],standalone:!0,features:[i.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(g,s){1&g&&(i.TgZ(0,"nav",0)(1,"ol",1),i.YNc(2,A,3,2,"ng-container",2),i.qZA()()),2&g&&(i.xp6(2),i.Q6J("ngForOf",s.breadcrumbs))},dependencies:[r.ez,r.sg,r.O5,f.Bz,f.rH,t.fQ,t.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return c})()},1818:(O,P,l)=>{l.d(P,{Q:()=>j});var r=l(5879),f=l(6223),t=l(6814);function m(c,v){if(1&c){const d=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){r.CHM(d);const s=r.oxw();return r.KtG(s.navigateTo(1))}),r._uU(2,"1"),r.qZA()()}}function i(c,v){1&c&&(r.TgZ(0,"li",2)(1,"a",9),r._uU(2,"..."),r.qZA()())}function _(c,v){if(1&c){const d=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){const Z=r.CHM(d).$implicit,h=r.oxw();return r.KtG(h.navigateTo(Z))}),r._uU(2),r.qZA()()}if(2&c){const d=v.$implicit,g=r.oxw();r.ekj("active",g.currentPage===d),r.xp6(2),r.Oqu(d)}}function n(c,v){1&c&&(r.TgZ(0,"li",2)(1,"a",9),r._uU(2,"..."),r.qZA()())}function C(c,v){if(1&c){const d=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){r.CHM(d);const s=r.oxw();return r.KtG(s.navigateTo(s.totalPages))}),r._uU(2),r.qZA()()}if(2&c){const d=r.oxw();r.xp6(2),r.Oqu(d.totalPages)}}const A={provide:f.JU,useExisting:(0,r.Gpc)(()=>j),multi:!0};let j=(()=>{class c{constructor(){this.pageChange=new r.vpe}navigateTo(d){this.pageChange.emit(d),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const d=[];if(this.totalPages<=5)for(let s=1;s<=this.totalPages;s++)d.push(s);else{let s,Z;this.currentPage<=Math.floor(2.5)?(s=1,Z=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(s=this.totalPages-5+1,Z=this.totalPages):(s=this.currentPage-Math.floor(2.5),Z=this.currentPage+Math.floor(2.5));for(let h=s;h<=Z;h++)d.push(h)}return d}static#t=this.\u0275fac=function(g){return new(g||c)};static#e=this.\u0275cmp=r.Xpm({type:c,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[r._Bn([A]),r.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(g,s){1&g&&(r.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),r.NdJ("click",function(){return s.navigateTo(s.currentPage-1)}),r.TgZ(4,"span",4),r._uU(5,"\xab"),r.qZA()()(),r.YNc(6,m,3,0,"li",5),r.YNc(7,i,3,0,"li",5),r.YNc(8,_,3,3,"li",6),r.YNc(9,n,3,0,"li",5),r.YNc(10,C,3,1,"li",5),r.TgZ(11,"li",2)(12,"a",7),r.NdJ("click",function(){return s.navigateTo(s.currentPage+1)}),r.TgZ(13,"span",4),r._uU(14,"\xbb"),r.qZA()()()()()),2&g&&(r.xp6(2),r.ekj("disabled",1===s.currentPage),r.xp6(4),r.Q6J("ngIf",s.currentPage>3),r.xp6(1),r.Q6J("ngIf",s.currentPage>4),r.xp6(1),r.Q6J("ngForOf",s.calculatePages()),r.xp6(1),r.Q6J("ngIf",s.currentPage<s.totalPages-3),r.xp6(1),r.Q6J("ngIf",s.currentPage<s.totalPages-2),r.xp6(1),r.ekj("disabled",s.currentPage===s.totalPages))},dependencies:[t.ez,t.sg,t.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return c})()}}]);