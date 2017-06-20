import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { FeedComponent } from './components/feed/feed.component';
import { ArticleCellComponent } from './components/article-cell/article-cell.component';
import { ArticleReadTimeComponent } from './components/article-read-time/article-read-time.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AuthenticationService } from "./services/authentication.service";
import { FeedService } from "./services/feed.service";
import { SpinnerService } from "./services/spinner.service";

export * from './sample.component';
export * from './components/feed/feed.component';
export * from './components/article-cell/article-cell.component';
export * from './components/article-read-time/article-read-time.component';
export * from './components/spinner/spinner.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    FeedComponent,
    ArticleCellComponent,
    ArticleReadTimeComponent,
    SpinnerComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    FeedComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class ArkeraComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ArkeraComponentsModule,
      providers: [ SampleService, SpinnerService, AuthenticationService, FeedService ]
    };
  }
}
