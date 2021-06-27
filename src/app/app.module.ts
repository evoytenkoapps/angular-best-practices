import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowMockUsageComponent } from './components/show-mock-usage/show-mock-usage.component';
import { LoggerServiceProvider } from './providers/logger-service.provider';
import { TslintWrongTakeuntilRuleComponent } from './components/tslint-wrong-takeuntil-rule/tslint-wrong-takeuntil-rule.component';
import { TrackByExampleComponent } from './components/track-by-example/track-by-example.component';

@NgModule({
  declarations: [AppComponent, ShowMockUsageComponent, TslintWrongTakeuntilRuleComponent, TrackByExampleComponent],
  imports: [BrowserModule],
  providers: [LoggerServiceProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
