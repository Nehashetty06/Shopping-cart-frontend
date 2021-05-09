import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  // exports: [HeaderModule],
})
export class SharedModule {}
