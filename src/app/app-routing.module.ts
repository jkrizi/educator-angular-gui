import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VaultComponent} from "./vault/vault.component";
import {QuestionFormComponent} from "./vault/question-form/question-form.component";
import {EngineComponent} from "./engine/engine.component";
import {NotFoundComponent} from "./common/error/not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {
    path: "vault", component: VaultComponent, children: [
      {path: "editor/:id", component: QuestionFormComponent},
    ]
  },
  {path: "engine", component: EngineComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "/not-found"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
