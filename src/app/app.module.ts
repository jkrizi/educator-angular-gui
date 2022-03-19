import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {VaultComponent} from './vault/vault.component';
import {EngineComponent} from './engine/engine.component';
import {QuestionComponent} from './vault/question/question.component';
import {QuestionFormComponent} from './vault/question-form/question-form.component';
import {VaultFilterComponent} from './vault/vault-filter/vault-filter.component';
import {TemplateSelectorComponent} from './engine/template-selector/template-selector.component';
import {TestFormComponent} from './engine/test-form/test-form.component';
import {TagsComponent} from './common/tags/tags.component';
import {WorkspaceComponent} from './layout/workspace/workspace.component';
import {QuestionListComponent} from './vault/question-form/question-list/question-list.component';
import {FormsModule} from "@angular/forms";
import {NotFoundComponent} from './common/error/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';

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
    QuestionListComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
