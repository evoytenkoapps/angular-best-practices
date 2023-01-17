import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowMockUsageComponent } from './components/show-mock-usage/show-mock-usage.component';
import { LoggerServiceProvider } from './providers/logger-service.provider';
import { TslintWrongTakeuntilRuleComponent } from './components/tslint-wrong-takeuntil-rule/tslint-wrong-takeuntil-rule.component';
import { TrackByExampleComponent } from './components/track-by-example/track-by-example.component';
import { DisplayBlockByDefaultComponent } from './components/display-block-by-default/display-block-by-default';
import { ChangeDetectionByDefaultComponent } from './components/change-detection-by-default/change-detection-by-default.component';
import { SmartComponent } from './components/smart-dumb-concept/_smart/smart.component';
import { DumbOneComponent } from './components/smart-dumb-concept/_dumb/dumb-one/dumb-one.component';
import { DumbTwoComponent } from './components/smart-dumb-concept/_dumb/dumb-two/dumb-two.component';
import { DumbThreeComponent } from './components/smart-dumb-concept/_dumb/dumb-three/dumb-three.component';
import { DumbFourComponent } from './components/smart-dumb-concept/_dumb/dumb-four/dumb-four.component';
import { DumbFiveComponent } from './components/smart-dumb-concept/_dumb/dumb-five/dumb-five.component';
import { UserInfoComponent } from './components/project-folder-sturcture/user-info/_components/_smart/user-info/user-info.component';
import { UserInfoDetailsComponent } from './components/project-folder-sturcture/user-info/_components/_dumb/user-info-details/user-info-details.component';
import { PropertyChangesDetectionComponent } from './components/input-changes-detection/property-changes-detection/property-changes-detection.component';
import { PropertyChangeComponent } from './components/input-changes-detection/property-change/property-change.component';
import { FormsModule } from '@angular/forms';
import { UnsubscribeComponent } from './components/how-to-unsubscribe/unsubscribe.component';
import { DataFacadeModule } from './data-facade/data-facade.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogServiceModule } from './dialog-as-service/dialog-service.module';
import { HttpProxyModule } from './components/http-proxy-example/http-proxy.module';
import {UnsubscribeService} from "./service/unsubscribe.service";

@NgModule({
  declarations: [
    AppComponent,
    ShowMockUsageComponent,
    TslintWrongTakeuntilRuleComponent,
    TrackByExampleComponent,
    DisplayBlockByDefaultComponent,
    ChangeDetectionByDefaultComponent,
    SmartComponent,
    DumbOneComponent,
    DumbTwoComponent,
    DumbThreeComponent,
    DumbFourComponent,
    DumbFiveComponent,
    UserInfoComponent,
    UserInfoDetailsComponent,
    PropertyChangesDetectionComponent,
    PropertyChangeComponent,
    UnsubscribeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataFacadeModule,
    DataFacadeModule,
    BrowserAnimationsModule,
    DialogServiceModule,
    HttpProxyModule,
  ],
  providers: [LoggerServiceProvider, UnsubscribeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
