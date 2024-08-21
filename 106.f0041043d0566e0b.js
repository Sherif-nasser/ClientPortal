"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[106],{8106:(M,D,c)=>{c.r(D),c.d(D,{default:()=>z});var a=c(6814),g=c(846),e=c(5879);let p=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-main-department"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(n,r){1&n&&e._UZ(0,"router-outlet")},dependencies:[a.ez,g.lC]})}return o})();var i=c(4414),b=c(8733),h=c(6223),C=c(9862),v=c(553),A=c(5619);let u=(()=>{class o{constructor(){this.navItemsSubject=new A.X([]),this.navItems$=this.navItemsSubject.asObservable()}setNavItems(t){this.navItemsSubject.next(t)}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),f=(()=>{class o{constructor(t,n){this.http=t,this.navService=n,this.departmetsListUrl=`${v.N.url}departments-paginated`,this.allDepartmetsUrl=`${v.N.url}departments`,this.showDepartmetUrl=`${v.N.url}department/show`,this.updateDepartmetUrl=`${v.N.url}department/update`,this.createDepartmetUrl=`${v.N.url}department/create`,this.deleteDepartmentUrl=`${v.N.url}department/delete`}getDepartmentsList(t){let n=new C.LE;return t&&Object.keys(t).forEach(r=>{n=n.append(r,t[r])}),this.http.get(this.departmetsListUrl,{params:n})}getAllDepartments(t){let n=new C.LE;return t&&Object.keys(t).forEach(r=>{n=n.append(r,t[r])}),this.http.get(this.allDepartmetsUrl,{params:n})}GetDepartmentById(t){let n=new C.LE;return t&&Object.keys(t).forEach(r=>{n=n.append(r,t[r])}),this.http.get(this.showDepartmetUrl,{params:n})}AddDepartment(t,n){let r=new C.LE;n&&Object.keys(n).forEach(l=>{r=r.append(l,n[l])});const m=new FormData;return Object.keys(t).forEach(l=>{Array.isArray(t[l])?t[l].forEach((P,E)=>{m.append(`${l}[${E}]`,P)}):m.append(l,t[l])}),this.http.post(this.createDepartmetUrl,m,{params:r})}UpdateDepartment(t,n){let r=new C.LE;n&&Object.keys(n).forEach(l=>{r=r.append(l,n[l])});const m=new FormData;return Object.keys(t).forEach(l=>{Array.isArray(t[l])?t[l].forEach((P,E)=>{m.append(`${l}[${E}]`,P)}):m.append(l,t[l])}),this.http.post(this.updateDepartmetUrl,m,{params:r})}DeleteDepartment(t,n){let r=new C.LE;n&&Object.keys(n).forEach(l=>{r=r.append(l,n[l])});const m=new FormData;return Object.keys(t).forEach(l=>{Array.isArray(t[l])?t[l].forEach((P,E)=>{m.append(`${l}[${E}]`,P)}):m.append(l,t[l])}),this.http.post(this.deleteDepartmentUrl,m,{params:r})}static#e=this.\u0275fac=function(n){return new(n||o)(e.LFG(C.eN),e.LFG(u))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function d(o,x){if(1&o&&(e.ynx(0),e.TgZ(1,"div",18)(2,"button",24),e._UZ(3,"i",25),e._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u062c\u062f\u064a\u062f "),e.qZA(),e.TgZ(5,"a",26),e.ALo(6,"localize"),e._uU(7,"\u0627\u0644\u063a\u0627\u0621"),e.qZA()(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("disabled",!t.departmentForm.valid),e.xp6(3),e.Q6J("routerLink",e.lcZ(6,2,"/dashboard/departments"))}}function _(o,x){if(1&o){const t=e.EpF();e.TgZ(0,"div",18)(1,"button",27),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.updateDepartment())}),e._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645 "),e.qZA(),e.TgZ(3,"a",26),e.ALo(4,"localize"),e._uU(5,"\u0627\u0644\u063a\u0627\u0621"),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.departmentForm.valid),e.xp6(2),e.Q6J("routerLink",e.lcZ(4,2,"/dashboard/departments"))}}let s=(()=>{class o{constructor(t,n,r,m){this.activatedRoute=t,this.desService=n,this.localize=r,this.router=m,this.isEditMode=!1,this.departmentId="",this.departmentForm=new h.cw({name:new h.NI("",h.kI.required),description:new h.NI("",h.kI.required)}),this.loading=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const n=t.get("id");n&&(this.isEditMode=!0,this.departmentId=n,this.getDepartment(n))})}getDepartment(t){this.loading=!0,this.desService.GetDepartmentById({department_id:t}).subscribe({next:r=>{this.departmentDetails=r.data,this.setFormVluesEditMode(this.departmentDetails),console.log(this.departmentDetails),this.loading=!1},error:r=>{this.loading=!1,console.error("There was an error!",r)}})}setFormVluesEditMode(t){this.departmentForm.patchValue({name:t.name,description:t.description})}navigateToDepartmentsList(){const t=this.localize.translateRoute("/dashboard/departments");this.router.navigate([t])}updateDepartment(){this.departmentForm.valid&&(this.loading=!0,this.desService.UpdateDepartment({department_id:this.departmentDetails.id,name:this.departmentForm.controls.name.value,description:this.departmentForm.controls.description.value}).subscribe({next:n=>{console.log(n),this.loading=!1,this.navigateToDepartmentsList()},error:n=>{this.loading=!1,console.error("There was an error!",n)}}))}onSubmit(){this.departmentForm.valid&&(this.loading=!0,this.desService.AddDepartment({name:this.departmentForm.controls.name.value,description:this.departmentForm.controls.description.value}).subscribe({next:n=>{this.loading=!1,this.navigateToDepartmentsList()},error:n=>{this.loading=!1,console.error("There was an error!",n)}}))}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(g.gz),e.Y36(f),e.Y36(b.An),e.Y36(g.F0))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-department"]],standalone:!0,features:[e.jDz],decls:34,vars:6,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","name","name",1,"form-control","form-control-lg"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],[1,"depDescription"],["type","text","formControlName","description","name","description"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"btn","mb-sm-0","mb-2",3,"routerLink"],["type","button",1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled","click"]],template:function(n,r){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"a",6),e.ALo(11,"localize"),e._uU(12,"\u0631\u062c\u0648\u0639 "),e._UZ(13,"i",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"form",13),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(20,"div",14)(21,"div",15)(22,"label",16),e._uU(23,"\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645"),e.qZA(),e._UZ(24,"input",17),e.qZA(),e.TgZ(25,"div",18)(26,"label",19),e._uU(27,"\u0648\u0635\u0641 \u0627\u0644\u0642\u0633\u0645"),e.qZA(),e.TgZ(28,"ul",20)(29,"li"),e._UZ(30,"input",21),e.qZA()()(),e.YNc(31,d,8,4,"ng-container",22),e.YNc(32,_,6,4,"ng-template",null,23,e.W1O),e.qZA()()()()()()()()),2&n){const m=e.MAs(33);e.xp6(10),e.Q6J("routerLink",e.lcZ(11,4,"/dashboard/departments")),e.xp6(9),e.Q6J("formGroup",r.departmentForm),e.xp6(12),e.Q6J("ngIf",!r.isEditMode)("ngIfElse",m)}},dependencies:[a.ez,a.O5,i.L,g.Bz,g.rH,b.fQ,b.lO,h.u5,h._Y,h.Fj,h.JJ,h.JL,h.UX,h.sg,h.u]})}return o})();var T=c(1818),Z=c(8034),y=c(5123),O=c(7700);const U=function(o,x){return[o,x]};function w(o,x){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td",38)(9,"a",39),e.ALo(10,"localize"),e._UZ(11,"i",40),e._uU(12," \u0639\u0631\u0636"),e.qZA()()()),2&o){const t=x.$implicit,n=x.index;e.xp6(2),e.Oqu(n+1),e.xp6(3),e.AsE("",t.first_name," ",t.last_name,""),e.xp6(2),e.Oqu(t.jobTitle),e.xp6(2),e.Q6J("routerLink",e.WLB(7,U,e.lcZ(10,5,"/dashboard/employees/view-employee"),t.id))}}function L(o,x){1&o&&(e.TgZ(0,"tr")(1,"td",41),e._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),e.qZA()())}function F(o,x){if(1&o){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",25)(4,"div",26)(5,"h5"),e._uU(6),e.qZA(),e.TgZ(7,"p",27),e._uU(8),e.qZA()(),e.TgZ(9,"div",28)(10,"a",29),e.ALo(11,"localize"),e._uU(12," \u0639\u0631\u0636 \u0645\u0648\u0638\u0641\u064a\u0646 \u0627\u0644\u0642\u0633\u0645 "),e.qZA(),e.TgZ(13,"a",30),e.ALo(14,"localize"),e._UZ(15,"i",31),e._uU(16," \u062a\u0639\u062f\u064a\u0644"),e.qZA(),e.TgZ(17,"button",32),e.NdJ("click",function(){const m=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.deleteDepartment(m.id,m.name))}),e._UZ(18,"i",33),e._uU(19," \u062d\u0630\u0641 "),e.qZA()()()(),e.TgZ(20,"div",34)(21,"table",35)(22,"tbody"),e.YNc(23,w,13,10,"tr",36),e.YNc(24,L,3,0,"tr",37),e.qZA()()()()()}if(2&o){const t=x.$implicit,n=e.oxw();e.xp6(6),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.Q6J("routerLink",e.WLB(10,U,e.lcZ(11,6,"/dashboard/departments/view-department"),t.id)),e.xp6(3),e.Q6J("routerLink",e.WLB(13,U,e.lcZ(14,8,"/dashboard/departments/add-department"),t.id)),e.xp6(10),e.Q6J("ngForOf",n.employees[t.name]),e.xp6(1),e.Q6J("ngIf",0===n.departments.length&&!n.loading)}}function I(o,x){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",23),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8,"Tech"),e.qZA(),e.TgZ(9,"td"),e._uU(10,"UI UX designer"),e.qZA(),e.TgZ(11,"td"),e._uU(12,"01140093466"),e.qZA(),e.TgZ(13,"td",24)(14,"button",25),e.NdJ("click",function(){const m=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.deleteEmployee(m.id,m.first_name+" "+m.last_name))}),e._UZ(15,"i",26),e._uU(16," \u062d\u0630\u0641 "),e.qZA()()()}if(2&o){const t=x.$implicit,n=x.index;e.xp6(2),e.Oqu(n+1),e.xp6(4),e.AsE("",t.first_name," ",t.last_name,"")}}function N(o,x){1&o&&(e.TgZ(0,"div",27)(1,"span",28),e._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0648\u0638\u0641\u064a\u0646"),e.qZA()())}const z=[{path:"",component:p,children:[{path:"",component:(()=>{class o{constructor(t,n,r){this.desService=t,this.employeeService=n,this.dialog=r,this.departments=[],this.employees=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getAllDepartments(),this.getAllEmployees()}getAllDepartments(t=1){this.loading=!0,this.desService.getDepartmentsList({page:t}).subscribe({next:n=>{this.departments=n.data,console.log(this.departments),this.currentPage=n.current_page,this.totalPages=n.last_page,this.loading=!1},error:n=>{this.loading=!1,console.error("There was an error!",n)}})}getAllEmployees(t=1){this.loading=!0,this.employeeService.GetEmployeesList({page:t}).subscribe({next:n=>{this.employees=n.data,console.log(this.employees),this.loading=!1},error:n=>{this.loading=!1,console.error("There was an error!",n)}})}deleteDepartment(t,n){const r={department_id:t};this.dialog.open(Z.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(l=>{l&&this.desService.DeleteDepartment(r).subscribe({next:P=>{this.getAllDepartments()},error:P=>{console.error("There was an error deleting the admin!",P)}})})}onPageChange(t){this.getAllDepartments(t)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(f),e.Y36(y.M),e.Y36(O.uw))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-departments-list"]],standalone:!0,features:[e.jDz],decls:32,vars:6,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-8"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"row","g-3"],["class","col-lg-6",4,"ngFor","ngForOf"],[1,"row"],[3,"currentPage","totalPages","pageChange"],[1,"col-lg-6"],[1,"card"],[1,"card-body","p-2","px-3"],[1,"row","py-2"],[1,"col-5"],[1,"mb-0"],[1,"col-7","action","text-end"],[1,"btn","showAll","text-decoration-none","me-2",3,"routerLink"],[1,"btn","edit","me-2",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete","bg-danger",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"action","text-center"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],["colspan","6",1,"text-center"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA()(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),e.ALo(16,"localize"),e._UZ(17,"i",12),e._uU(18," \u0623\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062c\u062f\u064a\u062f "),e.qZA()(),e.TgZ(19,"div",13),e._UZ(20,"input",14),e.qZA(),e.TgZ(21,"div",15)(22,"button",16),e._UZ(23,"i",17),e._uU(24," \u062a\u0635\u0646\u064a\u0641 "),e.qZA()()()(),e.TgZ(25,"div",8)(26,"div",18),e.YNc(27,F,25,16,"div",19),e.qZA()(),e.TgZ(28,"div",8)(29,"div",20)(30,"div",6)(31,"pagination",21),e.NdJ("pageChange",function(l){return r.onPageChange(l)}),e.qZA()()()()()()()()),2&n&&(e.xp6(15),e.Q6J("routerLink",e.lcZ(16,4,"/dashboard/departments/add-department")),e.xp6(12),e.Q6J("ngForOf",r.departments),e.xp6(4),e.Q6J("currentPage",r.currentPage)("totalPages",r.totalPages))},dependencies:[a.ez,a.sg,a.O5,i.L,g.Bz,g.rH,b.fQ,b.lO,h.u5,T.Q]})}return o})(),data:{breadcrumbs:[{label:"\u0627\u0644\u0623\u0642\u0633\u0627\u0645",url:"/dashboard/departments"}]}},{path:":slug",component:s,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645",url:"/dashboard/departments/add-department"}]}},{path:"add-department/:id",component:s,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645"}]}},{path:"view-department/:id",component:(()=>{class o{constructor(t,n,r,m,l,P){this.activatedRoute=t,this.desService=n,this.localize=r,this.router=m,this.dialog=l,this.employeeService=P,this.employees=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const n=t.get("id");n&&(this.departmentId=n,this.getAllEmployees())})}getAllEmployees(){this.loading=!0,this.employeeService.GetEmployeesList().subscribe({next:t=>{this.employees=t.data.filter(n=>n.department&&n.department.id==this.departmentId),this.loading=!1},error:t=>{this.loading=!1,console.error("There was an error!",t)}})}viewEmployee(t){if(t){const n=this.localize.translateRoute("/dashboard/employees/view-employee");this.router.navigate([n,t.id])}else console.error("No employee to view")}deleteEmployee(t,n){this.dialog.open(Z.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(m=>{m&&this.employeeService.DeleteEmployee(t.toString()).subscribe({next:l=>{this.getAllEmployees()},error:l=>{console.error("There was an error deleting the admin!",l)}})})}onPageChange(t){}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(g.gz),e.Y36(f),e.Y36(b.An),e.Y36(g.F0),e.Y36(O.uw),e.Y36(y.M))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-department"]],standalone:!0,features:[e.jDz],decls:44,vars:5,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-10","col-lg-9","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["class","card-body p-0 text-center",4,"ngIf"],["src","./assets/images/Face1.png","width","50","alt",""],[1,"action","text-center"],[1,"btn","delete","bg-danger",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"card-body","p-0","text-center"],["colspan","6",1,"",2,"color","white","font-size","2rem"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0645\u0648\u0638\u0641\u064a\u0646 \u0627\u0644\u0642\u0633\u0645"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"a",6),e.ALo(11,"localize"),e._uU(12,"\u0631\u062c\u0648\u0639 "),e._UZ(13,"i",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"div",13),e._UZ(20,"input",14),e.qZA(),e.TgZ(21,"div",15)(22,"button",16),e._UZ(23,"i",17),e._uU(24," \u062a\u0635\u0646\u064a\u0641 "),e.qZA()()()(),e.TgZ(25,"div",18)(26,"div",19)(27,"table",20)(28,"thead")(29,"tr")(30,"th"),e._uU(31,"\u062a\u0631\u0642\u064a\u0645"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"\u0627\u0644\u0642\u0633\u0645"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"\u062f\u0648\u0631 \u0627\u0644\u0645\u0648\u0638\u0641"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),e.qZA(),e._UZ(40,"th"),e.qZA()(),e.TgZ(41,"tbody"),e.YNc(42,I,17,3,"tr",21),e.qZA()()()(),e.YNc(43,N,3,0,"div",22),e.qZA()()()()),2&n&&(e.xp6(10),e.Q6J("routerLink",e.lcZ(11,3,"/dashboard/departments")),e.xp6(32),e.Q6J("ngForOf",r.employees),e.xp6(1),e.Q6J("ngIf",0===r.employees.length&&!r.loading))},dependencies:[a.ez,a.sg,a.O5,i.L,g.Bz,g.rH,b.fQ,b.lO,h.u5]})}return o})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645"}]}}]}]},8034:(M,D,c)=>{c.d(D,{$:()=>b});var a=c(6814),g=c(7700),e=c(2296),p=c(5879),i=c(4286);let b=(()=>{class h{constructor(v,A,u){this.dialogRef=v,this.data=A,this._MessagesService=u}onConfirmClick(){this.dialogRef.close(!0)}onCancelClick(){this.dialogRef.close(!1)}static#e=this.\u0275fac=function(A){return new(A||h)(p.Y36(g.so),p.Y36(g.WI),p.Y36(i.K))};static#t=this.\u0275cmp=p.Xpm({type:h,selectors:[["app-confirm-dialog"]],standalone:!0,features:[p.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(A,u){1&A&&(p.TgZ(0,"div",0)(1,"h2",1),p._uU(2),p.qZA(),p.TgZ(3,"mat-dialog-content"),p._uU(4),p.qZA(),p.TgZ(5,"mat-dialog-actions",2)(6,"button",3),p.NdJ("click",function(){return u.onCancelClick()}),p._uU(7,"\u0627\u0644\u063a\u0627\u0621"),p.qZA(),p.TgZ(8,"button",4),p.NdJ("click",function(){return u.onConfirmClick()}),p._uU(9," \u062a\u0627\u0643\u064a\u062f "),p.qZA()()()),2&A&&(p.xp6(2),p.Oqu(u.data.title),p.xp6(2),p.Oqu(u.data.message))},dependencies:[a.ez,g.Is,g.uh,g.xY,g.H8,e.ot,e.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return h})()},4414:(M,D,c)=>{c.d(D,{L:()=>A});var a=c(6814),g=c(846),e=c(8733),p=c(2181),i=c(5879);function b(u,f){1&u&&(i.TgZ(0,"li",6),i._uU(1,"/"),i.qZA())}function h(u,f){if(1&u&&(i.ynx(0),i.TgZ(1,"li",4)(2,"a",5),i.ALo(3,"localize"),i._uU(4),i.qZA()(),i.YNc(5,b,2,0,"li",3),i.BQk()),2&u){const d=f.$implicit,_=f.index,s=i.oxw().$implicit;i.xp6(2),i.Q6J("routerLink",i.lcZ(3,3,d.url)),i.xp6(2),i.Oqu(d.label),i.xp6(1),i.Q6J("ngIf",_<s.segments.length-1)}}function C(u,f){1&u&&(i.TgZ(0,"li",6),i._uU(1,"/"),i.qZA())}function v(u,f){if(1&u&&(i.ynx(0),i.YNc(1,h,6,5,"ng-container",2),i.YNc(2,C,2,0,"li",3),i.BQk()),2&u){const d=f.$implicit,_=f.index,s=i.oxw();i.xp6(1),i.Q6J("ngForOf",d.segments),i.xp6(1),i.Q6J("ngIf",_<s.breadcrumbs.length-1)}}let A=(()=>{class u{constructor(d,_){this.router=d,this.activatedRoute=_,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,p.h)(d=>d instanceof g.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(d,_="",s=[]){let T=[],Z=d;for(;Z.firstChild;){Z=Z.firstChild;const y=Z.snapshot.url.map(U=>U.path).join("/");""!==y&&(_+=`/${y}`);const O=Z.snapshot.data.breadcrumbs;if(O&&O!=T&&Array.isArray(O)&&""!==y){T=O;const U=O.map(w=>({label:w.label,url:w.url||_}));s.push({segments:U})}}return s}ngOnDestroy(){}static#e=this.\u0275fac=function(_){return new(_||u)(i.Y36(g.F0),i.Y36(g.gz))};static#t=this.\u0275cmp=i.Xpm({type:u,selectors:[["app-breadcrumb"]],standalone:!0,features:[i.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(_,s){1&_&&(i.TgZ(0,"nav",0)(1,"ol",1),i.YNc(2,v,3,2,"ng-container",2),i.qZA()()),2&_&&(i.xp6(2),i.Q6J("ngForOf",s.breadcrumbs))},dependencies:[a.ez,a.sg,a.O5,g.Bz,g.rH,e.fQ,e.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return u})()},1818:(M,D,c)=>{c.d(D,{Q:()=>A});var a=c(5879),g=c(6223),e=c(6814);function p(u,f){if(1&u){const d=a.EpF();a.TgZ(0,"li",2)(1,"a",8),a.NdJ("click",function(){a.CHM(d);const s=a.oxw();return a.KtG(s.navigateTo(1))}),a._uU(2,"1"),a.qZA()()}}function i(u,f){1&u&&(a.TgZ(0,"li",2)(1,"a",9),a._uU(2,"..."),a.qZA()())}function b(u,f){if(1&u){const d=a.EpF();a.TgZ(0,"li",2)(1,"a",8),a.NdJ("click",function(){const T=a.CHM(d).$implicit,Z=a.oxw();return a.KtG(Z.navigateTo(T))}),a._uU(2),a.qZA()()}if(2&u){const d=f.$implicit,_=a.oxw();a.ekj("active",_.currentPage===d),a.xp6(2),a.Oqu(d)}}function h(u,f){1&u&&(a.TgZ(0,"li",2)(1,"a",9),a._uU(2,"..."),a.qZA()())}function C(u,f){if(1&u){const d=a.EpF();a.TgZ(0,"li",2)(1,"a",8),a.NdJ("click",function(){a.CHM(d);const s=a.oxw();return a.KtG(s.navigateTo(s.totalPages))}),a._uU(2),a.qZA()()}if(2&u){const d=a.oxw();a.xp6(2),a.Oqu(d.totalPages)}}const v={provide:g.JU,useExisting:(0,a.Gpc)(()=>A),multi:!0};let A=(()=>{class u{constructor(){this.pageChange=new a.vpe}navigateTo(d){this.pageChange.emit(d),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const d=[];if(this.totalPages<=5)for(let s=1;s<=this.totalPages;s++)d.push(s);else{let s,T;this.currentPage<=Math.floor(2.5)?(s=1,T=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(s=this.totalPages-5+1,T=this.totalPages):(s=this.currentPage-Math.floor(2.5),T=this.currentPage+Math.floor(2.5));for(let Z=s;Z<=T;Z++)d.push(Z)}return d}static#e=this.\u0275fac=function(_){return new(_||u)};static#t=this.\u0275cmp=a.Xpm({type:u,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[a._Bn([v]),a.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(_,s){1&_&&(a.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),a.NdJ("click",function(){return s.navigateTo(s.currentPage-1)}),a.TgZ(4,"span",4),a._uU(5,"\xab"),a.qZA()()(),a.YNc(6,p,3,0,"li",5),a.YNc(7,i,3,0,"li",5),a.YNc(8,b,3,3,"li",6),a.YNc(9,h,3,0,"li",5),a.YNc(10,C,3,1,"li",5),a.TgZ(11,"li",2)(12,"a",7),a.NdJ("click",function(){return s.navigateTo(s.currentPage+1)}),a.TgZ(13,"span",4),a._uU(14,"\xbb"),a.qZA()()()()()),2&_&&(a.xp6(2),a.ekj("disabled",1===s.currentPage),a.xp6(4),a.Q6J("ngIf",s.currentPage>3),a.xp6(1),a.Q6J("ngIf",s.currentPage>4),a.xp6(1),a.Q6J("ngForOf",s.calculatePages()),a.xp6(1),a.Q6J("ngIf",s.currentPage<s.totalPages-3),a.xp6(1),a.Q6J("ngIf",s.currentPage<s.totalPages-2),a.xp6(1),a.ekj("disabled",s.currentPage===s.totalPages))},dependencies:[e.ez,e.sg,e.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return u})()}}]);