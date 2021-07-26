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
  ],
  imports: [BrowserModule],
  providers: [LoggerServiceProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
