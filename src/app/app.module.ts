import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {VaultComponent} from './vault/vault.component';
import {EngineComponent} from './engine/engine.component';
import {QuestionComponent} from './vault/question/question.component';
import {QuestionFormComponent} from './vault/question-form/question-form.component';
import {VaultFilterComponent} from './vault/vault-filter/vault-filter.component';
import {TemplateSelectorComponent} from './engine/template-selector/template-selector.component';
import {TestFormComponent} from './engine/test-form/test-form.component';
import {TagsComponent} from './vault/question-form/tags/tags.component';
import {WorkspaceComponent} from './layout/workspace/workspace.component';
import {NotFoundComponent} from './common/error/not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import { AnswerComponent } from './vault/question-form/answer/answer.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VaultComponent,
    EngineComponent,
    QuestionComponent,
    QuestionFormComponent,
    VaultFilterComponent,
    TemplateSelectorComponent,
    TestFormComponent,
    TagsComponent,
    WorkspaceComponent,
    NotFoundComponent,
    HomeComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
